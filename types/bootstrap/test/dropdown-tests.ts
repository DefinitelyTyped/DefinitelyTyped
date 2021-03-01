import { Dropdown } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Dropdown
new Dropdown(element, { flip: true });

// $ExpectType Dropdown
Dropdown.getInstance(element);

// $ExpectType string
Dropdown.VERSION;

// $ExpectType Options
Dropdown.Default;

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

// $ExpectType void
$('.alert').dropdown();

// $ExpectType void
$('.alert').dropdown({ flip: true });

$('.alert').dropdown('show'); // $ExpectType void
$('.alert').dropdown('hide'); // $ExpectType void
$('.alert').dropdown('toggle'); // $ExpectType void
$('.alert').dropdown('update'); // $ExpectType void
