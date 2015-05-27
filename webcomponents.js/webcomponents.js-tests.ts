/// <reference path="webcomponents.js.d.ts" />

/*
 * Custom Elements
 */
var fooProto = Object.create(HTMLElement.prototype, {
    createdCallback() {
        // `this` should be the created element
        this.getElementsByTagName("a");
    }
});

document.registerElement("x-foo", {
    prototype: fooProto
});

window.CustomElements.hasNative;
window.CustomElements.flags;
window.CustomElements.ready;
window.CustomElements.useNative;

/*
 * HTMLImports
 */

window.HTMLImports.isIE;
window.HTMLImports.rootDocument.querySelectorAll("div");
window.HTMLImports.useNative;
window.HTMLImports.whenReady(() => {
    return window.HTMLImports.ready === true;
});

document.querySelectorAll(`link[type=${window.HTMLImports.IMPORT_LINK_TYPE}`);

/*
 * Web Components
 */
window.WebComponents.flags;

