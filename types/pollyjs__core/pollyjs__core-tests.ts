import { Polly, Timing, setupMocha, setupQunit } from '@pollyjs/core';
import { EXPIRY_STRATEGIES, MODES } from '@pollyjs/utils';

const polly = new Polly('test recording', {
    mode: MODES.PASSTHROUGH,
    recordFailedRequests: true,
    adapters: ['xhr', 'fetch'],
    persister: 'rest',
    expiryStrategy: EXPIRY_STRATEGIES.ERROR,
    timing: Timing.relative(3),
    matchRequestsBy: {
        method: true,
        headers: true,
        body: true,
        order: true,

        url: {
            protocol: true,
            username: true,
            password: true,
            hostname: true,
            port: true,
            pathname: true,
            query: true,
            hash: false,
        },
    },
});

new Polly('test recording', {
    mode: 'record',
    expiryStrategy: 'warn',
    recordFailedRequests: true,
    adapters: ['xhr', 'fetch'],
    adapterOptions: {
        xhr: {
            context: {},
        },
        fetch: {
            context: {},
        },
        puppeteer: {
            page: {},
            requestResourceTypes: ['fetch', 'xhr'],
        },
        foo: {
            bar: true,
        },
    },
    persister: 'rest',
    persisterOptions: {
        keepUnusedRequests: false,
        rest: {
            apiNamespace: '/api/v2',
        },
        foo: {
            bar: true,
        },
    },
    timing: Timing.relative(3),
    matchRequestsBy: {
        method(method, _req) {
            return method.toLowerCase();
        },
        headers:
            1 === 1
                ? { exclude: ['X-Auth'] }
                : (headers, _req) => {
                      delete headers['X-Auth'];
                      return headers;
                  },
        body(body, _req) {
            const json = JSON.parse(body);

            delete json.email;
            return JSON.stringify(json);
        },

        url: {
            protocol(protocol, _req) {
                return protocol === 'http' ? 'https:' : protocol;
            },
            username(username, _req) {
                return username === 'johndoe' ? 'username' : username;
            },
            password(password, _req) {
                return password || 'password';
            },
            hostname(hostname, _req) {
                return hostname.replace('.com', '.net');
            },
            port(port, _req) {
                return port > 80 ? 3000 : 433;
            },
            pathname(pathname, _req) {
                return pathname.replace('/api/v1', '/api');
            },
            query(query, _req) {
                return { ...query, token: '' };
            },
            hash(hash, _req) {
                return hash.replace(/token=[0-9]+/, '');
            },
        },
    },
});

polly.configure({
    matchRequestsBy: {
        url: false,
    },
});

polly.configure({
    matchRequestsBy: {
        url(url, _req) {
            return url.replace('https', 'http');
        },
    },
});

function log(_: string) {
    // no op
}

async function test() {
    polly.adapters.get('node-http');

    polly.pause();
    polly.play();
    polly.record();
    polly.replay();
    polly.passthrough();
    await polly.flush();
    await polly.stop();

    const { server } = polly;
    server.get('/session').on('request', req => {
        req.headers['X-AUTH'] = '<ACCESS_TOKEN>';
        req.query.email = 'test@app.com';
    });
    server.get('/session').on('beforeResponse', (req, res) => {
        res.setHeader('X-AUTH', '<ACCESS_TOKEN>');
    });
    server.get('/session').on('response', (req, res) => {
        log(`${req.url} took ${req.responseTime}ms with a status of ${res.statusCode}.`);
    });

    const fn = () => {};
    server
        .any()
        .on('request', fn)
        .on('request', () => {})
        .off('request', fn)
        .off('request');

    polly.configure({
        adapterOptions: {
            fetch: {
                context: null,
            },
        },
    });

    server
        .get('/session')
        .once('request', req => {
            req.headers['X-AUTH'] = '<ACCESS_TOKEN>';
            req.query.email = 'test@app.com';
        })
        .once('beforeResponse', (req, res) => {
            const data = res.jsonBody();

            data._sessionKey = 'foo';
            res.json(data);
        })
        .once('request', (req, event) => {
            /* Do something else */
            event.stopPropagation();
        });

    server
        .get(['/users/:id', 'users/v2/:id'])
        .filter(req => req.params.id === '1')
        .filter(req => req.params.id !== '2')
        .recordingName('test')
        .recordingName()
        .intercept((_req, res) => {
            res.status(200).json({ email: 'user1@test.com' });
        });

    /* Intercept all Google Analytic requests and respond with a 200 */
    server.get('/google-analytics/*path').intercept((req, res, intercept) => {
        if (req.pathname === 'test') {
            intercept.abort();
        } else {
            res.sendStatus(200);
        }
    });

    /* Pass-through all GET requests to /coverage */
    server
        .get('/coverage')
        .configure({ expiresIn: '5d' })
        .passthrough();

    server.any().on('error', (req, error) => {
        req.setHeader('Content-Length', '2344')
            .setHeaders({
                'Content-Type': 'application/json',
                'Content-Length': '42',
            })
            .removeHeader('Content-Length')
            .removeHeaders(['Content-Type', 'Content-Length']);

        req.removeHeaders(['Content-Type', 'Content-Length']);
        log(req.pathname + JSON.stringify(error));
    });
}

setupMocha();
setupMocha({ recordFailedRequests: false });
setupMocha({ recordFailedRequests: false }, {});
setupMocha.beforeEach();
setupMocha.beforeEach({ recordFailedRequests: true });
setupMocha.afterEach();

setupQunit({});
setupQunit({}, { recordFailedRequests: false });
setupQunit.beforeEach({});
setupQunit.beforeEach({}, { recordFailedRequests: true });
setupQunit.afterEach({});
