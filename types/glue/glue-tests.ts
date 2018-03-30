import * as Glue from "glue";
import * as Hapi from "hapi";

const manifest: Glue.Manifest = {
  server: {
    port: 3000
  },
  register: {
    plugins: [
      {
        plugin: "./test",
        routes: {
          prefix: "test"
        }
      }
    ]
  }
};

Glue.compose(manifest);
