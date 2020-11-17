// NOTE: These definitions support NodeJS and TypeScript 3.2 - 3.4.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/base.d.ts         - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.1
//          - ~/ts3.2/base.d.ts   - Definitions specific to TypeScript 3.2
//          - ~/ts3.2/index.d.ts  - Definitions specific to TypeScript 3.2 with global and assert pulled in

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:

/// <reference path="../events.d.ts" />
/// <reference path="../punycode.d.ts" />

import 'buffer';
import 'console';
import 'domain';
import 'module';
import 'process';
import 'stream';
import 'timers';
import 'util';

export * from '../globals';
