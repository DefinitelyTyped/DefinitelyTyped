import * as async_hooks from 'async_hooks';

{
    const hooks: async_hooks.HookCallbacks = {
        init() {},
        before() {},
        after() {},
        destroy() {},
        promiseResolve() {},
    };

    const asyncHook = async_hooks.createHook(hooks);

    asyncHook.enable().disable().enable();

    const tId: number = async_hooks.triggerAsyncId();
    const eId: number = async_hooks.executionAsyncId();

    class TestResource extends async_hooks.AsyncResource {
        constructor() {
            super('TEST_RESOURCE');
        }
    }

    class AnotherTestResource extends async_hooks.AsyncResource {
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
    new async_hooks.AsyncResource('');
    new async_hooks.AsyncResource('', 0);
    new async_hooks.AsyncResource('', {});
    new async_hooks.AsyncResource('', { triggerAsyncId: 0 });
    new async_hooks.AsyncResource('', {
      triggerAsyncId: 0,
      requireManualDestroy: true
    });
}
