// Type definitions for drivelist 6.4
// Project: https://github.com/balena-io-modules/drivelist
// Definitions by: Xiao Deng <https://github.com/WholeMilk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type BusType = "SATA" | "SCSI" | "ATA" | "IDE" | "PCI" | "UNKNOWN";

export interface MountPoint {
    path: string;
    label?: string;
}

export interface Drive {
    enumerator: string;
    busType: BusType;
    busVersion: string | null;
    device: string;
    devicePath: string | null;
    raw: string;
    description: string;
    error: any; // can be null
    size: number | null;
    blockSize: number | null;
    logicalBlockSize: number | null;
    mountpoints: MountPoint[];
    isReadOnly: boolean;
    isSystem: boolean;
    isVirtual: boolean | null;
    isRemovable: boolean | null;
    isCard: boolean | null;
    isSCSI: boolean | null;
    isUSB: boolean | null;
    isUAS: boolean | null;
}

export function list(callback: (error: any, drives: Drive[]) => void): void;
