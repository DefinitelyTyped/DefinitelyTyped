// Type definitions for SAML2-js 1.6.0
// Project: https://github.com/Clever/saml2
// Definitions by: horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "saml2-js" {

    export class IdentityProvider {
        constructor(options: IdentityProviderOptions);
    }
    export interface IdentityProviderOptions {
        sso_login_url: string;
        sso_logout_url: string;
        certificates: string[];
        force_authn?: boolean;
        sign_get_request?: boolean;
        allow_unencrypted_assertion?: boolean;
    }


    export class ServiceProvider {
        constructor(options: ServiceProviderOptions);

        create_login_request_url(IdP: IdentityProvider, options: CreateLoginRequestUrlOptions, cb: (error: any, login_url: string, request_id: string) => void): void;
        redirect_assert(IdP: IdentityProvider, options: GetAssertOptions, cb: (error: any, response: any) => void): void;
        post_assert(IdP: IdentityProvider, options: GetAssertOptions, cb: (error: any, response: any) => void): void;
        create_logout_request_url(IdP: IdentityProvider, options: CreateLogoutRequestUrlOptions, cb: (error: any, request_url: string) => void): void;
        create_logout_response_url(IdP: IdentityProvider, options: CreateLogoutResponseUrlOptions, cb: (error: any, response_url: string) => void): void;
        create_metadata(): string;
    }
    export interface ServiceProviderOptions {
        entity_id: string;
        private_key: string;
        certificate: string;
        assert_endpoint: string;
        alt_private_keys?: string[];
        alt_certs?: string[];
        force_authn?: boolean;
        auth_context?: AuthnContextClassRef;
        nameid_format?: string;
        sign_get_request?: boolean;
        allow_unencrypted_assertion?: boolean;
    }
    export interface CreateLoginRequestUrlOptions {
        relay_state?: string;
        auth_context?: AuthnContextClassRef;
        nameid_format?: string;
        force_authn?: boolean;
        sign_get_request?: boolean;
    }
    export interface GetAssertOptions {
        request_body?: any;
        allow_unencrypted_assertion?: boolean;
    }
    export interface CreateLogoutRequestUrlOptions {
        name_id?: string;
        session_index?: string;
        allow_unencrypted_assertion?: boolean;
        sign_get_request?: boolean;
        relay_state?: string;
    }
    export interface CreateLogoutResponseUrlOptions {
        in_response_to?: string;
        sign_get_request?: boolean;
        relay_state?: string;
    }


    export interface AuthnContextClassRef {
        comparison: string;
        class_refs: string[];
    }

}
