import Sybase = require("sybase-promised");

const config: Sybase.ConnectionOptions =  {
    dbname: "testDb",
    host: "127.0.0.1",
    password: "password",
    port: 3223,
    username: "user",
  };

const sql = "SELECT * FROM test1";

(async () => {
    const connection = new Sybase(config);
    await connection.connect();
    const result: string[] = await connection.query(sql);
    connection.disconnect();
})();
