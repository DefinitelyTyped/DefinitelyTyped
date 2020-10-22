import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@okta/okta-vue';

// === Testing typing of options

// Minimal good config
const validOpts: Auth.OktaVueOptions = {
    issuer: 'https://{yourOktaDomain}.com/oauth2/default',
    clientId: '{clientId}',
    redirectUri: 'https://localhost:{port}/implicit/callback',
};
const authOpts = { ...validOpts };

// Must provide valid tokenManager config
authOpts.tokenManager = null; // $ExpectError

// Must use valid tokenManager options
// $ExpectError
authOpts.tokenManager = { storage: 'bad-option' };
// $ExpectError
authOpts.tokenManager = { storage: 'cookie', secure: 'string' };
// $ExpectError
authOpts.tokenManager = { storage: 'cookie', secure: true, autoRenew: 'string' };
// Valid token manager options
authOpts.tokenManager = {
    storage: 'cookie',
    secure: false,
    autoRenew: true
};

// Invalid optional config properties
authOpts.pkce = null; // $ExpectError
authOpts.scopes = null; // $ExpectError
authOpts.postLogoutRedirectUri = null; // $ExpectError
authOpts.authorizeUrl = null; // $ExpectError
authOpts.userinfoUrl = null; // $ExpectError
authOpts.tokenUrl = null; // $ExpectError
authOpts.ignoreSignature = null; // $ExpectError
authOpts.maxClockSkew = null; // $ExpectError

// Valid optional config properties
authOpts.pkce = true;
authOpts.scopes = ['openid', 'profile', 'email'];
authOpts.postLogoutRedirectUri = 'http://post-logout-redirect-uri';
authOpts.authorizeUrl = 'https://authorize-url';
authOpts.userinfoUrl = 'https://user-inf-url';
authOpts.tokenUrl = 'https://token-url';
authOpts.ignoreSignature = true;
authOpts.maxClockSkew = 300;

// === Finish testing options, begin testing inegration

// Vue.use represents actual usage
Vue.use(Auth, validOpts);

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        { path: '/implicit/callback', component: Auth.handleCallback() },
        {
            path: '/protected',
            component: {
                name: 'protected',
                template: '<div>Protected Route</div>'
            },
            meta: {
                requiresAuth: true
            }
        },
    ]
});

const redirectGuard = Vue.prototype.$auth.authRedirectGuard();
router.beforeEach(redirectGuard);

const component = Vue.extend({
    mounted() {
        const authd = this.$auth.isAuthenticated();
        const userInfo = this.$auth.getUser();
        const handleAuth = this.$auth.handleAuthentication();
        const path = this.$auth.getFromUri();
        const idToken = this.$auth.getIdToken();
        const accessToken = this.$auth.getAccessToken();
    },
    methods: {
        logout() {
            const logoutPromise = this.$auth.logout();
        },
        redirect() {
            this.$auth.loginRedirect();
        },
        profileRedirect() {
            this.$auth.loginRedirect('/profile', {
                sessionToken: 'string',
                responseMode: 'string',
                responseType: 'string',
                scopes: ['string1', 'string2'],
                state: 'string',
                nonce: 'string',
            });
        },
    },
});
