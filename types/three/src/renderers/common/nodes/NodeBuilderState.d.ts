import NodeMaterialObserver from "../../../materials/nodes/manager/NodeMaterialObserver.js";
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
    monitor: NodeMaterialObserver;
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
        monitor: NodeMaterialObserver,
        transforms?: never[],
    );
    createBindings(): BindGroup[];
}
export default NodeBuilderState;
