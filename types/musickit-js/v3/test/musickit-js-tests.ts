MusicKit.configure({
    app: {
        build: '1.0',
        name: 'PLAYER_NAME',
    },
    developerToken: 'devToken',
});

const player = MusicKit.getInstance();
const test = async () => {
    let res;

    // $ExpectType APIResponse & { data: unknown; }
    res = await player.api.music('/v1/catalog/{{storefrontId}}/songs/123456789');

    // $ExpectType APIResponse & { data: CatalogResourceResponse<Songs>; }
    res = await player.api.music<MusicKit.CatalogResourceAPI<MusicKit.Songs>>(
        '/v1/catalog/{{storefrontId}}/songs/123456789',
    );
    if (res.data.data[0].attributes) {
        const {
            // $ExpectType string
            albumName,
            // $ExpectType string
            artistName,
            // $ExpectType Artwork
            artwork,
            // $ExpectType string | undefined
            attribution,
            // $ExpectType string | undefined
            composerName,
            // $ExpectType number | undefined
            discNumber,
            // $ExpectType number
            durationInMillis,
            // $ExpectType EditorialNotes | undefined
            editorialNotes,
            // $ExpectType string[]
            genreNames,
            // $ExpectType boolean
            hasLyrics,
            // $ExpectType string | undefined
            isrc,
            // $ExpectType number | undefined
            movementCount,
            // $ExpectType string | undefined
            movementName,
            // $ExpectType number | undefined
            movementNumber,
            // $ExpectType string
            name,
            // $ExpectType PlayParameters | undefined
            playParams,
            // $ExpectType Preview[]
            previews,
            // $ExpectType string | undefined
            releaseDate,
            // $ExpectType number | undefined
            trackNumber,
            // $ExpectType string
            url,
            // $ExpectType string | undefined
            workName,
            // $ExpectType string | undefined
            artistUrl,
        } = res.data.data[0].attributes;
    }

    // $ExpectType APIResponse & { data: CatalogResourceResponse<Albums>; }
    res = await player.api.music<MusicKit.CatalogResourceAPI<MusicKit.Albums>>(
        '/v1/catalog/{{storefrontId}}/albums/123456789',
        {
            views: ['appears-on'],
        },
    );
    if (res.data.data[0].attributes) {
    }

    // $ExpectType APIResponse & { data: CatalogResourcesResponse<Albums>; }
    res = await player.api.music<MusicKit.CatalogResourcesAPI<MusicKit.Albums>>('/v1/catalog/{{storefrontId}}/albums', {
        ids: ['123456789', '987654321'],
    });
    if (res.data.data[0].attributes) {
    }

    res = await player.api.music<MusicKit.CatalogResourceAPI<MusicKit.LibraryAlbums | MusicKit.LibraryPlaylists>>(
        '/v1/me/library/recently-added',
    );
    if (res.data.data[0].attributes) {
        const {
            // $ExpectType string
            name,
        } = res.data.data[0].attributes;
    }

    res = await player.api.music<MusicKit.ChartAPI<MusicKit.Albums | MusicKit.MusicVideos | MusicKit.Playlists>>(
        `/v1/catalog/{{storefrontId}}/charts`,
        {
            types: ['albums', 'music-videos', 'playlists'],
        },
    );
    const {
        // $ExpectType ChartResponseResult<Albums>[]
        albums: chartAlbums,
        // $ExpectType ChartResponseResult<MusicVideos>[]
        'music-videos': chartMusicVideos,
        // $ExpectType ChartResponseResult<Playlists>[]
        playlists: chartPlaylists,
    } = res.data.results;

    res = await player.api.music<
        MusicKit.SearchCatalogAPI<MusicKit.Albums | MusicKit.MusicVideos | MusicKit.Playlists>
    >('/v1/catalog/{{storefrontId}}/search', {
        term: 'james+brown',
        types: ['albums', 'music-videos', 'playlists'],
    });
    const {
        // $ExpectType SearchResult<Albums> | undefined
        albums: searchAlbums,
        // $ExpectType SearchResult<MusicVideos> | undefined
        'music-videos': searchMusicVideos,
        // $ExpectType SearchResult<Playlists> | undefined
        playlists: searchPlaylists,
    } = res.data.results;

    res = await player.api.music<
        MusicKit.SearchLibraryAPI<
            MusicKit.LibraryAlbums | MusicKit.LibraryArtists | MusicKit.LibraryMusicVideos | MusicKit.LibraryPlaylists
        >
    >('/v1/me/library/search', {
        term: 'james+brown',
        types: ['library-albums', 'library-artists'],
    });
    const {
        // $ExpectType SearchLibraryResult<LibraryAlbums> | undefined
        'library-albums': searchLibraryAlbums,
        // $ExpectType SearchLibraryResult<LibraryArtists> | undefined
        'library-artists': searchLibraryArtists,
        // $ExpectType SearchLibraryResult<LibraryMusicVideos> | undefined
        'library-music-videos': searchLibraryMusicVideos,
        // $ExpectType SearchLibraryResult<LibraryPlaylists> | undefined
        'library-playlists': searchLibraryPlaylists,
    } = res.data.results;

    res = await player.api.music<MusicKit.SearchHintsAPI>('/v1/catalog/{{storefrontId}}/search/hints', {
        term: 'taylor swift',
    });
    const {
        // $ExpectType string[]
        terms: searchHintsTerms,
    } = res.data.results;

    res = await player.api.music<MusicKit.SearchSuggestionsAPI<MusicKit.TermSuggestion>>(
        '/v1/catalog/{{storefrontId}}/search/suggestions',
        {
            kinds: ['terms'],
            term: 'taylor swift',
        },
    );
    const {
        // $ExpectType TermSuggestion[]
        suggestions: searchSuggestionsTerms,
    } = res.data.results;

    res = await player.api.music<
        MusicKit.SearchSuggestionsAPI<MusicKit.TopResultSuggestion<MusicKit.Albums | MusicKit.Artists>>
    >('/v1/catalog/{{storefrontId}}/search/suggestions', {
        kinds: ['topResults'],
        term: 'taylor swift',
        types: ['albums', 'artists'],
    });
    const {
        // $ExpectType TopResultSuggestion<Albums | Artists>[]
        suggestions: searchSuggestionsTopResults,
    } = res.data.results;
};

player.addEventListener('playbackStateDidChange', ({ oldState, state }) => ({ oldState, state }));
player.addEventListener('playbackProgressDidChange', ({ progress }) => ({ progress }));
player.addEventListener('authorizationStatusDidChange', ({ authorizationStatus }) => {
    switch (authorizationStatus) {
        case 0:
        case 1:
        case 2:
        case 3:
    }
});

player.removeEventListener('playbackStateDidChange');

player.pause();

player.setQueue({
    song: 'trackId',
});
