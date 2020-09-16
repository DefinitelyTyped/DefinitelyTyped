/**
 * Typescript definition tests for stremio-addon-sdk module
 *
 * Note: These tests are intended to test functionality only.
 * They are not intended as definition tests.
 */

import landingTemplate from 'stremio-addon-sdk/src/landingTemplate';
landingTemplate; // $ExpectType (addonInterface: Manifest) => string

import { Manifest, addonBuilder, publishToCentral, serveHTTP } from 'stremio-addon-sdk';

const manifest: Manifest = {
    id: '',
    name: '',
    description: '',
    version: '',
    resources: [],
    types: [],
    catalogs: [],
};
manifest; // $ExpectType Manifest

const builder = new addonBuilder(manifest); // $ExpectType addonBuilder

builder.defineCatalogHandler(() => Promise.resolve({ metas: [] })); // $ExpectType void
builder.defineMetaHandler(() => // $ExpectType void
    Promise.resolve({
        meta: {
            id: '',
            name: '',
            type: 'channel',
        },
    }),
);
builder.defineResourceHandler({ id: '', type: 'channel' }); // $ExpectType Promise<{ addons: AddonCatalog[]; } & Cache>
builder.defineStreamHandler(() => Promise.resolve({ streams: [] })); // $ExpectType void
builder.defineSubtitlesHandler(() => Promise.resolve({ subtitles: [] })); // $ExpectType void

const addonInterface = builder.getInterface(); // $ExpectType AddonInterface

publishToCentral(''); // $ExpectType void
serveHTTP(addonInterface, { port: 1337 }); // $ExpectType void
