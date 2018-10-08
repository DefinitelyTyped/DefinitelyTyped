// Type definitions for host-validation 2.0.0
// Project: https://github.com/brannondorsey/host-validation
// Definitions by: Rich Liu <https://github.com/dintopple>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import { Request, Response, NextFunction} from 'express';

interface config {
    hosts: (string|RegExp)[];
}

declare function hostValidation(hosts: config): (req: Request, res: Response, next: NextFunction) => void;

export = hostValidation;