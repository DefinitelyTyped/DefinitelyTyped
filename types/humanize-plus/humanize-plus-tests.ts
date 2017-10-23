import * as Humanize from 'humanize-plus';

/////////////
// Numbers //
/////////////

/**
 * formatNumber
 */
Humanize.formatNumber(123456789, 2);
// "123,456,789.00"

/**
 * intComma
 */
Humanize.intComma(123456789);
// "123,456,789"

/**
 * compactInteger
 */
Humanize.compactInteger(123456789, 1);
// "123.5M"

// Switch to scientific notation for trillons, because no one knows those abbreviations.
Humanize.compactInteger(-7832186132456328967, 4);
// "-7.8322x10^18"

Humanize.compactInteger(-100, 2);
// "-100"

/**
 * boundedNumber
 */
Humanize.boundedNumber(110, 100);
// "100+"

Humanize.boundedNumber(50, 100);
// "50"

/**
 * ordinal
 */
Humanize.ordinal(22);
// "22nd"

/**
 * times
 */
for (let i = 0; i < 5; i ++) {
  Humanize.times(i, {4: 'too many'});
  if (i === 1) {
    Humanize.times(1.1);
  }
}
// never
// once
// 1.1 times
// twice
// 3 times
// too many times

/**
 * pace
 */
const second = 1000;
const week = 6.048e8;
const decade = 3.156e11;

Humanize.pace(1.5, second, "heartbeat");
// Approximately 2 heartbeats per second

Humanize.pace(4, week);
// Approximately 4 times per week

Humanize.pace(1, decade, "life crisis");
// Less than 1 life crisis per week

/**
 * fileSize
 */
Humanize.fileSize(1024 * 20);
// "20 Kb"

Humanize.fileSize(1024 * 2000);
// "1.95 Mb"

Humanize.fileSize(Math.pow(1000, 4));
// "931.32 Gb"

/**
 * pluralize
 */
Humanize.pluralize(1, "duck");
// "duck"

Humanize.pluralize(3, "duck");
// "ducks"

Humanize.pluralize(3, "duck", "duckies");
// "duckies"

/////////////
// Strings //
/////////////

/**
 * truncate
 */
Humanize.truncate('long text is good for you');
// "long text is good for you"

Humanize.truncate('long text is good for you', 19);
// "long text is goo..."

Humanize.truncate('long text is good for you', 19, '... etc');
// "long text is... etc"

/**
 * truncateWords
 */
Humanize.truncateWords('long text is good for you', 5);
// "long text is good for ..."

/**
 * capitalize
 */
Humanize.capitalize("some boring string");
// "Some boring string"

Humanize.capitalize("wHoOaA!");
// "WHoOaA!"

Humanize.capitalize("wHoOaA!", true);
// "Whooaa!"

/**
 * capitalizeAll
 */
Humanize.capitalizeAll("some boring string");
// "Some Boring String"

/**
 * titleCase
 */
Humanize.titleCase("some of a boring string");
// "Some of a Boring String"

Humanize.titleCase("cool the          iTunes cake, O'Malley!");
// "Cool the iTunes Cake, O'Malley!"

////////////
// Arrays //
////////////

/**
 * oxford
 */
const items = ['apple', 'orange', 'banana', 'pear', 'pineapple'];

Humanize.oxford(items);
// "apple, orange, banana, pear, and pineapple"

Humanize.oxford(items, 3);
// "apple, orange, banana, and 2 others"

// Pluralizes properly too!
Humanize.oxford(items, 4);
// "apple, orange, banana, pear, and 1 other"

Humanize.oxford(items, 3, "and some other fruits");
// "apple, orange, banana, and some other fruits"

/**
 * frequency
 */
const aznPics = [
  'http://24.media.tumblr.com/77082543cb69af56ede38a0cdb2511d0/tumblr_mh96olWPLv1r8k4ywo1_1280.jpg',
  'http://25.media.tumblr.com/3e2d318be34d5ef8f86a612cd1d795ff/tumblr_mhbhb96t3z1r8k4ywo1_1280.jpg',
  'http://24.media.tumblr.com/8c5a052e33c27c784514e1b124b383a1/tumblr_mhexaqrk0w1r8k4ywo1_1280.jpg'
];
const bigfootPics: string[] = [];

"Instagrammers " + Humanize.frequency(aznPics, "took pictures of food");
// "Instagrammers took pictures of food 3 times"

"Bigfoot " + Humanize.frequency(bigfootPics, "took pictures of food");
// "Bigfoot never took pictures of food"

/////////////////////
// Utility methods //
/////////////////////

/**
 * toFixed
 */
Humanize.toFixed(0.615, 2);
// "0.62"

/**
 * normalizePrecision
 */
Humanize.normalizePrecision(-232.231);
// 232
