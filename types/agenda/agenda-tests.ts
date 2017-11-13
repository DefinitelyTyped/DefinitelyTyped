import * as Agenda from "agenda";

var mongoConnectionString = "mongodb://127.0.0.1/agenda";

var agenda = new Agenda({ db: { address: mongoConnectionString } });


agenda.define('delete old users', (job, done) => {

});

agenda.on('ready', () => {
    agenda.every('3 minutes', 'delete old users');

    // Alternatively, you could also do:
    agenda.every('*/3 * * * *', 'delete old users');

    agenda.start();
});

agenda.define('send email report', { priority: 'high', concurrency: 10 }, (job, done) => {
});

agenda.on('ready', () => {
    agenda.schedule('in 20 minutes', 'send email report', { to: 'admin@example.com' });
    agenda.start();
});

agenda.on('ready', () => {
    var weeklyReport = agenda.create('send email report', { to: 'another-guy@example.com' });
    weeklyReport.repeatEvery('1 week').save();
    agenda.start();
});

var agenda = new Agenda({ processEvery: '30 seconds' });

agenda.defaultConcurrency(5);

var agenda = new Agenda({ defaultConcurrency: 5 });

agenda.lockLimit(0);

var agenda = new Agenda({ lockLimit: 0 });

agenda.defaultLockLimit(0);

var agenda = new Agenda({ defaultLockLimit: 0 });

agenda.defaultLockLifetime(10000);

var agenda = new Agenda({ defaultLockLifetime: 10000 });

agenda.define('some long running job', function(job, done) {
    done();
});

agenda.every('15 minutes', ['printAnalyticsReport', 'sendNotifications', 'updateUserRecords']);

agenda.schedule('tomorrow at noon', 'printAnalyticsReport', { userCount: 100 });

agenda.schedule('tomorrow at noon', ['printAnalyticsReport', 'sendNotifications', 'updateUserRecords']);

agenda.now('do the hokey pokey');

var job = agenda.create('printAnalyticsReport', { userCount: 100 });
job.save(function(err) {
    console.log("Job successfully saved");
});

agenda.jobs({ name: 'printAnalyticsReport' }, function(err, jobs) {
    // Work with jobs (see below)
});

agenda.cancel({ name: 'printAnalyticsReport' }, function(err, numRemoved) {
});

agenda.purge(function(err, numRemoved) {
});

agenda.stop(function() {
    process.exit(0);
});

job.agenda.now('do the hokey pokey');

job.repeatEvery('10 minutes');

job.repeatAt('3:30pm');

job.schedule('tomorrow at 6pm');

job.priority('low');
job.priority(10);

job.unique({ 'data.type': 'active', 'data.userId': '123' });
job.fail('insuficient disk space');
job.fail(new Error('insufficient disk space'));
job.run(function(err, job) {
    console.log("I don't know why you would need to do this...");
});
job.remove(function(err) {
    if (!err) console.log("Successfully removed job from collection");
})


