import loopback = require('loopback');
import boot = require('loopback-boot');
import cookieParser = require('cookie-parser');

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
