import * as passport from 'passport';
import * as WindowsStrategy from 'passport-windowsauth';

const auth = new passport.Authenticator();
auth.use(new WindowsStrategy({integrated: true}, (profile, done) => {
  console.log(profile);
  done(null, profile);
}));

passport.use(new WindowsStrategy({
    ldap: {
        url: 'ldap://wellscordoba.wellscordobabank.com/DC=wellscordobabank,DC=com',
        base: 'DC=wellscordobabank,DC=com',
        bindDN: 'someAccount',
        bindCredentials: 'andItsPass'
    }
}, (profile, done) => {
    console.log('logged in', profile.id);
    done(null, profile);
}));

passport.use(new WindowsStrategy({
    integrated: true,
    passReqToCallback: true
}, (req, profile, done) => {
    console.log('logged in', req, profile.id);
    done(null, profile);
}));
