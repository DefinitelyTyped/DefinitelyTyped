// Type definitions for global-dirs 0.1
// Project: https://github.com/sindresorhus/global-dirs#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const npm: GlobalDirs;
export const yarn: GlobalDirs;

export interface GlobalDirs {
    packages: string;
    binaries: string;
    prefix: string;
}
