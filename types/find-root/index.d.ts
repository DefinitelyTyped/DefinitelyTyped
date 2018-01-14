
type FindRootCheckFn = (dir: string) => boolean;


/**
 * Returns the path for the nearest directory to startingPath containing a package.json file
 * @param startingPath The path to start searching form, e.g. __dirname
 * @throws {Error} if package.json cannot be found
 */
declare function findRoot(startingPath: string): string;

/**
 * Returns the path for the nearest directory to startingPath where the check function reeturns true
 * @param startingPath The path to start searching form, e.g. __dirname
 * @param check The check predicate
 * @throws {Error} If the function never returns true
 */
declare function findRoot(startingPath: string, check: FindRootCheckFn): string;

export = findRoot;
