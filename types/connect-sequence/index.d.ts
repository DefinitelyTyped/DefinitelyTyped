// Type definitions for connect-sequence 2.1
// Project: https://github.com/sirap-group/connect-sequence
// Definitions by: Levi Bostian <https://github.com/levibostian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Request, Response, NextFunction, RequestHandler } from 'express';

declare class ConnectSequence {
    constructor(req: Request, res: Response, next: NextFunction);

    append(...middleware: RequestHandler[]): this;
    appendList(middleware: RequestHandler[]): this;
    appendIf(condition: boolean, middleware: RequestHandler): this;
    appendListIf(condition: boolean, middleware: RequestHandler[]): this;
    run(): void;
}

export = ConnectSequence;
