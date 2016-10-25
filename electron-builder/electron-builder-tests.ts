/// <reference path="./electron-builder.d.ts" />

import * as factory from "electron-builder";
const builder = factory.init();

function callback(err: Error) {
	const msg = err.message;
}

builder.build({
	appPath: ".",
	out: "out",
	platform: "win",
	config: {
		osx: {
			title: "myapplication",
			icon: "icon.icns",
			"icon-size": 80,
			background: "installer.png",
			contents: [
				{ x: 438, y: 344, type: "link", path: "/Applications" },
				{ x: 192, y: 344, type: "file" },
			]
		},
		win: {
			title: "myapplication",
			icon: "icon.ico"
		}
	}
}, callback);

const bldr = require("electron-builder").init();

bldr.build({
	appPath: ".",
	out: "out",
	platform: "osx",
	config: {
		osx: {
			title: "myapplication",
			icon: "icon.icns",
			"icon-size": 80,
			background: "installer.png",
			contents: [
				{ x: 438, y: 344, type: "link", path: "/Applications" },
				{ x: 192, y: 344, type: "file" },
			]
		},
		win: {
			title: "myapplication",
			icon: "icon.ico"
		}
	}
}, callback);
