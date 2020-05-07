import XHRAdapter from '@pollyjs/adapter-xhr';
import { Polly } from '@pollyjs/core';

Polly.register(XHRAdapter);

new Polly('<recording>', {
    adapters: ['xhr', XHRAdapter],
});
