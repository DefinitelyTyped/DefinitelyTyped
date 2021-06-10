import * as QUnit from 'qunit';

QUnit.module( "basic tests for importing QUnit", function( hooks ) {

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
