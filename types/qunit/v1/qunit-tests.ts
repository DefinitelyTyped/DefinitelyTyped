QUnit.test("assert.async() test", function (assert) {
    var done = assert.async();
    var input = [];
    setTimeout(function () {
        assert.equal(document.activeElement, input[0], "Input was focused");
        done();
    });
});

QUnit.test("deepEqual test", function () {
    var obj = { foo: "bar" };

    QUnit.deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});

test("deepEqual test", function () {
    var obj = { foo: "bar" };

    deepEqual(obj, { foo: "bar" }, "Two objects can be the same in value");
});

QUnit.test("a test", function () {
    QUnit.equal(1, "1", "String '1' and number 1 have the same value");
});

test("a test", function () {
    equal(1, "1", "String '1' and number 1 have the same value");
});

test("test Array 1", function () {
    equal([1,2,3], ["test", "foo"], "String '1' and number 1 have the same value");
});

test("test Array 2", function () {
    QUnit.equal([1,2,3], ["test", "foo"], "String '1' and number 1 have the same value");
});


QUnit.test("equal test", function () {
    QUnit.equal(0, 0, "Zero; equal succeeds");
    QUnit.equal("", 0, "Empty, Zero; equal succeeds");
    QUnit.equal("", "", "Empty, Empty; equal succeeds");
    QUnit.equal(0, 0, "Zero, Zero; equal succeeds");

    QUnit.equal("three", 3, "Three, 3; equal fails");
    QUnit.equal(null, false, "null, false; equal fails");
});

test("equal test", function () {
    equal(0, 0, "Zero; equal succeeds");
    equal("", 0, "Empty, Zero; equal succeeds");
    equal("", "", "Empty, Empty; equal succeeds");
    equal(0, 0, "Zero, Zero; equal succeeds");

    equal("three", 3, "Three, 3; equal fails");
    equal(null, false, "null, false; equal fails");
});

QUnit.test("notDeepEqual test", function () {
    var obj = { foo: "bar" };

    QUnit.notDeepEqual(obj, { foo: "bla" }, "Different object, same key, different value, not equal");
});

test("notDeepEqual test", function () {
    var obj = { foo: "bar" };

    notDeepEqual(obj, { foo: "bla" }, "Different object, same key, different value, not equal");
});

QUnit.test("a test", function () {
    QUnit.notEqual(1, "2", "String '2' and number 1 don't have the same value");
});

test("a test", function () {
    notEqual(1, "2", "String '2' and number 1 don't have the same value");
});

QUnit.test("a test", function () {
    QUnit.notStrictEqual(1, "1", "String '1' and number 1 don't have the same value");
});

test("a test", function () {
    notStrictEqual(1, "1", "String '1' and number 1 don't have the same value");
});

QUnit.test("ok test", function () {
    QUnit.ok(true, "true succeeds");
    QUnit.ok("non-empty", "non-empty string succeeds");

    QUnit.ok(false, "false fails");
    QUnit.ok(0, "0 fails");
    QUnit.ok(NaN, "NaN fails");
    QUnit.ok("", "empty string fails");
    QUnit.ok(null, "null fails");
    QUnit.ok(undefined, "undefined fails");
});

test("ok test", function () {
    ok(true, "true succeeds");
    ok("non-empty", "non-empty string succeeds");

    ok(false, "false fails");
    ok(0, "0 fails");
    ok(NaN, "NaN fails");
    ok("", "empty string fails");
    ok(null, "null fails");
    ok(undefined, "undefined fails");
});

QUnit.test("strictEqual test", function () {
    QUnit.strictEqual(1, 1, "1 and 1 are the same value and type");
});

test("strictEqual test", function () {
    strictEqual(1, 1, "1 and 1 are the same value and type");
});

QUnit.test("a test", function () {
    QUnit.stop();
    QUnit.start();
});

test("a test", function () {
    stop();
    start();
});

QUnit.config.autostart = false;
QUnit.start();

QUnit.config.urlConfig.push(<any>{
    id: "min",
    label: "Minified source",
    tooltip: "Load minified source files instead of the regular unminified ones."
});

QUnit.asyncTest("asynchronous test: one second later!", function () {
    QUnit.expect(1);
});

asyncTest("asynchronous test: one second later!", function () {
    expect(1);
});

QUnit.module("group a");
QUnit.test("a basic test example", function () {
    QUnit.ok(true, "this test is fine");
});
QUnit.test("a basic test example 2", function () {
    QUnit.ok(true, "this test is fine");
});

QUnit.module("group b");
QUnit.test("a basic test example 3", function () {
    QUnit.ok(true, "this test is fine");
});
QUnit.test("a basic test example 4", function () {
    QUnit.ok(true, "this test is fine");
});

QUnit.module("module A", {
    setup: function () {
        // prepare something for all following tests
    },
    teardown: function () {
        // clean up after each test
    }
});

QUnit.module("module with async setup and teardown", {
    setup: function (assert) {
        var done = assert.async();
        setTimeout(function () {
            // prepare something for all following tests
        });
    },
    teardown: function (assert) {
        // clean up after each test
    }
});

QUnit.module("module with async setup and teardown", {
    beforeEach: function (assert: QUnitAssert) {
        var done = assert.async();
        setTimeout(function () {
            // prepare something for all following tests
        });
    },
    afterEach: function () {
        // clean up after each test
    }
});

QUnit.test("a test", function (assert) {

    function square(x) {
        return x * x;
    }

    var result = square(2);

    assert.equal(result, 4, "square(2) equals 4");
});

test( "throws", function() {
 
  function CustomError( message ) {
    this.message = message;
  }
 
  CustomError.prototype.toString = function() {
    return this.message;
  };
 
  throws(
    function() {
      throw "error"
    },
    "throws with just a message, no expected"
  );
 
  throws(
    function() {
      throw new Error();
    },
    Error,
    "raised error is an instance of CustomError"
  );
 
  throws(
    function() {
      throw new Error("some error description");
    },
    /description/,
    "raised error message contains 'description'"
  );

   QUnit.throws(
    function() {
      throw "error"
    },
    "throws with just a message, no expected"
  );
 
  QUnit.throws(
    function() {
      throw new Error();
    },
    Error,
    "raised error is an instance of CustomError"
  );
 
  QUnit.throws(
    function() {
      throw new Error("some error description");
    },
    /description/,
    "raised error message contains 'description'"
  ); 
});

QUnit.test("raises", function () {
    QUnit.test("raises, alias for throws", function (assert) {
        assert.expect(1);
        assert.raises(function () {
            throw "my error";
        });
    });
});

QUnit.module("equiv");


test("Primitive types and constants", function () {
    equal(QUnit.equiv(null, null), true, "null");
    equal(QUnit.equiv(null, {}), false, "null");
    equal(QUnit.equiv(null, undefined), false, "null");
    equal(QUnit.equiv(null, 0), false, "null");
    equal(QUnit.equiv(null, false), false, "null");
    equal(QUnit.equiv(null, ''), false, "null");
    equal(QUnit.equiv(null, []), false, "null");

    equal(QUnit.equiv(undefined, undefined), true, "undefined");
    equal(QUnit.equiv(undefined, null), false, "undefined");
    equal(QUnit.equiv(undefined, 0), false, "undefined");
    equal(QUnit.equiv(undefined, false), false, "undefined");
    equal(QUnit.equiv(undefined, {}), false, "undefined");
    equal(QUnit.equiv(undefined, []), false, "undefined");
    equal(QUnit.equiv(undefined, ""), false, "undefined");

    // Nan usually doest not equal to Nan using the '==' operator.
    // Only isNaN() is able to do it.
    equal(QUnit.equiv(0/0, 0/0), true, "NaN"); // NaN VS NaN
    equal(QUnit.equiv(1/0, 2/0), true, "Infinity"); // Infinity VS Infinity
    equal(QUnit.equiv(-1/0, 2/0), false, "-Infinity, Infinity"); // -Infinity VS Infinity
    equal(QUnit.equiv(-1/0, -2/0), true, "-Infinity, -Infinity"); // -Infinity VS -Infinity
    equal(QUnit.equiv(0/0, 1/0), false, "NaN, Infinity"); // Nan VS Infinity
    equal(QUnit.equiv(1/0, 0/0), false, "NaN, Infinity"); // Nan VS Infinity
    equal(QUnit.equiv(0/0, null), false, "NaN");
    equal(QUnit.equiv(0/0, undefined), false, "NaN");
    equal(QUnit.equiv(0/0, 0), false, "NaN");
    equal(QUnit.equiv(0/0, false), false, "NaN");
    equal(QUnit.equiv(0/0, function () {}), false, "NaN");
    equal(QUnit.equiv(1/0, null), false, "NaN, Infinity");
    equal(QUnit.equiv(1/0, undefined), false, "NaN, Infinity");
    equal(QUnit.equiv(1/0, 0), false, "NaN, Infinity");
    equal(QUnit.equiv(1/0, 1), false, "NaN, Infinity");
    equal(QUnit.equiv(1/0, false), false, "NaN, Infinity");
    equal(QUnit.equiv(1/0, true), false, "NaN, Infinity");
    equal(QUnit.equiv(1/0, function () {}), false, "NaN, Infinity");

    equal(QUnit.equiv(0, 0), true, "number");
    equal(QUnit.equiv(0, 1), false, "number");
    equal(QUnit.equiv(1, 0), false, "number");
    equal(QUnit.equiv(1, 1), true, "number");
    equal(QUnit.equiv(1.1, 1.1), true, "number");
    equal(QUnit.equiv(0.0000005, 0.0000005), true, "number");
    equal(QUnit.equiv(0, ''), false, "number");
    equal(QUnit.equiv(0, '0'), false, "number");
    equal(QUnit.equiv(1, '1'), false, "number");
    equal(QUnit.equiv(0, false), false, "number");
    equal(QUnit.equiv(1, true), false, "number");

    equal(QUnit.equiv(true, true), true, "boolean");
    equal(QUnit.equiv(true, false), false, "boolean");
    equal(QUnit.equiv(false, true), false, "boolean");
    equal(QUnit.equiv(false, 0), false, "boolean");
    equal(QUnit.equiv(false, null), false, "boolean");
    equal(QUnit.equiv(false, undefined), false, "boolean");
    equal(QUnit.equiv(true, 1), false, "boolean");
    equal(QUnit.equiv(true, null), false, "boolean");
    equal(QUnit.equiv(true, undefined), false, "boolean");

    equal(QUnit.equiv('', ''), true, "string");
    equal(QUnit.equiv('a', 'a'), true, "string");
    equal(QUnit.equiv("foobar", "foobar"), true, "string");
    equal(QUnit.equiv("foobar", "foo"), false, "string");
    equal(QUnit.equiv('', 0), false, "string");
    equal(QUnit.equiv('', false), false, "string");
    equal(QUnit.equiv('', null), false, "string");
    equal(QUnit.equiv('', undefined), false, "string");

    // Rename for lint validation.
    // We know this is bad, we are asserting whether we can coop with bad code like this.
    var SafeNumber = Number, SafeString = String, SafeBoolean = Boolean, SafeObject = Object;

    // primitives vs. objects

    equal(QUnit.equiv(0, new SafeNumber()), true, "primitives vs. objects");
    equal(QUnit.equiv(new SafeNumber(), 0), true, "primitives vs. objects");
    equal(QUnit.equiv(1, new SafeNumber(1)), true, "primitives vs. objects");
    equal(QUnit.equiv(new SafeNumber(1), 1), true, "primitives vs. objects");
    equal(QUnit.equiv(new SafeNumber(0), 1), false, "primitives vs. objects");
    equal(QUnit.equiv(0, new SafeNumber(1)), false, "primitives vs. objects");

    equal(QUnit.equiv(new SafeString(), ""), true, "primitives vs. objects");
    equal(QUnit.equiv("", new SafeString()), true, "primitives vs. objects");
    equal(QUnit.equiv(new SafeString("My String"), "My String"), true, "primitives vs. objects");
    equal(QUnit.equiv("My String", new SafeString("My String")), true, "primitives vs. objects");
    equal(QUnit.equiv("Bad String", new SafeString("My String")), false, "primitives vs. objects");
    equal(QUnit.equiv(new SafeString("Bad String"), "My String"), false, "primitives vs. objects");

    equal(QUnit.equiv(false, new SafeBoolean()), true, "primitives vs. objects");
    equal(QUnit.equiv(new SafeBoolean(), false), true, "primitives vs. objects");
    equal(QUnit.equiv(true, new SafeBoolean(true)), true, "primitives vs. objects");
    equal(QUnit.equiv(new SafeBoolean(true), true), true, "primitives vs. objects");
    equal(QUnit.equiv(true, new SafeBoolean(1)), true, "primitives vs. objects");
    equal(QUnit.equiv(false, new SafeBoolean(false)), true, "primitives vs. objects");
    equal(QUnit.equiv(new SafeBoolean(false), false), true, "primitives vs. objects");
    equal(QUnit.equiv(false, new SafeBoolean(0)), true, "primitives vs. objects");
    equal(QUnit.equiv(true, new SafeBoolean(false)), false, "primitives vs. objects");
    equal(QUnit.equiv(new SafeBoolean(false), true), false, "primitives vs. objects");

    equal(QUnit.equiv(new SafeObject(), {}), true, "object literal vs. instantiation");
    equal(QUnit.equiv({}, new SafeObject()), true, "object literal vs. instantiation");
    equal(QUnit.equiv(new SafeObject(), {a:1}), false, "object literal vs. instantiation");
    equal(QUnit.equiv({a:1}, new SafeObject()), false, "object literal vs. instantiation");
    equal(QUnit.equiv({a:undefined}, new SafeObject()), false, "object literal vs. instantiation");
    equal(QUnit.equiv(new SafeObject(), {a:undefined}), false, "object literal vs. instantiation");
});

test("Objects Basics.", function() {
    equal(QUnit.equiv({}, {}), true);
    equal(QUnit.equiv({}, null), false);
    equal(QUnit.equiv({}, undefined), false);
    equal(QUnit.equiv({}, 0), false);
    equal(QUnit.equiv({}, false), false);

    // This test is a hard one, it is very important
    // REASONS:
    //      1) They are of the same type "object"
    //      2) [] instanceof Object is true
    //      3) Their properties are the same (doesn't exists)
    equal(QUnit.equiv({}, []), false);

    equal(QUnit.equiv({a:1}, {a:1}), true);
    equal(QUnit.equiv({a:1}, {a:"1"}), false);
    equal(QUnit.equiv({a:[]}, {a:[]}), true);
    equal(QUnit.equiv({a:{}}, {a:null}), false);
    equal(QUnit.equiv({a:1}, {}), false);
    equal(QUnit.equiv({}, {a:1}), false);

    // Hard ones
    equal(QUnit.equiv({a:undefined}, {}), false);
    equal(QUnit.equiv({}, {a:undefined}), false);
    equal(QUnit.equiv(
        {
            a: [{ bar: undefined }]
        },
        {
            a: [{ bat: undefined }]
        }
    ), false);

    // Objects with no prototype, created via Object.create(null), are used e.g. as dictionaries.
    // Being able to test equivalence against object literals is quite useful.
    if (typeof Object.create === 'function') {
        equal(QUnit.equiv(Object.create(null), {}), true, "empty object without prototype VS empty object");

        var nonEmptyWithNoProto = Object.create(null);
        nonEmptyWithNoProto.foo = "bar";

        equal(QUnit.equiv(nonEmptyWithNoProto, { foo: "bar" }), true, "object without prototype VS object");
    }
});


test("Arrays Basics.", function() {

    equal(QUnit.equiv([], []), true);

    // May be a hard one, can invoke a crash at execution.
    // because their types are both "object" but null isn't
    // like a true object, it doesn't have any property at all.
    equal(QUnit.equiv([], null), false);

    equal(QUnit.equiv([], undefined), false);
    equal(QUnit.equiv([], false), false);
    equal(QUnit.equiv([], 0), false);
    equal(QUnit.equiv([], ""), false);

    // May be a hard one, but less hard
    // than {} with [] (note the order)
    equal(QUnit.equiv([], {}), false);

    equal(QUnit.equiv([null],[]), false);
    equal(QUnit.equiv([undefined],[]), false);
    equal(QUnit.equiv([],[null]), false);
    equal(QUnit.equiv([],[undefined]), false);
    equal(QUnit.equiv([null],[undefined]), false);
    equal(QUnit.equiv([[]],[[]]), true);
    equal(QUnit.equiv([[],[],[]],[[],[],[]]), true);
    equal(QUnit.equiv(
                            [[],[],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
                            [[],[],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]),
                            true);
    equal(QUnit.equiv(
                            [[],[],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
                            [[],[],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), // shorter
                            false);
    equal(QUnit.equiv(
                            [[],[],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[{}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
                            [[],[],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), // deepest element not an array
                            false);
});

test("Prototypal inheritance", function() {
    function Gizmo(id?) {
        this.id = id;
    }

    function Hoozit(id?) {
        this.id = id;
    }
    Hoozit.prototype = new Gizmo();

    var gizmo = new Gizmo("ok");
    var hoozit = new Hoozit("ok");

    // Try this test many times after test on instances that hold function
    // to make sure that our code does not mess with last object constructor memoization.
    equal(QUnit.equiv(function () {}, function () {}), false);

    // Hoozit inherit from Gizmo
    // hoozit instanceof Hoozit; // true
    // hoozit instanceof Gizmo; // true
    equal(QUnit.equiv(hoozit, gizmo), true);

    Gizmo.prototype.bar = true; // not a function just in case we skip them

    // Hoozit inherit from Gizmo
    // They are equivalent
    equal(QUnit.equiv(hoozit, gizmo), true);

    // Make sure this is still true !important
    // The reason for this is that I forgot to reset the last
    // caller to where it were called from.
    equal(QUnit.equiv(function () {}, function () {}), false);

    // Make sure this is still true !important
    equal(QUnit.equiv(hoozit, gizmo), true);

    Hoozit.prototype.foo = true; // not a function just in case we skip them

    // Gizmo does not inherit from Hoozit
    // gizmo instanceof Gizmo; // true
    // gizmo instanceof Hoozit; // false
    // They are not equivalent
    equal(QUnit.equiv(hoozit, gizmo), false);

    // Make sure this is still true !important
    equal(QUnit.equiv(function () {}, function () {}), false);
});


test("Instances", function() {
    function A() {}
    var a1 = new A();
    var a2 = new A();

    function B() {
        this.fn = function () {};
    }
    var b1 = new B();
    var b2 = new B();

    equal(QUnit.equiv(a1, a2), true, "Same property, same constructor");

    // b1.fn and b2.fn are functions but they are different references
    // But we decided to skip function for instances.
    equal(QUnit.equiv(b1, b2), true, "Same property, same constructor");
    equal(QUnit.equiv(a1, b1), false, "Same properties but different constructor"); // failed

    function Car(year) {
        var privateVar = 0;
        this.year = year;
        this.isOld = function() {
            return year > 10;
        };
    }

    function Human(year) {
        var privateVar = 1;
        this.year = year;
        this.isOld = function() {
            return year > 80;
        };
    }

    var car = new Car(30);
    var carSame = new Car(30);
    var carDiff = new Car(10);
    var human = new Human(30);

    var diff = {
        year: 30
    };

    var same = {
        year: 30,
        isOld: function () {}
    };

    equal(QUnit.equiv(car, car), true);
    equal(QUnit.equiv(car, carDiff), false);
    equal(QUnit.equiv(car, carSame), true);
    equal(QUnit.equiv(car, human), false);
});


test("Complex Instances Nesting (with function value in literals and/or in nested instances)", function() {
    function A(fn) {
        this.a = {};
        this.fn = fn;
        this.b = {a: []};
        this.o = {};
        this.fn1 = fn;
    }
    function B(fn) {
        this.fn = fn;
        this.fn1 = function () {};
        this.a = new A(function () {});
    }

    function fnOutside() {
    }

    function C(fn) {
        function fnInside() {
        }
        this.x = 10;
        this.fn = fn;
        this.fn1 = function () {};
        this.fn2 = fnInside;
        this.fn3 = {
            a: true,
            b: fnOutside // ok make reference to a function in all instances scope
        };
        this.o1 = {};

        // This function will be ignored.
        // Even if it is not visible for all instances (e.g. locked in a closures),
        // it is from a  property that makes part of an instance (e.g. from the C constructor)
        this.b1 = new B(function () {});
        this.b2 = new B({
            x: {
                b2: new B(function() {})
            }
        });
    }

    function D(fn) {
        function fnInside() {
        }
        this.x = 10;
        this.fn = fn;
        this.fn1 = function () {};
        this.fn2 = fnInside;
        this.fn3 = {
            a: true,
            b: fnOutside, // ok make reference to a function in all instances scope

            // This function won't be ingored.
            // It isn't visible for all C insances
            // and it is not in a property of an instance. (in an Object instances e.g. the object literal)
            c: fnInside
        };
        this.o1 = {};

        // This function will be ignored.
        // Even if it is not visible for all instances (e.g. locked in a closures),
        // it is from a  property that makes part of an instance (e.g. from the C constructor)
        this.b1 = new B(function () {});
        this.b2 = new B({
            x: {
                b2: new B(function() {})
            }
        });
    }

    function E(fn) {
        function fnInside() {
        }
        this.x = 10;
        this.fn = fn;
        this.fn1 = function () {};
        this.fn2 = fnInside;
        this.fn3 = {
            a: true,
            b: fnOutside // ok make reference to a function in all instances scope
        };
        this.o1 = {};

        // This function will be ignored.
        // Even if it is not visible for all instances (e.g. locked in a closures),
        // it is from a  property that makes part of an instance (e.g. from the C constructor)
        this.b1 = new B(function () {});
        this.b2 = new B({
            x: {
                b1: new B({a: function() {}}),
                b2: new B(function() {})
            }
        });
    }


    var a1 = new A(function () {});
    var a2 = new A(function () {});
    equal(QUnit.equiv(a1, a2), true);

    equal(QUnit.equiv(a1, a2), true); // different instances

    var b1 = new B(function () {});
    var b2 = new B(function () {});
    equal(QUnit.equiv(b1, b2), true);

    var c1 = new C(function () {});
    var c2 = new C(function () {});
    equal(QUnit.equiv(c1, c2), true);

    var d1 = new D(function () {});
    var d2 = new D(function () {});
    equal(QUnit.equiv(d1, d2), false);

    var e1 = new E(function () {});
    var e2 = new E(function () {});
    equal(QUnit.equiv(e1, e2), false);

});


test('object with references to self wont loop', function() {
    var circularA = <any>{
        abc:null
    }, circularB = <any>{
        abc:null
    };
    circularA.abc = circularA;
    circularB.abc = circularB;
    equal(QUnit.equiv(circularA, circularB), true, "Should not repeat test on object (ambigous test)");

    circularA.def = 1;
    circularB.def = 1;
    equal(QUnit.equiv(circularA, circularB), true, "Should not repeat test on object (ambigous test)");

    circularA.def = 1;
    circularB.def = 0;
    equal(QUnit.equiv(circularA, circularB), false, "Should not repeat test on object (unambigous test)");
});

test('array with references to self wont loop', function() {
    var circularA = [],
        circularB = [];
    circularA.push(circularA);
    circularB.push(circularB);
    equal(QUnit.equiv(circularA, circularB), true, "Should not repeat test on array (ambigous test)");

    circularA.push( 'abc' );
    circularB.push( 'abc' );
    equal(QUnit.equiv(circularA, circularB), true, "Should not repeat test on array (ambigous test)");

    circularA.push( 'hello' );
    circularB.push( 'goodbye' );
    equal(QUnit.equiv(circularA, circularB), false, "Should not repeat test on array (unambigous test)");
});

test('mixed object/array with references to self wont loop', function() {
    var circularA = <any>[{abc:null}],
        circularB = <any>[{abc:null}];
    circularA[0].abc = circularA;
    circularB[0].abc = circularB;

    circularA.push(circularA);
    circularB.push(circularB);
    equal(QUnit.equiv(circularA, circularB), true, "Should not repeat test on object/array (ambigous test)");

    circularA[0].def = 1;
    circularB[0].def = 1;
    equal(QUnit.equiv(circularA, circularB), true, "Should not repeat test on object/array (ambigous test)");

    circularA[0].def = 1;
    circularB[0].def = 0;
    equal(QUnit.equiv(circularA, circularB), false, "Should not repeat test on object/array (unambigous test)");
});

test("Test that must be done at the end because they extend some primitive's prototype", function() {
    // Try that a function looks like our regular expression.
    // This tests if we check that a and b are really both instance of RegExp
    //Function.prototype.global = true;
    //Function.prototype.multiline = true;
    //Function.prototype.ignoreCase = false;
    //Function.prototype.source = "my regex";
    var re = /my regex/gm;
    equal(QUnit.equiv(re, function () {}), false, "A function that looks that a regex isn't a regex");
    // This test will ensures it works in both ways, and ALSO especially that we can make differences
    // between RegExp and Function constructor because typeof on a RegExpt instance is "function"
    equal(QUnit.equiv(function () {}, re), false, "Same conversely, but ensures that function and regexp are distinct because their constructor are different");
});

QUnit.start();

test("just a test", function() {
    expect(1);
    ok(true);
});

// ************** BUG ? ******************
// TODO disable reordering for this suite!

var moduleContext,
    moduleDoneContext,
    testContext,
    testDoneContext,
    logContext;
/*
QUnit.begin(function() {
    //begin++;
});
QUnit.done(function() {
});
QUnit.moduleStart(function(context) {
    //moduleStart++;
    //moduleContext = context;
});
QUnit.moduleDone(function(context) {
    //moduleDone++;
    //moduleDoneContext = context;
});
QUnit.testStart(function(context) {
    //testStart++;
    //testContext = context;
});
QUnit.testDone(function(context) {
    //testDone++;
    //testDoneContext = context;
});
QUnit.log(function(context) {
    //log++;
    //logContext = context;
});
*/
QUnit.module("logs1");

QUnit.test("test1", 15, function() {
    equal( begin, 1, "QUnit.begin calls" );
    equal( moduleStart, 1, "QUnit.moduleStart calls" );
    equal( testStart, 1, "QUnit.testStart calls" );
    equal( testDone, 0, "QUnit.testDone calls" );
    equal( moduleDone, 0, "QUnit.moduleDone calls" );
    deepEqual( logContext, {
        name: "test1",
        module: "logs1",
        result: true,
        message: "QUnit.moduleDone calls",
        actual: 0,
        expected: 0
    }, "log context after equal(actual, expected, message)" );

    equal( "foo", "foo" );
    deepEqual(logContext, {
        name: "test1",
        module: "logs1",
        result: true,
        message: undefined,
        actual: "foo",
        expected: "foo"
    }, "log context after equal(actual, expected)" );

    ok( true, "ok(true, message)" );
    deepEqual( logContext, {
        module: "logs1",
        name: "test1",
        result: true,
        message: "ok(true, message)"
    }, "log context after ok(true, message)" );

    strictEqual( testDoneContext, undefined, "testDone context" );
    deepEqual( testContext, {
        module: "logs1",
        name: "test1"
    }, "test context" );
    strictEqual( moduleDoneContext, undefined, "moduleDone context" );
    deepEqual( moduleContext, {
        name: "logs1"
    }, "module context" );

    equal( log, 14, "QUnit.log calls" );
});
QUnit.test("test2", 11, function() {
    equal( begin, 1, "QUnit.begin calls" );
    equal( moduleStart, 1, "QUnit.moduleStart calls" );
    equal( testStart, 2, "QUnit.testStart calls" );
    equal( testDone, 1, "QUnit.testDone calls" );
    equal( moduleDone, 0, "QUnit.moduleDone calls" );

    ok( typeof testDoneContext.duration === "number" , "testDone context: duration" );
    delete testDoneContext.duration;
    deepEqual( testDoneContext, {
        module: "logs1",
        name: "test1",
        failed: 0,
        passed: 15,
        total: 15
    }, "testDone context" );
    deepEqual( testContext, {
        module: "logs1",
        name: "test2"
    }, "test context" );
    strictEqual( moduleDoneContext, undefined, "moduleDone context" );
    deepEqual( moduleContext, {
        name: "logs1"
    }, "module context" );

    equal( log, 25, "QUnit.log calls" );
});

QUnit.module("logs2");

QUnit.test( "test1", 9, function() {
    equal( begin, 1, "QUnit.begin calls" );
    equal( moduleStart, 2, "QUnit.moduleStart calls" );
    equal( testStart, 3, "QUnit.testStart calls" );
    equal( testDone, 2, "QUnit.testDone calls" );
    equal( moduleDone, 1, "QUnit.moduleDone calls" );

    deepEqual( testContext, {
        module: "logs2",
        name: "test1"
    }, "test context" );
    deepEqual( moduleDoneContext, {
        name: "logs1",
        failed: 0,
        passed: 26,
        total: 26
    }, "moduleDone context" );
    deepEqual( moduleContext, {
        name: "logs2"
    }, "module context" );

    equal( log, 34, "QUnit.log calls" );
});
QUnit.test( "test2", 8, function() {
    equal( begin, 1, "QUnit.begin calls" );
    equal( moduleStart, 2, "QUnit.moduleStart calls" );
    equal( testStart, 4, "QUnit.testStart calls" );
    equal( testDone, 3, "QUnit.testDone calls" );
    equal( moduleDone, 1, "QUnit.moduleDone calls" );

    deepEqual( testContext, {
        module: "logs2",
        name: "test2"
    }, "test context" );
    deepEqual( moduleContext, {
        name: "logs2"
    }, "module context" );

    equal( log, 42, "QUnit.log calls" );
});

var testAutorun = true;

QUnit.done(function() {

    if (!testAutorun) {
        return;
    }

    testAutorun = false;

    QUnit.module("autorun");

    QUnit.test("reset", 0, function() {});

    //moduleStart = moduleDone = 0;

    test("first", function() {
        equal(moduleStart, 1, "test started");
        equal(moduleDone, 0, "test in progress");
    });

    test("second", function() {
        equal(moduleStart, 2, "test started");
        equal(moduleDone, 1, "test in progress");
    });
});

QUnit.log(function(details: any) {
    if (!details.result) {
        var output = "FAILED: " + (details.message ? details.message + ", " : "");
        if (details.actual) {
            output += "expected: " + details.expected + ", actual: " + details.actual;
        }
        if (details.source) {
            output += ", " + details.source;
        }
    }
});

QUnit.test("fail twice with stacktrace", function(assert) {
    /*jshint expr:true */
    assert.equal(true, false);
    assert.equal(true, false, "gotta fail");
});

test("module without setup/teardown (default)", function() {
    expect(1);
    ok(true);
});

QUnit.test("expect in test", 3, function() {
    ok(true);
    ok(true);
    ok(true);
});

QUnit.test("expect in test", 5, function() {
    ok(true);
});

test("expect query and multiple issue", function() {
    expect(2);
    ok(true);
    var expected = expect(null);
    equal(expected, 2);
    expect(expected + 1);
    ok(true);
});

QUnit.module("assertion helpers");

QUnit.test( "QUnit.assert compatibility", 5, function( assert ) {
    assert.ok( true, "Calling method on `assert` argument to test() callback" );

    // Should also work, although discouraged and not documented
    QUnit.assert.ok( true, "Calling method on QUnit.assert object" );

    // Test compatibility aliases
    QUnit.ok( true, "Calling aliased method in QUnit root object" );
    ok( true, "Calling aliased function in global namespace" );

    // Regression fix for #341
    // The assert-context way of testing discouraged global variables,
    // it doesn't make sense of it itself to be a global variable.
    // Only allows for mistakes (e.g. forgetting to list 'assert' as parameter)
    //assert.notStrictEqual( /*window.assert*/null, QUnit.assert, "Assert does not get exposed as a global variable" );
});

QUnit.module("setup test", {
    setup: function() {
        ok(true);
    }
});

test("module with setup", function() {
    expect(2);
    ok(true);
});

QUnit.test("module with setup, expect in test call", 2, function() {
    ok(true);
});

QUnit.module("<script id='qunit-unescaped-module'>'module';</script>", {
    setup: function() {
    },
    teardown: function() {
        // We can't use ok(false) inside script tags since some browsers
        // don't evaluate script tags inserted through innerHTML after domready.
        // Counting them before/after doesn't cover everything either as qunit-modulefilter
        // is created before any test is ran. So use ids instead.
        if (document.getElementById('qunit-unescaped-module')) {
            // This can either be from in #qunit-modulefilter or #qunit-testresult
            ok(false, 'Unscaped module name');
        }
        if (document.getElementById('qunit-unescaped-test')) {
            ok(false, 'Unscaped test name');
        }
        if (document.getElementById('qunit-unescaped-assertion')) {
            ok(false, 'Unscaped test name');
        }
    }
});

QUnit.test("<script id='qunit-unescaped-test'>'test';</script>", 1, function() {
    ok(true, "<script id='qunit-unescaped-asassertionsert'>'assertion';</script>");
});

var state;

QUnit.module("setup/teardown test", {
    setup: function() {
        state = true;
        ok(true);
        // Assert that we can introduce and delete globals in setup/teardown
        // without noglobals sounding any alarm.

        // Using an implied global variable instead of explicit window property
        // because there is no way to delete a window.property in IE6-8
        // `delete x` only works for `x = 1, and `delete window.x` throws exception.
        // No one-code fits all solution possible afaic. Resort to @cc.

        /*@cc_on
            @if (@_jscript_version < 9)
                x = 1;
            @else @*/
                //window.x = 1;
            /*@end
        @*/
    },
    teardown: function() {
        ok(true);

        /*@cc_on
            @if (@_jscript_version < 9)
                delete x;
            @else @*/
                //delete window.x;
            /*@end
        @*/
    }
});

test("module with setup/teardown", function() {
    expect(3);
    ok(true);
});

QUnit.module("setup/teardown test 2");

test("module without setup/teardown", function() {
    expect(1);
    ok(true);
});

var orgDate;

QUnit.module("Date test", {
    setup: function() {
        orgDate = Date;
        var Date = function () {
            ok( false, 'QUnit should internally be independant from Date-related manipulation and testing' );
            return new orgDate();
        };
    },
    teardown: function() {
        var date = orgDate;
    }
});

test("sample test for Date test", function () {
    expect(1);
    ok(true);
});

if (typeof setTimeout !== 'undefined') {
state = 'fail';

QUnit.module("teardown and stop", {
    teardown: function() {
        equal(state, "done", "Test teardown.");
    }
});

test("teardown must be called after test ended", function() {
    expect(1);
    stop();
    setTimeout(function() {
        state = "done";
        start();
    }, 13);
});

test("parameter passed to stop increments semaphore n times", function() {
    expect(1);
    stop(3);
    setTimeout(function() {
        state = "not enough starts";
        start();
        start();
    }, 13);
    setTimeout(function() {
        state = "done";
        start();
    }, 15);
});

test("parameter passed to start decrements semaphore n times", function() {
    expect(1);
    stop();
    stop();
    stop();
    setTimeout(function() {
        state = "done";
        start(3);
    }, 18);
});

QUnit.module("async setup test", {
    setup: function() {
        stop();
        setTimeout(function() {
            ok(true);
            start();
        }, 500);
    }
});

asyncTest("module with async setup", function() {
    expect(2);
    ok(true);
    start();
});

QUnit.module("async teardown test", {
    teardown: function() {
        stop();
        setTimeout(function() {
            ok(true);
            start();
        }, 500);
    }
});

asyncTest("module with async teardown", function() {
    expect(2);
    ok(true);
    start();
});

QUnit.module("asyncTest");

asyncTest("asyncTest", function() {
    expect(2);
    ok(true);
    setTimeout(function() {
        state = "done";
        ok(true);
        start();
    }, 13);
});

asyncTest("asyncTest", 2, function() {
    ok(true);
    setTimeout(function() {
        state = "done";
        ok(true);
        start();
    }, 13);
});

QUnit.test("sync", 2, function() {
    stop();
    setTimeout(function() {
        ok(true);
        start();
    }, 13);
    stop();
    setTimeout(function() {
        ok(true);
        start();
    }, 125);
});

QUnit.test("test synchronous calls to stop", 2, function() {
    stop();
    setTimeout(function() {
        ok(true, 'first');
        start();
        stop();
        setTimeout(function() {
            ok(true, 'second');
            start();
        }, 150);
    }, 150);
});
}

QUnit.module("save scope", {
    setup: function() {
        this.foo = "bar";
    },
    teardown: function() {
        deepEqual(this.foo, "bar");
    }
});
test("scope check", function() {
    expect(2);
    deepEqual(this.foo, "bar");
});

QUnit.module("simple testEnvironment setup", {
    foo: "bar",
    // example of meta-data
    bugid: "#5311"
});
test("scope check", function() {
    deepEqual(this.foo, "bar");
});
test("modify testEnvironment",function() {
    expect(0);
    this.foo="hamster";
});
test("testEnvironment reset for next test",function() {
    deepEqual(this.foo, "bar");
});

QUnit.module("testEnvironment with object", {
    options:{
        recipe:"soup",
        ingredients:["hamster","onions"]
    }
});
test("scope check", function() {
    deepEqual(this.options, {recipe:"soup",ingredients:["hamster","onions"]}) ;
});
test("modify testEnvironment",function() {
    expect(0);
    // since we do a shallow copy, the testEnvironment can be modified
    this.options.ingredients.push("carrots");
});
test("testEnvironment reset for next test",function() {
    deepEqual(this.options, {recipe:"soup",ingredients:["hamster","onions","carrots"]}, "Is this a bug or a feature? Could do a deep copy") ;
});


QUnit.module("testEnvironment tests");

function makeurl() {
    var testEnv = QUnit.current_testEnvironment;
    var url = testEnv.url || 'http://example.com/search';
    var q   = testEnv.q   || 'a search test';
    return url + '?q='+encodeURIComponent(q);
}

test("makeurl working",function() {
    equal( QUnit.current_testEnvironment, this, 'The current testEnvironment is global');
    equal( makeurl(), 'http://example.com/search?q=a%20search%20test', 'makeurl returns a default url if nothing specified in the testEnvironment');
});

QUnit.module("testEnvironment with makeurl settings", {
    url: 'http://google.com/',
    q: 'another_search_test'
});
test("makeurl working with settings from testEnvironment", function() {
    equal( makeurl(), 'http://google.com/?q=another_search_test', 'rather than passing arguments, we use test metadata to from the url');
});

QUnit.module("jsDump");
test("jsDump output", function() {
    equal( QUnit.jsDump.parse([1, 2]), "[\n  1,\n  2\n]" );
    equal( QUnit.jsDump.parse({top: 5, left: 0}), "{\n  \"left\": 0,\n  \"top\": 5\n}" );
    if (typeof document !== 'undefined' && document.getElementById("qunit-header")) {
        equal( QUnit.jsDump.parse(document.getElementById("qunit-header")), "<h1 id=\"qunit-header\"></h1>" );
        equal( QUnit.jsDump.parse(document.getElementsByTagName("h1")), "[\n  <h1 id=\"qunit-header\"></h1>\n]" );
    }
});

QUnit.module("assertions");

QUnit.test("propEqual", 5, function( assert ) {
    var objectCreate = Object.create || function ( origin ) {
        function O() {}
        O.prototype = origin;
        var r = new O();
        return r;
    };

    function Foo( x, y, z ) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Foo.prototype.doA = function () {};
    Foo.prototype.doB = function () {};
    Foo.prototype.bar = 'prototype';

    function Bar() {
    }
    Bar.prototype = objectCreate( Foo.prototype );
    Bar.prototype.constructor = Bar;

    assert.propEqual(
        new Foo( 1, '2', [] ),
        {
            x: 1,
            y: '2',
            z: []
        }
    );

    assert.notPropEqual(
        new Foo( '1', 2, 3 ),
        {
            x: 1,
            y: '2',
            z: 3
        },
        'Primitive values are strictly compared'
    );

    assert.notPropEqual(
        new Foo( 1, '2', [] ),
        {
            x: 1,
            y: '2',
            z: {}
        },
        'Array type is preserved'
    );

    assert.notPropEqual(
        new Foo( 1, '2', {} ),
        {
            x: 1,
            y: '2',
            z: []
        },
        'Empty array is not the same as empty object'
    );

    assert.propEqual(
        new Foo( 1, '2', new Foo( [ 3 ], new Bar(), null ) ),
        {
            x: 1,
            y: '2',
            z: {
                x: [ 3 ],
                y: {},
                z: null
            }
        },
        'Complex nesting of different types, inheritance and constructors'
    );
});

if (typeof document !== "undefined") {

QUnit.module("fixture");
test("setup", function() {
    expect(0);
    document.getElementById("qunit-fixture").innerHTML = "foobar";
});

test("basics", function() {
    equal( document.getElementById("qunit-fixture").innerHTML, "test markup", "automatically reset" );
});

test("running test name displayed", function() {
    expect(2);

    var displaying = document.getElementById("qunit-testresult");

    ok( /running test name displayed/.test(displaying.innerHTML), "Expect test name to be found in displayed text" );
    ok( /fixture/.test(displaying.innerHTML), "Expect module name to be found in displayed text" );
});

(function() {
    var delayNextSetup,
        sleep = function( n ) {
            stop();
            setTimeout( function() { start(); }, n );
        };

    QUnit.module("timing", {
        setup: function() {
            if ( delayNextSetup ) {
                delayNextSetup = false;
                sleep( 250 );
            }
        }
    });

    QUnit.test("setup", 0, function() {
        delayNextSetup = true;
    });

    var getPreviousTests: (...args: any[]) => any;

    QUnit.test("basics", 2, function() {
        var previous = getPreviousTests(/^setup$/, /^timing$/)[0],
            runtime = previous.lastChild.previousSibling;
        ok( /(^| )runtime( |$)/.test( runtime.className ), "Runtime element exists" );
        ok( /^\d+ ms$/.test( runtime.innerHTML ), "Runtime reported in ms" );
    });

    QUnit.test("values", 2, function() {
        var basics = getPreviousTests(/^setup$/, /^timing$/)[0],
            slow = getPreviousTests(/^basics$/, /^timing$/)[0];
        ok( parseInt( basics.lastChild.previousSibling.innerHTML, 10 ) < 50, "Fast runtime for trivial test" );
        ok( parseInt( slow.lastChild.previousSibling.innerHTML, 10 ) > 250, "Runtime includes setup" );
    });
})();

}

QUnit.module("custom assertions");
(function() {
    function mod2(value, expected, message) {
        var actual = value % 2;
        QUnit.push(actual == expected, actual, expected, message);
    }
    test("mod2", function() {
        mod2(2, 0, "2 % 2 == 0");
        mod2(3, 1, "3 % 2 == 1");
    });
})();


QUnit.module("recursions");

function Wrap(x?) {
    this.wrap = x;
    if (x === undefined) {
        this.first = true;
    }
}

function chainwrap(depth?, first?, prev?) {
    depth = depth || 0;
    var last = prev || new Wrap();
    first = first || last;

    if (depth == 1) {
        first.wrap = last;
    }
    if (depth > 1) {
        last = chainwrap(depth-1, first, new Wrap(last));
    }

    return last;
}

test("check jsDump recursion", function() {
    expect(4);

    var noref = chainwrap(0);
    var nodump = QUnit.jsDump.parse(noref);
    equal(nodump, '{\n  "first": true,\n  "wrap": undefined\n}');

    var selfref = chainwrap(1);
    var selfdump = QUnit.jsDump.parse(selfref);
    equal(selfdump, '{\n  "first": true,\n  "wrap": recursion(-1)\n}');

    var parentref = chainwrap(2);
    var parentdump = QUnit.jsDump.parse(parentref);
    equal(parentdump, '{\n  "wrap": {\n    "first": true,\n    "wrap": recursion(-2)\n  }\n}');

    var circref = chainwrap(10);
    var circdump = QUnit.jsDump.parse(circref);
    ok(new RegExp("recursion\\(-10\\)").test(circdump), "(" +circdump + ") should show -10 recursion level");
});

test("check (deep-)equal recursion", function() {
    var noRecursion = chainwrap(0);
    equal(noRecursion, noRecursion, "I should be equal to me.");
    deepEqual(noRecursion, noRecursion, "... and so in depth.");

    var selfref = chainwrap(1);
    equal(selfref, selfref, "Even so if I nest myself.");
    deepEqual(selfref, selfref, "... into the depth.");

    var circref = chainwrap(10);
    equal(circref, circref, "Or hide that through some levels of indirection.");
    deepEqual(circref, circref, "... and checked on all levels!");
});


test('Circular reference with arrays', function() {

    // pure array self-ref
    var arr = [];
    arr.push(arr);

    var arrdump = QUnit.jsDump.parse(arr);

    equal(arrdump, '[\n  recursion(-1)\n]');
    equal(arr, arr[0], 'no endless stack when trying to dump arrays with circular ref');


    // mix obj-arr circular ref
    var obj: any = {};
    var childarr = [obj];
    obj.childarr = childarr;

    var objdump = QUnit.jsDump.parse(obj);
    var childarrdump = QUnit.jsDump.parse(childarr);

    equal(objdump, '{\n  "childarr": [\n    recursion(-2)\n  ]\n}');
    equal(childarrdump, '[\n  {\n    "childarr": recursion(-2)\n  }\n]');

    equal(obj.childarr, childarr, 'no endless stack when trying to dump array/object mix with circular ref');
    equal(childarr[0], obj, 'no endless stack when trying to dump array/object mix with circular ref');

});


test('Circular reference - test reported by soniciq in #105', function() {
    var MyObject = function() {};
    MyObject.prototype.parent = function(obj) {
        if (obj === undefined) { return this._parent; }
        this._parent = obj;
    };
    MyObject.prototype.children = function(obj) {
        if (obj === undefined) { return this._children; }
        this._children = obj;
    };

    var a = new MyObject(),
        b = new MyObject();

    var barr = [b];
    a.children(barr);
    b.parent(a);

    equal(a.children(), barr);
    deepEqual(a.children(), [b]);
});

(function() {
    var reset = QUnit.reset;
    QUnit.module("reset");
    test("reset runs assertions", function() {
        expect(0);
        QUnit.reset = function() {
            ok( false, "reset should not modify test status" );
            reset.apply( this, arguments );
        };
    });
    test("reset runs assertions, cleanup", function() {
        expect(0);
        QUnit.reset = reset;
    });
})();

function testAfterDone() {
    var testName = "ensure has correct number of assertions";

    function secondAfterDoneTest() {
        QUnit.config.done = [];
        // Because when this does happen, the assertion count parameter doesn't actually
        // work we use this test to check the assertion count.
        QUnit.module("check previous test's assertion counts");
        test('count previous two test\'s assertions', function () {
            //var tests = getPreviousTests(/^ensure has correct number of assertions/, /^Synchronous test after load of page$/);
            var tests: any = {};

            equal(tests[0].firstChild.lastChild.getElementsByTagName("b")[1].innerHTML, "99");
            equal(tests[1].firstChild.lastChild.getElementsByTagName("b")[1].innerHTML, "99");
        });
    }
    QUnit.config.done = [];
    QUnit.done(secondAfterDoneTest);

    QUnit.module("Synchronous test after load of page");

    asyncTest('Async test', function() {
        start();
        for (var i = 1; i < 100; i++) {
            ok(i);
        }
    });

    QUnit.test(testName, 99, function() {
        for (var i = 1; i < 100; i++) {
            ok(i);
        }
    });

    // We need two of these types of tests in order to ensure that assertions
    // don't move between tests.
    QUnit.test(testName + ' 2', 99, function() {
        for (var i = 1; i < 100; i++) {
            ok(i);
        }
    });
}
// Example QUnit.extend call taken from: http://api.qunitjs.com/QUnit.extend/
QUnit.test( "QUnit.extend", function( assert ) {
  var base = {
    a: 1,
    b: 2,
    z: 3
  };
  QUnit.extend( base, {
    b: 2.5,
    c: 3,
    z: undefined
  } );
  
  // Change from documentation example to satisfy tsc:
  var newBase = <any> base;
 
  assert.equal( newBase.a, 1, "Unspecified values are not modified" );
  assert.equal( newBase.b, 2.5, "Existing values are updated" );
  assert.equal( newBase.c, 3, "New values are defined" );
  assert.ok( !( "z" in newBase ), "Values specified as `undefined` are removed" );
});

// Example QUnit.extend usage taken from: https://stackoverflow.com/a/33439774/419956
QUnit.extend(QUnit.assert, {
    matches: function (actual, regex, message) {
        var success = !!regex && !!actual && (new RegExp(regex)).test(actual);
        var expected = "String matching /" + regex.toString() + "/";
        this.push(success, actual, expected, message);
    }
});
