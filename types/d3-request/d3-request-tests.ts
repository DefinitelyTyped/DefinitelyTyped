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

const url = 'http:// api.reddit.com';

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

let listenerXhr: ((this: d3Request.Request, xhr: XMLHttpRequest) => void) | undefined;

let listenerProgress: ((this: d3Request.Request, progEvent: ProgressEvent) => void) | undefined;

let listenerError: ((this: d3Request.Request, error: any) => void) | undefined;

let listenerResult: ((this: d3Request.Request, result: ResponseDatumGET[]) => void) | undefined;

// -------------------------------------------------------------------------------
// Generic Request
// -------------------------------------------------------------------------------

// request to configure and send in follow-up
const request: d3Request.Request = d3Request.request(url);

// GET-request with callback, immediately sent
const requestWithCallback: d3Request.Request = d3Request.request(url, (error, xhr) => {
    if (!error) {
        const x: XMLHttpRequest = xhr;
        console.log(xhr.responseText);
    }
});

// -------------------------------------------------------------------------------
// Request interface
// -------------------------------------------------------------------------------

// Abort -----------------------------------------------------------------------
const r1: d3Request.Request = request.abort();

// Get -------------------------------------------------------------------------

// no arguments
const r2: d3Request.Request = d3Request.request(url)
    .get();

// with request datum
const r3: d3Request.Request = d3Request.request(url)
    .get<RequestDatumGET>({ kind: 'Listing' });

// with callback for response handling
const r4: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .get<ResponseDatumGET[]>((error, response) => {
        if (!error) {
            const r: ResponseDatumGET[] = response;
            console.log(r);
        }
    });

// with request datum and callback for response handling
const r5: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .get<RequestDatumGET, ResponseDatumGET[]>({ kind: 'Listing' }, (error, response) => {
        if (!error) {
            const r: ResponseDatumGET[] = response;
            console.log(r);
        }
    });

// Headers --------------------------------------------------------------------

// get
const acceptEncoding: string = request.header('Accept-Encoding');
// set
const r6: d3Request.Request = request.header('Accept-Encoding', 'gzip');
// remove
const r7: d3Request.Request = request.header('Accept-Encoding', null);

// Mime Type -------------------------------------------------------------------

// get
let mimeType: string | null = request.mimeType();
// set
const r8: d3Request.Request = request.mimeType('application/json');
// remove
const r9: d3Request.Request = request.mimeType(null);

// Events - on ------------------------------------------------------------------

let r10: d3Request.Request = d3Request.request(url);

// beforesent

r10 = r10.on('beforesend', function(xhr) {
    const that: d3Request.Request = this;
    const x: XMLHttpRequest = xhr;
    // do something;
});

listenerXhr = r10.on('beforesend');

// progress

r10 = r10.on('progress', function(progEvent) {
    const that: d3Request.Request = this;
    const e: ProgressEvent = progEvent;
    // do something;
});

listenerProgress = r10.on('progress');

// error

r10 = r10.on('error', function(error) {
    const that: d3Request.Request = this;
    const err: any = error;
    // do something;
});

listenerError = r10.on('error');

// load

r10 = r10.on<ResponseDatumGET[]>('load', function(result) {
    const that: d3Request.Request = this;
    const res: ResponseDatumGET[] = result;
    // do something;
});

r10 = r10.on('load', function(result: ResponseDatumGET[]) {
    const that: d3Request.Request = this;
    const res: ResponseDatumGET[] = result;
    // do something;
});

// $ExpectError
r10 = r10.on<ResponseDatumGET[]>('load', function(result: number) { // fails, wrong argument type for callback
    const that: d3Request.Request = this;
    const res: number = result;
    // do something;
});

listenerResult = r10.on<ResponseDatumGET[]>('load');

// general (for unknown type additional event listener e.g. 'beforesent.custom' or 'load.custom')

r10 = r10.on('progress.foo', function(progEvent: ProgressEvent) {
    const that: d3Request.Request = this;
    const e: any = ProgressEvent;
    // do something;
});

listenerProgress = r10.on('progress.foo');

r10 = r10.on('error.foo', function(error) {
    const that: d3Request.Request = this;
    const err: any = error;
    // do something;
});

listenerError = r10.on('error.foo');

// Password ---------------------------------------------------------------------

// get
const password: string | null = request.password();
// set
const r11: d3Request.Request = request.password('MyPassword');
const r25: d3Request.Request = request.password(null);

// Post -------------------------------------------------------------------------

function xhr2Success(xhr: XMLHttpRequest): ResponseDatumPOST {
    return JSON.parse(xhr.responseText);
}

// no arguments
const r12: d3Request.Request = d3Request.request(url)
    .post();

// with request datum
const r13: d3Request.Request = d3Request.request(url)
    .post<RequestDatumPOST>({ test: 'NewValue', value: 10 });

// with callback for response handling
const r14: d3Request.Request = d3Request.request(url).response(xhr2Success)
    .post<ResponseDatumPOST>(function(error, response) {
        const that: d3Request.Request = this;
        const err: any = error;
        const res: ResponseDatumPOST = response;
        console.log('Success? ', res.success);
    });

const r15: d3Request.Request = d3Request.request(url).response(xhr2Success)
    .post<RequestDatumPOST, ResponseDatumPOST>({ test: 'NewValue', value: 10 }, function(error, response) {
        const that: d3Request.Request = this;
        const err: any = error;
        const res: ResponseDatumPOST = response;
        console.log('Success? ', res.success);
    });

// Response ---------------------------------------------------------------------

function xhr2Listing(xhr: XMLHttpRequest): ResponseDatumGET[] {
    return JSON.parse(xhr.responseText);
}

const r16: d3Request.Request = d3Request.request(url)
    .response<ResponseDatumGET[]>(xhr2Listing);

// ResponseType -----------------------------------------------------------------

// get
const responseType: XMLHttpRequestResponseType | undefined = d3Request.request(url)
    .responseType();
// set
const r17: d3Request.Request = d3Request.request(url)
    .responseType('json');

// Send ------------------------------------------------------------------------

// method only
const r18: d3Request.Request = d3Request.request(url)
    .send('GET');

// method and request datum
const r19: d3Request.Request = d3Request.request(url)
    .send<RequestDatumPOST>('POST', { test: 'NewValue', value: 10 });

// method and callback for response handling
const r20: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .send<ResponseDatumGET[]>('GET', (error, response) => {
        if (!error) {
            const r: ResponseDatumGET[] | null = response;
            console.log(r);
        }
    });

// method,request datum and callback for response handling
const r21: d3Request.Request = d3Request.request(url)
    .response(xhr2Listing)
    .send<RequestDatumGET, ResponseDatumGET[]>('GET', { kind: 'Listing' }, (error, response) => {
        if (!error) {
            const r: ResponseDatumGET[] | null = response;
            console.log(r);
        }
    });

// Timeout -----------------------------------------------------------------------

// get
const timeout: number = d3Request.request(url)
    .timeout();
// set
const r22: d3Request.Request = d3Request.request(url)
    .timeout(500);

// User----------------------------------------------------------------------------

// get
const user: string | null = request.user();
// set
const r23: d3Request.Request = request.user('User');
const r24: d3Request.Request = request.user(null);

// -------------------------------------------------------------------------------
// HTML Request
// -------------------------------------------------------------------------------

const html: d3Request.Request = d3Request.html(url);
const htmlWithCallback: d3Request.Request = d3Request.html(url, function(error, data) {
    const that: d3Request.Request = this;
    const err: any = error;
    const d: DocumentFragment = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// JSON Request
// -------------------------------------------------------------------------------

const json: d3Request.Request = d3Request.json(url);
const jsonWithCallback: d3Request.Request = d3Request.json<ResponseDatumGET[]>(url, function(error, data) {
    const that: d3Request.Request = this;
    const err: any = error;
    const d: ResponseDatumGET[] = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// Text Request
// -------------------------------------------------------------------------------

const text: d3Request.Request = d3Request.text(url);
const textWithCallback: d3Request.Request = d3Request.text(url, function(error, data) {
    const that: d3Request.Request = this;
    const err: any = error;
    const d: string = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// XML Request
// -------------------------------------------------------------------------------

const xml: d3Request.Request = d3Request.xml(url);
const xmlWithCallback: d3Request.Request = d3Request.xml(url, function(error, data) {
    const that: d3Request.Request = this;
    const err: any = error;
    const d: any = data;
    console.log(d);
});

// -------------------------------------------------------------------------------
// CSV Request
// -------------------------------------------------------------------------------

// url only
let csvRequest: d3Request.DsvRequest = d3Request.csv(url);

// url and callback for response handling
const csvRequestWithCallback: d3Request.DsvRequest = d3Request.csv(url, function(error, data) {
    const that: d3Request.DsvRequest = this;
    const err: any = error;
    const d: DSVParsedArray<DSVRowString> = data;
    console.log(d);
});

// url, row mapping function and callback for response handling
const csvRequestWithRowWithCallback: d3Request.DsvRequest = d3Request.csv<ResponseDatumGET>(url,
    (rawRow, index, columns) => {
        const rr: DSVRowString = rawRow;
        const i: number = index;
        const cols: string[] = columns;
        const mappedRow: ResponseDatumGET = {
            test: rr['test']!,
            value: +rr['value']!
        };
        return mappedRow;
    },
    function(error, data) {
        const that: d3Request.DsvRequest = this;
        const err: any = error;
        const d: DSVParsedArray<ResponseDatumGET> = data;
        console.log(data);
    });

// -------------------------------------------------------------------------------
// TSV Request
// -------------------------------------------------------------------------------

// url only
const tsvRequest: d3Request.DsvRequest = d3Request.tsv(url);

// url and callback for response handling
const tsvRequestWithCallback: d3Request.DsvRequest = d3Request.tsv(url, function(error, data) {
    const that: d3Request.DsvRequest = this;
    const err: any = error;
    const d: DSVParsedArray<DSVRowString> = data;
    console.log(d);
});

// url, row mapping function and callback for response handling
const tsvRequestWithRowWithCallback: d3Request.DsvRequest = d3Request.tsv<ResponseDatumGET>(url,
    (rawRow, index, columns) => {
        const rr: DSVRowString = rawRow;
        const i: number = index;
        const cols: string[] = columns;
        const mappedRow: ResponseDatumGET = {
            test: rr['test']!,
            value: +rr['value']!
        };
        return mappedRow;
    },
    function(error, data) {
        const that: d3Request.DsvRequest = this;
        const err: any = error;
        const d: DSVParsedArray<ResponseDatumGET> = data;
        console.log(data);
    });

// -------------------------------------------------------------------------------
// DsvRequest interface
// -------------------------------------------------------------------------------

// row(...) ----------------------------------------------------------------------

csvRequest = csvRequest
    .row<ResponseDatumGET>((rawRow, index, columns) => {
        const rr: DSVRowString = rawRow;
        const i: number = index;
        const cols: string[] = columns;
        const mappedRow: ResponseDatumGET = {
            test: rr['test']!,
            value: +rr['value']!
        };
        return mappedRow;
    });

// inherited methods from Request interface ---------------------------------------

// e.g. mimeType getter
mimeType = csvRequest.mimeType();
