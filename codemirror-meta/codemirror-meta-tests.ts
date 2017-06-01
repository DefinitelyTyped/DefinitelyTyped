/// <reference path="codemirror-meta.d.ts" />

var testModeInfo: CodeMirror.ModeInfo;
testModeInfo = { name: "test name", mode: "test mode" };
testModeInfo = { name: "test name", mode: "test mode", mime: "test/mime" };
testModeInfo = { name: "test name", mode: "test mode", mimes: ["test/mime1", "test/mime2"] };
testModeInfo = { name: "test name", mode: "test mode", alias: ["test alias"] };
testModeInfo = { name: "test name", mode: "test mode", ext: ["test extension"] };
testModeInfo = { name: "test name", mode: "test mode", file: /^TESTFILE$/ };
testModeInfo = { name: "test name", mode: "test mode", mimes: ["test/mime1", "test/mime2"], alias: ["test alias"], ext: ["test extension"], file: /^TESTFILE$/ };

CodeMirror.modeInfo.push(testModeInfo);

CodeMirror.findModeByMIME("test/mime");
CodeMirror.findModeByName("test mode");
CodeMirror.findModeByFileName("test.java");
CodeMirror.findModeByExtension("java");
