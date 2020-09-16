declare namespace AMap {
    abstract class Geometry3D {
        readonly vertices: number[];
        readonly vertexUVs: number[];
        readonly vertexColors: number[];
    }

    namespace Geometry3D {
        class Mesh extends Geometry3D {
            readonly type: 'mesh';
            readonly faces: number[];
            readonly textureIndices: number[];
        }

        class Line extends Geometry3D {
            readonly type: 'line';
            readonly segments: number[];
            readonly textureIndices: number[];
        }

        class Points extends Geometry3D {
            readonly type: 'points';
            readonly pointSizes: number[];
            readonly pointAreas: number[];
            readonly textureIndices: number[];
        }
    }
}
