import * as backoff from 'backoff';

const fibonacciBackoff = backoff.fibonacci();
fibonacciBackoff; // $ExpectType Backoff
backoff.fibonacci({
    randomisationFactor: 0,
    initialDelay: 10,
    maxDelay: 300
});
backoff.fibonacci({randomisationFactor: 0});
backoff.fibonacci({initialDelay: 10});
backoff.fibonacci({maxDelay: 300});

backoff.exponential(); // $ExpectType Backoff
backoff.exponential({
    factor: 1,
    randomisationFactor: 0,
    initialDelay: 10,
    maxDelay: 300
});
backoff.exponential({factor: 1});
backoff.exponential({randomisationFactor: 0});
backoff.exponential({initialDelay: 10});
backoff.exponential({maxDelay: 300});

const fibonacciStrategy = new backoff.FibonacciStrategy();
new backoff.FibonacciStrategy({
    randomisationFactor: 0,
    initialDelay: 10,
    maxDelay: 300
});
new backoff.FibonacciStrategy({randomisationFactor: 0});
new backoff.FibonacciStrategy({initialDelay: 10});
new backoff.FibonacciStrategy({maxDelay: 300});

fibonacciStrategy.next(); // $ExpectType number
fibonacciStrategy.reset();

const exponentialStrategy = new backoff.ExponentialStrategy();
new backoff.ExponentialStrategy({
    factor: 1,
    randomisationFactor: 0,
    initialDelay: 10,
    maxDelay: 300
});
new backoff.ExponentialStrategy({factor: 1});
new backoff.ExponentialStrategy({randomisationFactor: 0});
new backoff.ExponentialStrategy({initialDelay: 10});
new backoff.ExponentialStrategy({maxDelay: 300});

exponentialStrategy.next(); // $ExpectType number
exponentialStrategy.reset();

class MyStrategy extends backoff.BackoffStrategy {
    constructor() {
        super({
            randomisationFactor: 0,
            initialDelay: 10,
            maxDelay: 300
        });
    }

    protected next_() {
        return 1;
    }

    protected reset_() {
    }
}

const myStrategy = new MyStrategy();
exponentialStrategy.next(); // $ExpectType number
exponentialStrategy.reset();

// $ExpectType TypedFunctionCall<undefined[], Error, undefined, undefined, undefined>
backoff.call((cb: (err: Error) => void) => {}, (err) => {
    err; // $ExpectType Error
});
// $ExpectType TypedFunctionCall<undefined[], Error, string, undefined, undefined>
backoff.call((cb: (err: Error, r1: string) => void) => {}, (err, r1) => {
    r1; // $ExpectType string
    err; // $ExpectType Error
});
// TypedFunctionCall<undefined[], Error, string, number, undefined>
backoff.call((cb: (err: Error, r1: string, r2: number) => void) => {}, (err, r1, r2) => {
    r1; // $ExpectType string
    r2; // $ExpectType number
    err; // $ExpectType Error
});
// TypedFunctionCall<undefined[], Error, string, number, boolean>
backoff.call((cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {}, (err, r1, r2, r3) => {
    r1; // $ExpectType string
    r2; // $ExpectType number
    r3; // $ExpectType boolean
    err; // $ExpectType Error
});
// TypedFunctionCall<[number], Error, string, undefined, undefined>
backoff.call(
    (t1: number, cb: (err: Error, r1: string) => void) => {
    },
    1,
    (err, r1) => {
        r1; // $ExpectType string
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number], Error, string, number, undefined>
backoff.call(
    (t1: number, cb: (err: Error, r1: string, r2: number) => void) => {
    },
    1,
    (err, r1, r2) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number], Error, string, number, boolean>
backoff.call(
    (t1: number, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    1,
    (err, r1, r2, r3) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        r3; // $ExpectType boolean
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string], Error, string, undefined, undefined>
backoff.call(
    (t1: number, t2: string, cb: (err: Error, r1: string) => void) => {
    },
    1, 'foo',
    (err, r1) => {
        r1; // $ExpectType string
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string], Error, string, number, undefined>
backoff.call(
    (t1: number, t2: string, cb: (err: Error, r1: string, r2: number) => void) => {
    },
    1, 'foo',
    (err, r1, r2) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string], Error, string, number, boolean>
backoff.call(
    (t1: number, t2: string, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    1, 'foo',
    (err, r1, r2, r3) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        r3; // $ExpectType boolean
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string, boolean], Error, string, undefined, undefined>
backoff.call(
    (t1: number, t2: string, t3: boolean, cb: (err: Error, r1: string) => void) => {
    },
    1, 'foo', true,
    (err, r1) => {
        r1; // $ExpectType string
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string, boolean], Error, string, number, undefined>
backoff.call(
    (t1: number, t2: string, t3: boolean, cb: (err: Error, r1: string, r2: number) => void) => {
    },
    1, 'foo', true,
    (err, r1, r2) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string, boolean], Error, string, number, boolean>
backoff.call(
    (t1: number, t2: string, t3: boolean, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    1, 'foo', true,
    (err, r1, r2, r3) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        r3; // $ExpectType boolean
        err; // $ExpectType Error
    });
// $ExpectType FunctionCallAny
backoff.call(
    (t1: number, t2: string, t3: boolean, t4: string, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    1, 'foo', true, 'bar',
    (err: Error, r1: string, r2: number, r3: boolean) => {});

fibonacciBackoff.failAfter(10);
fibonacciBackoff.backoff(new Error('foo'));
fibonacciBackoff.reset();

fibonacciBackoff.on('backoff', (number, delay) => {
    number; // $ExpectType number
    delay; // $ExpectType number
});
fibonacciBackoff.on('ready', (number, delay) => {
    number; // $ExpectType number
    delay; // $ExpectType number
});
fibonacciBackoff.on('fail', (err) => {
    err; // $ExpectType any
});

// TypedFunctionCall<undefined[], Error, undefined, undefined, undefined>
new backoff.FunctionCall((cb: (err: Error) => void) => {}, [], (err) => {
    err; // $ExpectType Error
});
// TypedFunctionCall<undefined[], Error, string, undefined, undefined>
new backoff.FunctionCall((cb: (err: Error, r1: string) => void) => {}, [], (err, r1) => {
    r1; // $ExpectType string
    err; // $ExpectType Error
});
// TypedFunctionCall<undefined[], Error, string, number, undefined>
new backoff.FunctionCall((cb: (err: Error, r1: string, r2: number) => void) => {}, [], (err, r1, r2) => {
    r1; // $ExpectType string
    r2; // $ExpectType number
    err; // $ExpectType Error
});
// TypedFunctionCall<undefined[], Error, string, number, boolean>
new backoff.FunctionCall((cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {}, [], (err, r1, r2, r3) => {
    r1; // $ExpectType string
    r2; // $ExpectType number
    r3; // $ExpectType boolean
    err; // $ExpectType Error
});
// TypedFunctionCall<[number], Error, string, undefined, undefined>
new backoff.FunctionCall(
    (t1: number, cb: (err: Error, r1: string) => void) => {
    },
    [1],
    (err, r1) => {
        r1; // $ExpectType string
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number], Error, string, number, undefined>
new backoff.FunctionCall(
    (t1: number, cb: (err: Error, r1: string, r2: number) => void) => {
    },
    [1],
    (err, r1, r2) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number], Error, string, number, boolean>
new backoff.FunctionCall(
    (t1: number, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    [1],
    (err, r1, r2, r3) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        r3; // $ExpectType boolean
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string], Error, string, undefined, undefined>
new backoff.FunctionCall(
    (t1: number, t2: string, cb: (err: Error, r1: string) => void) => {
    },
    [1, 'foo'],
    (err, r1) => {
        r1; // $ExpectType string
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string], Error, string, number, undefined>
new backoff.FunctionCall(
    (t1: number, t2: string, cb: (err: Error, r1: string, r2: number) => void) => {
    },
    [1, 'foo'],
    (err, r1, r2) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string], Error, string, number, boolean>
new backoff.FunctionCall(
    (t1: number, t2: string, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    [1, 'foo'],
    (err, r1, r2, r3) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        r3; // $ExpectType boolean
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string, boolean], Error, string, undefined, undefined>
new backoff.FunctionCall(
    (t1: number, t2: string, t3: boolean, cb: (err: Error, r1: string) => void) => {
    },
    [1, 'foo', true],
    (err, r1) => {
        r1; // $ExpectType string
        err; // $ExpectType Error
    });
// TypedFunctionCall<[number, string, boolean], Error, string, number, undefined>
new backoff.FunctionCall(
    (t1: number, t2: string, t3: boolean, cb: (err: Error, r1: string, r2: number) => void) => {
    },
    [1, 'foo', true],
    (err, r1, r2) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        err; // $ExpectType Error
    });
const functionCall = new backoff.FunctionCall(
    (t1: number, t2: string, t3: boolean, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    [1, 'foo', true],
    (err, r1, r2, r3) => {
        r1; // $ExpectType string
        r2; // $ExpectType number
        r3; // $ExpectType boolean
        err; // $ExpectType Error
    });
functionCall; // TypedFunctionCall<[number, string, boolean], Error, string, number, boolean>
// $ExpectType FunctionCallAny
new backoff.FunctionCall(
    (t1: number, t2: string, t3: boolean, t4: string, cb: (err: Error, r1: string, r2: number, r3: boolean) => void) => {
    },
    [1, 'foo', true, 'bar'],
    (err: Error, r1: string, r2: number, r3: boolean) => {});

functionCall.isPending(); // $ExpectType boolean
functionCall.isRunning(); // $ExpectType boolean
functionCall.isCompleted(); // $ExpectType boolean
functionCall.isAborted(); // $ExpectType boolean
functionCall.setStrategy(myStrategy); // $ExpectType TypedFunctionCall<[number, string, boolean], Error, string, number, boolean>
functionCall.retryIf(err => err.status === 503); // $ExpectType TypedFunctionCall<[number, string, boolean], Error, string, number, boolean>
functionCall.failAfter(10); // $ExpectType TypedFunctionCall<[number, string, boolean], Error, string, number, boolean>
functionCall.getLastResult(); // $ExpectType [Error, string, number, boolean]
functionCall.getNumRetries(); // $ExpectType number
functionCall.start();
functionCall.abort();
functionCall.on('call', args => {
    args; // $ExpectType [number, string, boolean]
});
functionCall.on('callback', args => {
    args; // $ExpectType [Error, string, number, boolean]
});
functionCall.on('backoff', (number, delay, err) => {
    number; // $ExpectType number
    delay; // $ExpectType number
    err; // $ExpectType any
});
functionCall.on('abort', () => {});
