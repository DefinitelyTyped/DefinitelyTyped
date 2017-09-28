
import cron = require('cron');
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

// Another example with Date
var job = new CronJob(new Date(), () => {
  /* runs once at the specified date. */
  }, () => {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// For good measure
var job = new CronJob({
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
job.start();

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

