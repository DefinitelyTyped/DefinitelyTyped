/**
 * Find the root directory of a Node.js project from a given path.
 *
 * @return the path for the nearest directory to startingPath containing a
 * package.json file or `null` if no one found.
 *
 * @param startingPath The path to start searching from, e.g. __dirname
 */
declare function findPkgDir(dir: string): string | null;

export = findPkgDir;
