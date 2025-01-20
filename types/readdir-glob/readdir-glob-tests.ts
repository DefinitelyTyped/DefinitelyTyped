import readdirGlob = require("readdir-glob");

const globber = readdirGlob(".", { pattern: "**/*.js", mark: true, stat: true });
const globber2 = readdirGlob(".", { pattern: ["**/*.js", "**/*.spec.js"], mark: true, stat: true });
const globber3 = readdirGlob(".", { ignore: "**/*.js", mark: true, stat: true });
const globber4 = readdirGlob(".", { ignore: ["**/*.js", "**/*.spec.js"], mark: true, stat: true });
const globber5 = readdirGlob(".", { skip: "**/*.js", mark: true, stat: true });
const globber6 = readdirGlob(".", { skip: ["**/*.js", "**/*.spec.js"], mark: true, stat: true });

globber.on("match", match => {});

globber.on("error", err => {
    console.error("fatal error", err);
});

globber.on("end", m => {
    console.log("done", m);
});

globber.pause();
globber.abort();
globber.resume();
globber.options;
globber.paused;
globber.aborted;

const g = new readdirGlob.ReaddirGlob(".", { pattern: "**/*.js", mark: true, stat: true }, (err, matches) => {});
const g2 = new readdirGlob.ReaddirGlob(".", (err, matches) => {});
