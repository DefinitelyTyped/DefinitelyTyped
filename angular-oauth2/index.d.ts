// Type definitions for angular-oauth2 4.1
// Project: https://github.com/seegno/angular-oauth2
// Definitions by: Antério Vieira <https://github.com/anteriovieira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as angular from 'angular';

declare module 'angular' {
    
    export namespace oauth2 {

        interface IOAuthConfig {
            baseUrl: string;
            clientId: string;
            clientSecret?: string;
            grantPath?: string;
            revokePath?: string;
        }

        interface IOAuthProvider {
            configure(params: IOAuthConfig): IOAuthConfig;
        }

        interface IData {
            username: string;
            password: string;
        }

        interface IOAuth {
            isAuthenticated(): boolean;
            getAccessToken(data: IData, options?: any): angular.IPromise<string>;
            getRefreshToken(data?: IData, options?: any): angular.IPromise<string>;
            revokeToken(data?: IData, options?: any): angular.IPromise<string>;
        }

        interface IOAuthTokenConfig {
            name: string;
            options: any;
        }

        interface IOAuthTokenOptions {
            secure: boolean;
        }

        interface IOAuthTokenProvider {
            configure(params: IOAuthTokenConfig): IOAuthTokenConfig;
        }

    }
}

