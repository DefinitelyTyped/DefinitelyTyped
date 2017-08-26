import RSVP from 'rsvp';

let promise1: RSVP.Promise<number, Error> = RSVP.Promise.resolve(1);
let promise1a: RSVP.Promise<number, Error> = RSVP.resolve(1);

let promise2: RSVP.Promise<number, Error> = RSVP.Promise.resolve(2);

let promise3: RSVP.Promise<number, Error> = RSVP.Promise.reject(new Error('3'));
let promise3a: RSVP.Promise<number, Error> = RSVP.reject(new Error('3'));

let promiseArray = [promise1, promise2, promise3];

let promiseHash = {
    promiseA: promise1,
    promiseB: promise2,
    promiseC: promise3,
    notAPromise: 4,
};

RSVP.Promise.all(promiseArray).then(arr => {}, err => {});
RSVP.all(promiseArray).then(arr => {}, err => {});

RSVP.Promise.race(promiseArray).then(arr => {}, err => {});
RSVP.race(promiseArray).then(arr => {}, err => {});

RSVP.allSettled(promiseArray).then(arr => {}, err => {});

let deferred = RSVP.defer();
deferred.resolve('Success');
deferred.promise.then(value => {});

let filterFn = (item: number) => {
    return item > 1;
};
RSVP.filter(promiseArray, filterFn).then(result => {});

RSVP.hashSettled(promiseHash).then(hash => {
    return (
        hash.promiseA.state === 'fulfilled' &&
        hash.promiseB.value === 2 &&
        hash.promiseC.reason === '3' &&
        hash.notAPromise.state === 'fulfilled'
    );
});

RSVP.hash(promiseHash).then(
    values => {
        return (
            values.promiseA < 0 &&
            values.promiseB === 4 &&
            values.promiseC === 12 &&
            values.notAPromise > 0
        );
    },
    err => {}
);

let mapFn = function(item: number) {
    return item + 1;
};
RSVP.map(promiseArray, mapFn).then(function(result) {});

let promise = new Promise(function(resolve, reject) {
    resolve();
    reject();
});
promise.then(value => {}, reason => {});

function throws() {
    throw new Error('Whoops!');
}
let throwingPromise = new RSVP.Promise(function(resolve, reject) {
    throws();
});
throwingPromise.catch(RSVP.rethrow).then(value => {}, reason => {});

let someObject = {};
RSVP.EventTarget.mixin(someObject);
RSVP.EventTarget.on('fulfilled', someString => {
    return someString;
});
RSVP.EventTarget.trigger('fulfilled', 'woohoo');
RSVP.EventTarget.off('fulfilled');
