import moment = require('moment');
import 'moment-shortformat';

let formatted: string;
/*~ Formats time relative to current time. */
formatted = moment(moment().valueOf() + (36e5 * 5)).short(); // 'in 5h'
formatted = moment(moment().valueOf() - (36e5 * 5)).short(); // '5h ago'
formatted = moment(moment().valueOf() + (36e5 * 5)).short(true); // '5h'
formatted = moment(moment().valueOf() - (36e5 * 5)).short(true); // '5h'

/*~ Times greater than 1 week are converted to dates like Mar 7,
 *~ or if the year of the date does not match the current year
 *~ it is convert to Mar 7, 2031
 */
formatted = moment(moment().valueOf() + 6048e5).short(); // 'Mar 7'

/*~ Using a different "now" */
formatted = moment(moment().valueOf() + (36e5 * 5)).short(
  false, moment(moment().valueOf() + (36e5 * 3))
); // 'in 2h'
