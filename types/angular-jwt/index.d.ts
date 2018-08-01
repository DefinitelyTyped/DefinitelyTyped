// Type definitions for angular-jwt 0.0.8
// Project: https://github.com/auth0/angular-jwt
// Definitions by: Reto Rezzonico <https://github.com/rerezz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace jwt {

        interface JwtToken {
            iss?: string;
            sub?: string;
            aud?: string;
            exp?: number;
            nbf?: number;
            iat?: number;
            jti?: string;
            unique_name?: string;
        }

        interface IJwtHelper {
            decodeToken(token: string): JwtToken;
            getTokenExpirationDate(token: any): Date;
            isTokenExpired(token: any, offsetSeconds?: number): boolean;
        }

        interface IJwtInterceptor {
            tokenGetter(...params: any[]): string;
        }

        interface IAuthManagerServiceProvider {
            authenticate(): void;
            unauthenticate(): void;
            checkAuthOnRefresh(): void;
            redirectWhenUnauthenticated(): void;
        }
    }
}
