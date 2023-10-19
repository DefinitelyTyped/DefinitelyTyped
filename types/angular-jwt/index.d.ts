/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace jwt {
        interface JwtToken {
            iss?: string | undefined;
            sub?: string | undefined;
            aud?: string | undefined;
            exp?: number | undefined;
            nbf?: number | undefined;
            iat?: number | undefined;
            jti?: string | undefined;
            unique_name?: string | undefined;
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
