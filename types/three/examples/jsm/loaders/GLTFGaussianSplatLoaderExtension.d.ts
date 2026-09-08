import { Group } from "three";
import { GaussianSplat } from "../objects/GaussianSplat.js";
import { GLTFParser } from "./GLTFLoader.js";

declare class GLTFGaussianSplatLoaderExtension {
    constructor(parser: GLTFParser);

    name: string;
    parser: GLTFParser;

    loadMesh(meshIndex: number): Promise<Group | GaussianSplat> | null;
}

export { GLTFGaussianSplatLoaderExtension };
