import * as glue from "glue";
import * as hapi from "hapi";

const manifest: glue.Manifest = {
  server: {
    debug: false,
  },
  connections: [
    {
      port: 8000,
      labels: ['web']
    },
    {
      port: 8001,
      labels: ['admin']
    }
  ],
  registrations: [
    {
      plugin: {
        register: './assets',
        options: {
          uglify: true
        }
      }
    },
    {
      plugin: './ui-user',
      options: {
        select: ['web']
      }
    },
    {
      plugin: {
        register: './ui-admin',
        options: {
          sessiontime: 500
        }
      },
      options: {
        select: ['admin'],
        routes: {
          prefix: '/admin'
        }
      }
    },
    {
      plugin: {
        register: require('./awesome-plugin.js'),
        options: {
          whyNot: true
        }
      }
    },
  ]
};

const options: glue.Options = {
  relativeTo: `${__dirname}/modules`
};

glue.compose(manifest, options, (err, server) => {
  if (err) {
    throw err;
  }
  server.start(() => {
    console.log('hapi days!');
  });
});
