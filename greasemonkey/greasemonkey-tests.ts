

////////////////
// Global variable
////////////////

var title: string = unsafeWindow.document.title;

var scriptDescription: string = GM_info.script.description;
var scriptExcludes: string[]  = GM_info.script.excludes;
var scriptIncludes: string[]  = GM_info.script.includes;
var scriptMatches: string[]   = GM_info.script.matches;
var scriptName: string        = GM_info.script.name;
var scriptNamespace: string   = GM_info.script.namespace;
var scriptResouces: Object    = GM_info.script.resources;
var scriptRunAt: string       = GM_info.script['run-at'];
var scriptUnwrap: boolean     = GM_info.script.unwrap;
var scriptVersion: string     = GM_info.script.version;
var scriptMetsStr: string     = GM_info.scriptMetaStr;
var scriptWillUpdate: boolean = GM_info.scriptWillUpdate;
var gmVersion: string         = GM_info.version;

////////////////
// Values
////////////////

GM_setValue('a', 'foobar');
GM_setValue('b', 123);
GM_setValue('c', true);
GM_setValue('d', null);
// NG: GM_setValue('x', new Date());

var a: string  = GM_getValue('a', 'foobar');
var b: number  = GM_getValue('b', 123);
var c: boolean = GM_getValue('c', true);
var d: any     = GM_getValue('d', null);
var e: string  = GM_getValue('e');
var f: number  = GM_getValue('f');
var g: boolean = GM_getValue('g');
// NG: var x: string  = GM_getValue('x', 123);

GM_deleteValue('d');

GM_listValues().forEach((name: string) => {
    console.log(name + ":", GM_getValue(name));
});

////////////////
// Resources
////////////////

var prototypeSource: string = GM_getResourceText('prototype');
var prototypeURL: string    = GM_getResourceURL('prototype');

////////////////
// Utilities
////////////////

GM_addStyle("body { color: white; background-color: black; } img { border: 0; }");

GM_log("Hello, World!");

GM_openInTab("http://www.example.com/");

GM_registerMenuCommand("Hello, world (simple)", helloSimple);
GM_registerMenuCommand("Hello, world!", hello, "h");
// NG (Old Style): GM_registerMenuCommand("Hello, world! (again)", hello2, "e", "shift alt", "w");
function helloSimple() {}
function hello() {}

GM_setClipboard('http://www.example.com/short-url-code');

////////////////
// XMLHttpRequest
////////////////

//// Examples from Greasemonkey Wiki

// Bare Minimum

GM_xmlhttpRequest({
    method: "GET",
    url: "http://www.example.com/",
    onload: function(response) {
        alert(response.responseText);
    }
});

// GET request

GM_xmlhttpRequest({
    method: "GET",
    url: "http://www.example.net/",
    headers: {
        "User-Agent": "Mozilla/5.0",    // If not specified, navigator.userAgent will be used.
        "Accept": "text/xml"            // If not specified, browser defaults will be used.
    },
    onload: function(response) {
        var responseXML = (<any>response).responseXML;
        // Inject responseXML into existing Object (only appropriate for XML content).
        if (!responseXML) {
            responseXML = new DOMParser()
                .parseFromString(response.responseText, "text/xml");
        }

        GM_log([
            response.status,
            response.statusText,
            response.readyState,
            response.responseHeaders,
            response.responseText,
            response.finalUrl,
            responseXML
        ].join("\n"));
    }
});

// POST request

GM_xmlhttpRequest({
    method: "POST",
    url: "http://www.example.net/login",
    data: "username=johndoe&password=xyz123",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    onload: function(response) {
        if (response.responseText.indexOf("Logged in as") > -1) {
            location.href = "http://www.example.net/dashboard";
        }
    }
});

// HEAD request

GM_xmlhttpRequest({
    url: "http://www.example.com",
    method: "HEAD",
    onload: function(response) {
        GM_log(response.responseHeaders);
    }
});

//// Checkk all options

var result = GM_xmlhttpRequest({
    binary: false,
    context: {},
    data: 'foo=1&bar=2',
    headers: { 'User-Agent': 'greasemonkey' },
    method: 'POST',
    onabort: (response: GMXMLHttpRequestResponse) => { },
    onerror: (response: GMXMLHttpRequestResponse) => { },
    onload: (response: GMXMLHttpRequestResponse) => { },
    onprogress: (response: GMXMLHttpRequestProgressResponse) => { },
    onreadystatechange: (response: GMXMLHttpRequestResponse) => { },
    ontimeout: (response: GMXMLHttpRequestResponse) => { },
    overrideMimeType: 'text/plain',
    password: 'abc123',
    synchronous: false,
    timeout: 10,
    upload: {
        onabort: (response: GMXMLHttpRequestResponse) => { },
        onerror: (response: GMXMLHttpRequestResponse) => { },
        onload: (response: GMXMLHttpRequestResponse) => { },
        onprogress: (response: GMXMLHttpRequestProgressResponse) => { }
    },
    url: 'http://example.com/',
    user: 'guest'
});

//// Check responses

GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://example.com/',
    onload: (response: GMXMLHttpRequestResponse) => {
        var readyState: number      = response.readyState;
        var responseHeaders: string = response.responseHeaders;
        var responseText: string    = response.responseText;
        var status: number          = response.status;
        var statusText: string      = response.statusText;
        var context: any            = response.context;
        var finalUrl: string        = response.finalUrl;
        // NG: var loaded: number   = response.loaded;
    },
    onprogress: (response: GMXMLHttpRequestProgressResponse) => {
        var status: number = response.status;
        var lengthComputable: boolean = response.lengthComputable;
        var loaded: number = response.loaded;
        var total: number = response.total;
    }
});

//// Synchronous

var syncResult: GMXMLHttpRequestSyncResult = GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://example.com/',
    synchronous: true
});

syncResult.abort();
var finalUrl: string        = syncResult.finalUrl;
var readyState: number      = syncResult.readyState;
var responseHeaders: string = syncResult.responseHeaders;
var responseText: string    = syncResult.responseText;
(function() { var status: number = syncResult.status; })();		// conflict with state defined in lib.d.ts
var statusText: string      = syncResult.statusText;

//// Asynchronous

var asyncResult: GMXMLHttpRequestAsyncResult = GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://example.com/',
    synchronous: false
});

asyncResult.abort();
// NG: var status: number = asyncResult.status;
