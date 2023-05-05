//// Test global event interfaces

{
    // Some event properties differ from DOM types
    const evt = new Event("fake");
    evt.cancelBubble();
    // @ts-expect-error
    evt.composedPath[2];
    // $ExpectType 0 | 2
    evt.eventPhase;

    // @ts-expect-error - ensure constructor does not return a constructor
    new evt();

    const et: EventTarget = new EventTarget();
    et.addEventListener("", () => {}, {passive: true});
    // @ts-expect-error - ensure constructor does not return a constructor
    new et();
}
