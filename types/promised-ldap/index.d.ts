// Type definitions for promised-ldap 0.3
// Project: https://github.com/stewartml/promised-ldap
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { EventEmitter } from "events";
import * as ldap from "ldapjs";

declare class Client extends EventEmitter {
    constructor({ url }: { url: string });

    search(
        base: string,
        options: ldap.SearchOptions,
        controls?: ldap.Control | ldap.Control[]
    ): Promise<{
        entries: any[];
        references: any[];
    }>;

    authenticate(base: string, dn: string, password: string): Promise<any>;
    authenticateUser(
        base: string,
        dn: string,
        password: string
    ): Promise<{ name: string; email: string; groups: string[] } | null>;

    bind(
        dn: string,
        password: string,
        controls?: ldap.Control | ldap.Control[]
    ): Promise<any>;

    add(
        name: string,
        entry: object,
        controls?: ldap.Control | ldap.Control[]
    ): Promise<any>;

    compare(
        name: string,
        attr: string,
        value: string,
        controls?: ldap.Control | ldap.Control[]
    ): Promise<boolean>;

    del(name: string, controls?: ldap.Control | ldap.Control[]): Promise<any>;

    exop(
        name: string,
        value: string,
        controls?: ldap.Control | ldap.Control[]
    ): Promise<any>;

    modify(
        name: string,
        change: ldap.Change | ldap.Change[],
        controls?: ldap.Control | ldap.Control[]
    ): Promise<any>;

    modifyDN(
        name: string,
        newName: string,
        controls?: ldap.Control | ldap.Control[]
    ): Promise<any>;

    _search(
        base: string,
        options: ldap.SearchOptions,
        controls?: ldap.Control | ldap.Control[],
        _bypass?: boolean
    ): Promise<EventEmitter>;
    _search(
        base: string,
        options: ldap.SearchOptions,
        _bypass: boolean
    ): Promise<EventEmitter>;

    starttls(
        options: object,
        controls: ldap.Control | ldap.Control[],
        _bypass?: boolean
    ): Promise<any>;

    unbind(): Promise<void>;

    destroy(err?: any): void;
}

declare namespace Client {
    type SearchOptions = ldap.SearchOptions;
}

export = Client;
