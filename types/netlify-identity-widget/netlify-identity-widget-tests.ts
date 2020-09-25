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

// Type 4: Initialize with a logo option
NetlifyIdentityWidget.init({ logo: true });

// Type 5: Initialize with a specific locale
NetlifyIdentityWidget.init({ locale: 'en' });

// Type 6: Initialize with all specified options
NetlifyIdentityWidget.init({
    APIUrl: 'https://www.example.com/.netlify/functions/identity',
    container: 'body',
    logo: true,
    locale: 'en',
});

// Open widget modal to let users login
NetlifyIdentityWidget.open();
NetlifyIdentityWidget.on('open', () => {
    // Widget is open and ready to login
});
NetlifyIdentityWidget.off('open');
NetlifyIdentityWidget.off('open', () => {});

// Open wigdet modal with signup tab selected
NetlifyIdentityWidget.open('signup');

// Close the widget programmatically
NetlifyIdentityWidget.close();
NetlifyIdentityWidget.on('close', () => {
    // Widget is closed
});
NetlifyIdentityWidget.off('close');
NetlifyIdentityWidget.off('close', () => {});

// Event handling after login
NetlifyIdentityWidget.on('login', (user) => {
    // You can now use User info after a successful login
});
NetlifyIdentityWidget.off('login');
NetlifyIdentityWidget.off('login', (user) => {});

// Event handling after logout
NetlifyIdentityWidget.on('logout', () => {
    // You can now notify that the logout was successful
});
NetlifyIdentityWidget.off('logout');
NetlifyIdentityWidget.off('logout', () => {});

// Event handling after login on page refresh
NetlifyIdentityWidget.on('init', (user) => {
    // Now the widget is ready to use
    // If a user was already logged in, the value is returned else null is passed via callback
});
NetlifyIdentityWidget.off('init');
NetlifyIdentityWidget.off('init', (user) => {});

// Event handling on errors
NetlifyIdentityWidget.on('error', (err) => {
    // The error occured during operation is passed in via callback
});
NetlifyIdentityWidget.off('error');
NetlifyIdentityWidget.off('error', (err) => {});

// Use the current logged in user
const user = NetlifyIdentityWidget.currentUser();

// If a user is logged in, logout returns a Promise<void>
const logoutPromise = NetlifyIdentityWidget.logout();
if (logoutPromise) {
    logoutPromise.then(() => {
        // You can now do clean up after successful logout
    });
}
