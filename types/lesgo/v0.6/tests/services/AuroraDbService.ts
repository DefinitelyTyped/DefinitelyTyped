import './pagination/index';
import AuroraDbService from 'lesgo/lib/services/AuroraDbService';

const db = new AuroraDbService(); // $ExpectType AuroraDbService

db.connect({
    resourceArn: '',
    secretArn: '',
    database: '',
});
db.selectPaginate('SELECT * FROM Users;', [], 10); // $ExpectType PaginatorObject<any>

(async () => {
    await db.query('SELECT * FROM Users;', []); // $ExpectType iDataAPIQueryResult<unknown>
    await db.select('SELECT * FROM Users;', []); // $ExpectType any[]
    await db.selectFirst('SELECT * FROM Users;', []); // $ExpectType any
    await db.insert('INSERT INTO Users VALUES(?, ?)', ['Leo', 10]); // $ExpectType any
    await db.update('UPDATE Users SET age = ? WHERE name = ?;', [10, 'Leo']); // $ExpectType void
})();
