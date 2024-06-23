import { NextFunction, Request, Response } from "express";

declare namespace hostValidation {
    interface config {
        hosts?: Array<string | RegExp> | undefined;
        referers?: Array<string | RegExp> | undefined;
        mode?: "both" | "either" | undefined;
        fail?(req: Request, res: Response, next: NextFunction): void;
    }
}

declare function hostValidation(opts: hostValidation.config): (req: Request, res: Response, next: NextFunction) => void;

export = hostValidation;
