import fastify = require("fastify");
import fastifyMultipart = require("fastify-multipart");

const app = fastify();

app.register<fastifyMultipart.FastifyMultipartOptions>(fastifyMultipart, {
    limits: {
            fieldNameSize: 200,
            fieldSize: 200,
            fields: 200,
            fileSize: 200,
            files: 2,
            headerPairs: 200,
    }
});

app.get("/path", (request) => {
    const isMultiPart = request.isMultipart();
    request.multipart((field, file, filename, encoding, mimetype) => {
        console.log(field, file, filename, encoding, mimetype);
    }, (err) => {
        throw err;
    });
});
