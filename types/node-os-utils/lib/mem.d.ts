export default class Mem {
    info(): Promise<MemInfo>;

    free(): Promise<MemFreeInfo>;

    used(): Promise<MemUsedInfo>;

    totalMem(): number;
}

export interface MemFreeInfo {
    totalMemMb: number;
    freeMemMb: number;
}

export interface MemUsedInfo {
    totalMemMb: number;
    usedMemMb: number;
}

export interface MemInfo extends MemFreeInfo, MemUsedInfo {
    freeMemPercentage: number;
}
