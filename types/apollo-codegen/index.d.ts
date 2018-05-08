// Type definitions for apollo-codegen 0.16
// Project: https://github.com/apollographql/apollo-codegen
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export function downloadSchema(
    url: string,
    outputPath: string,
    additionalHeaders: { [name: string]: string },
    insecure: boolean,
    method: string
): Promise<void>;

export function introspectSchema(
    schemaPath: string,
    outputPath: string
): Promise<void>;

export function printSchema(
    schemaPath: string,
    outputPath: string
): Promise<void>;

export function generate(
    inputPaths: string[],
    schemaPath: string,
    outputPath: string,
    target: "json" | "swift" | "ts" | "typescript" | "flow" | "scala",
    tagName: string,
    options: {
        passthroughCustomScalars: boolean;
        customScalarsPrefix: string;
        addTypename: boolean;
        namespace: string;
        operationIdsPath: string | null;
        generateOperationIds: boolean;
        mergeInFieldsFromFragmentSpreads: boolean;
    }
): void;
