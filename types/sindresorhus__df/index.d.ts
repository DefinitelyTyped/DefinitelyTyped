// Type definitions for sindresorhus__df x.x
// Project: https://github.com/sindresorhus/df (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: My Self <https://github.com/whatknight>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace Df;

export interface SpaceInfo {
    filesystem: string;
    size: number;
    used: number;
    available: number;
    capacity: number;
    mountpoint: string;
}

interface Df {
    (): Promise<SpaceInfo[]>;
    fs: (filesystem: string) => Promise<SpaceInfo>;
    file: (file: string) => Promise<SpaceInfo>;
}

declare const df: Df;

export default df;

