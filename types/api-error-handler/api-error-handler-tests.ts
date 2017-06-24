
import * as errorHandler from 'api-error-handler';
import * as express from 'express';

var api = express.Router();
api.get('/users/:userid', function (req, res, next) {

});

api.use(errorHandler());

let res: errorHandler.Response;
