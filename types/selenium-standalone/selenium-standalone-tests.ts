"use strict";
import { install, start, ChildProcess, FsPaths, InstallOpts, StartOpts } from "selenium-standalone";

// InstallOpts interface
let installOpts: InstallOpts = {
    baseURL: "baseURL",
    basePath: "basePath",
    version: "version",
    drivers: {
        chrome: {
            version: "chrome_version",
            arch: "ia32",
            baseURL: "baseURL a",
        },
        firefox: {
            version: "version",
            arch: "ia64",
            baseURL: "baseURL b",
        }
    },
    progressCb: (totalLength: number, progressLength: number, chunkLength: number) => {},
    logger: (message: string) => {},
    requestOpts: "requestOpts",
    cb: (error: Error) => {},
};

const installOptsCompact: InstallOpts = {
    version: "version",
    drivers: {
        chrome: {
            version: "chrome_version",
        },
    },
};

installOpts = {};

installOpts = {
    requestOpts: {
        agent: true,
        host: "host",
        family: 5
    },
};

// StartOpts interface
let startOpts: StartOpts = {
    basePath: "basePath",
    version: "version",
    drivers: {
        chrome: {
            version: "chrome_version",
            arch: "ia32",
            baseURL: "baseURL a",
        },
        firefox: {
            version: "version",
            arch: "ia64",
            baseURL: "baseURL b",
        }
    },
    seleniumArgs: ["bla", "foo"],
    javaArgs: ["bla", "foo"],
    spawnOptions: {},
    spawnCb: (selenium?: ChildProcess) => {},
    javaPath: "javaPath",
    requestOpts: "requestOpts",
    cb: (error: Error, child: ChildProcess) => {},
};
startOpts = {};

const startOptsCompact: StartOpts = {
    version: "version",
    drivers: {
        firefox: {
            version: "version",
        }
    },
};

// FsPaths interface
let fsPaths: FsPaths = {
    bla: "foo",
    chrome: {
        installPath: "installPath",
        bla: "foo",
    },
    ie: {
        installPath: "installPath",
        bla: "foo",
    },
    edge: {
        installPath: "installPath",
        bla: "foo",
    },
    firefox: {
        installPath: "installPath",
        bla: "foo",
    },
    selenium: {
        installPath: "installPath",
        bla: "foo",
    },
};
fsPaths = {};

// start method
start(startOpts, (error: Error | null, selenium: ChildProcess) => {});
start(installOptsCompact, (error: Error | null, selenium: ChildProcess) => {});
start((error: Error | null, selenium: ChildProcess) => {});

// install method
install(installOpts, (error: Error | undefined, fsPaths: FsPaths) => {});
install(installOptsCompact, (error: Error | undefined, fsPaths: FsPaths) => {});
install((error: Error | undefined, fsPaths: FsPaths) => {});
