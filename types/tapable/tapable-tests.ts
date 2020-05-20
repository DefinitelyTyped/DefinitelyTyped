import {
    Tapable,
    MultiHook,
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} from "tapable";

class DllPlugin {
    apply(compiler: Compiler) {
        compiler.plugin('doSomething', function (...args: string[]) {
            console.log(args);
        });

        compiler.plugin(['doSomething', 'doNothing'], function (...args: string[]) {
            console.log(args);
        });
    }
}

class Compiler extends Tapable {
    constructor() {
        super()
    }
}

const compiler = new Compiler();

let callback: Tapable.CallbackFunction = function () {

};

compiler.apply(new DllPlugin());

compiler.applyPlugins('doSomething', 'a', 'b');
compiler.applyPlugins0('doSomething');
compiler.applyPlugins1('doSomething', 'a');
compiler.applyPlugins2('doSomething', 'a', 'b');
compiler.applyPluginsWaterfall('doSomething', 'a', 'b');
compiler.applyPluginsWaterfall0('doSomething', 'a');
compiler.applyPluginsBailResult('doSomething', 'a', 'b');
compiler.applyPluginsBailResult1('doSomething', ['a', 'b']);
compiler.applyPluginsAsync('doSomething', 'a', 'b');
compiler.applyPluginsAsyncSeries('doSomething', 'a', 'b');
compiler.applyPluginsAsyncSeries1('doSomething', 'a', callback);
compiler.applyPluginsAsyncSeriesBailResult('doSomething', 'a', 'b');
compiler.applyPluginsAsyncSeriesBailResult1('doSomething', 'a', callback);
compiler.applyPluginsAsyncWaterfall('doSomething', 'a', callback);
compiler.applyPluginsParallel('doSomething', 'a', 'b');
compiler.applyPluginsParallelBailResult('doSomething', 'a', 'b');
compiler.applyPluginsParallelBailResult1('doSomething', 'a', callback);

const multi = new MultiHook([new SyncHook(['hi'])]);

const isNumber = (val: number) => val;
const isAny = (val: { a: { n: { y: '!' } } }) => val;
const isUndefined = (val: undefined) => val;
const isBoolean = (val: boolean) => val;

// Without generics
(() => {
    const hooks = {
        syncHook: new SyncHook(['arg1']),
        syncBailHook: new SyncBailHook(['arg1']),
        syncWaterfallHook: new SyncWaterfallHook(['arg1']),
        syncLoopHook: new SyncLoopHook(['arg1']),
        asyncParallelHook: new AsyncParallelHook(['arg1']),
        asyncParallelBailHook: new AsyncParallelBailHook(['arg1']),
        asyncSeriesHook: new AsyncSeriesHook(['arg1']),
        asyncSeriesBailHook: new AsyncSeriesBailHook(['arg1']),
        asyncSeriesWaterfallHook: new AsyncSeriesWaterfallHook(['arg1']),
    }

    // Without generics we won't get any information
    // for the tap interface:
    hooks.syncHook.tap('AHook', () => ('ReturnValue'));
    hooks.syncBailHook.tap('AHook', () => ('ReturnValue'));
    hooks.syncWaterfallHook.tap('AHook', () => ('ReturnValue'));
    hooks.asyncParallelHook.tapPromise('AHook', async () => ('ReturnValue'));
    hooks.asyncParallelBailHook.tapPromise('AHook', async () => ('ReturnValue'));
    hooks.asyncSeriesHook.tapPromise('AHook', async () => ('ReturnValue'));
    hooks.asyncSeriesBailHook.tapPromise('AHook', async () => ('ReturnValue'));
    hooks.asyncSeriesWaterfallHook.tapPromise('AHook', async () => ('ReturnValue'));

    async function getHookResults() {
        return {
            syncHook: hooks.syncHook.call({ name: 'sue', age: 34 }),
            syncBailHook: hooks.syncBailHook.call({ name: 'sue', age: 34 }),
            syncWaterfallHook: hooks.syncWaterfallHook.call({ name: 'sue', age: 34 }),
            syncLoopHook: hooks.syncLoopHook.call({ name: 'sue', age: 34 }),
            asyncParallelHook: await hooks.asyncParallelHook.promise({ name: 'sue', age: 34 }),
            asyncParallelBailHook: await hooks.asyncParallelBailHook.promise({ name: 'sue', age: 34 }),
            asyncSeriesHook: await hooks.asyncSeriesHook.promise({ name: 'sue', age: 34 }),
            asyncSeriesBailHook: await hooks.asyncSeriesBailHook.promise({ name: 'sue', age: 34 }),
            asyncSeriesWaterfallHook: await hooks.asyncSeriesWaterfallHook.promise({ name: 'sue', age: 34 }),
        }
    }

    getHookResults().then((result) => {
        // Always undefined:
        console.log(isUndefined(result.syncHook));
        console.log(isUndefined(result.asyncSeriesHook));
        console.log(isUndefined(result.asyncParallelHook));
        // Possible undefined:
        console.log(isAny(result.syncBailHook!));
        console.log(isAny(result.asyncParallelHook!));
        console.log(isAny(result.syncBailHook!));
        console.log(isAny(result.asyncParallelHook!));
        console.log(isAny(result.asyncSeriesHook!));
        console.log(isAny(result.asyncSeriesBailHook!));
        // Always defined:
        console.log(isNumber(result.syncWaterfallHook.age));
        console.log(isNumber(result.asyncSeriesWaterfallHook.age));
        console.log(isBoolean(hooks.syncHook.isUsed()));
        console.log(isBoolean(hooks.asyncSeriesHook.isUsed()));
        console.log(isBoolean(hooks.asyncParallelHook.isUsed()));
        console.log(isBoolean(hooks.syncBailHook.isUsed()));
        console.log(isBoolean(hooks.asyncSeriesBailHook.isUsed()));
        console.log(isBoolean(hooks.syncWaterfallHook.isUsed()));
        console.log(isBoolean(hooks.asyncSeriesWaterfallHook.isUsed()));
    });
})();

// With generics
(() => {
    type Person = { name: string, age: number };
    const hooks = {
        syncHook: new SyncHook<Person, undefined, undefined>(['arg1']),
        syncBailHook: new SyncBailHook<Person, undefined, undefined, number>(['arg1']),
        syncWaterfallHook: new SyncWaterfallHook<Person, undefined, undefined>(['arg1']),
        syncLoopHook: new SyncLoopHook<Person, undefined, undefined>(['arg1']),
        asyncParallelHook: new AsyncParallelHook<Person, undefined, undefined>(['arg1']),
        asyncParallelBailHook: new AsyncParallelBailHook<Person, undefined, undefined, number>(['arg1']),
        asyncSeriesHook: new AsyncSeriesHook<Person, undefined, undefined>(['arg1']),
        asyncSeriesBailHook: new AsyncSeriesBailHook<Person, undefined, undefined, number>(['arg1']),
        asyncSeriesWaterfallHook: new AsyncSeriesWaterfallHook<Person, undefined, undefined>(['arg1']),
    }

    // Without generics we will get information
    hooks.syncHook.tap('AHook', () => ('Any Return Value'));
    hooks.syncBailHook.tap('AHook', (person) => person.age);
    hooks.syncWaterfallHook.tap('AHook', (person) => ({ name: 'sue', age: person.age + 1 }));
    hooks.asyncParallelHook.tapPromise('AHook', async () => ('ReturnValue'));
    hooks.asyncParallelBailHook.tapPromise('AHook', async (person) => person.age);
    hooks.asyncSeriesHook.tapPromise('AHook', async () => ('ReturnValue'));
    hooks.asyncSeriesBailHook.tapPromise('AHook', async (person) => person.age);
    hooks.asyncSeriesWaterfallHook.tapPromise('AHook', async (person) => ({ name: 'sue', age: person.age + 1 }));

    async function getHookResults() {
        return {
            syncHook: hooks.syncHook.call({ name: 'sue', age: 34 }),
            syncBailHook: hooks.syncBailHook.call({ name: 'sue', age: 34 }),
            syncWaterfallHook: hooks.syncWaterfallHook.call({ name: 'sue', age: 34 }),
            syncLoopHook: hooks.syncLoopHook.call({ name: 'sue', age: 34 }),
            asyncParallelHook: await hooks.asyncParallelHook.promise({ name: 'sue', age: 34 }),
            asyncParallelBailHook: await hooks.asyncParallelBailHook.promise({ name: 'sue', age: 34 }),
            asyncSeriesHook: await hooks.asyncSeriesHook.promise({ name: 'sue', age: 34 }),
            asyncSeriesBailHook: await hooks.asyncSeriesBailHook.promise({ name: 'sue', age: 34 }),
            asyncSeriesWaterfallHook: await hooks.asyncSeriesWaterfallHook.promise({ name: 'sue', age: 34 }),
        }
    }

    getHookResults().then((result) => {
        // Allways undefined:
        console.log(isUndefined(result.syncHook));
        console.log(isUndefined(result.asyncSeriesHook));
        console.log(isUndefined(result.asyncParallelHook));
        // Possible undefined:
        console.log(isNumber(result.syncBailHook!));
        console.log(isNumber(result.asyncParallelHook!));
        console.log(isNumber(result.syncBailHook!));
        console.log(isNumber(result.asyncParallelHook!));
        console.log(isNumber(result.asyncSeriesHook!));
        console.log(isNumber(result.asyncSeriesBailHook!));
        // Allways defined:
        console.log(isNumber(result.syncWaterfallHook.age));
        console.log(isNumber(result.asyncSeriesWaterfallHook.age));
        console.log(isBoolean(hooks.syncHook.isUsed()));
        console.log(isBoolean(hooks.asyncSeriesHook.isUsed()));
        console.log(isBoolean(hooks.asyncParallelHook.isUsed()));
        console.log(isBoolean(hooks.syncBailHook.isUsed()));
        console.log(isBoolean(hooks.asyncSeriesBailHook.isUsed()));
        console.log(isBoolean(hooks.syncWaterfallHook.isUsed()));
        console.log(isBoolean(hooks.asyncSeriesWaterfallHook.isUsed()));
    });
})();
