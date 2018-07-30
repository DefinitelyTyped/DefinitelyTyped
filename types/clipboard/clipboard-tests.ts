import * as ClipboardJS from "clipboard";

const cb1 = new ClipboardJS(".btn");
const cb2 = new ClipboardJS(document.getElementById("id"), {
    action: elem => "copy"
});
const cb3 = new ClipboardJS(document.querySelectorAll("query"), {
    text: elem => null
});
const cb4 = new ClipboardJS(".btn", {
    target: elem => null
});
const cb5 = new ClipboardJS(".btn", {
    action: elem => "copy",
    target: elem => null
});
const cb6 = new ClipboardJS(".btn", {
    action: elem => "copy",
    text: trigger => trigger.getAttribute('aria-label'),
    target: trigger => trigger.nextElementSibling,
    container: document.getElementById('modal')
});

cb1.destroy();
ClipboardJS.isSupported();

cb2.on("success", e => {
    console.info("Action:", e.action);
    console.info("Text:", e.text);
    console.info("Trigger:", e.trigger);

    e.clearSelection();
});
cb2.on("error", e => {});
