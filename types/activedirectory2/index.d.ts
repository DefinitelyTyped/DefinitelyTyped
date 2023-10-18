import { Filter } from "ldapjs";

interface ADProperties {
    url: string;
    baseDN: string;
    username: string;
    password: string;
    pageSize?: 1000 | undefined;
    entryParser?: ((entry: object, raw: string, cb: (entry: object) => void) => void) | undefined;
    referrals?: {
        enabled: false;
        exclude: [
            "ldaps?://ForestDnsZones\\..*/.*",
            "ldaps?://DomainDnsZones\\..*/.*",
            "ldaps?://.*/CN=Configuration,.*",
        ];
    } | undefined;
    attributes?: {
        user: [
            "dn",
            "distinguishedName",
            "userPrincipalName",
            "sAMAccountName",
            "mail",
            "lockoutTime",
            "whenCreated",
            "pwdLastSet",
            "userAccountControl",
            "employeeID",
            "sn",
            "givenName",
            "initials",
            "cn",
            "displayName",
            "comment",
            "description",
        ];
        group: [
            "dn",
            "cn",
            "description",
            "distinguishedName",
            "objectCategory",
        ];
    } | undefined;
}

interface LDAPjsReqProps {
    url: string;
    tlsOptions: {
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
}

type MembershipType = "all" | "user" | "group";

interface ReqProps extends LDAPjsReqProps {
    baseDN?: string | undefined;
    bindDN?: string | undefined;
    bindCredentials?: string | undefined;
    scope?: "base" | "one" | "sub" | undefined;
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
    | "distinguishedName"
    | "objectCategory"
    | "cn"
    | "description";

type UserAttributes =
    | "distinguishedName"
    | "userPrincipalName"
    | "sAMAccountName"
    | "mail"
    | "lockoutTime"
    | "whenCreated"
    | "pwdLastSet"
    | "userAccountControl"
    | "employeeID"
    | "sn"
    | "givenName"
    | "initials"
    | "cn"
    | "displayName"
    | "comment"
    | "description";

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
        callback?: (err: string, authenticated: boolean) => void,
    ): void;
    isUserMemberOf(
        username: string,
        groupName: string,
        callback?: (err: object, res: boolean) => void,
    ): void;
    isUserMemberOf(
        opts: ReqProps,
        username: string,
        groupName: string,
        callback?: (err: object, res: boolean) => void,
    ): void;
    find(callback?: (err: object, results: FindResult) => void): void;
    find(
        opts: string | ReqProps,
        callback?: (err: object, results: FindResult) => void,
    ): void;
    findDeletedObjects(callback?: (err: object, results: object[]) => void): void;
    findDeletedObjects(
        opts: string | ReqProps,
        callback?: (err: object, results: object[]) => void,
    ): void;
    findUser(
        username: string,
        callback?: (err: object, user: object) => void,
    ): void;
    findUser(
        opts: string | ReqProps,
        username: string,
        callback?: (err: object, user: object) => void,
    ): void;
    findUsers(callback?: (err: object, users: object[]) => void): void;
    findUsers(
        opts: string | ReqProps,
        callback?: (err: object, users: object[]) => void,
    ): void;
    findGroup(
        groupName: string,
        callback?: (err: object, group: object) => void,
    ): void;
    findGroup(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, group: object) => void,
    ): void;
    findGroups(
        groupName: string,
        callback?: (err: object, groups: object[]) => void,
    ): void;
    findGroups(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, groups: object[]) => void,
    ): void;
    groupExists(
        groupName: string,
        callback?: (err: object, res: boolean) => void,
    ): void;
    groupExists(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, res: boolean) => void,
    ): void;
    userExists(
        username: string,
        callback?: (err: object, res: boolean) => void,
    ): void;
    userExists(
        opts: string | ReqProps,
        username: string,
        callback?: (err: object, res: boolean) => void,
    ): void;
    getGroupMembershipForGroup(
        groupName: string,
        callback?: (err: object, groups: object[]) => void,
    ): void;
    getGroupMembershipForGroup(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, groups: object[]) => void,
    ): void;
    getGroupMembershipForUser(
        username: string,
        callback?: (err: object, groups: object[]) => void,
    ): void;
    getGroupMembershipForUser(
        opts: string | ReqProps,
        username: string,
        callback?: (err: object, groups: object[]) => void,
    ): void;
    getUsersForGroup(
        groupName: string,
        callback?: (err: object, users: object[]) => void,
    ): void;
    getUsersForGroup(
        opts: string | ReqProps,
        groupName: string,
        callback?: (err: object, users: object[]) => void,
    ): void;
    getRootDSE(
        url: string,
        attributes: string[],
        callback?: (err: object, result: object) => void,
    ): void;
}

export = ActiveDirectory;
