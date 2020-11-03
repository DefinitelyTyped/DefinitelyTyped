import FetchAdapter from '@pollyjs/adapter-fetch';
import { Polly } from '@pollyjs/core';

Polly.register(FetchAdapter);

new Polly('<recording>', {
    adapters: ['xhr', FetchAdapter]
});
