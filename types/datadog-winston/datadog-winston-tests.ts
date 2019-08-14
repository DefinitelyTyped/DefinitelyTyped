import { DataDogTransport } from "datadog-winston";

const logger = new DataDogTransport({
    apiKey: "<key>",
    ddsource: "node.js",
    ddtags: "key:value",
    hostname: "hostname",
    level: "error",
    service: "service"
});
