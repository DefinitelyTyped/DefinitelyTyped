/// <reference lib="dom" />
import {
    addFillGapSelector,
    addLockableTarget,
    addScrollableSelector,
    addScrollableTarget,
    clearQueueScrollLocks,
    disablePageScroll,
    enablePageScroll,
    getCurrentPageScrollBarWidth,
    getPageScrollBarWidth,
    getScrollState,
    removeFillGapSelector,
    removeFillGapTarget,
    removeScrollableSelector,
    removeScrollableTarget,
} from 'scroll-lock';

let $scrollableElement = document.querySelector('.my-scrollable-element')!;
disablePageScroll($scrollableElement); // $ExpectType void
$scrollableElement = document.querySelector('.my-scrollable-element')!;
enablePageScroll($scrollableElement); // $ExpectType void
getScrollState(); // $ExpectType boolean
disablePageScroll(); // $ExpectType void
document.body.style.overflow = 'scroll';
getPageScrollBarWidth(); // $ExpectType number
getPageScrollBarWidth(true); // $ExpectType number
getCurrentPageScrollBarWidth(); // $ExpectType number
addScrollableSelector('.my-scrollable-selector'); // $ExpectType void
removeScrollableSelector('.my-scrollable-selector'); // $ExpectType void
addScrollableTarget($scrollableElement); // $ExpectType void
removeScrollableTarget($scrollableElement); // $ExpectType void
const $lockableElement = document.querySelector('.my-lockable-element')!;
addLockableTarget($lockableElement); // $ExpectType void
addFillGapSelector('.my-fill-gap-selector'); // $ExpectType void
removeFillGapSelector('.my-fill-gap-selector'); // $ExpectType void
const $fillGapElement = document.querySelector('.my-fill-gap-element')!;
addScrollableTarget($fillGapElement); // $ExpectType void
removeFillGapTarget($fillGapElement); // $ExpectType void
