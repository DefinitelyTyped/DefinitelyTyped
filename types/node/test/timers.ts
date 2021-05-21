import { promisify } from 'util';
import * as timers from 'timers';
{
    {
        const immediate = timers
            .setImmediate(() => {
                console.log('immediate');
            })
            .unref()
            .ref();
        const b: boolean = immediate.hasRef();
        timers.clearImmediate(immediate);
    }
    {
        const timeout = timers
            .setInterval(() => {
                console.log('interval');
            }, 20)
            .unref()
            .ref()
            .refresh();
        const b: boolean = timeout.hasRef();
        timers.clearInterval(timeout);
    }
    {
        const timeout = timers
            .setTimeout(() => {
                console.log('timeout');
            }, 20)
            .unref()
            .ref()
            .refresh();
        const b: boolean = timeout.hasRef();
        timers.clearTimeout(timeout);
    }
    async function testPromisify(doSomething: {
        (foo: any, onSuccessCallback: (result: string) => void, onErrorCallback: (reason: any) => void): void;
        [promisify.custom](foo: any): Promise<string>;
    }) {
        const setTimeout = promisify(timers.setTimeout);
        let v: void = await setTimeout(100); // tslint:disable-line no-void-expression void-return
        let s: string = await setTimeout(100, "");

        const setImmediate = promisify(timers.setImmediate);
        v = await setImmediate();
        s = await setImmediate("");

        // $ExpectType (foo: any) => Promise<string>
        const doSomethingPromise = promisify(doSomething);

        // $ExpectType string
        s = await doSomethingPromise('foo');
    }
}

{
    const setTimeout = promisify(timers.setTimeout);

    const ac = new AbortController();

    const signal = ac.signal;
    setTimeout(10, undefined, { signal });
    ac.abort();
}

{
    const setImmediate = promisify(timers.setImmediate);

    const ac = new AbortController();

    const signal = ac.signal;
    setImmediate(10, { signal });
    ac.abort();
}
