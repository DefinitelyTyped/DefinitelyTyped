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
// $ExpectType Offcanvas
Offcanvas.getOrCreateInstance(element, {
    backdrop: 'static'
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

// $ExpectType JQuery<HTMLElement>
$('.alert').offcanvas();

$('.alert').offcanvas('toggle'); // $ExpectType JQuery<HTMLElement>
$('.alert').offcanvas('show'); // $ExpectType JQuery<HTMLElement>
$('.alert').offcanvas('hide'); // $ExpectType JQuery<HTMLElement>
