import * as Http from 'http';
import * as Hawk from '@hapi/hawk';
import * as request from 'request';

const credentialsFunc = (): Hawk.server.Credentials => {
    const credentials: Hawk.server.Credentials = {
        key: 'werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn',
        algorithm: 'sha256',
        user: 'Steve',
    };

    return credentials;
};

Http.createServer(async (req, res) => {
    const { credentials, artifacts } = await Hawk.server.authenticate(req, credentialsFunc);
    const payload = `Hello ${credentials.user} ${artifacts.ext}`;
    const status = 200;

    const headers: Record<string, string> = { 'Content-Type': 'text/plain' };
    const header = Hawk.server.header(credentials, artifacts, { payload, contentType: headers['Content-Type'] });
    headers['Server-Authorization'] = header;

    res.writeHead(status, headers);
    res.end(payload);
});

const credentials: Hawk.client.Credentials = {
    id: 'dh37fgj492je',
    key: 'werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn',
    algorithm: 'sha256',
};

const requestOptions: request.OptionsWithUri = {
    uri: 'http://example.com:8000/resource/1?b=1&a=2',
    method: 'GET',
    headers: {},
};

const header = Hawk.client.header('http://example.com:8000/resource/1?b=1&a=2', 'GET', {
    credentials,
    ext: 'some-app-data',
});
requestOptions.headers!.Authorization = header;

request(requestOptions, (_error, response, body) => {
    Hawk.client.authenticate(response, credentials, header.artifacts, { payload: body });
});
