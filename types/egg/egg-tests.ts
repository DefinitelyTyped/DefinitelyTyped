import { Controller, Service, Application } from 'egg';

// controller
class FooController extends Controller {
  async getData() {
    this.ctx.body = await this.service.foo.bar();
  }
}

// add user controller and service
declare module 'egg' {
  interface Controllers {
    foo: FooController;
  }
  interface Services {
    foo: FooService;
  }
}

class FooService extends Service {
  async bar() {
    //
    return this.config.env;
  }
}

// router

function router(app: Application) {
  const controller = app.controller;
  app.get('/foo', controller.foo.getData);
  app.post('/', controller.foo.getData);
}
