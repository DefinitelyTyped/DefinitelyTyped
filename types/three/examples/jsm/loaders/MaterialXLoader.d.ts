import { Loader, LoadingManager } from "three";
import { MeshPhysicalNodeMaterial } from "../nodes/Nodes.js";

export class MaterialXLoader extends Loader<{ materials: Record<string, MeshPhysicalNodeMaterial> }> {
    constructor(manager?: LoadingManager);
}
