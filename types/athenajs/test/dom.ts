import { Dom } from 'athenajs';

let div = Dom('div'),
    body = Dom(document.body),
    domElt: HTMLElement = body[0];

// Dom.appendTo
div.appendTo(body).show().hide();
div.appendTo(domElt);

const str: string|null = body.css('display'),
    i: number = body.length;

// Dom.css
body.css('display', ' block');
body.css({ display: 'none' });
body.css('display', 'block');

// Dom.find
body.find('div').appendTo('body');

// Dom.attr
body.attr('data-test', 'hi');
body.attr({ 'data-test2': 'foo' });

// Dom.addClass/Dom.removeClass
body.addClass('foo').removeClass('foo');

// Dom.show/hide
body.show().hide();

// Dom.html
body.html('<div>foo</div>');