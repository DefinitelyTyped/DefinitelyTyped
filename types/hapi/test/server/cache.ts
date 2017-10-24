
// From https://hapijs.com/api/16.1.1#servercacheoptions

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

const cache = server.cache({ segment: 'countries', expiresIn: 60 * 60 * 1000 });
cache.set('norway', { capital: 'oslo' }, null, (err) => {

    cache.get('norway', (err, value, cached, log) => {

        // value === { capital: 'oslo' };
    });
});

// provision
// From https://hapijs.com/api/16.1.1#servercacheprovisionoptions-callback

server.initialize((err) => {

    server.cache.provision({ engine: require('catbox-memory'), name: 'countries' }, (err) => {

        const cache = server.cache({ cache: 'countries', expiresIn: 60 * 60 * 1000 });
        cache.set('norway', { capital: 'oslo' }, null, (err) => {

            cache.get('norway', (err, value, cached, log) => {

                // value === { capital: 'oslo' };
            });
        });
    });
});
