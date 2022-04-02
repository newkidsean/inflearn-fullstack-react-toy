/* LowDB 라는 라이브러리를 이용한 방식 */
import { LowSync, JSONFileSync } from 'lowdb'

const adapter = new JSONFileSync('./src/db.json');
const db = new LowSync(adapter);

export default db;