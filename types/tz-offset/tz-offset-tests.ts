import tzOffset = require('tz-offset');

// $ExpectType number
tzOffset.offsetOf('Etc/GMT+12');
// $ExpectError
tzOffset.offsetOf('invalid TZ');

// $ExpectType number
tzOffset.removeOffset(new Date());
// $ExpectError
tzOffset.removeOffset('invalid date');

// $ExpectType Date
tzOffset.timeAt(new Date(), 'America/Lima');
// $ExpectError
tzOffset.timeAt(new Date(), 'invalid TZ');
// $ExpectError
tzOffset.timeAt('invalid date', 'Pacific/Pago_Pago');
// $ExpectError
tzOffset.timeAt('invalid date', 'invalid TZ');

const timezone: tzOffset.Timezone = 'Europe/Brussels';
console.log(timezone);
// $ExpectError
const notTimezone: tzOffset.Timezone = 'invalid TS';
console.log(notTimezone);
