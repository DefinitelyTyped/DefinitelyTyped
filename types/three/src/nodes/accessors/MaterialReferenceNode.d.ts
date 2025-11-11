import { Material } from "../../materials/Material.js";
import { NodeOrType } from "../tsl/TSLCore.js";
import ReferenceNode from "./ReferenceNode.js";

export default class MaterialReferenceNode extends ReferenceNode<Material | null> {
    readonly isMaterialReferenceNode: true;

    constructor(property: string, inputType: string, material?: Material | null);
}

export const materialReference: (
    name: string,
    nodeOrType: NodeOrType,
    material?: Material | null,
) => MaterialReferenceNode;
