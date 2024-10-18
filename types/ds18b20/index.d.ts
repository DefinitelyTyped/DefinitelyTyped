// TypeScript Version: 2.1

/// <reference types="node" />

/**
 * Options for a `temperature` call
 */
export interface TemperatureOptions {
    parser: "decimal" | "default" | "hex";
}

/**
 * Callback for a `sensors` call
 * @param  err An error or null
 * @param  ids An array of sensor IDs
 */
export type SensorsCallback = (err: Error | null, ids: string[]) => void;

/**
 * Callback for a `temperature` call
 * @param  err   An error or null
 * @param  value The temperature
 */
export type TemperatureCallback = (err: Error | null, value: number) => void;

/**
 * Get all connected sensor IDs as array
 * @param callback callback(err, array)
 */
export function sensors(callback: SensorsCallback): void;

/**
 * Get the temperature of a given sensor
 * @param sensorId The sensor ID
 * @param callback callback(err, value)
 */
export function temperature(sensorId: string, callback: TemperatureCallback): void;

/**
 * Get the temperature of a given sensor
 * @param sensorId The sensor ID
 * @param options  The options
 * @param callback callback(err, value)
 */
export function temperature(sensorId: string, options: TemperatureOptions, callback: TemperatureCallback): void;

/**
 * Get the temperature of a given sensor sync
 * @param sensorId The sensor ID
 * @param options  The options
 * @return The temperature
 */
export function temperatureSync(sensorId: string, options?: TemperatureOptions): number;
