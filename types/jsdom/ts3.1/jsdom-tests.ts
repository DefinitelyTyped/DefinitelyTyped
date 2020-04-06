import '../jsdom-tests';
import jsdom = require('jsdom');

const dom = new jsdom.JSDOM();
const domWindow = dom.window; // $ExpectType DOMWindow

domWindow.document.querySelector('slot'); // $ExpectType HTMLSlotElement | null
domWindow.AbstractRange.prototype; // $ExpectType AbstractRange
domWindow.StaticRange.prototype; // $ExpectType StaticRange
domWindow.CustomElementRegistry.prototype; // $ExpectType CustomElementRegistry
