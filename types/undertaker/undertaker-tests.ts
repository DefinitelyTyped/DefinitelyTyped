/// <reference types="node" />
import * as fs from "fs";
import * as Undertaker from "undertaker";
import * as Registry from "undertaker-registry";

const taker = new Undertaker();

taker.task("task1", (cb: () => void) => {
    // do things
    cb(); // when everything is done
});

taker.task("task2", () => {
    return fs.createReadStream("./myFile.js")
        .pipe(fs.createWriteStream("./myFile.copy.js"));
});

taker.task("task3", () => {
    return new Promise((resolve, reject) => {
        // do things
        resolve(); // when everything is done
    });
});

taker.task("task3", ["task1"], () => {
    return new Promise((resolve, reject) => {
        // do things depending on "task1"
        resolve(); // when everything is done
    });
});

taker.task("combined", taker.series("task1", "task2"));

taker.task("all", taker.parallel("combined", "task3"));

taker.task("all-parallel-array", taker.parallel(["combined", "task3"]));

taker.task("all-series-array", taker.series(["combined", "task3"]));

const registry = new Registry();
const CommonRegistry = (options: { buildDir: string }): Registry => {
    return registry;
};

const taker2 = new Undertaker(CommonRegistry({ buildDir: "/dist" }));

taker2.task("build", taker2.series("clean", (cb: () => void) => {
    // do things
    cb();
}));

taker2.addListener("event", () => {
    // Checking for extended EventEmitter
});
