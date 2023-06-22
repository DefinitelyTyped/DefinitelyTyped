/// <reference types="node" />

import * as ltx from 'ltx';
import * as ltx2 from 'ltx/src/ltx';
import parsers from 'ltx/src/parsers';
import parsers2 = require('ltx/lib/parsers');
import SaxLibxmljs from 'ltx/src/parsers/libxmljs';
import SaxLtx from 'ltx/src/parsers/ltx';
import SaxExpat from 'ltx/src/parsers/node-expat';
import SaxNodeXML from 'ltx/src/parsers/node-xml';
import SaxSaxjs from 'ltx/src/parsers/sax-js';
import SaxSaxesjs from 'ltx/src/parsers/saxes';
import SaxLibxmljs2 = require('ltx/lib/parsers/libxmljs');
import SaxLtx2 = require('ltx/lib/parsers/ltx');
import SaxExpat2 = require('ltx/lib/parsers/node-expat');
import SaxNodeXML2 = require('ltx/lib/parsers/node-xml');
import SaxSaxjs2 = require('ltx/lib/parsers/sax-js');
import SaxSaxesjs2 = require('ltx/lib/parsers/saxes');
import DOMElement from 'ltx/src/DOMElement';
import DOMElement2 = require('ltx/lib/DOMElement');

// test type exports
type Element = ltx.Element;
type Node = ltx.Node;
type ParserOptions = ltx.ParserOptions;
type ElementJson = ltx.ElementJson;
type Element2 = ltx2.Element;
type Node2 = ltx2.Node;
type ParserOptions2 = ltx2.ParserOptions;
type ElementJson2 = ltx2.ElementJson;

const el: ltx.Element = null as any;

ltx.clone(el); // $ExpectType Element
ltx2.clone(el); // $ExpectType Element

ltx.nameEqual(el, el); // $ExpectType boolean
ltx.attrsEqual(el, el); // $ExpectType boolean
ltx.childrenEqual(el, el); // $ExpectType boolean
ltx.equal(el, el); // $ExpectType boolean

ltx.createElement('el'); // $ExpectType Element
ltx.createElement('el', 'xml'); // $ExpectType Element
ltx.createElement('el', { foo: 'bar' }); // $ExpectType Element
ltx.createElement('el', { foo: 'bar' }, el); // $ExpectType Element
ltx.createElement('el', { foo: 'bar' }, 'hi'); // $ExpectType Element

const value: unknown = undefined;
if (ltx.isNode(value)) {
    // $ExpectType Node
    value;
}
if (ltx.isElement(value)) {
    // $ExpectType Element
    value;
}
if (ltx.isText(value)) {
    // $ExpectType string
    value;
}

ltx.escapeXML(''); // $ExpectType string
ltx.unescapeXML(''); // $ExpectType string
ltx.escapeXMLText(''); // $ExpectType string
ltx.unescapeXMLText(''); // $ExpectType string

ltx.parse('<document/>'); // $ExpectType Element
ltx.parse('<document/>', null as any as typeof ltx.Parser); // $ExpectType Element
ltx.parse('<document/>', { Parser: null as any as typeof ltx.Parser }); // $ExpectType Element
ltx.parse('<document/>', { Element: null as any as typeof ltx.Element }); // $ExpectType Element

ltx.tag(['document'], 'foo'); // $ExpectType Element
ltx.tagString(['document'], 'foo'); // $ExpectType string

ltx.stringify(el); // $ExpectType string
ltx.stringify(el, 1); // $ExpectType string
ltx.stringify(el, 1, 1); // $ExpectType string

ltx.JSONify(el); // $ExpectType ElementJson

const getChildTextElement = ltx.parse('<test><child>body text</child></test>');
if (getChildTextElement.getChildText('child') !== 'body text') {
    throw new Error('body does not match');
}

const p = new ltx.Parser(); // $ExpectType Parser
new ltx.Parser({ Parser: null as any as typeof ltx.Parser }); // $ExpectType Parser
new ltx.Parser({ Element: null as any as typeof ltx.Element }); // $ExpectType Parser

p.on('tree', (ignored: any) => {});
p.on('error', (ignored: any) => {});
p.write('foo'); // $ExpectType void
p.write(Buffer.from('foo')); // $ExpectType void
p.end('foo'); // $ExpectType void
p.end(Buffer.from('foo')); // $ExpectType void

new ltx.Element('root');
new ltx.Element('root', { my: 'attr' });
new ltx.Element('root', 'namespace');

el.name; // $ExpectType string
el.parent; // $ExpectType Element | null
el.children; // $ExpectType Node[]
el.attrs; // $ExpectType { [attrName: string]: any; }

el.c('children'); // $ExpectType Element
el.c('children', { my: 'attr' }); // $ExpectType Element

el.is('el'); // $ExpectType boolean
el.is('el', 'ns'); // $ExpectType boolean
el.getName(); // $ExpectType string
el.getNS(); // $ExpectType string | undefined
el.findNS('ns'); // $ExpectType string | undefined
el.getXmlns(); // $ExpectType { [key: string]: string; }
el.setAttrs('ho'); // $ExpectType void
el.setAttrs({ my: 'attr' }); // $ExpectType void
el.getAttr('ho'); // $ExpectType any
el.getAttr('ho', 'ns'); // $ExpectType any
el.attr('my'); // $ExpectType any
el.attr('my', 'attr'); // $ExpectType Element
el.getChild('el'); // $ExpectType Element | undefined
el.getChild('el', 'ns'); // $ExpectType Element | undefined
el.getChildren('el'); // $ExpectType Element[]
el.getChildren('el', 'ns'); // $ExpectType Element[]
el.getChildByAttr('my', 'attr'); // $ExpectType Element | undefined
el.getChildByAttr('my', 'attr', 'ns'); // $ExpectType Element | undefined
el.getChildByAttr('my', 'attr', 'ns', true); // $ExpectType Element | undefined
el.getChildrenByAttr('my', 'attr'); // $ExpectType Element[]
el.getChildrenByAttr('my', 'attr', 'ns'); // $ExpectType Element[]
el.getChildrenByAttr('my', 'attr', 'ns', true); // $ExpectType Element[]
// $ExpectType Element[]
el.getChildrenByFilter(child => {
    // $ExpectType Node
    child;
    return true;
});
// $ExpectType Element[]
el.getChildrenByFilter(child => {
    // $ExpectType Node
    child;
    return true;
}, true);
el.getText(); // $ExpectType string
el.text(); // $ExpectType string
el.text('val'); // $ExpectType Element
el.getChildText('hi'); // $ExpectType string | null
el.getChildText('hi', 'ns'); // $ExpectType string | null
el.getChildElements(); // $ExpectType Element[]

el.append(el); // $ExpectType void
el.append(el, el, el); // $ExpectType void
el.prepend(el); // $ExpectType void
el.prepend(el, el, el); // $ExpectType void

el.toString(); // $ExpectType string
// $ExpectType void
el.write(part => {
    part; // $ExpectType string
});

el.root(); // $ExpectType Element
el.tree(); // $ExpectType Element
el.up(); // $ExpectType Element

class MyEl extends ltx.Element {
    foo: 'bar';
}
const myEl = new MyEl('el');

myEl.root(); // $ExpectType Element | MyEl
myEl.tree(); // $ExpectType Element | MyEl
myEl.up(); // $ExpectType Element | MyEl

myEl.c('hi'); // $ExpectType Element
myEl.c('hi', { my: 'attr' }); // $ExpectType Element
myEl.cnode(myEl); // $ExpectType MyEl
myEl.t('hi'); // $ExpectType MyEl
myEl.remove(el); // $ExpectType MyEl
myEl.remove('el'); // $ExpectType MyEl
myEl.remove('el', 'ns'); // $ExpectType MyEl
myEl.text(); // $ExpectType string
myEl.text('val'); // $ExpectType MyEl
myEl.attr('my'); // $ExpectType any
myEl.attr('my', 'attr'); // $ExpectType MyEl

el.c('child', { age: 5 })
    .t('Hello')
    .up()
    .c('child', { age: 7 })
    .t('Hello')
    .up()
    .c('child', { age: 99 })
    .t('Hello')
    .up();

parsers; // $ExpectType (typeof Parser)[]
parsers2; // $ExpectType (typeof Parser)[]

const domEl = new DOMElement('foo');
new DOMElement('foo', 'namespace');
new DOMElement('foo', { my: 'attr' });
DOMElement2; // $ExpectType typeof DOMElement
DOMElement.createElement('foo'); // $ExpectType DOMElement
DOMElement.createElement('foo', 'namespace'); // $ExpectType DOMElement
DOMElement.createElement('foo', { my: 'attr' }); // $ExpectType DOMElement
DOMElement.createElement('foo', { my: 'attr' }, el, myEl, 'foo'); // $ExpectType DOMElement

domEl.nodeType; // $ExpectType 1
domEl.nodeName; // $ExpectType string

domEl.localName; // $ExpectType string
// @ts-expect-error
domEl.localName = 'foo';
domEl.namespaceURI; // ExpectType string | undefined
// @ts-expect-error
domEl.namespaceURI = 'foo';
domEl.parentNode; // $ExpectType Element | null
// @ts-expect-error
domEl.parentNode = null;
domEl.childNodes; // $ExpectType Node[]
// @ts-expect-error
domEl.childNodes = [];
domEl.textContent; // $ExpectType string
domEl.textContent = 'foo';
domEl.getElementsByTagName('el'); // $ExpectType Element[]
domEl.getElementsByTagName('el', 'ns'); // $ExpectType Element[]
domEl.getAttribute('ho'); // $ExpectType any
domEl.getAttribute('ho', 'ns'); // $ExpectType any
domEl.setAttribute('my', 'attr'); // $ExpectType void
domEl.getAttributeNS('namespace', 'my'); // $ExpectType any
domEl.setAttributeNS('namespace', 'my', 'attr'); // $ExpectType void
domEl.removeAttribute('my'); // $ExpectType void
domEl.removeAttributeNS('namespace', 'my'); // $ExpectType void
domEl.appendChild(el); // $ExpectType void
domEl.appendChild('foo'); // $ExpectType void
domEl.removeChild(el); // $ExpectType void
domEl.removeChild('foo'); // $ExpectType void

SaxLibxmljs; // $ExpectType typeof SaxLibxmljs
SaxLtx; // $ExpectType typeof SaxLtx
SaxExpat; // $ExpectType typeof SaxExpat
SaxNodeXML; // $ExpectType typeof SaxNodeXML
SaxSaxjs; // $ExpectType typeof SaxSaxjs
SaxSaxesjs; // $ExpectType typeof SaxSaxesjs

SaxLibxmljs2; // $ExpectType typeof SaxLibxmljs
SaxLtx2; // $ExpectType typeof SaxLtx
SaxExpat2; // $ExpectType typeof SaxExpat
SaxNodeXML2; // $ExpectType typeof SaxNodeXML
SaxSaxjs2; // $ExpectType typeof SaxSaxjs
SaxSaxesjs2; // $ExpectType typeof SaxSaxesjs

let parser: ltx.Parser = new SaxLibxmljs();
parser = new SaxLtx();
parser = new SaxExpat();
parser = new SaxNodeXML();
parser = new SaxSaxjs();
parser = new SaxSaxesjs();
