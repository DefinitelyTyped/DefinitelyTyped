import { RequestHandler } from "express-serve-static-core";

declare const correlator: {
    (options?: { header?: string | undefined }): RequestHandler;
    getId(): string | undefined;
};

export = correlator;
