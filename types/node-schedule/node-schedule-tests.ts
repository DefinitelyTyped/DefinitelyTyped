import nodeSchedule = require("node-schedule");

/**
 * Test for {@link Job} class.
 */
function testJob() {
    let name: string = '';
    let jc: nodeSchedule.JobCallback = null;
    let callback: () => void = null;

    let jobSpec: nodeSchedule.Job = new nodeSchedule.Job(jc);
    let job: nodeSchedule.Job = new nodeSchedule.Job(jc, callback);
    let job2: nodeSchedule.Job = new nodeSchedule.Job(name, jc, callback);

    let jobName: string = job.name;
}

function testTrackInvocation() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let success: boolean = job.trackInvocation(
        new nodeSchedule.Invocation(job, new Date(), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0))
    );
}

function testStopTrackingInvocation() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let success = job.stopTrackingInvocation(
        new nodeSchedule.Invocation(job, new Date(), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0))
    );
}

function testTriggeredJobs() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let triggeredJobs: number = job.triggeredJobs();
}

function testSetTriggeredJobs() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.setTriggeredJobs(19);
}

function testCancel() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let success: boolean = job.cancel();
    let success2: boolean = job.cancel(true);
}

function testCancelNext() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let success: boolean = job.cancelNext();
    let success2: boolean = job.cancelNext(true);
}

function testReschedule() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let success: boolean = job.reschedule('');
    let success2: boolean = job.reschedule(1234);
    let success3: boolean = job.reschedule(new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0));
}

function testNextInvocation() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let nextInvocation: Date = job.nextInvocation();
}

function testPendingInvocations() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let pendingInvocations: nodeSchedule.Invocation[] = job.pendingInvocations();
}

function testInvoke() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.invoke();
}

function testRunOnDate() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.runOnDate(new Date());
}

function testSchedule() {
    let job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let success: boolean = job.schedule(new Date());
    success = job.schedule('');
    success = job.schedule(1234);
}

/**
 * Test for {@link Range} class.
 */
function testRange() {
    let range = new nodeSchedule.Range(0);
    let twoParametersRange: nodeSchedule.Range   = new nodeSchedule.Range(0, 0);
    let threeParametersRange: nodeSchedule.Range = new nodeSchedule.Range(0, 0, 0);

    let contained: boolean = range.contains(0);
}

/**
 * Test for {@link RecurrenceRule} class.
 */
function testRecurrenceRule() {
    let range = new nodeSchedule.Range(0, 0, 0);
    let rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, [0, range], 0, 0, 0);
    let rule2: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);

    let nextInvocation: Date = rule.nextInvocationDate(new Date());

    let rule3: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule();
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
    let job = new nodeSchedule.Job(() => {});
    let fireDate = new Date();
    let rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);

    let invocation = new nodeSchedule.Invocation(job, fireDate, rule);
    invocation.timerID = 0;
}

/**
 * Test for {@link scheduleJob} class.
 */
function testScheduleJob() {
    let callback: nodeSchedule.JobCallback = null;
    let job: nodeSchedule.Job = nodeSchedule.scheduleJob('', callback);

    let rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);
    let job2: nodeSchedule.Job = nodeSchedule.scheduleJob(rule, callback);

    let date: Date = new Date();
    let job3: nodeSchedule.Job = nodeSchedule.scheduleJob(date, callback);

    let jobObjLit: nodeSchedule.Job = nodeSchedule.scheduleJob({hour: 14, minute: 30, dayOfWeek: 0}, callback);

    let startDate: Date = new Date();
    let endDate: Date = new Date(startDate.getDate() + 10000);
    let jobDateRange: nodeSchedule.Job = nodeSchedule.scheduleJob({start: startDate, end: endDate, rule: "* * * * * *"}, callback);
}

function testRescheduleJob() {
    let job: nodeSchedule.Job = nodeSchedule.rescheduleJob(new nodeSchedule.Job(() => {}), new Date());
    job = nodeSchedule.rescheduleJob(new nodeSchedule.Job(() => {}), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0));
    job = nodeSchedule.rescheduleJob(new nodeSchedule.Job(() => {}), '');
    job = nodeSchedule.rescheduleJob('', '');
}

/**
 * Test for {@link cancelJob} function.
 */
function testCancelJob() {
    let job = new nodeSchedule.Job(() => {});
    let success: boolean = nodeSchedule.cancelJob(job);

    success = nodeSchedule.cancelJob('jobName');
}
