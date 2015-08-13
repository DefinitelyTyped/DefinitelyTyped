/// <reference path="node-schedule.d.ts"/>

import nodeSchedule = require("node-schedule");

/**
 * Test for {@link Job} class.
 */
function testJob() {
    var name: string = '';
    var job: Function = null;
    var callback: Function = null;

    new nodeSchedule.Job(job, callback);
    new nodeSchedule.Job(name, job, callback);
}

/**
 * Test for {@link Range} class.
 */
function testRange() {
    var range = new nodeSchedule.Range(0);
    var twoParametersRange = new nodeSchedule.Range(0, 0);
    var threeParametersRange = new nodeSchedule.Range(0, 0, 0);

    var contained: boolean = range.contains(0);
}

/**
 * Test for {@link RecurrenceRule} class.
 */
function testRecurrenceRule() {
    var range = new nodeSchedule.Range(0, 0, 0);
    var rule: nodeSchedule.RecurrenceRule = {
        date: 0,
        dayOfWeek: [0, range],
        hour: 0,
        minute: 0,
        month: 0,
        second: 0,
        year: 0
    }
}

/**
 * Test for {@link Invocation} class.
 */
function testInvocation() {
    var job = new nodeSchedule.Job();
    var fireDate = new Date();
    var rule: nodeSchedule.RecurrenceRule = {};

    var invocation = new nodeSchedule.Invocation(job, fireDate, rule);
    invocation.timerID = 0;
}

/**
 * Test for {@link ScheduleJob} class.
 */
function testScheduleJob() {
    var callback: Function = null;
    new nodeSchedule.ScheduleJob('', callback);

    var rule: nodeSchedule.RecurrenceRule = {};
    new nodeSchedule.ScheduleJob(rule, callback);

    var date: Date = new Date();
    new nodeSchedule.ScheduleJob(date, callback);

    var date: Date = new Date();
    new nodeSchedule.ScheduleJob(date, callback);
}

/**
 * Test for {@link cancelJob} function.
 */
function testCancelJob() {
    var job = new nodeSchedule.Job();
    nodeSchedule.cancelJob(job);
}
