import "auth0-js";

var auth0 = new Auth0({
    domain: "mine.auth0.com",
    clientID: "dsa7d77dsa7d7",
    callbackURL: "http://my-app.com/callback",
    callbackOnLocationHash: true,
});

auth0.login(
    {
        connection: "google-oauth2",
        popup: true,
        popupOptions: {
            width: 450,
            height: 800,
        },
    },
    (err, profile, idToken, accessToken, state) => {
        if (err) {
            alert("something went wrong: " + err.message);
            return;
        }
        alert("hello " + profile.name);
    },
);
