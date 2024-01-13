export namespace MemoryMonitoring {
    /**
     * Returns the amount of memory used.
     * @param unit Return measurement unit. Support GB, MB or kB
     * @returns Memory Usage
     */
    function getMemoryUsage(unit: string): number;
    /**
     * Returns the amount of memory used.
     * @param unit Return measurement unit. Support GB, MB or kB
     * @returns Memory value used truncated
     */
    function memoryUsageTrunc(unit: string): number;
    /**
     * Returns the amount of memory used.
     * @param unit Return measurement unit. Support GB, MB or kB
     * @returns Memory value used fixed
     */
    function getMemoryUsageFixed(unit: string, value: number): number;
    /**
     * Returns the total memory used.
     * @param unit Return measurement unit. Support GB, MB or kB
     * @returns Memory value total
     */
    function getMemoryTotal(unit: string): number;
    /**
     * Returns the total memory used.
     * @param unit Return measurement unit. Support GB, MB or kB
     * @returns Memory value total truncated
     */
    function getMemoryTotalTrunc(unit: string): number;
    /**
     * Returns the total memory used.
     * @param unit Return measurement unit. Support GB, MB or kB
     * @returns Memory value total fixed
     */
    function getMemoryTotalFixed(unit: string, value: number): number;
}

export namespace RegisterMonitoring {
    /**
     * Writes the measurement to a file.
     * @param file Recording file
     * @param unit Return measurement unit. Support GB, MB or kB
     */
    function registerMemoryUsage(file: string, unit: string): void;
    /**
     * Writes the measurement to a file.
     * @param file Recording file
     * @param unit Return measurement unit. Support GB, MB or kB
     */
    function registerMemoryUsageTrunc(file: string, unit: string): void;
    /**
     * Writes the measurement to a file.
     * @param file Recording file
     * @param unit Return measurement unit. Support GB, MB or kB
     */
    function registerMemoryUsageFixed(file: string, unit: string): void;
}
