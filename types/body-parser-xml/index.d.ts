// Type definitions for body-parser-xml 1.1
// Project: https://github.com/fiznool/body-parser-xml
// Definitions by: tbounsiar <https://github.com/tbounsiar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request, RequestHandler, Response, NextFunction } from 'express';

declare function bodyParserXml(bodyParser: any): (req: Request, res: Response, next: NextFunction) => void;

export = bodyParserXml;
