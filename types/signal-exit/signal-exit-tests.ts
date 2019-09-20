import onExit = require('signal-exit');

// $ExpectType () => void
onExit((code, signal) => {
    code; // $ExpectType number | null
    signal; // $ExpectType string | null
});
const detach = onExit(
    (code, signal) => {
        code; // $ExpectType number | null
        signal; // $ExpectType string | null
    },
    { alwaysLast: true }
);

detach();

onExit.unload();
onExit.load();
onExit.signals(); // $ExpectType string[]
