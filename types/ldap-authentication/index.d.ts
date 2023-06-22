// Type definitions for ldap-authentication 2.2
// Project: https://github.com/shaozi/ldap-authentication#readme
// Definitions by: Simone Corsi <https://github.com/simonecorsi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ClientOptions } from 'ldapjs';

export interface AuthenticationOptions {
    ldapOpts: ClientOptions;
    userDn?: string;
    adminDn?: string;
    adminPassword?: string;
    userSearchBase?: string;
    usernameAttribute?: string;
    username?: string;
    verifyUserExists?: boolean;
    starttls?: boolean;
    groupsSearchBase?: string;
    groupClass?: string;
    groupMemberAttribute?: string;
    groupMemberUserAttribute?: string;
    userPassword?: string;
}

export function authenticate(options: AuthenticationOptions): Promise<any>;

export class LdapAuthenticationError extends Error {
    constructor(message: any);
    name: string;
}

export as namespace LdapAuthentication;
