import { Polly, Timing } from '@pollyjs/core';
import { MODES } from '@pollyjs/utils';

const polly = new Polly('test recording', {
	mode: MODES.PASSTHROUGH,
	recordFailedRequests: true,
	adapters: ['xhr', 'fetch'],
	persister: 'rest',
	timing: Timing.relative(3)
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

	await polly.flush();
}
