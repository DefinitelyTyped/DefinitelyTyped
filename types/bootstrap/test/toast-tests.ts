import { Toast } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Toast
new Toast(element, { animation: false });

// $ExpectType Toast
Toast.getInstance(element);

// $ExpectType string
Toast.VERSION;

// $ExpectType Options
Toast.Default;

element.addEventListener(Toast.Events.hidden, event => {
    // do something…
});

element.addEventListener(Toast.Events.hide, event => {
    // do something…
});

element.addEventListener(Toast.Events.show, event => {
    // do something…
});

element.addEventListener(Toast.Events.shown, event => {
    // do something…
});

// $ExpectType void
$('.alert').toast();

// $ExpectType void
$('.alert').toast({ animation: false });

$('.alert').toast('hide'); // $ExpectType void
$('.alert').toast('show'); // $ExpectType void
