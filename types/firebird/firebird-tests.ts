import * as fb from "firebird";

/* createConnection */
let con: fb.Connection = fb.createConnection();

/* Connection */
con = new fb.Connection();

con.connectSync('test.fdb', 'sysdba', 'masterkey', '');
con.connect('test.fdb', 'sysdba', 'masterkey', '', (err: Error | null) => {});

if (con.connected === true) {
    console.log('connected');
}

con.querySync("insert into test (id,name) values (5, 'new one')");
const res: fb.FBResult = con.querySync("select * from test");
con.query("select * from test", (err: Error | null, res: fb.FBResult) => {});

con.commitSync();
con.commit((err: Error | null) => {});

con.rollbackSync();
con.rollback((err: Error | null) => {});

con.startSync();
con.start((err: Error | null) => {});

let stmt: fb.FBStatement = con.prepareSync("select * from test where name = ?");

if (con.inTransaction === true) {
    console.log('in transaction');
}

const blob: fb.FBBlob = con.newBlobSync();

const tx: fb.Transaction = con.startNewTransactionSync();
con.startNewTransaction((err: Error | null, tx: fb.Transaction) => {});

/* DataType */
const column: fb.DataType = <any> {};
if (typeof (column) === "number") {
    column * 10;
} else if (typeof (column) === "string") {
    column.substring(0, 1);
} else if (column instanceof Date) {
    column.toISOString();
} else {
    const _: fb.FBBlob = column;
}

/* FBResult */
interface MyRow {
    id: number;
    name: string;
}

let rowsArray: fb.DataType[][] = res.fetchSync("all", false);
rowsArray = res.fetchSync(1, false);
res.fetch("all", false, (row: fb.DataType[]) => {}, (err: Error | null, eof: boolean) => {});
res.fetch(1, false, (row: fb.DataType[]) => {}, (err: Error | null, eof: boolean) => {});
let rowsObject: Array<{[colmn: string]: fb.DataType}> = res.fetchSync("all", true);
rowsObject = res.fetchSync(1, true);
res.fetch("all", true, (row: {[colmn: string]: fb.DataType}) => {}, (err: Error | null, eof: boolean) => {});
res.fetch(1, true, (row: {[colmn: string]: fb.DataType}) => {}, (err: Error | null, eof: boolean) => {});
let rowsTyped: MyRow[] = res.fetchSync<MyRow>("all", true);
rowsTyped = res.fetchSync<MyRow>(1, true);
res.fetch<MyRow>("all", true, (row: MyRow) => {}, (err: Error | null, eof: boolean) => {});
res.fetch<MyRow>(1, true, (row: MyRow) => {}, (err: Error | null, eof: boolean) => {});

/* Transaction */
tx.querySync("insert into test (id,name) values (5, 'new one')");
tx.query("select * from test", (err: Error | null, res: fb.FBResult) => {});

tx.commitSync();
tx.commit((err: Error | null) => {});

tx.rollbackSync();
tx.rollback((err: Error | null) => {});

tx.startSync();
tx.start((error: Error | null) => {});
stmt = tx.prepareSync("select * from test where name = ?");

if (tx.inTransaction === true) {
    console.log('in transaction');
}

/* FBStatement */
const asFBResult: fb.FBResult = stmt;
stmt.execSync("John");
stmt.execSync(1, "Mary");
stmt.execInTransSync(tx, "John");
stmt.execInTransSync(tx, 1, "Mary");
stmt.exec("John");
stmt.exec(1, "Mary");
stmt.execInTrans(tx, "John");
stmt.execInTrans(tx, 1, "Mary");

/* FBBlob */
blob._openSync();

blob._closeSync();

const buffer: Buffer = <any> {};
const readBytes: number = blob._readSync(buffer);
blob._read(buffer, (err: Error | null, buffer: Buffer, len: number) => {});

blob._readAll();
blob._readAll(10);
blob._readAll(10, 20);
blob._readAll(10, (err: Error | null, buffer: Buffer, len: number) => {});
blob._readAll(10, 20, (err: Error | null, buffer: Buffer, len: number) => {});

let writtenBytes = blob._writeSync(buffer);
writtenBytes = blob._writeSync(buffer, 10);
blob._write(buffer);
blob._write(buffer, 10);
blob._write(buffer, 10, (err: Error | null) => {});

/* Stream */
const strm = new fb.Stream(blob);
