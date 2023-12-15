declare namespace LdapClient {
    interface Change {
        operation: "add" | "delete" | "replace";
        modification: {
            [key: string]: any;
        };
    }

    interface SearchOptions {
        scope?: string | undefined;
        filter?: string | undefined;
        attributes?: string[] | undefined;
        sizeLimit?: number | undefined;
        timeLimit?: number | undefined;
        typesOnly?: boolean | undefined;
    }

    interface ClientOptions {
        url: string;
        tlsOptions?: object | undefined;
        timeout?: number | undefined;
    }
}

declare class LdapClient {
    constructor(options: LdapClient.ClientOptions);

    /**
     * Adds an entry to the LDAP server.
     */
    add(dn: string, entry: object): Promise<any>;

    /**
     * Performs a simple authentication against the server.
     */
    bind(dn: string, password: string): Promise<any>;

    /**
     * Deletes an entry from the LDAP server.
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
     */
    modify(dn: string, change: LdapClient.Change): Promise<any>;

    /**
     * Performs an LDAP modifyDN against the server.
     */
    modifyDN(dn: string, newName: string): Promise<any>;

    /**
     * Performs an LDAP search against the server.
     *
     * Note that the defaults for options are a 'base' search.
     */
    search(base: string, options: LdapClient.SearchOptions): Promise<unknown[]>;

    /**
     * Unbinds this client from the LDAP server.
     */
    unbind(): Promise<any>;
}

export = LdapClient;
