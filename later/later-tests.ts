/// <reference path="./later.d.ts"/>


module LaterTest_DefineSchedule {

    // define a new schedule
    var textSched = later.parse.text('at 10:15am every weekday');
    var cronSched = later.parse.cron('0 0/5 14,18 * * ?');
    var recurSched = later.parse.recur().last().dayOfMonth();
    var manualSched = <Later.IScheduleData>{ schedules: [ <Later.IRecurrence>{ M: [ 3 ], D: [ 21 ] } ] };

    // this schedule will fire on the closest weekday to the 15th
    // every month at 2:00 am except in March
    var complexSched = later.parse.recur()
        .on(15).dayOfMonth().onWeekday().on(2).hour()
        .and()
        .on(14).dayOfMonth().on(6).dayOfWeek().on(2).hour()
        .and()
        .on(16).dayOfMonth().on(2).dayOfWeek().on(2).hour()
        .except()
        .on(3).month();
}

module LaterTest_ConfigureTimezone {

    // set later to use UTC (the default)
    later.date.UTC();

    // set later to use local time
    later.date.localTime();
}

module LaterTest_TimePeriods {
    export function second() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.second.name;
        // 'second'

        later.second.range;
        // 1

        later.second.val(d);
        // 5

        later.second.isValid(d, 10);
        // false

        later.second.extent();
        // [0, 59]

        later.second.start(d);
        // 'Fri, 22 Mar 2013 10:02:05 GMT'

        later.second.end(d);
        // 'Fri, 22 Mar 2013 10:02:05 GMT'

        later.second.next(d, 27);
        // 'Fri, 22 Mar 2013 10:02:27 GMT'

        later.second.prev(d, 27);
        // 'Fri, 22 Mar 2013 10:01:27 GMT'
    }

    export function minute() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.minute.name;
        // 'minute'

        later.minute.range;
        // 60

        later.minute.val(d);
        // 2

        later.minute.isValid(d, 2);
        // true

        later.minute.extent();
        // [0, 59]

        later.minute.start(d);
        // 'Fri, 22 Mar 2013 10:02:00 GMT'

        later.minute.end(d);
        // 'Fri, 22 Mar 2013 10:02:59 GMT'

        later.minute.next(d, 27);
        // 'Fri, 22 Mar 2013 10:27:00 GMT'

        later.minute.prev(d, 27);
        // 'Fri, 22 Mar 2013 09:27:59 GMT'
    }

    export function hour() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.hour.name;
        // 'hour'

        later.hour.range;
        // 3600

        later.hour.val(d);
        // 10

        later.hour.isValid(d, 2);
        // false

        later.hour.extent();
        // [0, 23]

        later.hour.start(d);
        // 'Fri, 22 Mar 2013 10:00:00 GMT'

        later.hour.end(d);
        // 'Fri, 22 Mar 2013 10:59:59 GMT'

        later.hour.next(d, 5);
        // 'Sat, 23 Mar 2013 05:00:00 GMT'

        later.hour.prev(d, 21);
        // 'Thu, 21 Mar 2013 21:59:59 GMT'
    }

    export function time() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.time.name;
        // 'time'

        later.time.range;
        // 1

        later.time.val(d);
        // 36125

        later.time.isValid(d, 36125);
        // true

        later.time.extent();
        // [0, 86399]

        later.time.start(d);
        // 'Fri, 22 Mar 2013 00:00:00 GMT'

        later.time.end(d);
        // 'Fri, 22 Mar 2013 23:59:59 GMT'

        later.time.next(d, 60);
        // 'Sat, 23 Mar 2013 00:01:00 GMT'

        later.time.prev(d, 60);
        // 'Fri, 22 Mar 2013 00:01:00 GMT'
    }

    export function day() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.day.name;
        // 'day'

        later.day.range;
        // 86400

        later.day.val(d);
        // 22

        later.day.isValid(d, 3);
        // false

        later.day.extent(d);
        // [1, 31]

        later.day.start(d);
        // 'Fri, 22 Mar 2013 00:00:00 GMT'

        later.day.end(d);
        // 'Fri, 22 Mar 2013 23:59:59 GMT'

        later.day.next(d, 11);
        // 'Thu, 11 Apr 2013 00:00:00 GMT'

        later.day.prev(d, 2);
        // 'Sat, 02 Mar 2013 23:59:59 GMT'
    }

    export function day_of_week() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.dayOfWeek.name;
        // 'day of week'

        later.dayOfWeek.range;
        // 86400

        later.dayOfWeek.val(d);
        // 6

        later.dayOfWeek.isValid(d, 3);
        // false

        later.dayOfWeek.extent();
        // [1, 7]

        later.dayOfWeek.start(d);
        // 'Fri, 22 Mar 2013 00:00:00 GMT'

        later.dayOfWeek.end(d);
        // 'Fri, 22 Mar 2013 23:59:59 GMT'

        later.dayOfWeek.next(d, 1);
        // 'Sun, 24 Mar 2013 00:00:00 GMT'

        later.dayOfWeek.prev(d, 5);
        // 'Thu, 21 Mar 2013 23:59:59 GMT'
    }

    export function day_of_week_count() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.dayOfWeekCount.name;
        // 'day of week count'

        later.dayOfWeekCount.range;
        // 604800

        later.dayOfWeekCount.val(d);
        // 4

        later.dayOfWeekCount.isValid(d, 4);
        // true

        later.dayOfWeekCount.extent(d);
        // [1, 5]

        later.dayOfWeekCount.start(d);
        // 'Fri, 22 Mar 2013 00:00:00 GMT'

        later.dayOfWeekCount.end(d);
        // 'Thu, 28 Mar 2013 23:59:59 GMT'

        // zero is special cased and means the last instance of
        // a day of the week in the month, instead of meaning the
        // first day of the week with the highest instance count
        // which would have been Mar 29 with value 5.
        later.dayOfWeekCount.next(d, 0);
        // 'Mon, 25 Mar 2013 00:00:00 GMT'

        later.dayOfWeekCount.prev(d, 2);
        // 'Thu, 14 Mar 2013 23:59:59 GMT'
    }

    export function day_of_year() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.dayOfYear.name;
        // 'day of year'

        later.dayOfYear.range;
        // 86400

        later.dayOfYear.val(d);
        // 81

        later.dayOfYear.isValid(d, 4);
        // false

        later.dayOfYear.extent(d);
        // [1, 365]

        later.dayOfYear.start(d);
        // 'Fri, 22 Mar 2013 00:00:00 GMT'

        later.dayOfYear.end(d);
        // 'Fri, 22 Mar 2013 23:59:59 GMT'

        later.dayOfYear.next(d, 256);
        // 'Fri, 13 Sep 2013 00:00:00 GMT'

        later.dayOfYear.prev(d, 44);
        // 'Wed, 13 Feb 2013 23:59:59 GMT'
    }

    export function week_of_month() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.weekOfMonth.name;
        // 'week of month'

        later.weekOfMonth.range;
        // 604800

        later.weekOfMonth.val(d);
        // 4

        later.weekOfMonth.isValid(d, 4);
        // true

        later.weekOfMonth.extent(d);
        // [1, 6]

        later.weekOfMonth.start(d);
        // 'Sun, 17 Mar 2013 00:00:00 GMT'

        later.weekOfMonth.end(d);
        // 'Sat, 23 Mar 2013 23:59:59 GMT'

        later.weekOfMonth.next(d, 1);
        // 'Mon, 01 Apr 2013 00:00:00 GMT'

        later.weekOfMonth.prev(d, 2);
        // 'Sat, 09 Mar 2013 23:59:59 GMT'
    }

    export function week_of_year() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.weekOfYear.name;
        // 'week of year'

        later.weekOfYear.range;
        // 604800

        later.weekOfYear.val(d);
        // 12

        later.weekOfYear.isValid(d, 21);
        // false

        later.weekOfYear.extent(d);
        // [1, 52]

        later.weekOfYear.start(d);
        // 'Mon, 18 Mar 2013 00:00:00 GMT'

        later.weekOfYear.end(d);
        // 'Sun, 24 Mar 2013 23:59:59 GMT'

        later.weekOfYear.next(d, 47);
        // 'Mon, 18 Nov 2013 00:00:00 GMT'

        later.weekOfYear.prev(d, 52);
        // 'Sun, 30 Dec 2012 23:59:59 GMT'
    }

    export function month() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.month.name;
        // 'month'

        later.month.range;
        // 2629740

        later.month.val(d);
        // 3

        later.month.isValid(d, 3);
        // true

        later.month.extent();
        // [1, 12]

        later.month.start(d);
        // 'Fri, 01 Mar 2013 00:00:00 GMT'

        later.month.end(d);
        // 'Sun, 31 Mar 2013 23:59:59 GMT'

        later.month.next(d, 11);
        // 'Fri, 01 Nov 2013 00:00:00 GMT'

        later.month.prev(d, 2);
        // 'Thu, 28 Feb 2013 23:59:59 GMT'
    }

    export function year() {
        var d = new Date('2013-03-22T10:02:05Z');

        later.year.name;
        // 'year'

        later.year.range;
        // 31556900

        later.year.val(d);
        // 2013

        later.year.isValid(d, 2013);
        // true

        later.year.extent();
        // [1970, 2099]

        later.year.start(d);
        // 'Tue, 01 Jan 2013 00:00:00 GMT'

        later.year.end(d);
        // 'Tue, 31 Dec 2013 23:59:59 GMT'

        later.year.next(d, 2014);
        // 'Wed, 01 Jan 2014 00:00:00 GMT'

        later.year.prev(d, 2012);
        // 'Mon, 31 Dec 2012 23:59:59 GMT'
    }

    export interface IPartOfDayLater extends Later.IStatic {
        partOfDay: Later.ITimePeriod;
    }

    export function custom() {

        var customLater = <IPartOfDayLater>later;

        customLater.partOfDay = {

            name: 'part of day',

            range: later.hour.range * 6,

            val: function(d: Date): number {
                return later.hour.val(d) < 12
                    ? 0
                    : later.hour.val(d) < 18
                        ? 1
                        : 2;
            },

            isValid: function(d: Date, val: any) {
                return customLater.partOfDay.val(d) === val;
            },

            extent: function(date?: Date) {
                return [0, 2];
            },

            start: function(date: Date) {
                var hour = customLater.partOfDay.val(date) === 0
                    ? 0
                    : customLater.partOfDay.val(date) === 1
                        ? 12
                        : 18;

                return later.date.next(
                    later.year.val(date),
                    later.month.val(date),
                    later.day.val(date),
                    hour
                );
            },

            end: function(date: Date) {
                var hour = customLater.partOfDay.val(date) === 0
                    ? 11
                    : customLater.partOfDay.val(date) === 1
                        ? 5
                        : 23;

                return later.date.prev(
                    later.year.val(date),
                    later.month.val(date),
                    later.day.val(date),
                    hour
                );
            },

            next: function(date: Date, val: any) {
                var hour = val === 0
                    ? 0
                    : val === 1
                        ? 12
                        : 18;

                return later.date.next(
                    later.year.val(date),
                    later.month.val(date),
                    // increment the day if we already passed the desired time period
                    later.day.val(date) + (hour < later.hour.val(date) ? 1 : 0),
                    hour
                );
            },

            prev: function(date: Date, val: any) {
                var hour = val === 0
                    ? 11
                    : val === 1
                        ? 5
                        : 23;

                return later.date.prev(
                    later.year.val(date),
                    later.month.val(date),
                    // decrement the day if we already passed the desired time period
                    later.day.val(date) + (hour > later.hour.val(date) ? -1 : 0),
                    hour
                );
            }
        };
    }
}

module LaterTest_GenerateRecurences {

    export function on_method() {
        // fires on the 2nd minute every hour
        later.parse.recur().on(2).minute();

        // fires every day at 8am and 8pm
        later.parse.recur().on(8, 20).hour();

        // fires every day at 8am
        later.parse.recur().on('08:00:00').time();
    }

    export function first_method() {
        // fires on the 0th minute of every hour
        later.parse.recur().first().minute();
    }

    export function last_method() {
        // fires on the last day of every month at 5am
        later.parse.recur().on(5).hour().last().dayOfMonth();
    }

    export function onWeekend_method() {
        // fires on the 5th minute of every hour during Sat and Sun
        later.parse.recur().on(5).minute().onWeekend();
    }

    export function onWeekday_method() {
        // fires on the 5th minute of every hour during Mon,Tues,Wed,Thur,Fri
        later.parse.recur().on(5).minute().onWeekday();
    }

    export function every_method() {
        // fires on the 0th, 10th, 20th, 30th, 40th, and 50th min of every hour
        later.parse.recur().every(10).minute();

        // fires on first second of Jan, Apr, July, Oct
        later.parse.recur().every(3).month();
    }

    export function after_method() {
        // fires on the 55th, 56th, 57th, 58th, and 59th minute
        later.parse.recur().after(55).minute();

        // fires at 12 noon and 6pm
        later.parse.recur().every(6).hour().after('09:00').time();
    }

    export function before_method() {
        // fires on the first second of January and February
        later.parse.recur().before(3).month();

        // fires at 6am every day
        later.parse.recur().every(6).hour().before('09:00').time();

        // fires between 9am and 6pm every day
        later.parse.recur().after('09:00').time().before('18:00').time();
        later.parse.recur().after(9).hour().before(18).hour();
    }

    export function startingOn_method() {
        // fires on the 10th, 25th, 40th, and 55th minute of every hour
        later.parse.recur().every(15).minute().startingOn(10);
    }

    export function between_method() {
        // fires on the 10th, 25th, 40th minute of every hour
        later.parse.recur().every(15).minute().between(10, 40);
    }

    export function and_method() {
        // fires every 2 hours on the first day of every month
        // and 8:00am and 8:00pm on the last day of every month
        var sched = later.parse.recur()
            .every(2).hour().first().dayOfMonth()
            .and()
            .on(8, 20).hour().last().dayOfMonth()
    }

    export function except_method() {
        // fires every minute of every hour except on multiples of 2 and 3
        var sched = later.parse.recur()
            .every().minute()
            .except()
            .every(2).minute().between(2, 59)
            .and()
            .every(3).minute().between(3, 59);
    }

}

module LaterTest_CalculateOccurences {

    // Initialise next variable.
    var next: Date[] = [];

    // calculate the next 10 occurrences of a recur schedule
    var recurSched = later.parse.recur().last().dayOfMonth();

    next = later.schedule(recurSched).next(10);

    // calculate the previous occurrence starting from March 21, 2013
    var cronSched = later.parse.cron('0 0/5 14,18 * * ?');

    next = later.schedule(cronSched).prev(1, new Date(2013, 2, 21));
}

module LaterTest_ExecuteCodeUsingSchedule {

    // will fire every 5 minutes
    var textSched = later.parse.text('every 5 min');

    // execute logTime one time on the next occurrence of the text schedule
    var timer = later.setTimeout(logTime, textSched);

    // execute logTime for each successive occurrence of the text schedule
    var timer2 = later.setInterval(logTime, textSched);

    // function to execute
    function logTime() {
        console.log(new Date());
    }

    // clear the interval timer when you are done
    timer2.clear();
}