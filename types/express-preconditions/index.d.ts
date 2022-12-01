// Type definitions for express-preconditions 1.0
// Project: https://richardschneider.github/express-conditional-request
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { RequestHandler, Request, Response } from 'express';

declare namespace preconditions {
    interface ResourceState {
        etag?: string;
        lastModified?: string;
    }

    interface StateProvider {
        (req: Request): Promise<ResourceState>;
    }

    interface ErrorCallback {
        (statusCode: number, message: string, req: Request, res: Response): void;
    }

    interface Options {
        stateAsync?: StateProvider;
        error?: ErrorCallback;
        requiredWith?: string[];
    }
}

declare function preconditions(options?: preconditions.Options): RequestHandler;

export = preconditions;
