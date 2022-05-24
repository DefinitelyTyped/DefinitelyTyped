import { Dropdown } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

new Dropdown(element, { flip: true }); // $ExpectError
new Dropdown(element, { offset: [0, 2] }); // $ExpectType Dropdown

// $ExpectType Dropdown | null
Dropdown.getInstance(element);
// $ExpectType Dropdown
Dropdown.getOrCreateInstance(element);

// $ExpectType string
Dropdown.VERSION;

// $ExpectType Options
Dropdown.Default;

Dropdown.Default.offset;
Dropdown.Default.boundary;
Dropdown.Default.reference;
Dropdown.Default.display;
Dropdown.Default.popperConfig;

Dropdown.DefaultType.offset; // $ExpectType string
Dropdown.DefaultType.boundary; // $ExpectType string
Dropdown.DefaultType.reference; // $ExpectType string
Dropdown.DefaultType.display; // $ExpectType string
Dropdown.DefaultType.popperConfig; // $ExpectType string

// $ExpectType string
Dropdown.DATA_KEY;

element.addEventListener(Dropdown.Events.show, event => {
    // do something…
});

element.addEventListener(Dropdown.Events.shown, event => {
    // do something…
});

element.addEventListener(Dropdown.Events.hide, event => {
    // do something…
});

element.addEventListener(Dropdown.Events.hidden, event => {
    // do something…
});

// $ExpectType JQuery<HTMLElement>
$('.alert').dropdown();

$('.alert').dropdown({ flip: true }); // $ExpectError
$('.alert').dropdown({ offset: [0, 2], autoClose: true }); // $ExpectType JQuery<HTMLElement>

$('.alert').dropdown('show'); // $ExpectType JQuery<HTMLElement>
$('.alert').dropdown('hide'); // $ExpectType JQuery<HTMLElement>
$('.alert').dropdown('toggle'); // $ExpectType JQuery<HTMLElement>
$('.alert').dropdown('update'); // $ExpectType JQuery<HTMLElement>
