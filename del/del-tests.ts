/// <reference path="./del.d.ts"/>
import del = require("del");

var paths = ["build", "dist/**/*.js"];

del(["tmp/*.js", "!tmp/unicorn.js"]);

del(["tmp/*.js", "!tmp/unicorn.js"], {force: true});

del(["tmp/*.js", "!tmp/unicorn.js"], (err, paths) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

del(["tmp/*.js", "!tmp/unicorn.js"], {force: true}, (err, paths) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

del("tmp/*.js");

del("tmp/*.js", {force: true});

del("tmp/*.js", (err, paths) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

del("tmp/*.js", {force: true}, (err, paths) => {
    console.log('Deleted files/folders:\n', paths.join('\n'));
});

del.sync(["tmp/*.js", "!tmp/unicorn.js"]);

del.sync(["tmp/*.js", "!tmp/unicorn.js"], {force: true});

del.sync("tmp/*.js");

del.sync("tmp/*.js", {force: true});
