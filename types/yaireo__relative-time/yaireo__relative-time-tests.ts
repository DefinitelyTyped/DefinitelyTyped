import RelativeTime = require('@yaireo/relative-time');

const relativeTime = new RelativeTime();
const relativeTimeString1 = relativeTime.from(new Date('2015'));
const relativeTimeString2 = relativeTime.from(new Date('2015'), new Date('2020'));

const relativeTimeSpanish = new RelativeTime({ locale: 'es' });
const relativeTimeStringSpanish = relativeTimeSpanish.from(new Date('2015'));
