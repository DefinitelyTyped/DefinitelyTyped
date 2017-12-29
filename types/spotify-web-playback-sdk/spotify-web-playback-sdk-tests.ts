/*
 * Taken from https://beta.developer.spotify.com/documentation/web-playback-sdk/reference/
 * © 2017 Spotify AB
 */

const player = new Spotify.Player({
    name: "Carly Rae Jepsen Player",
    getOAuthToken: (callback) => {
        // Run code to get a fresh access token
        callback("access token here");
    },
    volume: 0.5
});

player.connect().then((success) => {
    if (success) {
        console.log("The Web Playback SDK successfully connected to Spotify!")
    }
});

player.disconnect();

player.on("ready", (data) => {
    console.log("The Web Playback SDK is ready to play music!");
});

player.getCurrentState().then((playbackState) => {
    if (playbackState) {
        let { current_track, next_tracks } = playbackState.track_window;

        console.log("Currently Playing", current_track);
        console.log("Playing Next", next_tracks[0]);
    } else {
        console.error("The user is not playing music through the Web Playback SDK");
    }
});

player.getVolume().then((volume) => {
    let volume_percentage = (volume * 100);
    console.log(`The volume of the player is ${volume_percentage}%`);
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

player.on("ready", (data) => {
    let { device_id } = data;
    console.log("Connected with Device ID", device_id);
});

player.on("player_state_changed", (playbackState) => {
    let { position, duration } = playbackState;
    let { current_track } = playbackState.track_window;

    console.log("Currently Playing", current_track);
    console.log("Position in Song", position);
    console.log("Duration of Song", duration);
});

player.on('initialization_error', (e) => {
    console.error("Failed to initialize", e.message);
});

player.on('authentication_error', (e) => {
    console.error("Failed to authenticate", e.message);
});

player.on('account_error', (e) => {
    console.error("Failed to validate Spotify account", e.message);
});

player.on('playback_error', (e) => {
    console.error("Failed to perform playback", e.message);
});
