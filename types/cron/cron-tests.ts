
import cron = require('cron');
import moment = require('moment');

var CronJob = cron.CronJob;
var CronTime = cron.CronTime;

var timeZone = 'America/Los_Angeles';

// Usage (basic cron usage):
new CronJob('* * * * * *', () => {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

// Another cron example
var job = new CronJob('00 30 11 * * 1-5', () => {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// Another example with nullable onComplete
var job = new CronJob('00 30 11 * * 1-5', () => {
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  },
	null,
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// Another example with Date
var job = new CronJob(new Date(), () => {
  /* runs once at the specified date. */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// Another example with Moment
var job = new CronJob(moment(), () => {
  /* runs once at the specified moment. */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// Another example with system commands
var job = new CronJob('00 30 11 * * 1-5', 'ls', { command: 'ls', args: ['./'] },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// For good measure
var job = cron.job({
  cronTime: '00 30 11 * * 1-5',
  onTick: () => {
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
const ld = job.lastDate(); // $ExpectType Date
console.log(ld);
const nd = job.nextDates(); // $ExpectType Moment
console.log(nd);
const nds = job.nextDates(1); // $ExpectType Moment | Moment[]
console.log(nds);// Should be a Moment array
const ru = job.running // $ExpectType boolean
console.log(ru);
job.setTime(new CronTime('00 30 11 * * 1-2'));
job.start();
job.stop();

// How to check if a cron pattern is valid:
try {
  new CronJob('invalid cron pattern', () => {
    console.log('this should not be printed');
  })
} catch(ex) {
  console.log("cron pattern not valid");
}


// Check cronTime fomat
new CronTime('* * * * * *');
new CronTime(new Date());
new CronTime(moment());
