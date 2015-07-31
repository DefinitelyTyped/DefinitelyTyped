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
var listItems = $.slice(els);
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

// Ajax:
$.ajax({
    url: "announcement.html",
    dataType: "html",
    success: function(data) {
        // Insert the fragment into the page:
        $("#content").html(data);
    },
    error: function(data) {
        $("#content").html("<h4>There was an error while trying to get the file.</h4>");
    }
});
$.ajax({
    url: "me.json",
    success: function(data) {
        // Before using a JSON object, you need to parse it.
        // Here we parse it and assign it to a variable:
        var me = JSON.parse(data);
        // Here we access the properties of the JSON object:
        $("#content").html(me.firstName + " " + me.lastName);
    },
    error: function(data) {
        $('#content').html("<h4>There was an error while trying to get the file.</h4>");
    }
});
var myData = {
    "name": "Bozo the Clown",
    "occupation": "Clown"
};
var mySuccessCallback = function() {
    console.log('The post was a success!');
};
var myErrorCallback = function() {
    console.log('Ooops! There was a problem posting this.');
};
$.ajax({
    url: "/path/to/controller",
    method: 'POST',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "async": true,
        "Access-Control-Allow-Origin": "*",
        "Accept": "text/plain"
    },
    data: myData,
    success: mySuccessCallback,
    error: myErrorCallback
});
$.get('http://my.com/data/stuff.html')
    .then(function(response) {
        console.log("Success!", response);
    }, function(error) {
        console.error("Failed!", error);
    });

$.get('http://my.com/data/stuff.html')
    .then(function(response) {
        console.log("Success!", response);
    })
    .catch(function(error) {
        console.error("Failed!", error);
    });
$.get('story.json')
    .then(JSON.parse)
    .then(function(response) {
        console.log("Yey JSON!", response);
    });
$.getJSON('/data/deserts.json', function(desserts: Array<any>) {
    desserts.forEach(function(dessert) {
        $('#deserts').append('<li>' + dessert.name + '</li>');
    });
});
$.post("updateUser.php",
    { "name": "Joe", "time": "10PM" },
    function() {
        console.log('The POST was successful.')
    },
    "json"
    );
$.JSONP({ url: 'https://api.github.com/users/yui?callback=?' })
    .then(function(users) {
        $('.list').append('<li><h3>The name of the library</h3><h4>' + users.data.name + '</h4></li>');
    })
    .catch(function(err) {
        console.log('Unable to get data.')
    });

$.JSONP({
    url: 'http://www.geonames.org/postalCodeLookupJSON?postalcode=94102&'
})
    .then(function(data) {
        $('.list').append('<li><h3>My Location</h3><h4>' + data.postalcodes[0].adminName2 + ', ' + data.postalcodes[0].adminName1 + '</h4></li>');
    })
    .catch(function(err) {
        console.log('Unable to get data.')
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
var arraySubscriber = function(topic: string, data: any) {
    $('.list').append('<li><h3>' + topic + '</h3><h4>' + data + '</h4></li>');
    var newsSubscription = $.subscribe('news/update', arraySubscriber);
};
$.publish('news/update', 'The New York Stock Exchange rose an unprecedented 1000 points in just three minutes. Analysts and investors are confused and uncertain how to respond.');
$.unsubscribe('news/update');
// Due to being unsubscribed above, this does nothing:
$.publish('news/update', 'We have nothing further to comment at this time.');

