import { Server } from 'hapi';
import * as hapiAuthJwt2 from 'hapi-auth-jwt2';

const server = new Server({port: 8000});

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

server.register({
    plugin: hapiAuthJwt2,
    options: {
        async verify() {
            return {
                isValid: true,
            };
        }
    }
})
.then(() => {
    const opts: hapiAuthJwt2.Options = {
        key: 'NeverShareYourSecret',
        async validate(decoded: { id: number }, request) {
            return {
                isValid: !!users[decoded.id],
            };
        },
        verifyOptions: {
            algorithms: ['HS256'],
            issuer: 'test',
        }
    };
    server.auth.strategy('jwt', 'jwt', opts);
});
