export default class Drive {
    info(diskName: string): Promise<DriveInfo>;

    free(diskName: string): Promise<DriveFreeInfo>;

    used(diskName: string): Promise<DriveUsedInfo>;
}

export interface DriveFreeInfo {
    totalGb: number;
    freeGb: number;
    freePercentage: number;
}

export interface DriveUsedInfo {
    totalGb: number;
    usedGb: number;
    usedPercentage: number;
}

export interface DriveInfo extends DriveFreeInfo, DriveUsedInfo {
}
