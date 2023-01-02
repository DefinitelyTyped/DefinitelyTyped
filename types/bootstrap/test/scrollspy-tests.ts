import { ScrollSpy } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType ScrollSpy
new ScrollSpy(element, {
    offset: 10,
    threshold: [10],
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
});

// $ExpectType ScrollSpy | null
ScrollSpy.getInstance(element);
// $ExpectType ScrollSpy
ScrollSpy.getOrCreateInstance(element);

// $ExpectType string
ScrollSpy.VERSION;

// $ExpectType Options
ScrollSpy.Default;

element.addEventListener(ScrollSpy.Events.activate, event => {
    // do something…
});

// $ExpectType JQuery<HTMLElement>
$('.alert').scrollspy();

// $ExpectType JQuery<HTMLElement>
$('.alert').scrollspy({ offset: 10 });

$('.alert').scrollspy('refresh'); // $ExpectType JQuery<HTMLElement>
