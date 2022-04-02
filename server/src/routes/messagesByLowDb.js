import { v4 } from "uuid";
import db from '../dbControllerByLowDb';

const getMsgs = () => {
  db.read()
  db.data = db.data || { messages: [] }
  return db.data.messages;
};

const messagesByLowDbRoute = [
  {
    // 전체 메시지 가져오기
    method: 'get',
    route: '/messages',
    // handler: (req, res) => {
    handler: ({ query: { cursor = '' } }, res) => {
      // const msgs = readDB('messages');
      const msgs = getMsgs();
      const fromIndex = msgs.findIndex(msg => msg.id === cursor) + 1;
      // res.send(msgs);
      res.send(msgs.slice(fromIndex, fromIndex + 15));
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
      try {
        if (!body.userId) throw Error('no userId')
        const msgs = getMsgs();
        const newMsg = {
          id: v4(),
          text: body.text,
          userId: body.userId,
          timestamp: Date.now()
        };
        db.data.messages.unshift(newMsg);
        db.write()
        setMsgs(msgs)
        res.send(newMsg);
      } catch (err) {
        res.status(500).send({ error: err });
      }
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
        db.data.messages.splice(targetIndex, 1, newMsg);
        db.write()
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
    handler: (req, res) => {
      console.log({ req });
      const { body, params: { id }, query: { userId } } = req;
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex(msg => msg.id === id);
        if (targetIndex < 0) throw "There's no message";
        if (msgs[targetIndex].userId !== userId) throw "Different User"

        db.data.messages.splice(targetIndex, 1);
        db.write();
        res.send(id);

      } catch (err) {
        res.status(500).send({ error: err });
      }
    }
  },
];

export default messagesByLowDbRoute;
