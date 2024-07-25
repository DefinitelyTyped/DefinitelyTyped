import Binding from "./Binding.js";
import NodeUniformsGroup from "./nodes/NodeUniformsGroup.js";
declare class BindGroup {
    name: string;
    bindings: NodeUniformsGroup[] | Binding[];
    id: number;
    constructor(name?: string, bindings?: NodeUniformsGroup[]);
}
export default BindGroup;
