import { SubProcess } from 'teen_process';
import { AdbMethods, BinaryName } from './tools';

export { getAndroidBinaryPath } from './tools';
export { getSdkRootFromEnv } from './helpers';

export const DEFAULT_ADB_PORT: number;

export interface AdbExecutable {
    path: string;
    defaultArgs: ReadonlyArray<string>;
}

export interface CreateAdbOptions {
    sdkRoot?: string | null;
    udid?: string | null;
    appDeviceReadyTimeout?: number | null;
    useKeystore?: boolean | null;
    keystorePath?: string | null;
    keystorePassword?: string | null;
    keyAlias?: string | null;
    keyPassword?: string | null;
    executable?: Partial<AdbExecutable>;
    tmpDir?: string;
    curDeviceId?: string | null;
    emulatorPort?: number | null;
    binaries?: Partial<Record<BinaryName, string>>;
    instrumentProc?: SubProcess | null;
    suppressKillServer?: boolean | null;
    adbPort?: number;
    adbExecTimeout?: number;
    remoteAppsCacheLimit?: number;
    buildToolsVersion?: string | null;
    allowOfflineDevices?: boolean;
    allowDelayAdb?: boolean;
}

interface ADB extends AdbMethods, Required<CreateAdbOptions> {
    executable: AdbExecutable;

    /**
     * Create a new instance of `ADB` that inherits configuration from this `ADB` instance.
     * This avoids the need to call `ADB.createADB()` multiple times.
     * @param opts - Additional options mapping to pass to the `ADB` constructor.
     * @returns The resulting class instance.
     */
    clone(opts?: CreateAdbOptions): ADB;
}

declare const ADB: {
    prototype: ADB;
    new (opts?: CreateAdbOptions): ADB;

    createADB(opts?: CreateAdbOptions): Promise<ADB>;
};

export { ADB };
export default ADB;
