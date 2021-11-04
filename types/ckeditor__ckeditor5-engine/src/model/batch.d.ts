import Operation from "./operation/operation";

export default class Batch {
    readonly baseVersion: number | null;
    readonly operations: Operation[];
    readonly type: "transparent" | "default";

    constructor(type?: "transparent" | "default");
    addOperation(operation: Operation): Operation;
}
