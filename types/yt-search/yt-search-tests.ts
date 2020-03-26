import yts from 'yt-search';

// $ExpectType Promise<SearchResult>
yts('');

// $ExpectType void
yts('', (err, data) => {
    // $ExpectType Error
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

// $ExpectError
yts();

// $ExpectError
yts({});

// $ExpectError
yts({ query: '', videoId: '' });
