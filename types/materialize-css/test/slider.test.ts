import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Slider
const _slider = new M.Slider(elem);

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
