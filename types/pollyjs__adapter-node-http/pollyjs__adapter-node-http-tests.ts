import HttpAdapter from '@pollyjs/adapter-node-http';
import { Polly } from '@pollyjs/core';

Polly.register(HttpAdapter);

new Polly('<recording>', {
    adapters: ['node-http', HttpAdapter]
});
