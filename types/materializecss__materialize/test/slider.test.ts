import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Slider
const _slider = new M.Slider(elem);
// $ExpectType Slider
const el = M.Slider.init(elem);
// $ExpectType Slider[]
const els = M.Slider.init(document.querySelectorAll('.whatever'));

// $ExpectType Slider
const slider = new materialize.Slider(elem, {
    duration: 1,
    height: 1,
    indicators: true,
    interval: 1
});

// $ExpectType void
slider.destroy();
// $ExpectType Element
slider.el;
// $ExpectType SliderOptions
slider.options;
// $ExpectType number
slider.activeIndex;
// $ExpectType void
slider.next();
// $ExpectType void
slider.pause();
// $ExpectType void
slider.prev();
// $ExpectType void
slider.start();

$(".whatever").slider();
$(".whatever").slider({ duration: 1 });
$(".whatever").slider("destroy");
$(".whatever").slider("next");
$(".whatever").slider("pause");
$(".whatever").slider("prev");
$(".whatever").slider("start");
