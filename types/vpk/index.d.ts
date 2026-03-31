/// <reference types="node" />

declare namespace VPK {
    interface VPKHeader {
        version: number;
        treeLength: number;
        unknown1?: number;
        footerLength?: number;
        unknown3?: number;
        unknown4?: number;
    }

    interface VPKDirectoryEntry {
        crc: number;
        preloadBytes: number;
        archiveIndex: number;
        entryOffset: number;
        entryLength: number;
        preloadOffset?: number;
    }
}

declare class VPK {
    constructor(path: string);

    directoryPath: string;
    header: VPK.VPKHeader;
    tree: Record<string, VPK.VPKDirectoryEntry>;

    isValid(): boolean;
    load(): void;
    readonly files: string[];
    getFile(path: string): Buffer | null;
}

export = VPK;
