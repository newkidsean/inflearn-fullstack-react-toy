import { v4 } from "uuid";
import { readDB, writeDB } from "../dbController.js";

const getMsgs = () => readDB('messages');
const setMsgs = data => writeDB('messages', data);

const messagesRoute = [
  {
    // 전체 메시지 가져오기
    method: 'get',
    route: '/messages',
    handler: (req, res) => {
      // const msgs = readDB('messages');
      const msgs = getMsgs();
      res.send(msgs);
    }
  },
  {
    // 메시지 한개만 가져오기
    method: 'get',
    route: '/messages/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const msg = msgs.find(msg => msg.id === id);
        if (!msg) throw Error('not found');
        res.send(msg);
      } catch (err) {
        res.status(404).send({ error: err })
      }
    }
  },
  {
    // 메시지 만들기
    method: 'post',
    route: '/messages',
    handler: ({ body }, res) => {
      const msgs = getMsgs();
      const newMsg = {
        id: v4(),
        text: body.text,
        userId: body.userId,
        timestamp: Date.now()
      };
      msgs.unshift(newMsg);
      // writeDB('messages', msgs);
      setMsgs(msgs)
      res.send(newMsg);
    }
  },
  {
    // 업데이트
    method: 'put',
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex(msg => msg.id === id);
        if (targetIndex < 0) throw "There's no message";
        if (msgs[targetIndex].userId !== body.userId) throw "Different User"

        const newMsg = { ...msgs[targetIndex], text: body.text };
        msgs.splice(targetIndex, 1, newMsg);
        setMsgs(msgs);
        res.send(newMsg);

      } catch (err) {
        res.status(500).send({ error: err });
      }
    }
  },
  {
    // delete
    method: 'delete',
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex(msg => msg.id === id);
        if (targetIndex < 0) throw "There's no message";
        if (msgs[targetIndex].userId !== body.userId) throw "Different User"

        msgs.splice(targetIndex, 1);
        setMsgs(msgs);
        res.send(id);

      } catch (err) {
        res.status(500).send({ error: err });
      }
    }
  },
];

export default messagesRoute;
