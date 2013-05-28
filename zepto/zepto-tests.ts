/// <reference path="zepto.d.ts" />

$('div')  //=> all DIV elements on the page
$('#foo') //=> element with ID "foo"
$("<p>Hello</p>") //=> the new P element
$("<p />", { text: "Hello", id: "greeting", css: { color: 'darkblue' } })

Zepto(function ($) {
	alert('Ready to Zepto!');
})

$.camelCase('hello-there') //=> "helloThere"
$.camelCase('helloThere')  //=> "helloThere"

$.each(['a', 'b', 'c'], function (index, item): bool {
	console.log('item %d is: %s', index, item);
	return true;
});

var hash = { name: 'zepto.js', size: 'micro' }
$.each(hash, function (key, value) {
	console.log('%s: %s', key, value);
	return true;
});

var target = { one: 'patridge' },
	source = { two: 'turtle doves' }

$.extend(target, source);

$.fn.empty = function () {
	return this.each(function () { this.innerHTML = '' });
}

$.isPlainObject({});         // => true
$.isPlainObject(new Object); // => true
$.isPlainObject(new Date);   // => false
$.isPlainObject(window);     // => false

$('form label').after('<p>A note below the label</p>');

$('ul').append('<li>new list item</li>');

$('<li>new list item</li>').appendTo('ul');

var form = $('form')
form.attr('action')             //=> read value
form.attr('action', '/create')  //=> set value
form.attr('action', null)       //=> remove attribute

form.attr('action', '/create').attr('action'); // => create and read

// multiple attributes:
form.attr({
	action: '/create',
	method: 'post'
});

$('ol').children('*:nth-child(2n)');

var elem = $('h1')
elem.css('background-color')          // read property
elem.css('background-color', '#369')  // set property
elem.css('background-color', '')      // remove property

// set multiple properties:
elem.css({ backgroundColor: '#8EE', fontSize: 28 });

$('form input').each(function (index) {
	console.log('input %d is: %o', index, this);
	return true;
});


$('li').eq(0);   //=> only the first list item
$('li').eq(-1);  //=> only the last list item

var elements = $('h2')
elements.get()   //=> get all headings as an array
elements.get(0)  //=> get first heading node

$('#foo').height();   // => 123
$(window).height();   // => 838 (viewport height)
$(document).height(); // => 22302

$('.comment p').html(function (idx, oldHtml) {
	return oldHtml.replace(/(^|\W)@(\w{1,15})/g,
	  '$1@<a href="http://twitter.com/$2">$2</a>')
});

$('li:nth-child(2)').index();

$('<p>Emphasis mine.</p>').insertAfter('blockquote');

$('<p>See the following table:</p>').insertBefore('table');

$('li').last();

elements.map(function () { return $(this).text() }).get().join(', ');

$('dl dt').next();   //=> the DD elements

$('h1').parents();   //=> [<div#container>, <body>, <html>]

$('body > *').pluck('nodeName'); // => ["DIV", "SCRIPT"]

var element = $("<div/>");
var pos = element.position()

// position a tooltip relative to the element
$('#tooltip').css({
	position: 'absolute',
	top: pos.top - 30,
	left: pos.left
})

$('ul').prepend('<li>first list item</li>');

$('<li>first list item</li>').prependTo('ul');

var input = $('input[type=text]');
$('#too_long').toggle(input.val().length > 140);

$(document.body).append('<div id=wrapper><p>Content</p></div>');
$('#wrapper p').unwrap().parents();  //=> [<body>, <html>]

$('#foo').width();   // => 123
$(window).width();   // => 768 (viewport width)
$(document).width(); // => 768

// wrap each button in a separate span:
$('.buttons a').wrap('<span>');

// wrap each code block in a div and pre:
$('code').wrap('<div class=highlight><pre /></div>');

// wrap all form inputs in a span with classname
// corresponding to input type:
$('input').wrap(function (index) {
	return '<span class=' + this.type + 'field />';
})
//=> <span class=textfield><input type=text /></span>,
//   <span class=searchfield><input type=search /></span>

// WARNING: will not work as expected!
$('<em>broken</em>').wrap('<li>').appendTo(document.body);
// do this instead:
$('<em>better</em>').appendTo(document.body).wrap('<li>');

$('a.button').wrapAll('<div id=buttons />');

// wrap the contents of each navigation link in a span:
$('nav a').wrapInner('<span>');

// wrap the contents of each list item in a paragraph and emphasis:
$('ol li').wrapInner('<p><em /></p>');

$.Event('mylib:change', { bubbles: false });

var obj = { name: 'Zepto' };
var handler = function (e: Event) {
	console.log("hello from + ", this.name);
	return true;
};

// ensures that the handler will be executed in the context of `obj`:
$(document).on('click', <(e: Event) => bool>$.proxy(handler, obj));

elem = $('#content');
// observe all clicks inside #content:
elem.on('click', function (e) { return true; });
// observe clicks inside navigation links in #content
elem.on('click', 'nav a', function (e) { return true; });
// all clicks inside links in the document
$(document).on('click', 'a', function (e) { return true; });

// add a handler for a custom event
$(document).on(
	'mylib:change',
	<(e: Event) => bool>function (e, from, to) {
		console.log('change on %o with data %s, %s', e.target, from, to);
		return true;
	}
)
// trigger the custom event
$(document.body).trigger('mylib:change', ['one', 'two']);

$(document).on('ajaxBeforeSend',
	<(e: Event) => bool>function (e, xhr, options) {
		// This gets fired for every Ajax request performed on the page.
		// The xhr object and $.ajax() options are available for editing.
		// Return false to cancel this request.
		return true;
	});

$.ajax({
	type: 'GET',
	url: '/projects',
	// data to be added to query string:
	data: { name: 'Zepto.js' },
	// type of data we are expecting in return:
	dataType: 'json',
	timeout: 300,
	context: $('body'),
	success: function (data) {
		// Supposing this JSON payload was received:
		//   {"project": {"id": 42, "html": "<div>..." }}
		// append the HTML to context object.
		this.append(data.project.html)
	},
	error: function (xhr, type) {
		alert('Ajax error!')
	}
})

// post a JSON payload:
$.ajax({
	type: 'POST',
	url: '/projects',
	// post payload:
	data: JSON.stringify({ name: 'Zepto.js' }),
	contentType: 'application/json'
})

$.get('/whatevs.html', function (response) {
	$(document.body).append(response)
});

$.getJSON('/awesome.json', function (data) {
	console.log(data)
});

// fetch data from another domain with JSONP
$.getJSON('//example.com/awesome.json?callback=?', function (remoteData) {
	console.log(remoteData)
});

$.param({ foo: { one: 1, two: 2 } });
//=> "foo[one]=1&foo[two]=2)"

$.param({ ids: [1, 2, 3] });
//=> "ids[]=1&ids[]=2&ids[]=3"

$.param({ ids: [1, 2, 3] }, true);
//=> "ids=1&ids=2&ids=3"

$.param({ foo: 'bar', nested: { will: 'not be ignored' } });
//=> "foo=bar&nested[will]=not+be+ignored"

$.param({ foo: 'bar', nested: { will: 'be ignored' } }, true);
//=> "foo=bar&nested=[object+Object]"

$.post('/create', { sample: 'payload' }, function (response) {
	// process response
});

$.post('/create', $('#some_form').serialize(), function (response) {
	// ...
});

$('#some_element').load('/foo.html #bar');

$('form').serializeArray();
//=> [{ name: 'size', value: 'micro' },
//    { name: 'name', value: 'Zepto' }];

$.fx.off = true;
$.fx.speeds._default = 500;
$.fx.speeds.fast = 100;
$.fx.speeds.slow = 1000;
(<any>$.fx.speeds).custom = 20;

$("#some_element").animate({
	opacity: 0.25, left: '50px',
	color: '#abcdef',
	rotateZ: '45deg', translate3d: '0,10px,0'
}, 500, 'ease-out');

$.os.phone;
$.os.tablet;

// specific OS
$.os.ios;
$.os.android;
$.os.webos;
$.os.blackberry;
$.os.bb10;
$.os.rimtabletos;

// specific device type
$.os.iphone;
$.os.ipad;
$.os.touchpad;
$.os.kindle;

// specific browser
$.browser.chrome;
$.browser.firefox;
$.browser.silk;
$.browser.playbook;

// Additionally, version information is available as well.
// Here's what's returned for an iPhone running iOS 6.1.
!!$.os.phone;         // => true
!!$.os.iphone;        // => true
!!$.os.ios;           // => true
!!$.os.version;       // => "6.1"
!!$.browser.version;  // => "536.26"
