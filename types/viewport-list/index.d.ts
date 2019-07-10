// Type definitions for viewport-list 5.1
// Project: https://github.com/kevva/viewport-list#readme
// Definitions by: Satya Rohith <https://github.com/satyarohith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
