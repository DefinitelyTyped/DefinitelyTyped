

class User extends Giraffe.Model {
}

class MainView extends Giraffe.View<User> {
  
  constructor(options?) {
    super(options);
    this.appEvents = {
      'startup': 'app_onStartup'
    }
  }

  app_onStartup() {

  }

}

class MyApp extends Giraffe.App {
  constructor() {
    super();
    this.routes= {
      '': 'home'
    }
  }

  home() {
    this.attach(new MainView);
  }

}

var app= new MyApp();

app.start();
