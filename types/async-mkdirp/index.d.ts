// Type definitions for async-mkdirp 1.2.4
// Project: https://github.com/simonlc/async-mkdirp
// Definitions by: Andrey Sakharov <https://github.com/muturgan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import fs = require('fs');

declare function mkdirp(path: fs.PathLike, mode?: number): Promise<void>;

export = mkdirp;
