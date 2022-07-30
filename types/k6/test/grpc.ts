import grpc from 'k6/net/grpc';

const client = new grpc.Client();

client.connect('hola');
client.connect('localhost:8080', { plaintext: true });
client.connect('localhost:8080', { plaintext: true, reflect: true });
client.connect('localhost:8080', { timeout: 30 });
client.connect('localhost:8080', { timeout: '30' });

client.close();

client.load(['../googleapis/google'], 'language_service.proto', 'extra_service.proto');

const req = {
    latitude: 410248224,
    longitude: -747127767,
};
const params = {
    metadata: { 'x-my-header': 'k6test' },
    tags: { k6test: 'yes' },
    timeout: 30,
};
const response = client.invoke('main.RouteGuide/GetFeature', req, params);
response.error;
response.headers;
response.message; // $ExpectType object
response.status;
response.trailers;

const params_with_string_timeout = {
    metadata: { 'x-my-header': 'k6test' },
    tags: { k6test: 'yes' },
    timeout: '30',
};
client.invoke('main.RouteGuide/UpdateFeature', req, params_with_string_timeout);

grpc.StatusOK;
grpc.StatusCanceled;
grpc.StatusUnknown;
grpc.StatusInvalidArgument;
grpc.StatusDeadlineExceeded;
grpc.StatusNotFound;
grpc.StatusAlreadyExists;
grpc.StatusPermissionDenied;
grpc.StatusResourceExhausted;
grpc.StatusFailedPrecondition;
grpc.StatusAborted;
grpc.StatusOutOfRange;
grpc.StatusUnimplemented;
grpc.StatusInternal;
grpc.StatusUnavailable;
grpc.StatusDataLoss;
grpc.StatusUnauthenticated;
