import { NextFunction, Request, RequestHandler, Response } from "express";

declare class ConnectSequence {
    constructor(req: Request, res: Response, next: NextFunction);

    append(...middleware: RequestHandler[]): this;
    appendList(middleware: RequestHandler[]): this;
    appendIf(condition: boolean, middleware: RequestHandler): this;
    appendListIf(condition: boolean, middleware: RequestHandler[]): this;
    run(): void;
}

export = ConnectSequence;
