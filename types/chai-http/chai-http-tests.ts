import fs = require('fs');
import http = require('http');
import chai = require('chai');
import ChaiHttp = require('chai-http');
import when = require('when');

chai.use(ChaiHttp);

// ReSharper disable WrongExpressionStatement

// Add promise support if this does not exist natively.
if (!global.Promise) {
	chai.request.addPromises(when.promise);
}

declare const app: http.Server;

chai.request(app).get('/');
chai.request('http://localhost:8080').get('/');

chai.request(app)
	.put('/user/me')
	.set('X-API-Key', 'foobar')
	.send({ password: '123', confirmPassword: '123' });

chai.request(app)
	.post('/user/me')
	.field('_method', 'put')
	.field('password', '123')
	.field('confirmPassword', '123');

chai.request(app)
	.post('/user/avatar')
	.attach('imageField', fs.readFileSync('avatar.png'), 'avatar.png');

chai.request(app)
	.get('/protected')
	.auth('user', 'pass');

// HTTPS request, from: https://github.com/visionmedia/superagent/commit/6158efbf42cb93d77c1a70887284be783dd7dabe
const ca = fs.readFileSync('ca.cert.pem');
const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');
const callback = (err: any, res: ChaiHttp.Response) => {};

chai.request(app)
	.post('/secure')
	.ca(ca)
	.key(key)
	.cert(cert)
	.end(callback);

const pfx = fs.readFileSync('cert.pfx');
chai.request(app)
	.post('/secure')
	.pfx(pfx)
	.end(callback);

chai.request(app)
	.get('/search')
	.query({ name: 'foo', limit: 10 });

chai.request(app)
	.get('/download')
	.buffer()
	.parse((res, cb) => {
		let data = '';
		res.setEncoding('binary');
		res.on('data', (chunk: any) => { data += chunk; });
		res.on('end', () => { cb(undefined, new Buffer(data, 'binary')); });
	});

chai.request(app)
	.put('/user/me')
	.send({ passsword: '123', confirmPassword: '123' })
	.end((err: any, res: ChaiHttp.Response) => {
		chai.expect(err).to.be.null;
		chai.expect(res).to.have.status(200);
	});

chai.request(app)
	.put('/user/me')
	.send({ passsword: '123', confirmPassword: '123' })
	.then((res: ChaiHttp.Response) => chai.expect(res).to.have.status(200))
	.catch((err: any) => { throw err; });

const agent = chai.request.agent(app);

agent
	.post('/session')
	.send({ username: 'me', password: '123' })
	.then((res: ChaiHttp.Response) => {
		chai.expect(res).to.have.cookie('sessionid');
		// The `agent` now has the sessionid cookie saved, and will send it
		// back to the server in the next request:
		return agent.get('/user/me')
			.then((res: ChaiHttp.Response) => chai.expect(res).to.have.status(200));
	});

function test1() {
	const req = chai.request(app).get('/');
	req.then((res: ChaiHttp.Response) => {
		chai.expect(res).to.have.status(200);
		chai.expect(res).to.have.header('content-type', 'text/plain');
		chai.expect(res).to.have.header('content-type', /^text/);
		chai.expect(res).to.have.headers;
		chai.expect('127.0.0.1').to.be.an.ip;
		chai.expect(res).to.be.json;
		chai.expect(res).to.be.html;
		chai.expect(res).to.be.text;
		chai.expect(res).to.redirect;
		chai.expect(res).to.redirectTo('http://example.com');
		chai.expect(res).to.have.param('orderby');
		chai.expect(res).to.have.param('orderby', 'date');
		chai.expect(res).to.not.have.param('limit');
		chai.expect(req).to.have.cookie('session_id');
		chai.expect(req).to.have.cookie('session_id', '1234');
		chai.expect(req).to.not.have.cookie('PHPSESSID');
		chai.expect(res).to.have.cookie('session_id');
		chai.expect(res).to.have.cookie('session_id', '1234');
		chai.expect(res).to.not.have.cookie('PHPSESSID');
		chai.expect(res.body).to.have.property('version', '4.0.0');
		chai.expect(res.text).to.equal('<html><body></body></html>');
	}, (err: any) => {
		throw err;
	});
}

when(chai.request(app).get('/')).done(() => console.log('success'), () => console.log('failure'));

Promise.resolve(1)
	.then(val => chai.request(app).get(`/user/${val}`))
	.then(res => {
		chai.expect(res).to.have.status(200);
	});
