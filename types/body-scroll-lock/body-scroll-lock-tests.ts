import { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const dom: HTMLDivElement = new HTMLDivElement();

disableBodyScroll(dom, {
    reserveScrollBarGap: false,
});

enableBodyScroll(dom);

clearAllBodyScrollLocks();
