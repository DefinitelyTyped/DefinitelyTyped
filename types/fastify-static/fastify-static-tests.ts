import path = require("path");
import fastify = require("fastify");
import fastifyStatic = require("fastify-static");

const app = fastify();

app.register<fastifyStatic.FastifyStaticOptions>(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/public/", // optional: default '/'
    immutable: true,
    maxAge: 42
});

app.get("/another/path", (req, reply) => {
    reply.sendFile("myHtml.html"); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});
