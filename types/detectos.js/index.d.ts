// Type definitions for detectos.js 1.5
// Project: https://github.com/1000tech/detectOS.js
// Definitions by: János Márkus <https://github.com/Aresius423>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PropertyData {
    string?: string;
    prop?: string | undefined;
    subString: string;
    identity: string;
    versionSearch?: string;
}

declare class DetectOS {
    constructor();

    browser: string | null;
    version: string | null;
    OS: string | null;

    searchString(data: PropertyData[]): string | null;
    searchVersion(dataString: string): number | null;

    dataBrowser(): PropertyData[];
    dataOS(): PropertyData[];
}

export default DetectOS;
