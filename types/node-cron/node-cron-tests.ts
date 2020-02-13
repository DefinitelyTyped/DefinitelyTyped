/// <reference types="node" />

import cron = require('node-cron');

// tslint:disable-next-line no-console
const log = console.log;

cron.schedule('* * * * *', () => {
    log('running a task every minute');
});

cron.schedule('1-5 * * * *', () => {
    log('running every minute to 1 from 5');
});

// tslint:disable-next-line rule
const task = cron.schedule('* * * * *', () => {
    log('immediately started');
    // because of manual call start method
}, { scheduled: false });

task.start();

const task1 = cron.schedule('* * * * *', () => {
    log('will execute every minute until stopped');
});

task1.start();

const task2 = cron.schedule('* * * * *', () => {
    log('will execute every minute until stopped');
});

task2.stop();

const task3 = cron.schedule('* * * * *', () => {
    log('will execute every minute until stopped');
});

task3.destroy();

const valid = cron.validate('59 * * * *');
const invalid = cron.validate('60 * * * *');

if (valid && !invalid) {
    log('validator works');
}

// check timezones are accepted from the string literal
const task4 = cron.schedule('* * * * *', () => {
    log('will execute every minute until stopped');
}, { timezone: 'Europe/London' });

task4.destroy();

const task5 = cron.schedule('* * * * *', () => {
    log('will execute every minute until stopped');
});

if (task5.getStatus() === 'scheduled') {
    task5.destroy();
}

if (task5.getStatus() === 'destroyed') {
    log('Task5 is destroyed!');
}
