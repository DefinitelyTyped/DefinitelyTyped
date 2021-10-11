import { Node } from '../graph';

export namespace Result {
    export const containerId: string;
    export const hasChanged: boolean;
    export const resultCountListeners: (count: number) => void[];
    export const resultListeners: () => void[];
    export const graphResultListeners: () => void[];
    export const RESULTS_PAGE_SIZE: number;
    export const TOTAL_COUNT: number;

    /**
     * Register a listener to the result count event.
     * This listener will be called on evry result change with total result count.
     */
    export const onTotalResultCount: (listerner: ((count: number) => void)) => void;

    export const onResultReceived: (listerner: ((result: any[]) => void)) => void;

    export const onGraphResultReceived: (listerner: ((graphResult: any) => void)) => void;

    /**
     * Parse REST returned Graph data and generate a list of nodes and edges.
     *
     * @param data
     * @returns {{nodes: Array, edges: Array}}
     */
    export const parseGraphResultData: (data: any) => { nodes: Node[], edges: any[] };

    export const updateResults: () => void;
    export const updateResultsCount: () => void;
    export const generatePreQuery: () => void;
}
