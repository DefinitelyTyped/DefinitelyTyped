import Idiomorph = require("idiomorph");
import "idiomorph/htmx";

const existingElement = document.createElement("div");
const dialog = document.createElement("dialog");

Idiomorph.morph(existingElement, dialog.innerHTML, { morphStyle: "innerHTML" });

const currentElement = document.createElement("div");
const newElement = document.createElement("div");

Idiomorph.morph(currentElement, newElement, {
    ignoreActiveValue: true,
    callbacks: {
        beforeNodeMorphed: (oldNode, newNode) => {
            // $ExpectType Node
            oldNode;
            // $ExpectType Node
            newNode;
            if (oldNode instanceof Element && oldNode.tagName.startsWith("MYTAG-")) {
                oldNode.replaceWith(newNode);
                return false;
            }
            return true;
        },
    },
});

// $ExpectType Promise<Node[]> | Node[]
Idiomorph.morph(document, "<html></html>");

// $ExpectType Promise<Node[]> | Node[]
Idiomorph.morph(existingElement, [newElement], {
    morphStyle: "outerHTML",
    ignoreActive: true,
    restoreFocus: false,
    head: {
        style: "merge",
        block: true,
        ignore: false,
        shouldPreserve: element => element.tagName === "SCRIPT",
        shouldReAppend: element => element.tagName === "STYLE",
        shouldRemove: element => false,
        afterHeadMorphed: (element, data) => {
            // $ExpectType Node[]
            data.added;
            // $ExpectType Element[]
            data.kept;
            // $ExpectType Element[]
            data.removed;
        },
    },
    callbacks: {
        beforeNodeAdded: node => true,
        afterNodeAdded: node => {},
        afterNodeMorphed: (oldElement, newContent) => {},
        beforeNodeRemoved: element => true,
        afterNodeRemoved: element => {},
        beforeAttributeUpdated: (attributeName, element, updateType) => {
            // $ExpectType string
            attributeName;
            // $ExpectType "update" | "remove"
            updateType;
            return true;
        },
    },
});

// $ExpectType ConfigInternal
Idiomorph.defaults;
