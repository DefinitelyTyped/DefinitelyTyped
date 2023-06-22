import { Future, Scheduler } from 'posterus';
import { fiber } from 'posterus/fiber';

const anyFuture = new Future();
anyFuture.settle(undefined, 10);
anyFuture.settle(undefined, 'foo');
// @ts-expect-error
anyFuture.settle('not an Error');

const future = new Future<string>();
future.settle(undefined, 'result');
// @ts-expect-error
future.settle(undefined, 10);

const undefinedResult = Future.fromResult();

const futureString = future.mapResult<string>(() => 'result');

// @ts-expect-error
const futureWrongType = future.mapResult<string>(() => 9000);

function* generatorTask() {
    yield Promise.resolve();
    return Promise.resolve(10);
}
const task = fiber(generatorTask())
    .mapResult(res => 11)
    .finally(() => ({}));

Future.scheduler.asap(() => {});
const scheduler = new Scheduler();
scheduler.tick();
scheduler.deinit();
