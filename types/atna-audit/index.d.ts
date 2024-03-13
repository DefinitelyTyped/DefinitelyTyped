/// <reference types="node" />

import type { ConnectionOptions } from "tls";

export interface Constants {
    OUTCOME_SUCCESS: 0;
    OUTCOME_MINOR_FAILURE: 4;
    OUTCOME_SERIOUS_FAILURE: 8;
    OUTCOME_MAJOR_FAILURE: 12;

    // Network Access Point Type Code
    EVENT_ACTION_CREATE: "C";
    EVENT_ACTION_READ: "R";
    EVENT_ACTION_UPDATE: "U";
    EVENT_ACTION_DELETE: "D";
    EVENT_ACTION_EXECUTE: "E";

    // Network Access Point Type Code
    NET_AP_TYPE_DNS: 1;
    NET_AP_TYPE_IP: 2;
    NET_AP_TYPE_TEL: 3;

    // Audit Source Type Code
    AUDIT_SRC_TYPE_UI: 1;
    AUDIT_SRC_TYPE_DATA_AQUISITION: 2;
    AUDIT_SRC_TYPE_WEB_SERVER: 3;
    AUDIT_SRC_TYPE_APP_SERVER: 4;
    AUDIT_SRC_TYPE_DB_SERVER: 5;
    AUDIT_SRC_TYPE_SECURITY_SERVER: 6;
    AUDIT_SRC_TYPE_NET_COMP: 7;
    AUDIT_SRC_TYPE_OS: 8;
    AUDIT_SRC_TYPE_EXTERN: 9;

    // Participant Object Type Code
    OBJ_TYPE_PERSON: 1;
    OBJ_TYPE_SYS_OBJ: 2;
    OBJ_TYPE_ORG: 3;
    OBJ_TYPE_OTHER: 4;

    // Participant Object Type Code Role
    OBJ_TYPE_CODE_ROLE_PATIENT: 1;
    OBJ_TYPE_CODE_ROLE_LOCATION: 2;
    OBJ_TYPE_CODE_ROLE_REPORT: 3;
    OBJ_TYPE_CODE_ROLE_RESOURCE: 4;
    OBJ_TYPE_CODE_ROLE_MASTER_FILE: 5;
    OBJ_TYPE_CODE_ROLE_USER: 6;
    OBJ_TYPE_CODE_ROLE_LIST: 7;
    OBJ_TYPE_CODE_ROLE_DOCTOR: 8;
    OBJ_TYPE_CODE_ROLE_SUBSCRIBER: 9;
    OBJ_TYPE_CODE_ROLE_GUARANTOR: 10;
    OBJ_TYPE_CODE_ROLE_SECURITY_USER_ENTITY: 11;
    OBJ_TYPE_CODE_ROLE_SECURITY_USER_GROUP: 12;
    OBJ_TYPE_CODE_ROLE_SECURITY_RESOURCE: 13;
    OBJ_TYPE_CODE_ROLE_SECURITY_GRANULARITY: 14;
    OBJ_TYPE_CODE_ROLE_PROVIDER: 15;
    OBJ_TYPE_CODE_ROLE_DATA_DESTINATION: 16;
    OBJ_TYPE_CODE_ROLE_DATA_REPOSITORY: 17;
    OBJ_TYPE_CODE_ROLE_SCHEDULE: 18;
    OBJ_TYPE_CODE_ROLE_CUSTOMER: 19;
    OBJ_TYPE_CODE_ROLE_JOB: 20;
    OBJ_TYPE_CODE_ROLE_JOB_STREAM: 21;
    OBJ_TYPE_CODE_ROLE_QUERY: 24;

    // Participant Object ID Type Code
    OBJ_ID_TYPE_MRN: 1;
    OBJ_ID_TYPE_PAT_NUM: 2;
    OBJ_ID_TYPE_ENCOUNTER_NUM: 3;
    OBJ_ID_TYPE_ENROLLEE_NUM: 4;
    OBJ_ID_TYPE_SSN: 5;
    OBJ_ID_TYPE_ACC_NUM: 6;
    OBJ_ID_TYPE_GUARANTOR_NUM: 7;
    OBJ_ID_TYPE_REPORT_NAME: 8;
    OBJ_ID_TYPE_REPORT_NUM: 9;
    OBJ_ID_TYPE_SEARCH_CRIT: 10;
    OBJ_ID_TYPE_USER_ID: 11;
    OBJ_ID_TYPE_URI: 12;
}
export const constants: Constants;

export namespace construct {
    class Code {
        constructor(code: number, originalText: string, codeSystemName: string, displayName?: string);

        toXML(): string;
    }

    class EventIdentification {
        constructor(actionCode: string, datetime: Date, outcome: number, eventID: Code, typeCode?: Code);

        toXML(): string;
    }

    class ActiveParticipant {
        constructor(
            userId: string,
            altUserId: string,
            userIsRequestor: boolean,
            netAccessPointId: string | null | undefined,
            netAccessPointTypeCode: number | null | undefined,
            roleCodes: Code[],
        );

        toXML(): string;
    }

    class AuditSourceIdentification {
        constructor(auditEnterpriseSiteId: string | null | undefined, auditSourceId: string, auditSourceTypeCode: Code);

        toXML(): string;
    }

    class AuditMessage {
        constructor(
            eventIdent?: EventIdentification | null,
            activeParticipants?: ActiveParticipant[] | null,
            participantObjs?: unknown[] | null,
            auditSources?: AuditSourceIdentification[] | null,
        );

        toXML(): string;
    }

    function userLoginAudit(
        outcome: number,
        sysname: string,
        hostname: string,
        username: string,
        userRole: string,
        userRoleCode: string,
    ): string;

    function wrapInSyslog(msg: string): string;
}

export namespace send {
    type SendCallback = (err?: Error) => void;

    interface CommonConnDetail {
        host: string;
        port: number;
    }

    interface UdpConnDetail extends CommonConnDetail {
        interface: "udp";
    }

    interface TcpConnDetail extends CommonConnDetail {
        interface: "tcp";
    }

    interface TlsConnDetail extends CommonConnDetail {
        interface: "tls";
        options?: ConnectionOptions;
    }

    type SendConnDetail = UdpConnDetail | TcpConnDetail | TlsConnDetail;

    function sendAuditEvent(msg: string, connDetail: SendConnDetail, callback?: SendCallback | null): void;
}
