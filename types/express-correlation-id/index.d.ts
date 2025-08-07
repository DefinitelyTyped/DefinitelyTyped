import { RequestHandler } from "express-serve-static-core";
import { getId, setId } from 'correlation-id'

declare const correlator: {
    (options?: { header?: string | undefined }): RequestHandler;
    getId: typeof getId;
    setId: typeof setId;
};

export = correlator;
