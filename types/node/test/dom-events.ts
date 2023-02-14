//// Test global event interfaces

{
    const e: Event = new Event("");
    e.preventDefault();
    // @ts-expect-error - ensure constructor does not return a constructor
    new e();

    // Node's "DOM-like" Event differs from the real DOM in a few key aspects
    // $ExpectType boolean
    e.cancelBubble;
    e.composedPath();
    // $ExpectType number
    e.eventPhase;

    const et: EventTarget = new EventTarget();
    et.addEventListener("", () => {}, {passive: true});
    // @ts-expect-error - ensure constructor does not return a constructor
    new et();
}
