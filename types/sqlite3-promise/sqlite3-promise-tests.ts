import * as sqlite3 from 'sqlite3-promise';

runExamples();

function createDb(): sqlite3.Database {
    return new sqlite3.Database(
        ':memory:', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE);
}

async function runExamples() {
    // Wraps all, get, and run
    let db = createDb();
    let query = 'CREATE TABLE rows (str TEXT, num INT)';
    await db.runAsync(query);

    query = 'INSERT INTO rows (str, num) VALUES (\'foo\', 11), (\'bar\', 19)';
    await db.runAsync(query);

    query = 'SELECT rowid, * FROM rows';
    let result = await db.allAsync(query);
    // expect(result.length).toBe(2);

    query = 'SELECT str FROM rows WHERE num=19';
    result = await db.allAsync(query);
    // expect(result).toEqual([{str: 'bar'}]);

    query = 'SELECT str FROM rows WHERE num=19';
    const singleResult = await db.getAsync(query);
    // expect(singleResult).toEqual({str: 'bar'});

    await db.closeAsync();

    // Wraps each
    db = createDb();
    db.serialize(() => {
        db.run("CREATE TABLE lorem (info TEXT)");
        const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (let i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
    });

    let sum = 0;
    const eachResult = await db.eachAsync(
        "SELECT rowid AS id, info FROM lorem",
        (err, row) => { sum += row.id; });
    // expect(result).toBe(10);
    // expect(sum).toBe(55);
    await db.closeAsync();

    // Wraps exec
    db = createDb();
    query = `CREATE TABLE lorem (info TEXT);
        INSERT INTO lorem VALUES ('foo')`;
    const statement = await db.execAsync(query);

    query = 'SELECT str FROM rows WHERE num=19';
    result = await db.allAsync(query);
    // expect(result).toEqual([{str: 'bar'}]);
    await db.closeAsync();

    // Wraps verbose
    const verbose = sqlite3.verbose();
    db = new verbose.Database(
            ':memory:', verbose.OPEN_CREATE | verbose.OPEN_READWRITE);
    query = `CREATE TABLE rows (str TEXT, num INT);
        INSERT INTO rows (str, num) VALUES ('foo', 11), ('bar', 19)`;
    await db.execAsync(query);

    query = 'SELECT str FROM rows WHERE num=19';
    result = await db.allAsync(query);
    // expect(result).toEqual([{str: 'bar'}]);

    await db.closeAsync();
}
