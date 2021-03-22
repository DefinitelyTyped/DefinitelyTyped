import { Popover } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Popover
new Popover(element, { delay: 0.5, animation: true });

// $ExpectType Popover
Popover.getInstance(element);

// $ExpectType string
Popover.VERSION;

// $ExpectType Options
Popover.Default;

element.addEventListener(Popover.Events.show, event => {
    // do something…
});

element.addEventListener(Popover.Events.shown, event => {
    // do something…
});

element.addEventListener(Popover.Events.hide, event => {
    // do something…
});

element.addEventListener(Popover.Events.hidden, event => {
    // do something…
});

element.addEventListener(Popover.Events.inserted, event => {
    // do something…
});

// $ExpectType void
$('.alert').popover();

// $ExpectType void
$('.alert').popover({ delay: 0.5, animation: true });

$('.alert').popover('show'); // $ExpectType void
$('.alert').popover('hide'); // $ExpectType void
$('.alert').popover('toggle'); // $ExpectType void
$('.alert').popover('enable'); // $ExpectType void
$('.alert').popover('disable'); // $ExpectType void
$('.alert').popover('toggleEnable'); // $ExpectType void
$('.alert').popover('update'); // $ExpectType void
