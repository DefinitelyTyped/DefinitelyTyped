// Type definitions for cross-spawn 6.0
// Project: https://github.com/moxystudio/node-cross-spawn
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as child_process from 'child_process';

/** @inheritDoc */
declare const spawn: typeof child_process.spawn;

export = spawn;
