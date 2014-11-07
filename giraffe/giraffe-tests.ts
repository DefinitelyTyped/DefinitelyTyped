/// <reference path="giraffe.d.ts" />

class User extends Giraffe.Model {
}

class MainView extends Giraffe.View<User> {
  
  constructor(options?) {
    this.appEvents = {
      'startup': 'app_onStartup'
    }
    super(options);
  }

  app_onStartup() {

  }

}

class MyApp extends Giraffe.App {
  constructor() {
    this.routes= {
      '': 'home'
    }
    super();
  }

  home() {
    this.attach(new MainView);
  }

}

var app= new MyApp();

app.start();
