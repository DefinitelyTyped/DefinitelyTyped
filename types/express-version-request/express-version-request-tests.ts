import * as express from 'express';
import * as versionRequest from 'express-version-request';

const app = express();

app.use(versionRequest.setVersion('1.2.3'));

app.use(versionRequest.setVersionByHeader());
app.use(versionRequest.setVersionByHeader('My-HTTP-Header-Name'));

app.use(versionRequest.setVersionByQueryParam());
app.use(versionRequest.setVersionByQueryParam('myQueryParam'));
app.use(versionRequest.setVersionByQueryParam('myQueryParam', { removeQueryParam: true }));

const customParsingFunction: versionRequest.CustomParsingFunction = (header) => "1.2.3";
app.use(versionRequest.setVersionByAcceptHeader());
app.use(versionRequest.setVersionByAcceptHeader(customParsingFunction));
