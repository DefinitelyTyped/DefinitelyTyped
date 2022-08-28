MusicKit.configure({
    app: {
        build: "1.0",
        name: "PLAYER_NAME",
    },
    developerToken: "devToken",
});

const player = MusicKit.getInstance();

const test = async () => {
    const { attributes } = await player.api.song('');
    if (!attributes) return;
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
    } = attributes;

    // $ExpectType Resource[]
    const recentlyAddedResources = await player.api.library.recentlyAdded();

    const {
        // $ExpectType SearchChartResult<Albums>[]
        albums: chartAlbums,
        // $ExpectType SearchChartResult<MusicVideos>[]
        'music-videos': chartMusicVideos,
        // $ExpectType SearchChartResult<Playlists>[]
        playlists: chartPlaylists,
        // $ExpectType SearchChartResult<Songs>[]
        songs: chartSongs,
    } = await player.api.charts(['albums', 'music-videos', 'playlists', 'songs']);

    const {
        // $ExpectType SearchResult<Activities> | undefined
        activities: searchActivities,
        // $ExpectType SearchResult<Albums> | undefined
        albums: searchAlbums,
        // $ExpectType SearchResult<Artists> | undefined
        artists: searchArtists,
        // $ExpectType SearchResult<Curators> | undefined
        curators: searchCurators,
        // $ExpectType SearchResult<MusicVideos> | undefined
        'music-videos': searchMusicVideos,
        // $ExpectType SearchResult<Playlists> | undefined
        playlists: searchPlaylists,
        // $ExpectType SearchResult<RecordLabels> | undefined
        'record-labels': searchRecordLabels,
        // $ExpectType SearchResult<Stations> | undefined
        stations: searchStations,
        // $ExpectType SearchResult<Songs> | undefined
        songs: searchSongs,
    } = await player.api.search('james+brown');

    const {
        // $ExpectType string[]
        terms: searchHintsTerms,
    } = await player.api.searchHints('james+brown');
};

player.addEventListener("playbackStateDidChange", ({ oldState, state }) => ({ oldState, state }));
player.addEventListener("playbackProgressDidChange", ({ progress }) => ({ progress }));
player.addEventListener("authorizationStatusDidChange", ({ authorizationStatus }) => {
    switch (authorizationStatus) {
        case 0:
        case 1:
        case 2:
        case 3:
    }
});

player.removeEventListener("playbackStateDidChange");

player.pause();

player.setQueue({
    song: "trackId",
});
