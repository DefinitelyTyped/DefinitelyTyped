// Type definitions for mock-aws-s3 2.6
// Project: https://github.com/MathieuLoutre/mock-aws-s3
// Definitions by: Elliot Blackburn <https://github.com/bluehatbrit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mock-aws-s3
// TypeScript Version: 2.2

// This is a mocking library, types should reflect that of the actual library.
export * from "aws-sdk";
import { GlobalConfigInstance } from "aws-sdk/lib/config";

export interface MockConfigInstance extends GlobalConfigInstance {
    basePath: string;
}

export let config: MockConfigInstance;
