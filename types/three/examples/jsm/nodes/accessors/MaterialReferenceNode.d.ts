import { Material } from '../../../../src/Three';
import ReferenceNode from './ReferenceNode';

export default class MaterialReferenceNode extends ReferenceNode<Material | null> {
    constructor(property: string, inputType: string, material?: Material | null);
}
