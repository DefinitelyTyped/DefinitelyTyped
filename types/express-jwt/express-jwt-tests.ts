
import express = require('express');
import jwt = require('express-jwt');
import unless = require('express-unless');

var app = express();

app.use(jwt({
    secret: 'shhhhhhared-secret'
}));
app.use(jwt({
    secret: 'shhhhhhared-secret',
    userProperty: 'auth'
}));

var jwtCheck = jwt({
    secret: 'shhhhhhared-secret'
});
jwtCheck.unless = unless;
app.use(jwtCheck.unless({ path: '/api/login' }));

app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    if (err) {
        if (err instanceof jwt.UnauthorizedError) {
            res.status(err.status);
            res.end();
        }
    } else {
        next(err);
    }
});