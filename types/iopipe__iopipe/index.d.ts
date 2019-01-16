// Type definitions for iopipe__iopipe 1.12
// Project: https://github.com/iopipe/iopipe (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Javon Harper <https://github.com/javonharper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LibraryConfig {
    debug?: boolean;
    token?: string;
    networkTimeout?: number;
    timeoutWindow?: number;
}

export type FunctionWrapper = (handler: any) => void;

export function label(label: string): void;

export function metric(label: string, value: number): void;

export namespace mark {
    function start(label: string): void;
    function end(label: string): void;
}

export default function iopipe(config?: LibraryConfig): FunctionWrapper;
