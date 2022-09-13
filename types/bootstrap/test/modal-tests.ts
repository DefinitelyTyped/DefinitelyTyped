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
    event.target; // $ExpectType HTMLElement
    event.relatedTarget; // $ExpectType HTMLElement | undefined
});

// Ensure that using a string literal as the event type works the same as using
// the `Modal.Events` enum.
element.addEventListener('show.bs.modal', event => {
    event.target; // $ExpectType HTMLElement
    event.relatedTarget; // $ExpectType HTMLElement | undefined
});

element.addEventListener(Modal.Events.shown, event => {
    event.target; // $ExpectType HTMLElement
    event.relatedTarget; // $ExpectType HTMLElement | undefined
});

element.addEventListener(Modal.Events.hide, event => {
    event.target; // $ExpectType HTMLElement
    event.relatedTarget; // $ExpectType HTMLElement | undefined
});

element.addEventListener(Modal.Events.hidden, event => {
    event.target; // $ExpectType HTMLElement
    event.relatedTarget; // $ExpectType HTMLElement | undefined
});

element.addEventListener(Modal.Events.hidePrevented, event => {
    event.target; // $ExpectType HTMLElement
    event.relatedTarget; // $ExpectType HTMLElement | undefined
});

// $ExpectType JQuery<HTMLElement>
$('.alert').modal();

// $ExpectType JQuery<HTMLElement>
$('.alert').modal({ backdrop: 'static' });

$('.alert').modal('show'); // $ExpectType JQuery<HTMLElement>
$('.alert').modal('hide'); // $ExpectType JQuery<HTMLElement>
$('.alert').modal('toggle'); // $ExpectType JQuery<HTMLElement>
$('.alert').modal('handleUpdate'); // $ExpectType JQuery<HTMLElement>
