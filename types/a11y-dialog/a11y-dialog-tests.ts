import A11yDialog = require('a11y-dialog');

var dialogEl = new A11yDialog(document.getElementById("test"));

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

});


dialogEl.off("show", (el: HTMLElement) => {

})