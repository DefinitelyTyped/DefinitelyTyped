import * as angular from "angular";

declare module "angular" {
    namespace oauth2 {
        interface OAuthConfig {
            baseUrl: string;
            clientId: string;
            clientSecret?: string | undefined;
            grantPath?: string | undefined;
            revokePath?: string | undefined;
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
            getAccessToken(data: Data, options?: any): IPromise<string>;
            getRefreshToken(data?: Data, options?: any): IPromise<string>;
            revokeToken(data?: Data, options?: any): IPromise<string>;
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
