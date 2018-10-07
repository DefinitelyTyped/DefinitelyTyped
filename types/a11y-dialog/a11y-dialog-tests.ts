import A11yDialog = require('a11y-dialog');

const dialogEl = new A11yDialog(document.getElementById("test"));

dialogEl.show();
dialogEl.hide();
dialogEl.destroy();
dialogEl.create();

// Test out interfaces that extends Element.
dialogEl.on("show", (el: HTMLElement) => {
    el.textContent;
});

// Test out element and event.
dialogEl.on("create", (el: HTMLElement, evt) => {
    el.textContent;

    evt.target;
});

dialogEl.on('hide', () => {
    const t = 5;
});

dialogEl.off("show", (el: HTMLElement) => {
    el.textContent;
});
