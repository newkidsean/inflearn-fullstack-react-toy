import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import fetcher from '../fetcher';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

// const UserIds = ['roy', 'jay'];
// const getRandomeUserId = () => UserIds[Math.round(Math.random())];

// server setting 전에는 mock 데이터를 사용하기 때문에 아래 코드가 필요하지만
// 서버를 만들고 난 이후에는 필요 없으므로 주석처리
// const originalMsgs = Array(50).fill(0).map((_, i) => ({
//   id: i + 1,
//   userId: getRandomeUserId(),
//   timestamp: 1234567890123 + i * 1000 * 60,
//   text: `${i + 1} mock text`
// })).reverse();
// const msgs = [
//   {
//     id:1,
//     userId: getRandomeUserId(),
//     timestamp: 1234567890123,
//     text: '1 mock text'
//   },
// ]

// console.log(JSON.stringify(originalMsgs));

// smsgs 는 SSR 로 구현되어 들어오는 messages props
const MsgList = ({ smsgs, users }) => {
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
  const [hasNext, setHasNext] = useState(true);
  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);

  // 서버 연결 전에는 아래와 같이 뉴메세지 객체를 만들어서 useState 에 넣어주어야 했지만,
  // 서버 연결 후에는 직접 데이터를 통신하는 방식으로 구현하면 된다.
  // const onCreate = text => {
  //   const newMsg = {
  //     id: msgs.length + 1,
  //     userId: getRandomeUserId(),
  //     timestamp: Date.now(),
  //     text: `${msgs.length + 1} ${text}`
  //   };
  //   setMsgs(msgs => ([newMsg, ...msgs]));
  // }
  const onCreate = async text => {
    const newMsg = await fetcher('post', '/messages', { text, userId });
    if (!newMsg) throw Error('Somwthing wrong...')
    setMsgs(msgs => ([newMsg, ...msgs]));
  }
  // update 도 마찬가지로 mock 데이터에서 직접 통신으로 수정
  // const onUpdate = (text, id) => {
  //   setMsgs(msgs => {
  //     const targetIndex = msgs.findIndex(msg => msg.id === id);
  //     if (targetIndex < 0) return msgs;

  //     const newMsgs = [...msgs];
  //     newMsgs.splice(targetIndex, 1, {
  //       ...msgs[targetIndex],
  //       text
  //     });
  //     return newMsgs;
  //   });
  //   doneEdit();
  // };
  const onUpdate = async (text, id) => {
    const newMsg = await fetcher('put', `/messages/${id}`, { text, userId });
    if (!newMsg) throw Error('Something wrong..');

    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  }

  const doneEdit = () => setEditingId(null);

  // delete 도 DB 와 통신 방식으로 수정
  // const onDelete = (id) => {
  //   setMsgs(msgs => {
  //     const targetIndex = msgs.findIndex(msg => msg.id === id);
  //     if (targetIndex < 0) return msgs;

  //     const newMsgs = [...msgs];
  //     newMsgs.splice(targetIndex, 1);
  //     return newMsgs;
  //   });
  // }
  const onDelete = async (id) => {
    const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } });
    console.log(typeof id, typeof receivedId); // string number
    setMsgs(msgs => {
      // receivedId + '' 를 해 주는 이유는 서버에서 id를 받을 때 파싱되면서
      // 문자열이 숫자로 변경될 수 있어서 문자열로 통일시키는 것 
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '');
      if (targetIndex < 0) return msgs;

      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  }

  const getMessages = async () => {
    // const msgs = await fetcher('get', '/messages');
    const newMsgs = await fetcher('get', '/messages', {
      params: { cursor: msgs[msgs.length - 1]?.id || '' }
    })
    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    // setMsgs(newMsgs);
    setMsgs(msgs => [...msgs, ...newMsgs]);
  }
  // useEffect(() => {
  //   getMessages();
  // }, []);

  useEffect(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting])

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="messages">{
        msgs.map(msg =>
          <MsgItem
            key={msg.id}
            {...msg}
            onUpdate={onUpdate}
            startEdit={() => setEditingId(msg.id)}
            isEditing={editingId === msg.id}
            onDelete={() => onDelete(msg.id)}
            myId={userId}
            user={users[msg.userId]}
          />)
      }</ul>
      <div ref={fetchMoreEl} />
    </>
  )
}

export default MsgList;