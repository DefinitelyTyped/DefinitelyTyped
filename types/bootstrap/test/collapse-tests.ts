import { Collapse } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Collapse
new Collapse(element, { parent: '.parent' });

// $ExpectType Collapse
Collapse.getInstance(element);

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

// $ExpectType void
$('.alert').collapse();

// $ExpectType void
$('.alert').collapse({ parent: '.parent' });

$('.alert').collapse('show'); // $ExpectType void
$('.alert').collapse('hide'); // $ExpectType void
$('.alert').collapse('toggle'); // $ExpectType void
