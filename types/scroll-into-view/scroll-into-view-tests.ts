import scrollIntoView = require("scroll-into-view");

var someElement: HTMLElement
scrollIntoView(someElement);

scrollIntoView(someElement, {
    time: 500, // half a second
    ease: function (value) {
        return Math.pow(value, 2) - value; // Do something weird.
    },
    validTarget: function (target, parentsScrolled) {
        return parentsScrolled < 2 && !target.matches('.dontScroll');
    },
    align: {
        top: 0,
        left: 1,
        topOffset: 20,
        leftOffset: 20
    }
});

scrollIntoView(someElement, function (type) {
    // Scrolling done.
    // type will be 'complete' if the scroll completed or 'canceled' if the current scroll was canceled by a new scroll
});
