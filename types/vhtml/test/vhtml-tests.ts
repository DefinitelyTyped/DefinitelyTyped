/**
 * Tests for Hyperscript
 */

import h = require('vhtml');

// Empty element
// $ExpectType string
h('div');

// $ExpectType string
h('span', null, 'Hello, world!');

// $ExpectType string
h(
    'section',
    { id: 'some-id' },
    h('h1', null, 'Title'),
    'List of items:',
    h('ol', null, h('li', null, 'First item'), h('li', null, 'Second item'), h('li', null, 'Third item')),
);

// Children can be of any type
// $ExpectType string
h(
    'blockquote',
    null,
    h('span', null, 99),
    h('span', null, 'string'),
    h('span', null, true),
    h('span', null, /pattern.*/),
    h('span', null, null),
    h('span', null, undefined),
);

// Incorrect attribute type
// @ts-expect-error
h('div', { class: 1 });

// data-* attributes
// (for hyperscript, allow unknown fields to have arbitrary types)
// $ExpectType string
h('div', { 'data-value': 1, 'data-value-2': 'asdf' });
// @ts-expect-error
h('div', { class: 1, 'data-value': 1, 'data-value-2': 'asdf' });

// Unknown tags can have arbitrary attributes
// $ExpectType string
h('mytag', { foo: 1, bar: true });

// -------- Special attributes -------- //

// Both htmlFor and for are supported
// $ExpectType string
h('label', { htmlFor: 'foo' });
// $ExpectType string
h('label', { for: 'foo' });

// Both className and class are supported
// $ExpectType string
h('button', { className: 'bar' });
// $ExpectType string
h('button', { class: 'bar' });

// dangerouslySetInnerHTML
// $ExpectType string
h('main', { dangerouslySetInnerHTML: { __html: '&trade;' } });
// @ts-expect-error
h('main', { dangerouslySetInnerHTML: 'foo bar' });

// -------- Functional Pseudo-Components -------- //

function Component({ prop1, prop2 }: { prop1: string; prop2?: number | undefined }): string {
    return h('div', { id: prop1 }, prop2);
}

// $ExpectType string
h(Component, { prop1: 'foo', prop2: 125 });
// $ExpectType string
h('body', null, h(Component, { prop1: 'foo', prop2: 125 }));

// Missing required prop
// @ts-expect-error
h(Component, { prop2: 125 });

// Incorrect prop type
// @ts-expect-error
h(Component, { prop1: 250 });
