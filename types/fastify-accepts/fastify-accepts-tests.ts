import fastify = require("fastify");
import fastifyAccepts = require("fastify-accepts");

const app = fastify();

app.register<fastifyAccepts.FastifyAcceptsOptions>(fastifyAccepts, {
    decorateReplyToo: true
});

app.post("/", (req, reply) => {
    const accept = req.accepts(); // Accepts object
    switch (accept.type(["json", "html"])) {
        case "json":
            reply.type("application/json").send({ hello: "world" });
            break;
        case "html":
            reply.type("text/html").send("<b>hello, world!</b>");
            break;
        default:
            reply.send("unacceptable");
            break;
    }
});

app.post("/", (req, reply) => {
    req.charset(["utf-8"]);
    req.charsets();
    req.encoding(["gzip", "compress"]);
    req.encodings();
    req.language(["es", "en"]);
    req.languages();
    req.type(["image/png", "image/tiff"]);
    req.types();
});

app.post("/", (req, reply) => {
    reply.requestAccepts();

    reply.requestCharset(["utf-8"]);
    reply.requestCharsets();
    reply.requestEncoding(["gzip", "compress"]);
    reply.requestEncodings();
    reply.requestLanguage(["es", "en"]);
    reply.requestLanguages();
    reply.requestType(["image/png", "image/tiff"]);
    reply.requestTypes();
});
