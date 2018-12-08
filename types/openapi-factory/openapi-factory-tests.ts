import OpenApiFactory = require('openapi-factory');

const api = new OpenApiFactory({});

api.setAuthorizer((req: any) => req);
api.onEvent((req: any) => req);
api.onSchedule((req: any) => req);

const testReponse = {
    statusCode: 200
};

api.head('/v1/test', () => testReponse);
api.get('/v1/test', () => testReponse);
api.post('/v1/test', () => testReponse);
api.put('/v1/test', () => testReponse);
api.patch('/v1/test', () => testReponse);
api.delete('/v1/test', () => testReponse);
api.options('/v1/test', () => testReponse);
api.any('/v1/test2', () => testReponse);

api.head('/v2/test', { rawBody: true }, () => testReponse);
api.get('/v2/test', { rawBody: true }, () => testReponse);
api.post('/v2/test', { rawBody: true }, () => testReponse);
api.put('/v2/test', { rawBody: true }, () => testReponse);
api.patch('/v2/test', { rawBody: true }, () => testReponse);
api.delete('/v2/test', { rawBody: true }, () => testReponse);
api.options('/v2/test', { rawBody: true }, () => testReponse);
api.any('/v2/test2', { rawBody: true }, () => testReponse);
