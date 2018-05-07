// Type definitions for express-xml-bodyparser 0.3
// Project: https://github.com/macedigital/express-xml-bodyparser
// Definitions by: Notice Maker <https://github.com/noticeMaker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request, Response, NextFunction } from 'express';

declare function xmlparser(options?: xmlparser.XmlparserOptions): (req: Request, res: Response, next: NextFunction) => void;

declare namespace xmlparser {
    let regexp: RegExp;

    interface XmlparserOptions {
        async?: boolean;
        explicitArray?: boolean;
        normalize?: boolean;
        normalizeTags?: boolean;
        trim?: boolean;
    }
}

export = xmlparser;
