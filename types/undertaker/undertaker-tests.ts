import { exec } from "child_process";
import { EventEmitter } from "events";
import * as fs from "fs";
import Undertaker = require("undertaker");
import Registry = require("undertaker-registry");

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
    return new Promise<void>((resolve, reject) => {
        // do things
        resolve(); // when everything is done
    });
});

const task4: Undertaker.TaskFunction = () => Promise.resolve();
task4.displayName = "task4";
task4.description = "The fourth task";
task4.flags = {
    "--foo": "bar",
};
taker.task(task4);

// $ExpectType TaskFunctionWrapped | undefined
const wrappedTask4 = taker.task("task4");

const {
    displayName,
    description,
    flags,
} = wrappedTask4!.unwrap();

taker.task("task5", () => {
    const emitter = new EventEmitter();
    setTimeout(() => emitter.emit("done"), 1000);
    return emitter;
});

taker.task("task6", () => exec("ls"));

declare const task7: () => {
    subscribe(next?: (v: any) => void, error?: (e: any) => void, complete?: () => void): any;
};
taker.task("task7", task7);
taker.task("combined", taker.series("task1", "task2"));

taker.task("all", taker.parallel("combined", "task3"));

taker.task("all-parallel-array", taker.parallel(["combined", "task3"]));

taker.task("all-series-array", taker.series(["combined", "task3"]));

const version = 7;
taker.task("checkVersion", (cb: Parameters<Undertaker.TaskFunction>[0]) => {
    if (version < 7) {
        cb(new Error("version < 7!"));
    } else if (version < 9) {
        cb(null);
    } else {
        cb();
    }
});

taker.task("mixed", (cb: Undertaker.TaskCallback, args?: number) => {
    if (!args) {
        cb(new Error("Undefined args!"));
        return;
    }
    return Promise.resolve(args + 2);
});

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
