// Taken directly from the test directory of the original repo

declare var describeWhenNotArray: (arr: string) => void;
declare var describeToBeArrayOfX: (arr: string, descriptor: {}) => void;
declare var describeToHaveArrayX: (arr: string, descriptor: () => void) => void;
declare var describeToHaveX: (arr: string, descriptor: () => void) => void;
declare var describeToHaveBooleanX: (arr: string, descriptor: () => void) => void;
declare var badReference: { someValue: any };
var _undefined: any = undefined;

describe('toBeAfter', function() {
  describe('when invoked', function() {
    describe('when value is a Date', function() {
      describe('when date occurs after another', function() {
        it('should confirm', function() {
          expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(new Date('2013-01-01T00:00:00.000Z'));
        });
      });
      describe('when date does NOT occur after another', function() {
        it('should deny', function() {
          expect(new Date('2013-01-01T00:00:00.000Z')).not.toBeAfter(new Date('2013-01-01T01:00:00.000Z'));
        });
      });
    });
  });
});


describe('toBeArray', function() {
  describe('when invoked', function() {
    describe('when subject is a true Array', function() {
      it('should confirm', function() {
        expect([]).toBeArray();
        expect(new Array()).toBeArray();
      });
    });
    describeWhenNotArray('toBeArray');
  });
});


describe('toBeArrayOfBooleans', function() {
  describeToBeArrayOfX('toBeArrayOfBooleans', {
    type: 'Boolean',
    whenValid: function() {
      expect([true]).toBeArrayOfBooleans();
      expect([new Boolean(true)]).toBeArrayOfBooleans();
      expect([new Boolean(false)]).toBeArrayOfBooleans();
      expect([false, true]).toBeArrayOfBooleans();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfBooleans();
    },
    whenMixed: function() {
      expect([null, false]).not.toBeArrayOfBooleans();
      expect([null, true]).not.toBeArrayOfBooleans();
    }
  });
});


describe('toBeArrayOfNumbers', function() {
  describeToBeArrayOfX('toBeArrayOfNumbers', {
    type: 'Number',
    whenValid: function() {
      expect([1]).toBeArrayOfNumbers();
      expect([new Number(1)]).toBeArrayOfNumbers();
      expect([new Number(0)]).toBeArrayOfNumbers();
      expect([0, 1]).toBeArrayOfNumbers();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfNumbers();
    },
    whenMixed: function() {
      expect([null, 0]).not.toBeArrayOfNumbers();
    }
  });
});

describe('toBeArrayOfObjects', function() {
  describeToBeArrayOfX('toBeArrayOfObjects', {
    type: 'Object',
    whenValid: function() {
      expect([{}, {}]).toBeArrayOfObjects();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfObjects();
      expect(['Object']).not.toBeArrayOfObjects();
      expect(['[object Object]']).not.toBeArrayOfObjects();
    },
    whenMixed: function() {
      expect([null, {}]).not.toBeArrayOfObjects();
    }
  });
});

describe('toBeArrayOfSize', function() {
  describe('when invoked', function() {
    describe('when subject is a true Array', function() {
      describe('when subject has the expected number of members', function() {
        it('should confirm', function() {
          expect([]).toBeArrayOfSize(0);
          expect([null]).toBeArrayOfSize(1);
          expect([false, false]).toBeArrayOfSize(2);
          expect([_undefined, _undefined]).toBeArrayOfSize(2);
        });
      });
      describe('when subject has an unexpected number of members', function() {
        it('should deny', function() {
          expect([]).not.toBeArrayOfSize(1);
          expect([null]).not.toBeArrayOfSize(0);
          expect([true, true]).not.toBeArrayOfSize(1);
        });
      });
    });
    describeWhenNotArray('toBeArrayOfSize');
  });
});


describe('toBeArrayOfStrings', function() {
  describeToBeArrayOfX('toBeArrayOfStrings', {
    type: 'String',
    whenValid: function() {
      expect(['truthy']).toBeArrayOfStrings();
      expect([new String('truthy')]).toBeArrayOfStrings();
      expect([new String('')]).toBeArrayOfStrings();
      expect(['', 'truthy']).toBeArrayOfStrings();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfStrings();
    },
    whenMixed: function() {
      expect([null, '']).not.toBeArrayOfStrings();
    }
  });
});

describe('toBeBefore', function() {
  describe('when invoked', function() {
    describe('when value is a Date', function() {
      describe('when date occurs before another', function() {
        it('should confirm', function() {
          expect(new Date('2013-01-01T00:00:00.000Z')).toBeBefore(new Date('2013-01-01T01:00:00.000Z'));
        });
      });
      describe('when date does NOT occur before another', function() {
        it('should deny', function() {
          expect(new Date('2013-01-01T01:00:00.000Z')).not.toBeBefore(new Date('2013-01-01T00:00:00.000Z'));
        });
      });
    });
  });
});


describe('toBeBoolean', function() {
  describe('when invoked', function() {
    describe('when subject not only truthy or falsy, but a boolean', function() {
      it('should confirm', function() {
        expect(true).toBeBoolean();
        expect(false).toBeBoolean();
        expect(new Boolean(true)).toBeBoolean();
        expect(new Boolean(false)).toBeBoolean();
      });
    });
    describe('when subject is truthy or falsy', function() {
      it('should deny', function() {
        expect(1).not.toBeBoolean();
        expect(0).not.toBeBoolean();
      });
    });
  });
});

describe('toBeCalculable', function() {
  describe('when invoked', function() {
    describe('when subject CAN be coerced to be used in mathematical operations', function() {
      it('should confirm', function() {
        expect('1').toBeCalculable();
        expect('').toBeCalculable();
        expect(null).toBeCalculable();
      });
    });
    describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function() {
      it('should deny', function() {
        expect({}).not.toBeCalculable();
        expect(NaN).not.toBeCalculable();
      });
    });
  });
});

describe('toBeDate', function() {
  describe('when invoked', function() {
    describe('when value is an instance of Date', function() {
      it('should confirm', function() {
        expect(new Date()).toBeDate();
      });
    });
    describe('when value is NOT an instance of Date', function() {
      it('should deny', function() {
        expect(null).not.toBeDate();
      });
    });
  });
});

describe('toBeEmptyArray', function() {
  describe('when invoked', function() {
    describe('when subject is a true Array', function() {
      describe('when subject has members', function() {
        it('should confirm', function() {
          expect([]).toBeEmptyArray();
        });
      });
      describe('when subject has no members', function() {
        it('should deny', function() {
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

describe('toBeEmptyObject', function() {
  beforeEach(function() {
    this.Foo = function() { };
  });
  describe('when invoked', function() {
    describe('when subject IS an Object with no instance members', function() {
      beforeEach(function() {
        this.Foo.prototype = {
          b: 2
        };
      });
      it('should confirm', function() {
        expect(new this.Foo()).toBeEmptyObject();
        expect({}).toBeEmptyObject();
      });
    });
    describe('when subject is NOT an Object with no instance members', function() {
      it('should deny', function() {
        expect({
          a: 1
        }).not.toBeEmptyObject();
        expect(null).not.toBeNonEmptyObject();
      });
    });
  });
});

describe('toBeEmptyString', function() {
  describe('when invoked', function() {
    describe('when subject IS a string with no characters', function() {
      it('should confirm', function() {
        expect('').toBeEmptyString();
      });
    });
    describe('when subject is NOT a string with no characters', function() {
      it('should deny', function() {
        expect(' ').not.toBeEmptyString();
      });
    });
  });
});

describe('toBeEvenNumber', function() {
  describe('when invoked', function() {
    describe('when subject IS an even number', function() {
      it('should confirm', function() {
        expect(2).toBeEvenNumber();
      });
    });
    describe('when subject is NOT an even number', function() {
      it('should deny', function() {
        expect(1).not.toBeEvenNumber();
        expect(NaN).not.toBeEvenNumber();
      });
    });
  });
});


describe('toBeFalse', function() {
  describe('when invoked', function() {
    describe('when subject is not only falsy, but a boolean false', function() {
      it('should confirm', function() {
        expect(false).toBeFalse();
        expect(new Boolean(false)).toBeFalse();
      });
    });
    describe('when subject is falsy', function() {
      it('should deny', function() {
        expect(1).not.toBeFalse();
      });
    });
  });
});

describe('toBeFunction', function() {
  describe('when invoked', function() {
    describe('when subject IS a function', function() {
      it('should confirm', function() {
        expect(function() { }).toBeFunction();
      });
    });
    describe('when subject is NOT a function', function() {
      it('should deny', function() {
        expect(/regexp/).not.toBeFunction();
      });
    });
  });
});

describe('toBeHtmlString', function() {
  describe('when invoked', function() {
    describe('when subject IS a string of HTML markup', function() {
      beforeEach(function() {
        this.ngMultiLine = '';
        this.ngMultiLine += '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
        this.ngMultiLine += '\n';
        this.ngMultiLine += '  Watch with Google TV';
        this.ngMultiLine += '\n';
        this.ngMultiLine += '</a>';
        this.ngMultiLine += '\n';
      });
      it('should confirm', function() {
        expect('<element>text</element>').toBeHtmlString();
        expect('<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>').toBeHtmlString();
        expect('<div ng-if="foo > bar || bar < foo && baz == bar"></div>').toBeHtmlString();
        expect('<li ng-if="foo > bar || bar < foo && baz == bar">').toBeHtmlString();
        expect(this.ngMultiLine).toBeHtmlString();
      });
    });
    describe('when subject is NOT a string of HTML markup', function() {
      it('should deny', function() {
        expect('div').not.toBeHtmlString();
        expect(null).not.toBeHtmlString();
      });
    });
  });
});

describe('toBeIso8601', function() {
  describe('when invoked', function() {
    describe('when value is a Date String conforming to the ISO 8601 standard', function() {
      describe('when specified date is valid', function() {
        it('should confirm', function() {
          expect('2013-07-08T07:29:15.863Z').toBeIso8601();
          expect('2013-07-08T07:29:15.863').toBeIso8601();
          expect('2013-07-08T07:29:15').toBeIso8601();
          expect('2013-07-08T07:29').toBeIso8601();
          expect('2013-07-08').toBeIso8601();
        });
      });
      describe('when specified date is NOT valid', function() {
        it('should deny', function() {
          expect('2013-99-12T00:00:00.000Z').not.toBeIso8601();
          expect('2013-12-99T00:00:00.000Z').not.toBeIso8601();
          expect('2013-01-01T99:00:00.000Z').not.toBeIso8601();
          expect('2013-01-01T99:99:00.000Z').not.toBeIso8601();
          expect('2013-01-01T00:00:99.000Z').not.toBeIso8601();
        });
      });
    });
    describe('when value is a String NOT conforming to the ISO 8601 standard', function() {
      it('should deny', function() {
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
var _undefined;

describe('toBeJsonString', function() {
  describe('when invoked', function() {
    describe('when subject IS a string of parseable JSON', function() {
      it('should confirm', function() {
        expect('{}').toBeJsonString();
        expect('[]').toBeJsonString();
        expect('[1]').toBeJsonString();
      });
    });
    describe('when subject is NOT a string of parseable JSON', function() {
      it('should deny', function() {
        expect('[1,]').not.toBeJsonString();
        expect('<>').not.toBeJsonString();
        expect(null).not.toBeJsonString();
        expect('').not.toBeJsonString();
        expect(_undefined).not.toBeJsonString();
      });
    });
  });
});

describe('toBeLongerThan', function() {
  describe('when invoked', function() {
    describe('when the subject and comparison ARE both strings', function() {
      describe('when the subject IS longer than the comparision string', function() {
        it('should confirm', function() {
          expect('abc').toBeLongerThan('ab');
          expect('a').toBeLongerThan('');
        });
      });
      describe('when the subject is NOT longer than the comparision string', function() {
        it('should deny', function() {
          expect('ab').not.toBeLongerThan('abc');
          expect('').not.toBeLongerThan('a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', function() {
      it('should deny (we are asserting the relative lengths of two strings)', function() {
        expect('truthy').not.toBeLongerThan(_undefined);
        expect(_undefined).not.toBeLongerThan('truthy');
        expect('').not.toBeLongerThan(_undefined);
        expect(_undefined).not.toBeLongerThan('');
      });
    });
  });
});

describe('toBeNonEmptyArray', function() {
  describe('when invoked', function() {
    describe('when subject is a true Array', function() {
      describe('when subject has members', function() {
        it('should confirm', function() {
          expect([null]).toBeNonEmptyArray();
          expect([_undefined]).toBeNonEmptyArray();
          expect(['']).toBeNonEmptyArray();
        });
      });
      describe('when subject has no members', function() {
        it('should deny', function() {
          expect([]).not.toBeNonEmptyArray();
        });
      });
    });
    describeWhenNotArray('toBeNonEmptyArray');
  });
});

describe('toBeNonEmptyObject', function() {
  beforeEach(function() {
    this.Foo = function() { };
  });
  describe('when invoked', function() {
    describe('when subject IS an Object with at least one instance member', function() {
      it('should confirm', function() {
        expect({
          a: 1
        }).toBeNonEmptyObject();
      });
    });
    describe('when subject is NOT an Object with at least one instance member', function() {
      beforeEach(function() {
        this.Foo.prototype = {
          b: 2
        };
      });
      it('should deny', function() {
        expect(new this.Foo()).not.toBeNonEmptyObject();
        expect({}).not.toBeNonEmptyObject();
        expect(null).not.toBeNonEmptyObject();
      });
    });
  });
});

describe('toBeNonEmptyString', function() {
  describe('when invoked', function() {
    describe('when subject IS a string with at least one character', function() {
      it('should confirm', function() {
        expect(' ').toBeNonEmptyString();
      });
    });
    describe('when subject is NOT a string with at least one character', function() {
      it('should deny', function() {
        expect('').not.toBeNonEmptyString();
        expect(null).not.toBeNonEmptyString();
      });
    });
  });
});

describe('toBeNumber', function() {
  describe('when invoked', function() {
    describe('when subject IS a number', function() {
      it('should confirm', function() {
        expect(1).toBeNumber();
        expect(1.11).toBeNumber();
        expect(1e3).toBeNumber();
        expect(0.11).toBeNumber();
        expect(-11).toBeNumber();
      });
    });
    describe('when subject is NOT a number', function() {
      it('should deny', function() {
        expect('1').not.toBeNumber();
        expect(NaN).not.toBeNumber();
      });
    });
  });
});


describe('toBeObject', function() {
  beforeEach(function() {
    this.Foo = function() { };
  });
  describe('when invoked', function() {
    describe('when subject IS an Object', function() {
      it('should confirm', function() {
        expect(new Object()).toBeObject();
        expect(new this.Foo()).toBeObject();
        expect({}).toBeObject();
      });
    });
    describe('when subject is NOT an Object', function() {
      it('should deny', function() {
        expect(null).not.toBeObject();
        expect(123).not.toBeObject();
        expect('[object Object]').not.toBeObject();
      });
    });
  });
});

describe('toBeOddNumber', function() {
  describe('when invoked', function() {
    describe('when subject IS an odd number', function() {
      it('should confirm', function() {
        expect(1).toBeOddNumber();
      });
    });
    describe('when subject is NOT an odd number', function() {
      it('should deny', function() {
        expect(2).not.toBeOddNumber();
        expect(NaN).not.toBeOddNumber();
      });
    });
  });
});
var _undefined;

describe('toBeSameLengthAs', function() {
  describe('when invoked', function() {
    describe('when the subject and comparison ARE both strings', function() {
      describe('when the subject IS the same length as the comparision string', function() {
        it('should confirm', function() {
          expect('ab').toBeSameLengthAs('ab');
        });
      });
      describe('when the subject is NOT the same length as the comparision string', function() {
        it('should deny', function() {
          expect('abc').not.toBeSameLengthAs('ab');
          expect('a').not.toBeSameLengthAs('');
          expect('').not.toBeSameLengthAs('a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', function() {
      it('should deny (we are asserting the relative lengths of two strings)', function() {
        expect('truthy').not.toBeSameLengthAs(_undefined);
        expect(_undefined).not.toBeSameLengthAs('truthy');
        expect('').not.toBeSameLengthAs(_undefined);
        expect(_undefined).not.toBeSameLengthAs('');
      });
    });
  });
});
var _undefined;

describe('toBeShorterThan', function() {
  describe('when invoked', function() {
    describe('when the subject and comparison ARE both strings', function() {
      describe('when the subject IS shorter than the comparision string', function() {
        it('should confirm', function() {
          expect('ab').toBeShorterThan('abc');
          expect('').toBeShorterThan('a');
        });
      });
      describe('when the subject is NOT shorter than the comparision string', function() {
        it('should deny', function() {
          expect('abc').not.toBeShorterThan('ab');
          expect('a').not.toBeShorterThan('');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', function() {
      it('should deny (we are asserting the relative lengths of two strings)', function() {
        expect('truthy').not.toBeShorterThan(_undefined);
        expect(_undefined).not.toBeShorterThan('truthy');
        expect('').not.toBeShorterThan(_undefined);
        expect(_undefined).not.toBeShorterThan('');
      });
    });
  });
});

describe('toBeString', function() {
  describe('when invoked', function() {
    describe('when subject IS a string of any length', function() {
      it('should confirm', function() {
        expect('').toBeString();
        expect(' ').toBeString();
      });
    });
    describe('when subject is NOT a string of any length', function() {
      it('should deny', function() {
        expect(null).not.toBeString();
      });
    });
  });
});


describe('toBeTrue', function() {
  describe('when invoked', function() {
    describe('when subject is not only truthy, but a boolean true', function() {
      it('should confirm', function() {
        expect(true).toBeTrue();
        expect(new Boolean(true)).toBeTrue();
      });
    });
    describe('when subject is truthy', function() {
      it('should deny', function() {
        expect(1).not.toBeTrue();
      });
    });
  });
});

describe('toBeWhitespace', function() {
  describe('when invoked', function() {
    describe('when subject IS a string containing only tabs, spaces, returns etc', function() {
      it('should confirm', function() {
        expect(' ').toBeWhitespace();
        expect('').toBeWhitespace();
      });
    });
    describe('when subject is NOT a string containing only tabs, spaces, returns etc', function() {
      it('should deny', function() {
        expect('has-no-whitespace').not.toBeWhitespace();
        expect('has whitespace').not.toBeWhitespace();
        expect(null).not.toBeWhitespace();
      });
    });
  });
});

describe('toBeWholeNumber', function() {
  describe('when invoked', function() {
    describe('when subject IS a number with no positive decimal places', function() {
      it('should confirm', function() {
        expect(1).toBeWholeNumber();
        expect(0).toBeWholeNumber();
        expect(0.0).toBeWholeNumber();
      });
    });
    describe('when subject is NOT a number with no positive decimal places', function() {
      it('should deny', function() {
        expect(NaN).not.toBeWholeNumber();
        expect(1.1).not.toBeWholeNumber();
        expect(0.1).not.toBeWholeNumber();
      });
    });
  });
});

describe('toBeWithinRange', function() {
  describe('when invoked', function() {
    describe('when subject IS a number >= floor and <= ceiling', function() {
      it('should confirm', function() {
        expect(0).toBeWithinRange(0, 2);
        expect(1).toBeWithinRange(0, 2);
        expect(2).toBeWithinRange(0, 2);
      });
    });
    describe('when subject is NOT a number >= floor and <= ceiling', function() {
      it('should deny', function() {
        expect(-3).not.toBeWithinRange(0, 2);
        expect(-2).not.toBeWithinRange(0, 2);
        expect(-1).not.toBeWithinRange(0, 2);
        expect(3).not.toBeWithinRange(0, 2);
        expect(NaN).not.toBeWithinRange(0, 2);
      });
    });
  });
});
var _undefined;

describe('toEndWith', function() {
  describe('when invoked', function() {
    describe('when subject is NOT an undefined or empty string', function() {
      describe('when subject is a string whose trailing characters match the expected string', function() {
        it('should confirm', function() {
          expect('jamie').toEndWith('mie');
        });
      });
      describe('when subject is a string whose trailing characters DO NOT match the expected string', function() {
        it('should deny', function() {
          expect('jamie ').not.toEndWith('mie');
          expect('jamiE').not.toEndWith('mie');
        });
      });
    });
    describe('when subject IS an undefined or empty string', function() {
      it('should deny', function() {
        expect('').not.toEndWith('');
        expect(_undefined).not.toEndWith('');
        expect(_undefined).not.toEndWith('undefined');
        expect('undefined').not.toEndWith(_undefined);
      });
    });
  });
});

describe('toHaveArray', function() {
  describeToHaveArrayX('toHaveArray', function() {
    it('should confirm', function() {
      expect({
        memberName: []
      }).toHaveArray('memberName');
      expect({
        memberName: [1, 2, 3]
      }).toHaveArray('memberName');
    });
  });
});


describe('toHaveArrayOfBooleans', function() {
  describeToHaveArrayX('toHaveArrayOfBooleans', function() {
    describe('when named Array is empty', function() {
      it('should confirm', function() {
        expect({
          memberName: []
        }).toHaveArrayOfBooleans('memberName');
      });
    });
    describe('when named Array has items', function() {
      describe('when all items are booleans', function() {
        it('should confirm', function() {
          expect({
            memberName: [true]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [new Boolean(true)]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [new Boolean(false)]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [false, true]
          }).toHaveArrayOfBooleans('memberName');
        });
      });
      describe('when any item is not a boolean', function() {
        it('should deny', function() {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [null, false]
          }).not.toHaveArrayOfBooleans('memberName');
        });
      });
    });
  });
});


describe('toHaveArrayOfNumbers', function() {
  describeToHaveArrayX('toHaveArrayOfNumbers', function() {
    describe('when named Array is empty', function() {
      it('should confirm', function() {
        expect({
          memberName: []
        }).toHaveArrayOfNumbers('memberName');
      });
    });
    describe('when named Array has items', function() {
      describe('when all items are numbers', function() {
        it('should confirm', function() {
          expect({
            memberName: [1]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [new Number(1)]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [new Number(0)]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [0, 1]
          }).toHaveArrayOfNumbers('memberName');
        });
      });
      describe('when any item is not a number', function() {
        it('should deny', function() {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [null, 0]
          }).not.toHaveArrayOfNumbers('memberName');
        });
      });
    });
  });
});

describe('toHaveArrayOfObjects', function() {
  describeToHaveArrayX('toHaveArrayOfObjects', function() {
    describe('when named Array is empty', function() {
      it('should confirm', function() {
        expect({
          memberName: []
        }).toHaveArrayOfObjects('memberName');
      });
    });
    describe('when named Array has items', function() {
      describe('when all items are objects', function() {
        it('should confirm', function() {
          expect({
            memberName: [{}]
          }).toHaveArrayOfObjects('memberName');
          expect({
            memberName: [{}, {}]
          }).toHaveArrayOfObjects('memberName');
        });
      });
      describe('when any item is not an object', function() {
        it('should deny', function() {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfObjects('memberName');
          expect({
            memberName: [null, {}]
          }).not.toHaveArrayOfObjects('memberName');
        });
      });
    });
  });
});

describe('toHaveArrayOfSize', function() {
  describeToHaveArrayX('toHaveArrayOfSize', function() {
    describe('when number of expected items does not match', function() {
      it('should deny', function() {
        var xpToFail = <any>expect;
        xpToFail({
          memberName: ''
        }).not.toHaveArrayOfSize('memberName');

        expect({
          memberName: ['bar']
        }).not.toHaveArrayOfSize('memberName', 0);
      });
    });
    describe('when number of expected items does match', function() {
      it('should confirm', function() {
        expect({
          memberName: []
        }).toHaveArrayOfSize('memberName', 0);
        expect({
          memberName: ['bar']
        }).toHaveArrayOfSize('memberName', 1);
        expect({
          memberName: ['bar', 'baz']
        }).toHaveArrayOfSize('memberName', 2);
      });
    });
  });
});


describe('toHaveArrayOfStrings', function() {
  describeToHaveArrayX('toHaveArrayOfStrings', function() {
    describe('when named Array is empty', function() {
      it('should confirm', function() {
        expect({
          memberName: []
        }).toHaveArrayOfStrings('memberName');
      });
    });
    describe('when named Array has items', function() {
      describe('when all items are strings', function() {
        it('should confirm', function() {
          expect({
            memberName: ['truthy']
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: [new String('truthy')]
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: [new String('')]
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: ['', 'truthy']
          }).toHaveArrayOfStrings('memberName');
        });
      });
      describe('when any item is not a string', function() {
        it('should deny', function() {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfStrings('memberName');
          expect({
            memberName: [null, '']
          }).not.toHaveArrayOfStrings('memberName');
        });
      });
    });
  });
});


describe('toHaveBoolean', function() {
  describeToHaveBooleanX('toHaveBoolean', function() {
    describe('when primitive', function() {
      it('should confirm', function() {
        expect({
          memberName: true
        }).toHaveBoolean('memberName');
        expect({
          memberName: false
        }).toHaveBoolean('memberName');
      });
    });
    describe('when Boolean object', function() {
      it('should confirm', function() {
        expect({
          memberName: new Boolean(true)
        }).toHaveBoolean('memberName');
        expect({
          memberName: new Boolean(false)
        }).toHaveBoolean('memberName');
      });
    });
  });
});

describe('toHaveCalculable', function() {
  describeToHaveX('toHaveCalculable', function() {
    describe('when subject CAN be coerced to be used in mathematical operations', function() {
      it('should confirm', function() {
        expect({
          memberName: '1'
        }).toHaveCalculable('memberName');
        expect({
          memberName: ''
        }).toHaveCalculable('memberName');
        expect({
          memberName: null
        }).toHaveCalculable('memberName');
      });
    });
    describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function() {
      it('should deny', function() {
        expect({
          memberName: {}
        }).not.toHaveCalculable('memberName');
        expect({
          memberName: NaN
        }).not.toHaveCalculable('memberName');
      });
    });
  });
});

describe('toHaveDate', function() {
  var mockDate: any;
  beforeEach(function() {
    mockDate = {
      any: new Date(),
      early: new Date('2013-01-01T00:00:00.000Z'),
      late: new Date('2013-01-01T01:00:00.000Z')
    };
  });
  describeToHaveX('toHaveDate', function() {
    describe('when member is an instance of Date', function() {
      it('should confirm', function() {
        expect({
          memberName: mockDate.any
        }).toHaveDate('memberName');
      });
    });
    describe('when member is NOT an instance of Date', function() {
      it('should deny', function() {
        expect({
          memberName: null
        }).not.toHaveDate('memberName');
      });
    });
  });
});

describe('toHaveDateAfter', function() {
  var mockDate: any;
  beforeEach(function() {
    mockDate = {
      any: new Date(),
      early: new Date('2013-01-01T00:00:00.000Z'),
      late: new Date('2013-01-01T01:00:00.000Z')
    };
  });
  describeToHaveX('toHaveDateAfter', function() {
    describe('when member is an instance of Date', function() {
      describe('when date occurs before another', function() {
        it('should confirm', function() {
          expect({
            memberName: mockDate.late
          }).toHaveDateAfter('memberName', mockDate.early);
        });
      });
      describe('when date does NOT occur before another', function() {
        it('should deny', function() {
          expect({
            memberName: mockDate.early
          }).not.toHaveDateAfter('memberName', mockDate.late);
        });
      });
    });
    describe('when member is NOT an instance of Date', function() {
      it('should deny', function() {
        expect({
          memberName: null
        }).not.toHaveDateAfter('memberName', mockDate.any);
      });
    });
  });
});

describeToHaveX('toHaveDateBefore', function() {
  var mockDate: any;
  beforeEach(function() {
    mockDate = {
      any: new Date(),
      early: new Date('2013-01-01T00:00:00.000Z'),
      late: new Date('2013-01-01T01:00:00.000Z')
    };
  });
  describe('when member is an instance of Date', function() {
    describe('when date occurs before another', function() {
      it('should confirm', function() {
        expect({
          memberName: mockDate.early
        }).toHaveDateBefore('memberName', mockDate.late);
      });
    });
    describe('when date does NOT occur before another', function() {
      it('should deny', function() {
        expect({
          memberName: mockDate.late
        }).not.toHaveDateBefore('memberName', mockDate.early);
      });
    });
  });
  describe('when member is NOT an instance of Date', function() {
    it('should deny', function() {
      expect({
        memberName: null
      }).not.toHaveDateBefore('memberName', mockDate.any);
    });
  });
});

describe('toHaveEmptyArray', function() {
  describeToHaveArrayX('toHaveEmptyArray', function() {
    describe('when named array has members', function() {
      it('should deny', function() {
        expect({
          memberName: [1, 2, 3]
        }).not.toHaveEmptyArray('memberName');
        expect({
          memberName: ''
        }).not.toHaveEmptyArray('memberName');
      });
    });
    describe('when named array has no members', function() {
      it('should confirm', function() {
        expect({
          memberName: []
        }).toHaveEmptyArray('memberName');
      });
    });
  });
});

describe('toHaveEmptyObject', function() {
  beforeEach(function() {
    this.Foo = function() { };
  });
  describeToHaveX('toHaveEmptyObject', function() {
    describe('when subject IS an Object with no instance members', function() {
      beforeEach(function() {
        this.Foo.prototype = {
          b: 2
        };
      });
      it('should confirm', function() {
        expect({
          memberName: new this.Foo()
        }).toHaveEmptyObject('memberName');
        expect({
          memberName: {}
        }).toHaveEmptyObject('memberName');
      });
    });
    describe('when subject is NOT an Object with no instance members', function() {
      it('should deny', function() {
        expect({
          memberName: {
            a: 1
          }
        }).not.toHaveEmptyObject('memberName');
        expect({
          memberName: null
        }).not.toHaveNonEmptyObject('memberName');
      });
    });
  });
});

describe('toHaveEmptyString', function() {
  describeToHaveX('toHaveEmptyString', function() {
    describe('when subject IS a string with no characters', function() {
      it('should confirm', function() {
        expect({
          memberName: ''
        }).toHaveEmptyString('memberName');
      });
    });
    describe('when subject is NOT a string with no characters', function() {
      it('should deny', function() {
        expect({
          memberName: ' '
        }).not.toHaveEmptyString('memberName');
      });
    });
  });
});

describe('toHaveEvenNumber', function() {
  describeToHaveX('toHaveEvenNumber', function() {
    describe('when subject IS an even number', function() {
      it('should confirm', function() {
        expect({
          memberName: 2
        }).toHaveEvenNumber('memberName');
      });
    });
    describe('when subject is NOT an even number', function() {
      it('should deny', function() {
        expect({
          memberName: 1
        }).not.toHaveEvenNumber('memberName');
        expect({
          memberName: NaN
        }).not.toHaveEvenNumber('memberName');
      });
    });
  });
});

describe('toHaveFalse', function() {
  describeToHaveBooleanX('toHaveFalse', function() {
    describe('when primitive', function() {
      describe('when true', function() {
        it('should deny', function() {
          expect({
            memberName: true
          }).not.toHaveFalse('memberName');
        });
      });
      describe('when false', function() {
        it('should confirm', function() {
          expect({
            memberName: false
          }).toHaveFalse('memberName');
        });
      });
    });
    describe('when Boolean object', function() {
      describe('when true', function() {
        it('should deny', function() {
          expect({
            memberName: new Boolean(true)
          }).not.toHaveFalse('memberName');
        });
      });
      describe('when false', function() {
        it('should confirm', function() {
          expect({
            memberName: new Boolean(false)
          }).toHaveFalse('memberName');
        });
      });
    });
  });
});

describe('toHaveHtmlString', function() {
  describeToHaveX('toHaveHtmlString', function() {
    describe('when subject IS a string of HTML markup', function() {
      beforeEach(function() {
        this.ngMultiLine = '';
        this.ngMultiLine += '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
        this.ngMultiLine += '\n';
        this.ngMultiLine += '  Watch with Google TV';
        this.ngMultiLine += '\n';
        this.ngMultiLine += '</a>';
        this.ngMultiLine += '\n';
      });
      it('should confirm', function() {
        expect({
          memberName: '<element>text</element>'
        }).toHaveHtmlString('memberName');
        expect({
          memberName: '<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>'
        }).toHaveHtmlString('memberName');
        expect({
          memberName: '<div ng-if="foo > bar || bar < foo && baz == bar"></div>'
        }).toHaveHtmlString('memberName');
        expect({
          memberName: '<li ng-if="foo > bar || bar < foo && baz == bar">'
        }).toHaveHtmlString('memberName');
        expect({
          memberName: this.ngMultiLine
        }).toHaveHtmlString('memberName');
      });
    });
    describe('when subject is NOT a string of HTML markup', function() {
      it('should deny', function() {
        expect({
          memberName: 'div'
        }).not.toHaveHtmlString('memberName');
        expect({
          memberName: null
        }).not.toHaveHtmlString('memberName');
      });
    });
  });
});

describe('toHaveIso8601', function() {
  describeToHaveX('toHaveIso8601', function() {
    describe('when member is a Date String conforming to the ISO 8601 standard',
      function() {
        describe('when specified date is valid', function() {
          it('should confirm', function() {
            expect({
              memberName: '2013-07-08T07:29:15.863Z'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08T07:29:15.863'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08T07:29:15'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08T07:29'
            }).toHaveIso8601('memberName');
            expect({
              memberName: '2013-07-08'
            }).toHaveIso8601('memberName');
          });
        });
        describe('when specified date is NOT valid', function() {
          it('should deny', function() {
            expect({
              memberName: '2013-99-12T00:00:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-12-99T00:00:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-01-01T99:00:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-01-01T99:99:00.000Z'
            }).not.toHaveIso8601('memberName');
            expect({
              memberName: '2013-01-01T00:00:99.000Z'
            }).not.toHaveIso8601('memberName');
          });
        });
      });
    describe('when member is a String NOT conforming to the ISO 8601 standard',
      function() {
        it('should deny', function() {
          expect({
            memberName: '2013-07-08T07:29:15.'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07:29:'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07:2'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07:'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T07'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-08T'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-0'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07-'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-07'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-0'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013-'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2013'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '201'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '20'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: '2'
          }).not.toHaveIso8601('memberName');
          expect({
            memberName: ''
          }).not.toHaveIso8601('memberName');
        });
      });
  });
});

describe('toHaveJsonString', function() {
  describeToHaveX('toHaveJsonString', function() {
    describe('when subject IS a string of parseable JSON', function() {
      it('should confirm', function() {
        expect({
          memberName: '{}'
        }).toHaveJsonString('memberName');
        expect({
          memberName: '[]'
        }).toHaveJsonString('memberName');
        expect({
          memberName: '[1]'
        }).toHaveJsonString('memberName');
      });
    });
    describe('when subject is NOT a string of parseable JSON', function() {
      it('should deny', function() {
        expect({
          memberName: '[1,]'
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: '<>'
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: null
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: ''
        }).not.toHaveJsonString('memberName');
        expect({
          memberName: _undefined
        }).not.toHaveJsonString('memberName');
      });
    });
  });
});

describe('toHaveMember', function() {
  describeToHaveX('toHaveMember', function() { });
});

describe('toHaveMethod', function() {
  describeToHaveX('toHaveMethod', function() {
    describe('when subject IS a function', function() {
      it('should confirm', function() {
        expect({
          memberName: function() { }
        }).toHaveMethod('memberName');
      });
    });
    describe('when subject is NOT a function', function() {
      it('should deny', function() {
        expect({
          memberName: /regexp/
        }).not.toHaveMethod('memberName');
      });
    });
  });
});

describe('toHaveNonEmptyArray', function() {
  describeToHaveArrayX('toHaveNonEmptyArray', function() {
    describe('when named array has no members', function() {
      it('should deny', function() {
        expect({
          memberName: []
        }).not.toHaveNonEmptyArray('memberName');
      });
    });
    describe('when named array has members', function() {
      it('should confirm', function() {
        expect({
          memberName: [1, 2, 3]
        }).toHaveNonEmptyArray('memberName');
      });
    });
  });
});

describe('toHaveNonEmptyObject', function() {
  describeToHaveX('toHaveNonEmptyObject', function() {
    beforeEach(function() {
      this.Foo = function() { };
    });
    describe('when subject IS an Object with at least one instance member', function() {
      it('should confirm', function() {
        expect({
          memberName: {
            a: 1
          }
        }).toHaveNonEmptyObject('memberName');
      });
    });
    describe('when subject is NOT an Object with at least one instance member', function() {
      beforeEach(function() {
        this.Foo.prototype = {
          b: 2
        };
      });
      it('should deny', function() {
        expect({
          memberName: new this.Foo()
        }).not.toHaveNonEmptyObject('memberName');
        expect({
          memberName: {}
        }).not.toHaveNonEmptyObject('memberName');
        expect({
          memberName: null
        }).not.toHaveNonEmptyObject('memberName');
      });
    });
  });
});

describe('toHaveNonEmptyString', function() {
  describeToHaveX('toHaveNonEmptyString', function() {
    describe('when subject IS a string with at least one character', function() {
      it('should confirm', function() {
        expect({
          memberName: ' '
        }).toHaveNonEmptyString('memberName');
      });
    });
    describe('when subject is NOT a string with at least one character', function() {
      it('should deny', function() {
        expect({
          memberName: ''
        }).not.toHaveNonEmptyString('memberName');
        expect({
          memberName: null
        }).not.toHaveNonEmptyString('memberName');
      });
    });
  });
});

describe('toHaveNumber', function() {
  describeToHaveX('toHaveNumber', function() {
    describe('when subject IS a number', function() {
      it('should confirm', function() {
        expect({
          memberName: 1
        }).toHaveNumber('memberName');
        expect({
          memberName: 1.11
        }).toHaveNumber('memberName');
        expect({
          memberName: 1e3
        }).toHaveNumber('memberName');
        expect({
          memberName: 0.11
        }).toHaveNumber('memberName');
        expect({
          memberName: -11
        }).toHaveNumber('memberName');
      });
    });
    describe('when subject is NOT a number', function() {
      it('should deny', function() {
        expect({
          memberName: '1'
        }).not.toHaveNumber('memberName');
        expect({
          memberName: NaN
        }).not.toHaveNumber('memberName');
      });
    });
  });
});

describe('toHaveNumberWithinRange', function() {
  describeToHaveX('toHaveNumberWithinRange', function() {
    describe('when subject IS a number >= floor and <= ceiling', function() {
      it('should confirm', function() {
        expect({
          memberName: 0
        }).toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: 1
        }).toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: 2
        }).toHaveNumberWithinRange('memberName', 0, 2);
      });
    });
    describe('when subject is NOT a number >= floor and <= ceiling', function() {
      it('should deny', function() {
        expect({
          memberName: -3
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: -2
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: -1
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: 3
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: NaN
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
      });
    });
  });
});

describe('toHaveObject', function() {
  describeToHaveX('toHaveObject', function() {
    beforeEach(function() {
      this.Foo = function() { };
    });
    describe('when subject IS an Object', function() {
      it('should confirm', function() {
        expect({
          memberName: new Object()
        }).toHaveObject('memberName');
        expect({
          memberName: new this.Foo()
        }).toHaveObject('memberName');
        expect({
          memberName: {}
        }).toHaveObject('memberName');
      });
    });
    describe('when subject is NOT an Object', function() {
      it('should deny', function() {
        expect({
          memberName: null
        }).not.toHaveObject('memberName');
        expect({
          memberName: 123
        }).not.toHaveObject('memberName');
        expect({
          memberName: '[object Object]'
        }).not.toHaveObject('memberName');
      });
    });
  });
});

describe('toHaveOddNumber', function() {
  describeToHaveX('toHaveOddNumber', function() {
    describe('when subject IS an odd number', function() {
      it('should confirm', function() {
        expect({
          memberName: 1
        }).toHaveOddNumber('memberName');
      });
    });
    describe('when subject is NOT an odd number', function() {
      it('should deny', function() {
        expect({
          memberName: 2
        }).not.toHaveOddNumber('memberName');
        expect({
          memberName: NaN
        }).not.toHaveOddNumber('memberName');
      });
    });
  });
});

describe('toHaveString', function() {
  describeToHaveX('toHaveString', function() {
    describe('when subject IS a string of any length', function() {
      it('should confirm', function() {
        expect({
          memberName: ''
        }).toHaveString('memberName');
        expect({
          memberName: ' '
        }).toHaveString('memberName');
      });
    });
    describe('when subject is NOT a string of any length', function() {
      it('should deny', function() {
        expect({
          memberName: null
        }).not.toHaveString('memberName');
      });
    });
  });
});

describe('toHaveStringLongerThan', function() {
  describeToHaveX('toHaveStringLongerThan', function() {
    describe('when the subject and comparison ARE both strings', function() {
      describe('when the subject IS longer than the comparision string', function() {
        it('should confirm', function() {
          expect({
            memberName: 'abc'
          }).toHaveStringLongerThan('memberName', 'ab');
          expect({
            memberName: 'a'
          }).toHaveStringLongerThan('memberName', '');
        });
      });
      describe('when the subject is NOT longer than the comparision string', function() {
        it('should deny', function() {
          expect({
            memberName: 'ab'
          }).not.toHaveStringLongerThan('memberName', 'abc');
          expect({
            memberName: ''
          }).not.toHaveStringLongerThan('memberName', 'a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', function() {
      it('should deny (we are asserting the relative lengths of two strings)', function() {
        expect({
          memberName: 'truthy'
        }).not.toHaveStringLongerThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringLongerThan('memberName', 'truthy');
        expect({
          memberName: ''
        }).not.toHaveStringLongerThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringLongerThan('memberName', '');
      });
    });
  });
});

describe('toHaveStringSameLengthAs', function() {
  describeToHaveX('toHaveStringSameLengthAs', function() {
    describe('when the subject and comparison ARE both strings', function() {
      describe('when the subject IS the same length as the comparision string', function() {
        it('should confirm', function() {
          expect({
            memberName: 'ab'
          }).toHaveStringSameLengthAs('memberName', 'ab');
        });
      });
      describe('when the subject is NOT the same length as the comparision string', function() {
        it('should deny', function() {
          expect({
            memberName: 'abc'
          }).not.toHaveStringSameLengthAs('memberName', 'ab');
          expect({
            memberName: 'a'
          }).not.toHaveStringSameLengthAs('memberName', '');
          expect({
            memberName: ''
          }).not.toHaveStringSameLengthAs('memberName', 'a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', function() {
      it('should deny (we are asserting the relative lengths of two strings)', function() {
        expect({
          memberName: 'truthy'
        }).not.toHaveStringSameLengthAs('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringSameLengthAs('memberName', 'truthy');
        expect({
          memberName: ''
        }).not.toHaveStringSameLengthAs('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringSameLengthAs('memberName', '');
      });
    });
  });
});

describe('toHaveStringShorterThan', function() {
  describeToHaveX('toHaveStringShorterThan', function() {
    describe('when the subject and comparison ARE both strings', function() {
      describe('when the subject IS shorter than the comparision string', function() {
        it('should confirm', function() {
          expect({
            memberName: 'ab'
          }).toHaveStringShorterThan('memberName', 'abc');
          expect({
            memberName: ''
          }).toHaveStringShorterThan('memberName', 'a');
        });
      });
      describe('when the subject is NOT shorter than the comparision string', function() {
        it('should deny', function() {
          expect({
            memberName: 'abc'
          }).not.toHaveStringShorterThan('memberName', 'ab');
          expect({
            memberName: 'a'
          }).not.toHaveStringShorterThan('memberName', '');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', function() {
      it('should deny (we are asserting the relative lengths of two strings)', function() {
        expect({
          memberName: 'truthy'
        }).not.toHaveStringShorterThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringShorterThan('memberName', 'truthy');
        expect({
          memberName: ''
        }).not.toHaveStringShorterThan('memberName', _undefined);
        expect({
          memberName: _undefined
        }).not.toHaveStringShorterThan('memberName', '');
      });
    });
  });
});


describe('toHaveTrue', function() {
  describeToHaveBooleanX('toHaveTrue', function() {
    describe('when primitive', function() {
      describe('when true', function() {
        it('should confirm', function() {
          expect({
            memberName: true
          }).toHaveTrue('memberName');
        });
      });
      describe('when false', function() {
        it('should deny', function() {
          expect({
            memberName: false
          }).not.toHaveTrue('memberName');
        });
      });
    });
    describe('when Boolean object', function() {
      describe('when true', function() {
        it('should confirm', function() {
          expect({
            memberName: new Boolean(true)
          }).toHaveTrue('memberName');
        });
      });
      describe('when false', function() {
        it('should deny', function() {
          expect({
            memberName: new Boolean(false)
          }).not.toHaveTrue('memberName');
        });
      });
    });
  });
});

describe('toHaveWhitespaceString', function() {
  describeToHaveX('toHaveWhitespaceString', function() {
    describe('when subject IS a string containing only tabs, spaces, returns etc', function() {
      it('should confirm', function() {
        expect({
          memberName: ' '
        }).toHaveWhitespaceString('memberName');
        expect({
          memberName: ''
        }).toHaveWhitespaceString('memberName');
      });
    });
    describe('when subject is NOT a string containing only tabs, spaces, returns etc', function() {
      it('should deny', function() {
        expect({
          memberName: 'has-no-whitespace'
        }).not.toHaveWhitespaceString('memberName');
        expect({
          memberName: 'has whitespace'
        }).not.toHaveWhitespaceString('memberName');
        expect({
          memberName: null
        }).not.toHaveWhitespaceString('memberName');
      });
    });
  });
});

describe('toHaveWholeNumber', function() {
  describeToHaveX('toHaveWholeNumber', function() {
    describe('when subject IS a number with no positive decimal places', function() {
      it('should confirm', function() {
        expect({
          memberName: 1
        }).toHaveWholeNumber('memberName');
        expect({
          memberName: 0
        }).toHaveWholeNumber('memberName');
        expect({
          memberName: 0.0
        }).toHaveWholeNumber('memberName');
      });
    });
    describe('when subject is NOT a number with no positive decimal places', function() {
      it('should deny', function() {
        expect({
          memberName: NaN
        }).not.toHaveWholeNumber('memberName');
        expect({
          memberName: 1.1
        }).not.toHaveWholeNumber('memberName');
        expect({
          memberName: 0.1
        }).not.toHaveWholeNumber('memberName');
      });
    });
  });
});

describe('toStartWith', function() {
  describe('when invoked', function() {
    describe('when subject is NOT an undefined or empty string', function() {
      describe('when subject is a string whose leading characters match the expected string', function() {
        it('should confirm', function() {
          expect('jamie').toStartWith('jam');
        });
      });
      describe('when subject is a string whose leading characters DO NOT match the expected string', function() {
        it('should deny', function() {
          expect(' jamie').not.toStartWith('jam');
          expect('Jamie').not.toStartWith('jam');
        });
      });
    });
    describe('when subject IS an undefined or empty string', function() {
      it('should deny', function() {
        expect('').not.toStartWith('');
        expect(_undefined).not.toStartWith('');
        expect(_undefined).not.toStartWith('undefined');
        expect('undefined').not.toStartWith(_undefined);
      });
    });
  });
});


describe('toThrowAnyError', function() {
  describe('when supplied a function', function() {
    describe('when function errors when invoked', function() {
      beforeEach(function() {
        this.throwError = function() {
          throw new Error('wut?');
        };
        this.badReference = function() {
          return badReference.someValue;
        };
      });
      it('should confirm', function() {
        expect(this.throwError).toThrowAnyError();
        expect(this.badReference).toThrowAnyError();
      });
    });
    describe('when function does NOT error when invoked', function() {
      beforeEach(function() {
        this.noErrors = function() { };
      });
      it('should deny', function() {
        expect(this.noErrors).not.toThrowAnyError();
      });
    });
  });
});


describe('toThrowErrorOfType', function() {
  describe('when supplied a function', function() {
    describe('when function errors when invoked', function() {
      beforeEach(function() {
        this.throwError = function() {
          throw new Error('wut?');
        };
        this.badReference = function() {
          return badReference.someValue;
        };
      });
      describe('when the error is of the expected type', function() {
        it('should confirm', function() {
          expect(this.throwError).toThrowErrorOfType('Error');
          expect(this.badReference).toThrowErrorOfType('ReferenceError');
        });
      });
      describe('when the error is NOT of the expected type', function() {
        it('should confirm', function() {
          expect(this.throwError).not.toThrowErrorOfType('ReferenceError');
          expect(this.badReference).not.toThrowErrorOfType('Error');
        });
      });
    });
  });
});
