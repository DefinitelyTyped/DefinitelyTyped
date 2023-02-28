import { Carousel } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Carousel
new Carousel(element);
// $ExpectType Carousel
new Carousel(element, {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: 'carousel',
    wrap: true,
    touch: true,
});

// $ExpectType Carousel | null
Carousel.getInstance(element);
// $ExpectType Carousel
Carousel.getOrCreateInstance(element);
// $ExpectType Carousel
Carousel.getOrCreateInstance(element, {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: 'carousel',
    wrap: true,
    touch: true,
});

// $ExpectType string
Carousel.VERSION;

// $ExpectType Options
Carousel.Default;

element.addEventListener(Carousel.Events.slid, event => {
    event.direction; // $ExpectType Direction
    event.relatedTarget; // $ExpectType Element
    event.from; // $ExpectType number
    event.to; // $ExpectType number
});

// Ensure that using a string literal as the event type works the same as using
// the `Carousel.Events` enum.
element.addEventListener('slid.bs.carousel', event => {
    event.direction; // $ExpectType Direction
    event.relatedTarget; // $ExpectType Element
    event.from; // $ExpectType number
    event.to; // $ExpectType number
});

element.addEventListener(Carousel.Events.slide, event => {
    event.direction; // $ExpectType Direction
    event.relatedTarget; // $ExpectType Element
    event.from; // $ExpectType number
    event.to; // $ExpectType number
});

// $ExpectType JQuery<HTMLElement>
$('.alert').carousel();

// $ExpectType JQuery<HTMLElement>
$('.alert').carousel({ interval: 1000 });

// $ExpectType JQuery<HTMLElement>
$('.alert').carousel(0);

$('.alert').carousel('cycle'); // $ExpectType JQuery<HTMLElement>
$('.alert').carousel('pause'); // $ExpectType JQuery<HTMLElement>
$('.alert').carousel('prev'); // $ExpectType JQuery<HTMLElement>
$('.alert').carousel('next'); // $ExpectType JQuery<HTMLElement>
$('.alert').carousel('nextWhenVisible'); // $ExpectType JQuery<HTMLElement>
$('.alert').carousel('to'); // $ExpectType JQuery<HTMLElement>
$('.alert').carousel('dispose'); // $ExpectType JQuery<HTMLElement>
