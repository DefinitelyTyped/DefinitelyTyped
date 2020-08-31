// Type definitions for git-rev-sync 2.0
// Project: https://github.com/kurttheviking/git-rev-sync-js
// Definitions by: khoi-fish <https://github.com/khoi-fish>
//                 pkuczynski <https://github.com/pkuczynski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function branch(filePath?: string): string;
export function count(): number;
export function date(): Date;
export function hasUnstagedChanges(): boolean;
export function isDirty(): boolean;
export function isTagDirty(): boolean;
export function long(filePath?: string): string;
export function message(): string;
export function remoteUrl(): string;
export function short(filePath?: string, length?: number): string;
export function tag(makeDirty?: boolean): string;
export function tagFirstParent(makeDirty?: boolean): string;
