import sdNotify = require('sd-notify');

// $ExpectType void
sdNotify.ready();
// $ExpectError
sdNotify.ready(123);

// $ExpectType void
sdNotify.startWatchdogMode(2800);
// $ExpectError
sdNotify.startWatchdogMode();
// $ExpectError
sdNotify.startWatchdogMode('2800');

// $ExpectType void
sdNotify.stopWatchdogMode();
// $ExpectError
sdNotify.stopWatchdogMode(123);

// $ExpectType void
sdNotify.sendStatus('OK');
// $ExpectError
sdNotify.sendStatus();
// $ExpectError
sdNotify.sendStatus(123);

// $ExpectType void
sdNotify.journalPrint(['OK', 'But']);

// $ExpectType void
sdNotify.stopping(1);
// $ExpectError
sdNotify.stopping();
// $ExpectError
sdNotify.stopping('1');

// $ExpectType void
sdNotify.watchdog();
// $ExpectError
sdNotify.watchdog(1);

// $ExpectType number
sdNotify.watchdogInterval();
// $ExpectError
sdNotify.watchdogInterval(1);

// $ExpectType void
sdNotify.sendState(['STATUS=', 'OK']);
// $ExpectError
sdNotify.sendState();
// $ExpectError
sdNotify.sendState(1);
