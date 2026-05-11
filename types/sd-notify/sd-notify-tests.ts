import sdNotify = require("sd-notify");

// $ExpectType void
sdNotify.ready();
// @ts-expect-error
sdNotify.ready(123);

// $ExpectType void
sdNotify.startWatchdogMode(2800);
// @ts-expect-error
sdNotify.startWatchdogMode();
// @ts-expect-error
sdNotify.startWatchdogMode("2800");

// $ExpectType void
sdNotify.stopWatchdogMode();
// @ts-expect-error
sdNotify.stopWatchdogMode(123);

// $ExpectType void
sdNotify.sendStatus("OK");
// @ts-expect-error
sdNotify.sendStatus();
// @ts-expect-error
sdNotify.sendStatus(123);

// $ExpectType void
sdNotify.journalPrint(["OK", "But"]);

// $ExpectType void
sdNotify.stopping(1);
// @ts-expect-error
sdNotify.stopping();
// @ts-expect-error
sdNotify.stopping("1");

// $ExpectType void
sdNotify.watchdog();
// @ts-expect-error
sdNotify.watchdog(1);

// $ExpectType number
sdNotify.watchdogInterval();
// @ts-expect-error
sdNotify.watchdogInterval(1);

// $ExpectType void
sdNotify.sendState(["STATUS=", "OK"]);
// @ts-expect-error
sdNotify.sendState();
// @ts-expect-error
sdNotify.sendState(1);

// $ExpectType void
sdNotify.log.alert(["Hello there"]);
// @ts-expect-error
sdNotify.log.alert();
