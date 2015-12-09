// Type definitions for mock-fs 2.5.0
// Project: https://github.com/tschaub/mock-fs
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "mock-fs" {
	import fs = require("fs");

	function mock(config?: mock.Config): void;

	module mock {
		function file(config: FileConfig): File;
		function directory(config: DirectoryConfig): Directory;
		function symlink(config: SymlinkConfig): Symlink;

		function restore(): void;

		function fs(config?: Config): typeof fs;

		interface Config {
			[path: string]: string | Buffer | File | Directory | Symlink | Config;
		}

		interface CommonConfig {
			mode?: number;
			uid?: number;
			git?: number;
			atime?: Date;
			ctime?: Date;
			mtime?: Date;
		}

		interface FileConfig extends CommonConfig {
			content: string | Buffer;
		}
		interface DirectoryConfig extends CommonConfig {
			items: Config;
		}
		interface SymlinkConfig extends CommonConfig {
			path: string;
		}

		class File { private _file: any; }
		class Directory { private _directory: any; }
		class Symlink { private _symlink: any; }
	}

	export = mock;
}
