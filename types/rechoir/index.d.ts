// Type definitions for rechoir 0.6
// Project: https://github.com/gulpjs/rechoir
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Extensions } from 'interpret';

export function prepare(
    config: Extensions,
    filepath: string,
    requireFrom?: string
): true | Attempt[];

export interface Attempt {
    moduleName: string;
    module: any;
    error: Error | null;
}
