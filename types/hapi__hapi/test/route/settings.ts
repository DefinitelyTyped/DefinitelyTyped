import { RouteSettings, AuthSettings, AccessSetting, AuthMode, RouteAccessEntity as AccessEntity, AccessScopes } from '@hapi/hapi';

declare let set: RouteSettings;

const auth: AuthSettings | undefined = set.auth;
const strats: string[] = auth!.strategies;
const mode: AuthMode = auth!.mode;
const access: AccessSetting[] | undefined = auth!.access;
const data: AccessEntity | undefined = access![0].entity;
const scope: AccessScopes | false = access![0].scopes;
let perms: string[] | undefined;
perms = (<AccessScopes> scope).selection;
perms = (<AccessScopes> scope).required;
perms = (<AccessScopes> scope).forbidden;
