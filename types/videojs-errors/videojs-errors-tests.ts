import videojs from "video.js";
import "videojs-errors";

const player = videojs("my-player", {}, function onPlayerReady() {
    // tests for `this`
    // $ExpectType void
    this.errors();
    // $ExpectType void
    this.errors.extend({
        3: {
            headline: "This is an override for the generic MEDIA_ERR_DECODE",
            message: "This is a custom error message",
        },
    });
    // $ExpectType void
    this.error({ code: "foo", dismiss: true });
    // $ExpectType void
    this.error({ code: 1, message: "foo" });
    this.errors.VERSION; // $ExpectType string
});

// tests for player
// $ExpectType void
player.errors();
// $ExpectType void
player.errors.extend({
    PLAYER_ERR_FOO: {
        headline: "My custom \"foo\" error",
        message: "A custom \"foo\" error message.",
    },
});
// $ExpectType void
player.error({ code: "PLAYER_ERR_FOO" });
// $ExpectType void
player.error({ code: 1, message: "foo" });

// $ExpectType Record<string | number, CustomError>
const errors = player.errors.getAll();
errors["1"].type;
// $ExpectType undefined
player.errors.timeout(3000);
// $ExpectType number
player.errors.timeout();
// $ExpectType undefined
player.errors.backgroundTimeout(3000);
// $ExpectType number
player.errors.backgroundTimeout();
player.errors.VERSION; // $ExpectType string
