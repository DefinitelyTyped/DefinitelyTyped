// Type definitions for git-rev-sync 1.12
// Project: https://github.com/tblobaum/git-rev
// Definitions by: Khoi Nguyen <http://hellokhoi.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function short(filePath?: string, length?: number): string;
export function long(filePath?: string): string;
export function branch(branch?: string): void;
export function count(): number;
export function date(): Date;
export function isDirty(): boolean;
export function isTagDirty(): boolean;
export function message(): string;
export function remoteUrl(): string;
export function tag(makeDirty?: boolean): string;
