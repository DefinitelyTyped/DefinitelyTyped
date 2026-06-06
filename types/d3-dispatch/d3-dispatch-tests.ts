/**
 * Typescript definition tests for d3/d3-dispatch module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Dispatch from "d3-dispatch";

// Utils --------------------------------------------

let extractTests: [
    // $ExpectType 'a'
    d3Dispatch.Dispatch.ExtractEventNames<"a">,
    // $ExpectType 'a'
    d3Dispatch.Dispatch.ExtractEventNames<"a.1">,
    // $ExpectType 'a' | 'b'
    d3Dispatch.Dispatch.ExtractEventNames<"a b">,
    // $ExpectType 'a' | 'b' | 'c'
    d3Dispatch.Dispatch.ExtractEventNames<"a b c">,
    // $ExpectType 'a' | 'b'
    d3Dispatch.Dispatch.ExtractEventNames<"a.1 b">,
    // $ExpectType 'a' | 'b'
    d3Dispatch.Dispatch.ExtractEventNames<"a.1 b.2">,
    // $ExpectType 'a' | 'b'
    d3Dispatch.Dispatch.ExtractEventNames<"a b.2">,
    // $ExpectType 'a'
    d3Dispatch.Dispatch.ExtractEventNames<"a ">,
    // $ExpectType 'a'
    d3Dispatch.Dispatch.ExtractEventNames<" a">,
    // $ExpectType 'a'
    d3Dispatch.Dispatch.ExtractEventNames<" a ">,
    // $ExpectType 'a' | 'b'
    d3Dispatch.Dispatch.ExtractEventNames<" a   b ">,
];

// Preparation --------------------------------------------

interface Datum {
    a: number;
    b: string;
}

interface ContextObject {
    about: string;
}

let callback: (this: HTMLElement, ...args: any[]) => void;
let callbackOrUndef: ((this: HTMLElement, ...args: any[]) => void) | undefined;
let undef: undefined;

// Signature Tests ----------------------------------------

// create new dispatch object
const dispatch = d3Dispatch.dispatch<HTMLElement, {
    foo: [d?: Datum, i?: number];
    bar: [];
}>("foo", "bar");

// $ExpectType Dispatch<HTMLElement, { foo: [d?: Datum | undefined, i?: number | undefined]; bar: [] }>
dispatch;

// in this example, the type-arguments are inferred
const dispatch2 = d3Dispatch.dispatch("start", "end");

// $ExpectType Dispatch<object, Record<"start" | "end", any[]>>
dispatch2;

function cbFn(this: HTMLElement, d?: Datum, i?: number) {
    console.log(this.baseURI ? this.baseURI : "nada");
    console.log(d ? d.a : "nada");
}

function cbFn2(this: SVGElement, d?: Datum, i?: number) {
    console.log(this.baseURI ? this.baseURI : "nada");
    console.log(d ? d.a : "nada");
}

dispatch.on("foo", cbFn);
// @ts-expect-error
dispatch.on("foo", cbFn2); // test fails as 'this' context type is mismatched between dispatch and callback function

// @ts-expect-error -- test fails since there are 3 arguments, but only 2 in the defintion
dispatch.on("foo", (a, b, c) => {});

callback = dispatch.on("bar")!;
callbackOrUndef = dispatch.on("bar");
callbackOrUndef = dispatch.on("unknown");
undef = dispatch.on("unknown") as undefined;

dispatch.on("bar", dispatch.on("bar")!);

dispatch.call("foo");
dispatch.call("foo", document.body);
dispatch.call("foo", document.body, { a: 3, b: "test" }, 1);

dispatch2.call("start", { about: "I am a context object" }, "I am an argument");

dispatch.apply("bar");
dispatch.apply("bar", document.body);
dispatch.apply("bar", document.body, []);
// @ts-expect-error -- `bar` expected 0 arguments
dispatch.apply("bar", document.body, [{ a: 3, b: "test" }, 1]);

dispatch.on("bar", null);

// Copy dispatch -----------------------------------------------
const copy: d3Dispatch.Dispatch<HTMLElement> = dispatch.copy();
// @ts-expect-error
const copy2: d3Dispatch.Dispatch<SVGElement> = dispatch.copy(); // test fails type mismatch of underlying event target

const abc = d3Dispatch.dispatch("a", "b", "c");
// valid cases:
abc.on("a", null);
abc.on("b", null);
abc.on("a.1", null);
abc.on("b.b", null);
abc.on("a b", null);
abc.on("a.1 b", null);
abc.on("a.1 b.1", null);
abc.on("a b.2", null);
abc.on(" a", null);
abc.on("a ", null);
abc.call("a");
abc.apply("a");

// invalid, but no error. the arguments are just `never`:
abc.on(" ", (...args) => {
    // $ExpectType never
    args;
});

// invalid cases:
// @ts-expect-error -- d isn't defined
abc.on("d", null);
// @ts-expect-error -- d isn't defined
abc.on("d.a", null);
// @ts-expect-error -- d isn't defined
abc.on("d e", null);
// @ts-expect-error -- d isn't defined
abc.on("d e.a", null);
// @ts-expect-error -- e isn't defined
abc.on("a e c", null);
// @ts-expect-error -- e isn't defined
abc.on("a e c.1", null);
// @ts-expect-error -- nothing before and after period
abc.on(".", null);
// @ts-expect-error -- d isn't defined
abc.call("d");
// @ts-expect-error -- empty string
abc.call("");
// @ts-expect-error -- d isn't defined
abc.apply("d");
// @ts-expect-error -- empty string before period
abc.on("a.2 b .", null);
// @ts-expect-error -- empty string before period
abc.on("a.2 b .3", null);
// @ts-expect-error -- empty string
abc.apply("");

// this one has no event map, but we still infer the event names
// and validate if an invalid event is passed to .apply() or .call()
const inferred = d3Dispatch.dispatch("a", "b", "c");

inferred.on("a", (...args) => {
    // $ExpectType any[]
    args;
});
inferred.on("b", (...args) => {
    // $ExpectType any[]
    args;
});
inferred.on("b.1", (...args) => {
    // $ExpectType any[]
    args;
});
inferred.on("c", (...args) => {
    // $ExpectType any[]
    args;
});
// @ts-expect-error -- event name is not defined
inferred.on("invalid", () => {});
inferred.on("a b", (...args) => {
    // $ExpectType any[]
    args;
});
inferred.on("a.1 b.2", (...args) => {
    // $ExpectType any[]
    args;
});
// @ts-expect-error -- e is not valid
inferred.on("a.1 b.2 e", (...args) => {});
inferred.call("a");
inferred.call("a", window);
inferred.call("a", window, 1, 2);
inferred.apply("a");
inferred.apply("a", window, []);
inferred.apply("a", window, [1, 2]);

// @ts-expect-error -- event does not exist
inferred.call("d");
// @ts-expect-error -- event does not exist
inferred.call("");
// @ts-expect-error -- event does not exist
inferred.apply("d");
// @ts-expect-error -- event does not exist
inferred.apply("");

interface EventMap {
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type -- intentional
    a: [number];
    b: [];
    c: [string, boolean];
}
const explicit = d3Dispatch.dispatch<ContextObject, EventMap>("a", "b", "c");

// @ts-expect-error -- type-arguments must match runtime-arguments
d3Dispatch.dispatch<ContextObject, EventMap>("a", "b", "c", "d");
// @ts-expect-error -- type-arguments must match runtime-arguments
d3Dispatch.dispatch<ContextObject, EventMap>("a", "b", "d");

explicit.on("a", function(...args) {
    // $ExpectType [number]
    args;
    // $ExpectType ContextObject
    this;
});
explicit.on("b", (...args) => {
    // $ExpectType []
    args;
});
explicit.on("b.1", (...args) => {
    // $ExpectType []
    args;
});
explicit.on("c", (...args) => {
    // $ExpectType [string, boolean]
    args;
});
// @ts-expect-error -- event name is not defined
explicit.on("invalid", () => {});
explicit.on("a b", (...args) => {
    // union of `a` and `b`'s types
    // $ExpectType [number] | []
    args;
});
explicit.on("a.1 b.2", (...args) => {
    // union of `a` and `b`'s types
    // $ExpectType [number] | []
    args;
});
// @ts-expect-error -- e is not valid
explicit.on("a.1 b.2 e", (...args) => {});

explicit.apply("a", this, [123]);
explicit.apply("b", this, []);
explicit.apply("c", this, ["", true]);
// @ts-expect-error -- event does not exist
inferred.apply("d");
// @ts-expect-error -- invalid arguments
explicit.apply("a", this, []);
// @ts-expect-error -- invalid arguments
explicit.apply("b", this, [1]);

explicit.call("a", this, 123);
explicit.call("b", this);
explicit.call("c", this, "", true);
// @ts-expect-error -- event does not exist
inferred.call("d");
// @ts-expect-error -- invalid arguments
explicit.call("a", this);
// @ts-expect-error -- invalid arguments
explicit.call("b", this, 1);
