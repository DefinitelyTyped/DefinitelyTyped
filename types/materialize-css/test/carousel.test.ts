import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Carousel
const _carousel = new M.Carousel(elem);
// $ExpectType Carousel
const el = M.Carousel.init(elem);
// $ExpectType Carousel[]
const els = M.Carousel.init(document.querySelectorAll('.whatever'));

// $ExpectType Carousel
const carousel = new materialize.Carousel(elem, {
    dist: 1,
    duration: 1,
    fullWidth: true,
    indicators: true,
    noWrap: true,
    numVisible: 10,
    onCycleTo(current, dragged) {
        // $ExpectType Element
        current;
        // $ExpectType boolean
        dragged;
    },
    padding: 1,
    shift: 1
});

// $ExpectType number
carousel.center;
// $ExpectType number
carousel.dragged;
// $ExpectType Element
carousel.el;
// $ExpectType CarouselOptions
carousel.options;
// $ExpectType boolean
carousel.pressed;
// $ExpectType void
carousel.destroy();
// $ExpectType void
carousel.next(1);
// $ExpectType void
carousel.prev(1);
// $ExpectType void
carousel.set(2);

$(".whatever").carousel();
$(".whatever").carousel("destroy");
$(".whatever").carousel("next", 1);
$(".whatever").carousel("prev", 1);
$(".whatever").carousel("set", 1);
