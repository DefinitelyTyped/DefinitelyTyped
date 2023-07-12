import { Material } from '../../../../src/Three.js';
import ReferenceNode from './ReferenceNode.js';

export default class MaterialReferenceNode extends ReferenceNode<Material | null> {
    constructor(property: string, inputType: string, material?: Material | null);
}
