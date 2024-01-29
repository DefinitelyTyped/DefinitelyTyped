type Falsy = false | 0 | "" | null | undefined;

interface Data<T> {
    pipe: (res: T) => any;
}

declare function errorHandler<Err, Req, Res, P, T>(
    preErrorHandler: (err: Err, responsePayload: P, req: Req, res: Res) => T,
): {
    express: (
        err: Err,
        req: Req,
        res: Res,
        next: any,
    ) => ReturnType<
        (
            err: Err,
            req: Req,
            res: Res,
        ) => T extends Falsy ? (P extends Data<Res> ? ReturnType<Data<Res>["pipe"]> : undefined) : T
    >;

    restana: (
        err: Err,
        req: Req,
        res: Res,
    ) => ReturnType<
        (
            err: Err,
            req: Req,
            res: Res,
        ) => T extends Falsy ? (P extends Data<Res> ? ReturnType<Data<Res>["pipe"]> : undefined) : T
    >;

    native: (
        err: Err,
        req: Req,
        res: Res,
    ) => ReturnType<
        (
            err: Err,
            req: Req,
            res: Res,
        ) => T extends Falsy ? (P extends Data<Res> ? ReturnType<Data<Res>["pipe"]> : undefined) : T
    >;
};

export = errorHandler;
