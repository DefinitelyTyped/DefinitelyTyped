import {
    Attribute,
    ButtonElement,
    CanvasElement,
    DataListElement,
    Element,
    FieldSetElement,
    FormElement,
    FormFieldElement,
    FormValue,
    HrefElement,
    InputElement,
    KeygenElement,
    LabelElement,
    LegendElement,
    LinkElement,
    MapElement,
    MediaElement,
    MeterElement,
    NodeType,
    ObjectElement,
    OptionElement,
    OutputElement,
    ProgressElement,
    ScriptElement,
    SelectElement,
    Selection,
    StyleElement,
    TableCellElement,
    TableColElement,
    TableElement,
    TableRowElement,
    TableSectionElement,
    TextAreaElement,
    TitleElement,
    parseHTML,
} from 'k6/html';

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
let possibleForm: FormElement | undefined;
let labels: LabelElement[];
let options: OptionElement[];
let cells: TableCellElement[];

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
selection.is('.item'); // $ExpectType boolean
selection.is(tester); // $ExpectType boolean
selection.is(selection); // $ExpectType boolean
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

// ButtonElement
declare function makeButtonElement(): ButtonElement;
const button: ButtonElement = makeButtonElement();
button.value(); // $ExpectType string

// CanvasElement
declare function makeCanvasElement(): CanvasElement;
const canvas: CanvasElement = makeCanvasElement();
canvas.height(); // $ExpectType number
canvas.width(); // $ExpectType number

// DataListElement
declare function makeDataListElement(): DataListElement;
const dataList: DataListElement = makeDataListElement();
options = dataList.options();

// FieldSetElement
declare function makeFieldSetElement(): FieldSetElement;
const fieldSet: FieldSetElement = makeFieldSetElement();
elements = fieldSet.elements();
possibleForm = fieldSet.form();
fieldSet.type(); // $ExpectType string
fieldSet.validity(); // $ExpectType undefined

// FormElement
declare function makeFormElement(): FormElement;
const form: FormElement = makeFormElement();
elements = form.elements();
form.length(); // $ExpectType number
form.method(); // $ExpectType string

// FormFieldElement
declare function makeFormFieldElement(): FormFieldElement;
const field: FormFieldElement = makeFormFieldElement();
possibleForm = field.form();
field.formAction(); // $ExpectType string
field.formEnctype(); // $ExpectType string
field.formMethod(); // $ExpectType string
field.formNoValidate(); // $ExpectType boolean
field.formTarget(); // $ExpectType string
labels = field.labels();
field.name(); // $ExpectType string

// HrefElement
declare function makeHrefElement(): HrefElement;
const href: HrefElement = makeHrefElement();
href.hash(); // $ExpectType string
href.host(); // $ExpectType string
href.hostname(); // $ExpectType string
href.origin(); // $ExpectType string
href.password(); // $ExpectType string
href.pathname(); // $ExpectType string
href.port(); // $ExpectType string
href.protocol(); // $ExpectType string
href.relList(); // $ExpectType string[]
href.search(); // $ExpectType string
href.text(); // $ExpectType string
href.username(); // $ExpectType string

// InputElement
declare function makeInputElement(): InputElement;
const input: InputElement = makeInputElement();
possibleForm = input.form();

// KeygenElement
declare function makeKeygenElement(): KeygenElement;
const keygen: KeygenElement = makeKeygenElement();
possibleForm = keygen.form();
labels = keygen.labels();

// LabelElement
declare function makeLabelElement(): LabelElement;
const label: LabelElement = makeLabelElement();
possibleElement = label.control();
possibleForm = label.form();

// LegendElement
declare function makeLegendElement(): LegendElement;
const legend: LegendElement = makeLegendElement();
possibleForm = legend.form();

// LinkElement
declare function makeLinkElement(): LinkElement;
const link: LinkElement = makeLinkElement();
link.relList(); // $ExpectType string[]

// MapElement
declare function makeMapElement(): MapElement;
const map: MapElement = makeMapElement();
elements = map.areas();
elements = map.images();

// MediaElement
declare function makeMediaElement(): MediaElement;
const media: MediaElement = makeMediaElement();
elements = media.textTracks();

// MeterElement
declare function makeMeterElement(): MeterElement;
const meter: MeterElement = makeMeterElement();
labels = meter.labels();

// ObjectElement
declare function makeObjectElement(): ObjectElement;
const object: ObjectElement = makeObjectElement();
possibleForm = object.form();

// OptionElement
declare function makeOptionElement(): OptionElement;
const option: OptionElement = makeOptionElement();
option.disabled(); // $ExpectType boolean
possibleForm = option.form();
option.index(); // $ExpectType number
option.label(); // $ExpectType string
option.text(); // $ExpectType string
option.value(); // $ExpectType string

// OutputElement
declare function makeOutputElement(): OutputElement;
const output: OutputElement = makeOutputElement();
output.defaultValue(); // $ExpectValue string
possibleForm = output.form();
labels = output.labels();
output.value(); // $ExpectType string

// ProgressElement
declare function makeProgressElement(): ProgressElement;
const progress: ProgressElement = makeProgressElement();
labels = progress.labels();
progress.max(); // $ExpectType number
progress.position(); // $ExpectType number
progress.value(); // $ExpectType number

// ScriptElement
declare function makeScriptElement(): ScriptElement;
const script: ScriptElement = makeScriptElement();
script.text(); // $ExpectType string

// SelectElement
declare function makeSelectElement(): SelectElement;
const select: SelectElement = makeSelectElement();
possibleForm = select.form();
labels = select.labels();
select.length(); // $ExpectType number
options = select.options();
select.selectedIndex(); // $ExpectType number
options = select.selectedOptions();
select.size(); // $ExpectType number
select.type(); // $ExpectType string
select.value(); // $ExpectType string

// StyleElement
declare function makeStyleElement(): StyleElement;
const style: StyleElement = makeStyleElement();
style.type(); // $ExpectType string

// TableCellElement
declare function makeTableCellElement(): TableCellElement;
const cell: TableCellElement = makeTableCellElement();
cell.cellIndex(); // $ExpectType number

// TableColElement
declare function makeTableColElement(): TableColElement;
const col: TableColElement = makeTableColElement();
col.span(); // $ExpectType number

// TableElement
declare function makeTableElement(): TableElement;
const table: TableElement = makeTableElement();
possibleElement = table.caption();
elements = table.rows();
elements = table.tBodies();
possibleElement = table.tFoot();
possibleElement = table.tHead();

// TableRowElement
declare function makeTableRowElement(): TableRowElement;
const row: TableRowElement = makeTableRowElement();
cells = row.cells();
row.rowIndex(); // $ExpectType number
row.sectionRowIndex(); // $ExpectType number

// TableSectionElement
declare function makeTableSectionElement(): TableSectionElement;
const section: TableSectionElement = makeTableSectionElement();
elements = section.rows();

// TextAreaElement
declare function makeTextAreaElement(): TextAreaElement;
const textArea: TextAreaElement = makeTextAreaElement();
possibleForm = textArea.form();
labels = textArea.labels();
textArea.length(); // $ExpectType number

// TitleElement
declare function makeTitleElement(): TitleElement;
const title: TitleElement = makeTitleElement();
title.text(); // $ExpectType string
