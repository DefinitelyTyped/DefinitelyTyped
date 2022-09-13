import { registerWaiter, registerHelper, registerAsyncHelper } from '@ember/test';
import TestAdapter from '@ember/test/adapter';

const pending = 0;
registerWaiter(() => pending !== 0);

declare const MyDb: {
    hasPendingTransactions(): boolean;
};

registerWaiter(MyDb, MyDb.hasPendingTransactions);
// @ts-expect-error
registerWaiter();

registerHelper('boot', app => {
    app.advanceReadiness(); // $ExpectType void
    app.deferReadiness(); // $ExpectType void
    app.register('foo', class {}); // $ExpectType void
    // @ts-expect-error
    app.register('foo');
    // @ts-expect-error
    app.register();
});

registerAsyncHelper('boot', app => {
    app.advanceReadiness();
    app.deferReadiness();
    app.register('foo', class {});
});

registerAsyncHelper('waitForPromise', (app, promise) => {
    app.advanceReadiness();
    app.deferReadiness();
    app.register('foo', class {});
    return new Promise(() => {
        const adapter = new TestAdapter();
        adapter.asyncStart();
        return promise.then(() => {
            adapter.asyncEnd();
        });
    });
});
