import { Alert } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Alert
const alert = new Alert(element);
alert.close();
alert.dispose();

// $ExpectType Alert | null
Alert.getInstance(element);
// $ExpectType Alert
Alert.getOrCreateInstance(element);

// $ExpectType void | undefined
Alert.getInstance(element)?.close();
// $ExpectType void
Alert.getOrCreateInstance(element).close();

Alert.VERSION; // $ExpectType string
Alert.NAME; // $ExpectType "alert"

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
