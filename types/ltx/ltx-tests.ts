import * as ltx from 'ltx';

let el: ltx.Element = null as any;
let maybeEl: ltx.Element | undefined = null as any;
let els: ltx.Element[] = [];
let bool: boolean;
const any: any = null;
let str: string = null as any;

el = ltx.clone(el);

bool = ltx.nameEqual(el, el);
bool = ltx.attrsEqual(el, el);
bool = ltx.childrenEqual(el, el);
bool = ltx.equal(el, el);

el = ltx.createElement('el');
el = ltx.createElement('el', 'xml');
el = ltx.createElement('el', { foo: 'bar' });
el = ltx.createElement('el', { foo: 'bar' }, el);
el = ltx.createElement('el', { foo: 'bar' }, 'hi');

if (ltx.isNode(any)) {
    // $ExpectType Node
    any;
}
if (ltx.isElement(any)) {
    // $ExpectType Element
    any;
}
if (ltx.isText(any)) {
    // $ExpectType string
    any;
}

str = ltx.escapeXML(str);
str = ltx.unescapeXML(str);
str = ltx.escapeXMLText(str);
str = ltx.unescapeXMLText(str);

el = ltx.parse('<document/>');
el = ltx.parse('<document/>', (null as any) as ltx.Parser);
el = ltx.parse('<document/>', { Parser: (null as any) as typeof ltx.Parser });
el = ltx.parse('<document/>', { Element: (null as any) as typeof ltx.Element });

el = ltx.tag(['document'], 'foo');
str = ltx.tagString(['document'], 'foo');

str = ltx.stringify(el);
str = ltx.stringify(el, 1);
str = ltx.stringify(el, 1, 1);

const getChildTextElement = ltx.parse('<test><child>body text</child></test>');
if (getChildTextElement.getChildText('child') !== 'body text') {
    throw new Error('body does not match');
}

let p: ltx.Parser;
p = new ltx.Parser();
p = new ltx.Parser({ Parser: (null as any) as typeof ltx.Parser });
p = new ltx.Parser({ Element: (null as any) as typeof ltx.Element });

p.on('tree', (ignored: any) => {});
p.on('error', (ignored: any) => {});

el = new ltx.Element('root').c('children');

bool = el.is('el');
bool = el.is('el', 'ns');
str = el.getName();
let s: string | undefined = el.getNS();
s = el.findNS('ns');
const xmlns: { [key: string]: string } = el.getXmlns();
el.setAttrs('ho');
el.setAttrs({ my: 'attr' });
el.getAttr('ho');
el.getAttr('ho', 'ns');
maybeEl = el.getChild('el');
maybeEl = el.getChild('el', 'ns');
els = el.getChildren('el');
els = el.getChildren('el', 'ns');
maybeEl = el.getChildByAttr('my', 'attr');
maybeEl = el.getChildByAttr('my', 'attr', 'ns');
maybeEl = el.getChildByAttr('my', 'attr', 'ns', true);
els = el.getChildrenByAttr('my', 'attr');
els = el.getChildrenByAttr('my', 'attr', 'ns');
els = el.getChildrenByAttr('my', 'attr', 'ns', true);
els = el.getChildrenByFilter(child => {
    // $ExpectType Node
    child;
    return true;
});
els = el.getChildrenByFilter(child => {
    // $ExpectType Node
    child;
    return true;
}, true);
str = el.getText();
let maybeS: string | null = el.getChildText('hi');
maybeS = el.getChildText('hi', 'ns');
els = el.getChildElements();

class MyEl extends ltx.Element {
    foo: 'bar';
}
let myEl = new MyEl('el');

// $ExpectType Element | MyEl
myEl.root();
// $ExpectType Element | MyEl
myEl.tree();
// $ExpectType Element | MyEl
myEl.up();

el = el.c('hi');
el = el.c('hi', { my: 'attr' });
myEl = myEl.cnode(myEl);
myEl = myEl.t('hi');
myEl = myEl.t(1);
myEl = myEl.remove(el);
myEl = myEl.remove('el');
myEl = myEl.remove('el', 'ns');
myEl = myEl.clone(myEl);
str = el.text();
str = el.text('val');
el.attr('my');
el.attr('my', 'attr');
str = el.toString();
const json: ltx.ElementJson = el.toJSON();
el.write(part => {
    // $ExpectType string
    part;
});
bool = el.nameEquals(el);
bool = el.attrsEquals(el);
bool = el.childrenEquals(el);
bool = el.equals(el);

el.c('child', { age: 5 })
    .t('Hello')
    .up()
    .c('child', { age: 7 })
    .t('Hello')
    .up()
    .c('child', { age: 99 })
    .t('Hello')
    .up();
