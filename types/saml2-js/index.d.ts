// Type definitions for SAML2-js 2.0.6
// Project: https://github.com/Clever/saml2
// Definitions by: horiuchi <https://github.com/horiuchi>
//                mathieudutour <https://github.com/mathiedutour>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'saml2-js' {
    /** Represents an online service that authenticates users in the SAML flow. */
    export class IdentityProvider {
        constructor(options: IdentityProviderOptions);
    }

    export interface IdentityProviderOptions {
        /** Login url to use during a login request. */
        sso_login_url: string;
        /** Logout url to use during a logout request. */
        sso_logout_url: string;
        /** Certificate or certificates (array of certificate) for the identity provider. */
        certificates: string | string[];
        /** If true, forces re-authentication of users even if the user has a SSO session with the IdP. This can also be configured on the SP or on a per-method basis. */
        force_authn?: boolean;
        /** If true, signs the request. This can also be configured on the SP or on a per-method basis. */
        sign_get_request?: boolean;
        /** If true, allows unencrypted assertions. This can also be configured on the SP or on a per-method basis. */
        allow_unencrypted_assertion?: boolean;
    }

    /** Represents a service provider that relies on a trusted IdentityProvider for authentication and authorization in the SAML flow. */
    export class ServiceProvider {
        constructor(options: ServiceProviderOptions);

        /** Get a URL to initiate a login. */
        create_login_request_url(
            IdP: IdentityProvider,
            options: CreateLoginRequestUrlOptions,
            cb: (error: Error | null, login_url: string, request_id: string) => void,
        ): void;
        /** Gets a SAML response object if the login attempt is valid, used for redirect binding. */
        redirect_assert(
            IdP: IdentityProvider,
            options: RedirectAssertOptions,
            cb: (error: Error | null, response: SAMLAssertResponse) => void,
        ): void;
        /** Gets a SAML response object if the login attempt is valid, used for post binding. */
        post_assert(
            IdP: IdentityProvider,
            options: PostAssertOptions,
            cb: (error: Error | null, response: SAMLAssertResponse) => void,
        ): void;
        /** Creates a SAML Request URL to initiate a user logout. */
        create_logout_request_url(
            IdP: IdentityProvider | string,
            options: CreateLogoutRequestUrlOptions,
            cb: (error: Error | null, request_url: string, request_id: string) => void,
        ): void;
        /** Creates a SAML Response URL to confirm a successful IdP initiated logout. */
        create_logout_response_url(
            IdP: IdentityProvider | string,
            options: CreateLogoutResponseUrlOptions,
            cb: (error: Error | null, response_url: string) => void,
        ): void;
        /** Returns the XML metadata used during the initial SAML configuration. */
        create_metadata(): string;
    }

    export interface ServiceProviderOptions {
        /** Unique identifier for the service provider, often the URL of the metadata file. */
        entity_id: string;
        /** Private key for the service provider. */
        private_key: string;
        /** Certificate for the service provider. */
        certificate: string;
        /** URL of service provider assert endpoint. */
        assert_endpoint: string;
        /** Additional private keys to use when attempting to decrypt responses. Useful for adding backward-compatibility for old certificates after a rollover. */
        alt_private_keys?: string[];
        /** Additional certificates to expose in the SAML metadata. Useful for staging new certificates for rollovers. */
        alt_certs?: string[];
        /** If set, at least one of the <Audience> values within the <AudienceRestriction> condition of a SAML authentication response must match. Defaults to `entity_id`. */
        audience?: string | RegExp;
        /**
         * To account for clock skew between IdP and SP, accept responses with a NotBefore condition
         * ahead of the current time (according to our clock) by this number of seconds.
         *
         * Defaults to 1.
         * Set it to 0 for optimum security but no tolerance for clock skew.
         */
        notbefore_skew?: number;
        /** If true, forces re-authentication of users even if the user has a SSO session with the IdP. This can also be configured on the IdP or on a per-method basis. */
        force_authn?: boolean;
        /** Specifies AuthnContextClassRef. This can also be configured on a per-method basis. */
        auth_context?: AuthnContextClassRef;
        /** Format for Name ID. This can also be configured on a per-method basis. */
        nameid_format?: string;
        /** If true, signs the request. This can also be configured on the IdP or on a per-method basis. */
        sign_get_request?: boolean;
        /** If true, allows unencrypted assertions. This can also be configured on the IdP or on a per-method basis. */
        allow_unencrypted_assertion?: boolean;
    }
    export interface CreateLoginRequestUrlOptions {
        /** SAML relay state. */
        relay_state?: string;
        /** Specifies AuthnContextClassRef. This can also be configured on the SP. */
        auth_context?: AuthnContextClassRef;
        /** Format for Name ID. This can also be configured on the SP. */
        nameid_format?: string;
        /** If true, forces re-authentication of users even if the user has a SSO session with the IdP. This can also be configured on the IdP or SP. */
        force_authn?: boolean;
        /** If true, signs the request. This can also be configured on the IdP or SP. */
        sign_get_request?: boolean;
    }
    export interface RedirectAssertOptions {
        /** An object containing the parsed query string parameters. This object should contain the value for either a SAMLResponse or SAMLRequest. */
        request_body: {
            SAMLResponse?: any;
            SAMLRequest?: any;
        };
        /** If true, allows unencrypted assertions. This can also be configured on the IdP or SP. */
        allow_unencrypted_assertion?: boolean;
        /** If false, allow the assertion to be valid without a SessionIndex attribute on the AuthnStatement node. */
        require_session_index?: boolean;
    }
    export interface PostAssertOptions extends RedirectAssertOptions {
        /** If set, at least one of the <Audience> values within the <AudienceRestriction> condition of a SAML authentication response must match. Defaults to entity_id. */
        audience?: string | RegExp;
        /**
         * To account for clock skew between IdP and SP, accept responses with a NotBefore condition
         * ahead of the current time (according to our clock) by this number of seconds.
         *
         * Defaults to 1.
         * Set it to 0 for optimum security but no tolerance for clock skew.
         */
        notbefore_skew?: boolean;
    }
    export interface CreateLogoutRequestUrlOptions {
        /** Format for Name ID. This can also be configured on a per-method basis. */
        name_id?: string;
        /** Session index to use for creating logout request. */
        session_index?: string;
        /** If true, allows unencrypted assertions. This can also be configured on the IdP or SP. */
        allow_unencrypted_assertion?: boolean;
        /** If true, signs the request. This can also be configured on the IdP or SP. */
        sign_get_request?: boolean;
        /** SAML relay state. */
        relay_state?: string;
    }
    export interface CreateLogoutResponseUrlOptions {
        /** The ID of the request that this is in response to. Should be checked against any sent request IDs. */
        in_response_to?: string;
        /** If true, signs the request. This can also be configured on the IdP or SP. */
        sign_get_request?: boolean;
        /** SAML relay state. */
        relay_state?: string;
    }

    export interface SAMLAssertResponse {
        response_header: { id: 'string'; destination: string; in_response_to: string };
        type: string;
        user: {
            name_id: string;
            session_index?: string;
            session_not_on_or_after?: string;
            attributes?: { [attr: string]: string | string[] };
        };
    }

    export interface AuthnContextClassRef {
        comparison: string;
        class_refs: string[];
    }
}
