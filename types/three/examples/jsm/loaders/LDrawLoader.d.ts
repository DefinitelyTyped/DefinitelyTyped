import { Group, Loader, LoadingManager, Material } from "three";
import { LDrawConditionalLineMaterial } from "../materials/LDrawConditionalLineMaterial.js";
import { LDrawConditionalLineMaterial as LDrawConditionalLineNodeMaterial } from "../materials/LDrawConditionalLineNodeMaterial.js";

export class LDrawLoader extends Loader<Group> {
    materials: Material[];
    materialsLibrary: Record<string, Material>;

    fileMap: Record<string, string>;

    smoothNormals: boolean;

    ConditionalLineMaterial: typeof LDrawConditionalLineMaterial | typeof LDrawConditionalLineNodeMaterial | null;

    constructor(manager?: LoadingManager);

    setConditionalLineMaterial(
        type: typeof LDrawConditionalLineMaterial | typeof LDrawConditionalLineNodeMaterial,
    ): this;

    preloadMaterials(url: string): Promise<void>;
    setFileMap(fileMap: Record<string, string>): void;
    setMaterials(materials: Material[]): void;

    parse(text: string, path: string, onLoad: (data: Group) => void, onError?: (error: unknown) => void): void;

    addMaterial(material: Material): void;
    getMaterial(colourCode: string): Material | null;
}
