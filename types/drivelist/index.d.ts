export type BusType = "SATA" | "SCSI" | "ATA" | "IDE" | "PCI" | "UNKNOWN";

export interface MountPoint {
    path: string;
    label?: string | undefined;
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
