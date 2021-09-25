// Type definitions for heroku-client 3.1
// Project: https://github.com/heroku/node-heroku-client
// Definitions by: Oleg Valter <https://github.com/Oaphi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import Request = require('./request');
import type { RequestOptions } from './options';

type HerokuClientOptions = RequestOptions;

declare class Heroku {
    options: HerokuClientOptions;

    constructor(options: HerokuClientOptions);

    request(options: HerokuClientOptions): ReturnType<Request['request']>;

    get(path: string, options?: HerokuClientOptions): ReturnType<Request['request']>;

    put(path: string, options?: HerokuClientOptions): ReturnType<Request['request']>;

    post(path: string, options?: HerokuClientOptions): ReturnType<Request['request']>;

    patch(path: string, options?: HerokuClientOptions): ReturnType<Request['request']>;

    delete(path: string, options?: HerokuClientOptions): ReturnType<Request['request']>;
}

export = Heroku;
