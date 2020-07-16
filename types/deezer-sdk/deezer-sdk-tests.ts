DZ.init({
    appId: "myapp",
    channelUrl: "https://myapp.com/deezer-channel.html",
    player: {
        container: "my-widget-div",
        onload: onLoad,
    }
});

function onLoad(state: DeezerSdk.PlayerState) {
    print("Player has loaded. Volume = " + state.volume);
    const trackId = "12345";
    DZ.player.playTracks([trackId]);
    DZ.player.playTracks([trackId], playQueue => print(playQueue.tracks));
    DZ.player.playTracks([trackId], true, playQueue => print(playQueue.tracks));
    DZ.player.playTracks([trackId], true, 1, playQueue => print(playQueue.tracks));
    DZ.player.playTracks([trackId], true, 1, 0, playQueue => print(playQueue.tracks));
    DZ.player.playTracks([trackId], undefined, undefined, undefined, undefined);
}

dzAsyncInit = () => print("Deezer SDK has loaded.");

DZ.Event.subscribe(
    "track_end",
    trackPosition => print("Track end. Position = " + trackPosition)
);
DZ.Event.subscribe(
    "player_position",
    ([positionSecondsFloat, _]) => print("Position = " + positionSecondsFloat)
);

DZ.api(
    "/user/123",
    response => print("User name = " + response.name)
    );
DZ.api(
    "user/me/playlists",
    "POST",
    { title : "my title" },
    response => print("My new playlist ID = " + response.id)
);

function print(a: any) {
    // ...
}
