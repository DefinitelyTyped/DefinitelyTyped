///<reference path="webcomponents.d.ts" />

/*
 * HTML Imports
 */
var imports = document.querySelectorAll("link[rel='import']");
var linkElement = <HTMLLinkElement> imports[0];

if (linkElement.import != null) {
    linkElement.import.href;
    linkElement.import.ownerNode;
    linkElement.import.content.querySelectorAll("*");
}

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


