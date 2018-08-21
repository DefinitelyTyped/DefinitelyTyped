/*
 * Custom Elements
 */
const fooProto = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value(this: HTMLElement) {
            // `this` should be the created element
            this.getElementsByTagName("a");
        }
    }
});

const XFoo = document.registerElement("x-foo", {
    prototype: fooProto
});

const xFoo = new XFoo();
xFoo.textContent = "";
document.body.appendChild(xFoo);

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
    return window.HTMLImports.ready;
});

document.querySelectorAll(`link[type=${window.HTMLImports.IMPORT_LINK_TYPE}`);

/*
 * Shadow DOM
 */

const shadow = xFoo.createShadowRoot();
xFoo.shadowRoot;
shadow.innerHTML;
shadow.host;

/*
 * Web Components
 */
window.WebComponents.flags;

window.customElements.define("lw-arrival-pie",
    /**
     * ArrivalPie custom element
     */
    class ArrivalPie extends HTMLElement {
        // Can define constructor arguments if you wish.
        constructor() {
          // If you define a ctor, always call super() first!
          // This is specific to CE and required by the spec.
          super();
        }
    }
);
