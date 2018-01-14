import { Disposable } from "event-kit";
import KeymapManager = require("atom-keymap");
import * as ImportTest from "atom-keymap";

declare const element: HTMLElement;
declare let sub: Disposable;
declare const event: KeyboardEvent;

// NPM Examples ===============================================================
const keymaps = new KeymapManager();
keymaps.defaultTarget = document.body;

// Pass all the window's keydown events to the KeymapManager
document.addEventListener("keydown", (event): void => {
    keymaps.handleKeyboardEvent(event);
});

// Add some keymaps. It can also be a directory of json / cson files.
keymaps.loadKeymap("/path/to/keymap-file.json");
// OR
keymaps.add("/key/for/these/keymaps", {
    body: {
        up: "core:move-up",
        down: "core:move-down",
    },
});

// When a keybinding is triggered, it will dispatch it on the node that was focused
window.addEventListener("core:move-up", (event) => console.log("up", event));
window.addEventListener("core:move-down", (event) => console.log("down", event));

// General Usage ==============================================================
const manager = new KeymapManager();
manager.add("some/unique/path", {
    ".workspace": {
        "ctrl-x": "package:do-something",
        "ctrl-y": "package:do-something-else",
    },
    ".test": {
        enter: "core:confirm",
    },
});

manager.onDidMatchBinding((event): void => {
    console.log(event.binding.command);
});

manager.destroy();

// Atom API Testing ===========================================================
// Class Methods
KeymapManager.buildKeydownEvent("a");
KeymapManager.buildKeydownEvent("a", { alt: true });

// Construction and Destruction
new KeymapManager({ defaultTarget: element });
manager.clear();
manager.destroy();

// Event Subscription
sub = manager.onDidMatchBinding((event): void => { event.keystrokes; });
sub = manager.onDidPartiallyMatchBindings((event): void => { event.partiallyMatchedBindings; });
sub = manager.onDidFailToMatchBinding((event): void => { event.keystrokes; });
sub = manager.onDidFailToReadFile((event): void => { event.stack; });

// Adding and Removing Bindings
sub = manager.add("a", {}, 0);

// Accessing Bindings
let bindings: AtomKeymap.KeyBinding[] = manager.getKeyBindings();
bindings = manager.findKeyBindings();
bindings = manager.findKeyBindings({ command: "a" });
bindings = manager.findKeyBindings({ keystrokes: "a" });
bindings = manager.findKeyBindings({ target: element });
bindings = manager.findKeyBindings({ command: "a", keystrokes: "b"});
bindings = manager.findKeyBindings({ command: "a", keystrokes: "b", target: element });

// Managing Keymap Files
manager.loadKeymap("Test.file");
manager.loadKeymap("Test.file", { watch: true });
manager.loadKeymap("Test.file", { watch: true, priority: 0});

// Managing Keyboard Events
manager.handleKeyboardEvent(event);
manager.keystrokeForKeyboardEvent(event);

sub = manager.addKeystrokeResolver((event): string => {
    event.layoutName;
    return "Test";
});

const num: number = manager.getPartialMatchTimeout();
