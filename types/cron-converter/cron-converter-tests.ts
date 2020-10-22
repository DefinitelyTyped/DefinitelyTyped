import * as moment from 'moment';
import * as Cron from 'cron-converter';

let cronInstance = new Cron(); // $ExpectedType Cron

// Based on examples of README

const a = cronInstance.fromString('*/10 9-17 1 * *'); // $ExpectedType Cron
a.toString(); // $ExpectedType string
a.toArray(); // $ExpectedType Cron.CronArray

cronInstance.fromArray([[0], [1], [1], [5], [0, 2, 4, 6]]); // $ExpectedType Cron

const c = cronInstance.fromString('*/5 * * * *');
c.schedule(); // $ExpectedType Cron.Seeker
c.schedule(moment([2013, 2, 8, 9, 32])); // $ExpectedType Cron.Seeker

const d = c.schedule(new Date(2013, 2, 8, 9, 32)); // $ExpectedType Cron.Seeker
d.next(); // $ExpectedType moment.Moment
d.prev(); // $ExpectedType moment.Moment
d.reset(); // $ExpectedType void

const cronOptions: Cron.Options = {
    outputHashes: true,
    outputMonthNames: true,
    outputWeekdayNames: true,
    timezone: 'Europe/London',
}; // $ExpectedType Cron.Options

cronInstance = new Cron(cronOptions); // $ExpectedType Cron
