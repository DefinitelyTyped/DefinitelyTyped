// Type definitions for @lerna/run-topologically 4.0
// Project: https://github.com/lerna/lerna/tree/main/utils/run-topologically
// Definitions by: donmahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Package } from '@lerna/package';
import { QueryGraphConfig } from '@lerna/query-graph';

export type TopologicalConfig = QueryGraphConfig & { concurrency: number };
export function runTopologically<T>(
    packages: Package[],
    runner: (pkg: Package) => Promise<T>,
    options?: TopologicalConfig,
): Promise<T[]>;
