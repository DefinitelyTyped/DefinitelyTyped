import { Keystone } from '@keystonejs/keystone';
import { KnexAdapter } from '@keystonejs/adapter-knex';
import {
    GoogleAuthStrategy,
    FacebookAuthStrategy,
    GitHubAuthStrategy,
    TwitterAuthStrategy,
    PassportAuthStrategy,
} from '@keystonejs/auth-passport';

const keystone = new Keystone({
    name: 'Typescript Test',
    adapter: new KnexAdapter(),
});

keystone.createAuthStrategy({
    type: GoogleAuthStrategy,
    list: 'User',
    config: {
        idField: 'googleId',
        appId: '<Your Google App Id>',
        appSecret: '<Your Google App Secret>',
        loginPath: '/auth/google',
        callbackPath: '/auth/google/callback',

        loginPathMiddleware: (req: any, res: any, next: any) => {
            // An express middleware executed before the Passport social signin flow
            // begins. Useful for setting cookies, etc.
            // Don't forget to call `next()`!
            next();
        },

        callbackPathMiddleware: (req: any, res: any, next: any) => {
            // An express middleware executed before the callback route is run. Useful
            // for logging, etc.
            // Don't forget to call `next()`!
            next();
        },

        // Called when there's no existing user for the given googleId
        // Default: resolveCreateData: () => ({})
        resolveCreateData: (
            { createData, actions: { pauseAuthentication } }: any,
            req: any,
            res: any
        ) => {
            // If we don't have the right data to continue with a creation
            if (!createData.name) {
                // then we pause the flow
                pauseAuthentication();
                // And redirect the user to a page where they can enter the data.
                // Later, the `resolveCreateData()` method will be re-executed this
                // time with the complete data.
                res.redirect(`/auth/google/step-2`);
                return;
            }

            return createData;
        },

        // Once a user is found/created and successfully matched to the
        // googleId, they are authenticated, and the token is returned here.
        // NOTE: By default KeystoneJS sets a `keystone.sid` which authenticates the
        // user for the API domain. If you want to authenticate via another domain,
        // you must pass the `token` as a Bearer Token to GraphQL requests.
        onAuthenticated: ({ token, item, isNewItem }: any, req: any, res: any) => {
            console.log(token);
            res.redirect('/');
        },

        // If there was an error during any of the authentication flow, this
        // callback is executed
        onError: (error: any, req: any, res: any) => {
            console.error(error);
            res.redirect('/?error=Uh-oh');
        },
    },
});

keystone.createAuthStrategy({
    type: FacebookAuthStrategy,
    list: 'User',
});

keystone.createAuthStrategy({
    type: GitHubAuthStrategy,
    list: 'User',
});

keystone.createAuthStrategy({
    type: TwitterAuthStrategy,
    list: 'User',
});

keystone.createAuthStrategy({
    type: PassportAuthStrategy,
    list: 'User',
});
