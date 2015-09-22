/// <reference path="atmosphere.d.ts" />

var socket = atmosphere;

var request1:Atmosphere.Request = new atmosphere.AtmosphereRequest();

request1.url = document.location.toString() + 'chat';
request1.contentType = "application/json";
request1.transport = 'websocket';
request1.fallbackTransport = 'long-polling';

var request2:Atmosphere.Request = {
    url: 'http://localhost:8080/chat',
    contentType: "application/json",
    logLevel: 'debug',
    transport: 'websocket',
    fallbackTransport: 'long-polling'
};

request1.onError = function (response?:Atmosphere.Response) {};
request1.onClose = function (response?:Atmosphere.Response) {};
request1.onOpen = function (response?:Atmosphere.Response) {};
request1.onMessage = function (response:Atmosphere.Response) {};
request1.onReopen = function (request?:Atmosphere.Request, response?:Atmosphere.Response) {};
request1.onReconnect = function (request?:Atmosphere.Request, response?:Atmosphere.Response) {};
request1.onMessagePublished = function (response?:Atmosphere.Response) {};
request1.onTransportFailure = function (reason?:string, response?:Atmosphere.Response) {};
request1.onLocalMessage = function (request?:Atmosphere.Request) {};
request1.onFailureToReconnect = function (request?:Atmosphere.Request, response?:Atmosphere.Response) {};
request1.onClientTimeout = function (request?:Atmosphere.Request) {};

request1.subscribe = function (options:Atmosphere.Request) {};
request1.execute = function () {};
request1.close = function () {};
request1.disconnect = function () {};
request1.getUrl = function ():string { return "http://www.toedter.com" };
request1.push = function (message:string, dispatchUrl?:string) {};
request1.getUUID = function () {};
request1.pushLocal = function (message:string) {};

var subSocket:Atmosphere.Request = socket.subscribe(request1);
var subSocket2:Atmosphere.Request = socket.subscribe('http://chat.com', function() {}, request2);
subSocket2.close();

subSocket.push("test");
socket.unsubscribe();