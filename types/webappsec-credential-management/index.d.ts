// Type definitions for W3C (WebAppSec) Credential Management API Level 1, 0.1
// Project: https://github.com/w3c/webappsec-credential-management
// Definitions by: Iain McGinniss <https://github.com/iainmcgin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Spec: http://www.w3.org/TR/2016/WD-credential-management-1-20160425/

/* ************************ FETCH API DEFINITIONS ******************************
 * TS 2.2 introduced definitions for the fetch API in the dom library, but
 * prior to that it was necessary to use the types defined in
 * @types/whatwg-fetch. In order to support all versions of TS 2.x, the
 * definitions for fetch from TS 2.2 dom are duplicated here. As long as these
 * remain identical to the definitions in dom 2.2+, they cause no issues.
 *
 * One caveat to "identical" here is that type definitions cannot be duplicated,
 * and so the "RequestInfo" type has been substituted for its expansion in
 * the below definitions:
 *
 * type RequestInfo = Request|string;
 * ************************************************************************** */

interface Request extends Object, Body {
    readonly cache: string;
    readonly credentials: string;
    readonly destination: string;
    readonly headers: Headers;
    readonly integrity: string;
    readonly keepalive: boolean;
    readonly method: string;
    readonly mode: string;
    readonly redirect: string;
    readonly referrer: string;
    readonly referrerPolicy: string;
    readonly type: string;
    readonly url: string;
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: Request | string, init?: RequestInit): Request;
};

interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(callback: ForEachCallback): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: any): Headers;
};

interface Response extends Object, Body {
    readonly body: ReadableStream | null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: string;
    readonly url: string;
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: any, init?: ResponseInit): Response;
};

interface ResponseInit {
    status?: number;
    statusText?: string;
    headers?: any;
}

interface ReadableStream {
    readonly locked: boolean;
    cancel(): Promise<void>;
    getReader(): ReadableStreamReader;
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(): ReadableStream;
};

interface ReadableStreamReader {
    cancel(): Promise<void>;
    read(): Promise<any>;
    releaseLock(): void;
}

declare var ReadableStreamReader: {
    prototype: ReadableStreamReader;
    new(): ReadableStreamReader;
};

interface Body {
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface URLSearchParams {
    /**
      * Appends a specified key/value pair as a new search parameter.
      */
    append(name: string, value: string): void;
    /**
      * Deletes the given search parameter, and its associated value, from the list of all search parameters.
      */
    delete(name: string): void;
    /**
      * Returns the first value associated to the given search parameter.
      */
    get(name: string): string | null;
    /**
      * Returns all the values association with a given search parameter.
      */
    getAll(name: string): string[];
    /**
      * Returns a Boolean indicating if such a search parameter exists.
      */
    has(name: string): boolean;
    /**
      * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
      */
    set(name: string, value: string): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    /**
      * Constructor returning a URLSearchParams object.
      */
    new (init?: string | URLSearchParams): URLSearchParams;
};

interface GlobalFetch {
    fetch(input: Request|string, init?: RequestInit): Promise<Response>;
}

/* ************************* FETCH MODIFICATIONS *******************************
 * The credential management spec modifies fetch(), by adding a new
 * "request credentials mode", and permitting a PasswordCredential to be passed
 * as part of 'credentials' init parameter. As we cannot directly modify
 * the types defined in whatwg-fetch (especially for a draft spec), we
 * define a variant of the fetch() method here that includes the changes.
 *
 * See: https://www.w3.org/TR/credential-management-1/#monkey-patching
 * ************************************************************************** */

declare function fetch(
    input: Request|string,
    init?: RequestInit|CMRequestInit):
    Promise<Response>;

interface GlobalFetch {
    // variant for navigator.credentials monkey patching
    fetch(url: Request|string, init?: CMRequestInit): Promise<Response>;
}

/**
 * Original definition from TS 2.2 dom.
 */
interface RequestInit {
    method?: string;
    headers?: any;
    body?: any;
    referrer?: string;
    referrerPolicy?: string;
    mode?: string;
    credentials?: string;
    cache?: string;
    redirect?: string;
    integrity?: string;
    keepalive?: boolean;
    window?: any;
}

/**
 * Variant of {@link RequestInit} that permits a {@link PasswordCredential} to
 * be used in the {@code credentials} property. All other properties are
 * identical to {@link RequestInit}.
 */
interface CMRequestInit {
    method?: string;
    headers?: any;
    body?: any;
    referrer?: string;
    referrerPolicy?: string;
    mode?: string;
    credentials?: PasswordCredential|string;
    cache?: string;
    redirect?: string;
    integrity?: string;
    keepalive?: boolean;
    window?: any;
}

/* ***************** CREDENTIAL MANAGEMENT API DEFINITONS ******************* */

/**
 * Declaration merge for 'navigator' which adds the credential management
 * interface.
 */
interface Navigator {
    credentials?: CredentialsContainer;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#credentialscontainer}
 */
interface CredentialsContainer {
    /**
     * Request a credential from the credential manager.
     *
     * @param options
     *     Contains an object filled with type-specific sets of parameters
     *     which will be used to select a particular {@link Credential} to
     *     return.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-credentialscontainer-get}
     */
    get(options?: CredentialRequestOptions): Promise<Credential|null>;

    /**
     * Ask the credential manager to store a {@link Credential} for the user.
     * Authors could call this method after a user successfully signs in, or
     * after a successful password change operation.
     *
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-credentialscontainer-store}
     */
    store(credential: Credential): Promise<Credential>;

    /**
     * Ask the credential manager to require user mediation before returning
     * credentials for the origin in which the method is called. This might be
     * called after a user signs out of a website, for instance, in order to
     * ensure that they are not automatically signed back in next time they
     * visits.
     */
    requireUserMediation(): Promise<void>;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-credentialdata}
 */
interface CredentialData {
    /**
     * The credential’s identifier. This might be a GUID, username, or email
     * address, for instance.
     */
    id: string;
}

type Credential = PasswordCredential|FederatedCredential;

/**
 * A generic and extensible Credential interface from which all credentials
 * will inherit.
 * @see {@link https://www.w3.org/TR/credential-management-1/#credential}
 */
declare abstract class CredentialBase {
    /**
     * The credential’s identifier. This might be a GUID, username, or email
     * address, for instance.
     */
    readonly id: string;

    /**
     * The credential’s type.
     */
    readonly type: string;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-siteboundcredentialdata}
 */
interface SiteBoundCredentialData extends CredentialData {
    /**
     * A name associated with the credential, intended as a human-understandable
     * public name.
     */
    name?: string;
    /**
     * A URL pointing to an image for the credential. This URL MUST be an
     * {@link
     * https://w3c.github.io/webappsec-mixed-content/#a-priori-authenticated-url|
     * a priori authenticated URL}.
     */
    iconURL?: string;
}

/**
 * Defines the specific attributes shared by any Credential persisted in user
 * agent’s credential
 * store.
 */
declare abstract class SiteBoundCredential extends CredentialBase {
    /**
     * A name associated with the credential, intended as a human-understandable
     * public name.
     */
    readonly name: string|null;

    /**
     * A URL pointing to an image for the credential. This URL MUST be an
     * {@link
     * https://w3c.github.io/webappsec-mixed-content/#a-priori-authenticated-url|
     * a priori authenticated URL}.
     */
    readonly iconURL: string|null;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-passwordcredentialdata}
 */
interface PasswordCredentialData extends SiteBoundCredentialData {
    /**
     * The plain-text password.
     */
    password: string;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#typedefdef-credentialbodytype}
 */
type CredentialBodyType = FormData|URLSearchParams;

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#passwordcredential}
 */
declare class PasswordCredential extends SiteBoundCredential {
    /**
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordcredential-data}
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordcredential}
     */
    constructor(data: PasswordCredentialData | HTMLFormElement);

    readonly type: 'password';

    /**
     * Represents the name which will be used for the ID field when submitting
     * the PasswordCredential to a remote endpoint via {@code fetch()}. It
     * defaults to "username", but can be overridden by a developer to match
     * whatever the backend service expects.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-idname}
     */
    idName: string;

    /**
     * Represents the name which will be used for the ID field when submitting
     * the PasswordCredential to a remote endpoint via fetch(). It defaults to
     * "password", but can be overridden by a developer to match whatever the
     * backend service expects.
     *
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordname}
     */
    passwordName: string;

    /**
     * If the developer wishes to specify additional data to insert into the
     * request body when submitting the credential information to a remote
     * endpoint, they can do so by assigning a FormData or URLSearchParams
     * object to this attribute. The credential information will be
     * mixed into the object to produce the body. The value is {@code null}
     * unless otherwise specified.
     */
    additionalData: CredentialBodyType|null;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-federatedcredentialdata}
 */
interface FederatedCredentialData extends SiteBoundCredentialData {
    provider: string;
    protocol?: string;
}

declare class FederatedCredential extends SiteBoundCredential {
    constructor(data: FederatedCredentialData);

    readonly type: 'federated';

    /**
     * The credential’s federated identity provider. Must be a absolute,
     * hierarchical, https URI with no path (e.g. https://www.facebook.com).
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredential-provider}
     */
    readonly provider: string;

    /**
     * The credential’s federated identity provider’s protocol (e.g.
     * "openidconnect"). If this value is null, then the protocol can be
     * inferred from the provider.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredential-protocol}
     */
    readonly protocol: string|null;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-credentialrequestoptions}
 */
interface CredentialRequestOptions {
    /**
     * If set, the user agent will request {@link PasswordCredential} objects.
     * Defaults to {@code false}.
     */
    password?: boolean;

    /**
     * If set, the user agent will request {@link FederatedCredential} objects
     * for the providers and protocol types listed. Defaults to {@code null}.
     */
    federated?: FederatedCredentialRequestOptions;

    /**
     * If {@code true}, the user agent will only attempt to provide a Credential
     * without user interaction. Defaults to {@code false}.
     */
    unmediated?: boolean;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-federatedcredentialrequestoptions}
 */
interface FederatedCredentialRequestOptions {
    /**
     * An array of federation identifiers.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredentialrequestoptions-providers}
     */
    providers?: string[];

    /**
     * An array of protocol identifiers.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredentialrequestoptions-protocols}
     */
    protocols?: string[];
}
