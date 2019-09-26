import BScroll from 'better-scroll';

const BScroll1 = new BScroll('#wrapper');
const BScroll2 = new BScroll('#wrapper', { scrollX: false, scrollY: false });
const BScroll3 = new BScroll('#wrapper', {
    snap: true,
    wheel: false,
    scrollbar: false,
    pullDownRefresh: false,
});
const BScroll4 = new BScroll('#wrapper', {
    wheel: {
        selectedIndex: 0,
    },
});
const BScroll6 = new BScroll('#wrapper', {
    snap: {
        loop: false,
        el: document.querySelector('div-test') as Element,
        threshold: 0.1,
        stepX: 100,
        stepY: 100,
        listenFlick: true,
    },
});
const BScroll7 = new BScroll('#wrapper', {
    scrollbar: {
        fade: true,
    },
});

const BScroll8 = new BScroll('#wrapper', {
    pullDownRefresh: {
        threshold: 50,
        stop: 20,
    },
});

BScroll1.refresh();
BScroll1.scrollTo(0, 100);
BScroll1.scrollTo(0, 100, 200);

BScroll1.scrollToElement('selectedElement');
BScroll1.scrollToElement('selectedElement', 250);

BScroll1.scrollToElement(document.getElementById('selectedElement') as HTMLElement);
BScroll1.scrollToElement(document.getElementById('selectedElement') as HTMLElement, 250);

BScroll2.on('scrollStart', () => { console.log('scroll started'); });

const BScroll9 = new BScroll(document.getElementById('wrapper') as HTMLElement);
const BScroll10 = new BScroll(document.getElementById('wrapper') as HTMLElement, { freeScroll: true });
const BScroll11 = new BScroll(document.getElementById('wrapper') as HTMLElement, {
    preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/,
    },
});
const BScroll12 = new BScroll(document.getElementById('wrapper') as HTMLElement, {
    preventDefaultException: {
        className: /(^|\s)test(\s|$)/,
    },
});

const BScroll13 = new BScroll(document.getElementById('wrapper') as HTMLElement, {
    swipeBounceTime: 1000,
});

const BScroll14 = new BScroll('#wrapper', { disableMouse: true, disableTouch: false });
