// Type definitions for hippie 0.5
// Project: https://github.com/vesln/hippie
// Definitions by: Nico Muschert <https://github.com/nicomuschert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2
/// <reference types="node" />

import http = require('http');

interface Err {
  AssertionError: string;
  message: string;
  showDiff: boolean;
  actual: boolean;
  expected: boolean;
}

interface EndCb {
  (err: undefined|Err|Error, res: http.IncomingMessage, body?: object|string): void;
}

interface Opts {
  [key: string]: string|{};
}

declare function hippie(app?: any): typeof hippie;
declare namespace hippie {
    function end(end?: EndCb): undefined|Promise<any>;
    function del(url: string, fn?: EndCb): typeof hippie;
    function get(url: string, fn?: EndCb): typeof hippie;
    function head(url: string, fn?: EndCb): typeof hippie;
    function patch(url: string, fn?: EndCb): typeof hippie;
    function post(url: string, fn?: EndCb): typeof hippie;
    function put(url: string, fn?: EndCb): typeof hippie;
    function method(method: string): typeof hippie;
    function url(url: string): typeof hippie;
    function header(key: string, val: string): typeof hippie;
    function base(url: string): typeof hippie;
    function app(app: (req: http.ClientRequest, res: http.ServerResponse) => {}): typeof hippie;
    function auth(user: string, pass: string): typeof hippie;
    function opts(fn: (opts: Opts) => void): typeof hippie;
    function form(): typeof hippie;
    function json(): typeof hippie;
    function qs(obj: {}): string;
    function send(data: any): typeof hippie;
    function expect(fn: (result: http.IncomingMessage, body: string|{}, next: (err?: Err|Error) => void) => void): typeof hippie;
    function expectBody(expected: null|number|string|RegExp|{}): typeof hippie;
    function expectCode(code: number): typeof hippie;
    function expectHeader(key: string, val: string): typeof hippie;
    function expectKey(key: string): typeof hippie;
    function expectStatus(code: number): typeof hippie;
    function expectStatusCode(code: number): typeof hippie;
    function expectValue(key: string, val: null|string|number|{}): typeof hippie;
    function parser(fn: (body: string, cb: (err: null|Error, res: null|{}) => void) => void): typeof hippie;
    function serializer(fn: (params: {}, cb: (err: null|Error, res: string) => void) => void): typeof hippie;
    function time(time: boolean): typeof hippie;
    function timeout(time: number): typeof hippie;
    function use(fn: (options: Opts, next: (options: Opts) => void) => void): typeof hippie;
}

export = hippie;
