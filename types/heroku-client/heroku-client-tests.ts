import Heroku = require('heroku-client');

const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN });

(async () => {
    // $ExpectType Promise<any>
    heroku.get('/apps');

    // $ExpectType Promise<any>
    heroku.post('/apps');

    // $ExpectType Promise<any>
    heroku.post('/apps', { body: { name: 'my-new-app' } });

    // $ExpectType Promise<any>
    heroku.patch('/apps/my-app', { body: { name: 'my-renamed-app' } });

    // $ExpectType Promise<any>
    heroku.delete('/apps/my-old-app');

    // $ExpectType Promise<any>
    heroku.request({
        method: 'GET',
        path: '/apps',
        headers: {
            Foo: 'Bar',
        },
        parseJSON: false,
    });
})();

const hk = new Heroku({
    cache: {
        store: {
            get() {},
            set() {},
        },
        encryptor: {},
    },
});
