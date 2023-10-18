// Spec: https://www.w3.org/TR/2017/WD-credential-management-1-20170804

/* ************************* FETCH MODIFICATIONS *******************************
 * The credential management spec modifies fetch(), by adding a new
 * "request credentials mode", and permitting a PasswordCredential to be passed
 * as part of 'credentials' init parameter. As we cannot directly modify
 * the types defined in whatwg-fetch (especially for a draft spec), we
 * define a variant of the fetch() method here that includes the changes.
 *
 * See: https://www.w3.org/TR/credential-management-1/#monkey-patching
 * ************************************************************************** */

declare function fetch(input: Request | string, init?: RequestInit | CMRequestInit): Promise<Response>;

interface GlobalFetch {
    // variant for navigator.credentials monkey patching
    fetch(url: Request | string, init?: CMRequestInit): Promise<Response>;
}
interface WindowOrWorkerGlobalScope {
    fetch(url: Request | string, init?: CMRequestInit): Promise<Response>;
}

/**
 * Variant of TS 2.2 {@link RequestInit} that permits a
 * {@link PasswordCredential} to be used in the {@code credentials} property.
 * All other properties are identical to {@link RequestInit}.
 */
interface CMRequestInit {
    method?: string | undefined;
    headers?: any;
    body?: any;
    referrer?: string | undefined;
    referrerPolicy?: string | undefined;
    mode?: string | undefined;
    credentials?: PasswordCredential | FederatedCredential | string | undefined;
    cache?: string | undefined;
    redirect?: string | undefined;
    integrity?: string | undefined;
    keepalive?: boolean | undefined;
    window?: any;
}

/* ***************** CREDENTIAL MANAGEMENT API DEFINITIONS ******************* */

/**
 * Declaration merge for 'navigator' which adds the credential management
 * interface.
 */
interface Navigator {
    readonly credentials: CredentialsContainer;
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
    get(options?: CredentialRequestOptions): Promise<CredentialType | null>;

    /**
     * Ask the credential manager to store a {@link Credential} for the user.
     * Authors could call this method after a user successfully signs in, or
     * after a successful password change operation.
     *
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-credentialscontainer-store}
     */
    store(credential: CredentialType): Promise<CredentialType>;

    /**
     * Create a {@link Credential} asynchronously.
     *
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dom-credentialscontainer-create}
     */
    create(options: CredentialCreationOptions): Promise<CredentialType | null>;

    /**
     * Ask the credential manager to require user mediation before returning
     * credentials for the origin in which the method is called. This might be
     * called after a user signs out of a website, for instance, in order to
     * ensure that they are not automatically signed back in next time they
     * visits.
     *
     * @deprecated Use {@link preventSilentAccess} instead.
     * @see {@link https://www.w3.org/TR/2016/WD-credential-management-1-20160425/#dom-credentialscontainer-requireusermediation}
     */
    requireUserMediation(): Promise<void>;

    /**
     * Ask the credential manager to require user mediation before returning
     * credentials for the origin in which the method is called. This might be
     * called after a user signs out of a website, for instance, in order to
     * ensure that they are not automatically signed back in next time they
     * visits.
     *
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dom-credentialscontainer-preventsilentaccess}
     */
    preventSilentAccess(): Promise<void>;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-credentialdata}
 */
interface CredentialData {
    /**
     * The credential’s identifier. This might be a GUID, username, or email
     * address, for instance.
     */
    readonly id: string;
}

type CredentialType = PasswordCredential | FederatedCredential | PublicKeyCredential;

/**
 * A generic and extensible Credential interface from which all credentials
 * will inherit.
 * @see {@link https://www.w3.org/TR/credential-management-1/#credential}
 */
interface Credential {
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
    name?: string | undefined;
    /**
     * A URL pointing to an image for the credential. This URL MUST be an
     * {@link
     * https://w3c.github.io/webappsec-mixed-content/#a-priori-authenticated-url|
     * a priori authenticated URL}.
     */
    iconURL?: string | undefined;
}

/**
 * Defines the specific attributes shared by any Credential persisted in user
 * agent’s credential
 * store.
 */
// tslint:disable-next-line no-empty-interface
interface SiteBoundCredential extends Credential {}
declare abstract class SiteBoundCredential {
    /**
     * A name associated with the credential, intended as a human-understandable
     * public name.
     */
    readonly name: string | null;

    /**
     * A URL pointing to an image for the credential. This URL MUST be an
     * {@link
     * https://w3c.github.io/webappsec-mixed-content/#a-priori-authenticated-url|
     * a priori authenticated URL}.
     */
    readonly iconURL: string | null;
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
type CredentialBodyType = FormData | URLSearchParams;

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#passwordcredential}
 */
declare class PasswordCredential extends SiteBoundCredential {
    /**
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordcredential-data}
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-passwordcredential-passwordcredential}
     */
    constructor(data: PasswordCredentialData | HTMLFormElement);

    readonly type: "password";

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
    additionalData: CredentialBodyType | null;

    /**
     * The plain-text password. Returned for implementation of the 08/04/2017
     * Working Draft of Credential Management, not returned before this.
     *
     * @see {@link https://www.w3.org/TR/credential-management-1/#passwordcredential}
     */
    readonly password?: string | undefined;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-federatedcredentialdata}
 */
interface FederatedCredentialData extends SiteBoundCredentialData {
    provider: string;
    protocol?: string | undefined;
}

declare class FederatedCredential extends SiteBoundCredential {
    constructor(data: FederatedCredentialData);

    readonly type: "federated";

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
    readonly protocol: string | null;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-credentialrequestoptions}
 */
interface CredentialRequestOptions {
    /**
     * If set, the user agent will request {@link PasswordCredential} objects.
     * Defaults to {@code false}.
     */
    password?: boolean | undefined;

    /**
     * If set, the user agent will request {@link FederatedCredential} objects
     * for the providers and protocol types listed. Defaults to {@code null}.
     */
    federated?: FederatedCredentialRequestOptions | undefined;

    /**
     * If {@code true}, the user agent will only attempt to provide a Credential
     * without user interaction. Defaults to {@code false}.
     *
     * @deprecated Use {@link mediation} instead.
     */
    unmediated?: boolean | undefined;

    /**
     * This property specifies the mediation requirements for a given credential
     * request.
     */
    mediation?: "silent" | "optional" | "required" | "conditional" | undefined;

    /**
     * This property specifies options for requesting a public-key signature.
     */
    publicKey?: PublicKeyCredentialRequestOptions | undefined;

    /**
     * This property lets the developer abort an ongoing get() operation.
     */
    signal?: AbortSignal | undefined;
}

/**
 * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#typedefdef-passwordcredentialinit}
 */
type PasswordCredentialInit = PasswordCredentialData | HTMLFormElement;

/**
 * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dictdef-federatedcredentialinit}
 */
type FederatedCredentialInit = FederatedCredentialData;

/**
 * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dictdef-credentialcreationoptions}
 */
interface CredentialCreationOptions {
    /**
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dictdef-federatedcredentialinit}
     */
    password?: PasswordCredentialInit | undefined;
    /**
     * @see {@link https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#dom-credentialcreationoptions-federated}
     */
    federated?: FederatedCredentialInit | undefined;
    /**
     * @see {@link https://w3c.github.io/webauthn/#dictionary-makecredentialoptions}
     */
    publicKey?: PublicKeyCredentialCreationOptions | undefined;
    /**
     * @see {@link https://w3c.github.io/webappsec-credential-management/#dom-credentialrequestoptions-signal}
     */
    signal?: AbortSignal | undefined;
}

/**
 * @see {@link https://www.w3.org/TR/credential-management-1/#dictdef-federatedcredentialrequestoptions}
 */
interface FederatedCredentialRequestOptions {
    /**
     * An array of federation identifiers.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredentialrequestoptions-providers}
     */
    providers?: string[] | undefined;

    /**
     * An array of protocol identifiers.
     * @see {@link https://www.w3.org/TR/credential-management-1/#dom-federatedcredentialrequestoptions-protocols}
     */
    protocols?: string[] | undefined;
}

// Type definitions for webauthn
// Spec: https://w3c.github.io/webauthn/
interface txAuthGenericArg {
    content: ArrayBuffer;
    contentType: string;
}

interface AuthenticationExtensionsClientInputs {
    appid?: string | undefined;
    authnSel?: Array<ArrayBufferView | ArrayBuffer> | undefined;
    exts?: boolean | undefined;
    loc?: boolean | undefined;
    txAuthGeneric?: txAuthGenericArg | undefined;
    txAuthSimple?: string | undefined;
    uvi?: boolean | undefined;
    uvm?: boolean | undefined;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialrequestoptions}
 */
interface PublicKeyCredentialRequestOptions {
    challenge: BufferSource;
    timeout?: number | undefined;
    rpId?: string | undefined;
    allowCredentials?: PublicKeyCredentialDescriptor[] | undefined;
    userVerification?: "required" | "preferred" | "discouraged" | undefined;
    extensions?: AuthenticationExtensionsClientInputs | undefined;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialentity}
 */
interface PublicKeyCredentialEntity {
    icon?: string | undefined;
    name: string;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialrpentity}
 */
interface PublicKeyCredentialRpEntity extends PublicKeyCredentialEntity {
    id?: string | undefined;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialuserentity}
 */
interface PublicKeyCredentialUserEntity extends PublicKeyCredentialEntity {
    id: BufferSource;
    displayName: string;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialparameters}
 */
interface PublicKeyCredentialParameters {
    type: "public-key";
    alg: number;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-publickeycredentialdescriptor}
 */
interface PublicKeyCredentialDescriptor {
    type: "public-key";
    id: BufferSource;
    transports?: AuthenticatorTransport[];
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-authenticatorselectioncriteria}
 */
interface AuthenticatorSelectionCriteria {
    authenticatorAttachment?: "platform" | "cross-platform" | undefined;
    requireResidentKey?: boolean | undefined;
    userVerification?: "required" | "preferred" | "discouraged" | undefined;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#dictdef-makepublickeycredentialoptions}
 */
interface PublicKeyCredentialCreationOptions {
    rp: PublicKeyCredentialRpEntity;
    user: PublicKeyCredentialUserEntity;

    challenge: BufferSource;
    pubKeyCredParams: PublicKeyCredentialParameters[];

    timeout?: number | undefined;
    excludeCredentials?: PublicKeyCredentialDescriptor[] | undefined;
    authenticatorSelection?: AuthenticatorSelectionCriteria | undefined;
    attestation?: AttestationConveyancePreference | undefined;
    extensions?: AuthenticationExtensionsClientInputs | undefined;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#authenticatorresponse}
 */
interface AuthenticatorResponse {
    readonly clientDataJSON: ArrayBuffer;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#authenticatorattestationresponse}
 */
interface AuthenticatorAttestationResponse extends AuthenticatorResponse {
    readonly attestationObject: ArrayBuffer;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#iface-authenticatorassertionresponse}
 */
interface AuthenticatorAssertionResponse extends AuthenticatorResponse {
    readonly authenticatorData: ArrayBuffer;
    readonly signature: ArrayBuffer;
    readonly userHandle: ArrayBuffer | null;
}

/**
 * @see {@link https://w3c.github.io/webauthn/#publickeycredential}
 */
interface PublicKeyCredential extends Credential {
    readonly type: "public-key";
    readonly rawId: ArrayBuffer;
    readonly response: AuthenticatorResponse;
}
