import { RequestHandler, Request, Response } from 'express';
import * as Keycloak from 'keycloak-connect';

let _string: string;
let _number: number;
let _boolean: boolean;
let _any: any;

const config: Keycloak.Config = undefined;

let keycloak: Keycloak = new Keycloak(config);
keycloak = new Keycloak(config, {});
keycloak = new Keycloak(config, '');

let request: Request;
const response: Response = undefined;
const options: Keycloak.MiddlewareOptions = undefined;
const spec: Keycloak.SpecHandler = undefined;
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
const account: Promise<any> = keycloak.getAccount(token);
_boolean = keycloak.redirectToLogin(request);

const baseConfig: Keycloak.BaseConfig = undefined;
_any = baseConfig.scope;

const storeConfig: Keycloak.StoreConfig = undefined;
_any = storeConfig.store;

const cookiesConfig: Keycloak.CookiesConfig = undefined;
_any = cookiesConfig.cookies;

const middlewareOptions: Keycloak.MiddlewareOptions = undefined;
_string = middlewareOptions.logout;
_string = middlewareOptions.admin;

let tokenContent: Keycloak.TokenContent;
_number = tokenContent.exp;
_any = tokenContent.resource_access;
const realm_access_roles: string[] = tokenContent.realm_access.roles;

_string = token.token;
_string = token.clientId;
_any = token.header;
tokenContent = token.content;
const signature: Buffer = token.signature;
_string = token.signed;
_boolean = token.isExpired();
_boolean = token.hasRole('roleName');
_boolean = token.hasApplicationRole('appName', 'roleName');
_boolean = token.hasRealmRole('roleName');
_boolean = token.hasPermission('res:coffe', 'coffe:espresso');

const specHandler: Keycloak.SpecHandler = undefined;
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

const grantedRequest: Keycloak.GrantedRequest = undefined;
request = grantedRequest;
grant = grantedRequest.kauth.grant;
