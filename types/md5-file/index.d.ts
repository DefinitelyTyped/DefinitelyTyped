// Type definitions for md5-file 4.0
// Project: https://github.com/roryrjb/md5-file#readme
// Definitions by: BamButz <https://github.com/BamButz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var module: {
	(filename: string, cb: (err: Error, hash: string) => void): void;
	sync: (filename: string) => string;
};

export = module;
