import { createV3Session, SecurityLevel, AuthProtocols, PrivProtocols, ObjectType } from 'net-snmp';

// Basic successful cases
const session1 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv,
    authProtocol: AuthProtocols.sha,
    authKey: 'authkey123',
    privProtocol: PrivProtocols.aes,
    privKey: 'privkey123'
});

const session2 = createV3Session('localhost', {
    name: 'testuser2',
    level: SecurityLevel.noAuthNoPriv
});

// With options
const session3 = createV3Session('192.168.1.1', {
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

// @ts-expect-error - invalid version in options
const sessionError2 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv
}, { version: 2 });

// @ts-expect-error - invalid transport
const sessionError3 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv
}, { transport: 'tcp' });

// @ts-expect-error - invalid auth protocol
const sessionError4 = createV3Session('127.0.0.1', {
    name: 'testuser',
    level: SecurityLevel.authPriv,
    authProtocol: 'invalid-protocol'
});

// Test that returned session has expected methods
session1.get('1.3.6.1.2.1.1.1.0', (error: any, varbinds: any) => {});
session2.close();
session3.set([{
    oid: '1.3.6.1.2.1.1.5.0',
    type: ObjectType.OctetString,
    value: 'test'
}], (error: any, varbinds: any) => {});