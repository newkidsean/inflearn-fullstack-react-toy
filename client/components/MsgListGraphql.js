import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { fetcher, QueryKeys } from '../queryClient';
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from 'react-query';
import { CREATE_MESSAGE, GET_MESSAGES, UPDATE_MESSAGE, DELETE_MESSAGE } from '../graphql/message';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

// smsgs 는 SSR 로 구현되어 들어오는 messages props
const MsgListGraphql = ({ smsgs, users }) => {
  console.log('MsgListGraphql :', smsgs);
  console.log('MsgListGraphql :', users);

  const client = useQueryClient();

  // return null;
  // query 를 통해 userId 를 가지고 옴
  const { query } = useRouter();
  // windows 의 경우 대문자를 자동으로 소문자로 변환하는 경우가 있어서
  // userId 를 userId, userid 두 가지 경우를 모두 넣어 주어서
  // windows가 임의로 Id => id 로 바꾸는 경우도 대응
  const userId = query.userId || query.userid || '';
  console.log({ userId });
  // const [msgs, setMsgs] = useState(originalMsgs);
  // const [msgs, setMsgs] = useState([]);
  // 위에는 CRS 이었지만 SSR 로 바꾸면서 props 로 받은 메시지들을 setState 해 준다
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);

  // 아래 세 줄은 무한 스크롤을 위한 용도
  // const [hasNext, setHasNext] = useState(true);
  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl)

  // mutation 은 text 를 입력받아서 fetcher 함수에 text와 userId 를 variables 로 넣어서 날려주고,
  // 성공하면 반환되는 메시지를 react-query 가 관리하는 cache 에 저장하도록 한다
  const { mutate: onCreate } = useMutation(({ text }) => fetcher(CREATE_MESSAGE, { text, userId }), {
    onSuccess: ({ createMessage }) => {
      // client 에 접근해서 setQueryData 라는 메소드로 저장을 하는데,
      // 쿼리키 를 통해 어떤 데이타에 접근하려는지 찾고,
      client.setQueryData(QueryKeys.MESSAGES, old => {
        // 저장값은 useQuery 의 응답 형태. 즉, data: { messages : [...] }
        // 이런 형태로 리턴해 주면 된다
        return {
          messages: [...createMessage, ...old.messages]
        }
      })
    }
  });

  const { mutate: onUpdate } = useMutation(({ text, id }) => fetcher(UPDATE_MESSAGE, { text, id, userId }), {
    onSuccess: ({ updateMessage }) => {
      doneEdit()
      client.setQueryData(QueryKeys.MESSAGES, old => {
        const { pageIndex, msgIndex } = findTargetMsgIndex(old.pages, updateMessage.id)
        if (pageIndex < 0 || msgIndex < 0) return old
        const newMsgs = getNewMessages(old)
        newMsgs.pages[pageIndex].messages.splice(msgIndex, 1, updateMessage)
        return newMsgs
      })
    },
  })


  const doneEdit = () => setEditingId(null);

  const { mutate: onDelete } = useMutation(id => fetcher(UPDATE_MESSAGE, { id, userId }), {
    onSuccess: ({ deleteMessage: deletedId }) => {
      client.setQueryData(QueryKeys.MESSAGES, old => {
        const targetIndex = old.messages.findIndex(msg => msg.id === deletedId);
        if (targetIndex < 0) return old;
        const newMsgs = [...old.messages];
        newMsgs.splice(targetIndex, 1);
        return { messages: newMsgs };
      })
      doneEdit()
    }
  });

  // react-query 의 useQuery 를 사용할 때 query key 를 사용하지 않고, options 만으로도 쿼리를 날릴 수 있지만,
  // graphQL 과 같이 사용하려면 query key 를 꼭 같이 사용해야 한다

  // 두 번째 인자는 서버와 통신을 하는 FETCHER 함수에 원하는 데이타 구조인 GET_MESSAGES 를 인자로 담아서 날려야 하는데,
  // 화살표 함수를 이용하는 이유는 이미 함수가 실행된 결과를 useQuery 에 넣어주는 꼴이기 때문에
  // 화살표 함수로 감싸서 필요할 때(그때 그때) 호출이 되도록 해야 한다.
  // 즉 함수의 결과값이 아닌, 함수 자체가 전달되도록 해야 함

  // 여기서 props 로 받은 smsgs 는 SSR을 통해 날아온 정보이고, 하이드레이션 세팅을 통해 일단 캐시에 저장되어 있다.
  // 아래 쿼리는 앱이 실행되면 실행되어 쿼리를 받아오지만, 이미 한번 SSR 을 통해 캐시에 저장되어 있는 데이터가 있기 때문에
  // 둘이 비교해서 차이가 없다면 굳이 새 데이터로 바꿔치기 하지 않고, 기존에 저장되어 있는 데이터를 반환하게 된다
  // const { data, error, isError } = useQuery(QueryKeys.MESSAGES, () => fetcher(GET_MESSAGES));


  const { data, error, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    QueryKeys.MESSAGES,
    ({ pageParam = '' }) =>
      // console.log({ res });
      // console 로 res 를 찍어보면 아래와 같다
      // res:
      // meta: undefined
      // pageParam: undefined
      // queryKey: ['MESSAGES']
      fetcher(GET_MESSAGES, { cursor: pageParam }),
    {
      // getNextPageParam 에 들어오는 res 를 콘솔로 찍어보면 messages: [{}, {}] 이 들어온다
      // 즉, 응답받은 messages 배열이 들어오기 때문에 리턴값은 제일 마지막 메시지의 id 를 리턴해 줌으로써
      // 해당 id 값을 커서 로 이용할 수 있게 한다
      // console.log({ res });
      getNextPageParam: ({ messages }) => {
        return messages?.[messages.length - 1]?.id
      },
    },
  );

  // infinity scroll 적용 전
  useEffect(() => {
    if (!data?.messages) return;
    console.log('msgs changed');
    setMsgs(data.messages);
  }, [data?.messages]);

  // infinity scroll 적용 후
  // 왜냐하면 인피니티 스크롤은 설정한 page 단위별로 데이터가 들어오기 때문
  useEffect(() => {
    if (!data?.pages) return;
    // data.pages 는 아래와 같은 구조로 들어오기 때문에 page 변화에 따라 msgs 를 업데이트 해 주려면
    // flatten 작업이 필요하다
    // const data.pages = [{ messages: [...]}, { messages: [...]}] => [...]
    const mergedMsgs = data.pages.flatMap(page => page.messages);
    setMsgs(mergedMsgs);
  }, [data?.pages]);

  if (isError) {
    console.error(error);
    return null;
  };

  // infinity scroll 적용 전
  // useEffect(() => {
  //   if (intersecting && hasNext) getMessages();
  // }, [intersecting]);

  // infinity scroll 적용 후
  useEffect(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage]);

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="messages">{
        msgs.map(msg =>
          <MsgItem
            key={msg.id}
            {...msg}
            onUpdate={onUpdate}
            onDelete={() => onDelete(msg.id)}
            startEdit={() => setEditingId(msg.id)}
            isEditing={editingId === msg.id}
            myId={userId}
            user={users.find(user => user.id === msg.userId)}
          />)
      }</ul>
      <div ref={fetchMoreEl} />
    </>
  )
}

export default MsgListGraphql;