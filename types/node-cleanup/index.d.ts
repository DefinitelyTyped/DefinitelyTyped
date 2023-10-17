// Note that ES6 modules cannot directly export callable functions.
// This file should be imported using the CommonJS-style:
//    import nodeCleanup = require('node-cleanup');

export = install;

interface StderrMessages {
    ctrl_C?: string;
    uncaughtException?: string;
}

type Handler = (exitCode: number | null, signal: string | null) => boolean | undefined | void;

declare function install(cleanupHandler?: Handler, stderrMessages?: StderrMessages): void;

declare namespace install {
    function uninstall(): void;
}
