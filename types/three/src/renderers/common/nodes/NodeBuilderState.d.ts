import Node from "../../../nodes/core/Node.js";
import NodeAttribute from "../../../nodes/core/NodeAttribute.js";
import BindGroup from "../BindGroup.js";
declare class NodeBuilderState {
    vertexShader: string | null;
    fragmentShader: string | null;
    computeShader: string | null;
    transforms: never[];
    nodeAttributes: NodeAttribute[];
    bindings: BindGroup[];
    updateNodes: Node[];
    updateBeforeNodes: Node[];
    updateAfterNodes: Node[];
    instanceBindGroups: boolean;
    usedTimes: number;
    constructor(
        vertexShader: string | null,
        fragmentShader: string | null,
        computeShader: string | null,
        nodeAttributes: NodeAttribute[],
        bindings: BindGroup[],
        updateNodes: Node[],
        updateBeforeNodes: Node[],
        updateAfterNodes: Node[],
        instanceBindGroups?: boolean,
        transforms?: never[],
    );
    createBindings(): BindGroup[];
}
export default NodeBuilderState;
