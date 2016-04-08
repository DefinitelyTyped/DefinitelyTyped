/// <reference path="./electron-packager.d.ts" />

import * as packager from "electron-packager";

function callback(err: Error, appPath: string) {
	const
		msg = err.message,
		index = appPath.indexOf("test");
}

packager({
	dir: ".",
	name: "myapplication",
	platform: "win32",
	arch: "all",
	version: "0.34.0"
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	version: "0.34.0",
	all: true
}, callback);

const pkger = require("electron-packager");

pkger({
	dir: ".",
	name: "myapplication",
	platform: "win32",
	arch: "all",
	version: "0.34.0"
}, callback);

pkger({
	dir: ".",
	name: "myapplication",
	version: "0.34.0",
	all: true
}, callback);
