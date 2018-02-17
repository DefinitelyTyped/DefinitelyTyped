import { interfaceExtends } from '../babel-types/index.d'
// Type definitions for [ app-root-dir ] [ 1.0.2 ]
// Project : [ https://github.com/philidem/node-app-root-dir ]
// Definitions by: shaochenyang <https://github.com/chenyang-biu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AppRootDir {
  // Get the application's root directory
  get(): string
  /**
   * Set the application's root directory
   *    this will set a global so that no matter
   *    how many instances of app-root-dir module are installed,
   *    they will all return the same directory
   */
  set(dirname: string): void
}

declare const AppRootDir: AppRootDir

export = AppRootDir
