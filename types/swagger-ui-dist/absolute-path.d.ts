/*
 * getAbsoluteFSPath
 * @return When run in NodeJS env, returns the absolute path to the current directory
 *                  When run outside of NodeJS, will return an error message
 */
declare function getAbsoluteFSPath(): string;

export = getAbsoluteFSPath;
