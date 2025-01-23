import { Luminous, LuminousGallery } from "luminous-lightbox";

new Luminous(document.querySelector(".luminous"), {
    namespace: "test",
    sourceAttribute: "data-img",
    caption: "test",
    openTrigger: "dragstart",
    closeTrigger: "dragstart",
    closeWithEscape: false,
    closeOnScroll: true,
    showCloseButton: false,
    appendToNode: document.querySelector("main"),
    appendToSelector: "#test",
    onOpen: () => console.log("open"),
    onClose: () => console.log("close"),
    includeImgixJsClass: true,
    injectBaseStyles: false,
});

new LuminousGallery(document.querySelectorAll(".gallery-demo"), {
    arrowNavigation: false,
    onChange: ({ imgEl }) => {
        imgEl.style.scale = "0.5";
    },
}, {
    namespace: "test",
    sourceAttribute: "data-img",
    caption: (el) => el?.tagName ?? null,
    openTrigger: "dragstart",
    closeTrigger: "dragstart",
    closeWithEscape: false,
    closeOnScroll: true,
    showCloseButton: false,
    appendToNode: document.querySelector("main"),
    appendToSelector: "#test",
    onOpen: () => console.log("open"),
    onClose: () => console.log("close"),
    includeImgixJsClass: true,
    injectBaseStyles: false,
});
