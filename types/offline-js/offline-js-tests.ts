// Test file for offline-js.


Offline.options = {
    checkOnLoad: false,
    interceptRequests: true,
    checks: {
        xhr: { url: '/connection-test' },
        image: { url: 'my-image.gif' },
        active: 'image'
    },
    reconnect: {
        initialDelay: 3,
        delay: 60
    },
    requests: true,
    game: false
};

Offline.check();

Offline.state;

var handler = () => { },
    context = {};

Offline.on("up", handler, context);
Offline.on("down", handler, context);
Offline.on("confirmed-up", handler, context);
Offline.on("confirmed-down", handler, context);
Offline.on("checking", handler, context);
Offline.on("reconnect:started", handler, context);
Offline.on("reconnect:stopped", handler, context);
Offline.on("reconnect:tick", handler, context);
Offline.on("reconnect:connecting", handler, context);
Offline.on("reconnect:failure", handler, context);
Offline.on("requests:flush", handler, context);
Offline.on("requests:hold", handler, context);

Offline.off("up", handler);
