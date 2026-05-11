{
    // Some event properties differ from DOM types
    const evt = new Event("");
    // @ts-expect-error
    evt.composedPath[1];
    // $ExpectType 0 | 2
    evt.eventPhase;

    const ce = new CustomEvent("", { detail: "" });
    // $ExpectType string
    ce.detail;

    const et: EventTarget = new EventTarget();
    et.addEventListener("", () => {}, { passive: true });
}
