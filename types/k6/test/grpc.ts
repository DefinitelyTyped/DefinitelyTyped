import grpc from 'k6/net/grpc';

const client = new grpc.Client();

client.connect("hola");
client.connect("localhost:8080", { plaintext: true });

client.close();

client.load(["../googleapis/google"], "language_service.proto");

const req = {
    latitude: 410248224,
    longitude: -747127767,
};
const params = {
    headers: { "x-my-header": "k6test" },
    tags: { k6test: "yes" },
};
const response = client.invoke("main.RouteGuide/GetFeature", req, params);
response.error;
response.headers;
response.message;
response.status;
response.trailers;
