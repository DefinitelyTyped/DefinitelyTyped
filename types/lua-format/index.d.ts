export interface Settings {
    RenameVariables?: boolean;
    RenameGlobals?: boolean;
    SolveMath?: boolean;
    Indentation?: string;
}

export function Beautify(code: string, settings: Settings): string;
export function Minify(code: string, settings: Settings): string;
