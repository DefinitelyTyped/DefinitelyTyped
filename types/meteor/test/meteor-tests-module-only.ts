// This file is for tests that involve modules that don't have corresponding
// globals.

import { fetch, Headers, Request, Response } from 'meteor/fetch';
import { Promise as MeteorPromise } from 'meteor/promise';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { WebApp } from 'meteor/webapp';

const headers = new Headers({ 'Content-Type': 'application/json' });
const request = new Request('https://github.com', { headers });
const reply: Promise<Response> = fetch(request);

function foo(x: string | number) {
    return `${x}`;
}

// $ExpectType Promise<string>
MeteorPromise.async(foo, false)(1);

// $ExpectType string
MeteorPromise.async(foo, false)(1).await();

// $ExpectType Promise<string>
MeteorPromise.asyncApply(foo, null, [1]);

// $ExpectType string
MeteorPromise.asyncApply(foo, null, [1]).await();

async function bar() {
    return 1;
}

// $ExpectType number
MeteorPromise.await(bar());

// $ExpectType number[]
MeteorPromise.awaitAll([bar()]);

/**
 * From Webapp
 */
// Listen to incoming HTTP requests (can only be used on the server).
WebApp.connectHandlers.use('/hello', (req, res, next) => {
    res.writeHead(200);
    res.end(`Hello world from: ${Meteor.release}`);
});

WebApp.addRuntimeConfigHook(({arch, request, encodedCurrentConfig, updated}) => {
    // check the request to see if this is a request that requires
    // modifying the runtime configuration
    if (request.headers.domain === 'calling.domain') {
        // make changes to the config for this domain
        // decode the current runtime config string into an object
        const config = WebApp.decodeRuntimeConfig(encodedCurrentConfig) as { newVar?: string, oldVar?: string };
        // make your changes
        config.newVar = 'some value';
        config.oldVar = 'new value';
        // encode the modified object to the runtime config string
        // and return it
        return WebApp.encodeRuntimeConfig(config);
    }
    // Not modifying other domains so return undefined
    return undefined;
});
