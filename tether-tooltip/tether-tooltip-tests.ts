///<reference path="tether-tooltip.d.ts" />

var yellowBox = document.querySelector(".yellow");

new Tooltip({
    target: yellowBox,
    position: 'top left',
    content: "My awesome <b>content</b>.",
    classes: 'my-tether-theme'
});

new Tooltip({target: yellowBox});
