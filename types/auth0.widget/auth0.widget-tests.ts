import 'auth0-js';

var widget: Auth0WidgetStatic = new Auth0Widget({
    domain: 'mine.auth0.com',
    clientID: 'dsa7d77dsa7d7',
});

widget.signin({
    connections: ['facebook', 'google-oauth2', 'twitter', 'Username-Password-Authentication'],
    icon: 'https://contoso.com/logo-32.png',
    showIcon: true
},
    () => {
        // The Auth0 Widget is now loaded.
    });
