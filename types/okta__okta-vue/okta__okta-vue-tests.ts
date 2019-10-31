import Vue from 'vue';
import Router from 'vue-router';
import Auth from 'okta__okta-vue';

Vue.use(Auth, {
    issuer: 'https://{yourOktaDomain}.com/oauth2/default',
    client_id: '{client_id}',
    redirect_uri: 'http://localhost:{port}/implicit/callback',
    scope: 'openid profile email',
    storage: 'cookie',
    auto_renew: false
});

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
