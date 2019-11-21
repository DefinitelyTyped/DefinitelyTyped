// Type definitions for apollo-codegen 0.20
// Project: https://github.com/apollographql/apollo-codegen
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>, Maria Carrasco <https://github.com/kostspielig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { Options } from 'graphql/utilities/schemaPrinter';

export function downloadSchema(
    url: string,
    outputPath: string,
    additionalHeaders: { [name: string]: string; },
    insecure: boolean,
    method: string
): Promise<void>;

export function introspectSchema(
    schemaPath: string,
    outputPath: string
): Promise<void>;

export function printSchema(
    schemaPath: string,
    outputPath: string,
    options?: Options
): Promise<void>;

export type TargetType = 'json' | 'swift' | 'ts-legacy' | 'typescript-legacy' | 'flow-legacy' | 'scala' | 'flow' | 'typescript' | 'ts';

export function generate(
    inputPaths: string[],
    schemaPath: string,
    outputPath: string,
    only: string,
    target: TargetType,
    tagName: string,
    projectName: string,
    options: {
        passthroughCustomScalars?: boolean;
        customScalarsPrefix?: string;
        addTypename?: boolean;
        namespace?: string;
        operationIdsPath?: string | null;
        generateOperationIds?: boolean;
        mergeInFieldsFromFragmentSpreads?: boolean;
        useFlowExactObjects?: boolean;
        useFlowReadOnlyTypes?: boolean;
    }
): void;
