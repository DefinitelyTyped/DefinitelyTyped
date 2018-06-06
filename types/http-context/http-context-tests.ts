import http = require('http');
import httpContext = require('http-context');

const context: httpContext.Context = httpContext();
const request: httpContext.Request = context.request;
const response: httpContext.Response = context.response;

let header: http.IncomingHttpHeaders = context.header;
header = context.headers;
header = request.header;
header = request.headers;
const headerString: string | string[] | undefined = header['Content-Type'];

let url: string = context.url;
url = request.url;
context.accepts('html');

let href: string = context.href;
href = request.href;

let method: string = context.method;
method = request.method;

let path: string = context.path;
path = request.path;

let query: {[param: string]: string | string[]} = context.query;
query = request.query;
const querySearch: string | string[] = query['search'];

let queryString: string = context.querystring;
queryString = request.querystring;

let search: string = context.search;
search = request.search;

let host: string = context.host;
host = request.host;

let hostname: string = context.hostname;
hostname = request.hostname;

let fresh: boolean = context.fresh;
fresh = request.fresh;

let idempotent: boolean = context.idempotent;
idempotent = request.idempotent;

let protocol: string = context.protocol;
protocol = request.protocol;

let secure: boolean = context.secure;
secure = request.secure;

let subdomains: string[] = context.subdomains;
subdomains = request.subdomains;

let accepts: string[] | string | false = context.accepts('text/html');
accepts = request.accepts('text/html');
accepts = request.accepts('text/html', 'text/txt');
accepts = request.accepts(['text/html', 'text/txt']);

let status: number = context.status;
status = response.status;

let message: string = context.message;
message = response.message;

let body: any = context.body;
body = response.body;

let length: number = context.length;
length = response.length;
