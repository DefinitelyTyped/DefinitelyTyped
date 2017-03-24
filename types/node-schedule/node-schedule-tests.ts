import nodeSchedule = require("node-schedule");

/**
 * Test for {@link Job} class.
 */
function testJob() {
    var name:string = '';
    var jc:nodeSchedule.JobCallback = null;
    var callback: Function = null;

    var jobSpec:nodeSchedule.Job = new nodeSchedule.Job(jc);
    var job:nodeSchedule.Job = new nodeSchedule.Job(jc, callback);
    var job:nodeSchedule.Job = new nodeSchedule.Job(name, jc, callback);

    var jobName:string = job.name;
}

function testTrackInvocation() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var success:boolean = job.trackInvocation(
        new nodeSchedule.Invocation(job, new Date(), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0))
    );
}

function testStopTrackingInvocation() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var success = job.stopTrackingInvocation(
        new nodeSchedule.Invocation(job, new Date(), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0))
    );
}

function testTriggeredJobs() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var triggeredJobs:number = job.triggeredJobs();
}

function testSetTriggeredJobs() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.setTriggeredJobs(19);
}

function testCancel() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var success:boolean = job.cancel();
    var success:boolean = job.cancel(true);
}

function testCancelNext() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var success:boolean = job.cancelNext();
    var success:boolean = job.cancelNext(true);
}

function testReschedule() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var success:boolean = job.reschedule('');
    var success:boolean = job.reschedule(1234);
    var success:boolean = job.reschedule(new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0));
}

function testNextInvocation() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var nextInvocation:Date = job.nextInvocation();
}

function testPendingInvocations() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var pendingInvocations:nodeSchedule.Invocation[] = job.pendingInvocations();
}

function testInvoke() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.invoke();
}

function testRunOnDate() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.runOnDate(new Date());
}

function testSchedule() {
    var job:nodeSchedule.Job = new nodeSchedule.Job(() => {});
    var success:boolean = job.schedule(new Date());
    success = job.schedule('');
    success = job.schedule(1234);
}

/**
 * Test for {@link Range} class.
 */
function testRange() {
    var range = new nodeSchedule.Range(0);
    var twoParametersRange:nodeSchedule.Range   = new nodeSchedule.Range(0, 0);
    var threeParametersRange:nodeSchedule.Range = new nodeSchedule.Range(0, 0, 0);

    var contained:boolean = range.contains(0);
}

/**
 * Test for {@link RecurrenceRule} class.
 */
function testRecurrenceRule() {
    var range = new nodeSchedule.Range(0, 0, 0);
    var rule:nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, [0, range], 0, 0, 0);
    var rule:nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);

    var nextInvocation:Date = rule.nextInvocationDate(new Date());

    var rule2 = new nodeSchedule.RecurrenceRule();
    rule2.month = "7";
    rule2.date = [1, new nodeSchedule.Range(5, 15, 5), "23"];
    rule2.hour = 5;
    rule2.minute = new nodeSchedule.Range(4, 6);
    rule2.second = new nodeSchedule.Range(8, 12, 2);
}

/**
 * Test for {@link Invocation} class.
 */
function testInvocation() {
    var job = new nodeSchedule.Job(() => {});
    var fireDate = new Date();
    var rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);

    var invocation = new nodeSchedule.Invocation(job, fireDate, rule);
    invocation.timerID = 0;
}

/**
 * Test for {@link scheduleJob} class.
 */
function testScheduleJob() {
    var callback: nodeSchedule.JobCallback = null;
    var job:nodeSchedule.Job = nodeSchedule.scheduleJob('', callback);

    var rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);
    var job:nodeSchedule.Job = nodeSchedule.scheduleJob(rule, callback);

    var date: Date = new Date();
    var job:nodeSchedule.Job = nodeSchedule.scheduleJob(date, callback);
}

function testRescheduleJob() {
    var job:nodeSchedule.Job = nodeSchedule.rescheduleJob(new nodeSchedule.Job(() => {}), new Date());
    job = nodeSchedule.rescheduleJob(new nodeSchedule.Job(() => {}), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0));
    job = nodeSchedule.rescheduleJob(new nodeSchedule.Job(() => {}), '');
    job = nodeSchedule.rescheduleJob('', '');
}

/**
 * Test for {@link cancelJob} function.
 */
function testCancelJob() {
    var job = new nodeSchedule.Job(() => {});
    var success:boolean = nodeSchedule.cancelJob(job);

    success = nodeSchedule.cancelJob('jobName');
}
