/**
 * Public class for WindowsCPU
 */
declare class WindowsCPU {
    /**
     * Access to uninstantiated WindowsCPU class
     */
    static WindowsCPU: { new(): WindowsCPU };
    /**
     * Path the `wmic` executable
     */
    wmic: string;

    constructor();

    /**
     * Checks if the current platform is supported by windows-cpu
     * @return {boolean} Returns `true` if platform is supported, otherwise `false`.
     */
    isSupported(): boolean;
    /**
     * Gets the total load in percent for all processes running on the current machine per CPU.
     */
    totalLoad(): Promise<number[]>;
    /**
     * Finds the current processor load for all processes or a specific process name or id.
     * @param {?string} arg Optional process name or id to lookup
     */
    findLoad(arg?: string): Promise<{ load: number[] | 0; found: { pid: number; process: string; load: number }[] }>;
    /**
     * Retrieves the current cpu load for all node processes running on the current machine
     */
    nodeLoad(): Promise<{ load: number[] | 0; found: { pid: number; process: string; load: number }[] }>;
    /**
     * Retrieves the current cpu load for this process.
     */
    thisLoad(): Promise<{ load: number[] | 0; found: { pid: number; process: string; load: number }[] }>;
    /**
     * Gets list of all processors in the current machine.
     */
    cpuInfo(): Promise<string[]>;
    /**
     * Gets the total memory usage on the machine in KB, MB and GB.
     */
    totalMemoryUsage(): Promise<{ usageInKb: number; usageInMb: number; usageInGb: number }>;
    /**
     * Sanitizes input to prevent malicious shell injection
     */
    private _shellEscape(arg: string): string;
}

declare const _default: WindowsCPU & { WindowsCPU: { new(): WindowsCPU } };
export = _default;
