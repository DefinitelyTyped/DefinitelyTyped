import NodeAttribute from "../../nodes/core/NodeAttribute.js";
declare class ProgrammableStage {
    id: number;
    code: string;
    stage: "compute" | "vertex" | "fragment";
    attributes: NodeAttribute[] | null;
    usedTimes: number;
    constructor(
        code: string,
        type: "compute" | "vertex" | "fragment",
        transforms?: null,
        attributes?: NodeAttribute[] | null,
    );
}
export default ProgrammableStage;
