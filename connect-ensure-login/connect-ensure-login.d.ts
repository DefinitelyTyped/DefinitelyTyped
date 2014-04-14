declare module "connect-ensure-login"
{
    export function ensureLoggedIn(redirectTo?:string)
    export function ensureLoggedIn(options?:LoginOptions)

    export function ensureLoggedOut(redirectTo?:string)
    export function ensureLoggedOut(options?:LogoutOptions)

    interface LoginOptions {
        setReturnTo?:boolean;
        redirectTo?:string;
    }

    interface LogoutOptions {
        redirectTo?:string;
    }
}