import * as memjs from "memjs";

// test type exports
type Client = memjs.Client;
type ClientCtor = typeof memjs.Client;
type Server = memjs.Server;
type ServerCtor = typeof memjs.Server;
type ClientOptions = memjs.ClientOptions;
type Logger = memjs.Logger;
type Serializer = memjs.Serializer<number, string>;
type ServerOptions = memjs.ServerOptions;
type InsertOptions = memjs.InsertOptions;
type IncrementDecrementOptions = memjs.IncrementDecrementOptions;
type Response = memjs.Response;
type Header = memjs.Header;

const client = memjs.Client.create(); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create(""); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { failoverTime: 1 }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { retries: 1 }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { retry_delay: 1 }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { expires: 1 }); // $ExpectType Client<string | Buffer, Buffer | null>
// $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", {
    logger: {
        log(...args) {
            args; // $ExpectType any[]
            console.log(...args);
        },
    },
});
// $ExpectType Client<number, number>
const numClient = memjs.Client.create("", {
    serializer: {
        serialize(opcode, value: number, extras) {
            opcode; // $ExpectType number
            extras; // $ExpectType Buffer
            return { value: Buffer.from(String(value)), extras };
        },
        deserialize(opcode, value, extras) {
            opcode; // $ExpectType number
            value; // $ExpectType Buffer | null
            extras; // $ExpectType Buffer
            return { value: 1, extras };
        },
    },
});
memjs.Client.create("", { username: "" }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { password: "" }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { timeout: 1 }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { conntimeout: 1 }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { keepAlive: true }); // $ExpectType Client<string | Buffer, Buffer | null>
memjs.Client.create("", { keepAliveDelay: 1 }); // $ExpectType Client<string | Buffer, Buffer | null>
new memjs.Client([]); // $ExpectType Client<string | Buffer, Buffer | null>
new memjs.Client([], {}); // $ExpectType Client<string | Buffer, Buffer | null>

client.seq; // $ExpectType number
client.servers; // $ExpectType readonly Server[]
client.options; // $ExpectType ClientOptions<string | Buffer, Buffer | null>
client.serializer; // $ExpectType Serializer<string | Buffer, Buffer | null>
numClient.options; // $ExpectType ClientOptions<number, number>
numClient.serializer; // $ExpectType Serializer<number, number>

client.get("hello", (err, val) => {
    err; // $ExpectType Error | null
    val; // $ExpectType Buffer | null
});
client.get("hello"); // $ExpectType Promise<{ value: Buffer | null; flags: Buffer | null; }>
numClient.get("hello"); // $ExpectType Promise<{ value: number; flags: Buffer | null; }>
numClient.get("hello", (err, val) => {
    err; // $ExpectType Error | null
    val; // $ExpectType number
});

client.set("hello", "world"); // $ExpectType Promise<boolean>
client.set("hello", "world", { expires: 600 }); // $ExpectType Promise<boolean>
// $ExpectType void
client.set("hello", "world", (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
// $ExpectType void
client.set("hello", "world", { expires: 600 }, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
numClient.set("hello", 1); // $ExpectType Promise<boolean>
numClient.set("hello", 1, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});

client.add("hello", "world"); // $ExpectType Promise<boolean>
client.add("hello", "world", { expires: 600 }); // $ExpectType Promise<boolean>
// $ExpectType void
client.add("hello", "world", (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
// $ExpectType void
client.add("hello", "world", { expires: 600 }, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
numClient.add("hello", 1); // $ExpectType Promise<boolean>
numClient.add("hello", 1, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});

client.replace("hello", "world"); // $ExpectType Promise<boolean>
client.replace("hello", "world", { expires: 600 }); // $ExpectType Promise<boolean>
// $ExpectType void
client.replace("hello", "world", (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
// $ExpectType void
client.replace("hello", "world", { expires: 600 }, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
numClient.replace("hello", 1); // $ExpectType Promise<boolean>
numClient.replace("hello", 1, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});

client.delete("hello"); // $ExpectType Promise<boolean>
// $ExpectType void
client.delete("hello", (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});

client.increment("hello", 1); // $ExpectType Promise<{ success: boolean; value?: number | null | undefined; }>
client.increment("hello", 1, { expires: 600 }); // $ExpectType Promise<{ success: boolean; value?: number | null | undefined; }>
client.increment("hello", 1, { initial: 1 }); // $ExpectType Promise<{ success: boolean; value?: number | null | undefined; }>
// $ExpectType void
client.increment("hello", 1, (err, success, value) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
    value; // $ExpectType number | null | undefined
});
// $ExpectType void
client.increment("hello", 1, { expires: 600 }, (err, success, value) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
    value; // $ExpectType number | null | undefined
});
// $ExpectType void
client.increment("hello", 1, { initial: 1 }, (err, success, value) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
    value; // $ExpectType number | null | undefined
});

client.decrement("hello", 1); // $ExpectType Promise<{ success: boolean; value?: number | null | undefined; }>
client.decrement("hello", 1, { expires: 600 }); // $ExpectType Promise<{ success: boolean; value?: number | null | undefined; }>
client.decrement("hello", 1, { initial: 1 }); // $ExpectType Promise<{ success: boolean; value?: number | null | undefined; }>
// $ExpectType void
client.decrement("hello", 1, (err, success, value) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
    value; // $ExpectType number | null | undefined
});
// $ExpectType void
client.decrement("hello", 1, { expires: 600 }, (err, success, value) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
    value; // $ExpectType number | null | undefined
});
// $ExpectType void
client.decrement("hello", 1, { initial: 1 }, (err, success, value) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
    value; // $ExpectType number | null | undefined
});

client.append("hello", "world"); // $ExpectType Promise<boolean>
// $ExpectType void
client.append("hello", "world", (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
numClient.append("hello", 1); // $ExpectType Promise<boolean>
numClient.append("hello", 1, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});

client.prepend("hello", "world"); // $ExpectType Promise<boolean>
// $ExpectType void
client.prepend("hello", "world", (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
numClient.prepend("hello", 1); // $ExpectType Promise<boolean>
numClient.prepend("hello", 1, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});

client.touch("hello"); // $ExpectType Promise<boolean>
client.touch("hello", 1); // $ExpectType Promise<boolean>
// $ExpectType void
client.touch("hello", (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});
// $ExpectType void
client.touch("hello", 1, (err, success) => {
    err; // $ExpectType Error | null
    success; // $ExpectType boolean | null
});

client.flush(); // $ExpectType Promise<Record<string, boolean>>
// $ExpectType void
client.flush((err, results) => {
    err; // $ExpectType Error | null
    results; // $ExpectType Record<string, boolean | Error>
});

// $ExpectType void
client.statsWithKey("hello", (err, server, stats) => {
    err; // $ExpectType Error | null
    server; // $ExpectType string
    stats; // $ExpectType Record<string, string> | null
});

// $ExpectType void
client.stats((err, server, stats) => {
    err; // $ExpectType Error | null
    server; // $ExpectType string
    stats; // $ExpectType Record<string, string> | null
});

// $ExpectType void
client.resetStats((err, server, stats) => {
    err; // $ExpectType Error | null
    server; // $ExpectType string
    stats; // $ExpectType Record<string, string> | null
});

client.quit(); // $ExpectType void
client.close(); // $ExpectType void

client.perform("hello", Buffer.alloc(10), 1); // $ExpectType void
// $ExpectType void
client.perform("hello", Buffer.alloc(10), 1, (err, ...args) => {
    err; // $ExpectType Error | null
    args; // $ExpectType any[]
});
// $ExpectType void
client.perform(
    "hello",
    Buffer.alloc(10),
    1,
    (err, ...args) => {
        err; // $ExpectType Error | null
        args; // $ExpectType any[]
    },
    1,
);

client.incrSeq(); // $ExpectType void

const server = new memjs.Server("foo", 123);
new memjs.Server("foo", 123, "foo");
new memjs.Server("foo", 123, "foo", "bar", {});
new memjs.Server("foo", 123, undefined, undefined, { username: "" }); // $ExpectType Server
new memjs.Server("foo", 123, undefined, undefined, { password: "" }); // $ExpectType Server
new memjs.Server("foo", 123, undefined, undefined, { timeout: 1 }); // $ExpectType Server
new memjs.Server("foo", 123, undefined, undefined, { conntimeout: 1 }); // $ExpectType Server
new memjs.Server("foo", 123, undefined, undefined, { keepAlive: true }); // $ExpectType Server
new memjs.Server("foo", 123, undefined, undefined, { keepAliveDelay: 1 }); // $ExpectType Server

server.responseBuffer; // $ExpectType Buffer
server.host; // $ExpectType string
server.port; // $ExpectType number
server.connected; // $ExpectType boolean
server.timeoutSet; // $ExpectType boolean
server.connectCallbacks; // $ExpectType readonly ((socket: Socket) => void)[]
server.responseCallbacks; // $ExpectType { [key: number]: (response: Response) => void; }
server.requestTimeouts; // $ExpectType readonly number[]
server.errorCallbacks; // $ExpectType { [key: number]: (error: Error) => void; }
server.options; // $ExpectType ServerOptions
server.username; // $ExpectType string | undefined
server.password; // $ExpectType string | undefined

// $ExpectType void
server.onConnect(socket => {
    socket; // $ExpectType Socket
});
// $ExpectType void
server.onResponse(1, response => {
    response; // $ExpectType Response
});
// $ExpectType void
server.onError(1, error => {
    error; // $ExpectType Error
});
server.error(new Error()); // $ExpectType void
server.listSasl(); // $ExpectType void
server.saslAuth(); // $ExpectType void
server.appendToBuffer(Buffer.alloc(1)); // $ExpectType Buffer
server.responseHandler(Buffer.alloc(1)); // $ExpectType void
// $ExpectType void
server.sock(true, socket => {
    socket; // $ExpectType Socket
});
server.write(new Uint8Array()); // $ExpectType void
server.write("foo"); // $ExpectType void
server.writeSASL(new Uint8Array()); // $ExpectType void
server.writeSASL("foo"); // $ExpectType void
server.close(); // $ExpectType void
server.toString(); // $ExpectType string

memjs.Utils.makeRequestBuffer(1, "foo", "123", "bar", 1); // $ExpectType Buffer
memjs.Utils.makeRequestBuffer(1, Buffer.from("foo"), Buffer.from("123"), Buffer.from("bar"), 1);
memjs.Utils.makeAmountInitialAndExpiration(1, 0, 1); // $ExpectType Buffer
memjs.Utils.makeExpiration(1); // $ExpectType Buffer
memjs.Utils.hashCode("foo"); // $ExpectType number
const response = memjs.Utils.parseMessage(Buffer.alloc(10)); // $ExpectType Response
memjs.Utils.merge({ foo: "bar" }, { quux: "baz" }); // $ExpectType { foo: string; } & { quux: string; }
memjs.Utils.timestamp(); // $ExpectType number

response.header; // $ExpectType Required<Header>
response.key; // $ExpectType Buffer
response.extras; // $ExpectType Buffer
response.val; // $ExpectType Buffer

const header = memjs.Header.fromBuffer(Buffer.alloc(10)); // $ExpectType Required<Header>
header.magic; // $ExpectType number
header.opcode; // $ExpectType number
header.keyLength; // $ExpectType number
header.extrasLength; // $ExpectType number
header.dataType; // $ExpectType number
header.status; // $ExpectType number
header.totalBodyLength; // $ExpectType number
header.opaque; // $ExpectType number
header.cas; // $ExpectType Buffer

// $ExpectType Buffer
memjs.Header.toBuffer({
    magic: 1,
    opcode: 1,
    keyLength: 1,
    extrasLength: 1,
    dataType: 1,
    totalBodyLength: 1,
});
// $ExpectType Buffer
memjs.Header.toBuffer({
    magic: 1,
    opcode: 1,
    keyLength: 1,
    extrasLength: 1,
    status: 1,
    totalBodyLength: 1,
});
// $ExpectType Buffer
memjs.Header.toBuffer({
    magic: 1,
    opcode: 1,
    keyLength: 1,
    extrasLength: 1,
    totalBodyLength: 1,
    opaque: 1,
});
// $ExpectType Buffer
memjs.Header.toBuffer({
    magic: 1,
    opcode: 1,
    keyLength: 1,
    extrasLength: 1,
    totalBodyLength: 1,
    cas: Buffer.alloc(10),
});
