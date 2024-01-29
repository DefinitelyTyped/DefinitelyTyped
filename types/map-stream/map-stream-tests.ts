import map = require("map-stream");

const callback: map.Callback = function(err, data) {};

const fn = map((data, callback) => {}, {
    failures: true,
});

fn.pause();
fn.write();
fn.resume();
fn.destroy();
fn.end();

map((data, callback) => {});
