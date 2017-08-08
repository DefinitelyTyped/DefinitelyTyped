import Hapi = require('hapi');
import hapiAuthJwt2 = require('hapi-auth-jwt2');

const server = new Hapi.Server();
server.connection({port: 8000});

interface User {
  id: number;
  name: string;
}

interface Users {
  [id: number]: User;
}

const users: Users = {
  1: {
    id: 1,
    name: 'Test User'
  }
};

function validate(decoded: User, request: Hapi.Request, callback: hapiAuthJwt2.ValidateCallback) {
  if (!users[decoded.id]) {
    return callback(null, false);
  }

  return callback(null, true);
}

server.register(hapiAuthJwt2, err => {
  const options: hapiAuthJwt2.Options = {
    key: 'NeverShareYourSecret',
    validateFunc: validate,
    verifyOptions: {
      algorithms: ['HS256']
    }
  };
  server.auth.strategy('jwt', 'jwt', options);
});

server.start();
