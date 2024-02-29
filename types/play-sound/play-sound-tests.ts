import playerImport = require("play-sound");

const player = playerImport({});

// $ mplayer foo.mp3
player.play("foo.mp3", err => {
    if (err) throw err;
});

// { timeout: 300 } will be passed to child process
player.play("foo.mp3", { timeout: 300 }, err => {
    if (err) throw err;
});

// configure arguments for executable if any
player.play("foo.mp3", { afplay: ["-v", 1] /* lower volume for afplay on OSX */ }, err => {
    if (err) throw err;
});

// access the node child_process in case you need to kill it on demand
const audio = player.play("foo.mp3", err => {
    if (err && !err.killed) throw err;
});
audio.kill();
