// Type definitions for path-type 3.0
// Project: https://github.com/sindresorhus/path-type#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const file: PathTypeFn;
export const dir: PathTypeFn;
export const symlink: PathTypeFn;

export const fileSync: PathTypeSyncFn;
export const dirSync: PathTypeSyncFn;
export const symlinkSync: PathTypeSyncFn;

export type PathTypeFn = (path: string) => Promise<boolean>;
export type PathTypeSyncFn = (path: string) => boolean;
