// Type definitions for http-rx 1.1
// Project: https://github.com/JasonRammoray/HttpRx
// Definitions by: L2jLiga <https://github.com/L2jLiga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Observable } from 'rxjs';

interface HttpRx {
    get(url: string, options: any): Observable<any>;

    head(url: string, options: any): Observable<any>;

    patch(url: string, options: any): Observable<any>;

    post(url: string, options: any): Observable<any>;

    put(url: string, options: any): Observable<any>;

    'delete'(url: string, options: any): Observable<any>;
}

declare const httpRx: HttpRx;
export = httpRx;
