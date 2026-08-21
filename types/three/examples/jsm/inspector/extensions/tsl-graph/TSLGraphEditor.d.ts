import { Material } from "../../../../../src/materials/Material.js";
import { Scene } from "../../../../../src/scenes/Scene.js";
import { Extension, ExtensionEventMap } from "../../Extension.js";

interface TSLGraphEditorEventMap extends ExtensionEventMap {
    change: { material: Material };
    remove: { graphId: string };
}

export class TSLGraphEditor extends Extension<TSLGraphEditorEventMap> {
    constructor();

    get hasGraphs(): boolean;

    apply(scene: Scene): this;

    restoreMaterial(material: Material): void;

    setMaterial(material: Material): Promise<void>;
}
