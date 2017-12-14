import * as moment from 'moment';
import 'moment-business-time';

moment('2015-02-28T10:00:00Z').nextWorkingDay();
moment('2015-02-28T20:00:00Z').nextWorkingDay();
moment('2015-02-28T10:00:00Z').nextWorkingTime();
moment('2015-02-28T20:00:00Z').nextWorkingTime();
moment('2015-02-28T10:00:00Z').lastWorkingDay();
// Fri Feb 27 2015 10:00:00 GMT+0000
moment('2015-02-28T20:00:00Z').lastWorkingDay();
// Fri Feb 27 2015 20:00:00 GMT+0000
moment('2015-02-27T10:00:00Z').addWorkingTime(5, 'hours');
// Fri Feb 27 2015 15:00:00 GMT+0000
moment('2015-02-28T10:00:00Z').addWorkingTime(5, 'hours');
// Mon Mar 02 2015 14:00:00 GMT+0000
moment('2015-02-27T10:00:00Z').addWorkingTime(5, 'hours', 30, 'minutes');
// Fri Feb 27 2015 15:30:00 GMT+0000
moment('2015-02-27T16:00:00Z').subtractWorkingTime(5, 'hours');
// Fri Feb 27 2015 11:00:00 GMT+0000
moment('2015-02-28T16:00:00Z').subtractWorkingTime(5, 'hours');
// Fri Feb 27 2015 12:00:00 GMT+0000
moment('2015-02-27T16:00:00Z').subtractWorkingTime(5, 'hours', 30, 'minutes');
// Fri Feb 27 2015 10:30:00 GMT+0000
moment('2015-02-27T16:30:00Z').workingDiff(moment('2015-02-26T12:00:00Z'), 'hours');
// 12
moment('2015-02-27T16:30:00Z').workingDiff(moment('2015-02-26T12:00:00Z'), 'hours', true);
// 12.5
// set opening time to 09:30 and close early on Wednesdays
moment.updateLocale('en', {
    workinghours: {
        0: null,
        1: ['09:30:00', '17:00:00'],
        2: ['09:30:00', '17:00:00'],
        3: ['09:30:00', '13:00:00'],
        4: ['09:30:00', '17:00:00'],
        5: ['09:30:00', '17:00:00'],
        6: null
    }
});
moment('2015-02-25T15:00:00Z').isWorkingTime(); // false
moment('2015-02-23T09:00:00Z').isWorkingTime(); // false
moment.updateLocale('en', {
    holidays: [
        '2015-05-04'
    ]
});
moment('2015-05-04T09:30:00Z').isWorkingDay(); // false
moment.updateLocale('en', {
    holidays: [
        '*-12-25'
    ]
});
moment('2015-12-25T16:30:00Z').isWorkingDay(); // false
moment('2016-12-25T16:30:00Z').isWorkingDay(); // false
moment('2017-12-25T16:30:00Z').isWorkingDay(); // false
moment('2018-12-25T16:30:00Z').isWorkingDay(); // false
