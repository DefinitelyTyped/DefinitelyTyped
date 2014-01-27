/// <reference path="../q/Q.d.ts" />
/// <reference path="Q-io.d.ts" />

var fs:typeof QioFS = require('q-io/fs');
var http:typeof QioHTTP = require('q-io/http');

var bool:boolean;
var num:number;
var x:any;
var path:string;
var buffer:NodeBuffer;
var str:string;
var strArr:string[];
var source:string;
var target:string;
var type:string;

var options:any;
var strArrQ:Q.Promise<string[]>;
var voidQ:Q.Promise<void>;
var anyQ:Q.Promise<any>;
var strQ:Q.Promise<string>;
var boolQ:Q.Promise<boolean>;
var dateQ:Q.Promise<Date>;
var bufferQ:Q.Promise<NodeBuffer>;

var statsQ:Q.Promise<QioFS.Stats>;
var readQ:Q.Promise<Qio.Reader>;
var writeQ:Q.Promise<Qio.Writer>;

var headers:QioHTTP.Headers;
var reader:Qio.Reader;
var writer:Qio.Writer;
var stream:Qio.Stream;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fs.open(path, options).then((x) => {
});
//fs.open(path, options):Q.Promise<Qio.Reader>;
//fs.open(path, options):Q.Promise<Qio.Writer>;
//fs.open(path, options):Q.Promise<NodeBuffer>;

//TODO how to define the multiple return types? use any for now?
anyQ = fs.read(path, options);
//strQ = fs.read(path, options);
//fs.read(path, options):Q.Promise<NodeBuffer>;

voidQ = fs.write(path, buffer, options);
voidQ = fs.write(path, str, options);

voidQ = fs.append(path, buffer, options);
voidQ = fs.append(path, str, options);

voidQ = fs.copy(source, target);
voidQ = fs.copyTree(source, target);

strArrQ = fs.list(path);
strArrQ = fs.listTree(path, (path, x) => {
    return true;
});
strArrQ = fs.listDirectoryTree(path);

voidQ = fs.makeDirectory(path, str);
voidQ = fs.makeDirectory(path, num);
voidQ = fs.makeTree(path, str);
voidQ = fs.makeTree(path, num);

voidQ = fs.remove(path);
voidQ = fs.removeTree(path);

voidQ = fs.rename(source, target);
voidQ = fs.move(source, target);

voidQ = fs.link(source, target);

voidQ = fs.symbolicCopy(source, target, type);
voidQ = fs.symbolicLink(target, str, type);

voidQ = fs.chown(path, num, num);
voidQ = fs.chmod(path, str);
voidQ = fs.chmod(path, num);

statsQ = fs.stat(path)
statsQ = fs.statLink(path);
statsQ = fs.statFd(num);

boolQ = fs.exists(path);

boolQ = fs.isFile(path);
boolQ = fs.isDirectory(path);
boolQ = fs.isSymbolicLink(path);

dateQ = fs.lastModified(path);
dateQ = fs.lastAccessed(path);

strArr = fs.split(path);
str = fs.join(str, str);
str = fs.join(strArr);
str = fs.resolve(str, str);
str = fs.resolve(strArr);
str = fs.normal(str, str);
str = fs.normal(strArr);
str = fs.absolute(path);

strQ = fs.canonical(path);
strQ = fs.readLink(path);

bool = fs.contains(str, str);

strQ = fs.relative(source, target);

str = fs.relativeFromFile(source, target);
str = fs.relativeFromDirectory(source, target);

bool = fs.isAbsolute(path);
bool = fs.isRelative(path);
bool = fs.isRoot(path);

str = fs.root(path);
str = fs.directory(path);
str = fs.base(path, str);
str = fs.extension(path);

//this should return a q-io/fs-mock MockFS
//fs = fs.reroot(str);
x = fs.toObject(str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var request:QioHTTP.Request;
var headers:QioHTTP.Headers;

str = request.url;
str = request.path;
str = request.scriptName;
str = request.pathInfo;
strArr = request.version;
str = request.method;
str = request.scheme;

str = request.host;
num = request.port;
str = request.remoteHost;
num = request.remotePort;

headers = request.headers;
x = request.agent;
x = request.body;
x = request.node;

str = headers['foo'];

var response:QioHTTP.Response;
var responseQ:Q.Promise<QioHTTP.Response>;

responseQ = http.request(request);
responseQ = http.request(str);

strQ = http.read(request);
strQ = http.read(str);

request = http.normalizeRequest(request);
request = http.normalizeRequest(str);
response = http.normalizeResponse(response);

num = response.status;
headers = response.headers;
reader = response.body;
response.onclose = () => {

};
x = response.node;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strQ = reader.read(str);
bufferQ = reader.read();
reader.close();
x = reader.node;
voidQ = reader.forEach((chunk:any) => {
    return anyQ;
});

writer.write(str);
writer.write(buffer);
writer.flush();
writer.close();
x = writer.node;

strQ = stream.read(str);
bufferQ = stream.read();
stream.write(str);
stream.write(buffer);
stream.flush();
stream.close();
x = stream.node;
voidQ = reader.forEach((chunk:any) => {
    return anyQ;
});
