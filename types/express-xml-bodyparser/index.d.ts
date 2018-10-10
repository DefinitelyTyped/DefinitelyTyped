// Type definitions for express-xml-bodyparser 0.3
// Project: https://github.com/macedigital/express-xml-bodyparser
// Definitions by:  Notice Maker <https://github.com/noticeMaker>
//                  Matthias Adler <https://github.com/macedigital>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Handler } from 'express';

import { Options as XmlParserOptions } from 'xml2js';

declare function xmlparser(options?: XmlParserOptions): Handler;

declare namespace xmlparser {
    // @deprecated Will be removed in future versions
    let regexp: RegExp;
}

export = xmlparser;
