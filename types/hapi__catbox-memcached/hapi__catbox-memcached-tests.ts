import CatboxMemcached = require('@hapi/catbox-memcached');
import { Server } from '@hapi/hapi';

new CatboxMemcached<string>();

const options: CatboxMemcached.Options = {
    host: 'test',
    port: 0,
    timeout: 0,
    idle: 0,
    partition: 'test',
};

new Server({
    cache: {
        provider: {
            constructor: CatboxMemcached,
            options,
        },
    },
});
