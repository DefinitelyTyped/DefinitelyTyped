import Link = require("grenache-nodejs-link");

const link = new Link({
    grape: "http://127.0.0.1:30001",
});

link.start();

link.put({ hello: "world" }, (err, hash) => {
    if (err) throw err;

    if (hash) {
        link.get(hash, (err, res) => {
            if (err) throw err;
            res;
        });
    }
});

link.lookup("test", (err, peers) => {
    if (err) throw err;
    peers?.forEach(p => p.toUpperCase());
});

link.startAnnouncing("test", 10000, err => {
    if (err) throw err;
});

link.stop();
