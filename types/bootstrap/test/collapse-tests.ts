import { Collapse } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Collapse
new Collapse(element, { parent: '.parent' });

// $ExpectType Collapse | null
Collapse.getInstance(element);
// $ExpectType Collapse
Collapse.getOrCreateInstance(element);

// $ExpectType string
Collapse.VERSION;

// $ExpectType Options
Collapse.Default;

element.addEventListener(Collapse.Events.show, event => {
    // do something…
});

element.addEventListener(Collapse.Events.shown, event => {
    // do something…
});

element.addEventListener(Collapse.Events.hide, event => {
    // do something…
});

element.addEventListener(Collapse.Events.hidden, event => {
    // do something…
});

// $ExpectType JQuery<HTMLElement>
$('.alert').collapse();

// $ExpectType JQuery<HTMLElement>
$('.alert').collapse({ parent: '.parent' });

$('.alert').collapse('show'); // $ExpectType JQuery<HTMLElement>
$('.alert').collapse('hide'); // $ExpectType JQuery<HTMLElement>
$('.alert').collapse('toggle'); // $ExpectType JQuery<HTMLElement>
