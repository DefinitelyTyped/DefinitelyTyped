import express = require('express');
import jwt = require('express-jwt');
import unless = require('express-unless');

const app = express();

app.use(
    jwt({
        algorithms: ['HS256'],
        secret: 'shhhhhhared-secret',
    }),
);

app.use(
    jwt({
        algorithms: ['HS256'],
        secret: 'shhhhhhared-secret',
        userProperty: 'auth',
    }),
);

app.use(
    jwt({
        algorithms: ['HS256'],
        secret: (req: express.Request, payload: any, done: (err: any, secret: string) => void) => {
            done(null, 'shhhhhhared-secret');
        },
        userProperty: 'auth',
    }),
);

const tenants: Record<string, { secret: string }> = {
    a: {
        secret: 'secret-a',
    },
};
const multiTenancySecretCallback: jwt.SecretCallback = (req, payload, done) => {
    const issuer: string = payload.iss;
    if (tenants[issuer]) {
        done(null, tenants[issuer].secret);
    } else {
        done(new jwt.UnauthorizedError('missing_secret', { message: 'Could not find secret for issuer.' }));
    }
};
app.use(
    jwt({
        algorithms: ['HS256'],
        secret: multiTenancySecretCallback,
    }),
);

app.use(
    jwt({
        algorithms: ['HS256'],
        secret: (req: express.Request, header: any, payload: any, done: (err: any, secret: string) => void) => {
            done(null, 'shhhhhhared-secret');
        },
        userProperty: 'auth',
    }),
);

const jwtCheck = jwt({
    algorithms: ['HS256'],
    secret: 'shhhhhhared-secret',
});
jwtCheck.unless = unless;

app.use(jwtCheck.unless({ path: '/api/login' }));

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err) {
        if (err instanceof jwt.UnauthorizedError) {
            res.status(err.status);
            res.end();
        }
    } else {
        next(new jwt.UnauthorizedError('invalid_token', new Error('error-message')));
    }
});

app.use((req, res) => {
    const user = req.user;
});
