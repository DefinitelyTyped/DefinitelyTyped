// Type definitions for commander-remaining-args 1.2
// Project: https://github.com/axelchalon/commander-remaining-args#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { Command } from 'commander';

declare function getRemainingArgs(cli: Command): string[];

export = getRemainingArgs;
