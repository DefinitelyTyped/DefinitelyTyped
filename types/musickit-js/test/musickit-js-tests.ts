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
