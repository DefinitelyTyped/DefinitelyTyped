/**
 * Typescript definition tests for stremio-addon-sdk module
 *
 * Note: These tests are intended to test functionality only.
 * They are not intended as definition tests.
 */

import landingTemplate from 'stremio-addon-sdk/src/landingTemplate';
landingTemplate; // $ExpectType (addonInterface: Manifest) => string

import {
    Manifest,
    addonBuilder,
    publishToCentral,
    serveHTTP,
    AddonCatalog,
    AddonInterface,
    Args,
    Cache,
    ContentType,
    Extra,
    ShortManifestResource,
    FullManifestResource,
    ManifestCatalog,
    ManifestExtra,
    MetaPreview,
    MetaDetail,
    MetaLink,
    MetaVideo,
    Stream,
    Subtitle,
    getRouter
} from 'stremio-addon-sdk';

const manifest: Manifest = {
    id: '',
    name: '',
    description: '',
    version: '',
    resources: [],
    types: [],
    catalogs: [],
};
// $ExpectType Manifest
manifest;
const builder = new addonBuilder(manifest);

// $ExpectType addonBuilder
builder;

// $ExpectType void
builder.defineCatalogHandler(() => Promise.resolve({
    metas: []
}));

// $ExpectType void
builder.defineMetaHandler(() =>
    Promise.resolve({
        meta: {
            id: '',
            name: '',
            type: 'channel',
        },
    }),
);

// $ExpectType Promise<{ addons: AddonCatalog[]; } & Cache>
builder.defineResourceHandler({
    id: '',
    type: 'channel'
});

// $ExpectType void
builder.defineStreamHandler(() => Promise.resolve({
    streams: []
}));

// $ExpectType void
builder.defineSubtitlesHandler(() => Promise.resolve({
    subtitles: []
}));

// $ExpectType AddonInterface
const addonInterface = builder.getInterface();

// $ExpectType void
publishToCentral('');

// $ExpectType void
serveHTTP(addonInterface, {
    port: 1337
});

const addonCatalog: AddonCatalog = {
    transportName: "",
    transportUrl: "",
    manifest
};

// $ExpectType AddonCatalog
addonCatalog;

const addon: AddonInterface = {
    manifest,
    async get(args: { resource: ShortManifestResource } & Args) {}
};

// $ExpectType AddonInterface
addon;

// $ExpectType any
getRouter(addon);

const shortResource: ShortManifestResource[] = ['catalog', 'meta', 'stream', 'subtitles', 'addon_catalog'];

// $ExpectType ShortManifestResource[]
shortResource;

const emptyCache: Cache = {};

// $ExpectType Cache
emptyCache;

const filledCache: Cache = {
    cacheMaxAge: 0,
    staleRevalidate: 0,
    staleError: 0
};

// $ExpectType Cache
filledCache;

const contentTypes: ContentType[] = ['movie', 'series', 'channel', 'tv'];

// $ExpectType ContentType[]
contentTypes;

const extras: Extra[] = ['search', 'genre', 'skip'];

// $ExpectType Extra[]
extras;

const args: Args = {
    type: contentTypes[0],
    id: "",
    extra: {
        genre: "Action",
        search: "",
        skip: 0
    }
};

// $ExpectType Args
args;

// $ExpectType Promise<any>
addon.get({resource: shortResource[0], ...args});

// @ts-expect-error
addon.get(args);

const resource: FullManifestResource = {
    name: shortResource[0],
    types: contentTypes
};

// $ExpectType FullManifestResource
resource;

const manifestExtra: ManifestExtra = {
    name: extras[1],
    options: ["Action", "Comedy", "Drama"],
    isRequired: true
};

// $ExpectType ManifestExtra
manifestExtra;

const catalog: ManifestCatalog = {
    type: contentTypes[0],
    name: "",
    id: "",
    extra: [manifestExtra]
};

// $ExpectType ManifestCatalog
catalog;

const metaPreview: MetaPreview = {
    id: "tt18374950",
    type: "movie",
    name: "Star Wars: Episode IX – The Rise of Skywalker",
    poster: "https://image.tmdb.org/t/p/w342/lFx2i2pg1BoaD7grcpGDyHM1eML.jpg",
    background: "https://image.tmdb.org/t/p/w342/lFx2i2pg1BoaD7grcpGDyHM1eML.jpg",
    logo: "",
    description: "",
};

// $ExpectType MetaPreview
metaPreview;

const metaDetail: MetaDetail = {
    ...metaPreview,
    genres: ["Aventura", "Ficção", "Aventura"],
    releaseInfo: "2020",
    imdbRating: "6.7",
    runtime: "2 h 21 min"
};

// $ExpectType MetaDetail
metaDetail;

const metaLink: MetaLink = {
    name: "",
    category: "",
    url: ""
};

// $ExpectType MetaLink
metaLink;

const metaVideo: MetaVideo = {
    id: "",
    title: "",
    released: ""
};

// $ExpectType MetaVideo
metaVideo;

const stream: Stream = {
    ytId: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE"
};

// $ExpectType Stream
stream;

const subtitle: Subtitle = {
    url: "",
    lang: "english"
};

// $ExpectType Subtitle
subtitle;
