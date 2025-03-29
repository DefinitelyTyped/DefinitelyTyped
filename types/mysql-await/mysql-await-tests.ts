/**
 * @author XiaoLOrange
 * @time 2025.03.07
 * @title
 */

import {createConnection, ConnectionAwait, createPool, format} from "mysql-await";


async function test(){
    const conn: ConnectionAwait = createConnection({
        host: "localhost",
        user: "me",
        password: "test",
    });
    await conn.awaitConnect();

    // ex1
    let result = await conn.awaitQuery("SELECT 1 + 1 AS solution");

    // ex2
    const userId = "some user provided value";
    let sql = `SELECT * FROM users WHERE id = ${conn.escape(userId)}`;
    result = await conn.awaitQuery(sql);
    result = await conn.awaitQuery("SELECT * FROM users WHERE id = ?", [userId]);
    const post = { id: 1, title: "Hello MySQL" };
    result = await conn.awaitQuery("INSERT INTO posts SET ?", post);

    const userIdNum = 1;
    const columns = ["username", "email"];
    result = await conn.awaitQuery("SELECT ?? FROM ?? WHERE id = ?", [columns, "users", userIdNum]);

    sql = "SELECT * FROM ?? WHERE ?? = ?";
    const inserts = ["users", "id", userId];
    sql = format(sql, inserts);
    sql = format(sql);

    result = await conn.awaitQuery("UPDATE posts SET title = :title", { title: "Hello MySQL" });
    result = await conn.awaitQuery({ sql: "UPDATE posts SET title = :title" }, { title: "Hello MySQL" });
    result = await conn.awaitQuery("INSERT INTO posts SET ?", { title: "test" });
    result = await conn.awaitQuery("DELETE FROM posts WHERE title = \"wrong\"");
    result = await conn.awaitQuery("UPDATE posts SET ...");

    await conn.awaitEnd();
    await conn.awaitDestroy();


    const poolConfig = {
        connectionLimit: 10,
        host: "example.org",
        user: "bob",
        password: "secret",
    };

    let pool = createPool(poolConfig);
    result = await pool.awaitQuery("SELECT 1 + 1 AS solution");
    const conn2= await pool.awaitGetConnection();
    await pool.awaitEnd();
}

test();

