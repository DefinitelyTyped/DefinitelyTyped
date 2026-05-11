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
