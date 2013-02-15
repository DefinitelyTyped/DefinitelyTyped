/// <reference path="../qunit/qunit.d.ts" />
/// <reference path="jquery.bbq.d.ts" />


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
$.param({ a: { b:1,c:2 }, d: [3,4,<any>{ e:5 }] }) // "a=[object+Object]&d=3&d=4&d=[object+Object]"
// >=1.4:
$.param({ a: { b:1,c:2 }, d: [3,4,<any>{ e:5 }] }) // "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"
// *************************************************************

// Not sure why this isn't set by default in qunit.js..
QUnit.jsDump.HTML = false;

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
        start();
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

test( 'jQuery.param.sorted', function() {
  var tests = [
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
      obj: {a:[<any>[4,<any>[5,6]],<any>[<any>[7,8],9]]},
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
  
  expect( tests.length * 2 + 6 );
  
  $.each( tests, function(i,test){
    var unsorted = $.param( test.obj, test.traditional ),
      sorted = $.param.sorted( test.obj, test.traditional );
    
    equal( decodeURIComponent( sorted ), old_jquery && test.expected_old || test.expected, 'params should be sorted' );
    deepEqual( $.deparam( unsorted, true ), $.deparam( sorted, true ), 'sorted params should deparam the same as unsorted params' )
  });
  
  equal( $.param.fragment( 'foo', '#b=2&a=1' ), 'foo#a=1&b=2', 'params should be sorted' );
  equal( $.param.fragment( 'foo', '#b=2&a=1', 1 ), 'foo#a=1&b=2', 'params should be sorted' );
  equal( $.param.fragment( 'foo', '#b=2&a=1', 2 ), 'foo#b=2&a=1', 'params should NOT be sorted' );
  equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1' ), 'foo#a=1&b=2&c=3', 'params should be sorted' );
  equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1', 1 ), 'foo#a=4&b=2&c=3', 'params should be sorted' );
  equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1', 2 ), 'foo#b=2&a=1', 'params should NOT be sorted' );
  
});

test( 'jQuery.param.querystring', function() {
  expect( 11 );
  
  equal( $.param.querystring( 'http://example.com/' ), '', 'properly identifying params' );
  equal( $.param.querystring( 'http://example.com/?foo' ),'foo', 'properly identifying params' );
  equal( $.param.querystring( 'http://example.com/?foo#bar' ),'foo', 'properly identifying params' );
  equal( $.param.querystring( 'http://example.com/?foo#bar?baz' ),'foo', 'properly identifying params' );
  equal( $.param.querystring( 'http://example.com/#foo' ),'', 'properly identifying params' );
  equal( $.param.querystring( 'http://example.com/#foo?bar' ),'', 'properly identifying params' );
  
  equal( $.param.querystring(), params_str, 'params string from window.location' );
  equal( $.param.querystring( '?' + params_str ), params_str, 'params string from url' );
  equal( $.param.querystring( 'foo.html?' + params_str ), params_str, 'params string from url' );
  equal( $.param.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str ), params_str, 'params string from url' );
  equal( $.param.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str + '#bippity-boppity-boo' ), params_str, 'params string from url' );
});

test( 'jQuery.param.querystring - build URL', function() {
  expect( 10 );
  
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
      equal( current_url, pre + '?a=2' + post, '$.param.querystring( url, Object )' );
    },
    
    [ { b:'2' } ],
    
    function(result){
      equal( current_url, pre + '?a=2&b=2' + post, '$.param.querystring( url, Object )' );
    },
    
    [ { c:true, d:false, e:'undefined', f:'' } ],
    
    function(result){
      equal( current_url, pre + '?a=2&b=2&c=true&d=false&e=undefined&f=' + post, '$.param.querystring( url, Object )' );
    },
    
    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,<any>'true',<any>'false',<any>'undefined',<any>'']} }, 2 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, Object, 2 )' );
    },
    
    [ <any>{ a:'1', c:'2' }, 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, Object, 1 )' );
    },
    
    [ 'foo=1' ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, String )' );
    },
    
    [ <any>'foo=2&bar=3', 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.param.querystring( url, String, 1 )' );
    },
    
    [ <any>'http://example.com/test.html?/path/to/file.php#the-cow-goes-moo', 2 ],
    
    function(result){
      equal( current_url, pre + '?/path/to/file.php' + post, '$.param.querystring( url, String, 2 )' );
    },
    
    [ <any>'?another-example', 2 ],
    
    function(result){
      equal( current_url, pre + '?another-example' + post, '$.param.querystring( url, String, 2 )' );
    },
    
    [ <any>'i_am_out_of_witty_strings', 2 ],
    
    function(result){
      equal( current_url, pre + '?i_am_out_of_witty_strings' + post, '$.param.querystring( url, String, 2 )' );
    }
    
  );
  
});

test( 'jQuery.param.fragment', function() {
  expect( 29 );
  
  equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#bar' ),'bar', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#bar?baz' ),'bar?baz', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#foo' ),'foo', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#foo?bar' ),'foo?bar', 'properly identifying params' );
  
  equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#!bar' ),'!bar', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#!bar?baz' ),'!bar?baz', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#!foo' ),'!foo', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#!foo?bar' ),'!foo?bar', 'properly identifying params' );
  
  equal( $.param.fragment(), params_str, 'params string from window.location' );
  equal( $.param.fragment( '#' + params_str ), params_str, 'params string from url' );
  equal( $.param.fragment( 'foo.html#' + params_str ), params_str, 'params string from url' );
  equal( $.param.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str ), params_str, 'params string from url' );
  equal( $.param.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str ), params_str, 'params string from url' );
  
  $.param.fragment.ajaxCrawlable( true );
  
  equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#bar' ),'bar', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#bar?baz' ),'bar?baz', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#foo' ),'foo', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#foo?bar' ),'foo?bar', 'properly identifying params' );
  
  equal( $.param.fragment( 'http://example.com/' ), '', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo' ),'', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#!bar' ),'bar', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/?foo#!bar?baz' ),'bar?baz', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#!foo' ),'foo', 'properly identifying params' );
  equal( $.param.fragment( 'http://example.com/#!foo?bar' ),'foo?bar', 'properly identifying params' );
  
  $.param.fragment.ajaxCrawlable( false );
  
});

test( 'jQuery.param.fragment - build URL', function() {
  expect( 40 );
  
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
      equal( current_url, pre + '#a=2', '$.param.fragment( url, Object )' );
    },
    
    [ { b:'2' } ],
    
    function(result){
      equal( current_url, pre + '#a=2&b=2', '$.param.fragment( url, Object )' );
    },
    
    [ { c:true, d:false, e:'undefined', f:'' } ],
    
    function(result){
      equal( current_url, pre + '#a=2&b=2&c=true&d=false&e=undefined&f=', '$.param.fragment( url, Object )' );
    },
    
    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';
      
      equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, Object, 2 )' );
    },
    
    [ <any>{ a:'1', c:'2' }, 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';
      
      equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, Object, 1 )' );
    },
    
    [ 'foo=1' ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, String )' );
    },
    
    [ <any>'foo=2&bar=3', 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ), '$.param.fragment( url, String, 1 )' );
    },
    
    [ <any>'http://example.com/test.html?the-cow-goes-moo#/path/to/file.php', 2 ],
    
    function(result){
      equal( current_url, pre + '#/path/to/file.php', '$.param.fragment( url, String, 2 )' );
    },
    
    [ <any>'#another-example', 2 ],
    
    function(result){
      equal( current_url, pre + '#another-example', '$.param.fragment( url, String, 2 )' );
    },
    
    [ <any>'i_am_out_of_witty_strings', 2 ],
    
    function(result){
      equal( current_url, pre + '#i_am_out_of_witty_strings', '$.param.fragment( url, String, 2 )' );
    }
    
  );
  
  $.param.fragment.ajaxCrawlable( true );
  
  equal( $.param.fragment( 'foo', {} ) , 'foo#!', '$.param.fragment( url, Object )' );
  equal( $.param.fragment( 'foo', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.param.fragment( url, Object )' );
  equal( $.param.fragment( 'foo#', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.param.fragment( url, Object )' );
  equal( $.param.fragment( 'foo#!', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.param.fragment( url, Object )' );
  equal( $.param.fragment( 'foo#c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, Object )' );
  equal( $.param.fragment( 'foo#!c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, Object )' );
  
  equal( $.param.fragment( 'foo', '' ) , 'foo#!', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  
  equal( $.param.fragment( 'foo', '#' ) , 'foo#!', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  
  equal( $.param.fragment( 'foo', '#!' ) , 'foo#!', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.param.fragment( url, String )' );
  
  $.param.fragment.ajaxCrawlable( false );
  
  // If a params fragment starts with ! and BBQ is not in ajaxCrawlable mode,
  // things can get very ugly, very quickly.
  equal( $.param.fragment( 'foo', '#!' ) , 'foo#!=', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!=&!b=2&a=1', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&a=1&c=3', '$.param.fragment( url, String )' );
  equal( $.param.fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&!c=3&a=1', '$.param.fragment( url, String )' );
  
});

test( 'jQuery.param.fragment.ajaxCrawlable', function() {
  expect( 5 );
  
  equal( ajaxcrawlable_init, false, 'ajaxCrawlable is disabled by default' );
  equal( $.param.fragment.ajaxCrawlable( true ), true, 'enabling ajaxCrawlable should return true' );
  equal( $.param.fragment.ajaxCrawlable(), true, 'ajaxCrawlable is now enabled' );
  equal( $.param.fragment.ajaxCrawlable( false ), false, 'disabling ajaxCrawlable should return false' );
  equal( $.param.fragment.ajaxCrawlable(), false, 'ajaxCrawlable is now disabled' );
});

test( 'jQuery.param.fragment.noEscape', function() {
  expect( 2 );
  
  equal( $.param.fragment( '#', { foo: '/a,b@c$d+e&f=g h!' } ), '#foo=/a,b%40c%24d%2Be%26f%3Dg+h!', '/, should be unescaped, everything else but space (+) should be urlencoded' );
  
  $.param.fragment.ajaxCrawlable( true );
  
  equal( $.param.fragment( '#', { foo: '/a,b@c$d+e&f=g h!' } ), '#!foo=/a,b%40c%24d%2Be%26f%3Dg+h!', '/, should be unescaped, everything else but ! and space (+) should be urlencoded' );
  
  $.param.fragment.ajaxCrawlable( false );
});



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

QUnit.module( 'jQuery.deparam' );

test( 'jQuery.deparam - 1.4-style params', function() {
  expect( 2 );
  deepEqual( $.deparam( params_str ), params_obj, '$.deparam( String )' );
  deepEqual( $.deparam( params_str, true ), params_obj_coerce, '$.deparam( String, true )' );
});

test( 'jQuery.deparam - pre-1.4-style params', function() {
  var params_str = 'a=1&a=2&a=3&b=4&c=5&c=6&c=true&c=false&c=undefined&c=&d=7',
    params_obj = { a:['1','2','3'], b:'4', c:['5','6','true','false','undefined',''], d:'7' },
    params_obj_coerce = { a:[1,2,3], b:4, c:[5,6,true,false,undefined,''], d:7 };
    
  expect( 2 );
  deepEqual( $.deparam( params_str ), params_obj, '$.deparam( String )' );
  deepEqual( $.deparam( params_str, true ), params_obj_coerce, '$.deparam( String, true )' );
});

test( 'jQuery.deparam.querystring', function() {
  expect( 12 );
  
  deepEqual( $.deparam.querystring(), params_obj, 'params obj from window.location' );
  deepEqual( $.deparam.querystring( /*true*/ ), params_obj_coerce, 'params obj from window.location, coerced' );
  deepEqual( $.deparam.querystring( params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.querystring( params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.querystring( '?' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.querystring( '?' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.querystring( 'foo.html?' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.querystring( 'foo.html?' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str + '#bippity-boppity-boo' ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.querystring( 'http://a:b@example.com:1234/foo.html?' + params_str + '#bippity-boppity-boo', true ), params_obj_coerce, 'params obj from string, coerced' );
});

test( 'jQuery.deparam.fragment', function() {
  expect( 36 );
  
  deepEqual( $.deparam.fragment(), params_obj, 'params obj from window.location' );
  deepEqual( $.deparam.fragment( /*true*/ ), params_obj_coerce, 'params obj from window.location, coerced' );
  deepEqual( $.deparam.fragment( params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  
  deepEqual( $.deparam.fragment( '#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( '#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'foo.html#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  
  // If a params fragment starts with ! and BBQ is not in ajaxCrawlable mode,
  // things can get very ugly, very quickly.
  deepEqual( $.deparam.fragment( '#!' + params_str ), params_obj_bang, 'params obj from string' );
  deepEqual( $.deparam.fragment( '#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'foo.html#!' + params_str ), params_obj_bang, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'foo.html#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str ), params_obj_bang, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str ), params_obj_bang, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str, true ), params_obj_bang_coerce, 'params obj from string, coerced' );
  
  $.param.fragment.ajaxCrawlable( true );
  
  deepEqual( $.deparam.fragment( '#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( '#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'foo.html#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  
  deepEqual( $.deparam.fragment( '#!' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( '#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'foo.html#!' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'foo.html#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str ), params_obj, 'params obj from string' );
  deepEqual( $.deparam.fragment( 'http://a:b@example.com:1234/foo.html?bippity-boppity-boo#!' + params_str, true ), params_obj_coerce, 'params obj from string, coerced' );
  
  $.param.fragment.ajaxCrawlable( false );
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

QUnit.module( 'jQuery.fn' );

$.elemUrlAttr({ span: 'arbitrary_attr' });
var test_elems = 'a form link span'.split(' ');

function init_url_attr( container, url ) {
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

test( 'jQuery.fn.querystring', function() {
  expect( 60 );
  
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
      equal( elems.length, 1, 'select the correct elements' );
      equal( elems.querystring.apply( elems, [ 'arbitrary_attr' ].concat( aps.call( arguments ) ) ), elems, 'pass query string' );
      
      container = init_url_attr( container, current_url );
      elems = container.children('a, link');
      equal( elems.length, 2, 'select the correct elements' );
      equal( elems.querystring.apply( elems, [ 'href' ].concat( aps.call( arguments ) ) ), elems, 'pass query string' );
      
      container = init_url_attr( container, current_url );
      elems = container.children();
      equal( elems.querystring.apply( elems, aps.call( arguments ) ), elems, 'pass query string' );
      
      current_url = test_url_attr( container );
    },
    
    // tests:
    
    [ { a:'2' } ],
    
    function(result){
      equal( current_url, pre + '?a=2' + post, '$.fn.querystring( url, Object )' );
    },
    
    [ { b:'2' } ],
    
    function(result){
      equal( current_url, pre + '?a=2&b=2' + post, '$.fn.querystring( url, Object )' );
    },
    
    [ { c:true, d:false, e:'undefined', f:'' } ],
    
    function(result){
      equal( current_url, pre + '?a=2&b=2&c=true&d=false&e=undefined&f=' + post, '$.fn.querystring( url, Object )' );
    },
    
    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, Object, 2 )' );
    },
    
    [ <any>{ a:'1', c:'2' }, 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, Object, 1 )' );
    },
    
    [ 'foo=1' ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, String )' );
    },
    
    [ <any>'foo=2&bar=3', 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ) + post, '$.fn.querystring( url, String, 1 )' );
    },
    
    [ <any>'http://example.com/test.html?/path/to/file.php#the-cow-goes-moo', 2 ],
    
    function(result){
      equal( current_url, pre + '?/path/to/file.php' + post, '$.fn.querystring( url, String, 2 )' );
    },
    
    [ <any>'?another-example', 2 ],
    
    function(result){
      equal( current_url, pre + '?another-example' + post, '$.fn.querystring( url, String, 2 )' );
    },
    
    [ <any>'i_am_out_of_witty_strings', 2 ],
    
    function(result){
      equal( current_url, pre + '?i_am_out_of_witty_strings' + post, '$.fn.querystring( url, String, 2 )' );
    }
    
  );
  
});

test( 'jQuery.fn.fragment', function() {
  expect( 240 );
  
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
      equal( current_url, pre + '#a=2', '$.fn.fragment( url, Object )' );
    },
    
    [ { b:'2' } ],
    
    function(result){
      equal( current_url, pre + '#a=2&b=2', '$.fn.fragment( url, Object )' );
    },
    
    [ { c:true, d:false, e:'undefined', f:'' } ],
    
    function(result){
      equal( current_url, pre + '#a=2&b=2&c=true&d=false&e=undefined&f=', '$.fn.fragment( url, Object )' );
    },
    
    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=';
      
      equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, Object, 2 )' );
    },
    
    [ <any>{ a:'1', c:'2' }, 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2';
      
      equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, Object, 1 )' );
    },
    
    [ 'foo=1' ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, String )' );
    },
    
    [ <any>'foo=2&bar=3', 1 ],
    
    function(result){
      var params = old_jquery
        ? 'a=4&a=5&a=6&b=[object+Object]&bar=3&c=2&foo=1'
        : 'a[]=4&a[]=5&a[]=6&b[x][]=7&b[y]=8&b[z][]=9&b[z][]=0&b[z][]=true&b[z][]=false&b[z][]=undefined&b[z][]=&bar=3&c=2&foo=1';
      
      equal( current_url, pre + fake_encode( params ), '$.fn.fragment( url, String, 1 )' );
    },
    
    [ <any>'http://example.com/test.html?the-cow-goes-moo#/path/to/file.php', 2 ],
    
    function(result){
      equal( current_url, pre + '#/path/to/file.php', '$.fn.fragment( url, String, 2 )' );
    },
    
    [ <any>'#another-example', 2 ],
    
    function(result){
      equal( current_url, pre + '#another-example', '$.fn.fragment( url, String, 2 )' );
    },
    
    [ <any>'i_am_out_of_witty_strings', 2 ],
    
    function(result){
      equal( current_url, pre + '#i_am_out_of_witty_strings', '$.fn.fragment( url, String, 2 )' );
    }
    
  );
  
  $.param.fragment.ajaxCrawlable( true );
  
  function test_fn_fragment( url, params, merge_mode? ) {
    var container,
      elems;
    
    container = init_url_attr( container, url );
    elems = container.children('span');
    equal( elems.length, 1, 'select the correct elements' );
    equal( elems.fragment( 'arbitrary_attr', params, merge_mode ), elems, 'pass fragment' );
    
    container = init_url_attr( container, url );
    elems = container.children('a, link');
    equal( elems.length, 2, 'select the correct elements' );
    equal( elems.fragment( params, merge_mode ), elems, 'pass fragment' );
    
    container = init_url_attr( container, url );
    elems = container.children();
    equal( elems.fragment( params, merge_mode ), elems, 'pass fragment' );
    
    return test_url_attr( container );
  };
  
  equal( test_fn_fragment( 'foo', {} ) , 'foo#!', '$.fn.fragment( url, Object )' );
  equal( test_fn_fragment( 'foo', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.fn.fragment( url, Object )' );
  equal( test_fn_fragment( 'foo#', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.fn.fragment( url, Object )' );
  equal( test_fn_fragment( 'foo#!', { b:2, a:1 } ) , 'foo#!a=1&b=2', '$.fn.fragment( url, Object )' );
  equal( test_fn_fragment( 'foo#c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, Object )' );
  equal( test_fn_fragment( 'foo#!c=3&a=4', { b:2, a:1 } ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, Object )' );
  
  equal( test_fn_fragment( 'foo', '' ) , 'foo#!', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!', 'b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!c=3&a=4', 'b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  
  equal( test_fn_fragment( 'foo', '#' ) , 'foo#!', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!', '#b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!c=3&a=4', '#b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  
  equal( test_fn_fragment( 'foo', '#!' ) , 'foo#!', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!a=1&b=2', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!a=1&b=2&c=3', '$.fn.fragment( url, String )' );
  
  $.param.fragment.ajaxCrawlable( false );
  
  // If a params fragment starts with ! and BBQ is not in ajaxCrawlable mode,
  // things can get very ugly, very quickly.
  equal( test_fn_fragment( 'foo', '#!' ) , 'foo#!=', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#', '#!b=2&a=1' ) , 'foo#!b=2&a=1', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!', '#!b=2&a=1' ) , 'foo#!=&!b=2&a=1', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&a=1&c=3', '$.fn.fragment( url, String )' );
  equal( test_fn_fragment( 'foo#!c=3&a=4', '#!b=2&a=1' ) , 'foo#!b=2&!c=3&a=1', '$.fn.fragment( url, String )' );
  
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

QUnit.module( 'jQuery.bbq' );

test( 'jQuery.bbq.pushState(), jQuery.bbq.getState(), jQuery.bbq.removeState(), window.onhashchange', function() {
  expect( old_jquery ? 95 : 167 );
  
  var a, b, c, d, e, f, x, y, hash, hash_actual, obj, event, msg = 'Testing window.onhashchange and history';
  
  $.bbq.pushState();
  equal( window.location.hash.replace( /^#/, ''), '', 'window.location hash should be empty' );
  
  $.bbq.pushState({ a:'1', b:'1' });
  deepEqual( $.deparam.fragment(), { a:'1', b:'1' }, 'hash should be set properly' );
  
  $(window).bind( 'hashchange', function(evt) {
    var hash_str = $.param.fragment(),
      param_obj = $.bbq.getState(),
      param_val = $.bbq.getState( 'param_name' );
    
    event = evt;
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
  
  deepEqual( obj.str, { a:'1', b:'1' }, 'hashchange triggered manually: $.bbq.getState()' );
  deepEqual( obj.coerce, { a:1, b:1 },  'hashchange triggered manually: $.bbq.getState( true )' );
  equal( a.str, '1', 'hashchange triggered manually: $.bbq.getState( "a" )' );
  equal( a.coerce, 1, 'hashchange triggered manually: $.bbq.getState( "a", true )' );
  
  if ( !old_jquery ) {
    deepEqual( event.getState(), { a:'1', b:'1' }, 'hashchange triggered manually: event.getState()' );
    deepEqual( event.getState(true), { a:1, b:1 },  'hashchange triggered manually: event.getState( true )' );
    equal( event.getState('a'), '1', 'hashchange triggered manually: event.getState( "a" )' );
    equal( event.getState('a',true), 1, 'hashchange triggered manually: event.getState( "a", true )' );
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
      equal( hash_actual, '#' + hash, 'hash should begin with #!' );
      deepEqual( obj.str, { a:'2', b:'1' }, '$.bbq.getState()' );
      deepEqual( obj.coerce, { a:2, b:1 },  '$.bbq.getState( true )' );
      equal( a.str, '2', '$.bbq.getState( "a" )' );
      equal( a.coerce, 2, '$.bbq.getState( "a", true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), { a:'2', b:'1' }, 'event.getState()' );
        deepEqual( event.getState(true), { a:2, b:1 },  'event.getState( true )' );
        equal( event.getState('a'), '2', 'event.getState( "a" )' );
        equal( event.getState('a',true), 2, 'event.getState( "a", true )' );
      }
    },
    
    [ { b:'2' } ],
    
    function(result){
      equal( hash_actual, '#' + hash, 'hash should begin with #!' );
      deepEqual( obj.str, { a:'2', b:'2' }, '$.bbq.getState()' );
      deepEqual( obj.coerce, { a:2, b:2 },  '$.bbq.getState( true )' );
      equal( b.str, '2', '$.bbq.getState( "b" )' );
      equal( b.coerce, 2, '$.bbq.getState( "b", true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), { a:'2', b:'2' }, 'event.getState()' );
        deepEqual( event.getState(true), { a:2, b:2 },  'event.getState( true )' );
        equal( event.getState('b'), '2', 'event.getState( "b" )' );
        equal( event.getState('b',true), 2, 'event.getState( "b", true )' );
      }
    },
    
    [ { c:true, d:false, e:'undefined', f:'' } ],
    
    function(result){
      equal( hash_actual, '#' + hash, 'hash should begin with #!' );
      deepEqual( obj.str, { a:'2', b:'2', c:'true', d:'false', e:'undefined', f:'' }, '$.bbq.getState()' );
      deepEqual( obj.coerce, { a:2, b:2, c:true, d:false, e:undefined, f:'' },  '$.bbq.getState( true )' );
      equal( c.str, 'true', '$.bbq.getState( "c" )' );
      equal( c.coerce, true, '$.bbq.getState( "c", true )' );
      equal( d.str, 'false', '$.bbq.getState( "d" )' );
      equal( d.coerce, false, '$.bbq.getState( "d", true )' );
      equal( e.str, 'undefined', '$.bbq.getState( "e" )' );
      equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      equal( f.str, '', '$.bbq.getState( "f" )' );
      equal( f.coerce, '', '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), { a:'2', b:'2', c:'true', d:'false', e:'undefined', f:'' }, 'event.getState()' );
        deepEqual( event.getState(true), { a:2, b:2, c:true, d:false, e:undefined, f:'' },  'event.getState( true )' );
        equal( event.getState('c'), 'true', 'event.getState( "c" )' );
        equal( event.getState('c',true), true, 'event.getState( "c", true )' );
        equal( event.getState('d'), 'false', 'event.getState( "d" )' );
        equal( event.getState('d',true), false, 'event.getState( "d", true )' );
        equal( event.getState('e'), 'undefined', 'event.getState( "e" )' );
        equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        equal( event.getState('f'), '', 'event.getState( "f" )' );
        equal( event.getState('f',true), '', 'event.getState( "f", true )' );
      }
    },
    
    function(result){
      $.param.fragment.ajaxCrawlable( true );
    },
    
    function(result){
      $.bbq.removeState( 'c' );
    },
    
    function(result){
      equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      deepEqual( obj.str, { a:'2', b:'2', d:'false', e:'undefined', f:'' }, '$.bbq.getState()' );
      deepEqual( obj.coerce, { a:2, b:2, d:false, e:undefined, f:'' },  '$.bbq.getState( true )' );
      equal( a.str, '2', '$.bbq.getState( "a" )' );
      equal( a.coerce, 2, '$.bbq.getState( "a", true )' );
      equal( b.str, '2', '$.bbq.getState( "b" )' );
      equal( b.coerce, 2, '$.bbq.getState( "b", true )' );
      equal( c.str, undefined, '$.bbq.getState( "c" )' );
      equal( c.coerce, undefined, '$.bbq.getState( "c", true )' );
      equal( d.str, 'false', '$.bbq.getState( "d" )' );
      equal( d.coerce, false, '$.bbq.getState( "d", true )' );
      equal( e.str, 'undefined', '$.bbq.getState( "e" )' );
      equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      equal( f.str, '', '$.bbq.getState( "f" )' );
      equal( f.coerce, '', '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), { a:'2', b:'2', d:'false', e:'undefined', f:'' }, 'event.getState()' );
        deepEqual( event.getState(true), { a:2, b:2, d:false, e:undefined, f:'' },  'event.getState( true )' );
        equal( event.getState('a'), '2', 'event.getState( "a" )' );
        equal( event.getState('a',true), 2, 'event.getState( "a", true )' );
        equal( event.getState('b'), '2', 'event.getState( "b" )' );
        equal( event.getState('b',true), 2, 'event.getState( "b", true )' );
        equal( event.getState('c'), undefined, 'event.getState( "c" )' );
        equal( event.getState('c',true), undefined, 'event.getState( "c", true )' );
        equal( event.getState('d'), 'false', 'event.getState( "d" )' );
        equal( event.getState('d',true), false, 'event.getState( "d", true )' );
        equal( event.getState('e'), 'undefined', 'event.getState( "e" )' );
        equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        equal( event.getState('f'), '', 'event.getState( "f" )' );
        equal( event.getState('f',true), '', 'event.getState( "f", true )' );
      }
    },
    
    function(result){
      $.bbq.removeState( [ 'd', 'e', 'f', 'nonexistent' ] );
    },
    
    function(result){
      equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      deepEqual( obj.str, { a:'2', b:'2' }, '$.bbq.getState()' );
      deepEqual( obj.coerce, { a:2, b:2 },  '$.bbq.getState( true )' );
      equal( a.str, '2', '$.bbq.getState( "a" )' );
      equal( a.coerce, 2, '$.bbq.getState( "a", true )' );
      equal( b.str, '2', '$.bbq.getState( "b" )' );
      equal( b.coerce, 2, '$.bbq.getState( "b", true )' );
      equal( c.str, undefined, '$.bbq.getState( "c" )' );
      equal( c.coerce, undefined, '$.bbq.getState( "c", true )' );
      equal( d.str, undefined, '$.bbq.getState( "d" )' );
      equal( d.coerce, undefined, '$.bbq.getState( "d", true )' );
      equal( e.str, undefined, '$.bbq.getState( "e" )' );
      equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      equal( f.str, undefined, '$.bbq.getState( "f" )' );
      equal( f.coerce, undefined, '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), { a:'2', b:'2' }, 'event.getState()' );
        deepEqual( event.getState(true), { a:2, b:2 },  'event.getState( true )' );
        equal( event.getState('a'), '2', 'event.getState( "a" )' );
        equal( event.getState('a',true), 2, 'event.getState( "a", true )' );
        equal( event.getState('b'), '2', 'event.getState( "b" )' );
        equal( event.getState('b',true), 2, 'event.getState( "b", true )' );
        equal( event.getState('c'), undefined, 'event.getState( "c" )' );
        equal( event.getState('c',true), undefined, 'event.getState( "c", true )' );
        equal( event.getState('d'), undefined, 'event.getState( "d" )' );
        equal( event.getState('d',true), undefined, 'event.getState( "d", true )' );
        equal( event.getState('e'), undefined, 'event.getState( "e" )' );
        equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        equal( event.getState('f'), undefined, 'event.getState( "f" )' );
        equal( event.getState('f',true), undefined, 'event.getState( "f", true )' );
      }
    },
    
    function(result){
      $.bbq.removeState();
    },
    
    function(result){
      equal( hash_actual, '#!', 'hash should just be #!' );
      deepEqual( obj.str, {}, '$.bbq.getState()' );
      deepEqual( obj.coerce, {},  '$.bbq.getState( true )' );
      equal( a.str, undefined, '$.bbq.getState( "a" )' );
      equal( a.coerce, undefined, '$.bbq.getState( "a", true )' );
      equal( b.str, undefined, '$.bbq.getState( "b" )' );
      equal( b.coerce, undefined, '$.bbq.getState( "b", true )' );
      equal( c.str, undefined, '$.bbq.getState( "c" )' );
      equal( c.coerce, undefined, '$.bbq.getState( "c", true )' );
      equal( d.str, undefined, '$.bbq.getState( "d" )' );
      equal( d.coerce, undefined, '$.bbq.getState( "d", true )' );
      equal( e.str, undefined, '$.bbq.getState( "e" )' );
      equal( e.coerce, undefined, '$.bbq.getState( "e", true )' );
      equal( f.str, undefined, '$.bbq.getState( "f" )' );
      equal( f.coerce, undefined, '$.bbq.getState( "f", true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), {}, 'event.getState()' );
        deepEqual( event.getState(true), {},  'event.getState( true )' );
        equal( event.getState('a'), undefined, 'event.getState( "a" )' );
        equal( event.getState('a',true), undefined, 'event.getState( "a", true )' );
        equal( event.getState('b'), undefined, 'event.getState( "b" )' );
        equal( event.getState('b',true), undefined, 'event.getState( "b", true )' );
        equal( event.getState('c'), undefined, 'event.getState( "c" )' );
        equal( event.getState('c',true), undefined, 'event.getState( "c", true )' );
        equal( event.getState('d'), undefined, 'event.getState( "d" )' );
        equal( event.getState('d',true), undefined, 'event.getState( "d", true )' );
        equal( event.getState('e'), undefined, 'event.getState( "e" )' );
        equal( event.getState('e',true), undefined, 'event.getState( "e", true )' );
        equal( event.getState('f'), undefined, 'event.getState( "f" )' );
        equal( event.getState('f',true), undefined, 'event.getState( "f", true )' );
      }
    },
    
    [ { a:'2', b:'2', c:true, d:false, e:'undefined', f:'' } ],
    
    [ { a:[4,5,6]}],//, b:{x:[7], y:8, z:[9,0,'true','false','undefined','']} }, 2 ],
    
    function(result){
      var b_str = old_jquery
          ? '[object Object]'
          : <any>{x:['7'], y:'8', z:['9','0','true','false','undefined','']},
        b_coerce = old_jquery
          ? '[object Object]'
          : <any>{x:[7], y:8};//z:[9,0,true,false,undefined,'']};
      
      equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      deepEqual( obj.str, { a:['4','5','6'], b:b_str }, '$.bbq.getState()' );
      deepEqual( obj.coerce, { a:[4,5,6], b:b_coerce },  '$.bbq.getState( true )' );
      deepEqual( a.str, ['4','5','6'], '$.bbq.getState( "a" )' );
      deepEqual( a.coerce, [4,5,6], '$.bbq.getState( "a", true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), { a:['4','5','6'], b:b_str }, 'event.getState()' );
        deepEqual( event.getState(true), { a:[4,5,6], b:b_coerce },  'event.getState( true )' );
        deepEqual( event.getState('a'), ['4','5','6'], 'event.getState( "a" )' );
        deepEqual( event.getState('a',true), [4,5,6], 'event.getState( "a", true )' );
      }
    },
    
    [ <any>{ a:'1', c:'2' }, 1 ],
    
    function(result){
      var b_str = old_jquery
          ? '[object Object]'
          : <any>{x:['7'], y:'8', z:['9','0','true','false','undefined','']},
        b_coerce = old_jquery
          ? '[object Object]'
          : <any>{x:[7], y:8};//, z:[9,0,true,false,undefined,'']};
      
      equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      deepEqual( obj.str, { a:['4','5','6'], b:b_str, c:'2' }, '$.bbq.getState()' );
      deepEqual( obj.coerce, { a:[4,5,6], b:b_coerce, c:2 },  '$.bbq.getState( true )' );
      if ( !old_jquery ) {
        deepEqual( event.getState(), { a:['4','5','6'], b:b_str, c:'2' }, 'event.getState()' );
        deepEqual( event.getState(true), { a:[4,5,6], b:b_coerce, c:2 },  'event.getState( true )' );
      }
    },
    
    [ <any>'#/path/to/file.php', 2 ],
    
    function(result){
      equal( hash_actual, '#!' + hash, 'hash should begin with #!' );
      equal( hash, '/path/to/file.php', '$.param.fragment()' );
      if ( !old_jquery ) {
        equal( event.fragment, '/path/to/file.php', 'event.fragment' );
      }
    },
    
    [],
    
    function(result){
      equal( hash_actual, '#!', 'hash should just be #!' );
      equal( hash, '', '$.param.fragment()' );
      if ( !old_jquery ) {
        equal( event.fragment, '', 'event.fragment' );
      }
    },
    
    function(result){
      $(window).bind( 'hashchange', function(evt){
        x = $.param.fragment();
      });
    },
    
    [ <any>'#omg_ponies', 2 ],
    
    function(result){
      equal( hash, 'omg_ponies', 'event handler 1: $.param.fragment()' );
      equal( x, 'omg_ponies', 'event handler 2: $.param.fragment()' );
      
      hash = x = '';
      equal( hash + x, '', 'vars reset' );
      
      $(window).triggerHandler( 'hashchange' );
      equal( hash, 'omg_ponies', 'event handler 1: $.param.fragment()' );
      equal( x, 'omg_ponies', 'event handler 2: $.param.fragment()' );
      
      hash = x = '';
      equal( hash + x, '', 'vars reset' );
      
      $(window).unbind( 'hashchange' );
    },
    
    [ <any>'#almost_done?not_search', 2 ],
    
    function(result){
      equal( hash, '', 'event handler 1: $.param.fragment()' );
      equal( x, '', 'event handler 2: $.param.fragment()' );
      
      var events:any;// = $.data( window, 'events' );
      ok( !events || !events.hashchange, 'hashchange event unbound' );
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
        ok( true, 'history is sporadically broken in chrome, this is a known bug, so this test is skipped in chrome' );
      } else {
        deepEqual( x, ['almost_done?not_search', 'omg_ponies', '', '/path/to/file.php'], 'back button and window.bbq.go(-1) should work' );
      }
      
      $(window).unbind( 'hashchange' );
      var events: any;// = $.data( window, 'events' );
      ok( !events || !events.hashchange, 'hashchange event unbound' );
    },
    
    function(result){
      $.param.fragment.ajaxCrawlable( false );
    },
    
    [ '#all_done' ]
    
  );
  
});


}); // END CLOSURE