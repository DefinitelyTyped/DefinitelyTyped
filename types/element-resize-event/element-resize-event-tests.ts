import elementResizeEvent = require("element-resize-event");

const element = document.getElementById("resize");

if (element) {
    const cb = () => {};
    elementResizeEvent(element, cb);
    elementResizeEvent.unbind(element);
    elementResizeEvent.unbind(element, cb);
}
