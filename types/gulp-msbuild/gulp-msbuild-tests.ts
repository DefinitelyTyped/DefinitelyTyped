import msbuild = require("gulp-msbuild");

const stream = msbuild({
    stdout: false,
    stderr: true,
    errorOnFail: false,
    logCommand: false,
    targets: ['Rebuild'],
    configuration: 'Release',
    toolsVersion: 4.0,
    architecture: 'x86',
    properties: { WarningLevel: 2 },
    verbosity: 'quiet',
    maxcpucount: 0,
    nodeReuse: true,
    nologo: false,
    fileLoggerParameters: 'LogFile=Build.log;Append;Verbosity=diagnostic',
    consoleLoggerParameters: '',
    loggerParameters: 'XMLLogger,./MyLogger.dll;OutputAsHTML',
    emitEndEvent: false
});
