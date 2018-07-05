
import ere = require("element-resize-event");

var domNode: Element = null;
ere(domNode, (): void => {});
ere.unbind(domNode, (): void => {});

