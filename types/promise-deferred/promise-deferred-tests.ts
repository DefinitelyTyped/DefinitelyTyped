import Deferred = require("promise-deferred");

// test type exports
type Deferred = Deferred.Deferred<string>;

Deferred.Promise; // $ExpectType PromiseConstructor

const deferred = new Deferred<string>(); // $ExpectType Deferred<string>
Deferred<string>(); // $ExpectType Deferred<string>

deferred.promise; // $ExpectType Promise<string>

deferred.resolve("a value"); // $ExpectType void
deferred.reject(new Error("oh noes")); // $ExpectType void
