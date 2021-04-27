import { Alert } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Alert
new Alert(element);

// $ExpectType Alert
Alert.getInstance(element);

// $ExpectType string
Alert.VERSION;

element.addEventListener(Alert.Events.close, event => {
    // do something…
});

element.addEventListener(Alert.Events.closed, event => {
    // do something…
});

// $ExpectType void
$('.alert').alert();

// $ExpectType void
$('.alert').alert('close');
