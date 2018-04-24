// Type definitions for okta-vue 1.0
// Project: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue
// Definitions by: Mike Dodge <https://github.com/innovation-team>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { VueConstructor, PluginFunction } from 'vue';
import { NavigationGuard } from 'vue-router';

export interface OktaVueOptions {
    issuer: string;
    client_id: string;
    redirect_uri: string;
    scope: string;
}
export function OktaVuePlugin(vm: VueConstructor, options: OktaVueOptions): void;
export namespace OktaVuePlugin {
    function handleCallback(): VueConstructor;
}
export default OktaVuePlugin;

declare module 'vue/types/vue' {
    interface Vue {
        $auth: {
            loginRedirect(): void;
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
