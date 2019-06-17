// Type definitions for ldapjs-client 0.1.1
// Project: https://github.com/zont/ldapjs-client#readme
// Definitions by: Valerio Coltrè <https://github.com/colthreepv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare class Filter {
    matches(obj: any): boolean;
    type: string;
}

export interface Change {
    operation: string;
    modification: {
        [key: string]: any;
    };
}

export interface SearchOptions {
    scope: string;
    filter: string | Filter;
    attributes: string[];
    sizeLimit: number;
    timeLimit: number;
    typesOnly: boolean;
}
export type PartialSearchOptions = Partial<SearchOptions>

export interface ClientOptions {
    url: string;
    tlsOptions?: Object;
    timeout?: number;
}

export class LdapClient {
    constructor(options: ClientOptions);

    /**
     * Adds an entry to the LDAP server.
     *
     * Entry is a  plain JS object
     *
     * @param cn the DN of the entry to add.
     * @param entry object containing ldap item properties
     * @returns {Promise<any>} response from the LDAP server
     */
    add(dn: string, entry: object): Promise<any>;

    /**
     * Performs a simple authentication against the server.
     *
     * @param dn the DN to bind as.
     * @param password the userPassword associated with name.
     * @returns {Promise<any>} response from the LDAP server
     */
    bind(dn: string, password: string): Promise<any>;

    /**
     * Deletes an entry from the LDAP server.
     *
     * @param dn the DN of the entry to delete.
     * @returns {Promise<any>} response from the LDAP server
     */
    del(dn: string): Promise<any>;

    /**
     * Disconnect from the LDAP server and do not allow reconnection.
     *
     * If the client is instantiated with proper reconnection options, it's
     * possible to initiate new requests after a call to unbind since the client
     * will attempt to reconnect in order to fulfill the request.
     *
     * Calling destroy will prevent any further reconnection from occurring.
     */
    destroy(): Promise<void>;

    /**
     * Performs an LDAP modify against the server.
     *
     * @param dn the DN of the entry to modify.
     * @param change update to perform (can be [Change]).
     * @returns {Promise<any>} response from the LDAP server
     */
    modify(dn: string, change: Change): Promise<any>;

    /**
     * Performs an LDAP modifyDN against the server.
     *
     * @param {String} dn the DN of the entry to modify.
     * @param {String} newName the new DN to move this entry to.
     * @returns {Promise<any>} response from the LDAP server
     */
    modifyDN(dn: string, newName: string): Promise<any>;

    /**
     * Performs an LDAP search against the server.
     *
     * Note that the defaults for options are a 'base' search.
     * @param {String} base the DN in the tree to start searching at.
     * @param {PartialSearchOptions} options parameters
     * @returns {Promise<T[]>} response from the LDAP server
     */
    search<T extends any>(base: string, options: PartialSearchOptions): Promise<T[]>;

    /**
     * Unbinds this client from the LDAP server.
     *
     * @returns {Promise<any>} response from the LDAP server
     */
    unbind(): Promise<any>;
}

export default LdapClient;
