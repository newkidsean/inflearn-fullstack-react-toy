import { v4 } from "uuid";
import { writeDB } from "../dbController.js";

const setMsgs = data => writeDB('messages', data);

/* 
parent : preant 객체, 거의 사용 x
args: Query 에 필요한 필드에 제공되는 인수(parameter)
context: 로그인한 사용자, DB Access 등의 중요한 정보들
*/

const messageResolver = {
  Query: {
    // 여기서 context 는 index.js 에서 아폴로 서버 객체를 만들 때 들어있는 그 context
    // 여기서는 바로 context 안에 들어있는 db 를 꺼내서 사용
    // messages: (obj, args, context) => {},
    messages: (parent, args, { db }) => {
      // console.log({ parent, args, context })
      return db.messages;
    },
    // id 가 없는 경우를 대비해서 디폴트로 ''를 설정해 줌 
    message: (parent, { id = '' }, { db }) => {
      return db.messages.find(msg => msg.id === id);
    },
  },
  Mutation: {
    createMessage: (parent, { text, userId }, { db }) => {
      if (!userId) throw Error('사용자가 없습니다.')
      const newMsg = {
        id: v4(),
        text,
        userId,
        timestamp: Date.now(),
      }
      db.messages.unshift(newMsg)
      setMsgs(db.messages)
      return newMsg;
    },
    updateMessage: (parent, { id, text, userId }, { db }) => {
      const targetIndex = db.messages.findIndex(msg => msg.id === id)
      if (targetIndex < 0) throw Error('메시지가 없습니다.')
      if (db.messages[targetIndex].userId !== userId) throw Error('사용자가 다릅니다.');

      const newMsg = { ...db.messages[targetIndex], text }
      db.messages.splice(targetIndex, 1, newMsg)
      setMsgs(db.messages)
      return newMsg
    },
    deleteMessage: (parent, { id, userId }, { db }) => {
      const targetIndex = db.messages.findIndex(msg => msg.id === id)
      if (targetIndex < 0) throw '메시지가 없습니다.'
      if (db.messages[targetIndex].userId !== userId) throw Error('사용자가 다릅니다.');
      db.messages.splice(targetIndex, 1)
      setMsgs(db.messages)
      return id
    },
  }
}

export default messageResolver;
