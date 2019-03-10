// Type definitions for okta-vue 1.0
// Project: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue, https://github.com/okta/okta-oidc-js
// Definitions by: Mike Dodge <https://github.com/innovation-team>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { VueConstructor, PluginFunction } from 'vue';
import { NavigationGuard } from 'vue-router';

declare namespace OktaVuePlugin {
	interface OktaVueOptions {
		issuer: string;
		client_id: string;
		redirect_uri: string;
        scope?: string;
        response_type?: string;
	}

    interface OktaOpenIDOptions {
        sessionToken?: string;
        responseMode?: string;
        responseType?: string | string[];
        scopes?: string[];
        state?: string;
        nonce?: string;
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
            authRedirectGuardd(): Promise<NavigationGuard>;
        };
    }
}
