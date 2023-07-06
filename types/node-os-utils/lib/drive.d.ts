export default class Drive {
    info(diskName: string): Promise<DriveInfo>;

    free(diskName: string): Promise<DriveFreeInfo>;

    used(diskName: string): Promise<DriveUsedInfo>;
}

export interface DriveFreeInfo {
    totalGb: string;
    freeGb: string;
    freePercentage: string;
}

export interface DriveUsedInfo {
    totalGb: string;
    usedGb: string;
    usedPercentage: string;
}

export interface DriveInfo extends DriveFreeInfo, DriveUsedInfo {}
