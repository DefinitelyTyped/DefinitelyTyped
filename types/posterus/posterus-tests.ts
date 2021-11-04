import { Future, Scheduler } from 'posterus';
import { fiber } from 'posterus/fiber';

const anyFuture = new Future();
anyFuture.settle(undefined, 10);
anyFuture.settle(undefined, 'foo');
anyFuture.settle('not an Error'); // $ExpectError

const future = new Future<string>();
future.settle(undefined, 'result');
future.settle(undefined, 10); // $ExpectError

const undefinedResult = Future.fromResult();

const futureString = future.mapResult<string>(() => 'result');

const futureWrongType = future.mapResult<string>(() => 9000); // $ExpectError

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
