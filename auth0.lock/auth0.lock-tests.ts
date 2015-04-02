/// <reference path="../auth0/auth0.d.ts" />
/// <reference path="auth0.lock.d.ts" />

var lock: Auth0LockStatic = new Auth0Lock("dsa7d77dsa7d7", "mine.auth0.com");

lock.showSignin({
        connections: ["facebook", "google-oauth2", "twitter", "Username-Password-Authentication"],
        icon: "https://contoso.com/logo-32.png",
        socialBigButtons: true
    },
    () => {
        // The Auth0 Widget is now loaded.
});
