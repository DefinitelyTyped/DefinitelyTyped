// Definitions by: Eric Luce <https://github.com/eluce2>
/// <reference lib="dom" />

import { FMScriptOption } from "filemaker-webviewer";

if (window.FileMaker) {
    window.FileMaker?.PerformScript("scriptName", "parameter");
    window.FileMaker?.PerformScriptWithOption('scriptName', 'parameter', FMScriptOption.CONTINUE);
}

// @ts-expect-error FileMaker may be undefined
window.FileMaker.PerformScript("scriptName", "parameter");
