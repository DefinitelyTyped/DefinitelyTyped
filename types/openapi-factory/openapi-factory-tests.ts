import OpenApiFactory = require('openapi-factory');

const api = new OpenApiFactory({});

api.setAuthorizer((req: any) => req);
api.onEvent((req: any) => req);
api.onSchedule((req: any) => req);

/* tslint:disable-next-line:no-unnecessary-generics */
function getResponse<T>(request: OpenApiFactory.HttpRequest<T>) {
    return {
        statusCode: 200,
        body: request.body ? request.body.toString() : null
    };
}

api.head<string, string>('/v1/test', getResponse);
api.get<string, string>('/v1/test', getResponse);
api.post<string, string>('/v1/test', getResponse);
api.put<string, string>('/v1/test', getResponse);
api.patch<string, string>('/v1/test', getResponse);
api.delete<string, string>('/v1/test', getResponse);
api.options<string, string>('/v1/test', getResponse);
api.any<string, string>('/v1/test2', getResponse);

api.head<string, string>('/v2/test', { rawBody: true }, getResponse);
api.head<string, string>('/v2/test', { rawBody: true }, getResponse);
api.get<string, string>('/v2/test', { rawBody: true }, getResponse);
api.post<string, string>('/v2/test', { rawBody: true }, getResponse);
api.put<string, string>('/v2/test', { rawBody: true }, getResponse);
api.patch<string, string>('/v2/test', { rawBody: true }, getResponse);
api.delete<string, string>('/v2/test', { rawBody: true }, getResponse);
api.options<string, string>('/v2/test', { rawBody: true }, getResponse);
api.any<string, string>('/v2/test2', { rawBody: true }, getResponse);
