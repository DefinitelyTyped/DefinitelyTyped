// transplant from https://github.com/spmason/expectations/blob/695c25bd35bb1751533a8082a5aa378e3e1b381f/test/expect.tests.js

var root = window;

// Stub mocha functions
const {describe, it, before, after, beforeEach, afterEach} = null as any as {
    [s: string]: ((s: string, cb: (done: any) => void) => void) & ((cb: (done: any) => void) => void) & {only: any, skip: any};
};

describe('expect', ()=> {
    describe('toEqual', ()=> {
        it('can expect true to be true', ()=> {
            expect(true).toEqual(true);
        });
        it('can expect false not to be true', ()=> {
            try {
                expect(false).toEqual(true);
            } catch (err) {
                if (err.message !== 'expected false to equal true') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can expect an object to be a different but equivalent object', ()=> {
            expect({abc: 123}).toEqual({abc: 123});
        });
        it('Ignores undefined values when comparing objects', ()=> {
            expect({abc: 123, def: undefined}).toEqual({abc: 123});
        });
        it('equates undefined values and null', ()=> {
            expect(undefined).toEqual(null);
        });
        it('Can expect a more complex object to equal another complex object', ()=> {
            var obj1 = {"name": "someData", array: [1, 2, 3, {c: "hello"}], val2: 'ing', val1: 'test'};
            var obj2 = {"name": "someData", array: [1, 2, 3, {c: "hello"}], val1: 'test', val2: 'ing'};

            expect(obj1).toEqual(obj2);
        });
        it('Can expect undefined to equal an object correctly', ()=> {
            try {
                expect(undefined).toEqual('Not undefined');
            } catch (err) {
                if (err.message !== 'expected undefined to equal "Not undefined"') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toNotEqual', ()=> {
        it('can expect true to be false', ()=> {
            expect(true).toNotEqual(false);
        });
        it('can expect true not to be true', ()=> {
            try {
                expect(true).toNotEqual(true);
            } catch (err) {
                if (err.message !== 'expected true not to equal true') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toBe', ()=> {
        var obj1 = {'abc': 123};
        var obj2 = {'abc': 123};
        it('can expect an object to be the same object', ()=> {
            expect(obj1).toBe(obj1);
        });
        it('does not expect an object to be a different', ()=> {
            try {
                expect(obj1).toBe(obj2);
            } catch (err) {
                if (err.message !== 'expected {"abc": 123} to equal {"abc": 123}') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toMatch', ()=> {
        it('can expect string toMatch', ()=> {
            expect('abc').toMatch(/a/);
        });
        it('can expect string to not match', ()=> {
            try {
                expect('abc').toMatch(/d/);
            } catch (err) {
                if (err.message !== 'expected "abc" to match /d/') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toBeTruthy', ()=> {
        it('can expect toBeTruthy when truthy', ()=> {
            expect('abc').toBeTruthy();
        });
        it('can expect toBeTruthy when falsey', ()=> {
            try {
                expect('').toBeTruthy();
            } catch (err) {
                if (err.message !== 'expected "" to be truthy') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toContain', ()=> {
        it('can expect array of numbers to contain number (passing)', ()=> {
            expect([1, 2, 3, 4]).toContain(2);
        });
        it('can expect array of numbers to contain number (failing)', ()=> {
            try {
                expect([1, 2, 3, 4]).toContain(5);
            } catch (err) {
                if (err.message !== 'expected [1, 2, 3, 4] to contain 5') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can expect array of objects to contain object (passing)', ()=> {
            expect([
                {a: 1},
                {a: 2},
                {a: 3},
                {a: 4}
            ]).toContain({a: 2});
        });
        it('can expect array of objects to contain object (failing)', ()=> {
            try {
                expect([
                    {a: 1},
                    {a: 2},
                    {a: 3},
                    {a: 4}
                ]).toContain({a: 5});
            } catch (err) {
                if (err.message !== 'expected [{"a": 1}, {"a": 2}, {"a": 3}, {"a": 4}] to contain {"a": 5}') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toBeFalsy', ()=> {
        it('can expect toBeFalsy when falsey', ()=> {
            expect('').toBeFalsy();
        });
        it('can expect toBeFalsy when truthy', ()=> {
            try {
                expect('abc').toBeFalsy();
            } catch (err) {
                if (err.message !== 'expected "abc" to be falsey') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toBeGreaterThan', ()=> {
        it('can expect 1 toBeGreaterThan 0', ()=> {
            expect(1).toBeGreaterThan(0);
        });
        it('can expect 0 toBeGreaterThan 1 throws', ()=> {
            try {
                expect(0).toBeGreaterThan(1);
            } catch (err) {
                if (err.message !== 'expected 0 to be greater than 1') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toBeLessThan', ()=> {
        it('can expect 0 toBeLessThan 1', ()=> {
            expect(0).toBeLessThan(1);
        });
        it('can expect 1 toBeLessThan 0 throws', ()=> {
            try {
                expect(1).toBeLessThan(0);
            } catch (err) {
                if (err.message !== 'expected 1 to be less than 0') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toBeDefined', ()=> {
        it('can expect values toBeDefined', ()=> {
            expect({}).toBeDefined();
        });
        it('throws when expects undefined values toBeDefined', ()=> {
            try {
                expect(undefined).toBeDefined();
            } catch (err) {
                if (err.message !== 'expected undefined to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toBeUndefined', ()=> {
        it('can expect undefined values toBeUndefined', ()=> {
            expect(undefined).toBeUndefined();
        });
        it('throws when expects defined values toBeUndefined', ()=> {
            try {
                expect({}).toBeUndefined();
            } catch (err) {
                if (err.message !== 'expected {} to be undefined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('toThrow', ()=> {
        it('can expect functions to throw', ()=> {
            expect(()=> {
                throw new Error('');
            }).toThrow();
        });
        it('throws when function does not throw', ()=> {
            var error:Error;

            try {
                expect(()=> {
                    // All OK
                }).toThrow();
            } catch (err) {
                error = err;
            }

            if (error === undefined) {
                throw new Error('Expected error was not thrown');
            }
            if (error.message !== 'expected function (){} to throw an exception') {
                throw new Error('Expected error message is not correct: ' + error.message);
            }
        });
        it('throws when toThrow is called on a non-function', ()=> {
            var error:Error;

            try {
                expect('bob').toThrow();
            } catch (err) {
                error = err;
            }

            if (error === undefined) {
                throw new Error('Expected error was not thrown');
            }
            if (error.message !== 'expected "bob" to be a function') {
                throw new Error('Expected error message is not correct: ' + error.message);
            }
        });
    });

    describe('toBeNull', ()=> {
        it('can expect values toBeNull', ()=> {
            expect(null).toBeNull();
        });
        it('throws when expects non-null values toBeNull', ()=> {
            try {
                expect('abc').toBeDefined();
            } catch (err) {
                if (err.message !== 'expected "abc" to be null') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
    });

    describe('not', ()=> {
        it('negates equal', ()=> {
            expect(false).not.toEqual(true);
        });
    });

    describe('messages', ()=> {
        it('can generate correct message for objects', ()=> {
            try {
                expect({}).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected {} not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for arrays', ()=> {
            try {
                expect([]).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected [] not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for arrays of values', ()=> {
            try {
                expect([1, {abc: 'def'}]).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected [1, {"abc": "def"}] not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for nested arrays of values', ()=> {
            try {
                expect([1, [2]]).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected [1, [2]] not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for Function with custom toString()', ()=> {
            function Obj() {
            }

            Obj.prototype.toString = ()=> {
                return "testing";
            };
            try {
                expect(new (<any>Obj)()).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected [testing] not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for Errors', ()=> {
            try {
                expect(new Error('text')).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected [Error: text] not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for objects with circular references', ()=> {
            try {
                var obj:any = {abc: 'def'};
                obj.obj = obj;
                expect(obj).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected {"abc": "def", "obj": {"abc": "def", "obj": [Circular]}} not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for deep objects', ()=> {
            var nested:any = {},
                obj = {
                    a: {
                        b: {
                            c: {
                                d: nested
                            }
                        }
                    }
                };
            nested.e = obj;
            try {
                expect(obj).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected {"a": {"b": {"c": {"d": {"e": [object Object]}}}}} not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for deep objects with arrays', ()=> {
            var nested:any = {},
                obj = {
                    a: {
                        b: {
                            c: {
                                d: nested
                            }
                        }
                    }
                };
            nested.e = [obj];
            try {
                expect(obj).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected {"a": {"b": {"c": {"d": {"e": [[object Object]]}}}}} not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for objects with undefined values', ()=> {
            try {
                expect({a: 1, b: undefined}).toEqual({a: 1});
            } catch (err) {
                if (err.message !== 'expected {"a": 1, "b": undefined} to equal {"a": 1}') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for anonymous functions', ()=> {
            try {
                expect(()=> {
                }).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected function (){} not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for named functions', ()=> {
            try {
                expect(function name() {
                }).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected function name(){} not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        it('can generate correct message for Dates', ()=> {
            try {
                expect(new Date(2012, 0, 1)).not.toBeDefined();
            } catch (err) {
                if (err.message !== 'expected [Date Sun, 01 Jan 2012 00:00:00 GMT] not to be defined') {
                    throw new Error('Expected error message is not correct: ' + err.message);
                }
            }
        });
        if (root.document) {
            it('can generate correct message for DOM elements', ()=> {
                var el = root.document.createElement('div');

                try {
                    expect(el).toBeUndefined();
                } catch (err) {
                    if (err.message !== 'expected <div /> to be undefined') {
                        throw new Error('Expected error message is not correct: ' + err.message);
                    }
                }
            });
        }
    });

    describe('extensibility', ()=> {
        it('allows you to add your own assertions', ()=> {
            expect.addAssertion('toBeFoo', function () {
                if (this.value === 'foo') {
                    return this.pass();
                }
                this.fail('to be "foo"');
            });

            (<any>expect('foo')).toBeFoo();
        });
    });
});
