import { Component } from "./component";
import { Context } from "../core/context";
import { Recursion } from "./recursion";
import { Data, NodeData, WorkerOutputs } from "../core/data";
import { EventsTypes } from "./events";
export { Component, Recursion };
interface EngineNode extends NodeData {
    busy: boolean;
    unlockPool: Array<(() => void)>;
    outputData: WorkerOutputs;
}
export declare class Engine extends Context<EventsTypes> {
    args: unknown[];
    data: Data | null;
    state: number;
    onAbort: () => void;
    constructor(id: string);
    clone(): Engine;
    throwError(message: string, data?: unknown): Promise<string>;
    private processStart;
    private processDone;
    abort(): Promise<unknown>;
    private lock;
    unlock(node: EngineNode): void;
    private extractInputData;
    private processWorker;
    private processNode;
    private forwardProcess;
    copy(data: Data): Data;
    validate(data: Data): Promise<string | true>;
    private processStartNode;
    private processUnreachable;
    process<T extends unknown[]>(data: Data, startId?: number | string | null, ...args: T): Promise<"success" | "aborted">;
}
