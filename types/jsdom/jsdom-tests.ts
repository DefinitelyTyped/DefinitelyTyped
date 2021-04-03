import "./test/core";
import jsdom = require("jsdom");

const dom = new jsdom.JSDOM();
const domWindow = dom.window; // $ExpectType DOMWindow

domWindow.document.querySelector("slot"); // $ExpectType HTMLSlotElement | null
domWindow.AbstractRange.prototype; // $ExpectType AbstractRange
domWindow.StaticRange.prototype; // $ExpectType StaticRange
domWindow.ShadowRoot.prototype; // $ExpectType ShadowRoot

domWindow.Atomics; // $ExpectType Atomics
domWindow.BigInt; // $ExpectType BigIntConstructor
domWindow.BigInt64Array; // $ExpectType BigInt64ArrayConstructor
domWindow.BigUint64Array; // $ExpectType BigUint64ArrayConstructor
domWindow.SharedArrayBuffer; // $ExpectType SharedArrayBufferConstructor
domWindow.WebAssembly; // $ExpectType typeof WebAssembly

domWindow.InputEvent.prototype; // $ExpectType InputEvent
domWindow.external; // $ExpectType External

domWindow.FinalizationRegistry; // $ExpectType FinalizationRegistryConstructor
domWindow.WeakRef; // $ExpectType WeakRefConstructor
