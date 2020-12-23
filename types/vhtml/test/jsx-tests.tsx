/**
 * Tests for JSX
 */

/** @jsx h */

import h = require('vhtml');

// Empty element
// $ExpectType string
<div></div>;

// $ExpectType string
<span>Hello, world!</span>;

// $ExpectType string
<section id="some-id">
    <h1>Title</h1>
    List of items:
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>
</section>;

// Children can be of any type
// $ExpectType string
<blockquote>
    <span>{99}</span>
    <span>{'string'}</span>
    <span>{true}</span>
    <span>{/pattern.*/}</span>
    <span>{null}</span>
    <span>{undefined}</span>
</blockquote>;

// Incorrect attribute type
// $ExpectError
<div class={1}></div>;

// data-* attributes
// $ExpectType string
<div data-value={1} data-value-2="asdf"></div>;

// -------- Special attributes -------- //

// Both htmlFor and for are supported
// $ExpectType string
<label htmlFor="foo"></label>;
// $ExpectType string
<label for="foo"></label>;

// Both className and class are supported
// $ExpectType string
<button className="bar"></button>;
// $ExpectType string
<button class="bar"></button>;

// dangerouslySetInnerHTML
// $ExpectType string
<main dangerouslySetInnerHTML={{ __html: '&trade;' }}></main>;
// $ExpectError
<main dangerouslySetInnerHTML="foo bar"></main>;

// -------- Functional Pseudo-Components -------- //

function Component({ prop1, prop2 }: { prop1: string; prop2?: number }): string {
    return <div id={prop1}>{prop2}</div>;
}

// $ExpectType string
<Component prop1="foo" prop2={125} />;

// Missing required prop
// $ExpectError
<Component prop2={125} />;

// Incorrect prop type
// $ExpectError
<Component prop1="bar" prop2="250" />;
