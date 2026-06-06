/// <reference types="node" />

declare namespace gulpMsBuild {
    type GulpMsBuild = (options?: Options) => NodeJS.ReadWriteStream;

    interface Options {
        stdout?: boolean | undefined; // false
        stderr?: boolean | undefined; // true
        errorOnFail?: boolean | undefined; // false
        logCommand?: boolean | undefined; // false
        targets?: string[] | undefined; // ['Rebuild']
        configuration?: string | undefined; // 'Release' | 'Debug'
        toolsVersion?: number | undefined; // 4.0
        architecture?: string | undefined; // 'x86' | 'x64'
        properties?: any; // msbuild({ properties: { WarningLevel: 2 } })
        verbosity?: string | undefined; // 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'
        maxcpucount?: number | undefined; // Default: 0 = Automatic selection | Possible Values: -1 (MSBuild Default), 0 (Automatic), > 0 (Concrete value)
        nodeReuse?: boolean | undefined; // true = Nodes remain after the build finishes so that subsequent builds can use them
        nologo?: boolean | undefined; // false -> Show Startup Banner and Copyright Message
        fileLoggerParameters?: string | undefined; // msbuild({ fileLoggerParameters: 'LogFile=Build.log;Append;Verbosity=diagnostic' })
        consoleLoggerParameters?: string | undefined;
        loggerParameters?: string | undefined; // msbuild({ loggerParameters: 'XMLLogger,./MyLogger.dll;OutputAsHTML' })
        emitEndEvent?: boolean | undefined; // false
    }
}

declare var gulpMsBuild: gulpMsBuild.GulpMsBuild;
export = gulpMsBuild;
