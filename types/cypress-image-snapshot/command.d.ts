interface MaybeOptions {
    customSnapshotsDir?: string;
    customDiffDir?: string;
    failureThreshold?: number;
    failureThresholdType?: 'percent' | 'number';
    customDiffConfig?: {
        threshold: number;
    };
    capture?: 'viewport';
}

declare function addMatchImageSnapshotCommand(maybeNameOrOptions?: string | MaybeOptions): void;
declare function addMatchImageSnapshotCommand(maybeName: string, maybeOptions?: MaybeOptions): void;

export { addMatchImageSnapshotCommand };
