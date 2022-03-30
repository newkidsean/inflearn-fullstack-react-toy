// import MsgList from "../components/MsgList";
import MsgListGraphql from "../components/MsgListGraphql";
// import fetcher from "../fetcher";
import { fetcher } from "../queryClient";
import { GET_MESSAGES } from "../graphql/message";
import { GET_USERS } from "../graphql/user";

const Home = ({ smsgs, users }) => {
  return (
    <>
      <h1>Simple SNS</h1>
      {/* <MsgList smsgs={smsgs} users={users} /> */}
      <MsgListGraphql smsgs={smsgs} users={users} />
    </>
  )
};

// SSR 구현
export const getServerSideProps = async () => {
  // 아래는 REST API 를 사용할 때
  // const smsgs = await fetcher('get', '/messages');
  // const users = await fetcher('get', '/users');

  // 아래는 GraphQL 을 사용할 때
  // const smsgs = await fetcher(GET_MESSAGES);
  // const users = await fetcher(GET_USERS);

  // console.log({ smsgs, users });
  // 콘솔을 찍었을 때 아래와 같이 fetcher 값이 들어온다. 따라서 편히 사용하기 위해 구조분해를 사용
  // smsgs: {
  // messages: [
  //   [Object], [Object], [Object], [Object],
  //   [Object], [Object], [Object], [Object],
  // users: { users: [ [Object], [Object] ] }

  // 메시지는 기존 코드를 유지하기 위해 alias 사용
  const { messages: smsgs } = await fetcher(GET_MESSAGES);
  const { users } = await fetcher(GET_USERS);

  // 위에처럼 await 를 사용하면 fetcher 통신을 순서대로 두번 날려야 한다. 이는 성능 저하는 불러올 수 있기 때문에
  // 아래처럼 promise all 을 통해 병렬 구조로 비동기 통신이 이루어 지도록 수정 
  // const [{ messages: smsgs }, { users }] = await Promise.all[fetcher(GET_MESSAGES), fetcher(GET_USERS)];
  console.log('get server side props :', users);
  console.log(smsgs);
  return {
    props: { smsgs, users }
  }
}

export default Home;
