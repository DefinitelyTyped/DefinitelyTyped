// Type definitions for keycloak-connect 4.5
// Project: https://github.com/keycloak/keycloak-nodejs-connect
// Definitions by: Gregor Stamać <https://github.com/gstamac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler, Request, Response } from 'express';

declare class Keycloak {
	constructor(config: Keycloak.Config, keycloakConfig?: {} | string);

	middleware(options?: Keycloak.MiddlewareOptions): RequestHandler;
	protect(spec?: string | Keycloak.SpecHandler): RequestHandler;
	authenticated: (request: Request) => void;
	deauthenticated: (request: Request) => void;
	accessDenied: (request: Request, response: Response) => void;
	getGrant: (request: Request, response: Response) => Promise<Keycloak.Grant>;
	storeGrant: (grant: Keycloak.Grant, request: Request, response: Response) => Keycloak.Grant;
	unstoreGrant: (sessionId: string) => void;
	getGrantFromCode: (code: string, request: Request, response: Response) => Promise<Keycloak.Grant>;
	loginUrl: (uuid: string, redirectUrl: string) => string;
	logoutUrl: (redirectUrl: string) => string;
	accountUrl: () => string;
	getAccount: (token: Keycloak.Token) => Promise<any>;
	redirectToLogin: (request: Request) => boolean;
}

declare namespace Keycloak {
	interface BaseConfig {
		scope?: any;
	}

	interface StoreConfig extends BaseConfig {
		store: any;
	}

	interface CookiesConfig extends BaseConfig {
		cookies: any;
	}

	type Config = StoreConfig | CookiesConfig | BaseConfig;

	interface MiddlewareOptions {
		logout?: string;
		admin?: string;
	}

	interface TokenContent {
		exp: number;
		resource_access?: any;
		realm_access?: { roles?: string[] };
	}

	interface Token {
		token: string;
		clientId: string;
		header?: any;
      	content: TokenContent;
      	signature?: Buffer;
		signed?: string;

		isExpired: () => boolean;
		hasRole: (roleName: string) => boolean;
		hasApplicationRole: (appName: string, roleName: string) => boolean;
		hasRealmRole: (roleName: string) => boolean;
	}

	type SpecHandler = (token: Token, request: Request, response: Response) => boolean;

	interface Grant {
	    access_token: Token;
	    refresh_token: Token;
    	id_token: Token;
    	expires_in: number;
    	token_type: string;
    	__raw: string;

		update: (grant: Grant) => void;
		toString: () => string;
		isExpired: () => boolean;
		store: (request: Request, response: Response) => void;
	}

	interface GrantedRequest extends Request {
		kauth: { grant?: Grant };
	}
}

export = Keycloak;
