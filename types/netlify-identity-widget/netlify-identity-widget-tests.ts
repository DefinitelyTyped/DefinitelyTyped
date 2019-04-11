import es6styleimport from 'netlify-identity-widget';

import NetlifyIdentityWidget = require('netlify-identity-widget');

// Type 0: es6styleimport test
es6styleimport.init();

// Type 1: Initialize without options
NetlifyIdentityWidget.init();
NetlifyIdentityWidget.init({});

// Type 2: Initialize with container option
NetlifyIdentityWidget.init({ container: 'body' });

// Type 3: Initialize with a specific APIUrl
NetlifyIdentityWidget.init({ APIUrl: 'https://www.example.com/.netlify/functions/identity' });

// Type 4: Initialize with both the options specified
NetlifyIdentityWidget.init({
    APIUrl: 'https://www.example.com/.netlify/functions/identity',
    container: 'body',
});

// Open widget modal to let users login
NetlifyIdentityWidget.open();
NetlifyIdentityWidget.on('open', () => {
    // Widget is open and ready to login
});

// Open wigdet modal with signup tab selected
NetlifyIdentityWidget.open('signup');

// Close the widget programmatically
NetlifyIdentityWidget.close();
NetlifyIdentityWidget.on('close', () => {
    // Widget is closed
});

// Event handling after login
NetlifyIdentityWidget.on('login', (user) => {
    // You can now use User info after a successful login
});

// Event handling after logout
NetlifyIdentityWidget.on('logout', () => {
    // You can now notify that the logout was successful
});

// Event handling after login on page refresh
NetlifyIdentityWidget.on('init', (user) => {
    // Now the widget is ready to use
    // If a user was already logged in, the value is returned else null is passed via callback
});

// Event handling on errors
NetlifyIdentityWidget.on('error', (err) => {
    // The error occured during operation is passed in via callback
});

// Use the current logged in user
const user = NetlifyIdentityWidget.currentUser();

// If a user is logged in, logout returns a Promise<void>
const logoutPromise = NetlifyIdentityWidget.logout();
if (logoutPromise) {
    logoutPromise.then(() => {
        // You can now do clean up after successful logout
    });
}
