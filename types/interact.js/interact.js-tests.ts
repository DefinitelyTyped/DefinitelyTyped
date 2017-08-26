

import interact = require("interact.js");

var button: HTMLElement = document.createElement("BUTTON");
var rectangle: ClientRect = {
    left: 100,
    width: 100,
    right: 100,
    top: 100,
    bottom: 100,
    height: 100
};
let context = document.createElement("a");
let interactable = interact(".foo", {context: context});
interactable = interact(button);

interactable.draggable();
interactable.draggable(true);
interactable.draggable({
    onstart: (event: Interact.InteractEvent) => {},
    onmove : (event: Interact.InteractEvent) => {},
    onend  : (event: Interact.InteractEvent) => {}
});
interactable.dropzone();
interactable.dropzone(true);
interactable.dropChecker(() => {});
interactable.accept();
interactable.accept("button");
interactable.accept(button);
interactable.resizable();
interactable.resizable(true);
interactable.squareResize();
interactable.squareResize(true);
interactable.gesturable();
interactable.gesturable(true);
interactable.gesturable({
    onmove: () => {}
});
interactable.autoScroll();
interactable.autoScroll(true);
interactable.snap();
interactable.snap(true);
interactable.inertia();
interactable.inertia({
    resistance: 1
});
interactable.inertia(true);
interactable.actionChecker();
interactable.actionChecker((event: MouseEvent, defaultAction: string, interactable2: Interact.Interactable) => defaultAction);
var rect: ClientRect = interactable.getRect();
interactable.rectChecker();
interactable.styleCursor();
interactable.origin();
interactable.origin({x: 0, y: 0});
interactable.origin(button);
interactable.deltaSource();
interactable.deltaSource("client");
interactable.restrict();
interactable.restrict({
    "drag": button,
    "resize": button,
    "gesture": button
});
interactable.context();
interactable.ignoreFrom();
interactable.ignoreFrom("button");
interactable.ignoreFrom(button);
interactable.validateSetting("restrict", "drag", button);
interactable.element();
interactable.on("click", () => {}, true);
interactable.off("click", () => {}, true);
interactable.unset();

interact.isSet(button);
interact.on("click", () => {}, true);
interact.off("click", () => {}, true);
interact.enableDragging();
interact.enableDragging(true);
interact.enableResizing();
interact.enableResizing(true);
interact.enableGesturing();
interact.enableGesturing(true);
interact.debug();
interact.margin();
interact.margin(10);
interact.styleCursor();
interact.styleCursor(true);
interact.autoScroll(true);
interact.autoScroll();
interact.snap();
interact.snap(true);
interact.snap({
    mode: "grid"
});
interact.inertia();
interact.inertia(true);
interact.supportsTouch();
interact.currentAction();
interact.dynamicDrop();
interact.dynamicDrop(true);
interact.deltaSource();
interact.deltaSource("page");

interact.restrict({
    "drag": rectangle,
    "resize": rectangle,
    "gesture": rectangle,
    "elementRect": { top: 0, left: 0, bottom: 1, right: 1 }
});
