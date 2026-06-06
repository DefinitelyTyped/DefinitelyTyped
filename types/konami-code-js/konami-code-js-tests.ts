import KonamiCode = require("konami-code-js");

new KonamiCode({
    callback: (instance: KonamiCode) => {
        instance.enable();
    },
    debug: Math.random() ? true : false,
    listener: document.body,
});

new KonamiCode(() => {})
    .enable()
    .enableKeyboardKeys()
    .enableTouchGesture()
    .disable()
    .disableKeyboardKeys()
    .disableTouchGesture()
    .setCallback((instance: KonamiCode) => {
        instance.enable();
    })
    .setListener(document.body)
    .setOptions(() => ({
        callback: () => {},
        debug: true,
        listener: document.body,
    }));
