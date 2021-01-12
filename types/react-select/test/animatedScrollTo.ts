import { animatedScrollTo } from "react-select/src/utils";

// Inspired by https://github.com/JedWatson/react-select/blob/master/docs/App/PageNav.js#L70
const el = document.querySelector<HTMLElement>('#test');
if (el && el.offsetTop) {
    animatedScrollTo(window, el.offsetTop);
}
