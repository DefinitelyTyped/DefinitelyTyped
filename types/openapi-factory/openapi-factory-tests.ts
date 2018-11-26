import * as OpenApiFactory from 'openapi-factory';

const api = new OpenApiFactory({});

api.setAuthorizer((req: any) => req);
api.onEvent((req: any) => req);
api.onSchedule((req: any) => req);

api.head('/v1/test', () => 'success');
api.get('/v1/test', () => 'success');
api.post('/v1/test', () => 'success');
api.put('/v1/test', () => 'success');
api.patch('/v1/test', () => 'success');
api.delete('/v1/test', () => 'success');
api.options('/v1/test', () => 'success');
api.any('/v1/test2', () => 'success');

api.head('/v2/test', {test: true}, () => 'success');
api.get('/v2/test', {test: true}, () => 'success');
api.post('/v2/test', {test: true}, () => 'success');
api.put('/v2/test', {test: true}, () => 'success');
api.patch('/v2/test', {test: true}, () => 'success');
api.delete('/v2/test', {test: true}, () => 'success');
api.options('/v2/test', {test: true}, () => 'success');
api.any('/v2/test2', {test: true}, () => 'success');
