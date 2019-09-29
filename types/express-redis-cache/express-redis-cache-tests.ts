import express = require('express');
import redis = require('redis');
import expressRedisCache = require('express-redis-cache');

const app = express();
const cache = expressRedisCache();

expressRedisCache({ host: 'localhsot', port: 6379, auth_pass: 'passw0rd' });
expressRedisCache({ client: redis.createClient() });

cache.on('error', (error) => {
    throw new Error('Cache error!');
});

app.get('/',
    cache.route(), // cache entry name is `cache.prefix + "/"`
    (req, res, next) => { });

app.get('/',
    cache.route('home'), // cache entry name is now `cache.prefix + "home"`
    (req, res, next) => { });

app.get('/',
    cache.route({ name: 'home' }), // cache entry name is `cache.prefix + "home"`
    (req, res, next) => { });

app.get('/user/:userid',
    // middleware to define cache name
    (req, res, next) => {
        // set cache name
        res.express_redis_cache_name = 'user-' + req.params.userid;
        next();
    },
    // cache middleware
    cache.route(),
    // content middleware
    (req, res) => {
        res.render('user');
    }
);

app.get('/user',
    // middleware to decide if using cache
    (req, res, next) => {
        // Use only cache if user not signed in
        res.use_express_redis_cache = !req.signedCookies.user;
        next();
    },
    cache.route(), // this will be skipped if user is signed in
    (req, res) => {
        res.render('user');
    }
);

// Prefix
expressRedisCache({ prefix: 'test' });

// Expiration
expressRedisCache({ expire: 60 });

app.get('/index.html',
    cache.route({ expire: 5000 }), // cache entry will live 5000 seconds
    (req, res) => { }
);

// You can also use the number sugar syntax
cache.route(5000);
// Or
cache.route('index', 5000);

app.get('/index.html',
    cache.route({
        expire: {
            200: 5000,
            '4xx': 10,
            403: 5000,
            '5xx': 10,
            xxx: 1
        }
    }),
    (req, res) => { }
);

cache.get((error, entries) => {
    if (error) throw error;
    entries.forEach(console.log);
});

cache.get('home', (error, entries) => {});

cache.add(
    'user:info',
    JSON.stringify({ id: 1, email: 'john@doe.com' }),
    { expire: 60 * 60 * 24, type: 'json' },
    (error, added) => {}
);

cache.add(
    'user:info',
    JSON.stringify({ id: 1, email: 'john@doe.com' }),
    (error, added) => {}
);

cache.del('home', (error, deleted) => {});
cache.size((error, bytes) => {});
