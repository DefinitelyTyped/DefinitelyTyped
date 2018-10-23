import * as glue from "glue";
import * as hapi from "hapi";

const serverOptions: hapi.ServerOptions = {
  debug: false
};

const serverConnectionOptions: hapi.ServerConnectionOptions = {
  port: 3000
};

const manifest: glue.Manifest = {
  server: serverOptions,
  connections: [ serverConnectionOptions ],
  registrations: [
    {
      plugin: "./test.js",
    },
    {
      plugin: {
	register: "test",
	options: {
	  foo: "bar"
	}
      }
    }
  ],
};

const options: glue.Options = {
  relativeTo: `${__dirname}/modules`
};

glue.compose(manifest, options);
