import { ZalgoPromise } from 'zalgo-promise';

// Declaring shims removes mocha dependency.  These tests are never executed, only typechecked, so this is fine.
type Done = (err?: any) => void;
type Func = (done: Done) => void;
declare function describe(description: string, specDefinitions: () => void): void;
declare function it(title: string, fn?: Func): void;

describe('flush cases', () => {
    it('should call flush after every other synchronous task completed', () => {
        return ZalgoPromise.try(() => {
            let count = 0;
            const tasks = [];

            tasks.push(ZalgoPromise.flush().then(() => {
                if (count !== 6) {
                    throw new Error(`Expected count to be 6, got ${ count }`);
                }
            }));

            tasks.push(ZalgoPromise.try(() => {
                count += 1;
            }));

            tasks.push(ZalgoPromise.try(() => {
                count += 2;
            }));

            tasks.push(ZalgoPromise.try(() => {
                count += 3;
            }));

            return ZalgoPromise.all(tasks);
        });
    });
});

describe('promise method cases', () => {
    it('should work with a set of resolved promises in promise.all', () => {
        return ZalgoPromise.all([
            ZalgoPromise.resolve(1),
            ZalgoPromise.resolve(2),
            ZalgoPromise.resolve(3)
        ]).then(([ one, two, three ]) => {
            if (one !== 1) {
                throw new Error(`Expected 1, got ${ one }`);
            }
            if (two !== 2) {
                throw new Error(`Expected 2, got ${ two }`);
            }
            if (three !== 3) {
                throw new Error(`Expected 3, got ${ three }`);
            }
        }).toPromise();
    });

    it('should work with a set of resolved values or promises in promise.all', () => {
        return ZalgoPromise.all([
            1,
            ZalgoPromise.resolve(2),
            3
        ]).then(([ one, two, three ]) => {
            if (one !== 1) {
                throw new Error(`Expected 1, got ${ one }`);
            }
            if (two !== 2) {
                throw new Error(`Expected 2, got ${ two }`);
            }
            if (three !== 3) {
                throw new Error(`Expected 3, got ${ three }`);
            }
        }).toPromise();
    });

    it('should reject with any rejected promise from promise.all', () => {
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.all([
            ZalgoPromise.resolve(1),
            ZalgoPromise.reject(new Error(error)),
            ZalgoPromise.resolve(3)
        ]).then(() => {
            throw new Error(`Expected then to not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should reject with the first rejected promise from promise.all', () => {
        const error = 'SERIOUS_ERROR';
        const error2 = 'SERIOUS_ERROR2';

        return ZalgoPromise.all([
            ZalgoPromise.resolve(1),
            ZalgoPromise.reject(new Error(error)),
            ZalgoPromise.reject(new Error(error2))
        ]).then(() => {
            throw new Error(`Expected then to not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should call promise.delay and wait some time', () => {
        let timeoutCalled = false;

        const timeout = setTimeout(() => {
            timeoutCalled = true;
        }, 100);

        return ZalgoPromise.delay(10).then(() => {
            clearTimeout(timeout);
            if (timeoutCalled) {
                throw new Error(`Expected timeout to not be called`);
            }
        }).toPromise();
    });

    it('should work with a set of resolved promises in promise.hash', () => {
        return ZalgoPromise.hash({
            one:   ZalgoPromise.resolve(1),
            two:   ZalgoPromise.resolve(2),
            three: ZalgoPromise.resolve(3)
        }).then(({ one, two, three }) => {
            if (one !== 1) {
                throw new Error(`Expected 1, got ${ one }`);
            }
            if (two !== 2) {
                throw new Error(`Expected 2, got ${ two }`);
            }
            if (three !== 3) {
                throw new Error(`Expected 3, got ${ three }`);
            }
        }).toPromise();
    });

    it('should work with a set of resolved values or promises in promise.hash', () => {
        return ZalgoPromise.hash({
            one:   1,
            two:   ZalgoPromise.resolve(2),
            three: 3
        }).then(({ one, two, three }) => {
            if (one !== 1) {
                throw new Error(`Expected 1, got ${ one }`);
            }
            if (two !== 2) {
                throw new Error(`Expected 2, got ${ two }`);
            }
            if (three !== 3) {
                throw new Error(`Expected 3, got ${ three }`);
            }
        }).toPromise();
    });

    it('should reject with any rejected promise from promise.hash', () => {
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.hash({
            one:   ZalgoPromise.resolve(1),
            two:   ZalgoPromise.reject(new Error(error)),
            three: ZalgoPromise.resolve(3)
        }).then(() => {
            throw new Error(`Expected then to not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should reject with the first rejected promise from promise.hash', () => {
        const error = 'SERIOUS_ERROR';
        const error2 = 'SERIOUS_ERROR2';

        return ZalgoPromise.hash({
            one:   ZalgoPromise.resolve(1),
            two:   ZalgoPromise.reject(new Error(error)),
            three: ZalgoPromise.reject(new Error(error2))
        }).then(() => {
            throw new Error(`Expected then to not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should work with a set of values in promise.map', () => {
        return ZalgoPromise.map([
            1,
            2,
            3
        ], x => x + 1).then(([ two, three, four ]) => {
            if (two !== 2) {
                throw new Error(`Expected 2, got ${ two }`);
            }
            if (three !== 3) {
                throw new Error(`Expected 3, got ${ three }`);
            }
            if (four !== 4) {
                throw new Error(`Expected 4, got ${ four }`);
            }
        }).toPromise();
    });

    it('should work with a set of values and a promise returning function in promise.map', () => {
        return ZalgoPromise.map([
            1,
            2,
            3
        ], x => ZalgoPromise.resolve(x + 1)).then(([ two, three, four ]) => {
            if (two !== 2) {
                throw new Error(`Expected 2, got ${ two }`);
            }
            if (three !== 3) {
                throw new Error(`Expected 3, got ${ three }`);
            }
            if (four !== 4) {
                throw new Error(`Expected 4, got ${ four }`);
            }
        }).toPromise();
    });

    it('should work with a simple method passed to promise.try', () => {
        const value = 'foobar';

        return ZalgoPromise.try(() => {
            return value;
        }).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to equal ${ value }`);
            }
        }).toPromise();
    });

    it('should work with a conditional method passed to promise.try', () => {
        const value = 'foobar';

        return ZalgoPromise.try(() => {
            if (value === 'foobar') {
                return value;
            }
        }).then(result => {
            if (result && result !== value) {
                throw new Error(`Expected ${ result } to equal ${ value }`);
            }
        }).toPromise();
    });

    it('should work with a promise returning method passed to promise.try', () => {
        const value = 'foobar';

        return ZalgoPromise.try(() => {
            return ZalgoPromise.resolve(value);
        }).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to equal ${ value }`);
            }
        }).toPromise();
    });

    it('should work with a conditional promise returning method passed to promise.try', () => {
        const value = 'foobar';

        return ZalgoPromise.try(() => {
            if (value === 'foobar') {
                return ZalgoPromise.resolve(value);
            }
        }).then(result => {
            if (result && result !== value) {
                throw new Error(`Expected ${ result } to equal ${ value }`);
            }
        }).toPromise();
    });

    it('should work with a conditional promise returning method passed to promise.try, with an inner promise.try', () => {
        const value = 'foobar';

        return ZalgoPromise.try(() => {
            if (value === 'foobar') {
                return ZalgoPromise.try(() => {
                    return value;
                });
            }
        }).then(result => {
            if (result && result !== value) {
                throw new Error(`Expected ${ result } to equal ${ value }`);
            }
        }).toPromise();
    });

    it('should work with a conditional promise returning method passed to promise.try, calling an external function', () => {
        const value = 'foobar';

        function getValue(): ZalgoPromise<string> {
            return ZalgoPromise.try(() => {
                return value;
            });
        }
        return ZalgoPromise.try(() => {
            if (value === 'foobar') {
                return getValue();
            }
        }).then(result => {
            if (result && result !== value) {
                throw new Error(`Expected ${ result } to equal ${ value }`);
            }
        }).toPromise();
    });
});

describe('reject cases', () => {
    it('should create a rejected promise and catch the error', () => {
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.reject(new Error(error)).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should create a rejected promise and catch the error in then', () => {
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.reject(new Error(error)).then(() => {
            throw new Error(`Success handler should not be called`);
        }, err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should create a rejected existing promise and catch the error', () => {
        const error = 'SERIOUS_ERROR';

        return (new ZalgoPromise()).reject(new Error(error)).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should create a rejected promise with the constructor and catch the error', () => {
        const error = 'SERIOUS_ERROR';

        return new ZalgoPromise((resolve, reject) => reject(new Error(error))).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should create a rejected promise asynchronously with the constructor and catch the error', () => {
        const error = 'SERIOUS_ERROR';

        return new ZalgoPromise((resolve, reject) => {
            setTimeout(() => reject(new Error(error)), 50);
        }).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should create a rejected promise by throwing in the constructor and catch the error', () => {
        const error = 'SERIOUS_ERROR';

        return new ZalgoPromise(() => {
            throw new Error(error);
        }).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should create a rejected promise and not call any subsequent thens', () => {
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.reject(new Error(error)).then(() => {
            throw new Error('This should never be called');
        }).then(() => {
            throw new Error('This should never be called either');
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should create a rejected promise and handle the error then call then', () => {
        const value = 'foobar';
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.reject(new Error(error)).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
            return value;
        }).then((result) => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should reject synchronously', () => {
        let hasRejected = false;

        ZalgoPromise.reject(new Error('Some error')).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(() => {
            hasRejected = true;
        });

        if (!hasRejected) {
            throw new Error(`Expected sync promise to have rejected`);
        }
    });

    it('should only be able to reject a promise once', () => {
        const error = 'SERIOUS_ERROR';
        const promise = ZalgoPromise.reject(new Error(error));
        promise.reject(new Error('fizzbuzz'));
        promise.resolve(new Error('$$%^&*'));

        return promise.then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should fail when trying to create a rejected promise with an existing promise', () => {
        const error = 'SERIOUS_ERROR';
        let caughtErr;

        const promise = ZalgoPromise.reject(new Error(error));
        promise.catch(() => {
            // pass
        });

        try {
            ZalgoPromise.reject(promise);
        } catch (err) {
            caughtErr = err;
        }

        if (!(caughtErr instanceof Error)) {
            throw new TypeError(`Expected error to be thrown`);
        }
    });

    it('should allow rejecting the promise by returning a rejected promise in then', () => {
        const value = 'foobar';
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.resolve(value).then(() => {
            return ZalgoPromise.reject(new Error(error));
        }).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should allow rejecting the promise by returning an async rejected promise in then', () => {
        const value = 'foobar';
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.resolve(value).then(() => {
            return new ZalgoPromise((resolve, reject) => {
                setTimeout(() => reject(new Error(error)), 50);
            });
        }).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should reject when an error is thrown in a then', () => {
        const value = 'foobar';
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.resolve(value).then(() => {
            throw new Error(error);
        }).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should reject with the latest error when an error is thrown in a then', () => {
        const value = 'foobar';
        const error = 'SERIOUS_ERROR';
        const error2 = 'TERRIBLE_ERROR';

        return ZalgoPromise.resolve(value).then(() => {
            throw new Error(error);
        }).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(() => {
            throw new Error(error2);
        }).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected err to be Error type, got ${ typeof err }`);
            }
            if (err.message !== error2) {
                throw new Error(`Expected ${ err.message } to be ${ error2 }`);
            }
        }).toPromise();
    });

    it('should turn an undefined rejection into an actual error', () => {
        return ZalgoPromise.reject(undefined).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected Error object to be thrown`);
            }
        }).toPromise();
    });

    it('should turn a null rejection into an actual error', () => {
        return ZalgoPromise.reject(null).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected Error object to be thrown`);
            }
        }).toPromise();
    });

    it('should turn a null string rejection into an actual error', () => {
        return ZalgoPromise.reject('').then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected Error object to be thrown`);
            }
        }).toPromise();
    });

    it('should turn an false rejection into an actual error', () => {
        return ZalgoPromise.reject(false).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (!(err instanceof Error)) {
                throw new TypeError(`Expected Error object to be thrown`);
            }
        }).toPromise();
    });

    it('should keep a string rejection as a string', () => {
        const error = 'SERIOUS_ERROR';

        return ZalgoPromise.reject(error).then(() => {
            throw new Error(`Success handler should not be called`);
        }).catch(err => {
            if (err !== error) {
                throw new Error(`Expected ${ Object.prototype.toString.call(err) } to be ${ error }`);
            }
        }).toPromise();
    });

    it('should fail when trying to pass a non-function into then as a success handler', () => {
        const promise = ZalgoPromise.resolve('foobar');
        let caughtErr;

        try {
            // @ts-expect-error
            promise.then(123);
        } catch (err) {
            caughtErr = err;
        }

        if (!(caughtErr instanceof Error)) {
            throw new TypeError(`Expected error to be thrown`);
        }
    });

    it('should fail when trying to pass a non-function into then as an error handler', () => {
        const promise = ZalgoPromise.resolve('foobar');
        let caughtErr;

        try {
            // @ts-expect-error
            promise.then(null, 123);
        } catch (err) {
            caughtErr = err;
        }

        if (!(caughtErr instanceof Error)) {
            throw new TypeError(`Expected error to be thrown`);
        }
    });

    it('should fail when trying to pass a non-function into catch as an error handler', () => {
        const promise = ZalgoPromise.resolve('foobar');
        let caughtErr;

        try {
            // @ts-expect-error
            promise.catch(123);
        } catch (err) {
            caughtErr = err;
        }

        if (!(caughtErr instanceof Error)) {
            throw new TypeError(`Expected error to be thrown`);
        }
    });

    it('should call unhandled promise method when promise is rejected without having a handler', (done) => {
        window.addEventListener('error', () => {
            // pass
        });

        const listener = ZalgoPromise.onPossiblyUnhandledException(err => {
            listener.cancel();
            if (!(err instanceof Error)) {
                done(new Error(`Expected error to be thrown`));
            }
            done();
        });

        ZalgoPromise.reject(new Error('foobar'));
    });

    it('should not call unhandled promise method when promise is async-rejected without having a handler', (done) => {
        window.addEventListener('error', () => {
            // pass
        });

        let onPossiblyUnhandledExceptionCalled = false;

        const listener = ZalgoPromise.onPossiblyUnhandledException(() => {
            onPossiblyUnhandledExceptionCalled = true;
        });

        (new ZalgoPromise()).asyncReject(new Error('foobar'));

        setTimeout(() => {
            listener.cancel();
            if (onPossiblyUnhandledExceptionCalled) {
                done(new Error(`Expected onPossiblyUnhandledException handler to not be called`));
            }
            done();
        }, 100);
    });

    it('should create a rejected promise and call finally even if the error is not caught', () => {
        window.addEventListener('error', () => {
            // pass
        });

        const error = 'SERIOUS_ERROR';
        let finallyCalled = false;

        return ZalgoPromise.reject(new Error(error)).then(() => {
            throw new Error(`Success handler should not be called`);
        }).finally(() => {
            finallyCalled = true;
        }).catch(err => {
            if (err instanceof Error && err.message !== error) {
                throw new Error(`Expected ${ err.message } to be ${ error }`);
            }
            if (!finallyCalled) {
                throw new Error(`Expected finally to be called`);
            }
        }).toPromise();
    });

    it('should call unhandled promise method only once for a given error', (done) => {
        window.addEventListener('error', () => {
            // pass
        });

        const error = new Error('foobar');
        let handlerCalled = 0;

        const listener = ZalgoPromise.onPossiblyUnhandledException(() => {
            handlerCalled += 1;
        });

        window.onerror = () => {
            // pass
        };

        ZalgoPromise.reject(error);
        ZalgoPromise.reject(error);
        ZalgoPromise.reject(error);

        setTimeout(() => {
            listener.cancel();
            if (handlerCalled !== 1) {
                done(new Error(`Expected handler to be called 1 time, got ${ handlerCalled }`));
            }
            done();
        }, 50);
    });

    it('should not call unhandled promise method when promise is rejected after a handler is subsequently added', (done) => {
        window.addEventListener('error', () => {
            // pass
        });

        let onPossiblyUnhandledExceptionCalled = false;

        const listener = ZalgoPromise.onPossiblyUnhandledException(() => {
            onPossiblyUnhandledExceptionCalled = true;
        });

        const promise = new ZalgoPromise();

        setTimeout(() => {
            promise.catch(() => {
                // pass
            });
            promise.reject(new Error('foobar'));

            setTimeout(() => {
                listener.cancel();
                if (onPossiblyUnhandledExceptionCalled) {
                    done(new Error(`Expected onPossiblyUnhandledException handler to not be called`));
                }
                done();
            }, 100);
        }, 100);
    });

    it('should not call unhandled promise method when lazy promise is rejected without having a handler', () => {
        window.addEventListener('error', () => {
            // pass
        });

        let error: any;

        const listener = ZalgoPromise.onPossiblyUnhandledException(err => {
            error = err;
        });

        ZalgoPromise.reject(new Error('foobar')).lazy();

        return ZalgoPromise.delay(50).then(() => {
            listener.cancel();
            if (error) {
                throw new Error(`Expected error to not be thrown`);
            }
        });
    });
});

describe('resolve cases', () => {
    it('should create a resolved promise and get the value', () => {
        const value = 'foobar';

        return ZalgoPromise.resolve(value).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should create a resolved promise with a compound value and get the value', () => {
        const value1 = 'foobar';
        const value2 = 'fizzbuzz';

        return ZalgoPromise.resolve(value1).then(result1 => {
            return [ result1, value2 ];
        }).then(([ result1, result2 ]) => {
            if (result1 !== value1) {
                throw new Error(`Expected ${ result1 } to be ${ value1 }`);
            }

            if (result2 !== value2) {
                throw new Error(`Expected ${ result2 } to be ${ value2 }`);
            }
        }).toPromise();
    });

    it('should create a resolved existing promise and get the value', () => {
        const value = 'foobar';

        return (new ZalgoPromise()).resolve(value).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should create a resolved promise with the constructor and get the value', () => {
        const value = 'foobar';

        return new ZalgoPromise(resolve => resolve(value)).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should create a resolved promise asynchronously with the constructor and get the value', () => {
        const value = 'foobar';

        return new ZalgoPromise(resolve => {
            setTimeout(() => resolve(value), 50);
        }).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should create a resolved promise and get the value', () => {
        const value = 'foobar';

        return ZalgoPromise.resolve(value).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should resolve synchronously', () => {
        let hasResolved = false;

        ZalgoPromise.resolve().then(() => {
            hasResolved = true;
        });

        if (!hasResolved) {
            throw new Error(`Expected sync promise to have resolved`);
        }
    });

    it('should only be able to resolve a promise once', () => {
        const value = 'foobar';
        const promise = ZalgoPromise.resolve(value);
        promise.resolve('fizzbuzz');
        promise.resolve('$$%^&*');

        return promise.then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should resolve with an existing promise', () => {
        const value = 'foobar';

        return ZalgoPromise.resolve(ZalgoPromise.resolve(value)).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });

    it('should allow returning a promise in then', () => {
        const value = 'foobar';
        const value2 = 'fizzbuzz';

        return ZalgoPromise.resolve(value).then(() => {
            return ZalgoPromise.resolve(value2);
        }).then(result => {
            if (result !== value2) {
                throw new Error(`Expected ${ result } to be ${ value2 }`);
            }
        }).toPromise();
    });

    it('should allow returning an asynchronous promise in then', () => {
        const value = 'foobar';
        const value2 = 'fizzbuzz';

        return ZalgoPromise.resolve(value).then(() => {
            return new ZalgoPromise(resolve => {
                setTimeout(() => resolve(value2), 50);
            });
        }).then(result => {
            if (result !== value2) {
                throw new Error(`Expected ${ result } to be ${ value2 }`);
            }
        }).toPromise();
    });

    it('should fail when trying to resolve an existing promise with a promise', () => {
        const value = 'foobar';
        let caughtErr;

        try {
            new ZalgoPromise(resolve => resolve(ZalgoPromise.resolve(value))); // eslint-disable-line no-new
        } catch (err) {
            caughtErr = err;
        }

        if (!(caughtErr instanceof Error)) {
            throw new TypeError(`Expected error to be thrown`);
        }
    });

    it('should create a resolved promise and call finally', () => {
        const value = 'foobar';
        let finallyCalled = false;

        return ZalgoPromise.resolve(value).finally(() => {
            finallyCalled = true;
        }).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
            if (!finallyCalled) {
                throw new Error(`Expected finally to be called`);
            }
        }).toPromise();
    });

    it('should be able to attach a then handler in the then handler for a promise', () => {
        const promise = ZalgoPromise.resolve();

        return promise.then(() => {
            return promise.then(() => {
                // pass
            });
        }).toPromise();
    });

    it('should create a resolved promise and register multiple then handlers', () => {
        const value = 'foobar';
        const promise = ZalgoPromise.resolve(value);

        let thenCount = 0;

        return ZalgoPromise.all([
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            }),
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            })
        ]).then(() => {
            if (thenCount !== 2) {
                throw new Error(`Expected then to have been called 2 times, got ${ thenCount } calls`);
            }
        }).toPromise();
    });

    it('should create a resolved promise and register multiple then handlers, resolved asynchronously', () => {
        const value = 'foobar';
        const promise = new ZalgoPromise(resolve => {
            setTimeout(() => resolve(value), 1);
        });

        let thenCount = 0;

        return ZalgoPromise.all([
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            }),
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            })
        ]).then(() => {
            if (thenCount !== 2) {
                throw new Error(`Expected then to have been called 2 times, got ${ thenCount } calls`);
            }
        }).toPromise();
    });

    it('should create a resolved promise and register multiple then handlers with one failure', () => {
        const value = 'foobar';
        const promise = ZalgoPromise.resolve(value);

        let thenCount = 0;
        let errorHandlerCalled = false;

        return ZalgoPromise.all([
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            }),
            promise.then(() => {
                thenCount += 1;
                throw new Error('oh no!');
            }),
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            })
        ]).catch(() => {
            errorHandlerCalled = true;

            if (thenCount !== 3) {
                throw new Error(`Expected then to have been called 3 times, got ${ thenCount } calls`);
            }
        }).then(() => {
            if (!errorHandlerCalled) {
                throw new Error(`Expected error handler to be called`);
            }
        }).toPromise();
    });

    it('should create a resolved promise and register multiple then handlers with one failure, resolved asynchronously', () => {
        const value = 'foobar';
        const promise = new ZalgoPromise(resolve => {
            setTimeout(() => resolve(value), 1);
        });

        let thenCount = 0;
        let errorHandlerCalled = false;

        return ZalgoPromise.all([
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            }),
            promise.then(() => {
                thenCount += 1;
                throw new Error('oh no!');
            }),
            promise.then(result => {
                thenCount += 1;
                if (result !== value) {
                    throw new Error(`Expected ${ result } to be ${ value }`);
                }
            })
        ]).catch(() => {
            errorHandlerCalled = true;

            if (thenCount !== 2) {
                throw new Error(`Expected then to have been called 2 times, got ${ thenCount } calls`);
            }
        }).then(() => {
            if (!errorHandlerCalled) {
                throw new Error(`Expected error handler to be called`);
            }
        }).toPromise();
    });

    it('should work when trying to return a promise in its own then method', () => {
        const value = 'foobar';
        const promise = ZalgoPromise.resolve(value);

        return promise.then(() => promise).then(result => {
            if (result !== value) {
                throw new Error(`Expected ${ result } to be ${ value }`);
            }
        }).toPromise();
    });
});
