import { IncomingMessage, Server, ServerResponse } from "http";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify-jwt";

const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> = {
  jwt: {
    decode: (token, options) => {
      return token;
    },
    secret: "some-string",
    sign: (payload, options) => {
      return JSON.stringify(payload);
    },
    verify: (token, options) => {
      return token;
    },
  },
};

const req: FastifyRequest<IncomingMessage> = {
  jwtVerify: (_options) => {
    return req;
  },
};

const res: FastifyReply<ServerResponse> = {
  jwtSign: (_payload, _options, _next) => {
    return res;
  },
};

fastify.jwt.sign({ a: "b" }, {}, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

fastify.jwt.sign("string", { algorithm: "some-algorithm" }, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

fastify.jwt.sign([], {}, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

fastify.jwt.sign(9999, {}, (err, token) => {
  if (err) {
    throw err;
  }

  return token;
});

fastify.jwt.decode("some-token");
fastify.jwt.decode("some-token");
fastify.jwt.secret = "some-secret";
fastify.jwt.verify("some-token", {}, (err) => {
  if (err) {
    throw err;
  }

  return true;
});

req.jwtVerify();
req.jwtVerify({});
req.jwtVerify({}, () => "string");
req.jwtVerify(() => "string", () => "string");

res.jwtSign("payload");
res.jwtSign("payload", {});
res.jwtSign("payload", {}, () => "string");
res.jwtSign({ a: "b" }, {}, () => "string");
res.jwtSign([], {}, () => "string");
res.jwtSign(9999, {}, () => "string");
res.jwtSign("payload", () => "string", () => "string");
