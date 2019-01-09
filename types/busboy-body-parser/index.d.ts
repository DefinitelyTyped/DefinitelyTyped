// Type definitions for busboy-body-parser 0.3.2
// Project: https://github.com/lennym/busboy-body-parser
// Definitions by: Thibaut Severac <thibaut.severac@citopia.fr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// typesVerisons: 3.2

import * as express from "express";

// Extend the express request object with attached formidable files and fields
declare global {
    namespace Express {
        interface Request {
            files?: busboyBodyParser.Files;
        }
    }
}

interface BusboyBodyParserOptions {
    limit?:string | number,
    multi?:boolean
}

declare function busboyBodyParser(options?: BusboyBodyParserOptions): express.RequestHandler;

declare namespace busboyBodyParser {
    interface File{
        data: Buffer,
        name: string,
        encoding: string,
        mimetype: string,
        truncated?: boolean,
        size: number
    }

    interface Files {
        [key: string]: File | File[];
    }
}

export = busboyBodyParser;
