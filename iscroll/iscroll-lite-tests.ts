///<reference path='iscroll-lite.d.ts' />

var iscroll_1 = new IScroll('#wrapper');

var iscroll_2 = new IScroll('#wrapper', {});

var iscroll_3 = new IScroll(document.getElementById('wrapper'));

var iscroll_4 = new IScroll(document.getElementById('wrapper'), {});

var iscroll_5 = new IScroll('#wrapper', {
    HWCompositing: false,
    bindToWrapper: true,
    bounce: false,
    bounceEasing: IScroll.utils.ease.circular,
    bounceTime: 100,
    click: true,
    deceleration: 100,
    directionLockThreshold: 100,
    disableMouse: false,
    disablePointer: true,
    disableTouch: false,
    eventPassthrough: 'horizontal',
    freeScroll: true,
    momentum: false,
    preventDefault: true,
    preventDefaultException: { className: /(^|\s)formfield(\s|$)/ },
    resizePolling: 100,
    scrollX: false,
    scrollY: true,
    startX: 100,
    startY: 100,
    tap: 'tapEvent',
    useTransform: false,
    useTransition: true
});

var iscroll_6 = new IScroll('#wrapper', {
    bounceEasing: 'bounce',
    eventPassthrough: true,
    tap: false
});

iscroll_1.destroy();
iscroll_2.disable();
iscroll_3.enable();
var q: number = iscroll_4.getComputedPosition().x;
iscroll_5.handleEvent(new Event());
iscroll_6.off('scrollEnd', function () {});
iscroll_1.on('scrollStart', function () {});
iscroll_2.refresh();
iscroll_3.resetPosition(100);
iscroll_4.scrollBy(1, 2, 100, IScroll.utils.ease.quadratic);
iscroll_5.scrollTo(2, 3, 100, { fn: function (k: number) { return k; }, style: 'cubic-bezier(0,0,1,1)' });
iscroll_6.scrollToElement('#elem', 100, 10, 10);

var w: number = iscroll_1.directionX;
var e: number = iscroll_2.directionY;
var r: boolean = iscroll_3.enabled;
var t: number = iscroll_4.endTime;
var y: boolean = iscroll_5.hasHorizontalScroll;
var u: boolean = iscroll_6.hasVerticalScroll;
var i: boolean = iscroll_1.isInTransition;
var o: number = iscroll_2.maxScrollX;
var p: number = iscroll_3.maxScrollY;
var a: IScrollOptions = iscroll_4.options;
var s: HTMLElement = iscroll_5.scroller;
var d: number = iscroll_6.scrollerWidth;
var f: number = iscroll_1.scrollerHeight;
var g: CSSStyleDeclaration = iscroll_2.scrollerStyle;
var h: string = iscroll_3.translateZ;
var j: string = iscroll_4.version;
var k: HTMLElement = iscroll_4.wrapper;
var l: number = iscroll_5.wrapperWidth;
var z: number = iscroll_6.wrapperHeight;
var x: number = iscroll_1.wrapperOffset.left;
var c: number = iscroll_2.x;
var v: number = iscroll_3.y;
