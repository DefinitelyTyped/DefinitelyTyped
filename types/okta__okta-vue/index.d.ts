// Type definitions for okta-vue 1.2
// Project: https://github.com/okta/okta-vue#readme
// Definitions by: Vivint Team Innovation <https://github.com/innovation-team>
//                 Mike Dodge <https://github.com/mgdodge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { VueConstructor, PluginFunction } from 'vue';
import { NavigationGuard } from 'vue-router';

declare namespace OktaVuePlugin {
    interface OktaOpenIDOptions {
        sessionToken?: string;
        responseMode?: string;
        responseType?: string | string[];
        scopes?: string[];
        state?: string;
        nonce?: string;
    }

    interface OktaAuthJsOptions extends OktaOpenIDOptions {
        postLogoutRedirectUri?: string;
        pkce?: boolean;
        authorizeUrl?: string;
        userinfoUrl?: string;
        tokenUrl?: string;
        ignoreSignature?: boolean;
        maxClockSkew?: number;
        tokenManager?: {
            autoRenew?: boolean;
            storage?: 'localStorage' | 'sessionStorage' | 'cookie';
            secure?: boolean;
        };
    }

    interface OktaVueOptions extends OktaAuthJsOptions {
        issuer: string;
        clientId: string;
        redirectUri: string;
    }

    function install(vm: VueConstructor, options: OktaVueOptions): PluginFunction<VueConstructor>;
    function handleCallback(): VueConstructor;
}
declare function OktaVuePlugin(): PluginFunction<VueConstructor>;
export default OktaVuePlugin;

declare module 'vue/types/vue' {
    interface Vue {
        $auth: {
            loginRedirect(fromUri?: string, additionalParams?: OktaVuePlugin.OktaOpenIDOptions): void;
            logout(): Promise<void>;
            isAuthenticated(): Promise<boolean>;
            handleAuthentication(): Promise<void>;
            getFromUri(): string;
            getIdToken(): Promise<string>;
            getAccessToken(): Promise<string>;
            getUser(): Promise<any>;
            authRedirectGuard(): Promise<NavigationGuard>;
        };
    }
}
