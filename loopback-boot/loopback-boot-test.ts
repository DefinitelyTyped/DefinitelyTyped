/// <reference path="index.d.ts" />

import * as loopback from 'loopback';
import * as express from 'express';
import * as boot from 'loopback-boot';

export class Server {
  app: loopback.LoopBackApplication;

  static boostrap(): Server {
    return new Server();
  }
  constructor() {
    this.app = loopback();

    this.app.start = function() {
      // start the web server
      let server = this.app.listen(function() {
        this.app.emit('started', server);
        const baseUrl = this.app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (this.app.get('loopback-component-explorer')) {
          let explorerPath = this.app.get('loopback-component-explorer').mountPath;
          console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
      });
      return server;
    };
    this.config();
  }

  private config(): void {
    boot(this.app, __dirname, (err: Error) => {
      if (err) throw err;

      // start the server if `$ node server.js`
      if (require.main === module)
        this.app.start();
    });
  }
}