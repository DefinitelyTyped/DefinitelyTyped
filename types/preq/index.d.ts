export = preq;

import request = require("request");
import BlueBird = require("bluebird");

declare function preq(url: string, options?: preq.Options): BlueBird<request.Response>;
declare function preq(options: preq.Options & preq.UrlOptions): BlueBird<request.Response>;

declare namespace preq {
    interface Options extends request.CoreOptions {
        query?: any;
        body?: any;
        retries?: number;
        timeout?: number;
    }

    interface UrlOptions {
        uri: string;
    }

    function get(url: string, options?: Options): BlueBird<request.Response>;
    function get(options: Options & UrlOptions): BlueBird<request.Response>;

    function head(url: string, options?: Options): BlueBird<request.Response>;
    function head(options: Options & UrlOptions): BlueBird<request.Response>;

    function mkcol(url: string, options?: Options): BlueBird<request.Response>;
    function mkcol(options: Options & UrlOptions): BlueBird<request.Response>;

    function options(url: string, options?: Options): BlueBird<request.Response>;
    function options(options: Options & UrlOptions): BlueBird<request.Response>;

    function patch(url: string, options?: Options): BlueBird<request.Response>;
    function patch(options: Options & UrlOptions): BlueBird<request.Response>;

    function post(url: string, options?: Options): BlueBird<request.Response>;
    function post(options: Options & UrlOptions): BlueBird<request.Response>;

    function put(url: string, options?: Options): BlueBird<request.Response>;
    function put(options: Options & UrlOptions): BlueBird<request.Response>;

    function trace(url: string, options?: Options): BlueBird<request.Response>;
    function trace(options: Options & UrlOptions): BlueBird<request.Response>;
}
