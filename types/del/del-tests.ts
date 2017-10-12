import del = require("del");

let paths = ["build", "dist/**/*.js"];

del(["tmp/*.js", "!tmp/unicorn.js"]);
del(["tmp/*.js", "!tmp/unicorn.js"], {force: true});
del(["tmp/*.js", "!tmp/unicorn.js"], {dryRun: true});
del(["tmp/*.js", "!tmp/unicorn.js"], {concurrency: 20});
del(["tmp/*.js", "!tmp/unicorn.js"], {cwd: ''});

del(["tmp/*.js", "!tmp/unicorn.js"]).then((paths: string[]) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

del(["tmp/*.js", "!tmp/unicorn.js"], {force: true}).then((paths: string[]) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

del("tmp/*.js");
del("tmp/*.js", {force: true});
del("tmp/*.js", {dryRun: true});
del("tmp/*.js", {concurrency: 20});
del("tmp/*.js", {cwd: ''});
del("tmp/*.js").then((paths: string[]) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

del("tmp/*.js", {force: true}).then((paths: string[]) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

paths = del.sync(["tmp/*.js", "!tmp/unicorn.js"]);
paths = del.sync(["tmp/*.js", "!tmp/unicorn.js"], {force: true});

paths = del.sync("tmp/*.js");
paths = del.sync("tmp/*.js", {force: true});
paths = del.sync("tmp/*.js", {dryRun: true});
paths = del.sync("tmp/*.js", {concurrency: 20});
paths = del.sync("tmp/*.js", {cwd: ''});
