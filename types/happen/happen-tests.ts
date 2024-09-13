import happen from "happen";

happen.makeEvent({ type: "mouseleave", metaKey: true });
happen.makeEvent({ type: "keyup", keyCode: 13 });

// @ts-expect-error -- invalid prop for MouseEvent
happen.makeEvent({ type: "mousedown", keyCode: 13 });

happen.keydown(window, { keyCode: 18 });

happen.once(window, { type: "keydown", keyCode: 18 });
// @ts-expect-error -- invalid prop for MouseEvent
happen.once(window, { type: "mousedown", keyCode: 13 });

happen.dblclick(document.querySelector("div")!);

happen.dispatchEvent(new EventTarget(), new Event("click"));
happen.dispatchEvent(document, happen.makeEvent({ type: "click" }));

// $ExpectType MouseEvent
happen.makeEvent({ type: "click" });
// $ExpectType KeyboardEvent
happen.makeEvent({ type: "keypress" });
