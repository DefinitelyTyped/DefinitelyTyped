/*
Typings 2013 Bart van der Schoor

TypeScript tests auto-extracted from jasmine-matchers unit test.

Original jasmine-matchers license applies:

Copyright (C) 2013, uxebu Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../jasmine/jasmine.d.ts" />
/// <reference path="jasmine-matchers.d.ts" />

function getArgumentsObject() {
    return (function (a, b, c) {
        return arguments;
    } (1, 2, 3));
}

function getArrayLikeObject() {
    return {
        0: 1,
        1: 2,
        2: 3
    };
}

function describeWhenNotArray(toBeArraymemberName) {
    describe('when subject is not a true Array', function () {
        describe('when subject is Array-like', function () {
            it('should deny', function () {
                expect(getArgumentsObject()).not[toBeArraymemberName]();
                expect(getArrayLikeObject()).not[toBeArraymemberName]();
            });
        });
        describe('when subject is not Array-like', function () {
            it('should deny', function () {
                expect({}).not[toBeArraymemberName]();
                expect(null).not[toBeArraymemberName]();
                expect(void (0)).not[toBeArraymemberName]();
                expect(true).not[toBeArraymemberName]();
                expect(false).not[toBeArraymemberName]();
                expect(Array).not[toBeArraymemberName]();
            });
        });
    });
}

function describeToBeArrayOfX(options) {
    describe(options.name, function () {
        describe('when invoked', function () {
            describe('when subject is a true Array', function () {
                describe('when subject has no members', function () {
                    it('should confirm (an empty array of ' + options.type + 's is valid)', function () {
                        expect([])[options.name]();
                    });
                });
                describe('when subject has members', function () {
                    describe('when subject has a mix of ' + options.type + 's and other items', function () {
                        it('should deny', options.whenMixed);
                    });
                    describe('when subject has only ' + options.type + 's', function () {
                        it('should confirm', options.whenValid);
                    });
                    describe('when subject has other items', function () {
                        it('should deny', options.whenInvalid);
                    });
                });
            });
            describeWhenNotArray(options.name);
        });
    });
}

function describeToHaveX(options) {
    describe(options.name, function () {
        describe('when invoked', function () {
            describe('when subject is not an object', function () {
                it('should deny', function () {
                    expect(0).not[options.name]('memberName');
                    expect(null).not[options.name]('memberName');
                    expect(true).not[options.name]('memberName');
                    expect(false).not[options.name]('memberName');
                    expect('').not[options.name]('memberName');
                });
            });
            describe('when subject is an object', function () {
                describe('when member is not present', function () {
                    it('should deny', function () {
                        expect({}).not[options.name]('memberName');
                    });
                });
                describe('when member is present', function () {
                    options.whenPresent();
                });
            });
        });
    });
}

function describeToHaveArrayX(options) {
    describeToHaveX({
        name: options.name,
        whenPresent: function () {
            describe('when member is an array', options.whenArray);
        }
    });
}

function describeToHaveBooleanX(options) {
    describeToHaveX({
        name: options.name,
        whenPresent: function () {
            describe('when member is truthy', function () {
                it('should deny', function () {
                    expect({
                        memberName: 1
                    }).not[options.name]('memberName');
                    expect({
                        memberName: 'true'
                    }).not[options.name]('memberName');
                });
            });
            describe('when member is falsy', function () {
                it('should deny', function () {
                    expect({
                        memberName: 0
                    }).not[options.name]('memberName');
                    expect({
                        memberName: ''
                    }).not[options.name]('memberName');
                });
            });
            describe('when member is boolean', options.whenBoolean);
        }
    });
}


describe('Arrays', function () {

    describe('toBeArray', function () {
        describe('when invoked', function () {
            describe('when subject is a true Array', function () {
                it('should confirm', function () {
                    expect([]).toBeArray();
                    expect(new Array()).toBeArray();
                });
            });
            describeWhenNotArray('toBeArray');
        });
    });

    describe('toBeArrayOfSize', function () {
        describe('when invoked', function () {
            describe('when subject is a true Array', function () {
                describe('when subject has the expected number of members', function () {
                    it('should confirm', function () {
                        expect([]).toBeArrayOfSize(0);
                        expect([null]).toBeArrayOfSize(1);
                        expect([false, false]).toBeArrayOfSize(2);
                        expect([void (0), void (0)]).toBeArrayOfSize(2);
                    });
                });
                describe('when subject has an unexpected number of members', function () {
                    it('should deny', function () {
                        expect([]).not.toBeArrayOfSize(1);
                        expect([null]).not.toBeArrayOfSize(0);
                        expect([true, true]).not.toBeArrayOfSize(1);
                    });
                });
            });
            describeWhenNotArray('toBeArrayOfSize');
        });
    });

    describe('toBeEmptyArray', function () {
        describe('when invoked', function () {
            describe('when subject is a true Array', function () {
                describe('when subject has members', function () {
                    it('should confirm', function () {
                        expect([]).toBeEmptyArray();
                    });
                });
                describe('when subject has no members', function () {
                    it('should deny', function () {
                        expect([null]).not.toBeEmptyArray();
                        expect(['']).not.toBeEmptyArray();
                        expect([1]).not.toBeEmptyArray();
                        expect([true]).not.toBeEmptyArray();
                        expect([false]).not.toBeEmptyArray();
                    });
                });
            });
            describeWhenNotArray('toBeEmptyArray');
        });
    });

    describe('toBeNonEmptyArray', function () {
        describe('when invoked', function () {
            describe('when subject is a true Array', function () {
                describe('when subject has members', function () {
                    it('should confirm', function () {
                        expect([null]).toBeNonEmptyArray();
                        expect([void (0)]).toBeNonEmptyArray();
                        expect(['']).toBeNonEmptyArray();
                    });
                });
                describe('when subject has no members', function () {
                    it('should deny', function () {
                        expect([]).not.toBeNonEmptyArray();
                    });
                });
            });
            describeWhenNotArray('toBeNonEmptyArray');
        });
    });

    describeToBeArrayOfX({
        name: 'toBeArrayOfObjects',
        type: 'Object',
        whenValid: function () {
            expect([{}, {}]).toBeArrayOfObjects();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfObjects();
            expect(['Object']).not.toBeArrayOfObjects();
            expect(['[object Object]']).not.toBeArrayOfObjects();
        },
        whenMixed: function () {
            expect([null, {}]).not.toBeArrayOfObjects();
        }
    });

    describeToBeArrayOfX({
        name: 'toBeArrayOfStrings',
        type: 'String',
        whenValid: function () {
            expect(['truthy']).toBeArrayOfStrings();
            expect([new String('truthy')]).toBeArrayOfStrings();
            expect([new String('')]).toBeArrayOfStrings();
            expect(['', 'truthy']).toBeArrayOfStrings();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfStrings();
        },
        whenMixed: function () {
            expect([null, '']).not.toBeArrayOfStrings();
        }
    });

    describeToBeArrayOfX({
        name: 'toBeArrayOfNumbers',
        type: 'Number',
        whenValid: function () {
            expect([1]).toBeArrayOfNumbers();
            expect([new Number(1)]).toBeArrayOfNumbers();
            expect([new Number(0)]).toBeArrayOfNumbers();
            expect([0, 1]).toBeArrayOfNumbers();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfNumbers();
        },
        whenMixed: function () {
            expect([null, 0]).not.toBeArrayOfNumbers();
        }
    });

    describeToBeArrayOfX({
        name: 'toBeArrayOfBooleans',
        type: 'Boolean',
        whenValid: function () {
            expect([true]).toBeArrayOfBooleans();
            expect([new Boolean(true)]).toBeArrayOfBooleans();
            expect([new Boolean(false)]).toBeArrayOfBooleans();
            expect([false, true]).toBeArrayOfBooleans();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfBooleans();
        },
        whenMixed: function () {
            expect([null, false]).not.toBeArrayOfBooleans();
            expect([null, true]).not.toBeArrayOfBooleans();
        }
    });

});

describe('Booleans', function () {

    describe('toBeTrue', function () {
        describe('when invoked', function () {
            describe('when subject is not only truthy, but a boolean true', function () {
                it('should confirm', function () {
                    expect(true).toBeTrue();
                    expect(new Boolean(true)).toBeTrue();
                });
            });
            describe('when subject is truthy', function () {
                it('should deny', function () {
                    expect(1).not.toBeTrue();
                });
            });
        });
    });

    describe('toBeFalse', function () {
        describe('when invoked', function () {
            describe('when subject is not only falsy, but a boolean false', function () {
                it('should confirm', function () {
                    expect(false).toBeFalse();
                    expect(new Boolean(false)).toBeFalse();
                });
            });
            describe('when subject is falsy', function () {
                it('should deny', function () {
                    expect(1).not.toBeFalse();
                });
            });
        });
    });

    describe('toBeBoolean', function () {
        describe('when invoked', function () {
            describe('when subject not only truthy or falsy, but a boolean', function () {
                it('should confirm', function () {
                    expect(true).toBeBoolean();
                    expect(false).toBeBoolean();
                    expect(new Boolean(true)).toBeBoolean();
                    expect(new Boolean(false)).toBeBoolean();
                });
            });
            describe('when subject is truthy or falsy', function () {
                it('should deny', function () {
                    expect(1).not.toBeBoolean();
                    expect(0).not.toBeBoolean();
                });
            });
        });
    });

});

describe('Dates', function () {

    describe('toBeDate', function () {
        describe('when invoked', function () {
            describe('when value is an instance of Date', function () {
                it('should confirm', function () {
                    expect(new Date()).toBeDate();
                });
            });
            describe('when value is NOT an instance of Date', function () {
                it('should deny', function () {
                    expect(null).not.toBeDate();
                });
            });
        });
    });

    describe('toBeIso8601', function () {
        describe('when invoked', function () {
            describe('when value is a Date String conforming to the ISO 8601 standard', function () {
                describe('when specified date is valid', function () {
                    it('should confirm', function () {
                        expect('2013-07-08T07:29:15.863Z').toBeIso8601();
                        expect('2013-07-08T07:29:15.863').toBeIso8601();
                        expect('2013-07-08T07:29:15').toBeIso8601();
                        expect('2013-07-08T07:29').toBeIso8601();
                        expect('2013-07-08').toBeIso8601();
                    });
                });
                describe('when specified date is NOT valid', function () {
                    it('should deny', function () {
                        expect('2013-99-12T00:00:00.000Z').not.toBeIso8601();
                        expect('2013-12-99T00:00:00.000Z').not.toBeIso8601();
                        expect('2013-01-01T99:00:00.000Z').not.toBeIso8601();
                        expect('2013-01-01T99:99:00.000Z').not.toBeIso8601();
                        expect('2013-01-01T00:00:99.000Z').not.toBeIso8601();
                    });
                });
            });
            describe('when value is a String NOT conforming to the ISO 8601 standard', function () {
                it('should deny', function () {
                    expect('2013-07-08T07:29:15.').not.toBeIso8601();
                    expect('2013-07-08T07:29:').not.toBeIso8601();
                    expect('2013-07-08T07:2').not.toBeIso8601();
                    expect('2013-07-08T07:').not.toBeIso8601();
                    expect('2013-07-08T07').not.toBeIso8601();
                    expect('2013-07-08T').not.toBeIso8601();
                    expect('2013-07-0').not.toBeIso8601();
                    expect('2013-07-').not.toBeIso8601();
                    expect('2013-07').not.toBeIso8601();
                    expect('2013-0').not.toBeIso8601();
                    expect('2013-').not.toBeIso8601();
                    expect('2013').not.toBeIso8601();
                    expect('201').not.toBeIso8601();
                    expect('20').not.toBeIso8601();
                    expect('2').not.toBeIso8601();
                    expect('').not.toBeIso8601();
                });
            });
        });
    });

    describe('toBeBefore', function () {
        describe('when invoked', function () {
            describe('when value is a Date', function () {
                describe('when date occurs before another', function () {
                    it('should confirm', function () {
                        expect(new Date('2013-01-01T00:00:00.000Z')).toBeBefore(new Date('2013-01-01T01:00:00.000Z'));
                    });
                });
                describe('when date does NOT occur before another', function () {
                    it('should deny', function () {
                        expect(new Date('2013-01-01T01:00:00.000Z')).not.toBeBefore(new Date('2013-01-01T00:00:00.000Z'));
                    });
                });
            });
        });
    });

    describe('toBeAfter', function () {
        describe('when invoked', function () {
            describe('when value is a Date', function () {
                describe('when date occurs after another', function () {
                    it('should confirm', function () {
                        expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(new Date('2013-01-01T00:00:00.000Z'));
                    });
                });
                describe('when date does NOT occur after another', function () {
                    it('should deny', function () {
                        expect(new Date('2013-01-01T00:00:00.000Z')).not.toBeAfter(new Date('2013-01-01T01:00:00.000Z'));
                    });
                });
            });
        });
    });

});

describe('Errors', function () {

    describe('toThrowAnyError', function () {
        describe('when supplied a function', function () {
            describe('when function errors when invoked', function () {
                beforeEach(function () {
                    this.throwError = function () {
                        throw new Error('wut?');
                    };
                    this.badReference = function () {
                        return this.badReference.someValue;
                    };
                });
                it('should confirm', function () {
                    expect(this.throwError).toThrowAnyError();
                    expect(this.badReference).toThrowAnyError();
                });
            });
            describe('when function does NOT error when invoked', function () {
                beforeEach(function () {
                    this.noErrors = function () { };
                });
                it('should deny', function () {
                    expect(this.noErrors).not.toThrowAnyError();
                });
            });
        });
    });

    describe('toThrowErrorOfType', function () {
        describe('when supplied a function', function () {
            describe('when function errors when invoked', function () {
                beforeEach(function () {
                    this.throwError = function () {
                        throw new Error('wut?');
                    };
                    this.badReference = function () {
                        return this.badReference.someValue;
                    };
                });
                describe('when the error is of the expected type', function () {
                    it('should confirm', function () {
                        expect(this.throwError).toThrowErrorOfType('Error');
                        expect(this.badReference).toThrowErrorOfType('ReferenceError');
                    });
                });
                describe('when the error is NOT of the expected type', function () {
                    it('should confirm', function () {
                        expect(this.throwError).not.toThrowErrorOfType('ReferenceError');
                        expect(this.badReference).not.toThrowErrorOfType('Error');
                    });
                });
            });
        });
    });

});

describe('Numbers', function () {

    describe('toBeNumber', function () {
        describe('when invoked', function () {
            describe('when subject IS a number', function () {
                it('should confirm', function () {
                    expect(1).toBeNumber();
                    expect(1.11).toBeNumber();
                    expect(1e3).toBeNumber();
                    expect(0.11).toBeNumber();
                    expect(-11).toBeNumber();
                });
            });
            describe('when subject is NOT a number', function () {
                it('should deny', function () {
                    expect('1').not.toBeNumber();
                    expect(NaN).not.toBeNumber();
                });
            });
        });
    });

    describe('toBeCalculable', function () {
        describe('when invoked', function () {
            describe('when subject CAN be coerced to be used in mathematical operations', function () {
                it('should confirm', function () {
                    expect('1').toBeCalculable();
                    expect('').toBeCalculable();
                    expect(null).toBeCalculable();
                });
            });
            describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function () {
                it('should deny', function () {
                    expect({}).not.toBeCalculable();
                    expect(NaN).not.toBeCalculable();
                });
            });
        });
    });

    describe('toBeEvenNumber', function () {
        describe('when invoked', function () {
            describe('when subject IS an even number', function () {
                it('should confirm', function () {
                    expect(2).toBeEvenNumber();
                });
            });
            describe('when subject is NOT an even number', function () {
                it('should deny', function () {
                    expect(1).not.toBeEvenNumber();
                    expect(NaN).not.toBeEvenNumber();
                });
            });
        });
    });

    describe('toBeOddNumber', function () {
        describe('when invoked', function () {
            describe('when subject IS an odd number', function () {
                it('should confirm', function () {
                    expect(1).toBeOddNumber();
                });
            });
            describe('when subject is NOT an odd number', function () {
                it('should deny', function () {
                    expect(2).not.toBeOddNumber();
                    expect(NaN).not.toBeOddNumber();
                });
            });
        });
    });

    describe('toBeWithinRange', function () {
        describe('when invoked', function () {
            describe('when subject IS a number >= floor and <= ceiling', function () {
                it('should confirm', function () {
                    expect(0).toBeWithinRange(0, 2);
                    expect(1).toBeWithinRange(0, 2);
                    expect(2).toBeWithinRange(0, 2);
                });
            });
            describe('when subject is NOT a number >= floor and <= ceiling', function () {
                it('should deny', function () {
                    expect(-3).not.toBeWithinRange(0, 2);
                    expect(-2).not.toBeWithinRange(0, 2);
                    expect(-1).not.toBeWithinRange(0, 2);
                    expect(3).not.toBeWithinRange(0, 2);
                    expect(NaN).not.toBeWithinRange(0, 2);
                });
            });
        });
    });

    describe('toBeWholeNumber', function () {
        describe('when invoked', function () {
            describe('when subject IS a number with no positive decimal places', function () {
                it('should confirm', function () {
                    expect(1).toBeWholeNumber();
                    expect(0).toBeWholeNumber();
                    expect(0.0).toBeWholeNumber();
                });
            });
            describe('when subject is NOT a number with no positive decimal places', function () {
                it('should deny', function () {
                    expect(NaN).not.toBeWholeNumber();
                    expect(1.1).not.toBeWholeNumber();
                    expect(0.1).not.toBeWholeNumber();
                });
            });
        });
    });

});

describe('Objects', function () {

    beforeEach(function () {
        this.Foo = function () { };
    });

    describe('toBeObject', function () {
        describe('when invoked', function () {
            describe('when subject IS an Object', function () {
                it('should confirm', function () {
                    expect(new Object()).toBeObject();
                    expect(new this.Foo()).toBeObject();
                    expect({}).toBeObject();
                });
            });
            describe('when subject is NOT an Object', function () {
                it('should deny', function () {
                    expect(null).not.toBeObject();
                    expect(123).not.toBeObject();
                    expect('[object Object]').not.toBeObject();
                });
            });
        });
    });

    describe('toBeEmptyObject', function () {
        describe('when invoked', function () {
            describe('when subject IS an Object with no instance members', function () {
                beforeEach(function () {
                    this.Foo.prototype = {
                        b: 2
                    };
                });
                it('should confirm', function () {
                    expect(new this.Foo()).toBeEmptyObject();
                    expect({}).toBeEmptyObject();
                });
            });
            describe('when subject is NOT an Object with no instance members', function () {
                it('should deny', function () {
                    expect({
                        a: 1
                    }).not.toBeEmptyObject();
                    expect(null).not.toBeNonEmptyObject();
                });
            });
        });
    });

    describe('toBeNonEmptyObject', function () {
        describe('when invoked', function () {
            describe('when subject IS an Object with at least one instance member', function () {
                it('should confirm', function () {
                    expect({
                        a: 1
                    }).toBeNonEmptyObject();
                });
            });
            describe('when subject is NOT an Object with at least one instance member', function () {
                beforeEach(function () {
                    this.Foo.prototype = {
                        b: 2
                    };
                });
                it('should deny', function () {
                    expect(new this.Foo()).not.toBeNonEmptyObject();
                    expect({}).not.toBeNonEmptyObject();
                    expect(null).not.toBeNonEmptyObject();
                });
            });
        });
    });

    describe('toImplement', function () {
        describe('when invoked', function () {
            describe('when subject IS an Object containing all of the supplied members', function () {
                it('should confirm', function () {
                    expect({
                        a: 1,
                        b: 2
                    }).toImplement({
                        a: 1,
                        b: 2
                    });
                    expect({
                        a: 1,
                        b: 2
                    }).toImplement({
                        a: 1
                    });
                });
            });
            describe('when subject is NOT an Object containing all of the supplied members', function () {
                it('should deny', function () {
                    expect({
                        a: 1
                    }).not.toImplement({
                        c: 3
                    });
                    expect(null).not.toImplement({
                        a: 1
                    });
                });
            });
        });
    });

    describe('toBeFunction', function () {
        describe('when invoked', function () {
            describe('when subject IS a function', function () {
                it('should confirm', function () {
                    expect(function () { }).toBeFunction();
                });
            });
            describe('when subject is NOT a function', function () {
                it('should deny', function () {
                    expect(/regexp/).not.toBeFunction();
                });
            });
        });
    });

});

describe('Strings', function () {

    describe('toBeEmptyString', function () {
        describe('when invoked', function () {
            describe('when subject IS a string with no characters', function () {
                it('should confirm', function () {
                    expect('').toBeEmptyString();
                });
            });
            describe('when subject is NOT a string with no characters', function () {
                it('should deny', function () {
                    expect(' ').not.toBeEmptyString();
                });
            });
        });
    });

    describe('toBeNonEmptyString', function () {
        describe('when invoked', function () {
            describe('when subject IS a string with at least one character', function () {
                it('should confirm', function () {
                    expect(' ').toBeNonEmptyString();
                });
            });
            describe('when subject is NOT a string with at least one character', function () {
                it('should deny', function () {
                    expect('').not.toBeNonEmptyString();
                    expect(null).not.toBeNonEmptyString();
                });
            });
        });
    });

    describe('toBeString', function () {
        describe('when invoked', function () {
            describe('when subject IS a string of any length', function () {
                it('should confirm', function () {
                    expect('').toBeString();
                    expect(' ').toBeString();
                });
            });
            describe('when subject is NOT a string of any length', function () {
                it('should deny', function () {
                    expect(null).not.toBeString();
                });
            });
        });
    });

    describe('toBeHtmlString', function () {
        describe('when invoked', function () {
            describe('when subject IS a string of HTML markup', function () {
                beforeEach(function () {
                    this.ngMultiLine = '';
                    this.ngMultiLine += '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
                    this.ngMultiLine += '\n';
                    this.ngMultiLine += '  Watch with Google TV';
                    this.ngMultiLine += '\n';
                    this.ngMultiLine += '</a>';
                    this.ngMultiLine += '\n';
                });
                it('should confirm', function () {
                    expect('<element>text</element>').toBeHtmlString();
                    expect('<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>').toBeHtmlString();
                    expect('<div ng-if="foo > bar || bar < foo && baz == bar"></div>').toBeHtmlString();
                    expect('<li ng-if="foo > bar || bar < foo && baz == bar">').toBeHtmlString();
                    expect(this.ngMultiLine).toBeHtmlString();
                });
            });
            describe('when subject is NOT a string of HTML markup', function () {
                it('should deny', function () {
                    expect('div').not.toBeHtmlString();
                    expect(null).not.toBeHtmlString();
                });
            });
        });
    });

    describe('toBeJsonString', function () {
        describe('when invoked', function () {
            describe('when subject IS a string of parseable JSON', function () {
                it('should confirm', function () {
                    expect('{}').toBeJsonString();
                    expect('[]').toBeJsonString();
                    expect('[1]').toBeJsonString();
                });
            });
            describe('when subject is NOT a string of parseable JSON', function () {
                it('should deny', function () {
                    expect('[1,]').not.toBeJsonString();
                    expect('<>').not.toBeJsonString();
                    expect(null).not.toBeJsonString();
                    expect('').not.toBeJsonString();
                    expect(void (0)).not.toBeJsonString();
                });
            });
        });
    });

    describe('toBeWhitespace', function () {
        describe('when invoked', function () {
            describe('when subject IS a string containing only tabs, spaces, returns etc', function () {
                it('should confirm', function () {
                    expect(' ').toBeWhitespace();
                    expect('').toBeWhitespace();
                });
            });
            describe('when subject is NOT a string containing only tabs, spaces, returns etc', function () {
                it('should deny', function () {
                    expect('has-no-whitespace').not.toBeWhitespace();
                    expect('has whitespace').not.toBeWhitespace();
                    expect(null).not.toBeWhitespace();
                });
            });
        });
    });

    describe('toStartWith', function () {
        describe('when invoked', function () {
            describe('when subject is NOT an undefined or empty string', function () {
                describe('when subject is a string whose leading characters match the expected string', function () {
                    it('should confirm', function () {
                        expect('jamie').toStartWith('jam');
                    });
                });
                describe('when subject is a string whose leading characters DO NOT match the expected string', function () {
                    it('should deny', function () {
                        expect(' jamie').not.toStartWith('jam');
                        expect('Jamie').not.toStartWith('jam');
                    });
                });
            });
            describe('when subject IS an undefined or empty string', function () {
                it('should deny', function () {
                    expect('').not.toStartWith('');
                    expect(void (0)).not.toStartWith('');
                    expect(void (0)).not.toStartWith('undefined');
                    expect('undefined').not.toStartWith(void (0));
                });
            });
        });
    });

    describe('toEndWith', function () {
        describe('when invoked', function () {
            describe('when subject is NOT an undefined or empty string', function () {
                describe('when subject is a string whose trailing characters match the expected string', function () {
                    it('should confirm', function () {
                        expect('jamie').toEndWith('mie');
                    });
                });
                describe('when subject is a string whose trailing characters DO NOT match the expected string', function () {
                    it('should deny', function () {
                        expect('jamie ').not.toEndWith('mie');
                        expect('jamiE').not.toEndWith('mie');
                    });
                });
            });
            describe('when subject IS an undefined or empty string', function () {
                it('should deny', function () {
                    expect('').not.toEndWith('');
                    expect(void (0)).not.toEndWith('');
                    expect(void (0)).not.toEndWith('undefined');
                    expect('undefined').not.toEndWith(void (0));
                });
            });
        });
    });

    describe('toBeLongerThan', function () {
        describe('when invoked', function () {
            describe('when the subject and comparison ARE both strings', function () {
                describe('when the subject IS longer than the comparision string', function () {
                    it('should confirm', function () {
                        expect('abc').toBeLongerThan('ab');
                        expect('a').toBeLongerThan('');
                    });
                });
                describe('when the subject is NOT longer than the comparision string', function () {
                    it('should deny', function () {
                        expect('ab').not.toBeLongerThan('abc');
                        expect('').not.toBeLongerThan('a');
                    });
                });
            });
            describe('when the subject and comparison are NOT both strings', function () {
                it('should deny (we are asserting the relative lengths of two strings)', function () {
                    expect('truthy').not.toBeLongerThan(void (0));
                    expect(void (0)).not.toBeLongerThan('truthy');
                    expect('').not.toBeLongerThan(void (0));
                    expect(void (0)).not.toBeLongerThan('');
                });
            });
        });
    });

    describe('toBeShorterThan', function () {
        describe('when invoked', function () {
            describe('when the subject and comparison ARE both strings', function () {
                describe('when the subject IS shorter than the comparision string', function () {
                    it('should confirm', function () {
                        expect('ab').toBeShorterThan('abc');
                        expect('').toBeShorterThan('a');
                    });
                });
                describe('when the subject is NOT shorter than the comparision string', function () {
                    it('should deny', function () {
                        expect('abc').not.toBeShorterThan('ab');
                        expect('a').not.toBeShorterThan('');
                    });
                });
            });
            describe('when the subject and comparison are NOT both strings', function () {
                it('should deny (we are asserting the relative lengths of two strings)', function () {
                    expect('truthy').not.toBeShorterThan(void (0));
                    expect(void (0)).not.toBeShorterThan('truthy');
                    expect('').not.toBeShorterThan(void (0));
                    expect(void (0)).not.toBeShorterThan('');
                });
            });
        });
    });

    describe('toBeSameLengthAs', function () {
        describe('when invoked', function () {
            describe('when the subject and comparison ARE both strings', function () {
                describe('when the subject IS the same length as the comparision string', function () {
                    it('should confirm', function () {
                        expect('ab').toBeSameLengthAs('ab');
                    });
                });
                describe('when the subject is NOT the same length as the comparision string', function () {
                    it('should deny', function () {
                        expect('abc').not.toBeSameLengthAs('ab');
                        expect('a').not.toBeSameLengthAs('');
                        expect('').not.toBeSameLengthAs('a');
                    });
                });
            });
            describe('when the subject and comparison are NOT both strings', function () {
                it('should deny (we are asserting the relative lengths of two strings)', function () {
                    expect('truthy').not.toBeSameLengthAs(void (0));
                    expect(void (0)).not.toBeSameLengthAs('truthy');
                    expect('').not.toBeSameLengthAs(void (0));
                    expect(void (0)).not.toBeSameLengthAs('');
                });
            });
        });
    });

});
