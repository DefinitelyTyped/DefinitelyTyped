import * as Aos from "aos";

const options: Aos.AosOptions = {
    disable: () => true,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease-in-out-back",
    once: false,
    mirror: false,
    anchorPlacement: "center-bottom"
};

Aos.init();
Aos.init(options);

Aos.refresh();
Aos.refreshHard();

document.addEventListener("aos:in", event => {
    event;
    event.detail;
});

document.addEventListener("aos:out", () => {});

// aos also creates custom events for every unique id, which you can't cover in d.ts
document.addEventListener("aos:in:sectionId" as Aos.AosEventType, event => {
    event.detail;
});
