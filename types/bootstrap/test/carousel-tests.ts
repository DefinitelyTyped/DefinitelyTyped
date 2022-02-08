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

element.addEventListener(Carousel.Events.slide, event => {
    event.direction; // $ExpectType Direction
    event.relatedTarget; // $ExpectType Element
    event.from; // $ExpectType number
    event.to; // $ExpectType number
});

// $ExpectType void
$('.alert').carousel();

// $ExpectType void
$('.alert').carousel({ interval: 1000 });

// $ExpectType void
$('.alert').carousel(0);

$('.alert').carousel('cycle'); // $ExpectType void
$('.alert').carousel('pause'); // $ExpectType void
$('.alert').carousel('prev'); // $ExpectType void
$('.alert').carousel('next'); // $ExpectType void
$('.alert').carousel('nextWhenVisible'); // $ExpectType void
$('.alert').carousel('to'); // $ExpectType void
$('.alert').carousel('dispose'); // $ExpectType void
