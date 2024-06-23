import * as express from "express";
import * as swaggerJSDoc from "swagger-jsdoc";

const app = express();

const options: swaggerJSDoc.OAS3Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Sample REST API",
            description: "API description",
            version: "1.0.0",
        },
        servers: [
            { url: "/api/v1", description: "API version 1 URL" },
            { url: "/api/v2", description: "API version 2 URL" },
        ],
        components: {
            schemas: {
                User: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                        },
                        username: {
                            type: "string",
                        },
                    },
                },
            },
        },
        tags: [
            {
                name: "my tag",
                description: "tag description",
            },
        ],
        externalDocs: {
            url: "https://example.com",
            description: "API external documentation",
        },
    },
    apis: ["./example/routes*.js", "./example/parameters.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

// prettier-ignore
app.get("/api-docs.json", function(req, res) {
    res.send(swaggerSpec);
});

app.listen(8888);
