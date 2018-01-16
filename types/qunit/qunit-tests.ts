QUnit.module( "group a" );

QUnit.test( "a basic test example", function( assert ) {
  assert.ok( true, "this test is fine" );
});
QUnit.test( "a basic test example 2", function( assert ) {
  assert.ok( true, "this test is fine" );
});

QUnit.module( "group b" );
QUnit.test( "a basic test example 3", function( assert ) {
  assert.ok( true, "this test is fine" );
});
QUnit.test( "a basic test example 4", function( assert ) {
  assert.ok( true, "this test is fine" );
});


QUnit.module( "module a", function() {
  QUnit.test( "a basic test example", function( assert ) {
    assert.ok( true, "this test is fine" );
  });
});

QUnit.module( "module b", function() {
  QUnit.test( "a basic test example 2", function( assert ) {
    assert.ok( true, "this test is fine" );
  });

  QUnit.module( "nested module b.1", function() {

    // This test will be prefixed with the following module label:
    // "module b > nested module b.1"
    QUnit.test( "a basic test example 3", function( assert ) {
      assert.ok( true, "this test is fine" );
    });
  });
});

QUnit.module( "module A", {
  before: function() {
    // prepare something once for all tests
  },
  beforeEach: function() {
    // prepare something before each test
  },
  afterEach: function() {
    // clean up after each test
  },
  after: function() {
    // clean up once after all tests are done
  }
});

QUnit.module( "Machine Maker", {
  beforeEach: function() {
    let Maker: any = () => {};
    this.maker = new Maker();
    this.parts = [ "wheels", "motor", "chassis" ];
  }
});

QUnit.test( "makes a robot", function( assert ) {
  this.parts.push( "arduino" );
  assert.equal( this.maker.build( this.parts ), "robot" );
  assert.deepEqual( this.maker.made, [ "robot" ] );
});

QUnit.test( "makes a car", function( assert ) {
  assert.equal( this.maker.build( this.parts ), "car" );
  this.maker.duplicate();
  assert.deepEqual( this.maker.made, [ "car", "car" ] );
});

QUnit.module( "grouped tests argument hooks", function( hooks ) {

  hooks.beforeEach( function( assert ) {
    assert.ok( true, "beforeEach called" );
  } );

  hooks.afterEach( function( assert ) {
    assert.ok( true, "afterEach called" );
  } );

  QUnit.test( "call hooks", function( assert ) {
    assert.expect( 2 );
  } );

  QUnit.module( "stacked hooks", function( hooks ) {

    // This will run after the parent module's beforeEach hook
    hooks.beforeEach( function( assert ) {
      assert.ok( true, "nested beforeEach called" );
    } );

    // This will run before the parent module's afterEach
    hooks.afterEach( function( assert ) {
      assert.ok( true, "nested afterEach called" );
    } );

    QUnit.test( "call hooks", function( assert ) {
      assert.expect( 4 );
    } );
  } );
} );


QUnit.test( "`ok` assertion defined in the callback parameter", function( assert ) {
 assert.ok( true, "on the object passed to the `test` function" );
});

QUnit.begin(function( details ) {
  console.log( "Test amount:", details.totalTests );
});

QUnit.config.autostart = false;
// require(
//   [ "tests/testModule1", "tests/testModule2" ],
  (function() {
    QUnit.start();
  }())
// );

QUnit.test("some test", function() {
  // a few regular assertions
  // then a call to another tool
  let codeUnderTest = () => {};
  let speedTest = (name: string, cb: () => void) => cb();
  speedTest( QUnit.config.current.testName, codeUnderTest );
});

QUnit.config.urlConfig.push({
  id: "min",
  label: "Minified source",
  tooltip: "Load minified source files instead of the regular unminified ones."
});

QUnit.config.urlConfig.push({
  id: "jquery",
  label: "jQuery version",
  value: [ "1.7.2", "1.8.3", "1.9.1" ],
  tooltip: "What jQuery Core version to test against"
});

QUnit.done(function( details ) {
  console.log( "Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
});

QUnit.log(function( obj ) {

    // Parse some stuff before sending it.
    var actual = QUnit.dump.parse( obj.actual );
    var expected = QUnit.dump.parse( obj.expected );

    // Send it.
    //   sendMessage( "qunit.log", obj.result, actual, expected, obj.message, obj.source );
    console.log("qunit.log", obj.result, actual, expected, obj.message, obj.source);
});

var qHeader = document.getElementById( "qunit-header" ),
  parsed = QUnit.dump.parse( qHeader );

console.log( parsed );

var input: any = {
  parts: {
    front: [],
    back: []
  }
};
QUnit.dump.maxDepth = 1;
console.log( QUnit.dump.parse( input ) );
// Logs: { "parts": [object Object] }

QUnit.dump.maxDepth = 2;
console.log( QUnit.dump.parse( input ) );
// Logs: { "parts": { "back": [object Array], "front": [object Array] } }

QUnit.test( "QUnit.extend", function( assert ) {
  var base: any = {
    a: 1,
    b: 2,
    z: 3
  };
  QUnit.extend( base, {
    b: 2.5,
    c: 3,
    z: undefined
  } );

  assert.equal( base.a, 1, "Unspecified values are not modified" );
  assert.equal( base.b, 2.5, "Existing values are updated" );
  assert.equal( base.c, 3, "New values are defined" );
  assert.ok( !( "z" in base ), "Values specified as `undefined` are removed" );
});

QUnit.log(function( details ) {
  console.log( "Log: ", details.result, details.message );
});

QUnit.log(function( details ) {
  if ( details.result ) {
    return;
  }
  var loc = details.module + ": " + details.name + ": ",
    output = "FAILED: " + loc + ( details.message ? details.message + ", " : "" );

  if ( details.actual ) {
    output += "expected: " + details.expected + ", actual: " + details.actual;
  }
  if ( details.source ) {
    output += ", " + details.source;
  }
  console.log( output );
});

QUnit.moduleDone(function( details ) {
  console.log( "Finished running: ", details.name, "Failed/total: ", details.failed, details.total );
});

QUnit.moduleStart(function( details ) {
  console.log( "Now running: ", details.name );
});

let Robot: any = () => {};

QUnit.module( "robot", {
  beforeEach: function() {
    this.robot = new Robot();
  }
});

QUnit.test( "say", function( assert ) {
  assert.ok( false, "I'm not quite ready yet" );
});

QUnit.test( "stomp", function( assert ) {
  assert.ok( false, "I'm not quite ready yet" );
});

// You're currently working on the laser feature, so we run only this test
QUnit.only( "laser", function( assert ) {
  assert.ok( this.robot.laser() );
});


QUnit.module( "robot", {
  beforeEach: function() {
    this.robot = new Robot();
  }
});

QUnit.test( "say", function( assert ) {
  assert.strictEqual( this.robot.say(), "Exterminate!" );
});

// Robot doesn't have a laser method, yet, skip this test
// Will show up as skipped in the results
QUnit.skip( "laser", function( assert ) {
  assert.ok( this.robot.laser() );
});

QUnit.log( function( details ) {
  if ( details.result ) {

    // 5 is the line reference for the assertion method, not the following line.
    console.log( QUnit.stack( 5 ) );
  }
} );

QUnit.test( "foo", function( assert ) {

  // the log callback will report the position of the following line.
  assert.ok( true );
} );

QUnit.config.autostart = false;

// require(["test/tests1.js", "test/tests2.js"], function() {
  (() => { QUnit.start(); })()
// });

QUnit.test( "a test", function( assert ) {

  function square( x: number ) {
    return x * x;
  }

  var result = square( 2 );

  assert.equal( result, 4, "square(2) equals 4" );
});

// declare var Promise: any;
QUnit.test( "a Promise-returning test", function( assert ) {
  assert.expect( 0 );
  var thenable = new Promise(function( resolve: any, reject: any ) {
    setTimeout(function() {
      resolve( "result" );
    }, 500 );
  });
  return thenable;
});


declare var $: any;
QUnit.test( "assert.async() test", function( assert ) {
  var done = assert.async();
  var input = $( "#test-input" ).focus();
  setTimeout(function() {
    assert.equal( document.activeElement, input[0], "Input was focused" );
    done();
  });
});

QUnit.test( "two async calls", function( assert ) {
  assert.expect( 2 );

  var done1 = assert.async();
  var done2 = assert.async();
  setTimeout(function() {
    assert.ok( true, "test resumed from async operation 1" );
    done1();
  }, 500 );
  setTimeout(function() {
    assert.ok( true, "test resumed from async operation 2" );
    done2();
  }, 150);
});

QUnit.test( "multiple call done()", function( assert ) {
  assert.expect( 3 );
  var done = assert.async( 3 );

  setTimeout(function() {
    assert.ok( true, "first call done." );
    done();
  }, 500 );

  setTimeout(function() {
    assert.ok( true, "second call done." );
    done();
  }, 500 );

  setTimeout(function() {
    assert.ok( true, "third call done." );
    done();
  }, 500 );
});


QUnit.test( "deepEqual test", function( assert ) {
  var obj = { foo: "bar" };

  assert.deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});

QUnit.test( "ok test", function( assert ) {
  assert.ok( true, "true succeeds" );
  assert.ok( "non-empty", "non-empty string succeeds" );

  assert.ok( false, "false fails" );
  assert.ok( 0, "0 fails" );
  assert.ok( NaN, "NaN fails" );
  assert.ok( "", "empty string fails" );
  assert.ok( null, "null fails" );
  assert.ok( undefined, "undefined fails" );
});

QUnit.test( "a test", function( assert ) {
  assert.equal( 1, "1", "String '1' and number 1 have the same value" );
});


QUnit.test( "equal test", function( assert ) {
  assert.equal( 0, 0, "Zero, Zero; equal succeeds" );
  assert.equal( "", 0, "Empty, Zero; equal succeeds" );
  assert.equal( "", "", "Empty, Empty; equal succeeds" );

  assert.equal( "three", 3, "Three, 3; equal fails" );
  assert.equal( null, false, "null, false; equal fails" );
});

QUnit.test( "a test", function( assert ) {
  assert.expect( 2 );

  function calc( x: number, operation: (x:number)=> number ) {
    return operation( x );
  }

  var result = calc( 2, function( x ) {
    assert.ok( true, "calc() calls operation function" );
    return x * x;
  });

  assert.equal( result, 4, "2 squared equals 4" );
});


QUnit.test( "notDeepEqual test", function( assert ) {
  var obj = { foo: "bar" };

  assert.notDeepEqual( obj, { foo: "bla" }, "Different object, same key, different value, not equal" );
});


QUnit.test( "a test", function( assert ) {
  assert.notEqual( 1, "2", "String '2' and number 1 don't have the same value" );
});

QUnit.test( "notOk test", function( assert ) {
  assert.notOk( false, "false succeeds" );
  assert.notOk( "", "empty string succeeds" );
  assert.notOk( NaN, "NaN succeeds" );
  assert.notOk( null, "null succeeds" );
  assert.notOk( undefined, "undefined succeeds" );

  assert.notOk( true, "true fails" );
  assert.notOk( 1, "1 fails" );
  assert.notOk( "not-empty", "not-empty string fails" );
});


QUnit.test( "notPropEqual test", function( assert ) {
  class Foo {
    x: any;
    y: any;
    z: any;
    constructor( x: any, y: any, z: any ) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    doA = function () {};
    doB = function () {};
    bar = 'prototype';
  }
  var foo = new Foo( 1, "2", [] );
  var bar = new Foo( "1", 2, {} );
  assert.notPropEqual( foo, bar, "Properties values are strictly compared." );
});


QUnit.test( "a test", function( assert ) {
  assert.notStrictEqual( 1, "1", "String '1' and number 1 have the same value but not the same type" );
});

QUnit.test( "propEqual test", function( assert ) {
  class Foo {
    x: any;
    y: any;
    z: any;
    constructor( x: any, y: any, z: any ) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    doA = function () {};
    doB = function () {};
    bar = 'prototype';
  }

  var foo = new Foo( 1, "2", [] );
  var bar: any = {
    x : 1,
    y : "2",
    z : []
  };
  assert.propEqual( foo, bar, "Strictly the same properties without comparing objects constructors." );
});

// QUnit.assert['mod2'] = function( value: any, expected: any, message: string ): any {
//     var actual = value % 2;
//     this.pushResult({
//         result: actual === expected,
//         actual: actual,
//         expected: expected,
//         message: message
//     });
// };

// QUnit.test( "mod2", function( assert ) {
//     assert.expect( 2 );

//     assert['mod2']( 2, 0, "2 % 2 == 0" );
//     assert['mod2']( 3, 1, "3 % 2 == 1" );
// });

QUnit.test( "throws", function( assert ) {

 class CustomError {
   message: string;
   constructor(message: string) {
      this.message = message;
   }
   toString = function() {
      return this.message;
    }
 }

  assert.throws(
    function() {
      throw "error"
    },
    "throws with just a message, not using the 'expected' argument"
  );

  assert.throws(
    function() {
      throw new CustomError("some error description");
    },
    /description/,
    "raised error message contains 'description'"
  );

  assert.throws(
    function() {
      throw new Error();
    },
    CustomError,
    "raised error is an instance of CustomError"
  );

  assert.throws(
    function() {
      throw new CustomError("some error description");
    },
    new CustomError("some error description"),
    "raised error instance matches the CustomError instance"
  );

  assert.throws(
    function() {
      throw new CustomError("some error description");
    },
    function( err: any ) {
      return err.toString() === "some error description";
    },
    "raised error instance satisfies the callback function"
  );
});

QUnit.module( "module", {
  beforeEach: function( assert ) {
    assert.ok( true, "one extra assert per test" );
  }, afterEach: function( assert ) {
    assert.ok( true, "and one extra assert after each test" );
  }
});
QUnit.test( "test with beforeEach and afterEach", function( assert ) {
  assert.expect( 2 );
});
