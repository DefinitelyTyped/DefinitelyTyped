import { Modal } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Modal
new Modal(element, { backdrop: 'static' });

// $ExpectType Modal | null
Modal.getInstance(element);
// $ExpectType Modal
Modal.getOrCreateInstance(element);

// $ExpectType string
Modal.VERSION;

// $ExpectType Options
Modal.Default;

element.addEventListener(Modal.Events.show, event => {
    // do something…
});

element.addEventListener(Modal.Events.shown, event => {
    // do something…
});

element.addEventListener(Modal.Events.hide, event => {
    // do something…
});

element.addEventListener(Modal.Events.hidden, event => {
    // do something…
});

element.addEventListener(Modal.Events.hidePrevented, event => {
    // do something…
});

// $ExpectType JQuery<HTMLElement>
$('.alert').modal();

// $ExpectType JQuery<HTMLElement>
$('.alert').modal({ backdrop: 'static' });

$('.alert').modal('show'); // $ExpectType JQuery<HTMLElement>
$('.alert').modal('hide'); // $ExpectType JQuery<HTMLElement>
$('.alert').modal('toggle'); // $ExpectType JQuery<HTMLElement>
$('.alert').modal('handleUpdate'); // $ExpectType JQuery<HTMLElement>
