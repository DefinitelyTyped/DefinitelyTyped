import * as packager from "electron-packager";

function callback(err: Error, appPath: string) {
	const msg = err.message;
	const	index = appPath.indexOf("test");
}

packager({
	dir: ".",
	name: "myapplication",
	platform: "win32",
	arch: "all",
	electronVersion: "0.34.0"
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	electronVersion: "0.34.0",
	all: true
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	platform: "win32",
	arch: "all",
	electronVersion: "0.34.0"
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	electronVersion: "0.34.0",
	all: true
}, callback);
