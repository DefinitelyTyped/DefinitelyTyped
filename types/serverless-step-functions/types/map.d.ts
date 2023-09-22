import { Catch, Retry } from './errors';
import { CommonState, Concurrency, JsonObject, JsonPath, Percentage, State } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html
type Map = InlineMap | DistributedMap;

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-inline.html#map-state-inline-additional-fields
interface InlineMap extends CommonState {
    Type: 'Map';
    ItemProcessor: {
        ProcessorConfig: {
            Mode: 'INLINE';
        };
        StartAt: string;
        States: {
            [state: string]: State;
        };
    };
    ItemsPath?: JsonPath;
    ItemSelector?: JsonObject;
    MaxConcurrency?: number;
    ResultPath?: JsonPath;
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
    Paramaters?: JsonObject;
}

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-distributed.html#map-state-distributed-additional-fields
interface DistributedMap extends CommonState {
    Type: 'Map';
    ItemProcessor: {
        ProcessorConfig: {
            Mode: 'DISTRIBUTED';
            ExecutionType: 'STANDARD' | 'EXPRESS';
        };
        StartAt: string;
        States: {
            [state: string]: State;
        };
    };
    ItemReader?: JsonObject;
    ItemsPath?: JsonPath;
    ItemSelector?: JsonObject;
    ItemBatcher?: JsonObject;
    MaxConcurrency?: Concurrency;
    ToleratedFailurePercentage?: Percentage;
    ToleratedFailureCount?: number;
    Label?: string;
    ResultWriter?: JsonObject;
    ResultPath?: JsonPath;
    ResultSelector?: JsonObject;
    Retry?: Retry[];
    Catch?: Catch[];
}
