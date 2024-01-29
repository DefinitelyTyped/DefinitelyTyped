import { Package } from "@lerna/package";
import { QueryGraphConfig } from "@lerna/query-graph";

export type TopologicalConfig = QueryGraphConfig & { concurrency: number };
export function runTopologically<T>(
    packages: Package[],
    runner: (pkg: Package) => Promise<T>,
    options?: TopologicalConfig,
): Promise<T[]>;
