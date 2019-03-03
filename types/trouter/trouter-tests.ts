import Trouter from 'trouter';

// Default type is "any" for handlers
const router = new Trouter();
router.add('get', '/user/:name/:id', 'test', 'test2', 'test3');

// Typed handler example
type Handler = (typedValue: number, couldBeAResponse: string) => void;

const typed = new Trouter<Handler>();
typed.get('/user/:id', (t: number, s: string) => {
});
const findResult = typed.find('get', '/users/1');
if (findResult && findResult.handlers.length > 0) {
    findResult.handlers[0](42, "asdf");
}
const notFound = typed.find('get', '/not-existent');
if (!notFound) {
    // no match...
}

// Find
const findTest = new Trouter();
router.add('get', '/user/:id', 'handler');
const fresult = router.find('get', '/user/1');
if (fresult && fresult.params.id) {
    // do something awesome!
    fresult.handlers[0] === 'handler';
}

// Full API
const full = new Trouter();
full.all('/somepattern', 'a handler');
full.get('/somepattern', 'a handler');
full.head('/somepattern', 'a handler');
full.patch('/somepattern', 'a handler');
full.options('/somepattern', 'a handler');
full.connect('/somepattern', 'a handler');
full.delete('/somepattern', 'a handler');
full.trace('/somepattern', 'a handler');
full.post('/somepattern', 'a handler');
full.put('/somepattern', 'a handler');

full.add('get', '/somepatternm', 'a handler');
full.add('head', '/somepatternm', 'a handler');
full.add('patch', '/somepatternm', 'a handler');
full.add('options', '/somepatternm', 'a handler');
full.add('connect', '/somepatternm', 'a handler');
full.add('delete', '/somepatternm', 'a handler');
full.add('trace', '/somepatternm', 'a handler');
full.add('post', '/somepatternm', 'a handler');
full.add('put', '/somepatternm', 'a handler');
