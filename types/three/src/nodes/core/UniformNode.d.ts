import { NodeUpdateType } from "./constants.js";
import InputNode from "./InputNode.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeFrame from "./NodeFrame.js";
import UniformGroupNode from "./UniformGroupNode.js";
declare class UniformNode<TValue> extends InputNode<TValue> {
    readonly isUniformNode: true;
    name: string;
    groupNode: UniformGroupNode;
    constructor(value: TValue, nodeType?: string | null);
    label(name: string): this;
    setGroup(group: UniformGroupNode): this;
    getGroup(): UniformGroupNode;
    getUniformHash(builder: NodeBuilder): string;
    onUpdate(callback: (frame: NodeFrame, self: this) => TValue | undefined, updateType: NodeUpdateType): this;
    generate(builder: NodeBuilder, output: string | null): string;
}
export default UniformNode;
export declare const uniform: <TValue>(
    arg1: InputNode<TValue> | TValue,
    arg2?: Node | string,
) => import("../tsl/TSLCore.js").ShaderNodeObject<UniformNode<TValue>>;
