import '../../';

export interface RequireModeOptions {
    path?(mode: string): string;
    loadMode?(file: string, callback: () => void): void;
}

declare module '../../' {
    let modeURL: string;

    function requireMode(mode: string | { name: string }, callback: () => void, options?: RequireModeOptions): void;

    function autoLoadMode(instance: Editor, mode: string, options?: RequireModeOptions): void;
}
