import { Catch, Retry } from "./errors";
import {
    AssignmentObject,
    EndOrNext,
    JSONataExpression,
    JsonObject,
    Path,
    PositiveInteger,
    QueryLanguage,
    ReferencePath,
    Resource,
    State,
} from "./state";

export interface ItemProcessor {
    StartAt: string;
    States: {
        [state: string]: State;
    };
    ProcessorConfig?: JsonObject;
}

export interface ItemReader {
    Resource: Resource;
    ReaderConfig?: {
        MaxItems?: PositiveInteger | JSONataExpression;
        MaxItemsPath?: ReferencePath;
    };
    Arguments?: JsonObject | JSONataExpression;
    Parameters?: JsonObject;
}

export interface ItemBatcher {
    BatchInput?: JsonObject | JSONataExpression;
    MaxItemsPerBatch?: PositiveInteger | JSONataExpression;
    MaxItemsPerBatchPath?: ReferencePath;
    MaxInputBytesPerBatch?: PositiveInteger | JSONataExpression;
    MaxInputBytesPerBatchPath?: ReferencePath;
}

export interface ResultWriter {
    Resource: Resource;
    Arguments?: JsonObject | JSONataExpression;
    Parameters?: JsonObject;
}

/**
 * The Map State (identified by "Type":"Map") causes the interpreter to process all the elements of an array, potentially in parallel.
 *
 * @see https://states-language.net/#map-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html
 */
export type Map = {
    Type: "Map";
    Comment?: string;
    ItemProcessor: ItemProcessor;

    // Common fields
    QueryLanguage?: QueryLanguage;
    Assign?: AssignmentObject;

    // JSONata style fields
    Items?: JsonObject | JSONataExpression;
    Output?: JSONataExpression;

    // JSONPath style fields
    InputPath?: Path | null;
    OutputPath?: Path | null;
    ItemsPath?: ReferencePath;
    ResultPath?: ReferencePath | null;
    ResultSelector?: JsonObject;

    // Deprecated fields
    Parameters?: JsonObject;
    Iterator?: JsonObject;

    // Item processing configuration
    ItemReader?: ItemReader;
    ItemSelector?: JsonObject | JSONataExpression;
    ItemBatcher?: ItemBatcher;
    ResultWriter?: ResultWriter;

    // Execution configuration
    MaxConcurrency?: PositiveInteger | JSONataExpression;
    MaxConcurrencyPath?: ReferencePath;
    ToleratedFailurePercentage?: number | JSONataExpression;
    ToleratedFailurePercentagePath?: ReferencePath;
    ToleratedFailureCount?: PositiveInteger | JSONataExpression;
    ToleratedFailureCountPath?: ReferencePath;

    // Error handling
    Retry?: Retry[];
    Catch?: Catch[];
} & EndOrNext;
