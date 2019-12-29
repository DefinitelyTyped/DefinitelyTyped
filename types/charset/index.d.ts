// Type definitions for charset 1.0
// Project: https://github.com/node-modules/charset
// Definitions by: Andrew Bradley <https://github.com/cspotcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { IncomingMessage, IncomingHttpHeaders } from 'http';

/**
 * guess data charset from req.headers, xml, html content-type meta tag
 *
 * headers:
 *
 *    'content-type': 'text/html;charset=gbk'
 *
 * meta tag:
 *
 *    <meta http-equiv="Content-Type" content="text/html; charset=xxxx"/>
 *
 * xml file:
 *
 *    <?xml version="1.0" encoding="UTF-8"?>
 *
 * @param obj `Content-Type` String, or `res.headers`, or `res` Object
 * @param data content buffer
 * @param peekSize max content peek size, default is 512
 * @return charset, lower case, e.g.: utf8, gbk, gb2312, .... If can\'t guess, return null
 */
// tslint:disable-next-line strict-export-declare-modifiers
declare function charset(obj: string | IncomingHttpHeaders | IncomingMessage, data?: Buffer, peekSize?: number): string | null;

// tslint:disable-next-line strict-export-declare-modifiers
export = charset;
