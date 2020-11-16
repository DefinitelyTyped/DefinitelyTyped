import { Connection } from "./connection";
import { Control } from "./control";
import { Input } from "./input";
import { Output } from "./output";
import { NodeData } from "./core/data";
export declare class Node {
    name: string;
    id: number;
    position: [number, number];
    inputs: Map<string, Input>;
    outputs: Map<string, Output>;
    controls: Map<string, Control>;
    data: {
        [key: string]: unknown;
    };
    meta: {
        [key: string]: unknown;
    };
    static latestId: number;
    constructor(name: string);
    _add<T extends any>(list: Map<string, T>, item: T, prop: string): void;
    addControl(control: Control): this;
    removeControl(control: Control): void;
    addInput(input: Input): this;
    removeInput(input: Input): void;
    addOutput(output: Output): this;
    removeOutput(output: Output): void;
    getConnections(): Connection[];
    update(): void;
    static incrementId(): number;
    static resetId(): void;
    toJSON(): NodeData;
    static fromJSON(json: NodeData): Node;
}
