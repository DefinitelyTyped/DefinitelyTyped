import { RequestHandler, Request, Response } from 'express';
import * as Keycloak from 'keycloak-connect';

let _string: string;
let _number: number;
let _boolean: boolean;
let _undefined: undefined;
let _any: any;

let config: Keycloak.Config;

let keycloak: Keycloak = new Keycloak(config);
keycloak = new Keycloak(config, {});
keycloak = new Keycloak(config, '');

let request: Request;
let response: Response;
let options: Keycloak.MiddlewareOptions;
let spec: Keycloak.SpecHandler;
let grant: Keycloak.Grant;
let token: Keycloak.Token;

let handler: RequestHandler = keycloak.middleware(options);
handler = keycloak.middleware();
handler = keycloak.protect(spec);
handler = keycloak.protect();
handler = keycloak.protect('');
keycloak.authenticated(request);
keycloak.deauthenticated(request);
keycloak.accessDenied(request, response);
let grantPromise: Promise<Keycloak.Grant> = keycloak.getGrant(request, response);
grant = keycloak.storeGrant(grant, request, response);
keycloak.unstoreGrant('sessionId');
grantPromise = keycloak.getGrantFromCode('code', request, response);
_string = keycloak.loginUrl('uuid', 'redirectUrl');
_string = keycloak.logoutUrl('redirectUrl');
_string = keycloak.accountUrl();
let account: Promise<any> = keycloak.getAccount(token);
_boolean = keycloak.redirectToLogin(request);

let baseConfig: Keycloak.BaseConfig;
_any = baseConfig.scope;
_undefined = baseConfig.scope;

let storeConfig: Keycloak.StoreConfig;
_any = storeConfig.store;

let cookiesConfig: Keycloak.CookiesConfig;
_any = cookiesConfig.cookies;

_any = config.scope;
_undefined = config.scope;
_any = config.store;
_any = config.cookies;

let middlewareOptions: Keycloak.MiddlewareOptions;
_string = middlewareOptions.logout;
_undefined = middlewareOptions.logout;
_string = middlewareOptions.admin;
_undefined = middlewareOptions.admin;

let tokenContent: Keycloak.TokenContent;
_number = tokenContent.exp;
_any = tokenContent.resource_access;
_undefined = tokenContent.resource_access;
_undefined = tokenContent.realm_access;
let realm_access_roles: string[] = tokenContent.realm_access.roles;
_undefined = tokenContent.realm_access.roles;

_string = token.token;
_string = token.clientId;
_any = token.header;
_undefined = token.header;
tokenContent = token.content;
let signature: Buffer = token.signature;
_undefined = token.signature;
_string = token.signed;
_undefined = token.signed;
_boolean = token.isExpired();
_boolean = token.hasRole('roleName');
_boolean = token.hasApplicationRole('appName', 'roleName');
_boolean = token.hasRealmRole('roleName');

let specHandler: Keycloak.SpecHandler;
_boolean = specHandler(token, request, response);

token = grant.access_token;
token = grant.refresh_token;
token = grant.id_token;
_number = grant.expires_in;
_string = grant.token_type;
_string = grant.__raw;
grant.update(grant);
_string = grant.toString();
_boolean = grant.isExpired();
grant.store(request, response);

const grantedRequest: Keycloak.GrantedRequest = {};
request = grantedRequest;
grant = grantedRequest.kauth.grant;
