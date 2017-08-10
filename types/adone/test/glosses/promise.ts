namespace promiseTests {
    const { promise } = adone;

    namespace defer {
        const a = promise.defer();
        a.promise.then((x) => 2);
        a.resolve(2);
        a.reject(3);
        const b = promise.defer<string>();
        b.resolve("3");
        b.reject(2);
        b.promise.then((x: string) => x);
    }

    namespace delay {
        const a: Promise<any> = promise.delay(10);
        const b: Promise<number> = promise.delay(10, 2);
        promise.delay(20, "3").then((x: string) => x);
    }

    namespace timeout {
        promise.timeout(Promise.resolve(2), 100).then((x: number) => x);
    }

    namespace nodeify {
        promise.nodeify(Promise.resolve(2), (err: any, value: number) => value).then((x: number) => x);
        promise.nodeify(Promise.resolve(2), () => 42).then((x: number) => x);
    }

    namespace promisify {
        type Callback<T> = (err?: any, result?: T) => void;
        namespace noargs {
            const f = (cb: Callback<number>) => {
                cb(null, 32);
            };
            promise.promisify(f)().then((x: number) => { });
        }
        namespace nargs1 {
            const f = (a: number, cb: Callback<number>) => {
                cb(null, 32);
            };
            promise.promisify(f)(1).then((x: number) => { });
        }

        namespace nargs2 {
            const f = (a: number, b: string, cb: Callback<number>) => {
                cb(null, 32);
            };
            promise.promisify(f)(1, "1").then((x: number) => { });
        }

        namespace nargs3 {
            const f = (a: number, b: string, c: number, cb: Callback<number>) => {
                cb(null, 32);
            };
            promise.promisify(f)(1, "1", 1).then((x: number) => { });
        }

        namespace nargs4 {
            const f = (a: number, b: string, c: number, d: string, cb: Callback<number>) => {
                cb(null, 32);
            };
            promise.promisify(f)(1, "1", 1, "1").then((x: number) => { });
        }

        namespace nargs5 {
            const f = (a: number, b: string, c: number, d: string, e: number, cb: Callback<number>) => {
                cb(null, 32);
            };
            promise.promisify(f)(1, "1", 1, "1", 1).then((x: number) => { });
        }

        namespace moreargs {
            const f = (a: number, b: string, c: number, d: string, e: number, f: string, cb: Callback<number>) => {
                cb(null, 32);
            };
            promise.promisify(f)(1, 2, 3).then((x) => x);
        }

        namespace options {
            promise.promisify((cb: Callback<number>) => cb(null, 42), {});
            promise.promisify((cb: Callback<number>) => cb(null, 42), { context: {} });
        }
    }

    namespace promisifyAll {
        const a: object = promise.promisifyAll({});
        promise.promisifyAll({}, {});
        promise.promisifyAll({}, { context: {} });
        promise.promisifyAll({}, { filter: () => true });
        promise.promisifyAll({}, { suffix: "Async" });
    }

    namespace _finally {
        promise.finally(Promise.resolve(2), () => 2).then((x: number) => {});
    }
}
