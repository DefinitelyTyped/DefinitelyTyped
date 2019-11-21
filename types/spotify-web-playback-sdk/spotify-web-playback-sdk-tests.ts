/*
 * Taken from https://beta.developer.spotify.com/documentation/web-playback-sdk/reference/
 * © 2017 Spotify AB
 */

const player = new window.Spotify.Player({
    name: "Carly Rae Jepsen Player",
    getOAuthToken: (callback: (t: string) => void) => {
        // Run code to get a fresh access token
        callback("access token here");
    },
    volume: 0.5
});

player.connect().then((success: boolean) => {
    if (success) {
        console.log("The Web Playback SDK successfully connected to Spotify!");
    }
});

player.disconnect();

player.addListener("ready", (data) => {
    console.log("The Web Playback SDK is ready to play music!");
});

player.addListener("not_ready", ({ device_id }) => {
    console.log("The Web Playback SDK is not ready to play music!");
});

player.getCurrentState().then((playbackState: Spotify.PlaybackState | null) => {
    if (playbackState) {
        const { current_track, next_tracks } = playbackState.track_window;
        const repeatMode: 0 | 1 | 2 = playbackState.repeat_mode;
        const images = current_track.album.images;
        if (images.length) {
            const { 0: { height, width } } = images;
        }

        console.log("Currently Playing", current_track);
        console.log("Playing Next", next_tracks[0]);
    } else {
        console.error("The user is not playing music through the Web Playback SDK");
    }
});

player.getVolume().then((volume: number) => {
    const volume_percentage = (volume * 100);
    console.log(`The volume of the player is ${volume_percentage}%`);
});

player.setName("New player name").then(() => {
    console.log("Player name updated!");
});

player.setVolume(0.5).then(() => {
    console.log("Volume updated!");
});

player.pause().then(() => {
    console.log("Paused!");
});

player.resume().then(() => {
    console.log("Resumed!");
});

player.togglePlay().then(() => {
    console.log("Toggled playback!");
});

player.seek(60 * 1000).then(() => {
    console.log("Changed position!");
});

player.previousTrack().then(() => {
    console.log("Set to previous track!");
});

player.nextTrack().then(() => {
    console.log("Skipped to next track!");
});

player.on("ready", (data: Spotify.WebPlaybackInstance) => {
    const { device_id } = data;
    console.log("Connected with Device ID", device_id);
});

player.on("not_ready", (data: Spotify.WebPlaybackInstance) => {
    const { device_id } = data;
    console.log("Connected with Device ID", device_id);
});

player.on("player_state_changed", (playbackState: Spotify.PlaybackState) => {
    const { position, duration } = playbackState;
    const { current_track } = playbackState.track_window;

    console.log("Currently Playing", current_track);
    console.log("Position in Song", position);
    console.log("Duration of Song", duration);
});

player.addListener('initialization_error', (e: Spotify.Error) => {
    console.error("Failed to initialize", e.message);
});

player.addListener('authentication_error', (e: Spotify.Error) => {
    console.error("Failed to authenticate", e.message);
});

player.addListener('account_error', (e: Spotify.Error) => {
    console.error("Failed to validate Spotify account", e.message);
});

const listener = (e: Spotify.Error) => {
    console.error("Failed to perform playback", e.message);
};
player.addListener('playback_error', listener);
player.addListener('playback_error', () => {});
player.removeListener('playback_error', () => {});

player.removeListener('playback_error');
player.removeListener('playback_error', listener);
