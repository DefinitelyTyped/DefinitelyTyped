import profile = require('npm-profile');

const token = '9849cae7-8f02-430f-b0fe-162980afe765';
const password = 'terrible-password';
const readonly = true;
const cidr_whitelist: string[] = [];

(async () => {
    try {
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
