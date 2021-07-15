// Type definitions for activedirectory2 1.2
// Project: https://github.com/jsumners/node-activedirectory#readme
// Definitions by: pas <https://github.com/pasthelod>, GaikwadPratik <https://github.com/GaikwadPratik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import { Filter } from "ldapjs";
import { type } from "os";
interface LDAPjsReqProps {
    url: string;
    tlsOptions?: {
        host?: string | undefined;
        key?: string | undefined;
        cert?: string | undefined;
        ca?: string | undefined;
        rejectUnauthorized: boolean;
    };
    socketPath?: string | undefined;
    log?: any;
    timeout?: number | undefined;
    idleTimeout?: number | undefined;
    connectionTimeout?: number | undefined;
    strictDN?: boolean | undefined;
    queueSize?: number | undefined;
    queueTimeout?: number | undefined;
    queueDisable?: boolean | undefined;
    bindDN?: string | undefined;
    bindCredentials?: string | undefined;
}

type MembershipType = 'all'|'user'|'group';

interface ReqProps extends LDAPjsReqProps {
    baseDN?: string | undefined;
    bindDN?: string | undefined;
    bindCredentials?: string | undefined;
    scope?: 'base' | 'one' | 'sub' | undefined;
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

interface ADProperties extends LDAPjsReqProps {
    url: string;
    baseDN: string;
    username: string;
    password: string;
    pageSize?: 1000 | undefined;
    entryParser?: ((entry: object, raw: string, cb: (entry: object) => void) => void) | undefined;
    referrals?: {
        enabled: false,
        exclude: [
            'ldaps?://ForestDnsZones\\..*/.*',
            'ldaps?://DomainDnsZones\\..*/.*',
            'ldaps?://.*/CN=Configuration,.*'
        ]
    } | undefined;
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
    } | undefined;
}

export class ActiveDirectory {
    constructor(props: ADProperties);
    authenticate(
        username: string,
        password: string,
        callback?: (err: string, authenticated: boolean) => void
    ): void;
    isUserMemberOf(
        username: string,
        groupName: string,
        callback?: (err: object, res: boolean) => void
    ): void;
    isUserMemberOf(
        opts: ReqProps,
        username: string,
        groupName: string,
        callback?: (err: object, res: boolean) => void
    ): void;
    find(callback?: (err: object, results: FindResult) => void): void;
    find(
        opts: string | ReqProps,
        callback?: (err: object, results: FindResult) => void
    ): void;
    findDeletedObjects(callback?: (err: object, results: object[]) => void): void;
    findDeletedObjects(
        opts: string | ReqProps,
        callback?: (err: object, results: object[]) => void
    ): void;
    findUser(
        username: string,
        callback?: (err: object, user: object) => void
    ): void;
    findUser(username: string): Promise<object>;
    findUser(
        opts: string | ReqProps,
        username: string,
        callback?: (err: object, user: object) => void
    ): void;
    findUsers(callback?: (err: object, users: object[]) => void): void;
    findUsers(
        opts: string | ReqProps,
        callback?: (err: object, users: object[]) => void
    ): void;
    findGroup(
        groupName: string,
        callback?: (err: object, group: object) => void
    ): void;
    findGroup(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, group: object) => void
    ): void;
    findGroups(
        groupName: string,
        callback?: (err: object, groups: object[]) => void
    ): void;
    findGroups(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, groups: object[]) => void
    ): void;
    groupExists(
        groupName: string,
        callback?: (err: object, res: boolean) => void
    ): void;
    groupExists(groupName: string): Promise<boolean>;
    groupExists(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, res: boolean) => void
    ): void;
    groupExists(opts: string | ReqProps, groupName: string): Promise<boolean>;
    userExists(
        username: string,
        callback?: (err: object, res: boolean) => void
    ): void;
    userExists(groupName: string): Promise<boolean>;
    userExists(
        opts: string | ReqProps,
        username: string,
        callback?: (err: object, res: boolean) => void
    ): void;
    userExists(opts: string | ReqProps, groupName: string): Promise<boolean>;
    getGroupMembershipForGroup(
        groupName: string,
        callback?: (err: object, groups: object[]) => void
    ): void;
    getGroupMembershipForGroup(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, groups: object[]) => void
    ): void;
    getGroupMembershipForUser(
        username: string,
        callback?: (err: object, groups: object[]) => void
    ): void;
    getGroupMembershipForUser(
        opts: string | ReqProps,
        username: string,
        callback?: (err: object, groups: object[]) => void
    ): void;
    getUsersForGroup(
        groupName: string,
        callback?: (err: object, users: object[]) => void
    ): void;
    getUsersForGroup(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, users: object[]) => void
    ): void;
    getRootDSE(
        url?: string,
        attributes?: string[],
        callback?: (err: object, result: object) => void
    ): void;
}

declare class PromiseWrapper {
    constructor(props: ADProperties);
    authenticate(username: string, password: string): Promise<boolean>;
    isUserMemberOf(username: string, groupName: string): Promise<boolean>;
    isUserMemberOf(opts: ReqProps, username: string, groupName: string): Promise<boolean>;
    find(opts?: string | ReqProps): Promise<FindResult>;
    findDeletedObjects(opts?: string | ReqProps): Promise<object[]>;
    findUser(opts: string | ReqProps, username: string): Promise<object>;
    findUsers(opts?: string | ReqProps): Promise<object[]>;
    findGroup(groupName: string): Promise<object>;
    findGroup(opts: string | ReqProps, groupName: string): Promise<object>;
    findGroups(groupName: string): Promise<object[]>;
    findGroups(opts: string | ReqProps, groupName: string): Promise<object[]>;
    getGroupMembershipForGroup(groupName: string): Promise<object[]>;
    getGroupMembershipForGroup(opts: string | ReqProps, groupName: string): Promise<object[]>;
    getGroupMembershipForUser(username: string): Promise<object[]>;
    getGroupMembershipForUser( opts: string | ReqProps, username: string): Promise<object[]>;
    getUsersForGroup(groupName: string): Promise<object[]>;
    getUsersForGroup(opts: string | ReqProps, groupName: string): Promise<object[]>;
    getRootDSE(url?: string, attributes?: string[]): Promise<object>;
}

export { PromiseWrapper as promiseWrapper };

export function getRootDSE(url: string, attributes?: string[], callback?:(err: object, res: string) => void): void;

export type defaultAttributes = {
    user: string[],
    group: string[]
}