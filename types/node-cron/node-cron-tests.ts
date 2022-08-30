/// <reference types="node" />

import cron = require('node-cron');

const log = console.log;

cron.schedule('* * * * *', now => {
    log('running a task every minute');
    if (now.getTime() === Date.now()) {
        log('task ran at the predicted time');
    } else {
        log('Task ran with a delay');
    }
});

cron.schedule('1-5 * * * *', () => {
    log('running every minute to 1 from 5');
});

const task = cron.schedule(
    '* * * * *',
    () => {
        log('immediately started');
        // because of manual call start method
    },
    { scheduled: false },
);

task.start();

const task1 = cron.schedule('* * * * *', () => {
    log('will execute every minute until stopped');
});

task1.start();

const task2 = cron.schedule('* * * * *', () => {
    log('will execute every minute until stopped');
});

task2.stop();

const valid = cron.validate('59 * * * *');
const invalid = cron.validate('60 * * * *');

if (valid && !invalid) {
    log('validator works');
}

// check timezones are accepted from the string literal
const task4 = cron.schedule(
    '* * * * *',
    () => {
        log('will execute every minute until stopped');
    },
    { timezone: 'Europe/London' },
);

task4.stop();

const task5 = cron.schedule('* * * * * *', () => {
    log('will execute every second until stopped');
});

task5.on('task-done', () => {
    log('Task has been completed');
    task5.stop();
});
