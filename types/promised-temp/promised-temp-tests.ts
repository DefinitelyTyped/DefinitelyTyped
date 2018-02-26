import * as fs from "fs";
import temp, { AffixOptions, OpenFile, Stats } from "promised-temp";

function testCleanup() {
    temp.cleanup().then((result: boolean | Stats) => {
        if (typeof result === "boolean") {
            const x = result;
        } else {
            const { files, dirs } = result;
            files.toPrecision(4);
        }
    });
}

function testOpen() {
    temp.open({ dir: "tempDir", prefix: "pref", suffix: "suff" }).then((result: OpenFile) => {
        const { path, fd } = result;
        path.length;
        fd.toPrecision(5);
    });

    temp.open("strPrefix").then((result: OpenFile) => {
        const { path, fd } = result;
        path.length;
        fd.toPrecision(5);
    });
}

function testCreateWriteStream() {
    const stream =
        temp.createWriteStream("HelloStreamAffix")
            .then((stream: fs.WriteStream) => stream.write("data"));

    const stream2 = temp.createWriteStream();
}

function testMkdir() {
    temp.mkdir("prefix").then((dirPath: string) => {
        dirPath.length;
    });
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
    tempChained.cleanup();
}
