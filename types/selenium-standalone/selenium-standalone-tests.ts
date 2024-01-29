"use strict";
import { FsPaths, install, InstallOpts, start, StartOpts } from "selenium-standalone";

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
        },
    },
    progressCb: (totalLength: number, progressLength: number, chunkLength: number) => {},
    logger: (message: string) => {},
    requestOpts: "requestOpts",
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
        family: 5,
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
        },
    },
    seleniumArgs: ["bla", "foo"],
    javaArgs: ["bla", "foo"],
    spawnOptions: {},
    javaPath: "javaPath",
    requestOpts: "requestOpts",
};
startOpts = {};

const startOptsCompact: StartOpts = {
    version: "version",
    drivers: {
        firefox: {
            version: "version",
        },
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
start(startOpts).then((cp) => {
    cp.kill();
});
start(installOptsCompact);
start();

// install method
install(installOpts).then(() => {});
install(installOptsCompact);
install();
