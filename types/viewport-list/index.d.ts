export = viewportList;

interface Device {
    name: string;
    platform: string;
    os: string;
    size: string;
    release: string;
}

/**
 * Returns a list of devices and their veiwports
 *
 * @param items - An array of device names to fetch
 * @returns - An array of viewports
 */
declare function viewportList(items?: string[]): Device[];
