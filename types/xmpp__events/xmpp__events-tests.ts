import * as events from '@xmpp/events';

// test type exports
type EventEmitter = events.EventEmitter;
type TimeoutError = events.TimeoutError;
type Deferred<T> = events.Deferred<T>;

new events.EventEmitter();
class MyEmitter extends events.EventEmitter {}

const ttErr = new events.TimeoutError('foo');
const err: Error = ttErr;
ttErr.name; // $ExpectType "TimeoutError"

events.delay(100); // $ExpectType Promise<void> & { timeout: number | Timeout; }
events.timeout(Promise.resolve(10), 10); // $ExpectType Promise<number>
events.timeout(Promise.resolve('foo'), 10); // $ExpectType Promise<string>
events.promise(new events.EventEmitter(), 'foo'); // $ExpectType Promise<unknown>
events.promise(new events.EventEmitter(), Symbol('foo')); // $ExpectType Promise<unknown>
events.promise(new events.EventEmitter(), 'foo', 'err'); // $ExpectType Promise<unknown>
events.promise(new events.EventEmitter(), 'foo', Symbol('err')); // $ExpectType Promise<unknown>
events.promise(new events.EventEmitter(), 'foo', null); // $ExpectType Promise<unknown>
events.promise(new events.EventEmitter(), 'foo', 'err', 10); // $ExpectType Promise<unknown>
events.promise(new events.EventEmitter(), 'foo', 'err', null); // $ExpectType Promise<unknown>

const deferred = new events.Deferred();
deferred.promise; // $ExpectType Promise<unknown>
deferred.resolve('foo'); // $ExpectType void
deferred.resolve(Promise.resolve('foo')); // $ExpectType void
deferred.reject(); // $ExpectType void
deferred.reject('err'); // $ExpectType void
const deferred2 = new events.Deferred<string>();
deferred2.promise; // $ExpectType Promise<string>
deferred2.resolve('foo'); // $ExpectType void
// @ts-expect-error
deferred2.resolve(10);

class MyDeferred<T> extends events.Deferred<T> {}
