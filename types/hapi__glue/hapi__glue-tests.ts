import * as Glue from "@hapi/glue";
import * as Hapi from "@hapi/hapi";

const manifest: Glue.Manifest = {
  server: {
    port: 3000
  },
  register: {
    plugins: [
      "./test-plugin.js",
      {
        plugin: "./test.js",
        routes: {
          prefix: "test"
        }
      },
      {
        plugin: {
          name: 'test',
          register: (server, options) => {}
        }
      }
    ]
  }
};

Glue.compose(manifest);
