/**
 * Typescript definition tests for d3/d3-dispatch module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Dispatch from 'd3-dispatch';

// Preparation --------------------------------------------

interface Datum {
    a: number;
    b: string;
}

interface ContextObject {
    about: string;
}

let dispatch: d3Dispatch.Dispatch<HTMLElement>;
let dispatch2: d3Dispatch.Dispatch<ContextObject>;
let callback: (this: HTMLElement, ...args: any[]) => void;
let callbackOrUndef: ((this: HTMLElement, ...args: any[]) => void) | undefined;
let undef: undefined;

// Signature Tests ----------------------------------------

// create new dispatch object
dispatch = d3Dispatch.dispatch('foo', 'bar');
dispatch2 = d3Dispatch.dispatch('start', 'end');

function cbFn(this: HTMLElement, d: Datum, i: number) {
    console.log(this.baseURI ? this.baseURI : 'nada');
    console.log(d ? d.a : 'nada');
}

function cbFn2(this: SVGElement, d: Datum, i: number) {
    console.log(this.baseURI ? this.baseURI : 'nada');
    console.log(d ? d.a : 'nada');
}

dispatch.on('foo', cbFn);
// @ts-expect-error
dispatch.on('foo', cbFn2); // test fails as 'this' context type is mismatched between dispatch and callback function

callback = dispatch.on('bar')!;
callbackOrUndef = dispatch.on('bar');
callbackOrUndef = dispatch.on('unknown');
undef = dispatch.on('unknown') as undefined;

dispatch.on('bar', dispatch.on('bar')!);

dispatch.call('foo');
dispatch.call('foo', document.body);
dispatch.call('foo', document.body, { a: 3, b: 'test' }, 1);

dispatch2.call('start', {about: 'I am a context object'}, 'I am an argument');

dispatch.apply('bar');
dispatch.apply('bar', document.body);
dispatch.apply('bar', document.body, [{ a: 3, b: 'test' }, 1]);

dispatch.on('bar', null);

// Copy dispatch -----------------------------------------------
const copy: d3Dispatch.Dispatch<HTMLElement> = dispatch.copy();
// @ts-expect-error
const copy2: d3Dispatch.Dispatch<SVGElement> = dispatch.copy(); // test fails type mismatch of underlying event target
