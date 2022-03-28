// Type definitions for minimatch-all 1.1
// Project: https://github.com/joshwnj/minimatch-all
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IOptions } from 'minimatch';

declare function minimatchAll(path: string, patterns: string[], opts?: IOptions): boolean;

export = minimatchAll;
