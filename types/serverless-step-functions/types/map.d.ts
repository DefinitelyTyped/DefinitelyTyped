import { Catch, Retry } from "./errors";
import { Concurrency, EndOrNext, JsonObject, Path, Percentage, ReferencePath, State } from "./state";

/**
 * The Map State (identified by "Type": "Map") causes the interpreter to process all the elements of an array, potentially in parallel, with the processing of each element independent of the others.
 *
 * @see https://states-language.net/#map-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html
 */
export type Map = InlineMap | DistributedMap;

/**
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-inline.html#map-state-inline-additional-fields
 */
export type InlineMap = {
    Type: "Map";
    Comment?: string;
    InputPath?: Path | null;
    OutputPath?: Path | null;
    ItemProcessor: {
        ProcessorConfig: {
            Mode: "INLINE";
        };
        StartAt: string;
        States: {
            [state: string]: State;
        };
    };
    ItemsPath?: ReferencePath;
    ItemSelector?: JsonObject;
    MaxConcurrency?: number;
    ResultPath?: ReferencePath | null;
    ResultSelector?: JsonObject;
    Retry?: Retry[];
    Catch?: Catch[];

    /**
     * @deprecated
     */
    Iterator?: any;
    /**
     * @deprecated
     */
    Parameters?: JsonObject;
} & EndOrNext;

/**
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html#map-state-distributed-additional-fields
 */
export type DistributedMap = {
    Type: "Map";
    Comment?: string;
    InputPath?: Path | null;
    OutputPath?: Path | null;
    ItemProcessor: {
        ProcessorConfig: {
            Mode: "DISTRIBUTED";
            ExecutionType: "STANDARD" | "EXPRESS";
        };
        StartAt: string;
        States: {
            [state: string]: State;
        };
    };
    ItemReader?: JsonObject;
    ItemsPath?: ReferencePath;
    ItemSelector?: JsonObject;
    ItemBatcher?: JsonObject;
    MaxConcurrency?: Concurrency;
    ToleratedFailurePercentage?: Percentage;
    ToleratedFailureCount?: number;
    Label?: string;
    ResultWriter?: JsonObject;
    ResultPath?: ReferencePath | null;
    ResultSelector?: JsonObject;
    Retry?: Retry[];
    Catch?: Catch[];
} & EndOrNext;
