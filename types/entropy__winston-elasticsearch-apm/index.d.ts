import Agent = require("elastic-apm-node");
import TransportStream = require("winston-transport");

declare class ElasticsearchApm extends TransportStream {
    constructor(opts: ElasticsearchApm.ElasticsearchApmOptions);

    log(info: any, next: () => void): any;
}

declare namespace ElasticsearchApm {
    interface ElasticsearchApmOptions extends TransportStream.TransportStreamOptions {
        apm: typeof Agent;
    }
}

export = ElasticsearchApm;
