import { createV3Session, SecurityLevel, AuthProtocols, PrivProtocols, ObjectType, createSession, Varbind, ResponseInvalidError } from 'net-snmp';

// Basic successful cases
const V3Session1 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv,
    authProtocol: AuthProtocols.sha,
    authKey: 'authkey123',
    privProtocol: PrivProtocols.aes,
    privKey: 'privkey123'
});

const V3Session2 = createV3Session('localhost', {
    name: 'testuser2',
    level: SecurityLevel.noAuthNoPriv
});

// With options
const V3Session3 = createV3Session('192.168.1.1', {
    name: 'testuser3',
    level: SecurityLevel.authNoPriv,
    authProtocol: AuthProtocols.md5,
    authKey: 'authkey456'
}, {
    port: 1610,
    timeout: 3000,
    retries: 2
});

// Should error cases
// @ts-expect-error - missing required user properties
const sessionError1 = createV3Session('127.0.0.1', {});

const sessionError2 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv
    // @ts-expect-error - invalid version in options
}, { version: 2 });

const sessionError3 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv
    // @ts-expect-error - invalid transport
}, { transport: 'tcp' });

const sessionError4 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv,
    // @ts-expect-error - invalid auth protocol
    authProtocol: 'invalid-protocol'
});

// Test that returned session has expected methods
V3Session1.get('1.3.6.1.2.1.1.1.0', (error: ResponseInvalidError | null, varbinds?: Varbind[]) => {});
V3Session1.getBulk(['1.3.6.1.2.1.1.1.0'], 0, 10, (error: ResponseInvalidError | null, varbinds?: (Varbind | Varbind[])[]) => {});
// @ts-expect-error - invalid order
V3Session1.getBulk(['1.3.6.1.2.1.1.1.0'], (error: ResponseInvalidError | null, varbinds?: (Varbind | Varbind[])[], ) => {}, 10);
V3Session1.getNext(['1.3.6.1.2.1.1.1.0'], (error: ResponseInvalidError | null, varbinds?: Varbind[]) => {});
V3Session2.close();
V3Session3.set([{
    oid: '1.3.6.1.2.1.1.5.0',
    type: ObjectType.OctetString,
    value: 'test'
}], (error: any, varbinds?: Varbind[]) => {});

// Minimal valid call - all optional parameters omitted
const session1 = createSession();

// Only target provided
const session2 = createSession("127.0.0.1");

// Target and community provided
const session3 = createSession("127.0.0.1", "public");

// All parameters provided
const session4 = createSession("localhost", "private", {
    version: 1, // Version2c
    timeout: 2000
});

// Invalid cases
// @ts-expect-error - invalid version (must be 0 or 1)
createSession(undefined, undefined, { version: 3 });

// @ts-expect-error - invalid transport type
createSession(undefined, undefined, { transport: "tcp" });

// @ts-expect-error - community must be string if provided
createSession("127.0.0.1", 12345);

// Verify returned Session type has expected methods
session1.get("1.3.6.1.2.1.1.1.0", (error: any, varbinds?: Varbind[]) => {});
session4.close();