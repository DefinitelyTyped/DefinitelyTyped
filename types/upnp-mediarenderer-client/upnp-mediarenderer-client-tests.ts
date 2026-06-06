import MediaRendererClient = require("upnp-mediarenderer-client");

// Instanciate a client with a device description URL (discovered by SSDP)
const client = new MediaRendererClient("http://192.168.1.50:4873/foo.xml");

// Load a stream with subtitles and play it immediately
const options = {
    autoplay: true,
    contentType: "video/avi",
    metadata: {
        title: "Some Movie Title",
        creator: "John Doe",
        type: "video", // can be 'video', 'audio' or 'image'
        subtitlesUrl: "http://url.to.some/subtitles.srt",
    },
};

client.load("http://url.to.some/stream.avi", options, (err, result) => {
    if (err) throw err;
    console.log("playing ...");
});

// Pause the current playing stream
client.pause();

// Unpause
client.play();

// Stop
client.stop();

// Seek to 10 minutes
client.seek(10 * 60);

// Get the volume
client.getVolume((err, volume) => {
    if (err) throw err;
    console.log(volume); // the volume range is 0-100
});

// Set the volume
client.setVolume(40, (err) => {
    if (err) throw err;
    console.log("volume is now", 40);
});

client.on("status", (status) => {
    // Reports the full state of the AVTransport service the first time it fires,
    // then reports diffs. Can be used to maintain a reliable copy of the
    // service internal state.
    console.log(status);
});

client.on("loading", () => {
    console.log("loading");
});

client.on("playing", () => {
    console.log("playing");

    client.getPosition((err, position) => {
        console.log(position); // Current position in seconds
    });

    client.getDuration((err, duration) => {
        console.log(duration); // Media duration in seconds
    });
});

client.on("paused", () => {
    console.log("paused");
});

client.on("stopped", () => {
    console.log("stopped");
});

client.on("speedChanged", (speed) => {
    // Fired when the user rewinds of fast-forwards the media from the remote
    console.log("speedChanged", speed);
});
