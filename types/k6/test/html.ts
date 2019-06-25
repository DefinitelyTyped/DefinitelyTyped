import { Attribute, Element, FormValue, NodeType, Selection, parseHTML } from 'k6/html';

const handler = (index: number, element: Element) => {};
const tester = (index: number, element: Element) => true;
const mapper = (index: number, element: Element) => null;

let selection: Selection;
let derived: Selection;
let selections: Selection[];
let element: Element;
let possibleElement: Element | undefined;
let elements: Element[];
let formValues: FormValue[];
let attribute: Attribute;
let possibleAttribute: Attribute | undefined;
let attributesMap: { [name: string]: Attribute };
let possibleType: NodeType | undefined;

// parseHTML
parseHTML(); // $ExpectError
parseHTML(5); // $ExpectError
selection = parseHTML('<html></html>');
parseHTML('<html></html>', 5); // $ExpectError

// Selection
selection = parseHTML('<html></html>');
selection.attr('name'); // $ExpectType string | undefined
derived = selection.children('.item');
derived = selection.closest('li');
derived = selection.contents();
selection.data('email'); // $ExpectType string | undefined
selection.each(handler); // $ExpectType void
derived = selection.eq(7);
derived = selection.filter('.item');
derived = selection.filter(tester);
derived = selection.filter(selection);
derived = selection.find('.item');
derived = selection.first();
element = selection.get(7);
derived = selection.has('.item');
selection.html(); // $ExpectType string | undefined
derived = selection.is('.item');
derived = selection.is(tester);
derived = selection.is(selection);
derived = selection.last();
selection.map(mapper); // $ExpectType unknown[]
derived = selection.next('span');
derived = selection.nextAll('span');
derived = selection.nextUntil('span');
derived = selection.not('.item');
derived = selection.not(tester);
derived = selection.parent('.item');
derived = selection.parents('.item');
derived = selection.parentsUntil('.item');
derived = selection.prev('.item');
derived = selection.prevAll('.item');
derived = selection.prevUntil('.item');
selection.serialize(); // $ExpectType string
formValues = selection.serializeArray();
selection.serializeObject(); // $ExpectType { [name: string]: string; }
selection.size(); // $ExpectType number
derived = selection.slice(0);
derived = selection.slice(7, 9);
selection.text(); // $ExpectType string
selections = selection.toArray();
selection.val(); // $ExpectType string | undefined

// Attribute
declare function makeAttribute(): Attribute;
attribute = makeAttribute();
attribute.name; // $ExpectType string
element = attribute.ownerElement;
attribute.value; // $ExpectType string
attribute.localName(); // $ExpectType string
attribute.namespaceURI(); // $ExpectType string
attribute.prefix(); // $ExpectType string

// Element
declare function makeElement(): Element;
element = makeElement();
attributesMap = element.attributes();
element.childElementCount(); // $ExpectType number
elements = element.childNodes();
elements = element.children();
element.classList(); // $ExpectType string[]
element.className(); // $ExpectType string | undefined
element.contains(element); // $ExpectType boolean
possibleElement = element.firstChild();
possibleElement = element.firstElementChild();
element.getAttribute('name'); // $ExpectType string | undefined
possibleAttribute = element.getAttributeNode('name');
elements = element.getElementsByClassName('item');
elements = element.getElementsByTagName('li');
element.hasAttribute('name'); // $ExpectType boolean
element.hasAttributes(); // $ExpectType boolean
element.hasChildNodes(); // $ExpectType boolean
element.id(); // $ExpectType string
element.innerHTML(); // $ExpectType string | undefined
element.isDefaultNamespace(); // $ExpectType boolean
element.isEqualNode(element); // $ExpectType boolean
element.isSameNode(element); // $ExpectType boolean
element.lang(); // $ExpectType string | undefined
possibleElement = element.lastChild();
element.matches('.item'); // $ExepctType boolean
element.namespaceURI(); // $ExpectType string
possibleElement = element.nextElementSibling();
possibleElement = element.nextSibling();
element.nodeName(); // $ExpectType string
possibleType = element.nodeType();
element.nodeValue(); // $ExpectType string | undefined
possibleElement = element.ownerDocument();
possibleElement = element.parentElement();
possibleElement = element.parentNode();
possibleElement = element.previousElementSibling();
possibleElement = element.previousSibling();
possibleElement = element.querySelector('.item');
elements = element.querySelectorAll('.item');
element.textContent(); // $ExpectType string
element.toString(); // $ExpectType string
