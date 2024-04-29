import videojs from "video.js";

const player = videojs("my-video", {
    plugins: {
        seekButtons: {
            forward: 30,
            back: 10,
        },
        otherStuff: {
            foo: "bar",
        },
    },
});

player.seekButtons({
    forward: 30,
    back: 10,
});
