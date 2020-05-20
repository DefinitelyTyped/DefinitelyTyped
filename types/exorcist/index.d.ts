// Type definitions for exorcist v0.4.0
// Project: https://github.com/thlorenz/exorcist
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="through" />

declare module 'exorcist' {
    import through = require("through");

    /** Externalizes the source map found inside a stream to an external .map file.
     * Works with both JavaScript and CSS input streams
     * @param file full path to the map file to which to write the extracted source map
     * @param [url] full URL to the map file, set as sourceMappingURL in the streaming output (default: file)
     * @param [root] root URL for loading relative source paths, set as sourceRoot in the source map (default: "")
     * @param [base] base path for calculating relative source paths (default: use absolute paths)
     * @param [errorOnMissing] when truthy, causes 'error' to be emitted instead of 'missing-map' if no map was found in the stream (default: falsey)
     */
    function exorcist(file: string, url?: string, root?: string, base?: string, errorOnMissing?: boolean): through.ThroughStream;
    export = exorcist;
}
