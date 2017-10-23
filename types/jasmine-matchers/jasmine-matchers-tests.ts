/*
Typings 2013 Bart van der Schoor

TypeScript tests auto-extracted from jasmine-matchers unit test.

Original jasmine-matchers license applies:

Copyright (C) 2013, uxebu Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

describe('toBeArray', function () {
    describe('matches', function () {
        it('should pass for []', function () {
            expect([]).toBeArray();
        });
        it('should pass for `new Array`', function () {
            expect(new Array()).toBeArray();
        });
        it('should pass for [1,"",{}]', function () {
            expect([
                1,
                "",
                {
                }
            ]).toBeArray();
        });
    });
    describe('.not matches', function () {
        it('should pass for {}', function () {
            expect({
            }).not.toBeArray();
        });
        it('should pass for `arguments`', function () {
            expect(arguments).not.toBeArray();
        });
    });
});
describe('toBeNumber', function () {
    describe('matches', function () {
        it('should pass for 0', function () {
            expect(0).toBeNumber();
        });
        it('should pass for 2.1', function () {
            expect(2.1).toBeNumber();
        });
    });
    describe('non matches', function () {
        it('should pass for "x"', function () {
            expect('x').not.toBeNumber();
        });
        it('should pass for function(){}', function () {
            expect(function () {
            }).not.toBeNumber();
        });
    });
});
describe('toBeInstanceOf', function () {
    describe('matches', function () {
        it('should work for `function(){}` to be instance of `Function`', function () {
            expect(function () {
            }).toBeInstanceOf(Function);
        });
    });
});
describe('toBeNan', function () {
    describe('matches', function () {
        it('should work for NaN', function () {
            expect(NaN).toBeNan();
        });
    });
});
describe('toBeOfType', function () {
    describe('matches', function () {
        it('should work for `number`', function () {
            expect(1).toBeOfType('number');
        });
    });
    describe('non-matches', function () {
        it('should work for `number`', function () {
            expect('a').not.toBeOfType('number');
        });
    });
});
describe('toBeInRange', function () {
    describe('matches', function () {
        it('should find 0 in 0..1', function () {
            expect(0).toBeInRange(0, 1);
        });
        it('should find 1 in 0..2', function () {
            expect(1).toBeInRange(0, 2);
        });
        it('should find 1.5 in 1..2', function () {
            expect(1.5).toBeInRange(1, 2);
        });
    });
    describe('non-matches', function () {
        it('should not find 0 in 1..2', function () {
            expect(0).not.toBeInRange(1, 2);
        });
        it('should not find 100 in 33..55', function () {
            expect(100).not.toBeInRange(33, 55);
        });
    });
});
describe('toBeOneOf', function () {
    describe('matches', function () {
        it('should find "a" in ["a", "b"]', function () {
            expect('a').toBeOneOf([
                'a',
                'b'
            ]);
        });
        it('should find "uxebu" in ["company", "uxebu"]', function () {
            expect('uxebu').toBeOneOf([
                'company',
                'uxebu'
            ]);
        });
    });
    describe('non-matches', function () {
        it('should not find "" in [" ", "0"]', function () {
            expect('').not.toBeOneOf([
                ' ',
                '0'
            ]);
        });
        it('should not find "a" in ["b", "c"]', function () {
            expect('a').not.toBeOneOf([
                'b',
                'c'
            ]);
        });
    });
});
describe('toBeCloseToOneOf', function () {
    function oneDigitOff(actual: any, expected: any) {
        var actualInt = parseInt(actual, 10);
        return actualInt - 1 <= expected && actualInt + 1 >= expected;
    }
    function tenPercentOff(actual: any, expected: any) {
        return expected * 0.9 <= actual && expected * 1.1 >= actual;
    }
    function oneDigitOrTenPercentOff(actual: any, expected: any) {
        return oneDigitOff(actual, expected) || tenPercentOff(actual, expected);
    }
    function twoDecimalsOff(actual: any, expected: any) {
        var lower = ((expected * 100) - 2) / 100;
        var upper = ((expected * 100) + 2) / 100;
        return lower <= actual && upper >= actual;
    }
    describe('matches', function () {
        it('should say 7 is close to one of [8, 9]', function () {
            expect(7).toBeCloseToOneOf([
                8,
                9
            ], oneDigitOff);
        });
        it('should say 2 is 10% off of one of [2.2, 1.0]', function () {
            expect(2).toBeCloseToOneOf([
                2.2,
                1.0
            ], tenPercentOff);
        });
        it('should say 7 is close to one of [8, 9]', function () {
            expect(7).toBeCloseToOneOf([
                8,
                9
            ], oneDigitOrTenPercentOff);
        });
        it('should say 1.345 two decimals off of [1.325, 1.365]', function () {
            expect(1.345).toBeCloseToOneOf([
                1.325,
                1.365
            ], twoDecimalsOff);
        });
    });
    describe('non-matches', function () {
        it('should say 7 is NOT one off of [9, 10, 11]', function () {
            expect(7).not.toBeCloseToOneOf([
                9,
                10,
                11
            ], oneDigitOff);
        });
        it('should say 1 is close to one of [8, 9]', function () {
            expect(1).not.toBeCloseToOneOf([
                8,
                9
            ], oneDigitOrTenPercentOff);
        });
        it('should say 1.9 is NOT 10% off of one of [2.2, 1.0]', function () {
            expect(1.9).not.toBeCloseToOneOf([
                2.2,
                1.0
            ], tenPercentOff);
        });
        it('should say 1.345 two decimals off of [1.325, 1.365]', function () {
            expect(1.304).not.toBeCloseToOneOf([
                1.325,
                1.365
            ], twoDecimalsOff);
        });
    });
});

describe('toContainOnce', function () {
    describe('matches', function () {
        it('should work for arrays', function () {
            expect([
                1,
                2
            ]).toContainOnce(1);
        });
        it('should work for strings', function () {
            expect('uxebu rox').toContainOnce('uxebu');
        });
    });
    describe('non-matches', function () {
        it('should work for arrays', function () {
            expect([
                1,
                2
            ]).not.toContainOnce(3);
        });
        it('should work for strings', function () {
            expect('uxebu rox').not.toContainOnce('u');
        });
        it('should work for undefined', function () {
            expect(undefined).not.toContainOnce(1);
        });
    });
});

describe('toHaveLength', function () {
    describe('matches', function () {
        it('should work for `{length:2}`', function () {
            expect({
                length: 2
            }).toHaveLength(2);
        });
        it('should work for `{length:null}`', function () {
            expect({
                length: null
            }).toHaveLength(null);
        });
    });
});
describe('toHaveProperties', function () {
    describe('matches', function () {
        it('should work for `{x:0, y:undefined}`', function () {
            var obj: any = {
                x: 0,
                y: undefined
            };
            expect(obj).toHaveProperties('x', 'y');
        });
    });
});
describe('toHavePropertiesWithValues', function () {
    describe('matches', function () {
        it('should work with a reference object', function () {
            var C: any = function C() {
                this.x = 0;
            }
            C.prototype.y = 'arbitrary';
            expect(new C()).toHavePropertiesWithValues({
                x: 0,
                y: 'arbitrary',
                constructor: C
            });
        });
    });
});
describe('toHaveOwnProperties', function () {
    describe('matches', function () {
        it('should work for `{x:0, y:undefined}`', function () {
            var obj: any = {
                x: 0,
                y: undefined
            };
            expect(obj).toHaveOwnProperties('x', 'y');
        });
    });
});
describe('toHaveOwnPropertiesWithValues', function () {
    describe('matches', function () {
        it('should work with a reference object', function () {
            expect({
                x: 0,
                y: 'arbitrary'
            }).toHaveOwnPropertiesWithValues({
                x: 0,
                y: 'arbitrary'
            });
        });
    });
});
describe('toHaveBeenCalledXTimes', function () {
    describe('matches', function () {
        it('should work for 1', function () {
            var func = jasmine.createSpy('func');
            func();
            expect(func).toHaveBeenCalledXTimes(1);
        });
        it('should work for 2', function () {
            var func = jasmine.createSpy('func');
            func();
            func();
            expect(func).not.toHaveBeenCalledXTimes(1);
        });
    });
});
describe('toExactlyHaveProperties', function () {
    describe('matches', function () {
        it('should work for `{x:0, y:undefined}`', function () {
            var obj: any = {
                x: 0,
                y: undefined
            };
            expect(obj).toExactlyHaveProperties('x', 'y');
        });
        it('should work in any order', function () {
            var obj: any = {
                x: 0,
                y: undefined
            };
            expect(obj).toExactlyHaveProperties('y', 'x');
        });
    });
    describe('non-matches', function () {
        it('should work for too many properties', function () {
            var obj: any = {
                x: 0,
                y: undefined
            };
            expect(obj).not.toExactlyHaveProperties('x');
        });
        it('should work for missing properties', function () {
            var obj: any = {
                x: 0,
                y: undefined
            };
            expect(obj).not.toExactlyHaveProperties('x', 'y', 'z');
        });
    });
});

describe('toEndWith', function () {
    describe('matches', function () {
        it('should work for string', function () {
            expect('abc').toEndWith('c');
        });
        it('should work for equal string', function () {
            expect('abc').toEndWith('abc');
        });
    });
    describe('non-matches', function () {
        it('should work for string', function () {
            expect('abc').not.toEndWith('d');
        });
        it('should work for equal string', function () {
            expect('abc').not.toEndWith('abz');
        });
    });
    describe('with array', function () {
        describe('matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).toEndWith('2');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).toEndWith([
                    4,
                    5
                ]);
            });
        });
        describe('non-matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).not.toEndWith('3');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).not.toEndWith([
                    3,
                    4
                ]);
            });
        });
    });
});
describe('toEachEndWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toEachEndWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwee',
                'three'
            ]).toEachEndWith('e');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toEachEndWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwei',
                'three'
            ]).not.toEachEndWith('e');
        });
    });
});
describe('toSomeEndWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toSomeEndWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwee',
                'three'
            ]).toSomeEndWith('ee');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toSomeEndWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwei',
                'three'
            ]).not.toSomeEndWith('a');
        });
    });
});
describe('toStartWith', function () {
    describe('matches', function () {
        it('should work for string', function () {
            expect('abc').toStartWith('a');
        });
        it('should work for equal string', function () {
            expect('abc').toStartWith('abc');
        });
    });
    describe('non-matches', function () {
        it('should work for string', function () {
            expect('abc').not.toStartWith('d');
        });
        it('should work for equal string', function () {
            expect('abc').not.toStartWith('abz');
        });
    });
    describe('with array', function () {
        describe('matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).toStartWith('1');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).toStartWith([
                    3,
                    4
                ]);
            });
        });
        describe('non-matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).not.toStartWith('3');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).not.toStartWith([
                    4,
                    5
                ]);
            });
        });
    });
});
describe('toEachStartWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toEachStartWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'onetwo',
                'onethree'
            ]).toEachStartWith('o');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toEachStartWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'two',
                'onethree'
            ]).not.toEachStartWith('o');
        });
    });
});
describe('toSomeStartWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toSomeStartWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'onetwo',
                'three'
            ]).toSomeStartWith('one');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toSomeStartWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'two',
                'onethree'
            ]).not.toSomeStartWith('a');
        });
    });
});
describe('toStartWithEither', function () {
    describe('matches', function () {
        it('should work for two parameters', function () {
            expect('one').toStartWithEither('two', 'one');
        });
        it('should work for three parameters', function () {
            expect('one').toStartWithEither('two', 'one', 'three');
        });
        it('should work for multiple matches', function () {
            expect('one').toStartWithEither('on', 'one', 'o');
        });
    });
    describe('non-matches', function () {
        it('should work for two elements', function () {
            expect('one').not.toStartWithEither('e', 'a');
        });
        it('should work for three elements', function () {
            expect('one').not.toStartWithEither('ne', 'ones', 'two');
        });
    });
    describe('with array', function () {
        describe('matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).toStartWithEither('1', '2');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).toStartWithEither([
                    4
                ], [
                    3,
                    4
                ]);
            });
        });
        describe('non-matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).not.toStartWithEither('3');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).not.toStartWithEither([
                    5,
                    6
                ], [
                    4,
                    5
                ]);
            });
        });
    });
});

describe('toThrowInstanceOf', function () {
    describe('matches', function () {
        it('should work for `Error`', function () {
            expect(function () {
                throw new Error();
            }).toThrowInstanceOf(Error);
        });
    });
});
describe('toThrowStartsWith', function () {
    describe('matches', function () {
        it('should match the error string', function () {
            expect(function () {
                throw new Error('ooops');
            }).toThrowStartsWith('ooops');
        });
    });
    describe('non-matches', function () {
        it('should mismatch the error string', function () {
            expect(function () {
                throw new Error('ooops');
            }).not.toThrowStartsWith('1');
        });
    });
});
