import waitOn = require("wait-on");
import { WaitOnOptions } from "wait-on";

const opts: WaitOnOptions = {
    resources: [
        "file1",
        "http://foo.com:8000/bar",
        "https://my.com/cat",
        "http-get://foo.com:8000/bar",
        "https-get://my.com/cat",
        "tcp:foo.com:8000",
        "socket:/my/sock",
        "http://unix:/my/sock:/my/url",
        "http-get://unix:/my/sock:/my/url",
    ],
    delay: 1000, // initial delay in ms, default 0
    interval: 100, // poll interval in ms, default 250ms
    timeout: 30000, // timeout in ms, default Infinity
    tcpTimeout: 1000, // tcp timeout in ms, default 300ms
    httpTimeout: 1000,
    window: 1000, // stabilization time in ms, default 750ms

    // http options
    ca: [
        /* strings or binaries */
    ],
    cert: [
        /* strings or binaries */
    ],
    key: [
        /* strings or binaries */
    ],
    passphrase: "yourpassphrase",
    auth: {
        username: "theuser",
        password: "thepassword",
    },
    validateStatus: (status: number) => {
        return status === 401 || (status >= 200 && status < 300);
    },
    proxy: {
        host: "127.0.0.1",
        port: 9000,
        auth: {
            username: "mikeymike",
            password: "rapunz3l",
        },
    },
    strictSSL: false,
    followRedirect: true,
    headers: {
        "x-custom": "headers",
    },
    simultaneous: 2,
};

const handleError = (err: any) => undefined;

// Usage with callback function
waitOn(opts, err => {
    if (err) {
        return handleError(err);
    }
    // once here, all resources are available
});

// Usage with promises
waitOn(opts)
    .then(() => {
        // once here, all resources are available
    })
    .catch(err => {
        handleError(err);
    });

// Usage with async await
(async () => {
    try {
        await waitOn(opts);
        // once here, all resources are available
    } catch (err) {
        handleError(err);
    }
})();
