// Type definitions for @entropy/winston-elasticsearch-apm 1.0
// Project: https://gitlab.entropy.cc/entropy/winston-elasticsearch-apm
// Definitions by: Michael Vasyliv <https://github.com/michael-vasyliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Agent = require('elastic-apm-node');
import TransportStream = require('winston-transport');

export interface ElasticsearchApmOptions extends TransportStream.TransportStreamOptions {
    apm: typeof Agent;
}

declare class ElasticsearchApm extends TransportStream {
    constructor(opts: ElasticsearchApmOptions);

    log(info: any, next: () => void): any;
}

export default ElasticsearchApm;
