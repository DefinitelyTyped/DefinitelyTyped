import SocketIo = require('socket.io');
import jwtAuth = require('socketio-jwt-auth');

const io = SocketIo();
declare const User: {
    findOne: (options: { id: number }, callback: (err: Error, user: any) => void) => void
};

// using middleware
io.use(jwtAuth.authenticate({
  secret: 'Your Secret',    // required, used to verify the token's signature
  algorithm: 'HS256',        // optional, default to be HS256
  succeedWithoutToken: true
}, (payload: any, done) => {
  // you done callback will not include any payload data now
  // if no token was supplied
  if (payload && payload.sub) {
    User.findOne({id: payload.sub}, (err, user) => {
      if (err) {
        // return error
        done(err);

        return;
      }
      if (!user) {
        // return fail with an error message
        done(null, false, 'user does not exist');

        return;
      }
      // return success with a user info
      done(null, user);

      return;
    });
  } else {
    done(); // in your connection handler user.logged_in will be false

    return;
  }
}));
