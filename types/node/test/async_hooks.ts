import { AsyncResource, createHook, triggerAsyncId, executionAsyncId, executionAsyncResource, HookCallbacks, AsyncLocalStorage } from 'async_hooks';

{
    const hooks: HookCallbacks = {
        init() {},
        before() {},
        after() {},
        destroy() {},
        promiseResolve() {},
    };

    const asyncHook = createHook(hooks);

    asyncHook.enable().disable().enable();

    const tId: number = triggerAsyncId();
    const eId: number = executionAsyncId();
    const curRes: object = executionAsyncResource();

    class TestResource extends AsyncResource {
        constructor() {
            super('TEST_RESOURCE');
        }
    }

    class AnotherTestResource extends AsyncResource {
        constructor() {
            super('TEST_RESOURCE', 42);
            const aId: number = this.asyncId();
            const tId: number = this.triggerAsyncId();
        }
        run() {
            this.runInAsyncScope(() => {});
            this.runInAsyncScope(Array.prototype.find, [], () => true);
        }
        destroy() {
            this.emitDestroy();
        }
    }

    // check AsyncResource constructor options.
    new AsyncResource('');
    new AsyncResource('', 0);
    new AsyncResource('', {});
    new AsyncResource('', { triggerAsyncId: 0 });
    new AsyncResource('', {
      triggerAsyncId: 0,
      requireManualDestroy: true
    });
}

{
    const ctx = new AsyncLocalStorage<string>();
    ctx.disable();
    ctx.exit((a: number) => {
        // noop?
    }, 1);
    const esRet: number = ctx.exitSyncAndReturn((a: number) => {
        return 123;
    }, 1);
    ctx.run('test', (a: number) => {
        const store: string | undefined = ctx.getStore();
    }, 1);
    const rsSet = ctx.runSyncAndReturn('test', (a: number) => {
        return 123;
    }, 1);
    ctx.enterWith('test');
}
