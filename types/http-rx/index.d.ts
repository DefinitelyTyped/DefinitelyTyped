import { Observable } from "rxjs";
import request = require("request");

interface ResponseWrapper {
    response: request.Response;
    body: any;
}

interface HttpRx {
    get(url: string, options?: request.CoreOptions): Observable<ResponseWrapper>;

    head(url: string, options?: request.CoreOptions): Observable<ResponseWrapper>;

    patch(url: string, options?: request.CoreOptions): Observable<ResponseWrapper>;

    post(url: string, options?: request.CoreOptions): Observable<ResponseWrapper>;

    put(url: string, options?: request.CoreOptions): Observable<ResponseWrapper>;

    delete(url: string, options?: request.CoreOptions): Observable<ResponseWrapper>;
}

declare const httpRx: HttpRx;
export = httpRx;
