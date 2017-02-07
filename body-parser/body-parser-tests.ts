import * as bodyParser from 'body-parser';
import * as express from 'express';

const app = express();

express.use(bodyParser.json());
express.use(bodyParser.raw());
express.use(bodyParser.text());
express.use(bodyParser.urlencoded());
