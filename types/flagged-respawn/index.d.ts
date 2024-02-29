/// <reference types="node" />

export = flaggedRespawn;

declare function flaggedRespawn(
    flags: string[],
    argv: string[],
    callback: flaggedRespawn.Callback,
): void;
declare function flaggedRespawn(
    flags: string[],
    argv: string[],
    forcedFlags: string | string[],
    callback: flaggedRespawn.Callback,
): void;

declare namespace flaggedRespawn {
    type Callback = (ready: boolean, proc: NodeJS.Process, argv: string[]) => void;
}
