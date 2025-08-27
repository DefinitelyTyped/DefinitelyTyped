import { Options, Parser, Transform } from "./core";

export interface TestOptions {
    parser?: Parser | "babylon" | "flow" | "ts" | "tsx" | "babel" | undefined;
}

export function applyTransform(
    module:
        | {
            default: Transform;
            parser: TestOptions["parser"];
        }
        | Transform,
    options: Options | null | undefined,
    input: {
        path?: string;
        source: string;
    },
    testOptions?: TestOptions,
): string;

export function defineTest(
    dirName: string,
    transformName: string,
    options?: Options | null,
    testFilePrefix?: string,
    testOptions?: TestOptions,
): void;

export function runTest(
    dirName: string,
    transformName: string,
    options: Options,
    testFilePrefix?: string,
    testOptions?: TestOptions,
): string;

export function defineInlineTest(
    module:
        | {
            default: Transform;
            parser: TestOptions["parser"];
        }
        | Transform,
    options: Options,
    inputSource: string,
    expectedOutputSource: string,
    testName?: string,
): void;

export function runInlineTest(
    module:
        | {
            default: Transform;
            parser: TestOptions["parser"];
        }
        | Transform,
    options: Options,
    input: {
        path?: string;
        source: string;
    },
    expectedOutput: string,
    testOptions?: TestOptions,
): string;

export function defineSnapshotTest(
    module:
        | {
            default: Transform;
            parser: TestOptions["parser"];
        }
        | Transform,
    options: Options,
    input: string,
    testName?: string,
): void;

export function runSnapshotTest(
    module:
        | {
            default: Transform;
            parser: TestOptions["parser"];
        }
        | Transform,
    options: Options,
    input: {
        path?: string;
        source: string;
    },
): string;
