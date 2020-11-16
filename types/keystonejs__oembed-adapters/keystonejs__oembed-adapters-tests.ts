import { Keystone } from '@keystonejs/keystone';
import { KnexAdapter } from '@keystonejs/adapter-knex';
import { OEmbed } from '@keystonejs/fields';
import { IframelyOEmbedAdapter } from '@keystonejs/oembed-adapters';

const keystone = new Keystone({
    adapter: new KnexAdapter(),
});

const iframelyAdapter = new IframelyOEmbedAdapter({
    apiKey: '...',
});

keystone.createList('User', {
    fields: {
        portfolio: {
            type: OEmbed,
            adapter: iframelyAdapter,
        },
    },
});
