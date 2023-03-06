import * as PirateBay from 'thepiratebay';

// $ExpectType Promise<TorrentSearchResult[]>
const searchResultPromise = PirateBay.search('Game of Thrones', {
    category: 'all',
    filter: {
        verified: false
    },
    page: 0,
    orderBy: 'leeches',
    sortBy: 'desc'
});
searchResultPromise.then((res: PirateBay.TorrentSearchResult[]) => {
    res[0].id; // $ExpectType string
    res[0].name; // $ExpectType string
    res[0].size; // $ExpectType string
    res[0].link; // $ExpectType string
    res[0].seeders; // $ExpectType string
    res[0].leechers; // $ExpectType string
    res[0].uploadDate; // $ExpectType string
    res[0].magnetLink; // $ExpectType string
    res[0].uploader; // $ExpectType string
    res[0].uploaderLink; // $ExpectType string

    const category = res[0].category; // $ExpectType Category
    category.id; // $ExpectType string
    category.name; // $ExpectType string

    res[0].subcategory; // $ExpectType Category
    res[0].verified; // $ExpectType boolean
});
// @ts-expect-error
PirateBay.search(15);

// $ExpectType Promise<TorrentDetails>
const torrentPromise = PirateBay.getTorrent('15496322');
torrentPromise.then((torrent: PirateBay.TorrentDetails) => {
    torrent.id; // $ExpectType string
    torrent.name; // $ExpectType string
    torrent.size; // $ExpectType string
    torrent.link; // $ExpectType string
    torrent.seeders; // $ExpectType string
    torrent.leechers; // $ExpectType string
    torrent.uploadDate; // $ExpectType string
    torrent.magnetLink; // $ExpectType string
    torrent.uploader; // $ExpectType string
    torrent.uploaderLink; // $ExpectType string
    torrent.description; // $ExpectType string
});
// $ExpectType Promise<TorrentDetails>
PirateBay.getTorrent(15496322);
// @ts-expect-error
PirateBay.getTorrent(false);
// $ExpectType Promise<TorrentDetails>
PirateBay.getTorrent('https://thepiratebay.org/torrent/15496322/Ubuntu_16.04.1_LTS_Desktop_64-bit');
// $ExpectType Promise<TorrentDetails>
PirateBay.getTorrent({ name: "ubuntu", link: 'https://thepiratebay.org/torrent/15496322/Ubuntu_16.04.1_LTS_Desktop_64-bit' });

// $ExpectType Promise<TorrentSearchResult[]>
PirateBay.topTorrents();
// @ts-expect-error
PirateBay.topTorrents(true);
// $ExpectType Promise<TorrentSearchResult[]>
PirateBay.topTorrents(400);

// $ExpectType Promise<TorrentSearchResult[]>
PirateBay.recentTorrents();
// @ts-expect-error
PirateBay.recentTorrents(10);

// @ts-expect-error
PirateBay.userTorrents();
// $ExpectType Promise<TorrentSearchResult[]>
PirateBay.userTorrents('alice', {
    page: 3,
    orderBy: 'name',
    sortBy: 'asc'
});
// $ExpectType Promise<TorrentSearchResult[]>
PirateBay.userTorrents('bob');

// $ExpectType Promise<CategoryGroup[]>
const categoryGroup = PirateBay.getCategories();
categoryGroup.then((groups: PirateBay.CategoryGroup[]) => {
    groups[0].id; // $ExpectType string
    groups[0].name; // $ExpectType string
    groups[0].subcategories; // $ExpectType Category[]
});
// @ts-expect-error
PirateBay.getCategories(154);

// @ts-expect-error
PirateBay.getTvShow();
// $ExpectType Promise<TVSeason[]>
const tvShow = PirateBay.getTvShow(15);
tvShow.then((seasons: PirateBay.TVSeason[]) => {
    seasons[0].title; // $ExpectType string
    const torrents = seasons[0].torrents; // $ExpectType TVTorrent[]
    torrents[0].id; // $ExpectType string
    torrents[0].title; // $ExpectType string
    torrents[0].link; // $ExpectType string
});
// $ExpectType Promise<TVSeason[]>
PirateBay.getTvShow('15');
