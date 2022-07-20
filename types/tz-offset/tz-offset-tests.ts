import tzOffset = require('tz-offset');

// $ExpectType number
tzOffset.offsetOf('Etc/GMT+12');
// @ts-expect-error
tzOffset.offsetOf('invalid TZ');

// $ExpectType number
tzOffset.removeOffset(new Date());
// @ts-expect-error
tzOffset.removeOffset('invalid date');

// $ExpectType Date
tzOffset.timeAt(new Date(), 'America/Lima');
// @ts-expect-error
tzOffset.timeAt(new Date(), 'invalid TZ');
// @ts-expect-error
tzOffset.timeAt('invalid date', 'Pacific/Pago_Pago');
// @ts-expect-error
tzOffset.timeAt('invalid date', 'invalid TZ');

const timezone: tzOffset.Timezone = 'Europe/Brussels';
console.log(timezone);
// @ts-expect-error
const notTimezone: tzOffset.Timezone = 'invalid TS';
console.log(notTimezone);
