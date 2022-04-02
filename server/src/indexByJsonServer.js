import jsonServer from 'json-server';
import messagesRoute from './routes/messages';
import usersRoute from './routes/users';

const app = jsonServer.create();
const router = jsonServer.router('./src/db.json');

// app.use(jsonServer.bodyParser);

app.use(router);

app.listen(8000, () => {
  console.log('server listening on 8000...');
});