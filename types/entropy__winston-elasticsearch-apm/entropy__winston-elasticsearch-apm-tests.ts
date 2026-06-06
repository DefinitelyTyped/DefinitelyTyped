import ElasticsearchApm from "@entropy/winston-elasticsearch-apm";
import Agent from "elastic-apm-node";

// $ExpectType Agent
const apm = Agent.start({
    serviceName: "app",
    serverUrl: "http://localhost:8200",
});

// $ExpectType ElasticsearchApm
export const elasticsearchApm = new ElasticsearchApm({ apm });
