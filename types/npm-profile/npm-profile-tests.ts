import profile = require('npm-profile');

const token = '9849cae7-8f02-430f-b0fe-162980afe765';
const username = 'fake-user';
const password = 'terrible-password';
const email = 'fake@email.com';
const registry = '';
const readonly = true;
const cidr_whitelist: string[] = [];

(async () => {
    try {
        // $ExpectType ProfileAuthToken
        const loginResult = await profile.login(async (url) => { },
            async (creds: profile.ProfileAuthCredentials) => creds, { registry });

        // $ExpectType ProfileAuthToken
        const loginWebResult = await profile.loginWeb(async (url) => { }, { registry });

        // $ExpectType ProfileAuthToken
        const loginCouchResult = await profile.loginCouch(username, email, password, { registry });

        // $ExpectType ProfileAuthToken
        const addUserCouchResult = await profile.adduserCouch(username, email, password, { registry });

        // $ExpectType ProfileAuthToken
        const addUserResult = await profile.adduser(async (url) => { },
            async (creds: profile.ProfileAuthCredentials) => creds, { registry });

        // $ExpectType ProfileAuthToken
        const addUserWebResult = await profile.adduserWeb(async (url) => { }, { registry });

        // $ExpectType ProfileData
        const result = await profile.get({ token });

        // $ExpectType ProfileData
        await profile.set({ github: 'great-github-account-name' }, { token });
        // $ExpectType ProfileData
        await profile.set(
            {
                password: {
                    old: 'abc123',
                    new: 'my new (more secure) password',
                },
            },
            { token },
        );
        // $ExpectType ProfileData
        await profile.set(
            {
                cidr_whitelist: ['8.8.8.8/32'],
            },
            { token },
        );
        // $ExpectType ProfileData
        await profile.set(
            {
                tfa: {
                    password,
                    mode: 'disable',
                },
            },
            { token },
        );
        // $ExpectType ProfileData
        await profile.set({ tfa: { password, mode: 'disable' } }, { token });

        // $ExpectType Token[]
        const tokens = await profile.listTokens({ token });

        // $ExpectType void
        await profile.removeToken('atoken');

        // $ExpectType Token
        const newToken = await profile.createToken(password, readonly, cidr_whitelist, { token });
    } catch (error) {
        error;
    }

    // events
    process.emit('log', 'error', 'feature', 'message part 1', 'part 2', 'part 3', 'etc');
    process.on('log ', logLevel => {
        logLevel; // $ExpectType LogLevel
    });
})();
