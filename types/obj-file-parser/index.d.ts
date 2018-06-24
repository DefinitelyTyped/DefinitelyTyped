// Type definitions for obj-file-parser 0.5
// Project: https://github.com/WesUnwin/obj-file-parser#readme
// Definitions by: Ben Coleman https://github.com/benc-uk
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export default class Parser {
    constructor(fileContents: any, defaultModelName?: any);
    parse(): ObjFile;
}

export interface ObjFile {
    models: ObjModel[];
    materialLibraries: any[];
}

export class ObjModel {
    name: string;
    vertices: {x: number, y: number, z: number}[];
    textureCoords: {u: number, v: number, w: number}[];
    vertexNormals: {x: number, y: number, z: number}[];
    faces: Face[];
}    

export class Face {
    material: any;
    group: string;
    smoothingGroup: number;
    vertices: FaceVertex[]
}

export class FaceVertex {
    vertexIndex: number;
    textureCoordsIndex: number;
    vertexNormalIndex: number;
}
