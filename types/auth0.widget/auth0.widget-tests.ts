import 'auth0-js/v7';

var widget: Auth0WidgetStatic = new Auth0Widget({
    domain: 'mine.auth0.com',
    clientID: 'dsa7d77dsa7d7',
    callbackURL: 'http://my-app.com/callback',
    callbackOnLocationHash: true
});

widget.signin({
    connections: ['facebook', 'google-oauth2', 'twitter', 'Username-Password-Authentication'],
    icon: 'https://contoso.com/logo-32.png',
    showIcon: true
},
    () => {
        // The Auth0 Widget is now loaded.
    });
