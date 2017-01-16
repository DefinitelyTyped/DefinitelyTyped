// Type definitions for W3C (WebAppSec) Credential Management API, Level 1, 0.0
// Project: https://github.com/w3c/webappsec-credential-management
// Definitions by: Iain McGinniss <https://github.com/iainmcgin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Spec: http://www.w3.org/TR/2016/WD-credential-management-1-20160425/

/// <reference types="whatwg-fetch" />

/* ************************* FETCH MODIFICATIONS *******************************
 * The credential management spec modifies fetch(), by adding a new
 * "request credentials mode", and permitting a PasswordCredential to be passed
 * as part of 'credentials' init parameter. As we cannot directly modify
 * the types defined in whatwg-fetch (especially for a draft spec), we
 * define a variant of the fetch() method here that includes the changes.
 *
 * See: https://www.w3.org/TR/credential-management-1/#monkey-patching
 * ************************************************************************** */

interface Window {
    fetch(url: CMRequestInfo, init?: CMRequestInit): Promise<Response>;
}

type CMRequestInfo = CMRequest|string;

/**
 * Variant of {@link Request} that permits a {@code 'password'} value in the
 * {@code credentials} property.
 */
interface CMRequest extends Body {
    // the only modified property from RequestCredentials:
    credentials: CMRequestCredentials;

    method: string;
    url: string;
    headers: Headers;

    type: RequestType;
    destination: RequestDestination;
    referrer: string;
    referrerPolicy: ReferrerPolicy;
    mode: RequestMode;

    cache: RequestCache;
    redirect: RequestRedirect;
    integrity: string;

    clone(): Request;
}

type CMRequestCredentials = RequestCredentials|'password';

/**
 * Variant of {@link RequestInit} that permits a {@link PasswordCredential} to
 * be used in the {@code credentials} property. All other properties are
 * identical to {@link RequestInit}.
 */
interface CMRequestInit {
    credentials?: PasswordCredential|CMRequestCredentials;

    method?: string;
    headers?: HeadersInit;
    body?: BodyInit;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    mode?: RequestMode;

    cache?: RequestCache;
    redirect?: RequestRedirect;
    integrity?: string;
    window?: any;
}

/**
 * URLSearchParams is not yet included in the core lib.d.ts declarations, so we
 * include it here.
 * The official definition should be included in TypeScript 2.2, at which point
 * this can be removed.
 *
 * @see {@link https://github.com/Microsoft/TypeScript/issues/12517}
 */
declare class URLSearchParams {
    constructor(init?: string|URLSearchParams);
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string|null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
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
