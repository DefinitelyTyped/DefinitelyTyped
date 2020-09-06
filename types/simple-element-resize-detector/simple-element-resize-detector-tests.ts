import observeResize = require ("simple-element-resize-detector");

declare const elementRef: HTMLElement;
declare const collapse: () => void;

const resizeDetector: HTMLIFrameElement = observeResize(elementRef, collapse);
