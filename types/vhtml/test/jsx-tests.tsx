/**
 * Tests for h.JSX
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
// @ts-expect-error
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
// @ts-expect-error
<main dangerouslySetInnerHTML="foo bar"></main>;

// -------- Functional Pseudo-Components -------- //

declare function Component(props: { prop1: string; prop2?: number | undefined }): string;

// $ExpectType string
<Component prop1="foo" prop2={125} />;

// Missing required prop
// @ts-expect-error
<Component prop2={125} />;

// Incorrect prop type
// @ts-expect-error
<Component prop1="bar" prop2="250" />;

// -------- Component accepts no children -------- //

declare function NoChild(): h.JSX.Element;

// $ExpectType string
<NoChild />;

// One child given
// @ts-expect-error
<NoChild>Foo bar</NoChild>;
// One child given (undefined is still a child)
// @ts-expect-error
<NoChild>{undefined}</NoChild>;
// Multiple children given
// @ts-expect-error
<NoChild>
    <div>1</div>
    <div>2</div>
</NoChild>;

// -------- Component accepts no children (using empty tuple type) -------- //

// Note: This is a pedantic example. A typical childless component will simply
// not define a `children` prop, as shown in the test case above.
declare function EmptyChild(props: { children: [] }): h.JSX.Element;

// $ExpectType string
<EmptyChild />;

// One child given
// @ts-expect-error
<EmptyChild>Foo bar</EmptyChild>;
// One child given (undefined is still a child)
// @ts-expect-error
<EmptyChild>{undefined}</EmptyChild>;
// Multiple children given
// @ts-expect-error
<EmptyChild>
    <div>1</div>
    <div>2</div>
</EmptyChild>;

// -------- Component accepts exactly one child (using tuple type) -------- //

declare function OneChild(props: { children: [string] }): h.JSX.Element;

// $ExpectType string
<OneChild>Foo</OneChild>;

// No child given
// @ts-expect-error
<OneChild />;
// Multiple children given
// @ts-expect-error
<OneChild>
    <div>1</div>
    <div>2</div>
</OneChild>;
// Incorrect child type
// @ts-expect-error
<OneChild>{1}</OneChild>;

// -------- Component accepts exactly zero or one child -------- //

declare function ZeroOrOneChild(props: { children: [boolean?] }): h.JSX.Element;

// $ExpectType string
<ZeroOrOneChild />;
// $ExpectType string
<ZeroOrOneChild>{true}</ZeroOrOneChild>;

// Multiple children given
// @ts-expect-error
<ZeroOrOneChild>
    {true}
    {true}
</ZeroOrOneChild>;
// Incorrect child type
// @ts-expect-error
<ZeroOrOneChild>Foo</ZeroOrOneChild>;

// -------- Component accepts arbitrary number of children -------- //

declare function AnyNumberOfChildren(props: { children: string[] }): h.JSX.Element;

// $ExpectType string
<AnyNumberOfChildren />;
// $ExpectType string
<AnyNumberOfChildren>Foo</AnyNumberOfChildren>;
// $ExpectType string
<AnyNumberOfChildren>
    <div>1</div>
    <div>2</div>
</AnyNumberOfChildren>;

// Incorrect child type
// @ts-expect-error
<AnyNumberOfChildren>{1}</AnyNumberOfChildren>;

// -------- Invalid components (incorrect props.children type) --------//

// For vhtml, props.children must be an array
// This function should not be allowed as a component
declare function BadComponentType(props: { children: string }): h.JSX.Element;

// @ts-expect-error
<BadComponentType />;
// @ts-expect-error
<BadComponentType>Foo</BadComponentType>;
