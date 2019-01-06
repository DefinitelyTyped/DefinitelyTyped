// Type definitions for http-rx 1.1
// Project: https://github.com/JasonRammoray/HttpRx
// Definitions by: L2jLiga <https://github.com/L2jLiga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Observable } from 'rxjs';
import request = require('request');

interface HttpRx {
    get(url: string, options?: request.CoreOptions): Observable<any>;

    head(url: string, options?: request.CoreOptions): Observable<any>;

    patch(url: string, options?: request.CoreOptions): Observable<any>;

    post(url: string, options?: request.CoreOptions): Observable<any>;

    put(url: string, options?: request.CoreOptions): Observable<any>;

    'delete'(url: string, options?: request.CoreOptions): Observable<any>;
}

declare const httpRx: HttpRx;
export = httpRx;
