import { ScrollSpy } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType ScrollSpy
new ScrollSpy(element, { offset: 10 });

// $ExpectType ScrollSpy
ScrollSpy.getInstance(element);

// $ExpectType string
ScrollSpy.VERSION;

// $ExpectType Options
ScrollSpy.Default;

element.addEventListener(ScrollSpy.Events.activate, event => {
    // do something…
});

// $ExpectType void
$('.alert').scrollspy();

// $ExpectType void
$('.alert').scrollspy({ offset: 10 });

$('.alert').scrollspy('refresh'); // $ExpectType void
