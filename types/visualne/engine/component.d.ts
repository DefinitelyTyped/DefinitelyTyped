import { Engine } from "./index";
import { NodeData, WorkerInputs, WorkerOutputs } from "../core/data";
export declare abstract class Component {
    name: string;
    data: unknown;
    engine: Engine | null;
    constructor(name: string);
    abstract worker(node: NodeData, inputs: WorkerInputs, outputs: WorkerOutputs, ...args: unknown[]): void;
}
