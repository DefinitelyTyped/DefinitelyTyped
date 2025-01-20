type FindRootCheckFn = (dir: string) => boolean;

/**
 * Returns the path for the nearest directory to startingPath containing a package.json file. If a check function is
 * provided, then this will return the nearest directory for which the function returns true.
 * @param startingPath The path to start searching from, e.g. __dirname
 * @param check The check predicate
 * @throws {Error} if package.json cannot be found or if the function never returns true
 */
declare function findRoot(startingPath: string, check?: FindRootCheckFn): string;

export = findRoot;
