import { RouteSettings, AuthSettings, AccessSetting, AuthMode, AccessEntity, AccessScopes, RequestRoute, RouteOptionsApp } from '@hapi/hapi';

declare let route: RequestRoute;

const settings: RouteSettings = route.settings;
const auth: AuthSettings | undefined = settings.auth;
const app: RouteOptionsApp | undefined = settings.app;
const strats: string[] = auth!.strategies;
const mode: AuthMode = auth!.mode;
const access: AccessSetting[] | undefined = auth!.access;
const data: AccessEntity | undefined = access![0].entity;
const scope: AccessScopes | false = access![0].scope;
let perms: string[] | undefined;
perms = (<AccessScopes> scope).selection;
perms = (<AccessScopes> scope).required;
perms = (<AccessScopes> scope).forbidden;
