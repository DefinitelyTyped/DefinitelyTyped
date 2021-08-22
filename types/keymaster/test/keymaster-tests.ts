import key = require("keymaster");

// text whether interfaces were exported correctly
type Keymaster = key;
type Handler = key.Handler;
type KeyHandler = key.KeyHandler;
type FilterEvent = key.FilterEvent;

key("shift+a", (keyboardEvent, handler) => {
    keyboardEvent; // $ExpectType KeyboardEvent
    handler; // $ExpectType Handler
});
key("shift+b", "aScope", (keyboardEvent, handler) => {
    keyboardEvent; // $ExpectType KeyboardEvent
    handler; // $ExpectType Handler
});

key.shift; // $ExpectType boolean
key["⇧"]; // $ExpectType boolean
key.alt; // $ExpectType boolean
key.option; // $ExpectType boolean
key["⌥"]; // $ExpectType boolean
key.ctrl; // $ExpectType boolean
key.control; // $ExpectType boolean
key["⌃"]; // $ExpectType boolean
key.command; // $ExpectType boolean
key["⌘"]; // $ExpectType boolean

key.setScope(); // $ExpectType void
key.setScope("foo"); // $ExpectType void

key.getScope(); // $ExpectType string

key.deleteScope("foo"); // $ExpectType void

key.filter = event => {
    event; // $ExpectType FilterEvent
    const tagName = event.target!.tagName;
    return !(tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA");
};
key.filter = event => {
    const tagName = event.target!.tagName;
    key.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? "input" : "other");
    return true;
};

key.isPressed("M"); // $ExpectType boolean
key.isPressed(77); // $ExpectType boolean

key.getPressedKeyCodes(); // $ExpectType number[]

key.noConflict(); // $ExpectType Keymaster

key.unbind("a"); // $ExpectType void
