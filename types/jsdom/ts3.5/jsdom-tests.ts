import '../ts3.4/jsdom-tests';
import jsdom = require('jsdom');

declare const domWindow: jsdom.DOMWindow;

domWindow.document.querySelector('slot'); // $ExpectType HTMLSlotElement | null
domWindow.AbstractRange.prototype; // $ExpectType AbstractRange
domWindow.StaticRange.prototype; // $ExpectType StaticRange
domWindow.ShadowRoot.prototype; // $ExpectType ShadowRoot

domWindow.Atomics; // $ExpectType Atomics
domWindow.BigInt; // $ExpectType BigIntConstructor
domWindow.BigInt64Array; // $ExpectType BigInt64ArrayConstructor
domWindow.BigUint64Array; // $ExpectType BigUint64ArrayConstructor
domWindow.SharedArrayBuffer; // $ExpectType SharedArrayBufferConstructor
domWindow.WebAssembly; // $ExpectType typeof WebAssembly
