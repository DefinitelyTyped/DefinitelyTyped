/// <reference types="node" />
import * as newrelic from 'newrelic';

newrelic.setTransactionName('foo'); // $ExpectType void

const trans = newrelic.getTransaction();
trans.ignore(); // $ExpectType void
trans.end(); // $ExpectType void
trans.end(() => {}); // $ExpectType void
const payload = trans.createDistributedTracePayload(); // $ExpectType DistributedTracePayload
trans.acceptDistributedTracePayload(payload); // $ExpectType void
trans.insertDistributedTraceHeaders({ test: "test" }); // $ExpectType void
trans.acceptDistributedTraceHeaders("Test", { test: "test" }); // $ExpectType void
trans.isSampled(); // $ExpectType boolean

newrelic.setDispatcher('foo'); // $ExpectType void
newrelic.setDispatcher('foo', '42'); // $ExpectType void

newrelic.setControllerName('foo', 'GET'); // $ExpectType void

newrelic.addCustomAttribute('foo', 'bar'); // $ExpectType void
newrelic.addCustomAttribute('foo', 42); // $ExpectType void
newrelic.addCustomAttributes({ foo: 'bar', baz: 'bang' }); // $ExpectType void
newrelic.addCustomAttributes({ foo: 'bar', baz: 42 }); // $ExpectType void

newrelic.setIgnoreTransaction(true); // $ExpectType void

newrelic.noticeError(Error('Oh no!')); // $ExpectType void
newrelic.noticeError(Error('Oh no!'), { foo: 'bar' }); // $ExpectType void
newrelic.noticeError(Error('Oh no!'), { foo: 42 }); // $ExpectType void
newrelic.noticeError(Error('Oh no!'), { foo: true }); // $ExpectType void

newrelic.addNamingRule('/user/customers/all/.*', '/user/customers/all'); // $ExpectType void
newrelic.addNamingRule(/\/user\/customers\/.*/, '/user/customers/:customer'); // $ExpectType void

newrelic.addIgnoringRule('^/items/[0-9]+$'); // $ExpectType void
newrelic.addIgnoringRule(/^[0-9]+$/); // $ExpectType void

newrelic.getBrowserTimingHeader(); // $ExpectType string

newrelic.startSegment('foo', false, () => 'bar'); // $ExpectType string
newrelic.startSegment('foo', false, () => 'bar', () => 'baz'); // $ExpectType string
newrelic.startSegment('foo', false, Promise.all([5, 7])).then(([a, b]: [number, number]) => {
    console.log(a, b);
});

const wrappedFn = newrelic.createTracer('foo', (x: number) => {
    return x * x;
});
const wrappedResult: number = wrappedFn(42);

newrelic.startWebTransaction('/some/url/path', () => {
    const transaction = newrelic.getTransaction();
    setTimeout(() => {
        // do some work
        transaction.end();
    }, 100);
});

newrelic.startWebTransaction('/some/url/path', Promise.resolve(7)); // $ExpectType Promise<number>

newrelic.startBackgroundTransaction('Red October', foo => foo); // $ExpectType any
newrelic.startBackgroundTransaction('Red October', () => 7); // $ExpectType number
newrelic.startBackgroundTransaction('Red October', Promise.resolve(7)); // $ExpectType Promise<number>
newrelic.startBackgroundTransaction('Red October', 'Subs', () => {
    const transaction = newrelic.getTransaction();
    setTimeout(() => {
        // do some work
        transaction.end();
    }, 100);
});

newrelic.endTransaction(); // $ExpectType void

newrelic.recordMetric('foo', 42); // $ExpectType void
newrelic.recordMetric('foo', {
    count: 10,
    total: 42,
    min: 1,
    max: 17,
    sumOfSquares: 60,
});

newrelic.incrementMetric('foo'); // $ExpectType void
newrelic.incrementMetric('foo', 42); // $ExpectType void

newrelic.recordCustomEvent('my_event', {
    foo: true,
    bar: 42,
    baz: "don't panic",
});

newrelic.instrument('foo', () => {}); // $ExpectType void
newrelic.instrumentDatastore('foo', () => {}, (err: Error) => {});
newrelic.instrumentLoadedModule('foo', () => {}); // $ExpectType boolean
newrelic.instrumentWebframework({
    moduleName: 'foo',
    onRequire: () => {},
});
newrelic.instrumentMessages({
    moduleName: 'foo',
    onRequire: () => {},
    onError: err => {
        const error: Error = err;
    },
});

newrelic.shutdown(); // $ExpectType void
newrelic.shutdown({ collectPendingData: true });
newrelic.shutdown({ timeout: 3000 });
newrelic.shutdown({ collectPendingData: true, timeout: 3000 });
newrelic.shutdown({ collectPendingData: true, timeout: 3000 }, err => {
    const error: Error | undefined = err;
});
newrelic.shutdown({ collectPendingData: true, timeout: 3000, waitForIdle: true });
newrelic.shutdown({ collectPendingData: true, timeout: 3000, waitForIdle: true }, err => {
    const error: Error | undefined = err;
});
newrelic.shutdown(err => {
    const error: Error | undefined = err;
});

newrelic.getLinkingMetadata();
newrelic.getLinkingMetadata(true);
newrelic.getTraceMetadata();

newrelic.setLambdaHandler(() => void 0); // $ExpectType () => undefined
newrelic.setLambdaHandler((event: unknown, context: unknown) => ({ statusCode: 200, body: "Hello!" })); // $ExpectType (event: unknown, context: unknown) => { statusCode: number; body: string; }
newrelic.setLambdaHandler({some: "object"}); // $ExpectError
