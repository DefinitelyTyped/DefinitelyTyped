import { Input } from "./input";
import { Node } from "./node";
export declare class Control {
    key: string;
    data: unknown;
    parent: Node | Input | null;
    constructor(key: string);
    getNode(): Node;
    getData(key: string): unknown;
    putData(key: string, data: unknown): void;
}
