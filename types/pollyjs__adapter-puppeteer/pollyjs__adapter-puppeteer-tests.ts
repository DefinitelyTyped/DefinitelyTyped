import PuppeteerAdapter from '@pollyjs/adapter-puppeteer';
import { Polly } from '@pollyjs/core';

Polly.register(PuppeteerAdapter);

new Polly('<recording>', {
    adapters: ['puppeteer', PuppeteerAdapter],
});
