MusicKit.configure({
    app: {
        build: "1.0",
        name: "PLAYER_NAME",
    },
    developerToken: "devToken",
});

const player = MusicKit.getInstance();

const test = async () => {
    const {
        attributes: { albumName, artistName, durationInMillis, name },
    } = await player.api.song("");
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
