import { DatabaseSync } from "node:sqlite";
import { TextEncoder } from "node:util";

{
    const database = new DatabaseSync(":memory:", { open: false });
    database.open();

    database.exec(`
    CREATE TABLE data(
        key INTEGER PRIMARY KEY,
        value TEXT
    ) STRICT
    `);

    const insert = database.prepare("INSERT INTO types (key, int, double, text, buf) VALUES (?, ?, ?, ?, ?)");
    insert.setReadBigInts(true);
    insert.setAllowBareNamedParameters(true);
    insert.run(1, 42, 3.14159, "foo", new TextEncoder().encode("a☃b☃c"));
    insert.run(2, null, null, null, null);
    insert.run(3, Number(8), Number(2.718), String("bar"), Buffer.from("x☃y☃"));
    insert.run(4, 99n, 0xf, "", new Uint8Array());
    insert.get(); // $ExpectType unknown

    const query = database.prepare("SELECT * FROM data ORDER BY key");
    query.all(); // $ExpectType unknown[]

    const sql = "INSERT INTO types (key, val) VALUES ($k, ?)";
    const stmt = database.prepare(sql);
    const result = stmt.run({ $k: "33" }, "42");
    result.changes; // $ExpectType number | bigint
    result.lastInsertRowid; // $ExpectType number | bigint

    database.close();
}
