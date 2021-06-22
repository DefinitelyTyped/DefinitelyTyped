// Type definitions for symlink-or-copy 1.2
// Project: https://github.com/broccolijs/node-symlink-or-copy#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function sync(srcPath: string, destPath: string): void;

export const canSymlink: boolean;
export const canSymlinkFile: boolean;
export const canSymlinkDirectory: boolean;
