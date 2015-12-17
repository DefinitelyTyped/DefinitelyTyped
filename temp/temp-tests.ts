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
    }
}

function testOpen() {
    temp.open({ dir: "tempDir", prefix: "pref", suffix: "suff" }, (err, result) => {
        const { path, fd } = result;
    });

    temp.open("strPrefix", (err, result) => {
        const { path, fd } = result;
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

function testMkDir() {
    temp.mkDir("prefix", (err, dirPath) => {
        dirPath.length;
    });
}

function testMkDirSync() {
    const result = temp.mkDirSync("prefix");
    result.length;
}

function testPath() {
    temp.path({ suffix: "justSuffix" }, "defaultPrefix");
}

function testTrack() {
    const tempChained = temp.track(true).track(false);
    tempChained.dir;
    tempChained.cleanupSync();
}