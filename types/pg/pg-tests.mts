import pg, {
    type BindConfig,
    Client,
    ClientBase,
    type ClientConfig,
    Connection,
    type ConnectionConfig,
    type CustomTypesConfig,
    DatabaseError,
    type Defaults,
    defaults,
    escapeIdentifier,
    escapeLiteral,
    Events,
    type ExecuteConfig,
    type FieldDef,
    type MessageConfig,
    native,
    type Notification,
    Pool,
    type PoolClient,
    type PoolConfig,
    type PoolOptions,
    Query,
    type QueryArrayConfig,
    type QueryArrayResult,
    type QueryConfig,
    type QueryConfigValues,
    type QueryParse,
    type QueryResult,
    type QueryResultBase,
    type QueryResultRow,
    Result,
    type ResultBuilder,
    type Submittable,
    TypeOverrides,
    types,
} from "pg";

const client = new pg.Client({
    host: "my.database-server.com",
    port: 5334,
    user: "database-user",
    password: "secretpassword!!",
    application_name: "DefinitelyTyped",
    keepAlive: true,
});
client.setTypeParser(20, val => Number(val));
client.getTypeParser(20);

const res = new pg.Result("array", pg.types);
res.rows.forEach(row => row);

const poolSize: number | undefined = defaults.poolSize;
const poolIdleTimeout: number | undefined = defaults.poolIdleTimeout;
const reapIntervalMillis: number | undefined = defaults.reapIntervalMillis;
const binary: boolean | undefined = defaults.binary;
const parseInt8: boolean | undefined = defaults.parseInt8;
const parseInputDatesAsUTC: boolean | undefined = defaults.parseInputDatesAsUTC;

const client2 = new Client({
    host: "my.database-server.com",
    port: 5334,
    user: "database-user",
    password: "secretpassword!!",
    application_name: "DefinitelyTyped",
    keepAlive: true,
});
client2.setTypeParser(20, val => Number(val));
client2.getTypeParser(20);

const myFunc = (c: Client) => {
    c.on("drain", () => {});
};
const myFunc2 = (c: pg.Client) => {
    c.on("drain", () => {});
};

// $ExpectType ClientBase
new pg.ClientBase();
// $ExpectType ClientBase
new ClientBase();

// $ExpectType Events
new pg.Events();
// $ExpectType Events
new Events();

typeof native === typeof pg.native;
