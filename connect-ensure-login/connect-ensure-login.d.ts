interface connect_ensure_login
{
    ensureAuthenticated(options?:Object)
    ensureLoggedIn(options?:Object)
    ensureUnauthenticated(options?:Object)
    ensureNotAuthenticated(options?:Object)
    ensureLoggedOut(options?:Object)
    ensureNotLoggedIn(options?:Object)
}

declare var connect_ensure_login:connect_ensure_login;