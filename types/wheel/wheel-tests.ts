import wheel = require("wheel");
import { addWheelListener, removeWheelListener } from "wheel";

// Test 'wheel' function and module

const wheelListener1 = (event: WheelEvent) => {
    event.preventDefault();
    wheel.removeWheelListener(document, wheelListener1);
};

wheel(document, wheelListener1);
wheel.addWheelListener(document, wheelListener1);

// Test 'addWheelListener' and 'removeWheelListener' functions.

const wheelListener2 = (event: WheelEvent) => {
    event.preventDefault();
    removeWheelListener(document, wheelListener2);
};

addWheelListener(document, wheelListener2);
