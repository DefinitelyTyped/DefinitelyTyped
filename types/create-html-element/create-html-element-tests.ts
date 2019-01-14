import createHtmlElement = require('create-html-element');

createHtmlElement(); // $ExpectType HTMLDivElement
// $ExpectType HTMLDivElement
createHtmlElement({
    attributes: {
        class: 'unicorn',
        rainbow: true,
        horse: false,
        number: 1,
        multiple: ['a', 'b'],
    },
});
createHtmlElement({ html: '🦄' }); // $ExpectType HTMLDivElement
createHtmlElement({ text: 'Hello <em>World</em>' }); // $ExpectType HTMLDivElement
createHtmlElement({ html: '🦄', text: 'Hello <em>World</em>' }); // $ExpectError

createHtmlElement({ name: 'h1' }); // $ExpectType HTMLHeadingElement
// $ExpectType HTMLHeadingElement
createHtmlElement({
    name: 'h1',
    attributes: {
        class: 'unicorn',
        rainbow: true,
        horse: false,
        number: 1,
        multiple: ['a', 'b'],
    },
});
createHtmlElement({ name: 'h1', html: '🦄' }); // $ExpectType HTMLHeadingElement
createHtmlElement({ name: 'h1', text: 'Hello <em>World</em>' }); // $ExpectType HTMLHeadingElement
createHtmlElement({ name: 'h1', html: '🦄', text: 'Hello <em>World</em>' }); // $ExpectError

createHtmlElement({ name: 'foo' }); // $ExpectType HTMLElement
// $ExpectType HTMLElement
createHtmlElement({
    name: 'foo',
    attributes: {
        class: 'unicorn',
        rainbow: true,
        horse: false,
        number: 1,
        multiple: ['a', 'b'],
    },
});
createHtmlElement({ name: 'foo', html: '🦄' }); // $ExpectType HTMLElement
createHtmlElement({ name: 'foo', text: 'Hello <em>World</em>' }); // $ExpectType HTMLElement
createHtmlElement({ name: 'foo', html: '🦄', text: 'Hello <em>World</em>' }); // $ExpectError
