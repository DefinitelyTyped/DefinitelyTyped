import Limiter = require("ratelimiter");

declare let id: string;
declare let db: {
    multi(operations: any[][]): { exec(cb: (err: any, res: any) => unknown): void };
};

const limit = new Limiter({ id, db, duration: 3_600, max: 1_000 });

limit.inspect(); // $ExpectType string

limit.get((error, limit): void => {
    if (error) {
        return;
    }

    limit.total; // $ExpectType number
    limit.remaining; // $ExpectType number
    limit.reset; // $ExpectType number
    limit.resetMs; // $ExpectType number
});
