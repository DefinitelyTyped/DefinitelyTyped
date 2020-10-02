// Type definitions for aws-regions 2.1
// Project: https://github.com/jsonmaur/aws-regions#readme
// Definitions by: Alex Lapa <https://github.com/Deadarius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

interface AwsRegionInfo {
    name: string;
    full_name: string;
    code: string;
    public: boolean;
    zones: ReadonlyArray<string>;
}

interface ListOptions {
    public?: boolean;
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
