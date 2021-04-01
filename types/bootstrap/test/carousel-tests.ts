import { Carousel } from "bootstrap";
import * as $ from "jquery";

const element = new Element();

// $ExpectType Carousel
new Carousel(element, { interval: 1000 });

// $ExpectType Carousel
Carousel.getInstance(element);

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
$(".alert").carousel();

// $ExpectType void
$(".alert").carousel({ interval: 1000 });

// $ExpectType void
$(".alert").carousel(0);

$(".alert").carousel("cycle"); // $ExpectType void
$(".alert").carousel("pause"); // $ExpectType void
$(".alert").carousel("prev"); // $ExpectType void
$(".alert").carousel("next"); // $ExpectType void
$(".alert").carousel("nextWhenVisible"); // $ExpectType void
