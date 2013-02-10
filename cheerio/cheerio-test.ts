/// <reference path="cheerio.d.ts" />

import cheerio = module("cheerio");

var $ = cheerio.load("<html></html>");
var $el = $('selector');
var $multiEl = $('seletor', 'selector', 'selector');

$el.addClass("class").addClass("test");
$el.hasClass("test");
$el.removeClass("class").removeClass("test");

$el.attr('class');
$el.attr('class', 'test');
$el.removeAttr("class").removeAttr("test");

$el.find("ul").find("> li");

$el.parent().parent();
$el.next().next();
$el.prev().prev();
$el.siblings().siblings();

$el.children().children();
$el.children("li").children("a");

$el.children().each((index, element) => {
    $(element).find('t');
});

$el.children().map((index, element) => {
    return $(element).find('t');
});

$el.children().filter((index) => {
    return $el.children().eq(index).find('t');
});

$el.filter('span').filter('li');

$el.first().last().find('t');

$('div').eq(0).find('b');

$('#id').append("test html", "other html").find('a');
$('#id').prepend("test html", "other html").find('a');
$('#id').after("test html", "other html").find('a');
$('#id').before("test html", "other html").find('a');

$el.remove('div').remove('a');

$('#id').replaceWith('some html').parent();
$('#id').empty().parent();

$el.html();
$el.html("<html></html>").find('div');

$el.text();
$el.text('some text');

$el.toArray();
$el.clone().find('a').parent();
$el.root().find('a');

$el.dom();
