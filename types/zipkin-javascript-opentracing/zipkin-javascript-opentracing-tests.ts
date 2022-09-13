import ZipkinOpentracing = require("zipkin-javascript-opentracing");
const zipkinBaseUrl = "http://zipkin.danielmschmidt.de";

// Setup the tracer
const tracer = new ZipkinOpentracing({
    serviceName: "zipkin-opentracing-service",
    endpoint: zipkinBaseUrl,
    kind: "client"
});
