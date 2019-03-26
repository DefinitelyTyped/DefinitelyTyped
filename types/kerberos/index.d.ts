// Type definitions for kerberos 1.1
// Project: https://github.com/mongodb-js/kerberos#readme
// Definitions by: Shervin Sarain <https://github.com/velezsarain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const GSS_C_DELEG_FLAG: number;
export const GSS_C_MUTUAL_FLAG: number;
export const GSS_C_REPLAY_FLAG: number;
export const GSS_C_SEQUENCE_FLAG: number;
export const GSS_C_CONF_FLAG: number;
export const GSS_C_INTEG_FLAG: number;
export const GSS_C_ANON_FLAG: number;
export const GSS_C_PROT_READY_FLAG: number;
export const GSS_C_TRANS_FLAG: number;

export const GSS_C_NO_OID: number;
export const GSS_MECH_OID_KRB5: number;
export const GSS_MECH_OID_SPNEGO: number;

// Interfaces for configuration objects
/**
 * @description Optional settings for *KerberosClient.wrap* method
 */
export interface WrapOptions {
    /**
     * @description The user to authorize
     */
    user?: string;
}

/**
 * @description Optional settings for *KerberosClient.wrap* method
 */
export interface InitializeClientOptions {
    /**
     * @description Optional string containing the client principal in the form '`user@realm`'
     */
    principal?: string;
    /**
     * @description Optional integer used to set GSS flags. (e.g. GSS_C_DELEG_FLAG|GSS_C_MUTUAL_FLAG|GSS_C_SEQUENCE_FLAG will allow for forwarding credentials to the remote host)
     */
    gssFlag?: number;
    /**
     * @description Optional GSS mech OID. Defaults to None (GSS_C_NO_OID). Other possible values are `GSS_MECH_OID_KRB5`, `GSS_MECH_OID_SPNEGO`
     */
    mechOID?: number;
}

export class KerberosClient {
    /**
     * @description The username used for authentication
     */
    username: string;
    /**
     * @description The last response received during authentication steps
     */
    response: string;
    /**
     * @description Indicates whether confidentiality was applied or not (GSSAPI only)
     */
    responseConf: string;
    /**
     * @description Indicates that authentication has successfully completed or not
     */
    contextComplete: boolean;

    /**
     * Processes a single kerberos client-side step using the supplied server challenge.
     *
     * @param challenge A string containing the base64-encoded server data (which may be empty for the first step)
     * @param callback
     * @return returns Promise if no callback passed
     */
    step(challenge: string): Promise<string>;
    step(challenge: string, callback: (err: string, clientResponse: string) => any): void;

    /**
     * Perform the client side kerberos wrap step.
     *
     * @param challenge The response returned after calling `unwrap`
     * @param options Optional settings
     * @param [callback]
     * @return returns Promise if no callback passed
     */
    wrap(challenge: string, options?: WrapOptions): Promise<string>;
    wrap(challenge: string, callback: (err: string, challengeResponse: string) => any): void;
    wrap(challenge: string, options: WrapOptions, callback: (err: string, challengeResponse: string) => any): void;

    /**
     * Perform the client side kerberos unwrap step
     *
     * @param challenge A string containing the base64-encoded server data
     * @param callback
     * @return returns Promise if no callback passed
     */
    unwrap(challenge: string): Promise<string>;
    unwrap(challenge: string, callback: (err: string, challengeResponse: string) => any): void;
}

export class KerberosServer {
    /**
     * @description  The username used for authentication
     */
    username: string;
    /**
     * @description The last response received during authentication steps
     */
    response: string;
    /**
     * @description The target used for authentication
     */
    targetName: string;
    /**
     * @description Indicates that authentication has successfully completed or not
     */
    contextComplete: boolean;

    /**
     * Processes a single kerberos server-side step using the supplied client data.
     *
     * @param challenge A string containing the base64-encoded client data
     * @param callback
     * @return returns Promise if no callback passed
     */
    step(challenge: string): Promise<string>;
    step(challenge: string, callback: (err: string, serverResponse: string) => any): void;
}

/**
 * This function provides a simple way to verify that a user name and password
 * match those normally used for Kerberos authentication.
 * It does this by checking that the supplied user name and password can be
 * used to get a ticket for the supplied service.
 * If the user name does not contain a realm, then the default realm supplied
 * is used.
 *
 * For this to work properly the Kerberos must be configured properly on this
 * machine.
 * That will likely mean ensuring that the edu.mit.Kerberos preference file
 * has the correct realms and KDCs listed.
 *
 * IMPORTANT: This method is vulnerable to KDC spoofing attacks and it should
 * only be used for testing. Do not use this in any production system - your
 * security could be compromised if you do.
 *
 * @param username The Kerberos user name. If no realm is supplied, then the `defaultRealm` will be used.
 * @param password The password for the user.
 * @param service The Kerberos service to check access for.
 * @param defaultRealm The default realm to use if one is not supplied in the user argument.
 * @param callback
 * @return returns Promise if no callback passed
 */
export function checkPassword(name: string, password: string, service: string, defaultRealm?: string): Promise<void>;
export function checkPassword(name: string, password: string, service: string, callback: (err: string) => any): void;
export function checkPassword(name: string, password: string, service: string, defaultRealm: string, callback: (err: string) => any): void;

/**
 * This function returns the service principal for the server given a service type and hostname.
 *
 * Details are looked up via the `/etc/keytab` file.
 *
 * @param service The Kerberos service type for the server.
 * @param hostname The hostname of the server.
 * @param callback
 * @return returns Promise if no callback passed
 */
export function principalDetails(service: string, hostname: string): Promise<string>;
export function principalDetails(service: string, hostname: string, callback: (err: string, details: string) => any): void;

/**
 * Initializes a context for client-side authentication with the given service principal.
 *
 * @param service A string containing the service principal in the form '`type@fqdn`'.
 * @param [options] Optional settings
 * @param callback
 * @return returns Promise if no callback passed
 */
export function initializeClient(service: string, options?: InitializeClientOptions): Promise<KerberosClient>;
export function initializeClient(service: string, callback: (err: string, client: KerberosClient) => any): void;
export function initializeClient(service: string, options: InitializeClientOptions, callback: (err: string, client: KerberosClient) => any): void;

/**
 * Initializes a context for server-side authentication with the given service principal.
 *
 * @param service A string containing the service principal in the form 'type@fqdn' (e.g. 'imap@mail.apple.com').
 * @param callback
 * @return returns Promise if no callback passed
 */
export function initializeServer(service: string): Promise<KerberosServer>;
export function initializeServer(service: string, callback: (err: string, server: KerberosServer) => any): void;
