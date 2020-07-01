import * as express from 'express';
import * as versionRequest from 'express-version-request';

const app = express();

app.use(versionRequest.setVersion('1.2.3'));

app.use(versionRequest.setVersionByHeader());
app.use(versionRequest.setVersionByHeader('My-HTTP-Header-Name'));

app.use(versionRequest.setVersionByQueryParam());
app.use(versionRequest.setVersionByQueryParam('myQueryParam'));

const queryParamOptions: versionRequest.SetVersionByQueryParamOptions = { removeQueryParam: true };
app.use(versionRequest.setVersionByQueryParam('myQueryParam', queryParamOptions));

const customParsingFunction: versionRequest.CustomParsingFunction = (header) => "1.2.3";
app.use(versionRequest.setVersionByAcceptHeader());
app.use(versionRequest.setVersionByAcceptHeader(customParsingFunction));

const formattedVersion1 = versionRequest.formatVersion("1.2.3.4.5");
const formattedVersion2 = versionRequest.formatVersion({ v: '1.2.3.4.5' });
