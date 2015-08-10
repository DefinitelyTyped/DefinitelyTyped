/// <reference path="chocolatechipjs.d.ts" />
// ChocolateChipStatic -- DOM creation, etc.
$(function() {
    alert('Ready to do stuff!');
});
var docRoot = $();
var divTag = $('div');
var divClass = $('.div');
var divID = $('#div');
var divAttr = $('[name=div]');
var documentElement = $();
var divTag2 = $(divTag);
var nodeName = divTag2[0].nodeName;

// Assorted properties and functions on ChocolateChipStatic:
var version = $.version;
var libraryName = $.libraryName;
var els = $('li');
var madeEls = $.make('<p>Stuff</p>');
var moreEls = $.html('<p>Stuff</p>');
var oldTag = $('#oldTag');
var newTag = $('#newTag');
$.replace(oldTag, newTag);
$.require('./scripts/myscript.js', function() {
    $.noop;
});
$.defer(function() {
    console.log("This comes after Squawk!");
});
var concatenation = $.concat('This', ' ', 'is', ' ', 'a', ' ', 'string', '.');
var arrayOfStringWords = $.w('This is a string');


// Boolean tests:
$.isString('This is a string');
$.isArray([1, 2, 3]);
$.isFunction($.noop);
$.isObject({ name: 'Me' });
$.isObject(new Object());
$.isEmptyObject({});
$.isNumber(123);
$.isInteger(123);
$.isInteger(123.123); // should return false
$.isFloat(123.123); // should return true
var newUuid = $.makeUuid();
$.each(['a', 'b', 'c'], function(ctx, idx) {
    console.log(ctx);
    console.log(idx);
});

// Plugin interface for ChocolateChipElementArray:
$.fn.extend({
    whateverProperty: "whatever",
    whateverMethod: function() {
        alert("Whatever!");
    }
});

// ChocolateChipElementArray extensions:
$('li').each(function(ctx, idx) {
    console.log(ctx.nodeName);
});
var uniqueElements = $('li').unique();
var secondElement = $('li').eq(1);
var lastElement = $('li').eq(-1);
var whichIndex = $('li').index($('.selected'));
var whichListItemIndex = $('li').eq(3).index();
$('.elems').is('div').each(function(ctx) {
    console.log('This element is a div.');
});
$('.elems').isnt('p').each(function() {
    console.log('This element is not a paragraph tag.');
});
$('li').has('p').each(function(ctx) {
    console.log('This list item has a paragraph tag.')
});
$('li').hasnt('p').each(function(ctx) {
    console.log('This list item does not have a paragraph tag.')
});
$('ul').find('li').each(function(ctx) {
    console.log(ctx);
});
$('li').css('color');
$('li').css('color', 'red');
$('li').css({ "color": "red", "background-color": "yellow" });
var elemWidth = $('#header').width();
var elemHeight = $('#header').height();
var offset = $('h1').offset();
console.log(offset.top);
console.log(offset.left);
console.log(offset.bottom);
console.log(offset.right);
$('li.selected').prependTo('#selectedItems');
$('li.selected').appendTo('#selectedItems');
$('ul').before("<h2>Subtitle</h2>");
$('ul').after("<p>Footer stuff here.</p>");
var h1Text = $('h1').text();
$('h1').text('The New Title');
$('ul').insert("<li>1</li><li>2</li><li>3</li>", "first");
$('ul').insert("<li>1</li><li>2</li><li>3</li>", "last");
$('ul').insert("<li>1</li><li>2</li><li>3</li>", 3);
$('ul').insert("<li>1</li><li>2</li><li>3</li>");
$('ul').html('<li>1</li><li><2/li><li>3</li>');
$('ul').html('');
$('ul').prepend('<li class="title">The title</li>');
$('ul').append('<li>The Last Item</li>');
var inputName = $('input').attr('name');
$('input').attr('name', 'wobba');
var inputName = $('input').prop('name');
$('input').prop('name', 'wobba');
$('input').hasAttr('disabled').css('border', 'solid 1px red');
$('input').removeAttr('disabled');
$('article').hasClass('current').css('display', 'block');
$('article').addClass('current');
$('article').removeClass('current');
$('article').toggleClass("current");
$('h1').dataset('status', 'ready');
var theStatus = $('h1').dataset('status');
var theText = $('textarea').val();
$('textarea').val('This is the new text.');
$('input').disable();
$('input').enable();
$('ul').hide();
$('ul').hide('slow');
$('ul').hide('fast');
$('ul').hide(1000);
$('ul').hide('fast', function() {
    console.log('Finished hiding these.');
});
$('ul').show();
$('ul').show('slow');
$('ul').show('fast');
$('ul').show(1000);
$('ul').show('fast', function() {
    console.log('Finished hiding these.');
});
$('#list').prev().css('display', 'none');
$('#list').next().css('display', 'none');
$('ul').first().css('font-weight', 'bold');
$('ul').last().css('font-style', 'italic');
$('ul').children().css('display', 'block');
$('li').parent().css('border', 'solid 2px green');
$('#list').ancestor('article').css('margin', "20px");
$('#list').ancestor(5).css('margin', "20px");
$('#list').closest('article').css('margin', "20px");
$('button').siblings().css('padding', "20px");
$('button').siblings("p").css('padding', "20px");
var cloned = $('#list').clone();
$('#list').wrap('<div class="very-special"></div>');
$('#list').unwrap();
$('#list').remove();
$('#list').empty();
var thePrice = $('#list').data('price');
$('#list').data('price', '$1000');
$('#list').removeData('price');

// Animate:
$('#list').animate({
    "transform": "rotate3d(30, 150, 200, 180deg) scale(3) translate3d(-50%, -30%, 140%)",
    "opacity": .25,
    "transform-style": "preserve-3d",
    "perspective": 500
},
    '2s',
    "ease-in-out"
    );

// Form to JSON:
$.form2JSON($('form')[0], '.');


// Strings:
$.camelize("this-is-a-string"); // should return "thisIsAString"
$.deCamelize("thisIsAString"); // Should return "this-is-a-string"
$.capitalize("a string"); // Should return "A string"
$.capitalize("a string", true); // Should return "A STRING"


// Booleans:
var isiPhone = $.isiPhone;
var isiPad = $.isiPad;
var isiPod = $.isiPod;
var isiOS = $.isiOS;
var isAndroid = $.isAndroid;
var isWebOS = $.isWebOS;
var isBlackberry = $.isBlackberry;
var isTouchEnabled = $.isTouchEnabled;
var isOnline = $.isOnline;
var isStandalone = $.isStandalone;
var isiOS6 = $.isiOS6;
var isiOS7 = $.isiOS7;
var isWin = $.isWin;
var isWinPhone = $.isWinPhone;
var isIE10 = $.isIE10;
var isIE11 = $.isIE11;
var isWebkit = $.isWebkit;
var isMobile = $.isMobile;
var isDesktop = $.isDesktop;
var isSafari = $.isSafari;
var isNativeAndroid = $.isNativeAndroid;


// Events:
$('li').bind('click', function() {
    $.noop;
}, false);
$('li').unbind('click', function() {
    $.noop;
}, false);
$('ul').delegate('click', 'li', function() {
    $.noop;
}, false);
$('ul').undelegate('click', 'li', function() {
    $.noop;
}, false);
$('li').on('click', function() {
    $.noop;
})
$('ul').on('click', 'li', function() {
    console.log($(this).text())
});
$('li').off('click');
$('li').off('click', 'li');
$('button').trigger('click');

$('.selected').data('selection', 'This is awesome!'); // set the value of data value to "This is Awesome!"
$('.selected').data('selection'); // return the data value of "selection" on ".selected"

// Promises:
var myPromise = new Promise(function(resolve, reject) {
    $.noop;
});

var myPromise = new Promise(function(resolve, reject) {
    // Resolve the promise:
    resolve('Success!');
    // or reject it:
    // reject('Lost in Space!');
});
myPromise.then(function(value) {
    // Success:
    console.log(value);
  },
  // Opps! There was a problem:
  function(reason) {
    console.log(reason);
});

// Fetch API
//===========
// GET:
interface WineObject {
  data: Array<WineInterface>;
}
interface WineInterface {
  wine: {
    name: string;
  }
}
fetch('../data/wines.json')
.then($.json)
.then(function<WineObject>(obj: any):any {
  $('#message_ajax').empty();
  obj.data.forEach(function(wine: any) {
    $('#message_ajax').append('<li>' + wine.name + '</li>');
  })
});

// POST:
interface postData {
  email: string;
  name: string;
  msg: string;
}
var formData = $.serialize($('form')[0]);
fetch('../controllers/php-post.php', {
  method: 'post',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: formData
})
.then($.json) 
.then(function<postData>(data: any): any {
  if(data.email_check == "valid"){
    $("#message_ajax").html("<div class='successMessage'>" + data.email + " is a valid e-mail address. Thank you, " + data.name + ".</div>");
    $("#message_ajax").append('<p>' + data.msg + '</p>');
  } else {
    $("#message_ajax").html("<div class='errorMessage'>Sorry " + data.name + ", " + data.email + " is NOT a valid e-mail address. Try again.</div>");
  }
});
// PUT:
interface putData {
  base: string;
  result: string;
  fileName: string;
}
var putData = $('#fileText').val();
fetch('../controllers/php-put.php', {
  method: 'put',
  headers: {  
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
  },
  body: putData
})
.then($.json) 
.then(function<putData>(data:any): any {
   console.dir(data.base);
   $("#message_ajax").append('<p>' + data.result + '</p>');
   $("#message_ajax").append('<p>The file name is: ' + data.fileName + '</p>');
})
.catch(function(error:Error) {
   console.log(error);
   $("#message_ajax").html("<div class='errorMessage'>Sorry, put was not successful.</div>");
});


// DELETE:
interface deleteData {
  result: string;
}
var file = $('#fileName').val();
fetch('../controllers/php-delete.php', {
  method: 'delete',
  headers: {  
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
  },
  body: file
})
.then($.json) 
.then(function<deleteData>(data: any): any {
   $("#message_ajax").html("<div>DELETE was sent to the server successfully.</div>");
   $("#message_ajax").append('<p>' + data.result + '</p>');
},
function(data: any) {
  console.log('PROBLEM')
  console.log(data);
})
.catch(function(error: any) {
   $("#message_ajax").html("<div class='errorMessage'>Sorry, 'DELETE' was not successful.</div>");
   error.reject();
});

// $.jsonp:
$.jsonp('https://api.github.com/users/rbiggs/repos?name=chipper', {timeout: 10000})
.then($.json)
.then(function(obj: any): any {
  console.log(obj);
  obj.data.forEach(function(repo: any): any {
    $('#message_ajax').append("<li>" + repo.name + "</li>");
  });
})
.catch(function(error: any): any {
  $('#message_ajax').append("<li>" + error.message + "</li>")
});

// Templates:
var myTemplate = '<li>Name: [[= data.name]]</li>';
var userInfo = {
    name: 'Wobba',
    age: 100,
    job: 'Rocket Scientist',
    salary: '$1,000,000,000'
};
var parsedTempl8 = $.template(myTemplate);
$('#user').html(parsedTempl8(userInfo));

// Output a simple array of data:
var simpleArray = ['One', 'Two', 'Three', 'Four', 'Five'];
var repeaterTmplate1 = '<li>[[= data ]]</li>';
$.template.repeater($('#arrayList'), repeaterTmplate1, simpleArray);

// Output an array of objects:
var luminaries = {
    persons:
    [
        { firstName: "Albert", lastName: "Einstein" },
        { firstName: "Steven", lastName: "Hawking" },
        { firstName: "Neil", lastName: "deGrasse Tyson" },
        { firstName: "Leonardo", lastName: "Da Vinci" },
        { firstName: "Nicholas", lastName: "Copernicus" }
    ]
};
var repeaterTmplate2 = '<li>[[= data.firstName ]], [[= data.lastName]]</li>';
// Pass in the array of persons:
$.template.repeater($('#objectArrayList'), repeaterTmplate2, luminaries.persons);

// Pub/Sub:
var arraySubscriber = function(topic: string, data: any): any {
    $('.list').append('<li><h3>' + topic + '</h3><h4>' + data + '</h4></li>');
};
var newsSubscription = $.subscribe('news/update', arraySubscriber);
$.publish('news/update', 'The New York Stock Exchange rose an unprecedented 1000 points in just three minutes. Analysts and investors are confused and uncertain how to respond.');
$.unsubscribe('news/update');
// Due to being unsubscribed above, this does nothing:
$.publish('news/update', 'We have nothing further to comment at this time.');

