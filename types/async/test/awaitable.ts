/// <reference types="node" />

// Taken from https://github.com/caolan/async/blob/a626baa3e0de24d5c88b9cf319553ef700df85b8/test/es2017/awaitableFunctions.js
// Havily modified to allow TypeScript compilation.

import async = require('async');

declare function it(name: string, value: any): void;

declare function expect(value: any): any;

async function asyncIdentity<T>(val: T) {
    const res = await Promise.resolve(val);
    return res;
}

const input: number[] = [1, 2, 3];
const inputObj = { a: 1, b: 2, c: 3 };

it('should throw as expected (async)', async () => {
    let thrown;
    try {
        await async.each(input, async val => {
            throw new Error(val.toString());
        });
    } catch (e) {
        thrown = e;
    }
    expect(thrown).to.be.an('error');
});

it('should throw as expected (callback)', async () => {
    let thrown;
    await async
        .each(input, val => {
            throw new Error(val.toString());
        })
        .catch(e => {
            thrown = e;
        });
    expect(thrown).to.be.an('error');
});

it('should throw as expected (callback, try/catch)', async () => {
    let thrown: Error | undefined;
    try {
        await async.each(input, (val, cb) => {
            cb(new Error(val.toString()));
        });
    } catch (e) {
        thrown = e;
    }
    expect(thrown).to.be.an('error');
});

/*
 * Collections
 */

it('should return a Promise: each', async () => {
    expect(async.each.name).to.contain('each');
    const calls: number[] = [];
    await async.each(input, async val => {
        calls.push(val);
    });
    expect(calls).to.eql([1, 2, 3]);
    expect(async.each(input, asyncIdentity) instanceof Promise).to.equal(true);
});
it('should return a Promise: eachSeries', async () => {
    expect(async.eachSeries.name).to.contain('eachSeries');
    const calls: number[] = [];
    await async.eachSeries(input, async val => {
        calls.push(val);
    });
    expect(calls).to.eql([1, 2, 3]);
});
it('should return a Promise: eachLimit', async () => {
    expect(async.eachLimit.name).to.contain('eachLimit');
    const calls: number[] = [];
    await async.eachLimit(input, 1, async val => {
        calls.push(val);
    });
    expect(calls).to.eql([1, 2, 3]);
});

it('should return a Promise: eachOf', async () => {
    expect(async.eachOf.name).to.contain('eachOf');
    const calls: Array<[number, string | number, any]> = [];
    await async.eachOf(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1, 'a'], [2, 'b'], [3, 'c']]);
});
it('should return a Promise: eachOfSeries', async () => {
    expect(async.eachOfSeries.name).to.contain('eachOfSeries');
    const calls: Array<[number, string | number, any]> = [];
    await async.eachOfSeries(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1, 'a'], [2, 'b'], [3, 'c']]);
});
it('should return a Promise: eachOfLimit', async () => {
    expect(async.eachOfLimit.name).to.contain('eachOfLimit');
    const calls: Array<[number, string | number, any]> = [];
    await async.eachOfLimit(inputObj, 1, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1, 'a'], [2, 'b'], [3, 'c']]);
});

it('should return a Promise: concat', async () => {
    expect(async.concat.name).to.contain('concat');
    const calls: Array<[number, any]> = [];
    await async.concat(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: concatSeries', async () => {
    expect(async.concatSeries.name).to.contain('concatSeries');
    const calls: Array<[number, any]> = [];
    await async.concatSeries(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: concatLimit', async () => {
    expect(async.concatLimit.name).to.contain('concatLimit');
    const calls: Array<[number, any]> = [];
    await async.concatLimit(inputObj, 1, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: detect', async () => {
    expect(async.detect.name).to.contain('detect');
    const calls: Array<[number, any]> = [];
    await async.detect(input, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: detectSeries', async () => {
    expect(async.detectSeries.name).to.contain('detectSeries');
    const calls: Array<[number, any]> = [];
    await async.detectSeries(input, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: detectLimit', async () => {
    expect(async.detectLimit.name).to.contain('detectLimit');
    const calls: Array<[number, any]> = [];
    await async.detectLimit(input, 1, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: every', async () => {
    expect(async.every.name).to.contain('every');
    const calls: Array<[number, any]> = [];
    await async.every(input, async (...args) => {
        calls.push(args);
        return args[0] !== 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: everySeries', async () => {
    expect(async.everySeries.name).to.contain('everySeries');
    const calls: Array<[number, any]> = [];
    await async.everySeries(input, async (...args) => {
        calls.push(args);
        return args[0] !== 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: everyLimit', async () => {
    expect(async.everyLimit.name).to.contain('everyLimit');
    const calls: Array<[number, any]> = [];
    await async.everyLimit(input, 1, async (...args) => {
        calls.push(args);
        return args[0] !== 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: filter', async () => {
    expect(async.filter.name).to.contain('filter');
    const calls: Array<[number, any]> = [];
    await async.filter(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: filterSeries', async () => {
    expect(async.filterSeries.name).to.contain('filterSeries');
    const calls: Array<[number, any]> = [];
    await async.filterSeries(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: filterLimit', async () => {
    expect(async.filterLimit.name).to.contain('filterLimit');
    const calls: Array<[number, any]> = [];
    await async.filterLimit(inputObj, 1, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: groupBy', async () => {
    expect(async.groupBy.name).to.contain('groupBy');
    const calls: Array<[number, any]> = [];
    await async.groupBy(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: groupBySeries', async () => {
    expect(async.groupBySeries.name).to.contain('groupBySeries');
    const calls: Array<[number, any]> = [];
    await async.groupBySeries(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: groupByLimit', async () => {
    expect(async.groupByLimit.name).to.contain('groupByLimit');
    const calls: Array<[number, any]> = [];
    await async.groupByLimit(inputObj, 1, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: map', async () => {
    expect(async.map.name).to.contain('map');
    const calls: Array<[number, any]> = [];
    await async.map(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: mapSeries', async () => {
    expect(async.mapSeries.name).to.contain('mapSeries');
    const calls: Array<[number, any]> = [];
    await async.mapSeries(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: mapLimit', async () => {
    expect(async.mapLimit.name).to.contain('mapLimit');
    const calls: Array<[number, any]> = [];
    await async.mapLimit(inputObj, 1, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: mapValues', async () => {
    expect(async.mapValues.name).to.contain('mapValues');
    const calls: Array<[number, string, any]> = [];
    await async.mapValues(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1, 'a'], [2, 'b'], [3, 'c']]);
});
it('should return a Promise: mapValuesSeries', async () => {
    expect(async.mapValuesSeries.name).to.contain('mapValuesSeries');
    const calls: Array<[number, string, any]> = [];
    await async.mapValuesSeries(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1, 'a'], [2, 'b'], [3, 'c']]);
});
it('should return a Promise: mapValuesLimit', async () => {
    expect(async.mapValuesLimit.name).to.contain('mapValuesLimit');
    const calls: Array<[number, string, any]> = [];
    await async.mapValuesLimit(inputObj, 1, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1, 'a'], [2, 'b'], [3, 'c']]);
});

it('should return a Promise: reduce', async () => {
    expect(async.reduce.name).to.contain('reduce');
    const calls: Array<[number, number, any]> = [];
    await async.reduce(input, 1, async (...args) => calls.push(args));
    expect(calls).to.eql([[1, 1], [1, 2], [2, 3]]);
});
it('should return a Promise: reduceRight', async () => {
    expect(async.reduceRight.name).to.contain('reduceRight');
    const calls: Array<[number, number, any]> = [];
    await async.reduceRight(input, 1, async (...args) => calls.push(args));
    expect(calls).to.eql([[1, 3], [1, 2], [2, 1]]);
});

it('should return a Promise: reject', async () => {
    expect(async.reject.name).to.contain('reject');
    const calls: Array<[number, any]> = [];
    await async.reject(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: rejectSeries', async () => {
    expect(async.rejectSeries.name).to.contain('rejectSeries');
    const calls: Array<[number, any]> = [];
    await async.rejectSeries(inputObj, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: rejectLimit', async () => {
    expect(async.rejectLimit.name).to.contain('rejectLimit');
    const calls: Array<[number, any]> = [];
    await async.rejectLimit(inputObj, 1, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: some', async () => {
    expect(async.some.name).to.contain('some');
    const calls: Array<[number, any]> = [];
    await async.some(input, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: someSeries', async () => {
    expect(async.someSeries.name).to.contain('someSeries');
    const calls: Array<[number, any]> = [];
    await async.someSeries(input, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});
it('should return a Promise: someLimit', async () => {
    expect(async.someLimit.name).to.contain('someLimit');
    const calls: Array<[number, any]> = [];
    await async.someLimit(input, 1, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: sortBy', async () => {
    expect(async.sortBy.name).to.contain('sortBy');
    const calls: Array<[number, any]> = [];
    await async.sortBy(input, async (...args) => {
        calls.push(args);
    });
    expect(calls).to.eql([[1], [2], [3]]);
});

it('should return a Promise: times', async () => {
    expect(async.times.name).to.contain('times');
    const calls: Array<[number, any]> = [];
    await async.times(3, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[0], [1], [2]]);
});
it('should return a Promise: timesSeries', async () => {
    expect(async.timesSeries.name).to.contain('timesSeries');
    const calls: Array<[number, any]> = [];
    await async.timesSeries(3, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[0], [1], [2]]);
});
it('should return a Promise: timesLimit', async () => {
    expect(async.timesLimit.name).to.contain('timesLimit');
    const calls: Array<[number, any]> = [];
    await async.timesLimit(3, 1, async (...args) => {
        calls.push(args);
        return args[0] === 3;
    });
    expect(calls).to.eql([[0], [1], [2]]);
});

it('should return a Promise: transform', async () => {
    expect(async.transform.name).to.contain('transform');
    const calls: Array<[number, number, string, any]> = [];
    await async.transform(inputObj, 1, async (...args) => calls.push(args));
    expect(calls).to.eql([[1, 1, 'a'], [1, 2, 'b'], [1, 3, 'c']]);
});
it('should return a Promise: transform (2 args)', async () => {
    expect(async.transform.name).to.contain('transform');
    const calls: Array<[object, number, string, any]> = [];
    await async.transform(inputObj, async (...args) => calls.push(args));
    expect(calls).to.eql([[{}, 1, 'a'], [{}, 2, 'b'], [{}, 3, 'c']]);
});

/*
 * Control flow
 */

it('should return a Promise: applyEach', async () => {
    const calls: number[] = [];
    await async.applyEach(
        [
            async (v: number, x: number) => {
                calls.push(v, x);
            },
            async (v: number, x: number) => {
                calls.push(v, x);
            }
        ],
        5,
        6
    )();
    expect(calls).to.eql([5, 6, 5, 6]);
});
it('should return a Promise: applyEachSeries', async () => {
    const calls: number[] = [];
    await async.applyEachSeries(
        [
            async (v: number, x: number) => {
                calls.push(v, x);
            },
            async (v: number, x: number) => {
                calls.push(v, x);
            }
        ],
        5,
        6
    )();
    expect(calls).to.eql([5, 6, 5, 6]);
});

it('should return a Promise: auto', async () => {
    expect(async.auto.name).to.contain('auto');
    const calls: string[] = [];
    await async.auto({
        async a() {
            calls.push('a');
            return Promise.resolve('a');
        },
        b: ['a', 'c', async () => calls.push('b')],
        async c() {
            await Promise.resolve();
            calls.push('c');
            return Promise.resolve('c');
        }
    });
    expect(calls).to.eql(['a', 'c', 'b']);
});
it('should return a Promise: autoInject', async () => {
    expect(async.autoInject.name).to.contain('autoInject');
    const calls: string[] = [];
    await async.autoInject({
        async a() {
            calls.push('a');
            return 'a';
        },
        async b(a: string, c: string) {
            calls.push('b');
            calls.push(a, c);
        },
        async c() {
            calls.push('c');
            return 'c';
        }
    });
    expect(calls).to.eql(['a', 'c', 'b', 'a', 'c']);
});

it('should return a Promise: compose', async () => {
    expect(async.compose.name).to.contain('compose');
    const calls: Array<(string | any[])> = [];
    const fn = async.compose(
        async (...args: any[]) => calls.push('a', args),
        async (...args: any[]) => calls.push('b', args)
    );
    const result = await fn(1, 2);
    expect(calls).to.eql(['b', [1, 2], 'a', [2]]);
    expect(result).to.eql(4);
});
it('should return a Promise: seq', async () => {
    expect(async.seq.name).to.contain('seq');
    const calls: Array<(string | any[])> = [];
    const fn = async.seq(
        async (...args: any[]) => calls.push('a', args),
        async (...args: any[]) => calls.push('b', args)
    );
    const result = await fn(1, 2);
    expect(calls).to.eql(['a', [1, 2], 'b', [2]]);
    expect(result).to.eql(4);
});

it('should return a Promise: whilst', async () => {
    expect(async.whilst.name).to.contain('whilst');
    const calls: Array<(string | number)> = [];
    let counter = 0;
    await async.whilst(
        async () => {
            calls.push('test', counter);
            return counter < 5;
        },
        async () => {
            calls.push('fn');
            counter++;
        }
    );
    expect(calls).to.eql([
        'test',
        0,
        'fn',
        'test',
        1,
        'fn',
        'test',
        2,
        'fn',
        'test',
        3,
        'fn',
        'test',
        4,
        'fn',
        'test',
        5
    ]);
});
it('should return a Promise: until', async () => {
    expect(async.until.name).to.contain('until');
    const calls: Array<(string | number)> = [];
    let counter = 0;
    await async.until(
        async () => {
            calls.push('test', counter);
            return counter === 5;
        },
        async () => {
            calls.push('fn');
            counter++;
        }
    );
    expect(calls).to.eql([
        'test',
        0,
        'fn',
        'test',
        1,
        'fn',
        'test',
        2,
        'fn',
        'test',
        3,
        'fn',
        'test',
        4,
        'fn',
        'test',
        5
    ]);
});
it('should return a Promise: doWhilst', async () => {
    expect(async.doWhilst.name).to.contain('doWhilst');
    const calls: Array<(string | number)> = [];
    let counter = 0;
    await async.doWhilst(
        async () => {
            calls.push('fn');
            counter++;
        },
        async () => {
            calls.push('test', counter);
            return counter < 5;
        }
    );
    expect(calls).to.eql([
        'fn',
        'test',
        1,
        'fn',
        'test',
        2,
        'fn',
        'test',
        3,
        'fn',
        'test',
        4,
        'fn',
        'test',
        5
    ]);
});
it('should return a Promise: doUntil', async () => {
    expect(async.doUntil.name).to.contain('doUntil');
    const calls: Array<(string | number)> = [];
    let counter = 0;
    await async.doUntil(
        async () => {
            calls.push('fn');
            counter++;
        },
        async () => {
            calls.push('test', counter);
            return counter === 5;
        }
    );
    expect(calls).to.eql([
        'fn',
        'test',
        1,
        'fn',
        'test',
        2,
        'fn',
        'test',
        3,
        'fn',
        'test',
        4,
        'fn',
        'test',
        5
    ]);
});

it('should return a Promise: forever', async () => {
    expect(async.forever.name).to.contain('forever');
    const calls: number[] = [];
    let err: Error | undefined;
    let counter = 0;
    try {
        await async.forever(async () => {
            calls.push(counter);
            counter++;
            await Promise.resolve();
            if (counter === 5) throw new Error();
        });
    } catch (e) {
        err = e;
    }
    expect(calls).to.eql([0, 1, 2, 3, 4]);
    expect(err).to.be.an('error');
});

it('should return a Promise: parallel', async () => {
    expect(async.parallel.name).to.contain('parallel');
    const calls: number[] = [];
    await async.parallel([
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        }
    ]);
    expect(calls).to.eql([1, 1, 1, 1]);
});
it('should return a Promise: parallelLimit', async () => {
    expect(async.parallelLimit.name).to.contain('parallelLimit');
    const calls: number[] = [];
    await async.parallelLimit(
        [
            async () => {
                await Promise.resolve();
                calls.push(1);
            },
            async () => {
                await Promise.resolve();
                calls.push(1);
            },
            async () => {
                await Promise.resolve();
                calls.push(1);
            },
            async () => {
                await Promise.resolve();
                calls.push(1);
            }
        ],
        2
    );
    expect(calls).to.eql([1, 1, 1, 1]);
});
it('should return a Promise: series', async () => {
    expect(async.series.name).to.contain('series');
    const calls: number[] = [];
    await async.series([
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        }
    ]);
    expect(calls).to.eql([1, 1, 1, 1]);
});

it('should return a Promise: race', async () => {
    expect(async.race.name).to.contain('race');
    const calls: number[] = [];
    await async.race([
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(1);
        }
    ]);
    expect(calls).to.eql([1, 1, 1, 1]);
});

it('should return a Promise: retryable', async () => {
    expect(async.retryable.name).to.contain('retryable');
    let counter = 0;
    const calls: number[] = [];
    async.retryable((a: any, b: any, callback: () => void) => { });
    const fn = async.retryable(async (a: number, b: number) => {
        calls.push(a, b);
        counter++;
        if (counter < 3) throw new Error();
    });
    const promise = fn(1, 2);
    expect(promise.then).to.be.a('function');
    await promise;
    expect(calls).to.eql([1, 2, 1, 2, 1, 2]);
});
it('should return a Promise: retryable (arity 0)', async () => {
    expect(async.retryable.name).to.contain('retryable');
    let counter = 0;
    const calls: number[] = [];
    const fn = async.retryable({ times: 5 }, async () => {
        calls.push(0);
        counter++;
        if (counter < 3) throw new Error();
    });
    await fn();
    expect(calls).to.eql([0, 0, 0]);
});

it('should return a Promise: retry', async () => {
    expect(async.retry.name).to.contain('retry');
    let counter = 0;
    const calls: number[] = [];
    await async.retry(async () => {
        calls.push(counter);
        counter++;
        if (counter < 3) throw new Error();
    });
    expect(calls).to.eql([0, 1, 2]);
});

it('should return a Promise: retry (multiple cb args)', async () => {
    expect(async.retry.name).to.contain('retry');
    let counter = 0;
    const results = await async.retry(cb => {
        counter++;
        if (counter < 3)
            return cb(new Error());
        cb(null, 0, 1, 2);
    });
    expect(results).to.eql([0, 1, 2]);
});

it('should return a Promise: tryEach', async () => {
    expect(async.tryEach.name).to.contain('tryEach');
    const calls: number[] = [];
    await async.tryEach([
        async () => {
            await Promise.resolve();
            calls.push(1);
            throw new Error();
        },
        async () => {
            await Promise.resolve();
            calls.push(2);
            throw new Error();
        },
        async () => {
            await Promise.resolve();
            calls.push(3);
        },
        async () => {
            await Promise.resolve();
            calls.push(4);
        }
    ]);
    expect(calls).to.eql([1, 2, 3]);
});

it('should return a Promise: waterfall', async () => {
    expect(async.waterfall.name).to.contain('waterfall');
    const calls: number[] = [];
    await async.waterfall([
        async () => {
            await Promise.resolve();
            calls.push(1);
        },
        async () => {
            await Promise.resolve();
            calls.push(2);
        },
        async () => {
            await Promise.resolve();
            calls.push(3);
        },
        async () => {
            await Promise.resolve();
            calls.push(4);
        }
    ]);
    expect(calls).to.eql([1, 2, 3, 4]);
});

it('should work with queues', async () => {
    const q = async.queue<number>(async data => {
        if (data === 2) throw new Error('oh noes');
        await new Promise(resolve => setTimeout(resolve, 10));
        return data;
    }, 5);

    const calls: string[] = [];
    const errorCalls: string[] = [];
    const emptyCalls: string[] = [];
    q.error().catch(d => errorCalls.push('error ' + d));
    q.saturated().then(() => calls.push('saturated'));
    q.unsaturated().then(() => calls.push('unsaturated'));
    q.empty().then(() => emptyCalls.push('empty'));

    q.push(1).then(d => calls.push('push cb ' + d));
    q.push(2).then(d => errorCalls.push('push cb ' + d));
    q.push([3, 4, 5, 6]).map(p => p.then(d => calls.push('push cb ' + d)));
    q.push(7).then(d => calls.push('push cb ' + d));
    q.push(8).then(d => calls.push('push cb ' + d));

    const multiP = Promise.all(q.push([9, 10]));

    await q.drain();
    await multiP;
    expect(calls.join()).to.eql(
        [
            'saturated',
            'push cb 1',
            'push cb 3',
            'push cb 4',
            'push cb 5',
            'push cb 6',
            'push cb 7',
            'unsaturated',
            'push cb 8'
        ].join()
    );

    expect(errorCalls).to.eql(['push cb undefined', 'error Error: oh noes']);
    expect(emptyCalls).to.eql(['empty']);
});

/*
 * Util
 */
