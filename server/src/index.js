import express from 'express';
import cors from 'cors';
import messagesRoute from './routes/messages.js';
import usersRoute from './routes/users.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// messagesRoute.forEach(({ method, route, handler }) => {
// 아래 코드는 사실
// app[method](route, handler);

// 아래 문법과 동일한데, 그냥 각 메소드 별로 만들어서 배열안에 넣어둔 뒤에
// 불러서 사용하는 것과 같다
// app.get('/', (req, res) => {});
// });

// 메시지와 유저를 한번에 다루기 위해 아래와 같이 합침
const routes = [...messagesRoute, ...usersRoute];
routes.forEach(({ method, route, handler }) => {
  app[method](route, handler);
})

app.listen(8000, () => {
  console.log('server listening on 8000...');
});
