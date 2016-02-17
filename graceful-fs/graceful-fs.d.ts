// Type definitions for graceful-fs 2.0.0
// Project: https://github.com/cowboy/graceful-fs
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'graceful-fs' {
	import fs = require('fs');
	export = fs;
}
