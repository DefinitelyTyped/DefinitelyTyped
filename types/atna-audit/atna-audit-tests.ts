import * as atna from 'atna-audit';

const userLoginAudit = atna.construct.userLoginAudit(
    atna.constants.OUTCOME_SUCCESS,
    'openhim',
    'x.x.x.x',
    'testUser',
    'testRole',
    '123',
);
const syslog = atna.construct.wrapInSyslog(userLoginAudit);

const eventID = new atna.construct.Code(110114, 'UserAuthenticated', 'DCM');
const typeCode = new atna.construct.Code(110122, 'Login', 'DCM');
const eIdent = new atna.construct.EventIdentification(
    atna.constants.EVENT_ACTION_EXECUTE,
    new Date(),
    atna.constants.OUTCOME_SUCCESS,
    eventID,
    typeCode,
);
const sysRoleCode = new atna.construct.Code(110150, 'Application', 'DCM');
const sysParticipant = new atna.construct.ActiveParticipant(
    'userId',
    '',
    true,
    '1.2.3.4',
    atna.constants.NET_AP_TYPE_IP,
    [sysRoleCode],
);
const userRoleCodeDef = new atna.construct.Code(1234, 'userRole', 'DCM');
const userParticipant = new atna.construct.ActiveParticipant('username', '', true, null, null, [userRoleCodeDef]);
const sourceTypeCode = new atna.construct.Code(atna.constants.AUDIT_SRC_TYPE_UI, '', '');
const sourceIdent = new atna.construct.AuditSourceIdentification(null, 'auditSource', sourceTypeCode);
const audit = new atna.construct.AuditMessage(eIdent, [sysParticipant, userParticipant], null, [sourceIdent]);
audit.toXML().split('<');

atna.send.sendAuditEvent(
    syslog,
    {
        interface: 'udp',
        host: 'localhost',
        port: 5050,
    },
    err => {
        throw err;
    },
);

// UDP Audit Event
atna.send.sendAuditEvent(syslog, {
    interface: 'udp',
    host: 'localhost',
    port: 5050,
});

// TCP Audit Event
atna.send.sendAuditEvent(syslog, {
    interface: 'tcp',
    host: 'localhost',
    port: 5050,
});

// TLS Audit Event
atna.send.sendAuditEvent(syslog, {
    interface: 'tls',
    host: 'localhost',
    port: 5050,
    options: {
        key: 'key',
        cert: 'cert',
        ca: 'ca',
        enableTrace: true,
        checkServerIdentity: (servername, cert) => undefined,
    },
});
