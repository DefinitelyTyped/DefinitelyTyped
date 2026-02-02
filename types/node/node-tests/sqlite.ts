import { backup, constants, DatabaseSync, StatementSync } from "node:sqlite";
import { TextEncoder } from "node:util";

{
    const database = new DatabaseSync(":memory:", { open: false });
    database.open();
    database.isOpen; // $ExpectType boolean
    database.isTransaction; // $ExpectType boolean

    database.createTagStore(); // $ExpectType SQLTagStore
    database.createTagStore(100); // $ExpectType SQLTagStore

    database.exec(`
    CREATE TABLE data(
        key INTEGER PRIMARY KEY,
        value TEXT
    ) STRICT
    `);
    database.location("data"); // $ExpectType string | null

    database.function(
        "COUNT_ARGS",
        { deterministic: true, varargs: true },
        function() {
            return arguments.length;
        },
    );

    database.aggregate(
        "LAST",
        {
            start: null,
            step: (previous, current) => current,
        },
    );
    database.aggregate<number>(
        "COUNT_NUMBERS",
        {
            step: (count, value) => count + (typeof value === "number" ? 1 : 0),
            start: () => 0,
            result: (count) => count,
        },
    );

    const insert = database.prepare("INSERT INTO types (key, int, double, text, buf) VALUES (?, ?, ?, ?, ?)");
    insert.setReadBigInts(true);
    insert.setAllowBareNamedParameters(true);
    insert.setAllowUnknownNamedParameters(true);
    insert.setReturnArrays(false);
    insert.columns(); // $ExpectType StatementColumnMetadata[]
    insert.run(1, 42, 3.14159, "foo", new TextEncoder().encode("a☃b☃c"));
    insert.run(2, null, null, null, null);
    insert.run(3, Number(8), Number(2.718), String("bar"), Buffer.from("x☃y☃"));
    insert.run(4, 99n, 0xf, "", new Uint8Array());
    insert.get(); // $ExpectType Record<string, SQLOutputValue> | undefined

    const query = database.prepare("SELECT * FROM data ORDER BY key");
    query.all(); // $ExpectType Record<string, SQLOutputValue>[]
    query.iterate(); // $ExpectType Iterator<Record<string, SQLOutputValue>, undefined, any>

    const sql = "INSERT INTO types (key, val) VALUES ($k, ?)";
    const stmt = database.prepare(sql);
    const result = stmt.run({ $k: "33" }, "42");
    result.changes; // $ExpectType number | bigint
    result.lastInsertRowid; // $ExpectType number | bigint

    database.close();
}

{
    new DatabaseSync(Buffer.from(":memory:"));
    new DatabaseSync(new URL("file:///var/lib/sqlite3/db"));
}

{
    new DatabaseSync(":memory:", {
        timeout: 10_000,
        readBigInts: true,
        returnArrays: true,
        allowBareNamedParameters: false,
        allowUnknownNamedParameters: true,
    });
}

{
    const database = new DatabaseSync(":memory:", { allowExtension: true });
    database.loadExtension("/path/to/extension.so");
    database.enableLoadExtension(false);
}

{
    const database = new DatabaseSync(":memory:", { defensive: false });
    database.enableDefensive(true);
}

{
    let statement!: StatementSync;
    statement.expandedSQL; // $ExpectType string
    statement.sourceSQL; // $ExpectType string
}

{
    const sourceDb = new DatabaseSync(":memory:");
    const targetDb = new DatabaseSync(":memory:");

    sourceDb.exec("CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)");
    targetDb.exec("CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)");

    const session = sourceDb.createSession();

    const insert = sourceDb.prepare("INSERT INTO data (key, value) VALUES (?, ?)");
    insert.run(1, "hello");
    insert.run(2, "world");

    const changeset = session.changeset();
    targetDb.applyChangeset(changeset);
    // Now that the changeset has been applied, targetDb contains the same data as sourceDb.
}

{
    const db = new DatabaseSync(":memory:");
    const session = db.createSession({
        db: "main",
        table: "my_table",
    });
    db.applyChangeset(session.changeset(), {
        filter: (table) => {
            table; // $ExpectType string
            return true;
        },
        onConflict: (conflictType) => {
            conflictType; // $ExpectType number
            return constants.SQLITE_CHANGESET_ABORT;
        },
    });
}

{
    const db = new DatabaseSync(":memory:");

    // $ExpectType Promise<number>
    backup(
        db,
        "/var/lib/sqlite/backup",
        {
            source: "main",
            target: "backup",
            rate: 250,
            progress: (progressInfo) => console.log(`${progressInfo.remainingPages}/${progressInfo.totalPages}`),
        },
    );
}

{
    const db = new DatabaseSync(":memory:");
    const tagStore = db.createTagStore();

    const id = 12345;
    const name = "Alice";

    tagStore.all`SELECT * FROM users ORDER BY id`; // $ExpectType Record<string, SQLOutputValue>[]
    tagStore.get`SELECT * FROM users WHERE id = ${id}`; // $ExpectType Record<string, SQLOutputValue> | undefined
    tagStore.iterate`SELECT * FROM users WHERE id = ${id}`; // $ExpectType Iterator<Record<string, SQLOutputValue>, undefined, any>
    tagStore.run`INSERT INTO users VALUES (${id}, ${name})`; // $ExpectType StatementResultingChanges

    tagStore.size; // $ExpectType number
    tagStore.capacity; // $ExpectType number
    tagStore.db; // $ExpectType DatabaseSync
    tagStore.clear();
}

{
    const db = new DatabaseSync(":memory:");

    db.setAuthorizer((actionCode) => {
        if (actionCode === constants.SQLITE_CREATE_TABLE) {
            return constants.SQLITE_DENY;
        }
        return constants.SQLITE_OK;
    });
}
