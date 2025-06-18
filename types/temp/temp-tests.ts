// Author: Daniel Rosenwasser <https://github.com/DanielRosenwasser>

import * as temp from "temp";

async function testCleanup() {
    temp.cleanup(result => {
        if (typeof result === "boolean") {
            const x = result;
        } else {
            const { files, dirs } = result;
            files.toPrecision(4);
            files.toPrecision(4);
        }
    });

    try {
        const result = await temp.cleanup();
        if (typeof result === "boolean") {
            const x = result;
        } else {
            const { files, dirs } = result;
            files.toPrecision(4);
            files.toPrecision(4);
        }
    } catch (err) {
        throw err;
    }
}

function testCleanupSync() {
    const cleanupResult: boolean | temp.Stats = temp.cleanupSync();
    if (typeof cleanupResult === "boolean") {
        const x = cleanupResult;
    } else {
        const { dirs, files } = cleanupResult;
        dirs.toPrecision(4);
        files.toPrecision(4);
    }
}

async function testOpen() {
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

    try {
        const { path, fd } = await temp.open("strPrefix");
        path.length;
        fd.toPrecision(5);
    } catch (err) {
        throw err;
    }
}

function testOpenSync() {
    const f1: temp.OpenFile = temp.openSync({ dir: "tempDir", prefix: "pref", suffix: "suff" });
    const f2: temp.OpenFile = temp.openSync("str");
}

function testCreateWriteStream() {
    const stream = temp.createWriteStream("HelloStreamAffix");
    stream.write("data");
    const stream2 = temp.createWriteStream();
}

async function testMkdir() {
    temp.mkdir("prefix", (err, dirPath) => {
        dirPath.length;
    });

    try {
        const dirPath = await temp.mkdir("prefix");
        dirPath.length;
    } catch (err) {
        throw err;
    }
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
