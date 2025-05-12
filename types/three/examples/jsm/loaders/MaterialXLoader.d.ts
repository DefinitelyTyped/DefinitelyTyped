import { Loader, LoadingManager, MeshPhysicalNodeMaterial } from "three/webgpu";

export class MaterialXLoader extends Loader<{ materials: Record<string, MeshPhysicalNodeMaterial> }> {
    constructor(manager?: LoadingManager);
}
