export = Mode;

declare class Mode {
    owner: Mode.Permissions;
    group: Mode.Permissions;
    others: Mode.Permissions;
    setuid: boolean;
    setgid: boolean;
    sticky: boolean;
    constructor(stat: { mode: number });
    isBlockDevice(isBlockDevice?: boolean): boolean;
    isCharacterDevice(isCharacterDevice?: boolean): boolean;
    isDirectory(isDirectory?: boolean): boolean;
    isFIFO(isFIFO?: boolean): boolean;
    isFile(isFile?: boolean): boolean;
    isSocket(isSocket?: boolean): boolean;
    isSymbolicLink(isSymbolicLink?: boolean): boolean;
    valueOf(): number;
    toOctal(): string;
}

declare namespace Mode {
    interface Permissions {
        read: boolean;
        write: boolean;
        execute: boolean;
    }
}
