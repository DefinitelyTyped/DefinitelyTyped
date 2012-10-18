/// <reference path="../Definitions/qunit-1.10.0.d.ts" />

QUnit.test( "deepEqual test", function() {
    var obj = { foo: "bar" };
 
    QUnit.deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});

test( "deepEqual test", function() {
    var obj = { foo: "bar" };
 
    deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});

QUnit.test( "a test", function() {
    QUnit.equal( 1, "1", "String '1' and number 1 have the same value" );
});

test( "a test", function() {
    equal( 1, "1", "String '1' and number 1 have the same value" );
});

QUnit.test( "equal test", function() {
    QUnit.equal( 0, 0, "Zero; equal succeeds" );
    QUnit.equal( "", 0, "Empty, Zero; equal succeeds" );
    QUnit.equal( "", "", "Empty, Empty; equal succeeds" );
    QUnit.equal( 0, 0, "Zero, Zero; equal succeeds" );
 
    QUnit.equal( "three", 3, "Three, 3; equal fails" );
    QUnit.equal( null, false, "null, false; equal fails" );
});

test( "equal test", function() {
    equal( 0, 0, "Zero; equal succeeds" );
    equal( "", 0, "Empty, Zero; equal succeeds" );
    equal( "", "", "Empty, Empty; equal succeeds" );
    equal( 0, 0, "Zero, Zero; equal succeeds" );
 
    equal( "three", 3, "Three, 3; equal fails" );
    equal( null, false, "null, false; equal fails" );
});

QUnit.test( "notDeepEqual test", function() {
    var obj = { foo: "bar" };
 
    QUnit.notDeepEqual( obj, { foo: "bla" }, "Different object, same key, different value, not equal" );
});

test( "notDeepEqual test", function() {
    var obj = { foo: "bar" };
 
    notDeepEqual( obj, { foo: "bla" }, "Different object, same key, different value, not equal" );
});

QUnit.test( "a test", function() {
    QUnit.notEqual( 1, "2", "String '2' and number 1 don't have the same value" );
});

test( "a test", function() {
    notEqual( 1, "2", "String '2' and number 1 don't have the same value" );
});

QUnit.test( "a test", function() {
    QUnit.notStrictEqual( 1, "1", "String '1' and number 1 don't have the same value" );
});

test( "a test", function() {
    notStrictEqual( 1, "1", "String '1' and number 1 don't have the same value" );
});

QUnit.test( "ok test", function() {
    QUnit.ok( true, "true succeeds" );
    QUnit.ok( "non-empty", "non-empty string succeeds" );
 
    QUnit.ok( false, "false fails" );
    QUnit.ok( 0, "0 fails" );
    QUnit.ok( NaN, "NaN fails" );
    QUnit.ok( "", "empty string fails" );
    QUnit.ok( null, "null fails" );
    QUnit.ok( undefined, "undefined fails" );
});

test( "ok test", function() {
    ok( true, "true succeeds" );
    ok( "non-empty", "non-empty string succeeds" );
 
    ok( false, "false fails" );
    ok( 0, "0 fails" );
    ok( NaN, "NaN fails" );
    ok( "", "empty string fails" );
    ok( null, "null fails" );
    ok( undefined, "undefined fails" );
});

QUnit.test( "strictEqual test", function() {
    QUnit.strictEqual( 1, 1, "1 and 1 are the same value and type" );
});

test( "strictEqual test", function() {
    strictEqual( 1, 1, "1 and 1 are the same value and type" );
});

QUnit.test( "a test", function() {
    QUnit.stop();
    QUnit.start();
});

test( "a test", function() {
    stop();
	start();
});

QUnit.config.autostart = false;
QUnit.start();

QUnit.config.urlConfig.push({
    id: "min",
    label: "Minified source",
    tooltip: "Load minified source files instead of the regular unminified ones."
});

QUnit.asyncTest( "asynchronous test: one second later!", function() {
    QUnit.expect( 1 );
});

asyncTest( "asynchronous test: one second later!", function() {
    expect( 1 );
});

QUnit.module( "group a" );
QUnit.test( "a basic test example", function() {
    QUnit.ok( true, "this test is fine" );
});
QUnit.test( "a basic test example 2", function() {
    QUnit.ok( true, "this test is fine" );
});
 
QUnit.module( "group b" );
QUnit.test( "a basic test example 3", function() {
    QUnit.ok( true, "this test is fine" );
});
QUnit.test( "a basic test example 4", function() {
    QUnit.ok( true, "this test is fine" );
});

QUnit.module( "module A", {
    setup: function() {
        // prepare something for all following tests
    },
    teardown: function() {
        // clean up after each test
    }
});

QUnit.test( "a test", function( assert ) {
 
    function square( x ) {
        return x * x;
    }
 
    var result = square( 2 );
 
    assert.equal( result, 4, "square(2) equals 4" );
});
