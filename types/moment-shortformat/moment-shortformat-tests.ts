import moment = require('moment');
import momentShortformat = require('moment-shortformat');

moment === momentShortformat; // true

/*~ Formats time relative to current time. */
moment(moment().valueOf() + (36e5 * 5)).short(); // in 5h
moment(moment().valueOf() - (36e5 * 5)).short(); // 5h ago
moment(moment().valueOf() + (36e5 * 5)).short(true); // 5h
moment(moment().valueOf() - (36e5 * 5)).short(true); // 5h

/*~ Times greater than 1 week are converted to dates like Mar 7,
 *~ or if the year of the date does not match the current year
 *~ it is convert to Mar 7, 2031
 */
moment(moment().valueOf() + 6048e5).short(); // Mar 7

/*~ Using a different "now" */
moment(moment().valueOf() + (36e5 * 5))
  .short(false, moment(moment().valueOf() + (36e5 * 3))); // in 2h
