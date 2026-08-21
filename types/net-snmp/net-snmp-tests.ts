import {
    AccessControlModelType,
    AccessLevel,
    AgentXPduType,
    Authentication,
    AuthProtocols,
    createAgent,
    createMib,
    createReceiver,
    createSession,
    createSubagent,
    createV3Session,
    Encryption,
    ErrorStatus,
    isVarbindError,
    MaxAccess,
    MibProviderType,
    ObjectParser,
    ObjectType,
    ObjectTypeUtil,
    OidFormat,
    PduType,
    PrivProtocols,
    RequestFailedError,
    ResponseInvalidError,
    RowStatus,
    SecurityLevel,
    TrapType,
    Varbind,
    varbindError,
    Version,
    Version1,
    Version2c,
    Version3,
} from "net-snmp";

// Basic successful cases
const V3Session1 = createV3Session("127.0.0.1", {
    name: "testuser",
    level: SecurityLevel.authPriv,
    authProtocol: AuthProtocols.sha,
    authKey: "authkey123",
    privProtocol: PrivProtocols.aes,
    privKey: "privkey123",
});

const V3Session2 = createV3Session("localhost", {
    name: "testuser2",
    level: SecurityLevel.noAuthNoPriv,
});

// With options
const V3Session3 = createV3Session(
    "192.168.1.1",
    {
        name: "testuser3",
        level: SecurityLevel.authNoPriv,
        authProtocol: AuthProtocols.md5,
        authKey: "authkey456",
    },
    {
        port: 1610,
        timeout: 3000,
        retries: 2,
    },
);

// Should error cases
// @ts-expect-error - missing required user properties
const sessionError1 = createV3Session("127.0.0.1", {});

const sessionError2 = createV3Session(
    "127.0.0.1",
    {
        name: "testuser",
        level: SecurityLevel.authPriv,
    },
    // @ts-expect-error - invalid version in options
    { version: 2 },
);

const sessionError3 = createV3Session(
    "127.0.0.1",
    {
        name: "testuser",
        level: SecurityLevel.authPriv,
    },
    // @ts-expect-error - invalid transport
    { transport: "tcp" },
);

const sessionError4 = createV3Session("127.0.0.1", {
    name: "testuser",
    level: SecurityLevel.authPriv,
    // @ts-expect-error - invalid auth protocol
    authProtocol: "invalid-protocol",
});

// Test that returned session has expected methods
V3Session1.get("1.3.6.1.2.1.1.1.0", (_error: ResponseInvalidError | null, _varbinds?: Varbind[]) => {});
V3Session1.getBulk(
    ["1.3.6.1.2.1.1.1.0"],
    0,
    10,
    (_error: ResponseInvalidError | null, _varbinds?: (Varbind | Varbind[])[]) => {},
);
V3Session1.getBulk(
    ["1.3.6.1.2.1.1.1.0"],
    // @ts-expect-error - invalid order
    (_error: ResponseInvalidError | null, _varbinds?: (Varbind | Varbind[])[]) => {},
    10,
);
V3Session1.getNext(["1.3.6.1.2.1.1.1.0"], (_error: ResponseInvalidError | null, _varbinds?: Varbind[]) => {});
V3Session2.close();
V3Session3.set(
    [
        {
            oid: "1.3.6.1.2.1.1.5.0",
            type: ObjectType.OctetString,
            value: "test",
        },
    ],
    (_error: any, _varbinds?: Varbind[]) => {},
);

// Minimal valid call - all optional parameters omitted
const session1 = createSession();

// Only target provided
const session2 = createSession("127.0.0.1");

// Target and community provided
const session3 = createSession("127.0.0.1", "public");

// All parameters provided
const session4 = createSession("localhost", "private", {
    version: 1, // Version2c
    timeout: 2000,
});

// Invalid cases
// @ts-expect-error - invalid version (must be 0 or 1)
createSession(undefined, undefined, { version: 3 });

// @ts-expect-error - invalid transport type
createSession(undefined, undefined, { transport: "tcp" });

// @ts-expect-error - community must be string if provided
createSession("127.0.0.1", 12345);

// Verify returned Session type has expected methods
session1.get("1.3.6.1.2.1.1.1.0", (_error: any, _varbinds?: Varbind[]) => {});
session4.close();

// Additional tests for higher coverage

// Test Varbind validation
const validVarbind: Varbind = {
    oid: "1.3.6.1.2.1.1.1.0",
    type: ObjectType.OctetString,
    value: "test value",
};

// @ts-expect-error - missing required oid
const invalidVarbind1: Varbind = {
    type: ObjectType.OctetString,
    value: "test value",
};

const invalidVarbind2: Varbind = {
    // @ts-expect-error - wrong OID type
    oid: 12345,
    type: ObjectType.OctetString,
    value: "test value",
};

// Test varbind utility functions
const isError = isVarbindError(validVarbind);
const errorMsg = varbindError(validVarbind);

// Test Authentication namespace
const authDigest = Authentication.calculateDigest(
    Buffer.from("test"),
    AuthProtocols.sha,
    "password",
    Buffer.from("engine123"),
);

const authKey = Authentication.passwordToKey(AuthProtocols.sha, "password", Buffer.from("engine123"));

// Test Encryption namespace
const encryptedData = Encryption.encryptPduAes(
    Buffer.from("test"),
    PrivProtocols.aes,
    "privpassword",
    AuthProtocols.sha,
    Encryption.algorithms[PrivProtocols.aes],
);

// Test ObjectTypeUtil namespace
const isValid = ObjectTypeUtil.isValid(ObjectType.OctetString, "test", {});
const castValue = ObjectTypeUtil.castSetValue(ObjectType.Integer, "123", {});

// Test enum values
const pduType: PduType = PduType.GetRequest;
const errorStatus: ErrorStatus = ErrorStatus.NoError;
const trapType: TrapType = TrapType.ColdStart;
const rowStatus: RowStatus = RowStatus.active;
const maxAccess: MaxAccess = MaxAccess["read-only"];
const agentXPduType: AgentXPduType = AgentXPduType.Open;
const accessControlModel: AccessControlModelType = AccessControlModelType.Simple;
const accessLevel: AccessLevel = AccessLevel.ReadOnly;
const mibProviderType: MibProviderType = MibProviderType.Scalar;

// Test version constants
const version1: 0 = Version1;
const version2c: 1 = Version2c;
const version3: 3 = Version3;
const versionObj = Version["2c"];

// Test OidFormat
const oidFormat = OidFormat;

// Test error classes
const requestFailedError = new RequestFailedError("Test error", ErrorStatus.TooBig);
const responseInvalidError = new ResponseInvalidError("Test error", 1, { additional: "info" });

// Test other creation functions
const agent = createAgent({}, () => {});
const mib = createMib();
const receiver = createReceiver({}, () => {});
const subagent = createSubagent({});

// Test session event handlers
session1.on("close", () => {});
session1.on("error", (_err: Error) => {});
session1.on("message", (_buffer: Buffer) => {});

// Test invalid callback signatures
// @ts-expect-error - wrong callback signature for get
session1.get("1.3.6.1.2.1.1.1.0", (_error: string) => {});

// @ts-expect-error - wrong callback signature for set
session1.set([{ oid: "1.3.6.1.2.1.1.1.0", value: "test" }], (_error: string, _result: number) => {});

// Test invalid options for createSession
// @ts-expect-error - invalid option
createSession("127.0.0.1", "public", { invalidOption: true });

// Test invalid options for createV3Session
// @ts-expect-error - invalid option
createV3Session("127.0.0.1", { name: "test", level: SecurityLevel.noAuthNoPriv }, { invalidOption: true });

session3.walk(
    "1.3.6.1.2.1.1",
    (varbinds) => {
        console.log(varbinds);
        return false; // continue walking
    },
    (error) => {
        if (error) console.error(error);
    },
);

// Test all overloads
V3Session1.table("1.3.6.1.2.1.1", (_error, _table) => {});

V3Session1.table("1.3.6.1.2.1.1", 50, (_error, _table) => {});

// Invalid cases
// @ts-expect-error - missing callback
V3Session1.table("1.3.6.1.2.1.1");

// @ts-expect-error - invalid maxRepetitions type
V3Session1.table("1.3.6.1.2.1.1", "invalid", (_error, _table) => {});

V3Session1.subtree(
    "1.3.6.1.2.1.1",
    (_varbinds) => {},
    (_error) => {},
);
V3Session1.subtree(
    "1.3.6.1.2.1.1",
    30,
    (_varbinds) => {},
    (_error) => {},
);

// Invalid cases
// @ts-expect-error - missing done callback
V3Session1.subtree("1.3.6.1.2.1.1", (_varbinds) => {});

// @ts-expect-error - missing feed callback
V3Session1.subtree("1.3.6.1.2.1.1", (_error) => {});
