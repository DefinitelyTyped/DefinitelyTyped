// Type definitions for activedirectory2 1.2
// Project: https://github.com/jsumners/node-activedirectory#readme
// Definitions by: pas <https://github.com/pasthelod>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import { Filter } from "ldapjs";

interface ADProperties {
    url: string;
    baseDN: string;
    username: string;
    password: string;
    pageSize?: 1000;
    entryParser?: (entry: object, raw: string, cb: (entry: object) => void) => void;
    referrals?: {
        enabled: false,
        exclude: [
            'ldaps?://ForestDnsZones\\..*/.*',
            'ldaps?://DomainDnsZones\\..*/.*',
            'ldaps?://.*/CN=Configuration,.*'
        ]
    };
    attributes?: {
        user: [
            'dn', 'distinguishedName',
            'userPrincipalName', 'sAMAccountName', 'mail',
            'lockoutTime', 'whenCreated', 'pwdLastSet', 'userAccountControl',
            'employeeID', 'sn', 'givenName', 'initials', 'cn', 'displayName',
            'comment', 'description'
        ],
        group: [
            'dn', 'cn', 'description', 'distinguishedName', 'objectCategory'
        ]
    };
}

interface LDAPjsReqProps {
    url: string;
    tlsOptions: {
        host?: string;
        key?: string;
        cert?: string;
        ca?: string;
        rejectUnauthorized: boolean;
    };
    socketPath?: string;
    log?: any;
    timeout?: number;
    idleTimeout?: number;
    connectionTimeout?: number;
    strictDN?: boolean;
}

type MembershipType = 'all'|'user'|'group';

interface ReqProps extends LDAPjsReqProps {
    baseDN?: string;
    bindDN?: string;
    bindCredentials?: string;
    scope?: 'base' | 'one' | 'sub';
    filter: string | Filter;
    attributes: AttributeSpec;
    sizeLimit: 0;
    timeLimit: 10;
    includeMembership: MembershipType[];
}

interface AttributeSpec {
    user: UserAttributes[];
    group: GroupAttributes[];
}

type GroupAttributes =
    | 'distinguishedName'
    | 'objectCategory'
    | 'cn'
    | 'description';

type UserAttributes =
    | 'distinguishedName'
    | 'userPrincipalName'
    | 'sAMAccountName'
    | 'mail'
    | 'lockoutTime'
    | 'whenCreated'
    | 'pwdLastSet'
    | 'userAccountControl'
    | 'employeeID'
    | 'sn'
    | 'givenName'
    | 'initials'
    | 'cn'
    | 'displayName'
    | 'comment'
    | 'description';

interface FindResult {
    groups: object[];
    users: object[];
    other: object[];
}

declare class ActiveDirectory {
    constructor(props: ADProperties);
    authenticate(
        username: string,
        password: string,
        callback: (err: string, authenticated: boolean) => void
    ): void;
    isUserMemberOf(
        opts: ReqProps,
        username: string,
        groupName: string,
        callback: (err: object, res: boolean) => void
    ): void;
    find(
        opts: string | ReqProps,
        callback: (err: object, results: FindResult) => void
    ): void;
    findDeletedObjects(
        opts: string | ReqProps,
        callback: (err: object, results: object[]) => void
    ): void;
    findUser(
        opts: string | ReqProps,
        username: string,
        callback: (err: object, user: object) => void
    ): void;
    findUsers(
        opts: string | ReqProps,
        callback: (err: object, users: object[]) => void
    ): void;
    findGroup(
        opts: string | ReqProps,
        groupName: string,
        callback: (err: object, group: object) => void
    ): void;
    findGroups(
        opts: string | ReqProps,
        groupName: string,
        callback: (err: object, groups: object[]) => void
    ): void;
    getRootDSE(
        url: string,
        attributes: string[],
        callback: (err: object, result: object) => void
    ): void;
}

export = ActiveDirectory;
