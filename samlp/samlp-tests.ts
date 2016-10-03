/// <reference path="samlp.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../express/express.d.ts" />

import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import * as samlp from 'samlp';


// Example
const app = express();

app.get('/samlp', samlp.auth({
  issuer:     'the-issuer',
  cert:       fs.readFileSync(path.join(__dirname, 'some-cert.pem')),
  key:        fs.readFileSync(path.join(__dirname, 'some-cert.key')),
  getPostURL: function (wtrealm, wreply, req, cb) {
                return cb( null, 'http://someurl.com')
              }
}));

app.get('/samlp/FederationMetadata/2007-06/FederationMetadata.xml', samlp.metadata({
  issuer:   'the-issuer',
  cert:     fs.readFileSync(path.join(__dirname, 'some-cert.pem')),
}));


app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  samlp.parseRequest(req, (err: any, data: any) => {
    next();
  });
});

