import { Handler } from "express";

import { ParserOptions as XmlParserOptions } from "xml2js";

declare function xmlparser(options?: XmlParserOptions): Handler;

declare namespace xmlparser {
    // @deprecated Will be removed in future versions
    let regexp: RegExp;
}

export = xmlparser;
