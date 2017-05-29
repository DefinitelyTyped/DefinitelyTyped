import * as passport from 'passport';
import * as express from 'express';
import 'express-session';

class TestStrategy implements passport.Strategy {
  public name: string = 'test';
  constructor() { }
  authenticate(req: express.Request) { }
}

const newFramework:passport.Framework = {
  initialize: function () {
    return function () { };
  },
  authenticate: function (passport, name, options) {
    return function () {
      return 'authenticate(): ' + name + ' ' + options;
    };
  },
  authorize: function (passport, name, options) {
    return function () {
      return 'authorize(): ' + name + ' ' + options;
    }
  }
};
passport.use(new TestStrategy());
passport.framework(newFramework);

interface TestUser {
  id: number;
}
passport.serializeUser((user: TestUser, done: (err: any, id?: number) => void) => {
  done(null, user.id);
});
passport.serializeUser<TestUser, number>((user, done) => {
  if (user.id > 0) {
    done(null, user.id);
  } else {
    done(new Error('user ID is invalid'));
  }
});
passport.deserializeUser((id, done) => {
  done(null, {id});
});
passport.deserializeUser<TestUser, number>((id, done) => {
  const fetchUser = (id: number): Promise<TestUser> => {
    return Promise.reject(new Error(`user not found: ${id}`));
  };

  fetchUser(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

passport.use(new TestStrategy())
  .unuse('test')
  .use(new TestStrategy())
  .framework(newFramework);


var app = express();
app.configure(() => {
  app.use(passport.initialize());
  app.use(passport.session());
});

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  function (req, res) {
    res.redirect('/');
  });

app.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err: any, user: { username: string; }, info: { message: string; }) {
    if (err) { return next(err) }
    if (!user) {
      if (req.session) {
        req.session['error'] = info.message;
      }
      return res.redirect('/login')
    }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.post('/auth/token', passport.authenticate(['basic', 'oauth2-client-password'], { session: false }));


function authSetting(): void {
  var authOption = {
    successRedirect: '/',
    failureRedirect: '/login',
  };
  var successCallback = (req: express.Request, res: express.Response) => {
    res.redirect('/');
  };

  app.get('/auth/facebook',
      passport.authenticate('facebook'));
  app.get('/auth/facebook/callback',
      passport.authenticate('facebook', authOption), successCallback);

  app.get('/auth/twitter',
      passport.authenticate('twitter'));
  app.get('/auth/twitter/callback',
      passport.authenticate('twitter', authOption));

  app.get('/auth/google',
    passport.authenticate('google', {
      scope:
      ['https://www.googleapis.com/auth/userinfo.profile']
    }));
  app.get('/auth/google/callback',
      passport.authenticate('google', authOption), successCallback);

}

function ensureAuthenticated(req: express.Request, res: express.Response, next: (err?: any) => void) {
  if (req.isAuthenticated()) { return next(); }
  if (req.isUnauthenticated()) {
    res.redirect('/login');
  }
}

const passportInstance: passport.Passport = new passport.Passport()
passportInstance.use(new TestStrategy())

const authenticator: passport.Passport = new passport.Authenticator()
authenticator.use(new TestStrategy())