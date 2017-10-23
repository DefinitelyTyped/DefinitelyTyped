

var authProvider: auth0.angular.IAuth0ServiceProvider;

// Initialize Auth0
authProvider.init({
    clientID: 'myClientID',
    domain: 'mydomain.auth0.com'
});

// Listen for authenticated event
authProvider.on('authenticated', ($location: any) => {
});


var authService: auth0.angular.IAuth0Service;

// Sign in to Auth0
authService.signin({}, (profile: string, idToken: string, acccessToken: string, state: string, refreshToken: string) => {
}, (err) => {
});

// Sign out of Auth0
authService.signout();