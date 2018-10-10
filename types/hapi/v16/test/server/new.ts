'use strict';

import * as Hapi from '../../';

new Hapi.Server();
new Hapi.Server({
    app: {some: 'values'},
    cache: require('catbox-redis'),
});

const server = new Hapi.Server({
    cache: require('catbox-redis'),
    load: {
        sampleInterval: 1000
    }
});

// Specific cache configuration options
new Hapi.Server({
    cache: {
      engine: require('catbox-redis'),
      // name: 'optionally omitted when only a single cache used',
    }
});
new Hapi.Server({
    cache: [{
      engine: require('catbox-redis'),
      name: 'unique 1',
    },
    {
        engine: require('catbox-redis'),
        name: 'unique 2',
        shared: true,
        otherOptions: 'will be passed to the catbox strategy',
    }]
});
new Hapi.Server({
    cache: [{
        engine: require('catbox-redis'),
    },
    // Does not correctly error but will be caught by hapi at runtime
    {
        engine: require('catbox-redis'),
    }]
});

//+ Code added in addition to docs
declare module '../../' {
    interface PluginSpecificConfiguration {
        // Set this to non optional if plugin config is non optional
        'some-plugin-name'?: {options: string;};
    }
}
//- Code added in addition to docs

new Hapi.Server({
    connections: {
        app: {},
        compression: false,
        load: {
            maxHeapUsedBytes: 10,
            maxRssBytes: 10,
            maxEventLoopDelay: 10,
        },
        plugins: {
            'some-plugin-name': {options: 'here'},
            coolPlugin: {optionA: ""},
        },
        router: {
            isCaseSensitive: false,
            stripTrailingSlash: true,
        },
        routes: {}
    }
})
