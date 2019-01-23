import path = require("path");
import fastify = require("fastify");
import fastifyFavicon = require("fastify-favicon");

const app = fastify();

app.register<fastifyFavicon.FastifyFaviconOptions>(fastifyFavicon, {
  path: path.join(__dirname, "public"),
});
