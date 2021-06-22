import '../';

export interface ModeInfo {
    name: string;
    mime?: string;
    mimes?: string[];
    mode: string;
    file?: RegExp;
    ext?: string[];
    alias?: string[];
}

declare module '../' {
    const modeInfo: ModeInfo[];
    function findModeByMIME(mime: string): ModeInfo | undefined;
    function findModeByExtension(ext: string): ModeInfo | undefined;
    function findModeByFileName(filename: string): ModeInfo | undefined;
    function findModeByName(name: string): ModeInfo | undefined;
}
