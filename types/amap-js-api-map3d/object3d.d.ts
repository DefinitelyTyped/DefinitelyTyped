declare namespace AMap {
    class Object3D {
        readonly geometry: Geometry3D;
        transparent: boolean;
        DEPTH_TEST: boolean;
        textures: Array<string | HTMLCanvasElement>;
        needUpdate: boolean;
        reDraw(): void;

        // internal
        reset(): void;
    }

    namespace Object3D {
        class Mesh extends Object3D {
            readonly geometry: Geometry3D.Mesh;
        }

        class MeshAcceptLights extends Mesh {
            readonly geometry: Geometry3D.Mesh & { readonly vertexNormals: number[] };
        }

        namespace Prism {
            interface Options {
                path: LngLat[] | Pixel[] | Array<LngLat[] | Pixel[] | Array<[number, number]>>;
                color: string | number[] | Array<string | number[]>;
                height?: number;
                color2?: string | number[] | Array<string | number[]>;
            }
        }
        class Prism extends MeshAcceptLights {
            constructor(options: Prism.Options);
        }

        class Wall extends Prism { }

        class Line extends Object3D {
            readonly geometry: Geometry3D.Line;
        }

        namespace ThinLine {
            interface Options {
                path: Array<[number, number]>;
                color: string;
                altitude?: number;
                dashArray?: number[];
            }
        }
        class ThinLine extends Line {
            constructor(options: ThinLine.Options);
        }

        class Points extends Object3D {
            readonly geometry: Geometry3D.Points;
            borderColor: string;
            borderWeight: number;
        }

        class RoundPoints extends Points {
            merge: boolean;
        }

        namespace MeshLine {
            type Options = {
                width?: number;
                height?: number | number[];
                color?: string | number[];
            } & ({
                unit?: 'meter';
                path: Array<[number, number]> | LngLat[];
            } | {
                unit: 'px';
                path: Array<[number, number]> | Pixel[];
            });
        }
        // inherit from WideLine
        class MeshLine extends Object3D {
            constructor(options: MeshLine.Options);
            readonly geometry: Geometry3D & {
                readonly vertexIndices: number[];
                readonly directions: number[];
                readonly textureIndices: number[];
            };
            width: number;
            setPath(path: LngLat[] | Pixel[] | Array<[number, number]>): void;
            setWidth(width: number): void;
            setHeight(height: number | number[]): void;
            setColor(color: string): void;
        }
    }
}
