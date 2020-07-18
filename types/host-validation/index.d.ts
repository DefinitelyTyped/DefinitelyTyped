// Type definitions for host-validation 2.0
// Project: https://github.com/brannondorsey/host-validation
// Definitions by: Rich Liu <https://github.com/dintopple>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Request, Response, NextFunction } from 'express';

declare namespace hostValidation {
    interface config {
        hosts?: Array<string|RegExp>;
        referers?: Array<string|RegExp>;
        mode?: 'both' | 'either';
        fail?(req: Request, res: Response, next: NextFunction): void;
    }
}

declare function hostValidation(opts: hostValidation.config):
    (req: Request, res: Response, next: NextFunction) => void;

export = hostValidation;
