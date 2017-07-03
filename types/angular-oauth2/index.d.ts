// Type definitions for angular-oauth2 4.1
// Project: https://github.com/oauthjs/angular-oauth2
// Definitions by: Antério Vieira <https://github.com/anteriovieira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';

declare module 'angular' {
    namespace oauth2 {
        interface OAuthConfig {
            baseUrl: string;
            clientId: string;
            clientSecret?: string;
            grantPath?: string;
            revokePath?: string;
        }

        interface OAuthProvider {
            configure(params: OAuthConfig): OAuthConfig;
        }

        interface Data {
            username: string;
            password: string;
        }

        interface OAuth {
            isAuthenticated(): boolean;
            getAccessToken(data: Data, options?: any): angular.IPromise<string>;
            getRefreshToken(data?: Data, options?: any): angular.IPromise<string>;
            revokeToken(data?: Data, options?: any): angular.IPromise<string>;
        }

        interface OAuthTokenConfig {
            name: string;
            options: any;
        }

        interface OAuthTokenOptions {
            secure: boolean;
        }

        interface OAuthTokenProvider {
            configure(params: OAuthTokenConfig): OAuthTokenConfig;
        }
    }
}
