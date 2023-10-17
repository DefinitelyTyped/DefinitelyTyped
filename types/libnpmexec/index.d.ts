/// <reference types="node" />

declare function libnpmexec(opts: {
    readonly args: ReadonlyArray<string>;
    readonly call?: string;
    readonly cache?: string;
    readonly npxCache?: string;
    readonly color?: boolean;
    readonly localBin?: string;
    readonly locationMsg?: string;
    readonly log?: {
        disableProgress?(): void;
        enableProgress?(): void;
        warn(title: string, message: string): void;
    };
    readonly globalBin?: string;
    readonly output?: (message: string) => void;
    readonly packages?: ReadonlyArray<string>;
    readonly path?: string;
    readonly runPath?: string;
    readonly scriptShell?: string;
    readonly yes?: boolean;
    readonly registry?: string;
}): Promise<{
    readonly code: number;
    readonly signal: string;
    readonly stdout: Buffer | string;
    readonly stderr: Buffer | string;
    readonly path: string;
    readonly event: string;
    readonly script: string;
}>;

export = libnpmexec;
