import * as fs from "fs";
import * as Undertaker from "undertaker";
import globWatcher = require("glob-watcher");

function test() {
    const path = "";
    const globs = ["", ""];

    const opts1 = {
    };

    const opts2 = {
        delay: 500,
        events: ["add", "change", "unlink"],
        depth: 1
    };

    optionsTypeTest(opts1);
    optionsTypeTest(opts2);

    const taskFunc: Undertaker.TaskFunction = () => "";

    const cb = () => {
        console.log("watch change!");
    };

    let cnt = 0;
    const pCall = () => {
        return new Promise<string>((resolve, reject) => resolve((++cnt).toString()));
    };

    const res = [
        globWatcher(path),
        globWatcher(globs),
        globWatcher(path, opts1),
        globWatcher(globs, opts2),
        globWatcher(path, cb),
        globWatcher(globs, cb),
        globWatcher(path, opts1, cb),
        globWatcher(globs, opts2, cb),
        globWatcher(path, pCall),
        globWatcher(globs, pCall),
        globWatcher(path, opts2, pCall),
        globWatcher(globs, opts1, pCall),
        globWatcher(path, taskFunc),
        globWatcher(globs, taskFunc),
        globWatcher(path, opts2, taskFunc),
        globWatcher(globs, opts1, taskFunc),
    ];

    return res.map(s => {
        const ee: fs.FSWatcher = s;
        ee.close();
        return ee.eventNames();
    });
}

function optionsTypeTest(opts: globWatcher.WatchOptions) {
    return opts;
}
