import * as express from 'express';
import * as shrinkRay from 'shrink-ray';

const app = express();

app.use(shrinkRay());
