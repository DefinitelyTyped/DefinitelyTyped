import { Group, Loader, LoadingManager, Material } from "three";

export class LDrawLoader extends Loader<Group> {
    materials: Material[];
    materialsLibrary: Record<string, Material>;
    fileMap: Record<string, string>;
    smoothNormals: boolean;

    constructor(manager?: LoadingManager);

    preloadMaterials(url: string): Promise<void>;
    setFileMap(fileMap: Record<string, string>): void;
    setMaterials(materials: Material[]): void;

    parse(text: string, path: string, onLoad: (data: Group) => void): void;

    addMaterial(material: Material): void;
    getMaterial(colourCode: string): Material | null;
}
