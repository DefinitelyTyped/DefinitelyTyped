// Type definitions for gulp-msbuild 0.5
// Project: https://github.com/hoffi/gulp-msbuild#readme
// Definitions by: Spicy Pixel <http://spicypixel.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace gulpMsBuild {
    type GulpMsBuild = (options?: Options) => NodeJS.ReadWriteStream;

    interface Options {
        stdout?: boolean;       // false
        stderr?: boolean;       // true
        errorOnFail?: boolean;  // false
        logCommand?: boolean;   // false
        targets?: string[];     // ['Rebuild']
        configuration?: string; // 'Release' | 'Debug'
        toolsVersion?: number;  // 4.0
        architecture?: string;  // 'x86' | 'x64'
        properties?: any;       // msbuild({ properties: { WarningLevel: 2 } })
        verbosity?: string;     // 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'
        maxcpucount?: number;   // Default: 0 = Automatic selection | Possible Values: -1 (MSBuild Default), 0 (Automatic), > 0 (Concrete value)
        nodeReuse?: boolean;    // true = Nodes remain after the build finishes so that subsequent builds can use them
        nologo?: boolean;       // false -> Show Startup Banner and Copyright Message
        fileLoggerParameters?: string; // msbuild({ fileLoggerParameters: 'LogFile=Build.log;Append;Verbosity=diagnostic' })
        consoleLoggerParameters?: string;
        loggerParameters?: string; // msbuild({ loggerParameters: 'XMLLogger,./MyLogger.dll;OutputAsHTML' })
        emitEndEvent?: boolean; // false
    }
}

declare var gulpMsBuild: gulpMsBuild.GulpMsBuild;
export = gulpMsBuild;
