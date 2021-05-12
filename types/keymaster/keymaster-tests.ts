// simple key binding without scope
key("shift+a", function (keyboardEvent: KeyboardEvent, keymasterEvent: KeymasterEvent) {});

// simple key binding with scope
key("shift+b", "aScope", (keyboardEvent, keymasterEvent) => {
    keyboardEvent; // $ExpectType KeyboardEvent
    keymasterEvent; // $ExpectType KeymasterEvent
});

// This re-sets the default filter method: https://www.npmjs.com/package/keymaster#filter-key-presses
const element = new HTMLElement();
key.filter = event => {
    const tagName = (event.target || event.srcElement)!.tagName;
    return !(tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA");
};
