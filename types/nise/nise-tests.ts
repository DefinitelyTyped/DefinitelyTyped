import { fakeXhr, fakeServer, FakeServer, FakeXMLHttpRequest } from 'nise';

function testCreateFakeServer() {
    fakeServer.create();
    fakeServer.create({ autoRespond: true, autoRespondAfter: 3, fakeHTTPMethods: true, respondImmediately: false });
    fakeServer.create({ autoRespond: true, autoRespondAfter: 3 });
}

function testFakeServer() {
    const server: FakeServer = fakeServer.create();
    const respondWith = ['GET', 'http://test.com', [200, {}, '']];

    server.requests;
    server.autoRespond = true;

    server.respondWith((xhr: FakeXMLHttpRequest) => xhr.respond(200));
    server.respondWith('body');
    server.respondWith([]);

    server.respondWith('http://test.com', 'body');
    server.respondWith('http://test.com', []);
    server.respondWith('http://test.com', (xhr: FakeXMLHttpRequest) => xhr.respond(200));

    server.respondWith('GET', 'http://test.com', 'body');
    server.respondWith('GET', 'http://test.com', []);
    server.respondWith('GET', 'http://test.com', (xhr: FakeXMLHttpRequest) => xhr.respond(200));

    server.respondWith(/url/, '');
    server.respondWith(/url/, []);
    server.respondWith(/url/, (xhr: FakeXMLHttpRequest) => xhr.respond(200));

    server.respondWith('GET', /url/, '');
    server.respondWith('GET', /url/, []);
    server.respondWith('GET', /url/, (xhr: FakeXMLHttpRequest) => xhr.respond(200));
    server.respondWith(...respondWith);
    server.respond();
    server.restore();
}

function testFakeXMLHttpRequest() {
    const xhr = new fakeXhr.FakeXMLHttpRequest();
    const headers = xhr.getAllResponseHeaders();
    const header = xhr.getResponseHeader('test');

    xhr.setResponseHeaders({ Accept: 'application/json' });
    xhr.setResponseBody('body');
    xhr.respond(200, { Accept: 'application/json' }, 'body');
    xhr.error();
}

function testFakeXMLHttpRequestStatic() {
    fakeXhr.FakeXMLHttpRequest.useFilters = true;
    fakeXhr.FakeXMLHttpRequest.addFilter((method, url, async, user, pass) => true);
    fakeXhr.FakeXMLHttpRequest.onCreate = (xhr: FakeXMLHttpRequest) => { };
    fakeXhr.FakeXMLHttpRequest.restore();
}
