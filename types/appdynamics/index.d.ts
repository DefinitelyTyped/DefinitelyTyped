/**
 * Starts the profiling process.
 */
export function profile(config: ProfileParameter): void;

/**
 * appdynamics monitors your Node.js applications in production.
 */
export as namespace appdynamics;

export interface ProfileParameter {
    controllerHostName?: string;
    controllerPort?: number;
    controllerSslEnabled?: boolean;
    accountName?: string;
    accountAccessKey?: string;
    applicationName?: string;
    tierName?: string;
    nodeName?: string;
    noNodeNameSuffix?: boolean;
    alwaysAddEumMetadataInHttpHeaders?: boolean;
    btEntryPointDelayDisabled?: boolean;
    debug?: boolean;
    logging?: {
        logfiles?: Array<{
            root_directory?: string;
            filename?: string;
            level?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
            max_size?: number;
            max_file?: number;
            outputType?: string;
        }>;
    };
    maxProcessSnapshotsPerPeriod?: number;
    processSnapshotPeriodInSeconds?: number;
    autoSnapshotDurationSeconds?: number;
    rootTmpDir?: string;
    tmpDir?: string;
    reuseNode?: boolean;
    reuseNodePrefix?: string;
    certificateFile?: string;
    uniqueHostId?: string;
}
