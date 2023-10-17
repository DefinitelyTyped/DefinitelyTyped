interface AwsRegionInfo {
    name: string;
    full_name: string;
    code: string;
    public: boolean;
    zones: ReadonlyArray<string>;
}

interface ListOptions {
    public?: boolean | undefined;
}

interface LookupOptionsCode {
    code: string;
}

interface LookupOptionsName {
    name: string;
}

type LookupOptions = LookupOptionsCode | LookupOptionsName;

interface AwsRegions {
    list: (options?: ListOptions) => AwsRegionInfo[];
    lookup: (options: LookupOptions) => AwsRegionInfo;
}

declare const awsRegions: AwsRegions;

export = awsRegions;
