import { Element, FormValue, Selection, parseHTML } from 'k6/html';

const handler = (index: number, element: Element) => {};
const tester = (index: number, element: Element) => true;
const mapper = (index: number, element: Element) => null;

let selection: Selection;
let derived: Selection;
let selections: Selection[];
let element: Element;
let formValues: FormValue[];

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
