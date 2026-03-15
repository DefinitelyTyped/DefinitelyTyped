import currentlyUnhandled = require("currently-unhandled");

// Initialize tracking
const getUnhandled = currentlyUnhandled();

// Get currently unhandled rejections
const unhandled = getUnhandled();

// Access properties of unhandled rejections
if (unhandled.length > 0) {
    const reason = unhandled[0].reason;
    const promise: Promise<any> = unhandled[0].promise;
}
