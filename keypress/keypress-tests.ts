namespace KeypressComboTests {
    var listener = new window.keypress.Listener();

    var copyCombo = <Keypress.Combo>{
        keys: "cmd c",
        on_keydown: () => {
            console.log("Key down");
        },
        on_keyup: () => {
            console.log("Key up");
        },
        on_release: () => {
            console.log("Released");
        },
        prevent_default: true,
        prevent_repeat: false,
        is_unordered: true,
        is_counting: false,
        is_exclusive: false,
        is_sequence: true,
        is_solitary: true
    };

    var pasteCombo = <Keypress.Combo>{
        keys: "ctrl v",
        on_keydown: () => {
            console.log("Paste");
        },
        prevent_default: true,
        prevent_repeat: true,
        is_exclusive: true
    };

    listener.register_combo(copyCombo);
    listener.unregister_combo("cmd c");

    listener.register_many([copyCombo, pasteCombo]);
    listener.stop_listening();
    listener.listen();
    listener.unregister_many(["cmd c", "cmd v"]);

    listener.reset();
}

namespace KeypressBindingTests {
    var element = document.createElement('div');
    var defaults = <Keypress.ListenerDefaults>{
        prevent_default: true,
        prevent_repeat: true,
        is_unordered: true,
        is_counting: false,
        is_exclusive: false,
        is_solitary: false,
        is_sequence: false
    };
    var listener = new window.keypress.Listener(element);
    listener = new window.keypress.Listener(element, defaults);
    listener.reset();
}
