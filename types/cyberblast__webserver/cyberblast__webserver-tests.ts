import { WebServer, ServerContext } from "@cyberblast/webserver";
import { Logger } from "@cyberblast/logger";
import * as Http from "http";
import * as Net from "net";

const server1 = new WebServer(); // $ExpectType WebServer
const server2 = new WebServer(""); // $ExpectType WebServer
const server3 = new WebServer("", ""); // $ExpectType WebServer
server1.start(); // $ExpectType Promise<void>

const request = new Http.IncomingMessage(new Net.Socket());
const response = new Http.ServerResponse(request);

const minContext: ServerContext = {
  server: server1,
  request,
  response
};
const maxContext: ServerContext = {
  server: server2,
  request,
  response,
  client: "",
  data: "",
  logger: new Logger(),
  route: {}
};

server1.respondError("", minContext); // $ExpectType Promise<void>
server2.respondError("", maxContext); // $ExpectType Promise<void>
server1.respondError("", minContext, 0); // $ExpectType Promise<void>
server1.respondError("", minContext, 0, ""); // $ExpectType Promise<void>

server1.stop(); // $ExpectType void
