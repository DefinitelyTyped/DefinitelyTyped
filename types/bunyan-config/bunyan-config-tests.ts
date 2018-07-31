import * as bunyan from "bunyan";
import bunyanConfig = require("bunyan-config");

var jsonConfig = {
    name: "myLogger",
    streams: [{
        stream: "stdout"
    }, {
        stream: { name: "stderr" }
    }, {
        type: "raw",
        stream: {
            name: "bunyan-logstash",
            params: {
                host: "localhost",
                port: 5005
            }
        }
    }, {
        type: "raw",
        stream: {
            name: "bunyan-redis",
            params: {
                host: "localhost",
                port: 6379
            }
        }
    }], serializers: {
        req: "bunyan:stdSerializers.req",
        fromNodeModules: "someNodeModule",
        fromNodeModulesWithProps: "someNodeModule:a.b.c",
        custom: "./lib/customSerializers:custom",
        another: "./lib/anotherSerializer",
        absolutePath: "/path/to/serializer:xyz"
    }
};

var config = bunyanConfig(jsonConfig);
var logger = require("bunyan").createLogger(bunyanConfig);
