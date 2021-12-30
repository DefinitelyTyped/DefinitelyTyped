import { Offcanvas } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Offcanvas
new Offcanvas(element);

// $ExpectType Offcanvas
new Offcanvas(element, {
    backdrop: true,
    keyboard: true,
    scroll: false,
});

// $ExpectType Offcanvas | null
Offcanvas.getInstance(element);
// $ExpectType Offcanvas
Offcanvas.getOrCreateInstance(element);
// $ExpectType Offcanvas
Offcanvas.getOrCreateInstance(element, {
    backdrop: true,
    keyboard: true,
    scroll: false,
});

// $ExpectType string
Offcanvas.VERSION;

element.addEventListener(Offcanvas.Events.hidden, event => {
    // do something…
});

element.addEventListener(Offcanvas.Events.hide, event => {
    // do something…
});

element.addEventListener(Offcanvas.Events.show, event => {
    // do something…
});

element.addEventListener(Offcanvas.Events.shown, event => {
    // do something…
});

// $ExpectType void
$('.alert').offcanvas();

$('.alert').offcanvas('toggle'); // $ExpectType void
$('.alert').offcanvas('show'); // $ExpectType void
$('.alert').offcanvas('hide'); // $ExpectType void
