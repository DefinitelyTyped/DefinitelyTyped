// Type definitions for obj-file-parser 0.5
// Project: https://github.com/wesunwin/obj-file-parser
// Definitions by: Ben Coleman <https://github.com/benc-uk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ObjFileParser;

/* Class module */
declare class ObjFileParser {
    constructor(fileContents: any, defaultModelName?: any);
    parse(): ObjFileParser.ObjFile;
}

/* Additional exported interfaces */
declare namespace ObjFileParser {
    interface ObjFile {
        models: ObjModel[];
        materialLibraries: any[];
    }

    interface ObjModel {
        name: string;
        vertices: Vertex[];
        textureCoords: VertexTexture[];
        vertexNormals: Vertex[];
        faces: Face[];
    }

    interface Face {
        material: any;
        group: string;
        smoothingGroup: number;
        vertices: FaceVertex[];
    }

    interface FaceVertex {
        vertexIndex: number;
        textureCoordsIndex: number;
        vertexNormalIndex: number;
    }

    interface Vertex {
        x: number;
        y: number;
        z: number;
    }

    interface VertexTexture {
        u: number;
        v: number;
        w: number;
    }
}

export = ObjFileParser;
