import http = require("tiny-json-http");

// $ExpectType void
http.get({
    url: "https://github.com",
}, (err, res) => {});

// $ExpectType void
http.head({
    url: "https://github.com",
}, (err, res) => {});

// $ExpectType void
http.options({
    url: "https://github.com",
}, (err, res) => {});

// $ExpectType void
http.post({
    url: "https://github.com",
}, (err, res) => {});

// $ExpectType void
http.put({
    url: "https://github.com",
}, (err, res) => {});

// $ExpectType void
http.patch({
    url: "https://github.com",
}, (err, res) => {});

// $ExpectType void
http.del({
    url: "https://github.com",
}, (err, res) => {});

// Promise alternatives
Promise.resolve()
    .then(async () => {
        // $ExpectType Result
        await http.get({
            url: "https://github.com",
        });

        // $ExpectType Result
        await http.get({
            url: "https://github.com",
        });

        // $ExpectType Result
        await http.head({
            url: "https://github.com",
        });

        // $ExpectType Result
        await http.options({
            url: "https://github.com",
        });

        // $ExpectType Result
        await http.post({
            url: "https://github.com",
        });

        // $ExpectType Result
        await http.put({
            url: "https://github.com",
        });

        // $ExpectType Result
        await http.patch({
            url: "https://github.com",
        });

        // $ExpectType Result
        await http.del({
            url: "https://github.com",
        });
    });
