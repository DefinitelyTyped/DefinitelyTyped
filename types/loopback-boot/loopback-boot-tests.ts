import * as loopback from 'loopback';
import * as boot from 'loopback-boot';
import * as cookieParser from 'cookie-parser';

class Server {
  app: loopback.LoopBackApplication;

  static boostrap(): Server {
    return new Server();
  }
  constructor() {
    this.app = loopback();

    this.app.use(cookieParser());

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
