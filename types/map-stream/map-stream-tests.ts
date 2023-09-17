import map = require('map-stream');

const callback: map.Callback = function (err, data) {};

map((data, callback) => {}, {
    failures: true,
});

map((data, callback) => {});
