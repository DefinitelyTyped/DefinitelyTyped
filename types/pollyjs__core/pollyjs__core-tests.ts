import { Polly, Timing } from '@pollyjs/core';
import { MODES } from '@pollyjs/utils';

const polly = new Polly('test recording', {
	mode: MODES.PASSTHROUGH,
	recordFailedRequests: true,
	adapters: ['xhr', 'fetch'],
	persister: 'rest',
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
		  hash: false
		}
	  }
});

new Polly('test recording', {
	mode: 'replay',
	recordFailedRequests: true,
	adapters: ['xhr', 'fetch'],
	persister: 'rest',
	timing: Timing.relative(3),
	matchRequestsBy: {
		method(method) {
			return method.toLowerCase();
		},
		headers: 1 === 1 ? { exclude: ['X-Auth'] } : (headers) => {
			delete headers['X-Auth'];
			return headers;
		},
		body(body) {
			const json = JSON.parse(body);

			delete json.email;
			return JSON.stringify(json);
		},

		url: {
			protocol(protocol) {
				return protocol === 'http' ? 'https:' : protocol;
			},
			username(username) {
				return username === 'johndoe' ? 'username' : username;
			},
			password(password) {
				return password || 'password';
			},
			hostname(hostname) {
				return hostname.replace('.com', '.net');
			},
			port(port) {
				return port > 80 ? 3000 : 433;
			},
			pathname(pathname) {
				return pathname.replace('/api/v1', '/api');
			},
			query(query) {
				return { ...query, token: '' };
			},
			hash(hash) {
				return hash.replace(/token=[0-9]+/, '');
			}
		}
	}
});

function log(_: string) {
	// no op
}

async function test() {
	polly.pause();
	polly.play();
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

	polly.configure({
		adapterOptions: {
			fetch: {
				context: null
			}
		}
	});

	server
		.get('/session')
		.once('request', req => {
			req.headers['X-AUTH'] = '<ACCESS_TOKEN>';
			req.query.email = 'test@app.com';
		})
		.once('request', () => {
			/* Do something else */
		});

		server
			.get('/users/:id')
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
	server.get('/coverage')
		.configure({ expiresIn: '5d' })
		.passthrough();

	server.any().on('error', (req, error) => {
		req
			.setHeader('Content-Length', '2344')
			.setHeaders({
				'Content-Type': 'application/json',
				'Content-Length': '42'
			})
			.removeHeader('Content-Length')
			.removeHeaders(['Content-Type', 'Content-Length']);

		req.removeHeaders(['Content-Type', 'Content-Length']);
		log(req.pathname + JSON.stringify(error));
	});

	await polly.flush();
}
