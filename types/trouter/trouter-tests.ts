import Trouter = require('trouter');

// Default type is "any" for handlers
const router = new Trouter();
router.add('GET', '/user/:name/:id', 'test', 'test2', 'test3');

// Typed handler example
type Handler = (typedValue: number, couldBeAResponse: string) => void;

const typed = new Trouter<Handler>();
typed.get('/user/:id', (t: number, s: string) => {
});
const findResult = typed.find('GET', '/users/1');
if (findResult.handlers.length > 0) {
    findResult.handlers[0](42, "asdf");
}
const notFound = typed.find('GET', '/not-existent');
if (notFound.handlers.length === 0) {
    // no match...
}

// Find
const findTest = new Trouter();
findTest.add('GET', '/user/:id', 'handler');
const fresult = findTest.find('GET', '/user/1');
if (fresult.params.id) {
    // do something awesome!
    fresult.handlers[0] === 'handler';
}

// Full API
const full = new Trouter();
full.all('/somepattern', 'a handler');
full.all(/^[/]somepattern$/, 'a handler');
full.get('/somepattern', 'a handler');
full.get(/^[/]somepattern$/, 'a handler');
full.head('/somepattern', 'a handler');
full.head(/^[/]somepattern$/, 'a handler');
full.patch('/somepattern', 'a handler');
full.patch(/^[/]somepattern$/, 'a handler');
full.options('/somepattern', 'a handler');
full.options(/^[/]somepattern$/, 'a handler');
full.connect('/somepattern', 'a handler');
full.connect(/^[/]somepattern$/, 'a handler');
full.delete('/somepattern', 'a handler');
full.delete(/^[/]somepattern$/, 'a handler');
full.trace('/somepattern', 'a handler');
full.trace(/^[/]somepattern$/, 'a handler');
full.post('/somepattern', 'a handler');
full.post(/^[/]somepattern$/, 'a handler');
full.put('/somepattern', 'a handler');
full.put(/^[/]somepattern$/, 'a handler');

full.add('GET', '/somepatternm', 'a handler');
full.add('GET', /^[/]somepattern$/, 'a handler');
full.add('HEAD', '/somepatternm', 'a handler');
full.add('HEAD', /^[/]somepattern$/, 'a handler');
full.add('PATCH', '/somepatternm', 'a handler');
full.add('PATCH', /^[/]somepattern$/, 'a handler');
full.add('OPTIONS', '/somepatternm', 'a handler');
full.add('OPTIONS', /^[/]somepattern$/, 'a handler');
full.add('CONNECT', '/somepatternm', 'a handler');
full.add('CONNECT', /^[/]somepattern$/, 'a handler');
full.add('DELETE', '/somepatternm', 'a handler');
full.add('DELETE', /^[/]somepattern$/, 'a handler');
full.add('TRACE', '/somepatternm', 'a handler');
full.add('TRACE', /^[/]somepattern$/, 'a handler');
full.add('POST', '/somepatternm', 'a handler');
full.add('POST', /^[/]somepattern$/, 'a handler');
full.add('PUT', '/somepatternm', 'a handler');
full.add('PUT', /^[/]somepattern$/, 'a handler');
