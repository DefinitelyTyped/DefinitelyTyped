/// <reference lib="dom" />

if (window.FileMaker) {
    window.FileMaker?.PerformScript("scriptName", "parameter");
    window.FileMaker?.PerformScriptWithOption("scriptName", "parameter", "0");
    window.FileMaker?.PerformScriptWithOption("scriptName", "parameter", "1");
    window.FileMaker?.PerformScriptWithOption("scriptName", "parameter", "2");
    window.FileMaker?.PerformScriptWithOption("scriptName", "parameter", "3");
    window.FileMaker?.PerformScriptWithOption("scriptName", "parameter", "4");
    window.FileMaker?.PerformScriptWithOption("scriptName", "parameter", "5");
    // @ts-expect-error "6" is not a valid option
    window.FileMaker?.PerformScriptWithOption("scriptName", "parameter", "6");
}

// prettier-ignore
// @ts-expect-error FileMaker may be undefined
window.FileMaker.PerformScript("scriptName", "parameter");
