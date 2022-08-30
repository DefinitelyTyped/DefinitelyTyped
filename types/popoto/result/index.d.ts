import { Result as N4jResult } from 'neo4j-driver-lite';
import { Node } from '../graph';

export namespace Result {
    const containerId: string;
    const hasChanged: boolean;
    const resultCountListeners: Array<(count: number) => void>;
    const resultListeners: Array<(result: N4jResult[]) => void>;
    const graphResultListeners: Array<() => void>;
    const RESULTS_PAGE_SIZE: number;
    const TOTAL_COUNT: number;

    /**
     * Register a listener to the result count event.
     * This listener will be called on evry result change with total result count.
     */
    function onTotalResultCount(listerner: ((count: number) => void)): void;

    function onResultReceived(listerner: ((result: N4jResult[]) => void)): void;

    function onGraphResultReceived(listerner: ((graphResult: any) => void)): void;

    /**
     * Parse REST returned Graph data and generate a list of nodes and edges.
     *
     * @param data
     * @returns an object with two keys: nodes, edges
     */
    function parseGraphResultData(data: any): { nodes: Node[], edges: any[] };

    function updateResults(): void;
    function updateResultsCount(): void;
    function generatePreQuery(): void;
}
