import { Modal } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Modal
new Modal(element, { backdrop: 'static' });

// $ExpectType Modal
Modal.getInstance(element);

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

// $ExpectType void
$('.alert').modal();

// $ExpectType void
$('.alert').modal({ backdrop: 'static' });

$('.alert').modal('show'); // $ExpectType void
$('.alert').modal('hide'); // $ExpectType void
$('.alert').modal('toggle'); // $ExpectType void
$('.alert').modal('handleUpdate'); // $ExpectType void
