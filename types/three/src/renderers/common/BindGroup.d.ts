import Binding from "./Binding.js";
import NodeUniformsGroup from "./nodes/NodeUniformsGroup.js";
declare class BindGroup {
    name: string;
    bindings: NodeUniformsGroup[] | Binding[];
    index: number;
    bindingsReference: NodeUniformsGroup[] | BindGroup;
    id: number;
    constructor(
        name?: string,
        bindings?: NodeUniformsGroup[],
        index?: number,
        bindingsReference?: NodeUniformsGroup[] | BindGroup,
    );
}
export default BindGroup;
