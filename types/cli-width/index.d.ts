// Type definitions for cli-width 4.0
// Project: https://github.com/knownasilya/cli-width#readme
// Definitions by: Simon Boudrias <https://github.com/SBoudrias>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'stream';
import tty = require('tty');

declare function cliWidth(options?: { defaultWidth?: number; output?: Stream, tty?: typeof tty }): number;

export = cliWidth;
