import * as harFormat from "har-format";

const testCreator: harFormat.Creator = {
    name: "WebInspector",
    version: "537.36"
};

const testPageTiming: harFormat.PageTiming = {
    onContentLoad: 1995.6460000003062,
    onLoad: 4262.566999999763
};

const testPage: harFormat.Page = {
    startedDateTime: "2017-02-11T09:36:22.868Z",
    id: "page_1",
    title: "https://github.com/",
    pageTimings: testPageTiming
};

const testHeader: harFormat.Header = {
    name: "Accept",
    value: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
};

const testRequest: harFormat.Request = {
    method: "GET",
    url: "https://github.com/",
    httpVersion: "HTTP/1.1",
    headers: [testHeader],
    queryString: [],
    cookies: [],
    headersSize: 425,
    bodySize: 0
};

const testHeaders: harFormat.Header = {
    name: "Content-Encoding",
    value: "gzip"
};

const testCookie: harFormat.Cookie = {
    name: "logged_in",
    value: "no",
    path: "/",
    domain: ".github.com",
    expires: "2037-02-11T09:36:23.000Z",
    httpOnly: true,
    secure: true
};

const textPostData: harFormat.PostData = {
    mimeType: "text/plain",
    text: "some-text"
};

const paramsPostData: harFormat.PostData = {
    mimeType: "multipart/form-data",
    params: [{
        name: "some-param",
        value: "val"
    }]
};

// $ExpectError
const missingPostData: harFormat.PostData = {
    mimeType: "text/plain"
};

// $ExpectError
const tooMuchPostData: harFormat.PostData = {
    mimeType: "multipart/form-data",
    params: [{
        name: "some-param",
        value: "val"
    }],
    text: "asd"
};

const testContent: harFormat.Content = {
    size: 26915,
    mimeType: "text/html",
    compression: 18635
};

const testResponse: harFormat.Response = {
    status: 200,
    statusText: "OK",
    httpVersion: "HTTP/1.1",
    headers: [testHeaders],
    cookies: [testCookie],
    content: testContent,
    redirectURL: "",
    headersSize: 2084,
    bodySize: 8280,
    _transferSize: 10364
};

const testTimings: harFormat.Timings = {
    blocked: 0.439999999798602,
    dns: 39.6150000005946,
    connect: 483.8799999997718,
    send: 0.06899999971199122,
    wait: 287.516999999753,
    receive: 5.289000000629585,
    ssl: 244.02999999983808
};

const testEntry: harFormat.Entry = {
    startedDateTime: "2017-02-11T09:36:22.868Z",
    time: 816.8100000002596,
    request: testRequest,
    response: testResponse,
    cache: {},
    timings: testTimings,
    _gzip_total: null,
    _server_rtt: null,
    serverIPAddress: "192.30.253.113",
    connection: "26487",
    pageref: "page_1"
};

// Examples from http://www.softwareishard.com/blog/har-12-spec/#cache
const testCacheNoInformation: harFormat.Cache = {
};

const testNoCacheAfter: harFormat.Cache = {
    afterRequest: null
};

const testCacheNotCached: harFormat.Cache = {
    beforeRequest: null,
    afterRequest: null
};

const testLog: harFormat.Log = {
    version: "1.2",
    creator: testCreator,
    pages: [testPage],
    entries: [testEntry]
};

const harFile: harFormat.Har = {
    log: testLog
};
