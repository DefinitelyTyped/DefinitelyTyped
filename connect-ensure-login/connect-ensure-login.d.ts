declare module "connect-ensure-login"
{
    export function ensureAuthenticated(options?:Object)
    export function ensureLoggedIn(options?:Object)
    export function ensureUnauthenticated(options?:Object)
    export function ensureNotAuthenticated(options?:Object)
    export function ensureLoggedOut(options?:Object)
    export function ensureNotLoggedIn(options?:Object)
}