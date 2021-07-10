// taken from bree docs

import Bree = require('bree');

import path = require('path');

const fn = () => {};

const bree = new Bree({
  logger: console,

  jobs: [
    // runs `./jobs/foo.js` on start
    'foo',

    // run fn function on start
    fn,

    // runs `./jobs/foo-bar.js` on start
    {
      name: 'foo-bar'
    },

    // runs `./jobs/some-other-path.js` on start
    {
      name: 'beep',
      path: path.join(__dirname, 'jobs', 'some-other-path')
    },

    // runs `./jobs/worker-1.js` on the last day of the month
    {
      name: 'worker-1',
      interval: 'on the last day of the month'
    },

    // runs `./jobs/worker-2.js` every other day
    {
      name: 'worker-2',
      interval: 'every 2 days'
    },

    // runs `./jobs/worker-3.js` at 10:15am and 5:15pm every day except on Tuesday
    {
      name: 'worker-3',
      interval: 'at 10:15 am also at 5:15pm except on Tuesday'
    },

    // runs `./jobs/worker-4.js` at 10:15am every weekday
    {
      name: 'worker-4',
      cron: '15 10 ? * *'
    },

    // runs `./jobs/worker-5.js` on after 10 minutes have elapsed
    {
      name: 'worker-5',
      timeout: '10m'
    },

    // runs `./jobs/worker-6.js` after 1 minute and every 5 minutes thereafter
    {
      name: 'worker-6',
      timeout: '1m',
      interval: '5m'
      // this is unnecessary but shows you can pass a Number (ms)
      // interval: ms('5m')
    },

    // runs `./jobs/worker-7.js` after 3 days and 4 hours
    {
      name: 'worker-7',
      // this example uses `human-interval` parsing
      timeout: '3 days and 4 hours'
    },

    // runs `./jobs/worker-8.js` at midnight (once)
    {
      name: 'worker-8',
      timeout: 'at 12:00 am'
    },

    // runs `./jobs/worker-9.js` every day at midnight
    {
      name: 'worker-9',
      interval: 'at 12:00 am'
    },

    // runs `./jobs/worker-10.js` at midnight on the 1st of every month
    {
      name: 'worker-10',
      cron: '0 0 1 * *'
    },

    // runs `./jobs/worker-11.js` at midnight on the last day of month
    {
      name: 'worker-11',
      cron: '0 0 L * *'
    },

    // runs `./jobs/worker-12.js` at a specific Date (e.g. in 3 days)
    {
      name: 'worker-12',
      date: new Date()
    },

    // runs `./jobs/worker-13.js` on start and every 2 minutes
    {
      name: 'worker-13',
      interval: '2m'
    },

    // runs `./jobs/worker-14.js` on start with custom `new Worker` options (see below)
    {
      name: 'worker-14',
      // <https://nodejs.org/api/worker_threads.html#worker_threads_new_worker_filename_options>
      worker: {
        workerData: {
          foo: 'bar',
          beep: 'boop'
        }
      }
    },

    // runs `./jobs/worker-15.js` **NOT** on start, but every 2 minutes
    {
      name: 'worker-15',
      timeout: false, // <-- specify `false` here to prevent default timeout (e.g. on start)
      interval: '2m'
    },

    // runs `./jobs/worker-16.js` on January 1st, 2022
    // and at midnight on the 1st of every month thereafter
    {
      name: 'worker-16',
      date: new Date(),
      cron: '0 0 1 * *'
    }
  ]
});
// start only a specific job:
bree.start('foo');

// stop all jobs
bree.stop();

// stop only a specific job:
bree.stop('beep');

// run all jobs (this does not abide by timeout/interval/cron and spawns workers immediately)
bree.run();

// run a specific job (...)
bree.run('beep');

// add a job array after initialization:
bree.add(['boop']);
// this must then be started using one of the above methods

// add a job after initialization:
bree.add('boop');
// this must then be started using one of the above methods

bree.add(fn);

// remove a job after initialization:
bree.remove('boop');
