import promiseRetry = require('promise-retry');

// From sleep
declare function sleep(milliseconds: number): Promise<void>;

// Adapted from Chai
interface Assertion {
    equal: Equal;
    not: Assertion;
    to: Assertion;
}
interface Equal {
    (value: any, message?: string): Assertion;
}
type Operator = string; // "==" | "===" | ">" | ">=" | "<" | "<=" | "!=" | "!==";
declare interface ExpectStatic {
    (target: any, message?: string): Assertion;
    fail(actual?: any, expected?: any, message?: string, operator?: Operator): void;
}
declare const expect: ExpectStatic;

// Adapted from Mocha
interface IContextDefinition {
    (desc: string, f: () => void): void;
    timeout(ms: number): void;
}
declare const describe: IContextDefinition;
interface IRunnable {
    timeout(n: number): this;
}
interface ITestDefinition {
    (desc: string, f: (done?: (error?: Error)=>void) => void): IRunnable;
    timeout(ms: number): void;
}
declare const it: ITestDefinition;

// Adapted from lib.d.ts
interface Console {
    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
}
declare var Console: {
    prototype: Console;
    new(): Console;
};
declare var console: Console;


describe("Promise-retry tests", function(){
    it('should allow params to be input either way round', function(){
        let count = 0;

        promiseRetry(
            (retryCb, attemptNumber) => {
                count += 1;

                return Promise.resolve()
                .then(() => {
                    console.log("Count in then()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return Promise.reject(new Error('arbitrary excuse to retry'));
                })
                .catch((err: any) => {
                    console.log("Count in catch()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return retryCb(err);
                });
            },
            {forever: true, factor: 1, minTimeout: 0, maxTimeout: 30, randomize: false}
        )
        .then((value: any) => console.log("Finished with value ", value))
        .catch((err: any) => console.error(err.message || err));

        promiseRetry(
            {forever: true, factor: 1, minTimeout: 0, maxTimeout: 30, randomize: false},
            (retryCb, attemptNumber) => {
                count += 1;

                return Promise.resolve()
                .then(() => {
                    console.log("Count in then()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return Promise.reject(new Error('arbitrary excuse to retry'));
                })
                .catch((err: any) => {
                    console.log("Count in catch()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return retryCb(err);
                });
            }
        )
        .then((value: any) => console.log("Finished with value ", value))
        .catch((err: any) => console.error(err.message || err));
    });

    it('should call fn again if retry was called', function(done){
        let count = 0;

        promiseRetry((retryCb, attemptNumber) => {
            count += 1;

            return sleep(10)
            .then(() => {
                console.log("Count in then(): " + count);
                if (count > 1) return Promise.resolve('final');
                else return Promise.reject(new Error('arbitrary excuse to retry'));
            })
            .catch((err: any) => {
                console.log("Count in catch(): " + count);
                if (count > 1) return Promise.resolve('final');
                else return retryCb(err);
            });
        }, {factor: 1})
        .then((value: string) => {
            // console.log("got into here");
            expect(value).to.equal('final');
            expect(count).to.equal(2);
            // if(value !== 'final') return Promise.reject(new Error('value != final'));
            // if(count !== 2) return Promise.reject(new Error('count != 2'));
            return Promise.resolve();
        })
        .then(() => done!())
        .catch((err: any) => done!(err));
    });

    it('should call fn with the attempt number', function(done){
        var count = 0;

        promiseRetry((retryCb, attemptNumber) => {
            count += 1;
            expect(count).to.equal(attemptNumber);

            return sleep(10)
            .then(() => {
                // console.log("Count in then(): " + count);
                if (count > 2) return Promise.resolve('final');
                else return Promise.reject(new Error('arbitrary excuse to retry'));
            })
            .catch((err: any) => {
                // console.log("Count in catch(): " + count);
                if (count > 2) return Promise.resolve('final');
                else return retryCb(err);
            });
        }, {forever: true, factor: 1, minTimeout: 0, maxTimeout: 30, randomize: false})
        .then((value: string) => {
            // console.log("got into here");
            expect(value).to.equal('final');
            expect(count).to.equal(3);
            // if(value !== 'final') return Promise.reject(new Error('value != final'));
            // if(count !== 2) return Promise.reject(new Error('count != 2'));
            return Promise.resolve();
        })
        .then(() => done!())
        .catch((err: any) => done!(err));
    });

    it('should not retry on fulfillment if retry was not called', function(done){
        let count = 0;

        promiseRetry((retryCb, attemptNumber) => {
            count += 1;

            return sleep(10)
            .then(() => Promise.resolve('final'));
        }, {factor: 1})
        .then((value: string) => {
            expect(value).to.equal('final');
            expect(count).to.equal(1);
            return Promise.resolve();
        })
        .then(() => done!())
        .catch((err: any) => done!(err));
    });

    it('should not retry on rejection if retry was not called', function(){
        var count = 0;

        return promiseRetry(function(){
            count += 1;

            return sleep(10)
            .then(function(){
                throw new Error('foo');
            });
        })
        .then(function(){
            throw new Error('should not succeed');
        }, function (err) {
            expect(err.message).to.equal('foo');
            expect(count).to.equal(1);
        });
    });

    it('should not retry on rejection if nr of retries is 0', function(){
        var count = 0;

        return promiseRetry(function(retryCb, attemptNumber) {
            count += 1;

            return sleep(10)
            .then(function(){
                throw new Error('foo');
            })
            .catch(retryCb);
        }, {retries: 0})
        .then(function(){
            throw new Error('should not succeed');
        }, function (err) {
            expect(err.message).to.equal('foo');
            expect(count).to.equal(1);
        });
    });

    it('should reject the promise if the retries were exceeded', function(){
        var count = 0;

        return promiseRetry(function(retryCb, attemptNumber) {
            count += 1;

            return sleep(10)
            .then(function(){
                throw new Error('foo');
            })
            .catch(retryCb);
        }, {retries: 2, factor: 1})
        .then(function(){
            throw new Error('should not succeed');
        }, function (err) {
            expect(err.message).to.equal('foo');
            expect(count).to.equal(3);
        });
    }).timeout(3500);

    it('should pass options to the underlying retry module', function(){
        var count = 0;

        return promiseRetry(function(retryCb, attemptNumber) {
            return sleep(10)
            .then(function(){
                if (count < 2) {
                    count += 1;
                    retryCb(new Error('foo'));
                }

                return 'final';
            });
        }, {retries: 1, factor: 1})
        .then(function(){
            throw new Error('should not succeed');
        }, function (err) {
            expect(err.message).to.equal('foo');
        });
    });

    it('should convert direct rejections into promises', function(){
        promiseRetry(function(retryCb, attemptNumber) {
            throw new Error('foo');
        }, {retries: 1, factor: 1})
        .then(function(){
            throw new Error('should not succeed');
        }, function (err) {
            expect(err.message).to.equal('foo');
        });
    });

    it('should work with several retries in the same chain', function(){
        var count = 0;

        return promiseRetry(function(retryCb, attemptNumber) {
            count += 1;

            return sleep(10)
            .then(function(){
                retryCb(new Error('foo'));
            })
            .catch(function (err: any) {
                retryCb(err);
            });
        }, {retries: 1, factor: 1})
        .then(function(){
            throw new Error('should not succeed');
        }, function (err) {
            expect(err.message).to.equal('foo');
            expect(count).to.equal(2);
        });
    });

    it('should allow options to be passed first', function(){
        var count = 0;

        return promiseRetry({factor: 1}, function(retryCb, attemptNumber) {
            count += 1;

            return sleep(10)
            .then(function(){
                if (count <= 2) {
                    retryCb(new Error('foo'));
                }

                return 'final';
            });
        }).then(function (value) {
            expect(value).to.equal('final');
            expect(count).to.equal(3);
        }, function(){
            throw new Error('should not fail');
        });
    }).timeout(3500);
});
