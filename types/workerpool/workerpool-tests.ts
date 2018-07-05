import * as wp from 'workerpool';

wp.pool('foo');
wp.pool({minWorkers: 1});
wp.pool({minWorkers: 'max'});
wp.pool({minWorkers: 'max', maxWorkers: 1});
wp.pool({minWorkers: 1, maxWorkers: 1});
wp.pool({maxWorkers: 1});
wp.pool({forkArgs: ['foo', 'bar']});
wp.pool({forkOpts: {cwd: '/tmp'}});
const pool = wp.pool();
pool.clear()
    .then(() => pool.terminate())
    .then(() => pool.clear())
    .then(() => pool.clear(true))
    .then(() => pool.clear(false))
    .then(() => pool.terminate(true))
    .then(() => pool.terminate(false))
    .then(() => pool.terminate(false, 1000));

let x: number = pool.stats().activeTasks;
x = pool.stats().busyWorkers;
x = pool.stats().idleWorkers;
x = pool.stats().pendingTasks;
x = pool.stats().totalWorkers;

pool.terminate().then(() => {});
pool.proxy().then(() => {});
pool.exec('foo', null)
    .then(() => pool.exec('foo', []))
    .then(() => pool.exec(() => {}, null));

new wp.Promise.CancellationError();
new wp.Promise.TimeoutError();
