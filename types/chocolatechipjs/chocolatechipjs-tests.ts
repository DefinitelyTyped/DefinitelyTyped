// ChocolateChipStatic -- DOM creation, etc.
$(() => {
    alert('Ready to do stuff!');
});
const docRoot = $();
const divTag = $('div');
const divClass = $('.div');
const divID = $('#div');
const divAttr = $('[name=div]');
const documentElement = $();
const divTag2 = $(divTag);
const nodeName = divTag2[0].nodeName;

// Assorted properties and functions on ChocolateChipStatic:
const version = $.version;
const libraryName = $.libraryName;
const els = $('li');
const madeEls = $.make('<p>Stuff</p>');
const moreEls = $.html('<p>Stuff</p>');
const oldTag = $('#oldTag');
const newTag = $('#newTag');
$.replace(oldTag, newTag);
$.require('./scripts/myscript.js', () => {
    $.noop;
});
$.defer(() => {
    console.log("This comes after Squawk!");
});
const concatenation = $.concat('This', ' ', 'is', ' ', 'a', ' ', 'string', '.');
const arrayOfStringWords = $.w('This is a string');

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
const newUuid = $.makeUuid();
$.each(['a', 'b', 'c'], (ctx: string, idx: number) => {
    console.log(ctx);
    console.log(idx);
});

// Plugin interface for ChocolateChipElementArray:
$.fn.extend({
    whateverProperty: "whatever",
    whateverMethod() {
        alert("Whatever!");
    }
});

// ChocolateChipElementArray extensions:
$('li').each((ctx, idx) => {
    console.log(ctx.nodeName);
});
const uniqueElements = $('li').unique();
const secondElement = $('li').eq(1);
const lastElement = $('li').eq(-1);
const whichIndex = $('li').index($('.selected'));
const whichListItemIndex = $('li').eq(3).index();
$('.elems').is('div').each(ctx => {
    console.log('This element is a div.');
});
$('.elems').isnt('p').each(() => {
    console.log('This element is not a paragraph tag.');
});
$('li').has('p').each(ctx => {
    console.log('This list item has a paragraph tag.');
});
$('li').hasnt('p').each(ctx => {
    console.log('This list item does not have a paragraph tag.');
});
$('ul').find('li').each(ctx => {
    console.log(ctx);
});
$('li').css('color');
$('li').css('color', 'red');
$('li').css({ color: "red", "background-color": "yellow" });
const elemWidth = $('#header').width();
const elemHeight = $('#header').height();
const offset = $('h1').offset();
console.log(offset.top);
console.log(offset.left);
console.log(offset.bottom);
console.log(offset.right);
$('li.selected').prependTo('#selectedItems');
$('li.selected').appendTo('#selectedItems');
$('ul').before("<h2>Subtitle</h2>");
$('ul').after("<p>Footer stuff here.</p>");
const h1Text = $('h1').text();
$('h1').text('The New Title');
$('ul').insert("<li>1</li><li>2</li><li>3</li>", "first");
$('ul').insert("<li>1</li><li>2</li><li>3</li>", "last");
$('ul').insert("<li>1</li><li>2</li><li>3</li>", 3);
$('ul').insert("<li>1</li><li>2</li><li>3</li>");
$('ul').html('<li>1</li><li><2/li><li>3</li>');
$('ul').html('');
const listContent = $('ul').html();
$('ul').prepend('<li class="title">The title</li>');
$('ul').append('<li>The Last Item</li>');
const inputName = $('input').attr('name');
$('input').attr('name', 'wobba');
const inputProperty = $('input').prop('disabled');
$('input[type=checked]').prop('checked', true);
$('input').removeProp('disabled');
$('input').hasAttr('disabled').css('border', 'solid 1px red');
$('input').removeAttr('disabled');
$('article').hasClass('current').css('display', 'block');
$('article').addClass('current');
$('article').removeClass('current');
$('article').toggleClass("current");
$('h1').dataset('status', 'ready');
const theStatus = $('h1').dataset('status');
const theText = $('textarea').val();
$('textarea').val('This is the new text.');
$('input').disable();
$('input').enable();
$('ul').hide();
$('ul').hide('slow');
$('ul').hide('fast');
$('ul').hide(1000);
$('ul').hide('fast', () => {
    console.log('Finished hiding these.');
});
$('ul').show();
$('ul').show('slow');
$('ul').show('fast');
$('ul').show(1000);
$('ul').show('fast', () => {
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
const cloned = $('#list').clone();
$('#list').wrap('<div class="very-special"></div>');
$('#list').unwrap();
$('#list').remove();
$('#list').empty();
const thePrice = $('#list').data('price');
$('#list').data('price', '$1000');
$('#list').removeData('price');

// Animate:
$('#list').animate({
    transform: "rotate3d(30, 150, 200, 180deg) scale(3) translate3d(-50%, -30%, 140%)",
    opacity: .25,
    "transform-style": "preserve-3d",
    perspective: 500
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
const isiPhone = $.isiPhone;
const isiPad = $.isiPad;
const isiPod = $.isiPod;
const isiOS = $.isiOS;
const isAndroid = $.isAndroid;
const isWebOS = $.isWebOS;
const isBlackberry = $.isBlackberry;
const isTouchEnabled = $.isTouchEnabled;
const isOnline = $.isOnline;
const isStandalone = $.isStandalone;
const isiOS6 = $.isiOS6;
const isiOS7 = $.isiOS7;
const isWin = $.isWin;
const isWinPhone = $.isWinPhone;
const isIE10 = $.isIE10;
const isIE11 = $.isIE11;
const isWebkit = $.isWebkit;
const isMobile = $.isMobile;
const isDesktop = $.isDesktop;
const isSafari = $.isSafari;
const isNativeAndroid = $.isNativeAndroid;

// Events:
$('li').bind('click', () => {
    $.noop;
}, false);
$('li').unbind('click', () => {
    $.noop;
}, false);
$('ul').delegate('click', 'li', () => {
    $.noop;
}, false);
$('ul').undelegate('click', 'li', () => {
    $.noop;
}, false);
$('li').on('click', () => {
    $.noop;
});
$('ul').on('click', 'li', () => {
    console.log($(this).text());
});
$('li').off('click');
$('li').off('click', 'li');
$('button').trigger('click');

$('.selected').data('selection', 'This is awesome!'); // set the value of data value to "This is Awesome!"
$('.selected').data('selection'); // return the data value of "selection" on ".selected"

// Promises:
let myPromise = new Promise((resolve, reject) => {
    $.noop;
});

myPromise = new Promise((resolve, reject) => {
    // Resolve the promise:
    resolve('Success!');
    // or reject it:
    // reject('Lost in Space!');
});
myPromise.then(value => {
    // Success:
    console.log(value);
  },
  // Opps! There was a problem:
  reason => {
    console.log(reason);
});

// Fetch API
// ===========
// GET:
interface WineObject {
  data: WineInterface[];
}
interface WineInterface {
  wine: {
    name: string;
  };
}
fetch('../data/wines.json')
.then($.json)
.then((obj: any) => {
  $('#message_ajax').empty();
  obj.data.forEach((wine: any) => {
    $('#message_ajax').append(`<li>${wine.name}</li>`);
  });
});

// POST:
interface postData {
  email: string;
  name: string;
  msg: string;
}
const formData = $.serialize($('form')[0]);
fetch('../controllers/php-post.php', {
  method: 'post',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: formData
})
.then($.json)
.then((data: any) => {
  if (data.email_check === "valid") {
    $("#message_ajax").html(`<div class='successMessage'>${data.email} is a valid e-mail address. Thank you, ${data.name}.</div>`);
    $("#message_ajax").append(`<p>${data.msg}</p>`);
  } else {
    $("#message_ajax").html(`<div class='errorMessage'>Sorry ${data.name}, ${data.email} is NOT a valid e-mail address. Try again.</div>`);
  }
});
// PUT:
interface putData {
  base: string;
  result: string;
  fileName: string;
}
const putData = $('#fileText').val();
fetch('../controllers/php-put.php', {
  method: 'put',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: putData
})
.then($.json)
.then((data: any) => {
   console.dir(data.base);
   $("#message_ajax").append(`<p>${data.result}</p>`);
   $("#message_ajax").append(`<p>The file name is: ${data.fileName}</p>`);
})
.catch((error: Error) => {
   console.log(error);
   $("#message_ajax").html("<div class='errorMessage'>Sorry, put was not successful.</div>");
});

// DELETE:
interface deleteData {
  result: string;
}
const file = $('#fileName').val();
fetch('../controllers/php-delete.php', {
  method: 'delete',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: file
})
.then($.json)
.then((data: any) => {
   $("#message_ajax").html("<div>DELETE was sent to the server successfully.</div>");
   $("#message_ajax").append(`<p>${data.result}</p>`);
},
(data: any) => {
  console.log('PROBLEM');
  console.log(data);
})
.catch((error: any) => {
   $("#message_ajax").html("<div class='errorMessage'>Sorry, 'DELETE' was not successful.</div>");
   error.reject();
});

// Timeout:
const formData2 = $.serialize($('form')[0]);
fetch('../controllers/php-post.php', {
    method: 'post',
    headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: formData,
    // Set timeout:
    timeout: 10000
})
    .then($.json)
    .then((data: any) => {
        if (data.email_check === "valid") {
            $("#message_ajax").html(`<div class='successMessage'>${data.email} is a valid e-mail address. Thank you, ${data.name}.</div>`);
            $("#message_ajax").append(`<p>${data.msg}</p>`);
        } else {
            $("#message_ajax").html(`<div class='errorMessage'>Sorry ${data.name}, ${data.email} is NOT a valid e-mail address. Try again.</div>`);
        }
    })
    // Catch timeout:
    .catch(error => {
      console.log(error);
    });

// $.jsonp:
$.jsonp('https://api.github.com/users/rbiggs/repos?name=chipper', {timeout: 10000})
.then($.json)
.then((obj: any) => {
  console.log(obj);
  obj.data.forEach((repo: any) => {
    $('#message_ajax').append(`<li>${repo.name}</li>`);
  });
})
.catch((error: any) => {
  $('#message_ajax').append(`<li>${error.message}</li>`);
});

// Templates:
const myTemplate = '<li>Name: [[= data.name]]</li>';
const userInfo = {
    name: 'Wobba',
    age: 100,
    job: 'Rocket Scientist',
    salary: '$1,000,000,000'
};
const parsedTempl8 = $.template(myTemplate);
$('#user').html(parsedTempl8(userInfo));

// Output a simple array of data:
const simpleArray = ['One', 'Two', 'Three', 'Four', 'Five'];
const repeaterTmplate1 = '<li>[[= data ]]</li>';
$.template.repeater($('#arrayList'), repeaterTmplate1, simpleArray);

// Output an array of objects:
const luminaries = {
    persons:
    [
        { firstName: "Albert", lastName: "Einstein" },
        { firstName: "Steven", lastName: "Hawking" },
        { firstName: "Neil", lastName: "deGrasse Tyson" },
        { firstName: "Leonardo", lastName: "Da Vinci" },
        { firstName: "Nicholas", lastName: "Copernicus" }
    ]
};
const repeaterTmplate2 = '<li>[[= data.firstName ]], [[= data.lastName]]</li>';
// Pass in the array of persons:
$.template.repeater($('#objectArrayList'), repeaterTmplate2, luminaries.persons);

// Code for declarative repeater:
$.template.data['myRepeater'] = [{ name: "Joe" }, { name: "Sally" }, {name: "Tom" }];
$.template.repeater();

// Pub/Sub:
const newsSubscription = $.subscribe('news/update', (topic: string, data: any) => {
    $('.list').append(`<li><h3>${topic}</h3><h4>${data}</h4></li>`);
});
$.publish('news/update', 'The New York Stock Exchange rose an unprecedented 1000 points in just three minutes. Analysts and investors are confused and uncertain how to respond.');
$.unsubscribe('news/update');
// Due to being unsubscribed above, this does nothing:
$.publish('news/update', 'We have nothing further to comment at this time.');
