// Type definitions for webcola 3.0.1
// Project: https://github.com/tgdwyer/WebCola
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module WebCola{
    interface Adaptor {
        avoidOverlaps(avodOverLaps: boolean): Adaptor;
        constraints(constraints: any): Adaptor;
        convergenceThreshold(convergenceThreshold: number): Adaptor;
        dragend(node: { [index: number]: any }): void;
        dragstart(node: { [index: number]: any }): void;
        flowLayout(axis: string, minSeparation: number): Adaptor;
        handleDisconnected(handleDisconnected: boolean): Adaptor;
        links(links: any): Adaptor;
        linkDistance(linkLength: number): Adaptor;
        nodes(nodes: any): Adaptor;
        resume(): void;
        size(dimension: number[]): Adaptor;
        start(
            initialUnconstrainedIterations: number,
            initialUserConstraintIterations: number,
            initialAllConstraintsIterations: number
        ): void;
        stop(): void;
    }

    interface Cola {
        adaptor(options: { [index:number]: any }): Adaptor;
        start(): void;
        stop(): void;
    }

    interface Constraint {
        axis: string;
        gap: number;
        left: number;
        right: number;
    }

    interface FlowLayout {
        axis: string;
        minSeparation?: number;
    }

    interface Node {
        height: number;
        id: string;
        size: number;
        width: number;
        x: number;
        y: number;
    }

    interface Options {
        avoidOverlaps?: boolean;
        convergenceThreshold?: number;
        constraints?: {[key: string]: any}[];
        flowLayout?: FlowLayout;
        handleDisconnected?: boolean;
        linkDistance?: number;
        initialUnconstrainedIterations?: number;
        initialUserConstraintIterations?: number;
        initialAllConstraintsIterations?: number;
        symmetricDiffLinkLengths?: number;
    }
}

declare var cola: WebCola.Cola;

