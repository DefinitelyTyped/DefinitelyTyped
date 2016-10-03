// Author: Daniel Rosenwasser <https://github.com/DanielRosenwasser>

/// <reference path="temp.d.ts" />

import * as temp from "temp";

function testCleanup() {
    temp.cleanup(result => {
        if (typeof result === "boolean") {
            const x = result === true;
        }
        else {
            const { files, dirs } = result;
            files.toPrecision(4);
            files.toPrecision(4);
        }
    });
}

function testCleanupSync() {
    const cleanupResult = temp.cleanupSync()
    if (typeof cleanupResult === "boolean") {
        const x = cleanupResult === true;
    }
    else {
        const { dirs, files } = cleanupResult
        dirs.toPrecision(4);
        files.toPrecision(4);
    }
}

function testOpen() {
    temp.open({ dir: "tempDir", prefix: "pref", suffix: "suff" }, (err, result) => {
        const { path, fd } = result;
        path.length;
        fd.toPrecision(5);
    });

    temp.open("strPrefix", (err, result) => {
        const { path, fd } = result;
        path.length;
        fd.toPrecision(5);
    });
}

function testOpenSync() {
    const { fd: openFd1, path: openPath1 } = temp.openSync({ dir: "tempDir", prefix: "pref", suffix: "suff" });
    const { fd: openFd2, path: openPath2 } = temp.openSync("str");
}

function testCreateWriteStream() {
    const stream = temp.createWriteStream("HelloStreamAffix");
    stream.write("data");
}

function testMkdir() {
    temp.mkdir("prefix", (err, dirPath) => {
        dirPath.length;
    });
}

function testMkdirSync() {
    const result = temp.mkdirSync("prefix");
    result.length;
}

function testPath() {
    const p = temp.path({ suffix: "justSuffix" }, "defaultPrefix");
    p.length;
    const p2: string = temp.path("prefix");
    const p3: string = temp.path({ prefix: "prefix" });
}

function testTrack() {
    const tempChained = temp.track().track(true).track(false);
    tempChained.dir;
    tempChained.cleanupSync();
}