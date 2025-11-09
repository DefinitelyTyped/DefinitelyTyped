import { Group, Loader, LoadingManager, Material } from "three";
import { LDrawConditionalLineMaterial } from "../materials/LDrawConditionalLineMaterial.js";
import { LDrawConditionalLineMaterial as LDrawConditionalLineNodeMaterial } from "../materials/LDrawConditionalLineNodeMaterial.js";

export class LDrawLoader extends Loader<Group> {
    materials: Material[];
    materialsLibrary: Record<string, Material>;

    fileMap: Record<string, string>;

    smoothNormals: boolean;

    partsLibraryPath: string;

    ConditionalLineMaterial: typeof LDrawConditionalLineMaterial | typeof LDrawConditionalLineNodeMaterial | null;

    constructor(manager?: LoadingManager);

    setPartsLibraryPath(path: string): this;

    setConditionalLineMaterial(
        type: typeof LDrawConditionalLineMaterial | typeof LDrawConditionalLineNodeMaterial,
    ): this;

    preloadMaterials(url: string): Promise<void>;

    parse(text: string, onLoad: (data: Group) => void, onError?: (error: unknown) => void): void;

    setMaterials(materials: Material[]): this;
    clearMaterials(): this;
    addMaterials(materials: Material[]): this;
    addDefaultMaterials(): this;

    setFileMap(fileMap: Record<string, string>): this;

    addMaterial(material: Material): this;
    getMaterial(colourCode: string): Material | null;
}
