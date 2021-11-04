

var traceLevel: number = OuralabsPlugin.LogLevel.TRACE;
var debugLevel: number = OuralabsPlugin.LogLevel.DEBUG;
var infoLevel: number = OuralabsPlugin.LogLevel.INFO;
var warnLevel: number = OuralabsPlugin.LogLevel.WARN;
var errorLevel: number = OuralabsPlugin.LogLevel.ERROR;
var fatalLevel: number = OuralabsPlugin.LogLevel.FATAL;

OuralabsPlugin.init("a");
OuralabsPlugin.init("a", () => {});
OuralabsPlugin.init("a", () => {}, (error: string) => {});

OuralabsPlugin.setAttributes("a");
OuralabsPlugin.setAttributes("a", "b");
OuralabsPlugin.setAttributes("a", "b", "c");
OuralabsPlugin.setAttributes("a", null, "c");
OuralabsPlugin.setAttributes("a", "b", "c");
OuralabsPlugin.setAttributes("a", "b", "c", () => {});
OuralabsPlugin.setAttributes("a", "b", "c", () => {}, (error: string) => {});

OuralabsPlugin.setLogToBrowserConsole(true);

OuralabsPlugin.setHookBrowserConsole(true);

OuralabsPlugin.logTrace("a", "b");
OuralabsPlugin.logTrace("a", "b", { "whoa": "yep" });
OuralabsPlugin.logTrace("a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.logTrace("a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.logTrace("a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.logDebug("a", "b");
OuralabsPlugin.logDebug("a", "b", { "whoa": "yep" });
OuralabsPlugin.logDebug("a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.logDebug("a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.logDebug("a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.logInfo("a", "b");
OuralabsPlugin.logInfo("a", "b", { "whoa": "yep" });
OuralabsPlugin.logInfo("a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.logInfo("a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.logInfo("a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.logWarn("a", "b");
OuralabsPlugin.logWarn("a", "b", { "whoa": "yep" });
OuralabsPlugin.logWarn("a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.logWarn("a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.logWarn("a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.logError("a", "b");
OuralabsPlugin.logError("a", "b", { "whoa": "yep" });
OuralabsPlugin.logError("a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.logError("a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.logError("a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.logFatal("a", "b");
OuralabsPlugin.logFatal("a", "b", { "whoa": "yep" });
OuralabsPlugin.logFatal("a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.logFatal("a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.logFatal("a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.log(OuralabsPlugin.LogLevel.TRACE, "a", "b");
OuralabsPlugin.log(OuralabsPlugin.LogLevel.TRACE, "a", "b", { "whoa": "yep" });
OuralabsPlugin.log(OuralabsPlugin.LogLevel.TRACE, "a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.TRACE, "a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.TRACE, "a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.log(OuralabsPlugin.LogLevel.DEBUG, "a", "b");
OuralabsPlugin.log(OuralabsPlugin.LogLevel.DEBUG, "a", "b", { "whoa": "yep" });
OuralabsPlugin.log(OuralabsPlugin.LogLevel.DEBUG, "a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.DEBUG, "a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.DEBUG, "a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.log(OuralabsPlugin.LogLevel.INFO, "a", "b");
OuralabsPlugin.log(OuralabsPlugin.LogLevel.INFO, "a", "b", { "whoa": "yep" });
OuralabsPlugin.log(OuralabsPlugin.LogLevel.INFO, "a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.INFO, "a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.INFO, "a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.log(OuralabsPlugin.LogLevel.WARN, "a", "b");
OuralabsPlugin.log(OuralabsPlugin.LogLevel.WARN, "a", "b", { "whoa": "yep" });
OuralabsPlugin.log(OuralabsPlugin.LogLevel.WARN, "a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.WARN, "a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.WARN, "a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.log(OuralabsPlugin.LogLevel.ERROR, "a", "b");
OuralabsPlugin.log(OuralabsPlugin.LogLevel.ERROR, "a", "b", { "whoa": "yep" });
OuralabsPlugin.log(OuralabsPlugin.LogLevel.ERROR, "a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.ERROR, "a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.ERROR, "a", "b", null, () => {}, (error: string) => {});

OuralabsPlugin.log(OuralabsPlugin.LogLevel.FATAL, "a", "b");
OuralabsPlugin.log(OuralabsPlugin.LogLevel.FATAL, "a", "b", { "whoa": "yep" });
OuralabsPlugin.log(OuralabsPlugin.LogLevel.FATAL, "a", "b", { "whoa": "yep" }, () => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.FATAL, "a", "b", { "whoa": "yep" }, () => {}, (error: string) => {});
OuralabsPlugin.log(OuralabsPlugin.LogLevel.FATAL, "a", "b", null, () => {}, (error: string) => {});
