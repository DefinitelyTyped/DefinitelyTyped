import { BufferGeometry, Loader, LoadingManager, Shape, ShapePath, Vector2, Vector3 } from "three";

export interface SVGResultPaths extends ShapePath {
    userData?: Record<string, any> | undefined;
}

export interface SVGResult {
    paths: SVGResultPaths[];
    xml: XMLDocument;
}

export interface StrokeStyle {
    strokeColor: string;
    strokeWidth: number;
    strokeLineJoin: string;
    strokeLineCap: string;
    strokeMiterLimit: number;
}

export class SVGLoader extends Loader<SVGResult> {
    constructor(manager?: LoadingManager);

    defaultDPI: number;
    defaultUnit: string;

    parse(text: string): SVGResult;

    static getStrokeStyle(
        width?: number,
        color?: string,
        lineJoin?: string,
        lineCap?: string,
        miterLimit?: number,
    ): StrokeStyle;

    /**
     * Generates a stroke with some witdh around the given path.
     * @remarks The path can be open or closed (last point equals to first point)
     * @param points  Array of Vector2D (the path). Minimum 2 points.
     * @param style  Object with SVG properties as returned by SVGLoader.getStrokeStyle(), or SVGLoader.parse() in the path.userData.style object
     * @param arcDivisions Arc divisions for round joins and endcaps. (Optional)
     * @param minDistance Points closer to this distance will be merged. (Optional)
     * @returns BufferGeometry with stroke triangles (In plane z = 0). UV coordinates are generated ('u' along path. 'v' across it, from left to right)
     */
    static pointsToStroke(
        points: Vector2[],
        style: StrokeStyle,
        arcDivisions?: number,
        minDistance?: number,
    ): BufferGeometry;

    static pointsToStrokeWithBuffers(
        points: Vector2[],
        style: StrokeStyle,
        arcDivisions?: number,
        minDistance?: number,
        vertices?: number[],
        normals?: number[],
        uvs?: number[],
        vertexOffset?: number,
    ): number;

    static createShapes(shapePath: ShapePath): Shape[];
}
