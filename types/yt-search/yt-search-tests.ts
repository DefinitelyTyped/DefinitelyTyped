import yts, { search } from 'yt-search';

// $ExpectType Promise<SearchResult>
yts('');
// $ExpectType Promise<SearchResult>
yts.search('');
// $ExpectType Promise<SearchResult>
search('');

// $ExpectType void
yts('', (err, data) => {
    // $ExpectType string | Error | null | undefined
    err;
    // $ExpectType SearchResult
    data;
});

// $ExpectType Promise<SearchResult>
yts({ query: '' });

// $ExpectType Promise<SearchResult>
yts({ search: '', pageStart: 2, pageEnd: 5 });

// $ExpectType Promise<VideoMetadataResult>
yts({ videoId: '' });

// $ExpectType Promise<PlaylistMetadataResult>
yts({ listId: '' });

// @ts-expect-error
yts();

// @ts-expect-error
yts({});

// @ts-expect-error
yts({ query: '', videoId: '' });
