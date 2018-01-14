

import * as cheerio from 'cheerio';

/*
 * LOADING
 */
let html =
`<ul id="fruits">
  <li class="orange">Apple</li>
  <li class="class">Orange</li>
  <li class="pear">Pear</li>
  <input type="text" />
</ul>`;

// Preferred Method
var $ = cheerio.load(html);
// Directly load element
cheerio(html);
cheerio('ul', html);
cheerio('li', 'ul', html);

const $fromElement = cheerio.load($("ul").get(0));

if ($fromElement("ul > li").length !== 3) {
  throw new Error("Expecting 3 elements when passing `CheerioElement` to `load()`");
}

$ = cheerio.load(html, {
    normalizeWhitespace: true,
    xmlMode: true
});

$ = cheerio.load(html, {
    normalizeWhitespace: true,
    xmlMode: true,
    decodeEntities: true,
    lowerCaseTags: true,
    lowerCaseAttributeNames: true,
    recognizeCDATA: true,
    recognizeSelfClosing: true
});

/**
 * Selectors
 */
var $el = $('.class');
var $multiEl = $('selector', 'selector', 'selector');

/**
 * Attributes
 */

// attr
$el.attr();
$el.attr('id');
$el.attr('id', 'favorite').html();

// props
$el.prop('style')
$el.prop('style', 'none').html()

// data
$el.data();
$el.data('apple-color');
$el.data('kind', 'mac');

// val
$('input[type="text"]').val();
$('input[type="text"]').val('test').html();

// removeAttr
$el.removeAttr('class').html();

// hasClass, addClass, removeClass, toggleClass
$el.addClass('class').addClass('test');
$el.hasClass('test');
$el.removeClass('class').removeClass('test');
$el.addClass('red').removeClass().html();
$el.toggleClass('fruit green red').html();

// is
$el.is('#id');
$el.is($el);
$el.is(() => {
  return true;
});

/**
 * Forms
 */
// serializeArray
$('<form><input name="foo" value="bar" /></form>').serializeArray();
$('<form><input name="foo" value="bar" /></form>').serialize();

/**
 * Traversing
 */
 // find
$el.find('li').length;
$el.find($('.apple')).length;

// .parent([selector])
$el.parent().attr('id');
$el.parent('.class').attr('id');

// .parents([selector])
$el.parents().length;
$el.parents('.class').length;

// .parentsUntil([selector][,filter])
$el.parentsUntil().length;
$el.parentsUntil('.class').length;

// .closest(selector)
$el.closest();
$el.closest('.class');

// .next([selector])
$el.next().hasClass('class');
$el.next('.class').hasClass('class');

// .nextAll([selector])
$el.nextAll().length;
$el.nextAll('.class').length;

// .nextUntil([selector], [filter])
$el.nextUntil();
$el.nextUntil('.class');

// .prev([selector])
$el.prev().hasClass('class');
$el.prev('.class').hasClass('class');

// .prevAll([selector])
$el.prevAll().length;
$el.prevAll('.class').length;

// .prevUntil([selector], [filter])
$el.prevUntil();
$el.prevUntil('.class');

// .slice( start, [end] )
$el.slice(1).eq(0).text();
$el.slice(1, 2).length;

// .siblings([selector])
$el.siblings().length;
$el.siblings('.class').length;

// .children([selector])
$el.children().length;
$el.children('.class').text();

// .contents()
$el.contents().length;

// .each( function(index, element) )
$el.each((i, el) => {
  $(el).html();
});

// .map( function(index, element) )
$el.map((i, el) => {
  return $(el).text();
}).get().join(' ');

// .filter
$ = cheerio.load(html);
$el.filter('.class').attr('class');
$el.filter($('.class')).attr('class');
$el.filter($('.class')[0]).attr('class');

$el.filter((i, el) => {
  return $(el).attr('class') === 'class';
}).attr('class');

// .not
$el.not('.class').length;
$el.not($('.class')).length;
$el.not($('.class')[0]).length;

$el.not((i, el) => {
  return $(el).attr('class') === 'class';
}).length;

// .has
$el.has('.class').attr('id');
$el.has($el[0]).attr('id');

// .first()
$el.children().first().text();

// .last()
$el.children().last().text();

// .eq( i )
$el.eq(0).text();
$el.eq(-1).text();

// .get( [i] )
$el.get(0).tagName;
$el.get().length;

// .index()
// .index( selector )
// .index( nodeOrSelection )
$el.index();
$el.index('li');
$el.index($('#fruit, li'));

// .end()
$el.eq(0).end().length;

// .add
$el.add('.class').length

// .addBack( [filter] )
$el.eq(0).addBack().length
$el.eq(0).addBack('.class').length

/**
 * Manipulation
 */

$('<li class="plum">Plum</li>').appendTo($el)
$el.prependTo($('<li class="plum">Plum</li>'))

// .append( content, [content, ...] )
$el.append('<li class="plum">Plum</li>').html();
$el.append('<li class="plum">Plum</li>', '<li class="plum">Plum</li>').html();

// .prepend( content, [content, ...] )
$el.prepend('<li class="plum">Plum</li>').html();
$el.prepend('<li class="plum">Plum</li>', '<li class="plum">Plum</li>').html();

// .after( content, [content, ...] )
$el.after('<li class="plum">Plum</li>').html();
$el.after('<li class="plum">Plum</li>', '<li class="plum">Plum</li>').html();

// .insertAfter( content )
$('<li class="plum">Plum</li>').insertAfter('.class').html();

// .before( content, [content, ...] )
$el.before('<li class="plum">Plum</li>').html();
$el.before('<li class="plum">Plum</li>', '<li class="plum">Plum</li>').html();

// .insertBefore( content )
$('<li class="plum">Plum</li>').insertBefore('.class').html();

// .remove( [selector] )
$el.remove().html();
$el.remove('.class').html();

// .replaceWith( content )
$el.replaceWith($('<li class="plum">Plum</li>')).html();

// .empty()
$el.empty().html();

// .html( [htmlString] )
$el.html();
$el.html('<li class="mango">Mango</li>').html();

// .text( [textString] )
$el.text();
$el.text('text');

// .wrap( content )
// See https://github.com/cheeriojs/cheerio/issues/731
// $el.wrap($('<div class="red-fruit"></div>')).html();

// .css
$el.css('width');
$el.css(['width', 'height']);
$el.css('width', '50px');

/**
 * Rendering
 */
$.html();
$.html('.class');
$.xml();

/**
 * Miscellaneous
 */

// .clone() ####
$el.clone().html();

/**
 * Utilities
 */

// $.root
$.root().append('<ul id="vegetables"></ul>').html();

// $.contains( container, contained )
$.contains($el[0], $el[0]);

// $.parseHTML( data [, context ] [, keepScripts ] )
$.parseHTML(html);
$.parseHTML(html, null, true);

/**
 * Not in doc
 */
$el.toArray();

cheerio.html($el);
