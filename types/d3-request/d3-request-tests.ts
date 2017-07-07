/**
 * Typescript definition tests for d3/d3-request module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

// IMPORTANT: DO NOT ATTEMPT TO EXECUTE THE REQUESTS IN THIS TEST FILE
// THE URL AND PARAMETERIZATIONS ARE NOT VALID AS EXAMPLIFIED BELOW.

import * as d3Request from 'd3-request';
import { DSVParsedArray, DSVRowString } from 'd3-dsv';

// -------------------------------------------------------------------------------
// Preparatory Steps
// -------------------------------------------------------------------------------

const url: string = 'http:// api.reddit.com';

interface RequestDatumGET {
    kind: 'Listing';
}

interface ResponseDatumGET {
    test: string;
    value: number;
}

interface RequestDatumPOST {
    test: string;
    value: number;
}

interface ResponseDatumPOST {
    success: boolean;
}

let listenerXhr: (this: d3Request.Request, xhr: XMLHttpRequest) => void;

let listenerProgress: (this: d3Request.Request, progEvent: ProgressEvent) => void;

let listenerError: (this: d3Request.Request, error: any) => void;

let listenerResult: (this: d3Request.Request, result: ResponseDatumGET[]) => void;

// -------------------------------------------------------------------------------
// Generic Request
// -------------------------------------------------------------------------------

// request to configure and send in follow-up
let request: d3Request.Request = d3Request.request(url);

// GET-request with callback, immediately sent
let requestWithCallback: d3Request.Request = d3Request.request(url, (error, xhr) => {
    let x: XMLHttpRequest;
    if (!error) {
        x = xhr;
        console.log(xhr.responseText);
    }
});

// -------------------------------------------------------------------------------
// Request interface
// -------------------------------------------------------------------------------

// Abort -----------------------------------------------------------------------
let r1: d3Request.Request = request.abort();

// Get -------------------------------------------------------------------------

// no arguments
let r2: d3Request.Request = d3Request.request(url)
    .get();

// with request datum
let r3: d3Request.Request = d3Request.request(url)
    .get<RequestDatumGET>({ kind: 'Listing' });

// with callback for response handling
let r4: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .get<ResponseDatumGET[]>((error, response) => {
        let r: ResponseDatumGET[];
        if (!error) {
            r = response;
            console.log(r);
        }
    });

// with request datum and callback for response handling
let r5: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .get<RequestDatumGET, ResponseDatumGET[]>({ kind: 'Listing' }, (error, response) => {
        let r: ResponseDatumGET[];
        if (!error) {
            r = response;
            console.log(r);
        }
    });

// Headers --------------------------------------------------------------------

// get
let acceptEncoding: string = request.header('Accept-Encoding');
// set
let r6: d3Request.Request = request.header('Accept-Encoding', 'gzip');
// remove
let r7: d3Request.Request = request.header('Accept-Encoding', null);

// Mime Type -------------------------------------------------------------------

// get
let mimeType: string = request.mimeType();
// set
let r8: d3Request.Request = request.mimeType('application/json');
// remove
let r9: d3Request.Request = request.mimeType(null);

// Events - on ------------------------------------------------------------------

let r10: d3Request.Request = d3Request.request(url);

// beforesent

r10 = r10.on('beforesend', function(xhr) {
    let that: d3Request.Request = this;
    let x: XMLHttpRequest = xhr;
    // do something;
});

listenerXhr = r10.on('beforesend');

// progress

r10 = r10.on('progress', function(progEvent) {
    let that: d3Request.Request = this;
    let e: ProgressEvent = progEvent;
    // do something;
});

listenerProgress = r10.on('progress');

// error

r10 = r10.on('error', function(error) {
    let that: d3Request.Request = this;
    let err: any = error;
    // do something;
});

listenerError = r10.on('error');

// load

r10 = r10.on<ResponseDatumGET[]>('load', function(result) {
    let that: d3Request.Request = this;
    let res: ResponseDatumGET[] = result;
    // do something;
});

r10 = r10.on('load', function(result: ResponseDatumGET[]) {
    let that: d3Request.Request = this;
    let res: ResponseDatumGET[] = result;
    // do something;
});

// r10 = r10.on<ResponseDatumGET[]>('load', function(result: number) { // fails, wrong argument type for callback
//     let that: d3Request.Request = this;
//     let res: number = result;
//     // do something;
// });

listenerResult = r10.on<ResponseDatumGET[]>('load');

// general (for unknown type additional event listener e.g. 'beforesent.custom' or 'load.custom')

r10 = r10.on('progress.foo', function(progEvent: ProgressEvent) {
    let that: d3Request.Request = this;
    let e: any = ProgressEvent;
    // do something;
});

listenerProgress = r10.on('progress.foo');

r10 = r10.on('error.foo', function(error) {
    let that: d3Request.Request = this;
    let err: any = error;
    // do something;
});

listenerError = r10.on('error.foo');

// Password ---------------------------------------------------------------------

// get
let password: string = request.password();
// set
let r11: d3Request.Request = request.password('MyPassword');

// Post -------------------------------------------------------------------------

function xhr2Success(xhr: XMLHttpRequest): ResponseDatumPOST {
    let result: ResponseDatumPOST;

    result = JSON.parse(xhr.responseText);

    return result;
}

// no arguments
let r12: d3Request.Request = d3Request.request(url)
    .post();

// with request datum
let r13: d3Request.Request = d3Request.request(url)
    .post<RequestDatumPOST>({ test: 'NewValue', value: 10 });

// with callback for response handling
let r14: d3Request.Request = d3Request.request(url).response(xhr2Success)
    .post<ResponseDatumPOST>(function(error, response) {
        let that: d3Request.Request = this;
        let err: any = error;
        let res: ResponseDatumPOST = response;
        console.log('Success? ', res.success);
    });

let r15: d3Request.Request = d3Request.request(url).response(xhr2Success)
    .post<RequestDatumPOST, ResponseDatumPOST>({ test: 'NewValue', value: 10 }, function(error, response) {
        let that: d3Request.Request = this;
        let err: any = error;
        let res: ResponseDatumPOST = response;
        console.log('Success? ', res.success);
    });

// Response ---------------------------------------------------------------------

function xhr2Listing(xhr: XMLHttpRequest): ResponseDatumGET[] {
    let result: ResponseDatumGET[];

    result = JSON.parse(xhr.responseText);

    return result;
}

let r16: d3Request.Request = d3Request.request(url)
    .response<ResponseDatumGET[]>(xhr2Listing);

// ResponseType -----------------------------------------------------------------

// get
let responseType: string = d3Request.request(url)
    .responseType();
// set
let r17: d3Request.Request = d3Request.request(url)
    .responseType('application/json');

// Send ------------------------------------------------------------------------

// method only
let r18: d3Request.Request = d3Request.request(url)
    .send('GET');

// method and request datum
let r19: d3Request.Request = d3Request.request(url)
    .send<RequestDatumPOST>('POST', { test: 'NewValue', value: 10 });

// method and callback for response handling
let r20: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .send<ResponseDatumGET[]>('GET', (error, response) => {
        let r: ResponseDatumGET[];
        if (!error) {
            r = response;
            console.log(r);
        }
    });

// method,request datum and callback for response handling
let r21: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .send<RequestDatumGET, ResponseDatumGET[]>('GET', { kind: 'Listing' }, (error, response) => {
        let r: ResponseDatumGET[];
        if (!error) {
            r = response;
            console.log(r);
        }
    });

// Timeout -----------------------------------------------------------------------

// get
let timeout: number = d3Request.request(url)
    .timeout();
// set
let r22: d3Request.Request = d3Request.request(url)
    .timeout(500);

// User----------------------------------------------------------------------------

// get
let user: string = request.user();
// set
let r23: d3Request.Request = request.user('User');

// -------------------------------------------------------------------------------
// HTML Request
// -------------------------------------------------------------------------------

let html: d3Request.Request = d3Request.html(url);
let htmlWithCallback: d3Request.Request = d3Request.html(url, function(error, data) {
    let that: d3Request.Request = this;
    let err: any = error;
    let d: DocumentFragment = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// JSON Request
// -------------------------------------------------------------------------------

let json: d3Request.Request = d3Request.json(url);
let jsonWithCallback: d3Request.Request = d3Request.json<ResponseDatumGET[]>(url, function(error, data) {
    let that: d3Request.Request = this;
    let err: any = error;
    let d: ResponseDatumGET[] = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// Text Request
// -------------------------------------------------------------------------------

let text: d3Request.Request = d3Request.text(url);
let textWithCallback: d3Request.Request = d3Request.text(url, function(error, data) {
    let that: d3Request.Request = this;
    let err: any = error;
    let d: string = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// XML Request
// -------------------------------------------------------------------------------

let xml: d3Request.Request = d3Request.xml(url);
let xmlWithCallback: d3Request.Request = d3Request.xml(url, function(error, data) {
    let that: d3Request.Request = this;
    let err: any = error;
    let d: any = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// CSV Request
// -------------------------------------------------------------------------------

// url only
let csvRequest: d3Request.DsvRequest = d3Request.csv(url);

// url and callback for response handling
let csvRequestWithCallback: d3Request.DsvRequest = d3Request.csv(url, function(error, data) {
    let that: d3Request.Request = this;
    let err: any = error;
    let d: DSVParsedArray<DSVRowString> = data;
    console.log(d);
});

// url, row mapping function and callback for response handling
let csvRequestWithRowWithCallback: d3Request.DsvRequest = d3Request.csv<ResponseDatumGET>(url,
    (rawRow, index, columns) => {
        let rr: DSVRowString = rawRow;
        let i: number = index;
        let cols: string[] = columns;
        let mappedRow: ResponseDatumGET;

        mappedRow = {
            test: rr['test'],
            value: +rr['value']
        };

        return mappedRow;
    },
    function(error, data) {
        let that: d3Request.Request = this;
        let err: any = error;
        let d: DSVParsedArray<ResponseDatumGET> = data;
        console.log(data);
    });

// -------------------------------------------------------------------------------
// TSV Request
// -------------------------------------------------------------------------------

// url only
let tsvRequest: d3Request.DsvRequest = d3Request.tsv(url);

// url and callback for response handling
let tsvRequestWithCallback: d3Request.DsvRequest = d3Request.tsv(url, function(error, data) {
    let that: d3Request.Request = this;
    let err: any = error;
    let d: DSVParsedArray<DSVRowString> = data;
    console.log(d);
});

// url, row mapping function and callback for response handling
let tsvRequestWithRowWithCallback: d3Request.DsvRequest = d3Request.tsv<ResponseDatumGET>(url,
    (rawRow, index, columns) => {
        let rr: DSVRowString = rawRow;
        let i: number = index;
        let cols: string[] = columns;
        let mappedRow: ResponseDatumGET;

        mappedRow = {
            test: rr['test'],
            value: +rr['value']
        };

        return mappedRow;
    },
    function(error, data) {
        let that: d3Request.Request = this;
        let err: any = error;
        let d: DSVParsedArray<ResponseDatumGET> = data;
        console.log(data);
    });

// -------------------------------------------------------------------------------
// DsvRequest interface
// -------------------------------------------------------------------------------

// row(...) ----------------------------------------------------------------------

csvRequest = csvRequest
    .row<ResponseDatumGET>((rawRow, index, columns) => {
        let rr: DSVRowString = rawRow;
        let i: number = index;
        let cols: string[] = columns;
        let mappedRow: ResponseDatumGET;

        mappedRow = {
            test: rr['test'],
            value: +rr['value']
        };

        return mappedRow;
    });

// inherited methods from Request interface ---------------------------------------

// e.g. mimeType getter
mimeType = csvRequest.mimeType();
