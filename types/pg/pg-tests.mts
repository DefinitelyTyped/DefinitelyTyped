import pg, {
    defaults,
    Client,
    Query,
    Pool,
    Connection,
    types,
    DatabaseError,
    TypeOverrides,
    escapeIdentifier,
    escapeLiteral,
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
