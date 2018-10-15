import Agenda = require("agenda");
import { Db, Server, MongoClient } from "mongodb";

var mongoConnectionString = "mongodb://127.0.0.1/agenda";

(async () => {
    var agenda = new Agenda({ db: { address: mongoConnectionString } });
    var agenda = new Agenda({
        mongo: (await MongoClient.connect(mongoConnectionString)).db(),
        db: { collection: 'agenda-jobs' },
    });

    agenda.define<{ foo: Error }>('delete old users', (job, done) => {
        done(job.attrs.data.foo)
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

    agenda.define('some long running job', function (job, done) {
        done();
    });

    agenda.every('15 minutes', ['printAnalyticsReport', 'sendNotifications', 'updateUserRecords']);

    agenda.schedule('tomorrow at noon', 'printAnalyticsReport', { userCount: 100 });

    agenda.schedule('tomorrow at noon', ['printAnalyticsReport', 'sendNotifications', 'updateUserRecords']);

    agenda.now('do the hokey pokey');

    var job = agenda.create<{ userCount: number }>('printAnalyticsReport', { userCount: 100 });
    await job.save();

    const jobs = await agenda.jobs({ name: 'printAnalyticsReport' });
    jobs.forEach((job) => {
        job.save();
    });

    let numRemoved = await agenda.cancel({ name: 'printAnalyticsReport' });

    numRemoved = await agenda.purge();

    await agenda.stop();

    await job.agenda.now('do the hokey pokey');

    job.repeatEvery('10 minutes');

    job.repeatEvery('10 minutes', { timezone: 'America/New_York' });

    job.repeatEvery('10 minutes', { skipImmediate: true });

    job.repeatAt('3:30pm');

    job.schedule('tomorrow at 6pm');

    job.priority('low');
    job.priority(10);

    job.unique({ 'data.type': 'active', 'data.userId': '123' });
    job.fail('insuficient disk space');
    job.fail(new Error('insufficient disk space'));
    const job2 = await job.run();
    await job.remove();
});

class ExtendedAgenda extends Agenda {
    async start() { }
}

const extendedAgenda: ExtendedAgenda = new ExtendedAgenda()
    .mongo(new Db('some-database', new Server('host.name', 0)))
