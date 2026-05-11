import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const dom: HTMLDivElement = new HTMLDivElement();

disableBodyScroll(dom, {
    reserveScrollBarGap: false,
});

disableBodyScroll(dom, {
    allowTouchMove: el => el.tagName === "TEXTAREA",
});

enableBodyScroll(dom);

clearAllBodyScrollLocks();
