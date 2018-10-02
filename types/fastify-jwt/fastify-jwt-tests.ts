import { IncomingMessage, Server, ServerResponse } from "http";
import fastifyJwt = require("fastify-jwt");
import fastify = require("fastify");

const app = fastify();

app.register<fastifyJwt.FastifyJwtOptions>(fastifyJwt, {
  secret: "super-secret"
});

app.register<fastifyJwt.FastifyJwtOptions>(fastifyJwt, {
  secret: (request, reply, callback) => {
    return "";
  }
});

app.get("/path", (request, reply) => {
  request.jwtVerify();
  request.jwtVerify({});
  request.jwtVerify({}, () => "string");
  request.jwtVerify(() => "string", () => "string");

  reply.jwtSign("payload");
  reply.jwtSign("payload", {});
  reply.jwtSign("payload", {}, () => "string");
  reply.jwtSign({ a: "b" }, {}, () => "string");
  reply.jwtSign([], {}, () => "string");
  reply.jwtSign(new Buffer("buffer"), {}, () => "string");
  reply.jwtSign("payload", () => "string", () => "string");
});

app.jwt.sign({ a: "b" }, {}, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

app.jwt.sign("string", { algorithm: "some-algorithm" }, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

app.jwt.sign([], {}, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

app.jwt.sign(new Buffer("buffer"), {}, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

app.jwt.decode("some-token");
app.jwt.decode("some-token");
app.jwt.secret = "some-secret";
app.jwt.verify("some-token", {}, (err) => {
  if (err) {
    throw err;
  }

  return true;
});
