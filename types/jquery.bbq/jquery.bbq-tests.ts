/// <reference types="qunit" />

import $ = require('jquery');

// ************** Tests to jquery JQueryParam interface
var myObject = {
  a: {
    one: 1,
    two: 2,
    three: 3
  },
  b: [1,2,3]
};
var recursiveEncoded = $.param(myObject);
var recursiveDecoded = decodeURIComponent($.param(myObject));
var shallowEncoded = $.param(myObject, true);
var shallowDecoded = decodeURIComponent(shallowEncoded);

var params = { width:1680, height:1050 };
var str = jQuery.param(params);
$("#results").text(str);

// <=1.3.2:
$.param({ a: [2,3,4] }) // "a=2&a=3&a=4"
// >=1.4:
$.param({ a: [2,3,4] }) // "a[]=2&a[]=3&a[]=4"

// <=1.3.2:
$.param({ a: { b:1,c:2 }, d: [3,4,{ e:5 } as any] }) // "a=[object+Object]&d=3&d=4&d=[object+Object]"
// >=1.4:
$.param({ a: { b:1,c:2 }, d: [3,4,{ e:5 } as any] }) // "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"
// *************************************************************

$(function(){ // START CLOSURE


var old_jquery = $.fn.jquery < '1.4',
  is_chrome = /chrome/i.test( navigator.userAgent ),
  params_init = 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=1',
  init_url,
  ajaxcrawlable_init = $.param.fragment.ajaxCrawlable(),
  aps = Array.prototype.slice;

if ( $.param.querystring() !== params_init || $.param.fragment() !== params_init ) {
  init_url = window.location.href;
  init_url = $.param.querystring( init_url, params_init, 2 );
  init_url = $.param.fragment( init_url, params_init, 2 );
  window.location.href = init_url;
}

$('#jq_version').html( $.fn.jquery );

function notice( txt? ) {
  if ( txt ) {
    $('#notice').html( txt );
  } else {
    $('#notice').hide();
  }
};

function run_many_tests(...args: any[]) {
  var tests = aps.call( arguments ),
    delay = typeof tests[0] === 'number' && tests.shift(),
    func_each = $.isFunction( tests[0] ) && tests.shift(),
    func_done = $.isFunction( tests[0] ) && tests.shift(),
    result;

  function set_result( i, test ) {
    result = $.isArray( test )
      ? func_each.apply( this, test )
      : $.isFunction( test )
        ? test( result )
        : '';
  };

  if ( delay ) {
    stop();

    (function loopy(){
      //test && test.func && test.func( result );
      if ( tests.length ) {
        set_result( 0, tests.shift() );
        setTimeout( loopy, delay );
      } else {
        func_done && func_done();
        QUnit.start();
      }
    })();

  } else {
    $.each( tests, set_result );
    func_done && func_done();
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

QUnit.module( 'jQuery.param' );

var params_obj = { a:['4','5','6'], b:{x:['7'], y:'8', z:['9','0','true','false','undefined','']}, c:'1' },
  params_obj_coerce = { a:[4,5,6] },//, b:{x:[7], y:8, z:[9,0,true,false,undefined,'']}, c:1 },
  params_str = params_init,
  params_str_old = 'a=4&a=5&a=6&b=[object+Object]&c=1',

  // If a params fragment starts with ! and BBQ is not in ajaxCrawlable mode,
  // things can get very ugly, very quickly.
  params_obj_bang = { "!a":['4'], a:['5','6'], b:{x:['7'], y:'8', z:['9','0','true','false','undefined','']}, c:'1' },
  params_obj_bang_coerce = { "!a":[4], a:[5,6] };//, b:{x:[7], y:8, z:[9,0,true,false,undefined,'']}, c:1 };

QUnit.test( 'jQuery.param.sorted', function() {
  var tests: any[] = [
    {
      obj: {z:1,b:2,ab:3,bc:4,ba:5,aa:6,a1:7,x:8},
      traditional: false,
      expected: 'a1=7&aa=6&ab=3&b=2&ba=5&bc=4&x=8&z=1'
    },
    {
      obj: {z:1,b:[6,5,4],x:2,a:[3,2,1]},
      traditional: false,
      expected: 'a[]=3&a[]=2&a[]=1&b[]=6&b[]=5&b[]=4&x=2&z=1',
      expected_old: 'a=3&a=2&a=1&b=6&b=5&b=4&x=2&z=1'
    },
    {
      obj: {z:1,b:[6,5,4],x:2,a:[3,2,1]},
      traditional: true,
      expected: 'a=3&a=2&a=1&b=6&b=5&b=4&x=2&z=1'
    },
    {
      obj: {a:[[4,[5,6] as any] as any,[[7,8] as any,9] as any]},
      traditional: false,
      expected: 'a[0][]=4&a[0][1][]=5&a[0][1][]=6&a[1][0][]=7&a[1][0][]=8&a[1][]=9',
      expected_old: 'a=4,5,6&a=7,8,9' // obviously not great, but that's the way jQuery used to roll
    }
  ];

  if ( $.fn.jquery != '1.4.1' ) {
    // this explodes in jQuery 1.4.1
    tests.push({
      obj: {z:1,'b[]':[6,5,4],x:2,'a[]':[3,2,1]},
      obj_alt: {z:1,b:[6,5,4],x:2,a:[3,2,1]},
      traditional: false,
      expected: 'a[]=3&a[]=2&a[]=1&b[]=6&b[]=5&b[]=4&x=2&z=1'
    });
  }

  QUnit.assert.expect( tests.length * 2 + 6 );

  $.each( tests, function(i,test: any){
    var unsorted = $.param( test.obj, test.traditional ),
      sorted = $.param.sorted( test.obj, test.traditional );

    QUnit.assert.equal( decodeURIComponent( sorted ), old_jquery && test.expected_old || test.expected, 'params should be sorted' );
    QUnit.assert.deepEqual( $.deparam( unsorted, true ), $.deparam( sorted, true ), 'sorted params should deparam the same as unsorted params' )
  });

  QUnit.assert.equal( $.param.fragment( 'foo', '#b=2&a=1' ), 'foo#a=1&b=2', 'params should be sorted' );
  QUnit.assert.equal( $.param.fragment( 'foo', '#b=2&a=1', 1 ), 'foo#a=1&b=2', 'params should be sorted' );
  QUnit.assert.equal( $.param.fragment( 'foo', '#b=2&a=1', 2 ), 'foo#b=2&a=1', 'params should NOT be sorted' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1' ), 'foo#a=1&b=2&c=3', 'params should be sorted' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1', 1 ), 'foo#a=4&b=2&c=3', 'params should be sorted' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1', 2 ), 'foo#b=2&a=1', 'params should NOT be sorted' );

});

QUnit.test( 'jQuery.param.querystring', function() {
  QUnit.assert.expect( 11 );

  QUnit.assert.equal( $.param.querystring( 'http://example.com/' ), '', 'properly identifying params' );
  QUnit.assert.equal( $.param.querystring( 'http://example.com/?foo' ),'foo', 'properly identifying params' );
  QUnit.assert.equal( $.param.querystring( 'http://example.com/?foo#bar' ),'foo', 'properly identifying params' );
  QUnit.assert.equal( $.param.querystring( 'http://example.com/?foo#bar?baz' ),'foo', 'properly identifying params' );
  QUnit.assert.equal( $.param.querystring( 'http://example.com/#foo' ),'', 'properly identifying params' );
  QUnit.assert.equal( $.param.querystring( 'http://example.com/#foo?bar' ),'', 'properly identifying params' );

  QUnit.assert.equal( $.param.querystring(), params_str, 'params string from window.location' );
  QUnit.assert.equal( $.param.querystring( '?' + params_str ), params_str, 'params string from url' );
  QUnit.assert.equal( $.param.querystring( 'foo.html?' + params_str ), params_str, 'params string from url' );
  QUnit.assert.equal( $.param.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str ), params_str, 'params string from url' );
  QUnit.assert.equal( $.param.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str + '#bippity-boppity-boo' ), params_str, 'params string from url' );
});

QUnit.test( 'jQuery.param.querystring - build URL', function() {
  QUnit.assert.expect( 10 );

  function fake_encode( params_str ) {
    return '?' + $.map( params_str.split('&'), encodeURIComponent ).join('&').replace( /%3D/g, '=' ).replace( /%2B/g, '+' );
  }

  var pre = 'http://a:b@example.com:1234/foo.html',
    post = '#get-on-the-floor',
    current_url = pre + post;

  run_many_tests(

    // execute this for each array item
    function(){
      current_url = $.param.querystring.apply( this, [ current_url ].concat( aps.call( arguments ) ) );
    },

    // tests:

    [ { a:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?a=2' + post, '$.param.querystring( url, Object )' );
    },

    [ { b:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?a=2&b=2' + post, '$.param.querystring( url, Object )' );
    },

    [ { c:true, d:false, e:'undefined', f:'' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?a=2&b=2&c=true&d=false&e=undefined&f=' + post, '$.param.querystring( url, Object )' );
    },

    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,<any>'true',<any>'false',<any>'undefined',<any>'']} }, 2 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, Object, 2 )' );
    },

    [ { a:'1', c:'2' } as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, Object, 1 )' );
    },

    [ 'foo=1' ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, String )' );
    },

    [ 'foo=2&bar=3' as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, String, 1 )' );
    },

    [ 'http://example.com/test.html?/path/to/file.php#the-cow-goes-moo' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?/path/to/file.php' + post, '$.param.querystring( url, String, 2 )' );
    },

    [ '?another-example' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?another-example' + post, '$.param.querystring( url, String, 2 )' );
    },

    [ 'i_am_out_of_witty_strings' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?i_am_out_of_witty_strings' + post, '$.param.querystring( url, String, 2 )' );
    }

  );

});

QUnit.test( 'jQuery.param.fragment', function() {
  QUnit.assert.expect( 29 );

  QUnit.assert.equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#bar' ),'bar', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#bar?baz' ),'bar?baz', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#foo' ),'foo', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#foo?bar' ),'foo?bar', 'properly identifying params' );

  QUnit.assert.equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#!bar' ),'!bar', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#!bar?baz' ),'!bar?baz', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#!foo' ),'!foo', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#!foo?bar' ),'!foo?bar', 'properly identifying params' );

  QUnit.assert.equal( $.param.fragment(), params_str, 'params string from window.location' );
  QUnit.assert.equal( $.param.fragment( '#' + params_str ), params_str, 'params string from url' );
  QUnit.assert.equal( $.param.fragment( 'foo.html#' + params_str ), params_str, 'params string from url' );
  QUnit.assert.equal( $.param.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str ), params_str, 'params string from url' );
  QUnit.assert.equal( $.param.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str ), params_str, 'params string from url' );

  $.param.fragment.ajaxCrawlable( true );

  QUnit.assert.equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#bar' ),'bar', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#bar?baz' ),'bar?baz', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#foo' ),'foo', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#foo?bar' ),'foo?bar', 'properly identifying params' );

  QUnit.assert.equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#!bar' ),'bar', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/?foo#!bar?baz' ),'bar?baz', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#!foo' ),'foo', 'properly identifying params' );
  QUnit.assert.equal( $.param.fragment( 'http://example.com/#!foo?bar' ),'foo?bar', 'properly identifying params' );

  $.param.fragment.ajaxCrawlable( false );

});

QUnit.test( 'jQuery.param.fragment - build URL', function() {
  QUnit.assert.expect( 40 );

  function fake_encode( params_str ) {
    return '#' + $.map( params_str.split('&'), encodeURIComponent ).join('&').replace( /%3D/g, '=' ).replace( /%2B/g, '+' );
  }

  var pre = 'http://a:b@example.com:1234/foo.html?and-dance-with-me',
    current_url = pre;

  run_many_tests(

    // execute this for each array item
    function(){
      current_url = $.param.fragment.apply( this, [ current_url ].concat( aps.call( arguments ) ) );
    },

    // tests:

    [ { a:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#a=2', '$.param.fragment( url, Object )' );
    },

    [ { b:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#a=2&b=2', '$.param.fragment( url, Object )' );
    },

    [ { c:true, d:false, e:'undefined', f:'' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#a=2&b=2&c=true&d=false&e=undefined&f=', '$.param.fragment( url, Object )' );
    },

    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, Object, 2 )' );
    },

    [ { a:'1', c:'2' } as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, Object, 1 )' );
    },

    [ 'foo=1' ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, String )' );
    },

    [ 'foo=2&bar=3' as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, String, 1 )' );
    },

    [ 'http://example.com/test.html?the-cow-goes-moo#/path/to/file.php' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#/path/to/file.php', '$.param.fragment( url, String, 2 )' );
    },

    [ '#another-example' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#another-example', '$.param.fragment( url, String, 2 )' );
    },

    [ 'i_am_out_of_witty_strings' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#i_am_out_of_witty_strings', '$.param.fragment( url, String, 2 )' );
    }

  );

  $.param.fragment.ajaxCrawlable( true );

  QUnit.assert.equal( $.param.fragment( 'foo', {} ) , 'foo#!', '$.param.fragment( url, Object )' );
  QUnit.assert.equal( $.param.fragment( 'foo', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.param.fragment( url, Object )' );
  QUnit.assert.equal( $.param.fragment( 'foo#', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.param.fragment( url, Object )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.param.fragment( url, Object )' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, Object )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, Object )' );

  QUnit.assert.equal( $.param.fragment( 'foo', '' ) , 'foo#!', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );

  QUnit.assert.equal( $.param.fragment( 'foo', '#' ) , 'foo#!', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );

  QUnit.assert.equal( $.param.fragment( 'foo', '#!' ) , 'foo#!', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );

  $.param.fragment.ajaxCrawlable( false );

  // If a params fragment starts with ! and BBQ is not in ajaxCrawlable mode,
  // things can get very ugly, very quickly.
  QUnit.assert.equal( $.param.fragment( 'foo', '#!' ) , 'foo#!=', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!=&!b=2&a=1', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&a=1&c=3', '$.param.fragment( url, String )' );
  QUnit.assert.equal( $.param.fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&!c=3&a=1', '$.param.fragment( url, String )' );

});

QUnit.test( 'jQuery.param.fragment.ajaxCrawlable', function() {
  QUnit.assert.expect( 5 );

  QUnit.assert.equal( ajaxcrawlable_init, false, 'ajaxCrawlable is disabled by default' );
  QUnit.assert.equal( $.param.fragment.ajaxCrawlable( true ), true, 'enabling ajaxCrawlable should return true' );
  QUnit.assert.equal( $.param.fragment.ajaxCrawlable(), true, 'ajaxCrawlable is now enabled' );
  QUnit.assert.equal( $.param.fragment.ajaxCrawlable( false ), false, 'disabling ajaxCrawlable should return false' );
  QUnit.assert.equal( $.param.fragment.ajaxCrawlable(), false, 'ajaxCrawlable is now disabled' );
});

QUnit.test( 'jQuery.param.fragment.noEscape', function() {
  QUnit.assert.expect( 2 );

  QUnit.assert.equal( $.param.fragment( '#', { foo: '/a,b@c$d+e&f=g h!' } ), '#foo=/a,b%40c%24d%2Be%26f%3Dg+h!', '/, should be unescaped, everything else but space (+) should be urlencoded' );

  $.param.fragment.ajaxCrawlable( true );

  QUnit.assert.equal( $.param.fragment( '#', { foo: '/a,b@c$d+e&f=g h!' } ), '#!foo=/a,b%40c%24d%2Be%26f%3Dg+h!', '/, should be unescaped, everything else but ! and space (+) should be urlencoded' );

  $.param.fragment.ajaxCrawlable( false );
});



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

QUnit.module( 'jQuery.deparam' );

QUnit.test( 'jQuery.deparam - 1.4-style params', function() {
  QUnit.assert.expect( 2 );
  QUnit.assert.deepEqual( $.deparam( params_str ), params_obj, '$.deparam( String )' );
  QUnit.assert.deepEqual( $.deparam( params_str, true ), params_obj_coerce, '$.deparam( String, true )' );
});

QUnit.test( 'jQuery.deparam - pre-1.4-style params', function() {
  var params_str = 'a=1&a=2&a=3&b=4&c=5&c=6&c=true&c=false&c=undefined&c=&d=7',
    params_obj = { a:['1','2','3'], b:'4', c:['5','6','true','false','undefined',''], d:'7' },
    params_obj_coerce = { a:[1,2,3], b:4, c:[5,6,true,false,undefined,''], d:7 };

  QUnit.assert.expect( 2 );
  QUnit.assert.deepEqual( $.deparam( params_str ), params_obj, '$.deparam( String )' );
  QUnit.assert.deepEqual( $.deparam( params_str, true ), params_obj_coerce, '$.deparam( String, true )' );
});

QUnit.test( 'jQuery.deparam.querystring', function() {
  QUnit.assert.expect( 12 );

  QUnit.assert.deepEqual( $.deparam.querystring(), params_obj, 'params obj from window.location' );
  QUnit.assert.deepEqual( $.deparam.querystring( /*true*/ ), params_obj_coerce, 'params obj from window.location, coerced' );
  QUnit.assert.deepEqual( $.deparam.querystring( params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.querystring( params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.querystring( '?' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.querystring( '?' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.querystring( 'foo.html?' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.querystring( 'foo.html?' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str + '#bippity-boppity-boo' ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str + '#bippity-boppity-boo', true ), params_obj_coerce, 'params obj from string, coerced' );
});

QUnit.test( 'jQuery.deparam.fragment', function() {
  QUnit.assert.expect( 36 );

  QUnit.assert.deepEqual( $.deparam.fragment(), params_obj, 'params obj from window.location' );
  QUnit.assert.deepEqual( $.deparam.fragment( /*true*/ ), params_obj_coerce, 'params obj from window.location, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( params_str, true ), params_obj_coerce, 'params obj from string, coerced' );

  QUnit.assert.deepEqual( $.deparam.fragment( '#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( '#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );

  // If a params fragment starts with ! and BBQ is not in ajaxCrawlable mode,
  // things can get very ugly, very quickly.
  QUnit.assert.deepEqual( $.deparam.fragment( '#!' + params_str ), params_obj_bang, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( '#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#!' + params_str ), params_obj_bang, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str ), params_obj_bang, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str ), params_obj_bang, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );

  $.param.fragment.ajaxCrawlable( true );

  QUnit.assert.deepEqual( $.deparam.fragment( '#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( '#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );

  QUnit.assert.deepEqual( $.deparam.fragment( '#!' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( '#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#!' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'foo.html#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str ), params_obj, 'params obj from string' );
  QUnit.assert.deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );

  $.param.fragment.ajaxCrawlable( false );
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

QUnit.module( 'jQuery.fn' );

$.elemUrlAttr({ span: 'arbitrary_attr' });
var test_elems = 'a form link span'.split(' ');

function init_url_attr( _, url ) {
  var container = $('<div/>').hide().appendTo('body');
  $.each( test_elems, function(i,v){
    $('<' + v + '/>')
      .attr( $.elemUrlAttr()[ v ], url )
      .appendTo( container );
  });
  return container;
};

function test_url_attr( container ) {
  var url;

  $.each( test_elems, function(i,v){
    var val = container.children( v ).attr( $.elemUrlAttr()[ v ] );
    if ( !url ) {
      url = val;
    } else if ( val !== url ) {
      url = -1;
    }
  });

  return url;
};

QUnit.test( 'jQuery.fn.querystring', function() {
  QUnit.assert.expect( 60 );

  function fake_encode( params_str ) {
    return '?' + $.map( params_str.split('&'), encodeURIComponent ).join('&').replace( /%3D/g, '=' ).replace( /%2B/g, '+' );
  }

  var pre = 'http://a:b@example.com:1234/foo.html',
    post = '#get-on-the-floor',
    current_url = pre + post;

  run_many_tests(

    // execute this for each array item
    function(){
      var container,
        elems;

      container = init_url_attr( container, current_url );
      elems = container.children('span');
      QUnit.assert.equal( elems.length, 1, 'select the correct elements' );
      QUnit.assert.equal( elems.querystring.apply( elems, [ 'arbitrary_attr' ].concat( aps.call( arguments ) ) ), elems, 'pass query string' );

      container = init_url_attr( container, current_url );
      elems = container.children('a, link');
      QUnit.assert.equal( elems.length, 2, 'select the correct elements' );
      QUnit.assert.equal( elems.querystring.apply( elems, [ 'href' ].concat( aps.call( arguments ) ) ), elems, 'pass query string' );

      container = init_url_attr( container, current_url );
      elems = container.children();
      QUnit.assert.equal( elems.querystring.apply( elems, aps.call( arguments ) ), elems, 'pass query string' );

      current_url = test_url_attr( container );
    },

    // tests:

    [ { a:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?a=2' + post, '$.fn.querystring( url, Object )' );
    },

    [ { b:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?a=2&b=2' + post, '$.fn.querystring( url, Object )' );
    },

    [ { c:true, d:false, e:'undefined', f:'' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?a=2&b=2&c=true&d=false&e=undefined&f=' + post, '$.fn.querystring( url, Object )' );
    },

    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, Object, 2 )' );
    },

    [ { a:'1', c:'2' } as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, Object, 1 )' );
    },

    [ 'foo=1' ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, String )' );
    },

    [ 'foo=2&bar=3' as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, String, 1 )' );
    },

    [ 'http://example.com/test.html?/path/to/file.php#the-cow-goes-moo' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?/path/to/file.php' + post, '$.fn.querystring( url, String, 2 )' );
    },

    [ '?another-example' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?another-example' + post, '$.fn.querystring( url, String, 2 )' );
    },

    [ 'i_am_out_of_witty_strings' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '?i_am_out_of_witty_strings' + post, '$.fn.querystring( url, String, 2 )' );
    }

  );

});

QUnit.test( 'jQuery.fn.fragment', function() {
  QUnit.assert.expect( 240 );

  function fake_encode( params_str ) {
    return '#' + $.map( params_str.split('&'), encodeURIComponent ).join('&').replace( /%3D/g, '=' ).replace( /%2B/g, '+' );
  }

  var pre = 'http://a:b@example.com:1234/foo.html?and-dance-with-me',
    current_url = pre;

  run_many_tests(

    // execute this for each array item
    function( params, merge_mode ){
      current_url = test_fn_fragment( current_url, params, merge_mode );
    },

    // tests:

    [ { a:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#a=2', '$.fn.fragment( url, Object )' );
    },

    [ { b:'2' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#a=2&b=2', '$.fn.fragment( url, Object )' );
    },

    [ { c:true, d:false, e:'undefined', f:'' } ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#a=2&b=2&c=true&d=false&e=undefined&f=', '$.fn.fragment( url, Object )' );
    },

    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, Object, 2 )' );
    },

    [ { a:'1', c:'2' } as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, Object, 1 )' );
    },

    [ 'foo=1' ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, String )' );
    },

    [ 'foo=2&bar=3' as any, 1 ],

    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';

      QUnit.assert.equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, String, 1 )' );
    },

    [ 'http://example.com/test.html?the-cow-goes-moo#/path/to/file.php' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#/path/to/file.php', '$.fn.fragment( url, String, 2 )' );
    },

    [ '#another-example' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#another-example', '$.fn.fragment( url, String, 2 )' );
    },

    [ 'i_am_out_of_witty_strings' as any, 2 ],

    function(result){
      QUnit.assert.equal( current_url, pre + '#i_am_out_of_witty_strings', '$.fn.fragment( url, String, 2 )' );
    }

  );

  $.param.fragment.ajaxCrawlable( true );

  function test_fn_fragment( url, params, merge_mode? ) {
    var container,
      elems;

    container = init_url_attr( container, url );
    elems = container.children('span');
    QUnit.assert.equal( elems.length, 1, 'select the correct elements' );
    QUnit.assert.equal( elems.fragment( 'arbitrary_attr', params, merge_mode ), elems, 'pass fragment' );

    container = init_url_attr( container, url );
    elems = container.children('a, link');
    QUnit.assert.equal( elems.length, 2, 'select the correct elements' );
    QUnit.assert.equal( elems.fragment( params, merge_mode ), elems, 'pass fragment' );

    container = init_url_attr( container, url );
    elems = container.children();
    QUnit.assert.equal( elems.fragment( params, merge_mode ), elems, 'pass fragment' );

    return test_url_attr( container );
  };

  QUnit.assert.equal( test_fn_fragment( 'foo', {} ) , 'foo#!', '$.fn.fragment( url, Object )' );
  QUnit.assert.equal( test_fn_fragment( 'foo', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.fn.fragment( url, Object )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.fn.fragment( url, Object )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.fn.fragment( url, Object )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, Object )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, Object )' );

  QUnit.assert.equal( test_fn_fragment( 'foo', '' ) , 'foo#!', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );

  QUnit.assert.equal( test_fn_fragment( 'foo', '#' ) , 'foo#!', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );

  QUnit.assert.equal( test_fn_fragment( 'foo', '#!' ) , 'foo#!', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );

  $.param.fragment.ajaxCrawlable( false );

  // If a params fragment starts with ! and BBQ is not in ajaxCrawlable mode,
  // things can get very ugly, very quickly.
  QUnit.assert.equal( test_fn_fragment( 'foo', '#!' ) , 'foo#!=', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!=&!b=2&a=1', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&a=1&c=3', '$.fn.fragment( url, String )' );
  QUnit.assert.equal( test_fn_fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&!c=3&a=1', '$.fn.fragment( url, String )' );

});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

QUnit.module( 'jQuery.bbq' );

QUnit.test( 'jQuery.bbq.pushState(), jQuery.bbq.getState(), jQuery.bbq.removeState(), window.onhashchange', function() {
  QUnit.assert.expect( old_jquery ? 95 : 167 );

  var a:{ str: string, coerce: boolean }, b:{ str: string, coerce: boolean }, c, d, e, f, x, y, hash, hash_actual, obj: { str: string, coerce: boolean }, event:JQueryBbq.EventObject, msg = 'Testing window.onhashchange and history';

  $.bbq.pushState();
  QUnit.assert.equal( window.location.hash.replace( /^#/, ''), '', 'window.location hash should be empty' );

  $.bbq.pushState({ a:'1', b:'1' });
  QUnit.assert.deepEqual( $.deparam.fragment(), { a:'1', b:'1' }, 'hash should be set properly' );

  $(window).bind( 'hashchange', function(evt) {
    var hash_str = $.param.fragment(),
      param_obj = $.bbq.getState(),
      param_val = $.bbq.getState( 'param_name' );

    //event = evt;
    hash = $.param.fragment();
    hash_actual = location.hash;
    obj = { str: $.bbq.getState(), coerce: $.bbq.getState( true ) };
    a = { str: $.bbq.getState( 'a' ), coerce: $.bbq.getState( 'a', true ) };
    b = { str: $.bbq.getState( 'b' ), coerce: $.bbq.getState( 'b', true ) };
    c = { str: $.bbq.getState( 'c' ), coerce: $.bbq.getState( 'c', true ) };
    d = { str: $.bbq.getState( 'd' ), coerce: $.bbq.getState( 'd', true ) };
    e = { str: $.bbq.getState( 'e' ), coerce: $.bbq.getState( 'e', true ) };
    f = { str: $.bbq.getState( 'f' ), coerce: $.bbq.getState( 'f', true ) };

  }).trigger( 'hashchange' );

  QUnit.assert.deepEqual( obj.str, { a:'1', b:'1' } as any, 'hashchange triggered manually: $.bbq.getState()' );
  QUnit.assert.deepEqual( obj.coerce, { a:1, b:1 } as any,  'hashchange triggered manually: $.bbq.getState( true )' );
  QUnit.assert.equal( a.str, '1', 'hashchange triggered manually: $.bbq.getState( "a" )' );
  QUnit.assert.equal( a.coerce, 1, 'hashchange triggered manually: $.bbq.getState( "a", true )' );

  if ( !old_jquery ) {
    QUnit.assert.deepEqual( event.getState(), { a:'1', b:'1' }, 'hashchange triggered manually: event.getState()' );
    QUnit.assert.deepEqual( event.getState('a'), { a:1, b:1 },  'hashchange triggered manually: event.getState( true )' );
    QUnit.assert.equal( event.getState('a'), '1', 'hashchange triggered manually: event.getState( "a" )' );
    QUnit.assert.equal( event.getState('a',true), 1, 'hashchange triggered manually: event.getState( "a", true )' );
  }

  run_many_tests(
    // run asynchronously
    250,

    // execute this for each array item
    function(){
      notice( msg += '.' );
      $.bbq.pushState.apply( this, aps.call( arguments ) );
    },

    // execute this at the end
    function(){
      notice();
    },

    // tests:

    [ { a:'2' } ],

    function(result){
      QUnit.assert.equal( hash_actual, '#' + hash, 'hash should begin with #!' );
      QUnit.assert.deepEqual( obj.str, { a:'2', b:'1' } as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, { a:2, b:1 } as any,  '$.bbq.getState( true )' );
      QUnit.assert.equal( a.str, '2', '$.bbq.getState( "a" )' );
      QUnit.assert.equal( a.coerce, 2, '$.bbq.getState( "a", true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), { a:'2', b:'1' }, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), { a:2, b:1 },  'event.getState( true )' );
        QUnit.assert.equal( event.getState('a'), '2', 'event.getState( "a" )' );
        QUnit.assert.equal( event.getState('a',true), 2, 'event.getState( "a", true )' );
      }
    },

    [ { b:'2' } ],

    function(result){
      QUnit.assert.equal( hash_actual, '#' + hash, 'hash should begin with #!' );
      QUnit.assert.deepEqual( obj.str, { a:'2', b:'2' } as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, { a:2, b:2 } as any,  '$.bbq.getState( true )' );
      QUnit.assert.equal( b.str, '2', '$.bbq.getState( "b" )' );
      QUnit.assert.equal( b.coerce, 2, '$.bbq.getState( "b", true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), { a:'2', b:'2' }, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), { a:2, b:2 },  'event.getState( true )' );
        QUnit.assert.equal( event.getState('b'), '2', 'event.getState( "b" )' );
        QUnit.assert.equal( event.getState('b',true), 2, 'event.getState( "b", true )' );
      }
    },

    [ { c:true, d:false, e:'undefined', f:'' } ],

    function(result){
      QUnit.assert.equal( hash_actual, '#' + hash, 'hash should begin with #!' );
      QUnit.assert.deepEqual( obj.str, { a:'2', b:'2', c:'true', d:'false', e:'undefined', f:'' } as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, { a:2, b:2, c:true, d:false, e:undefined, f:'' } as any,  '$.bbq.getState( true )' );
      QUnit.assert.equal( c.str, 'true', '$.bbq.getState( "c" )' );
      QUnit.assert.equal( c.coerce, true, '$.bbq.getState( "c", true )' );
      QUnit.assert.equal( d.str, 'false', '$.bbq.getState( "d" )' );
      QUnit.assert.equal( d.coerce, false, '$.bbq.getState( "d", true )' );
      QUnit.assert.equal( e.str, 'undefined', '$.bbq.getState( "e" )' );
      QUnit.assert.equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      QUnit.assert.equal( f.str, '', '$.bbq.getState( "f" )' );
      QUnit.assert.equal( f.coerce, '', '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), { a:'2', b:'2', c:'true', d:'false', e:'undefined', f:'' }, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), { a:2, b:2, c:true, d:false, e:undefined, f:'' },  'event.getState( true )' );
        QUnit.assert.equal( event.getState('c'), 'true', 'event.getState( "c" )' );
        QUnit.assert.equal( event.getState('c',true), true, 'event.getState( "c", true )' );
        QUnit.assert.equal( event.getState('d'), 'false', 'event.getState( "d" )' );
        QUnit.assert.equal( event.getState('d',true), false, 'event.getState( "d", true )' );
        QUnit.assert.equal( event.getState('e'), 'undefined', 'event.getState( "e" )' );
        QUnit.assert.equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        QUnit.assert.equal( event.getState('f'), '', 'event.getState( "f" )' );
        QUnit.assert.equal( event.getState('f',true), '', 'event.getState( "f", true )' );
      }
    },

    function(result){
      $.param.fragment.ajaxCrawlable( true );
    },

    function(result){
      $.bbq.removeState( 'c' );
    },

    function(result){
      QUnit.assert.equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      QUnit.assert.deepEqual( obj.str, { a:'2', b:'2', d:'false', e:'undefined', f:'' } as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, { a:2, b:2, d:false, e:undefined, f:'' } as any,  '$.bbq.getState( true )' );
      QUnit.assert.equal( a.str, '2', '$.bbq.getState( "a" )' );
      QUnit.assert.equal( a.coerce, 2, '$.bbq.getState( "a", true )' );
      QUnit.assert.equal( b.str, '2', '$.bbq.getState( "b" )' );
      QUnit.assert.equal( b.coerce, 2, '$.bbq.getState( "b", true )' );
      QUnit.assert.equal( c.str, undefined, '$.bbq.getState( "c" )' );
      QUnit.assert.equal( c.coerce, undefined, '$.bbq.getState( "c", true )' );
      QUnit.assert.equal( d.str, 'false', '$.bbq.getState( "d" )' );
      QUnit.assert.equal( d.coerce, false, '$.bbq.getState( "d", true )' );
      QUnit.assert.equal( e.str, 'undefined', '$.bbq.getState( "e" )' );
      QUnit.assert.equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      QUnit.assert.equal( f.str, '', '$.bbq.getState( "f" )' );
      QUnit.assert.equal( f.coerce, '', '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), { a:'2', b:'2', d:'false', e:'undefined', f:'' }, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), { a:2, b:2, d:false, e:undefined, f:'' },  'event.getState( true )' );
        QUnit.assert.equal( event.getState('a'), '2', 'event.getState( "a" )' );
        QUnit.assert.equal( event.getState('a',true), 2, 'event.getState( "a", true )' );
        QUnit.assert.equal( event.getState('b'), '2', 'event.getState( "b" )' );
        QUnit.assert.equal( event.getState('b',true), 2, 'event.getState( "b", true )' );
        QUnit.assert.equal( event.getState('c'), undefined, 'event.getState( "c" )' );
        QUnit.assert.equal( event.getState('c',true), undefined, 'event.getState( "c", true )' );
        QUnit.assert.equal( event.getState('d'), 'false', 'event.getState( "d" )' );
        QUnit.assert.equal( event.getState('d',true), false, 'event.getState( "d", true )' );
        QUnit.assert.equal( event.getState('e'), 'undefined', 'event.getState( "e" )' );
        QUnit.assert.equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        QUnit.assert.equal( event.getState('f'), '', 'event.getState( "f" )' );
        QUnit.assert.equal( event.getState('f',true), '', 'event.getState( "f", true )' );
      }
    },

    function(result){
      $.bbq.removeState( [ 'd', 'e', 'f', 'nonexistent' ] );
    },

    function(result){
      QUnit.assert.equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      QUnit.assert.deepEqual( obj.str, { a:'2', b:'2' } as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, { a:2, b:2 } as any,  '$.bbq.getState( true )' );
      QUnit.assert.equal( a.str, '2', '$.bbq.getState( "a" )' );
      QUnit.assert.equal( a.coerce, 2, '$.bbq.getState( "a", true )' );
      QUnit.assert.equal( b.str, '2', '$.bbq.getState( "b" )' );
      QUnit.assert.equal( b.coerce, 2, '$.bbq.getState( "b", true )' );
      QUnit.assert.equal( c.str, undefined, '$.bbq.getState( "c" )' );
      QUnit.assert.equal( c.coerce, undefined, '$.bbq.getState( "c", true )' );
      QUnit.assert.equal( d.str, undefined, '$.bbq.getState( "d" )' );
      QUnit.assert.equal( d.coerce, undefined, '$.bbq.getState( "d", true )' );
      QUnit.assert.equal( e.str, undefined, '$.bbq.getState( "e" )' );
      QUnit.assert.equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      QUnit.assert.equal( f.str, undefined, '$.bbq.getState( "f" )' );
      QUnit.assert.equal( f.coerce, undefined, '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), { a:'2', b:'2' }, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), { a:2, b:2 },  'event.getState( true )' );
        QUnit.assert.equal( event.getState('a'), '2', 'event.getState( "a" )' );
        QUnit.assert.equal( event.getState('a',true), 2, 'event.getState( "a", true )' );
        QUnit.assert.equal( event.getState('b'), '2', 'event.getState( "b" )' );
        QUnit.assert.equal( event.getState('b',true), 2, 'event.getState( "b", true )' );
        QUnit.assert.equal( event.getState('c'), undefined, 'event.getState( "c" )' );
        QUnit.assert.equal( event.getState('c',true), undefined, 'event.getState( "c", true )' );
        QUnit.assert.equal( event.getState('d'), undefined, 'event.getState( "d" )' );
        QUnit.assert.equal( event.getState('d',true), undefined, 'event.getState( "d", true )' );
        QUnit.assert.equal( event.getState('e'), undefined, 'event.getState( "e" )' );
        QUnit.assert.equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        QUnit.assert.equal( event.getState('f'), undefined, 'event.getState( "f" )' );
        QUnit.assert.equal( event.getState('f',true), undefined, 'event.getState( "f", true )' );
      }
    },

    function(result){
      $.bbq.removeState();
    },

    function(result){
      QUnit.assert.equal( hash_actual, '#!', 'hash should just be #!' );
      QUnit.assert.deepEqual( obj.str, {} as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, {} as any,  '$.bbq.getState( true )' );
      QUnit.assert.equal( a.str, undefined, '$.bbq.getState( "a" )' );
      QUnit.assert.equal( a.coerce, undefined, '$.bbq.getState( "a", true )' );
      QUnit.assert.equal( b.str, undefined, '$.bbq.getState( "b" )' );
      QUnit.assert.equal( b.coerce, undefined, '$.bbq.getState( "b", true )' );
      QUnit.assert.equal( c.str, undefined, '$.bbq.getState( "c" )' );
      QUnit.assert.equal( c.coerce, undefined, '$.bbq.getState( "c", true )' );
      QUnit.assert.equal( d.str, undefined, '$.bbq.getState( "d" )' );
      QUnit.assert.equal( d.coerce, undefined, '$.bbq.getState( "d", true )' );
      QUnit.assert.equal( e.str, undefined, '$.bbq.getState( "e" )' );
      QUnit.assert.equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      QUnit.assert.equal( f.str, undefined, '$.bbq.getState( "f" )' );
      QUnit.assert.equal( f.coerce, undefined, '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), {}, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), {},  'event.getState( true )' );
        QUnit.assert.equal( event.getState('a'), undefined, 'event.getState( "a" )' );
        QUnit.assert.equal( event.getState('a',true), undefined, 'event.getState( "a", true )' );
        QUnit.assert.equal( event.getState('b'), undefined, 'event.getState( "b" )' );
        QUnit.assert.equal( event.getState('b',true), undefined, 'event.getState( "b", true )' );
        QUnit.assert.equal( event.getState('c'), undefined, 'event.getState( "c" )' );
        QUnit.assert.equal( event.getState('c',true), undefined, 'event.getState( "c", true )' );
        QUnit.assert.equal( event.getState('d'), undefined, 'event.getState( "d" )' );
        QUnit.assert.equal( event.getState('d',true), undefined, 'event.getState( "d", true )' );
        QUnit.assert.equal( event.getState('e'), undefined, 'event.getState( "e" )' );
        QUnit.assert.equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        QUnit.assert.equal( event.getState('f'), undefined, 'event.getState( "f" )' );
        QUnit.assert.equal( event.getState('f',true), undefined, 'event.getState( "f", true )' );
      }
    },

    [ { a:'2', b:'2', c:true, d:false, e:'undefined', f:'' } ],

    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],

    function(result){
      var b_str = old_jquery
          ? '[object Object]'
          : {x:['7'], y:'8', z:['9','0','true','false','undefined','']} as any,
        b_coerce = old_jquery
          ? '[object Object]'
          : {x:[7], y:8} as any;//z:[9,0,true,false,undefined,'']};

      QUnit.assert.equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      QUnit.assert.deepEqual( obj.str, { a:['4','5','6'], b:b_str } as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, { a:[4,5,6], b:b_coerce } as any,  '$.bbq.getState( true )' );
      QUnit.assert.deepEqual( a.str, ['4','5','6'] as any, '$.bbq.getState( "a" )' );
      QUnit.assert.deepEqual( a.coerce, [4,5,6] as any, '$.bbq.getState( "a", true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), { a:['4','5','6'], b:b_str }, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), { a:[4,5,6], b:b_coerce },  'event.getState( true )' );
        QUnit.assert.deepEqual( event.getState('a'), ['4','5','6'], 'event.getState( "a" )' );
        QUnit.assert.deepEqual( event.getState('a',true), [4,5,6], 'event.getState( "a", true )' );
      }
    },

    [ { a:'1', c:'2' } as any, 1 ],

    function(result){
      var b_str = old_jquery
          ? '[object Object]'
          : {x:['7'], y:'8', z:['9','0','true','false','undefined','']} as any,
        b_coerce = old_jquery
          ? '[object Object]'
          : {x:[7], y:8} as any;//, z:[9,0,true,false,undefined,'']};

      QUnit.assert.equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      QUnit.assert.deepEqual( obj.str, { a:['4','5','6'], b:b_str, c:'2' } as any, '$.bbq.getState()' );
      QUnit.assert.deepEqual( obj.coerce, { a:[4,5,6], b:b_coerce, c:2 } as any,  '$.bbq.getState( true )' );
      if ( !old_jquery ) {
        QUnit.assert.deepEqual( event.getState(), { a:['4','5','6'], b:b_str, c:'2' }, 'event.getState()' );
        QUnit.assert.deepEqual( event.getState('a'), { a:[4,5,6], b:b_coerce, c:2 },  'event.getState( true )' );
      }
    },

    [ '#/path/to/file.php' as any, 2 ],

    function(result){
      QUnit.assert.equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      QUnit.assert.equal( hash, '/path/to/file.php', '$.param.fragment()' );
      if ( !old_jquery ) {
        QUnit.assert.equal( event.fragment, '/path/to/file.php', 'event.fragment' );
      }
    },

    [],

    function(result){
      QUnit.assert.equal( hash_actual, '#!', 'hash should just be #!' );
      QUnit.assert.equal( hash, '', '$.param.fragment()' );
      if ( !old_jquery ) {
        QUnit.assert.equal( event.fragment, '', 'event.fragment' );
      }
    },

    function(result){
      $(window).bind( 'hashchange', function(evt){
        x = $.param.fragment();
      });
    },

    [ '#omg_ponies' as any, 2 ],

    function(result){
      QUnit.assert.equal( hash, 'omg_ponies', 'event handler 1: $.param.fragment()' );
      QUnit.assert.equal( x, 'omg_ponies', 'event handler 2: $.param.fragment()' );

      hash = x = '';
      QUnit.assert.equal( hash + x, '', 'vars reset' );

      $(window).triggerHandler( 'hashchange' );
      QUnit.assert.equal( hash, 'omg_ponies', 'event handler 1: $.param.fragment()' );
      QUnit.assert.equal( x, 'omg_ponies', 'event handler 2: $.param.fragment()' );

      hash = x = '';
      QUnit.assert.equal( hash + x, '', 'vars reset' );

      $(window).unbind( 'hashchange' );
    },

    [ '#almost_done?not_search' as any, 2 ],

    function(result){
      QUnit.assert.equal( hash, '', 'event handler 1: $.param.fragment()' );
      QUnit.assert.equal( x, '', 'event handler 2: $.param.fragment()' );

      var events:any;// = $.data( window, 'events' );
      QUnit.assert.ok( !events || !events.hashchange, 'hashchange event unbound' );
    },

    [ '#' ],

    function(result){
      x = [];
      $(window).bind( 'hashchange', function(evt){
        x.push( $.param.fragment() );
      });
    },

    function(result){
      !is_chrome && window.history.go( -1 );
    },

    function(result){
      !is_chrome && window.history.go( -1 );
    },

    function(result){
      !is_chrome && window.history.go( -1 );
    },

    function(result){
      !is_chrome && window.history.go( -1 );
    },

    function(result){
      if ( is_chrome ) {
        // Read about this issue here: http://benalman.com/news/2009/09/chrome-browser-history-buggine/
        QUnit.assert.ok( true, 'history is sporadically broken in chrome, this is a known bug, so this test is skipped in chrome' );
      } else {
        QUnit.assert.deepEqual( x, ['almost_done?not_search', 'omg_ponies', '', '/path/to/file.php'], 'back button and window.bbq.go(-1) should work' );
      }

      $(window).unbind( 'hashchange' );
      var events: any;// = $.data( window, 'events' );
      QUnit.assert.ok( !events || !events.hashchange, 'hashchange event unbound' );
    },

    function(result){
      $.param.fragment.ajaxCrawlable( false );
    },

    [ '#all_done' ]

  );

});


}); // END CLOSURE
