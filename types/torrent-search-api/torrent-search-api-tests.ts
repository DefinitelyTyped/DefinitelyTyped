import TorrentSearchApi = require("torrent-search-api");

// $ExpectType void
TorrentSearchApi.enableProvider("Torrent9");

// $ExpectType Promise<Torrent[]>
TorrentSearchApi.search("1080", "Movies", 20);

// $ExpectType TorrentProvider[]
TorrentSearchApi.getProviders();

// $ExpectType TorrentProvider[]
TorrentSearchApi.getActiveProviders();

// $ExpectType void
TorrentSearchApi.enablePublicProviders();

// $ExpectType void
TorrentSearchApi.enableProvider("Torrent9");

// $ExpectType void
TorrentSearchApi.enableProvider("IpTorrents", ["uid=XXX;", "pass=XXX;"]);

// $ExpectType void
TorrentSearchApi.enableProvider("IpTorrents", "USERNAME", "PASSWORD");

// $ExpectType void
TorrentSearchApi.enableProvider("xxx", "TOKEN");

// $ExpectType void
TorrentSearchApi.disableProvider("TorrentLeech");

// $ExpectType void
TorrentSearchApi.disableAllProviders();

// $ExpectType boolean
TorrentSearchApi.isProviderActive("1337x");

// $ExpectType Promise<Torrent[]>
TorrentSearchApi.search("1080", "Movies", 20);

// $ExpectType Promise<Torrent[]>
TorrentSearchApi.search(["IpTorrents", "Torrent9"], "1080", "Movies", 20);

const torrent = {
    title: "tile",
    time: "time",
    size: "size",
    magnet: "magnet",
    desc: "desc",
    provider: "provider"
};

// $ExpectType Promise<string>
TorrentSearchApi.getTorrentDetails(torrent);

// $ExpectType Promise<string>
TorrentSearchApi.getMagnet(torrent);

// $ExpectType Promise<string>
TorrentSearchApi.downloadTorrent(torrent);

// $ExpectType Promise<string>
TorrentSearchApi.downloadTorrent(torrent, "file.mp4");

const provider = {
    name: "name",
    baseUrl: "baseUrl",
    requireAuthentification: true,
    supportTokenAuthentification: true,
    supportCookiesAuthentification: true,
    supportCredentialsAuthentification: true,
    loginUrl: "loginUrl",
    loginQueryString: "loginQueryString",
    searchUrl: "searchUrl",
    categories: {
        All: "all",
        Movies: "movies"
    },
    defaultCategory: "all",
    resultsPerPageCount: 50,
    itemsSelector: ".selector",
    itemSelectors: {
        title: ".title",
        seeds: ".seeds",
        peers: ".peers",
        size: ".size",
        desc: ".desc"
    },
    paginateSelector: ".page",
    torrentDetailsSelector: ".detail",
    enableCloudFareBypass: true,
    headers: {
        UserAgent: "ua"
    },
    magnetSelector: ".magnet",
    autoFixUnstableUrl: true
};

// $ExpectType void
TorrentSearchApi.loadProvider(provider);

// $ExpectType void
TorrentSearchApi.loadProviders("/path/to/provider");

// $ExpectType void
TorrentSearchApi.removeProvider("MyCustomProvider");
