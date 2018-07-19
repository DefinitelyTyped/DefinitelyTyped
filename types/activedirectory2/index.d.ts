/// <reference types="ldapjs" />

declare module 'activedirectory2' {
    import { Filter } from "ldapjs";

    interface ADProperties {
        url: String,
        baseDN: String,
        username: String,
        password: String,
        pageSize?: 1000,
        entryParser?: (entry: object, raw: String, cb: (entry: object) => void) => void
        referrals?: {
            enabled: false,
            exclude: [
                'ldaps?://ForestDnsZones\\..*/.*',
                'ldaps?://DomainDnsZones\\..*/.*',
                'ldaps?://.*/CN=Configuration,.*'
            ]
        },
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
        }
    }

    interface LDAPjsReqProps {
        url: String;
        tlsOptions: {
            host?: String;
            key?: String;
            cert?: String;
            ca?: String;
            rejectUnauthorized: boolean;
        },
        socketPath?: String;
        log?: any;
        timeout?: number;
        idleTimeout?: number;
        connectionTimeout?: number;
        strictDN?: boolean;
    }

    interface ReqProps extends LDAPjsReqProps {
        baseDN?: String;
        bindDN?: String;
        bindCredentials?: String;
        scope?: 'base' | 'one' | 'sub';
        filter: String | Filter;
        attributes: AttributeSpec;
        sizeLimit: 0;
        timeLimit: 10;
        includeMembership: Array<'all'|'user'|'group'>;
    }

    interface AttributeSpec {
        user: Array<UserAttributes>
        group: Array<GroupAttributes>
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
        groups: Array<object>;
        users: Array<object>;
        other: Array<object>;
    }

    class ActiveDirectory {
        constructor(props: ADProperties);
        authenticate(
            username: String,
            password: String,
            callback: (err: String, authenticated: boolean) => void
        ): void;
        isUserMemberOf(
            opts: ReqProps,
            username: String,
            groupName: String,
            callback: (err: object, res: boolean) => void
        ): void;
        find(
            opts: String | ReqProps,
            callback: (err: object, results: FindResult) => void
        ): void;
        findDeletedObjects(
            opts: String | ReqProps,
            callback: (err: object, results: Array<object>) => void
        ): void;
        findUser(
            opts: String | ReqProps,
            username: String,
            callback: (err: object, user: object) => void
        ): void;
        findUsers(
            opts: String | ReqProps,
            callback: (err: object, users: Array<object>) => void
        ): void;
        findGroup(
            opts: String | ReqProps,
            groupName: String,
            callback: (err: object, group: object) => void
        ): void;
        findGroups(
            opts: String | ReqProps,
            groupName: String,
            callback: (err: object, groups: Array<object>) => void
        ): void;
        getRootDSE(
            url: String,
            attributes: Array<String>,
            callback: (err: object, result: object) => void
        ): void;
    }



    export = ActiveDirectory;
}
