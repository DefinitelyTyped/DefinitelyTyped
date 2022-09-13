import RSVP, { all, race, resolve, Promise as RPromise, EventTarget as REventTarget } from 'rsvp';

/** Static assertion that `value` has type `T` */
declare function assertType<T>(value: T): void;

let rsvpPromise: RPromise<number[]> = RSVP.resolve([1, 2, 3]);
// @ts-expect-error
rsvpPromise = Promise.resolve([1, 2, 3]) as PromiseLike<number[]>;

new RPromise<number>((res, rej) => {
    res(3); // $ExpectType void
    rej('oops'); // $ExpectType void
});

const et = REventTarget.mixin({});
type etType = keyof typeof et; // $ExpectType "on" | "off" | "trigger" || keyof ObjectWithEventMixins
et.on('error', handler => {}); // $ExpectType void
et.off('error', handler => {}); // $ExpectType void
et.trigger('error'); // $ExpectType void
// @ts-expect-error
et.trigger('error', '12', 34);

async function testAsyncAwait() {
    const awaitedNothing = await RSVP.resolve();
    const awaitedValue = await RSVP.resolve('just a value');

    async function returnsAPromise(): RSVP.Promise<string> {
        return RSVP.resolve('look, a string');
    }

    assertType<RSVP.Promise<string>>(returnsAPromise());
    assertType<string>(await returnsAPromise());
}

function testCast() {
    RSVP.Promise.cast('foo').then(value => {
        assertType<string>(value);
    });

    RSVP.cast(42).then(value => {
        assertType<number>(value);
    });
}

function testConfigure() {
    assertType<void>(RSVP.configure('name', { with: 'some value' }));
    assertType<{}>(RSVP.configure('name'));
}

function testAsap() {
    const result = RSVP.asap(something => {
        console.log(something);
    }, 'srsly');

    assertType<void>(result);
}

function testAsync() {
    const result = RSVP.async(something => {
        console.log(something);
    }, 'rly srsly');

    assertType<void>(result);
}

function testPromise() {
    const promiseOfString = new RSVP.Promise((resolve: any, reject: any) => resolve('some string'));
    assertType<RSVP.Promise<number>>(promiseOfString.then((s: string) => s.length));
}

function testPromiseWithLabel() {
    new RSVP.Promise((resolve: any, reject: any) => resolve('foo'), 'my promise');
}

function testAll() {
    const imported = all([]);
    const empty = RSVP.Promise.all([]);

    const everyPromise = RSVP.all(['string', RSVP.resolve(42), RSVP.resolve({ hash: 'with values' })]);

    assertType<RSVP.Promise<[string, number, { hash: string }]>>(everyPromise);

    const anyFailure = RSVP.all([12, 'strings', RSVP.reject('anywhere')]);
    assertType<RSVP.Promise<{}>>(anyFailure);

    let promise1 = RSVP.resolve(1);
    let promise2 = RSVP.resolve('2');
    let promise3 = RSVP.resolve({ key: 13 });
    RSVP.Promise.all([promise1, promise2, promise3], 'my label').then(function(array) {
        assertType<number>(array[0]);
        assertType<string>(array[1]);
        assertType<{ key: number }>(array[2]);
    });
}

function testAllSettled() {
    const resolved1 = RSVP.resolve(1);
    const resolved2 = RSVP.resolve('wat');
    const rejected = RSVP.reject(new Error('oh teh noes'));
    const pending = new RSVP.Promise<{ neato: string }>((resolve, reject) => {
        if ('something') {
            resolve({ neato: 'yay' });
        } else {
            reject('nay');
        }
    });

    // Types flow into resolution properly
    RSVP.allSettled([resolved1, resolved2, rejected, pending]).then(states => {
        assertType<RSVP.PromiseState<number>>(states[0]);
        assertType<RSVP.PromiseState<string>>(states[1]);
        assertType<RSVP.PromiseState<never>>(states[2]);
        assertType<RSVP.PromiseState<{ neato: string }>>(states[3]);
    });

    // Switching on state gives the correctly available items.
    RSVP.allSettled([resolved1, resolved2, rejected, pending]).then(states => {
        states.forEach(element => {
            switch (element.state) {
                case RSVP.State.fulfilled:
                    assertType<RSVP.Resolved<typeof element.value>>(element);
                    break;

                case RSVP.State.rejected:
                    assertType<RSVP.Rejected<typeof element.reason>>(element);
                    break;

                case RSVP.State.pending:
                    assertType<RSVP.Pending>(element);
                    break;

                default:
                    // Someday maybe TS will have exhaustiveness checks.
                    break;
            }
        });
    });
}

function testDefer() {
    let deferred = RSVP.defer<string>();
    deferred.resolve('Success!');
    deferred.promise.then(function(value) {
        assertType<string>(value);
    });
}

// Using this to differentiate the types cleanly
type A1 = Array<{ arg: boolean }>;
type D1 = number;
type D2 = string;
type D3 = { some: boolean };

declare const nodeFn1Arg1CbParam: (arg1: A1, callback: (err: any, data: D1) => void) => void;
declare const nodeFn1Arg2CbParam: (arg1: A1, callback: (err: any, data1: D1, data2: D2) => void) => void;
declare const nodeFn1Arg3CbParam: (arg1: A1, callback: (err: any, data1: D1, data2: D2, data3: D3) => void) => void;

function testDenodeify() {
    // version with no `options` or `options: false`, and single T
    assertType<(value: A1) => RSVP.Promise<D1>>(RSVP.denodeify(nodeFn1Arg1CbParam));
    assertType<(value: A1) => RSVP.Promise<D1>>(RSVP.denodeify(nodeFn1Arg1CbParam, false));

    // version with no `options` or `options: false`, and multiple T
    assertType<(value: A1) => RSVP.Promise<D1>>(RSVP.denodeify(nodeFn1Arg2CbParam));
    assertType<(value: A1) => RSVP.Promise<D1>>(RSVP.denodeify(nodeFn1Arg3CbParam));
    assertType<(value: A1) => RSVP.Promise<D1>>(RSVP.denodeify(nodeFn1Arg2CbParam, false));
    assertType<(value: A1) => RSVP.Promise<D1>>(RSVP.denodeify(nodeFn1Arg3CbParam, false));

    // version with `options: true` and single or multiple T
    assertType<(value: A1) => RSVP.Promise<[D1]>>(RSVP.denodeify(nodeFn1Arg1CbParam, true));
    assertType<(value: A1) => RSVP.Promise<[D1, D2]>>(RSVP.denodeify(nodeFn1Arg2CbParam, true));
    assertType<(value: A1) => RSVP.Promise<[D1, D2, D3]>>(RSVP.denodeify(nodeFn1Arg3CbParam, true));

    // We can't actually map the key names here, because we would need full-on
    // dependent typing to use the *values of an array* as the keys of the
    // resulting object.
    assertType<(value: A1) => RSVP.Promise<{ first: D1 }>>(RSVP.denodeify(nodeFn1Arg1CbParam, ['first']));
    assertType<(value: A1) => RSVP.Promise<{ first: D1; second: D2 }>>(
        RSVP.denodeify(nodeFn1Arg2CbParam, ['first', 'second'])
    );
    assertType<(value: A1) => RSVP.Promise<{ first: D1; second: D2; third: D3 }>>(
        RSVP.denodeify(nodeFn1Arg3CbParam, ['first', 'second', 'third'])
    );

    const foo = RSVP.denodeify(nodeFn1Arg2CbParam, ['quux', 'baz']);
    foo([{ arg: true }]).then(value => {
        console.log(value.quux + 1);
        console.log(value.baz.length);
    });
}

function testFilter() {
    RSVP.filter([RSVP.resolve(1), RSVP.resolve(2)], item => item > 1, 'over one').then(results => {
        assertType<number[]>(results);
    });

    RSVP.filter(
        [RSVP.resolve('a string'), RSVP.resolve(112233)],
        item => String(item).length < 10,
        'short string'
    ).then(results => {
        assertType<Array<string | number>>(results);
    });

    // This is the best we can do: we can't actually write the full type here,
    // which would be `assertType<never>(results)`, but TS can't infer that.
    const isString = (item: any): item is string => typeof item === 'string';
    RSVP.filter([RSVP.reject('for any reason')], isString).then(results => {
        assertType<{}>(results);
    });
}

function testHash() {
    let promises = {
        myPromise: RSVP.resolve(1),
        yourPromise: RSVP.resolve('2'),
        theirPromise: RSVP.resolve({ key: 3 }),
        notAPromise: 4,
    };
    RSVP.hash(promises, 'my label').then(function(hash) {
        assertType<number>(hash.myPromise);
        assertType<string>(hash.yourPromise);
        assertType<{ key: number }>(hash.theirPromise);
        assertType<number>(hash.notAPromise);
    });
}

function testHashSettled() {
    function isFulfilled<T>(state: RSVP.PromiseState<T>): state is RSVP.Resolved<T> {
        return state.state === RSVP.State.fulfilled;
    }
    let promises = {
        myPromise: RSVP.Promise.resolve(1),
        yourPromise: RSVP.Promise.resolve('2'),
        theirPromise: RSVP.Promise.resolve({ key: 3 }),
        notAPromise: 4,
    };
    RSVP.hashSettled(promises).then(function(hash) {
        if (isFulfilled(hash.myPromise)) {
            assertType<number>(hash.myPromise.value);
        }
        if (isFulfilled(hash.yourPromise)) {
            assertType<string>(hash.yourPromise.value);
        }
        if (isFulfilled(hash.theirPromise)) {
            assertType<{ key: number }>(hash.theirPromise.value);
        }
        if (isFulfilled(hash.notAPromise)) {
            assertType<number>(hash.notAPromise.value);
        }
    });
}

function testMap() {
    RSVP.map([RSVP.resolve(1), RSVP.resolve(2)], item => item + 1, 'add one').then(results => {
        assertType<number[]>(results);
        assertType<{ length: 2 }>(results);
    });

    RSVP.map([RSVP.resolve('a string'), RSVP.resolve(112233)], String).then(results => {
        assertType<string[]>(results);
        assertType<{ length: 2 }>(results);
    });

    // This is the best we can do: we can't actually write the full type here,
    // which would be `assertType<never>(results)`, but TS can't infer that.
    RSVP.map([RSVP.reject('for any reason')], String).then(results => {
        assertType<{}>(results);
    });
}

function testRace() {
    const imported = race([]);
    const firstPromise = RSVP.race([{ notAPromise: true }, RSVP.resolve({ some: 'value' })]);
    assertType<RSVP.Promise<{ notAPromise: boolean } | { some: string }>>(firstPromise);

    let promise1 = RSVP.resolve(1);
    let promise2 = RSVP.resolve('2');
    RSVP.Promise.race([promise1, promise2], 'my label').then(function(result) {
        assertType<string | number>(result);
    });
}

function testReject() {
    assertType<RSVP.Promise<never>>(RSVP.reject());
    assertType<RSVP.Promise<never>>(RSVP.reject('this is a string'));

    RSVP.reject({ ok: false }).catch(reason => {
        console.log(`${reason} could be anything`);
    });
    RSVP.reject({ ok: false }, 'some label').catch((reason: any) => reason.ok);

    let promise = RSVP.Promise.reject(new Error('WHOOPS'));
}

function testResolve() {
    assertType<RSVP.Promise<void>>(RSVP.resolve());
    assertType<RSVP.Promise<string>>(RSVP.resolve('this is a string'));
    assertType<RSVP.Promise<string>>(RSVP.resolve(RSVP.resolve('nested')));
    assertType<RSVP.Promise<string>>(RSVP.resolve(Promise.resolve('nested')));

    let promise = RSVP.Promise.resolve(1);
    let imported = resolve(1);
}

function testRethrow() {
    RSVP.reject(new Error('all the badness'))
        .catch(RSVP.rethrow)
        .then(value => {
            assertType<void>(value);
        })
        .catch(reason => {
            if (reason instanceof Error) {
                console.log(reason);
            }
        });
}

function testOnAndOff() {
    RSVP.on('error', (reason: Error) => {
        console.log(`it was an error: ${reason}`);
    });

    RSVP.off('whatever', (value: any) => {
        console.log(
            `any old value will do: ${value !== undefined && value !== null ? value.toString() : 'even undefined'}`
        );
    });
}

function testAssignableToPromise() {
    const promise: Promise<number> = RSVP.resolve(0);
}
