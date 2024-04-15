/**
 * Returns the full device list
 */
export function deviceList(): Device[];

/**
 * Returns the full brand list
 */
export function brandList(): string[];

/**
 * Returns a device list with matching retail brand.
 */
export function getDevicesByBrand(brand: string, options?: Options): Device[];

/**
 * Returns a device list with matching marketing name.
 */
export function getDevicesByName(name: string, options?: Options): Device[];

/**
 * Returns a device list with matching build.os.DEVICE.
 */
export function getDevicesByDeviceId(deviceId: string, options?: Options): Device[];

/**
 * Returns a device list with matching build.os.MODEL.
 */
export function getDevicesByModel(model: string, Options?: Options): Device[];

export interface Options {
    /**
     * do not care of case type
     * @default false
     */
    caseInsensitive?: boolean | undefined;

    /**
     * return partial (substring) results too
     * @default false
     */
    contains?: boolean | undefined;
}

export interface Device {
    brand: string;
    name: string;
    device: string;
    model: string;
}
