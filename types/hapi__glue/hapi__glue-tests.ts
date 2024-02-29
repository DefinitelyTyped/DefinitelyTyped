import * as Glue from "@hapi/glue";

const manifest: Glue.Manifest = {
    server: {
        port: 3000,
    },
    register: {
        plugins: [
            "./test-plugin.js",
            {
                plugin: "./test.js",
                routes: {
                    prefix: "test",
                },
            },
            {
                plugin: {
                    name: "test",
                    register: (server, options) => {},
                },
            },
        ],
    },
};

Glue.compose(manifest);
