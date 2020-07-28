import nodeSchedule = require("node-schedule");

/**
 * Test for {@link Job} class.
 */
function testJob() {
    const name = '';
    const jc: nodeSchedule.JobCallback = null;
    const callback: () => void = null;

    const jobSpec: nodeSchedule.Job = new nodeSchedule.Job(jc);
    const job: nodeSchedule.Job = new nodeSchedule.Job(jc, callback);
    const job2: nodeSchedule.Job = new nodeSchedule.Job(name, jc, callback);

    const jobName: string = job.name;
}

function testTrackInvocation() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const success: boolean = job.trackInvocation(
        new nodeSchedule.Invocation(job, new Date(), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0))
    );
}

function testStopTrackingInvocation() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const success = job.stopTrackingInvocation(
        new nodeSchedule.Invocation(job, new Date(), new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0))
    );
}

function testTriggeredJobs() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const triggeredJobs: number = job.triggeredJobs();
}

function testSetTriggeredJobs() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.setTriggeredJobs(19);
}

function testCancel() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const success: boolean = job.cancel();
    const success2: boolean = job.cancel(true);
}

function testCancelNext() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const success: boolean = job.cancelNext();
    const success2: boolean = job.cancelNext(true);
}

function testReschedule() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const success: boolean = job.reschedule('');
    const success2: boolean = job.reschedule(1234);
    const success3: boolean = job.reschedule(new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0));
}

function testNextInvocation() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const nextInvocation: Date = job.nextInvocation();
}

function testPendingInvocations() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    const pendingInvocations: nodeSchedule.Invocation[] = job.pendingInvocations();
}

function testInvoke() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.invoke();
}

function testRunOnDate() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    job.runOnDate(new Date());
}

function testSchedule() {
    const job: nodeSchedule.Job = new nodeSchedule.Job(() => {});
    let success: boolean = job.schedule(new Date());
    success = job.schedule('');
    success = job.schedule(1234);
}

/**
 * Test for {@link Range} class.
 */
function testRange() {
    const range = new nodeSchedule.Range(0);
    const twoParametersRange: nodeSchedule.Range   = new nodeSchedule.Range(0, 0);
    const threeParametersRange: nodeSchedule.Range = new nodeSchedule.Range(0, 0, 0);

    const contained: boolean = range.contains(0);
}

/**
 * Test for {@link RecurrenceRule} class.
 */
function testRecurrenceRule() {
    const range = new nodeSchedule.Range(0, 0, 0);
    const rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, [0, range], 0, 0, 0);
    const rule2: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);

    const nextInvocation: Date = rule.nextInvocationDate(new Date());

    const rule3: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule();
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
    const job = new nodeSchedule.Job(() => {});
    const fireDate = new Date();
    const rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);

    const invocation = new nodeSchedule.Invocation(job, fireDate, rule);
    invocation.timerID = 0;
}

/**
 * Test for {@link scheduleJob} class.
 */
function testScheduleJob() {
    const callback: nodeSchedule.JobCallback = null;
    const job: nodeSchedule.Job = nodeSchedule.scheduleJob('', callback);

    const rule: nodeSchedule.RecurrenceRule = new nodeSchedule.RecurrenceRule(0, 0, 0, 0, 0, 0, 0);
    const job2: nodeSchedule.Job = nodeSchedule.scheduleJob(rule, callback);

    const date: Date = new Date();
    const job3: nodeSchedule.Job = nodeSchedule.scheduleJob(date, callback);

    const jobObjLit: nodeSchedule.Job = nodeSchedule.scheduleJob({hour: 14, minute: 30, dayOfWeek: 0}, callback);

    const startDate: Date = new Date();
    const endDate: Date = new Date(startDate.getDate() + 10000);
    const jobDateRange: nodeSchedule.Job = nodeSchedule.scheduleJob({start: startDate, end: endDate, rule: "* * * * * *"}, callback);

    const jobTimestamp: nodeSchedule.Job = nodeSchedule.scheduleJob(Date.now() + 1000, callback);
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
    const job = new nodeSchedule.Job(() => {});
    let success: boolean = nodeSchedule.cancelJob(job);

    success = nodeSchedule.cancelJob('jobName');
}
