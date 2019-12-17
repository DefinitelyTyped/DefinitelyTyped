import * as wp from 'workerpool';

wp.pool('foo');
wp.pool({minWorkers: 1});
wp.pool({minWorkers: 'max'});
wp.pool({minWorkers: 'max', maxWorkers: 1});
wp.pool({minWorkers: 1, maxWorkers: 1});
wp.pool({maxWorkers: 1});
wp.pool({nodeWorker: 'process'});
wp.pool({nodeWorker: 'thread'});
wp.pool({nodeWorker: 'auto'});
wp.pool({workerType: 'process'});
wp.pool({workerType: 'thread'});
wp.pool({workerType: 'web'});
wp.pool({workerType: 'auto'});
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

function add(a: number, b: number): number {
    return a + b;
}

function hello(): string {
    return 'hello';
}

pool.exec(add, [1, 2])
    .then((c: number) => c);
pool.exec<typeof add>('add', [1, 2])
    .then((c: number) => c);
pool.exec(hello, [])
    .then((s: string) => s);

const workers = {add, hello};
type IWorkers = typeof workers;
pool.proxy<IWorkers>().then((proxy) => {
    proxy.add(1, 2);
    proxy.hello();
});

pool.proxy().then((proxy) => {
    proxy.add(1, 2);
    proxy.hello();
});

new wp.Promise.CancellationError();
new wp.Promise.TimeoutError();

let promises: wp.Promise<any[]> = wp.Promise.all([
    pool.exec('foo', null),
    pool.exec('foo', null),
    pool.exec('foo', null)
]);
promises = wp.Promise.all([]);
