// Type definitions for Geometry Format Specification
// Project: http://www.w3.org/TR/geometry-1/
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GeometryDom {
    export interface DOMPointReadOnly {
        /**
         * x coordinate / readonly
         */
        x: number;
        /**
         * y coordinate / readonly
         */
        y: number;
        /**
         * z coordinate / readonly
         */
        z: number;
        /**
         * w coordinate / readonly
         */
        w: number;

        /**
         * Post-multiply point with matrix.
         * @param matrix
         */
        matrixTransform(matrix:DOMMatrixReadOnly): DOMPoint;
    }

    interface DOMPoint extends DOMPointReadOnly {
        /**
         * x coordinate
         */
        x: number;
        /**
         * y coordinate
         */
        y: number;
        /**
         * z coordinate
         */
        z: number;
        /**
         * w coordinate
         */
        w: number;
    }

    interface DOMRect extends DOMRectReadOnly {
        /**
         * x coordinate
         */
        x: number;
        /**
         * y coordinate
         */
        y: number;
        /**
         * width value
         */
        width: number;
        /**
         * height value
         */
        height: number;
    }

    interface DOMRectReadOnly {
        /**
         * x coordinate
         */
        x: number;
        /**
         * y coordinate
         */
        y: number;
        /**
         * width value
         */
        width: number;
        /**
         * height value
         */
        height: number;
        /**
         * min(y coordinate, y coordinate + height dimension)
         */
        top: number;
        /**
         * max(x coordinate, x coordinate + width dimension)
         */
        right: number;
        /**
         * max(y coordinate, y coordinate + height dimension)
         */
        bottom: number;
        /**
         * min(x coordinate, x coordinate + width dimension)
         */
        left: number;
    }

    interface DOMRectList {
        /**
         * total number of DOMRect objects associated with the object.
         * readonly unsigned long length
         */
        length: number;
        /**
         * the DOMRect object at index must be returned.
         * @param index
         */
        item(index: number): DOMRect;
    }

    interface DOMQuad {
        /**
         * a DOMPoint that represents p1 of the quadrilateral
         */
        p1: DOMPoint;
        /**
         * a DOMPoint that represents p2 of the quadrilateral
         */
        p2: DOMPoint;
        /**
         * a DOMPoint that represents p3 of the quadrilateral
         */
        p3: DOMPoint;
        /**
         * a DOMPoint that represents p4 of the quadrilateral
         */
        p4: DOMPoint;
        /**
         * the associated bounding rectangle of the quadrilateral
         */
        bounds: DOMRectReadOnly;
    }

    interface DOMMatrixReadOnly {
        /**
         * These attributes are simple aliases for certain elements of the 4x4 matrix
         */
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;

        m11: number;
        m12: number;
        m13: number;
        m14: number;
        m21: number;
        m22: number;
        m23: number;
        m24: number;
        m31: number;
        m32: number;
        m33: number;
        m34: number;
        m41: number;
        m42: number;
        m43: number;
        m44: number;

        is2D: boolean;
        isIdentity: boolean;

        translate(tx: number, ty: number, tz?: number): DOMMatrix;
        scale(scale: number, originX?: number, originY?: number): DOMMatrix;
        scale3d(scale: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
        scaleNonUniform(scale: number, scaleX: number, scaleY: number, scaleZ: number, originX: number, originY: number, originZ: number): DOMMatrix;
        rotate(angle: number, originX?: number, originY?: number): DOMMatrix;
        rotateFromVector(x: number, y: number): DOMMatrix;
        rotateAxisAngle(x: number, y: number, z: number, angle: number): DOMMatrix;
        skewX(sx: number): DOMMatrix;
        skewY(sx: number): DOMMatrix;

        multiply(other: DOMMatrix): DOMMatrix;
        flipX(): DOMMatrix;
        flipY(): DOMMatrix;
        inverse(): DOMMatrix;

        transformPoint(point?: DOMPointInit): DOMPoint;

        toFloat32Array(): Array<number>;
        toFloat64Array(): Array<number>;
    }

    interface DOMMatrix extends DOMMatrixReadOnly {
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;

        m11: number;
        m12: number;
        m13: number;
        m14: number;
        m21: number;
        m22: number;
        m23: number;
        m24: number;
        m31: number;
        m32: number;
        m33: number;
        m34: number;
        m41: number;
        m42: number;
        m43: number;
        m44: number;


        multiplySelf(other: DOMMatrix): DOMMatrix;
        preMultiplySelf(other: DOMMatrix): DOMMatrix;
        translateSelf(tx: number, ty: number, tz?: number): DOMMatrix;
        scaleSelf(scale: number, originX?: number, originY?: number): DOMMatrix;
        scale3dSelf(scale: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
        scaleNonUniformSelf(scaleX: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
        rotateSelf(angle: number, originX?: number, originY?: number): DOMMatrix;
        rotateFromVectorSelf(x: number, y: number): DOMMatrix;
        rotateAxisAngleSelf(x: number, y: number, z: number, angle: number): DOMMatrix;

        skewXSelf(sx: number): DOMMatrix;
        skewYSelf(sy: number): DOMMatrix;
        invertSelf(): DOMMatrix;
        setMatrixValue(transformList: DOMMatrix): DOMMatrix;
    }
}

declare var DOMPointReadOnly: {
    prototype: GeometryDom.DOMPointReadOnly;
    new (x: number, y: number, z: number, w: number): GeometryDom.DOMPointReadOnly;
};

declare var DOMPoint: {
    prototype: GeometryDom.DOMPoint;
    new (x?:number, y?:number, z?:number, w?:number): GeometryDom.DOMPoint;
};

interface DOMPointInit {
    /**
     * x coordinate: 0
     */
    x: number;
    /**
     * y coordinate: 0
     */
    y: number;
    /**
     * z coordinate: 0
     */
    z?: number;
    /**
     * w coordinate: 1
     */
    w?: number;
}

declare var DOMRect: {
    prototype: GeometryDom.DOMRect;
    new (x: number, y: number, width: number, height: number): GeometryDom.DOMRect;
};

declare var DOMRectReadOnly: {
    prototype: GeometryDom.DOMRectReadOnly;
    new (x: number, y: number, width: number, height: number): GeometryDom.DOMRectReadOnly;
};

interface DOMRectInit {
    /**
     * x coordinate
     */
    x: number;
    /**
     * y coordinate
     */
    y: number;
    /**
     * width value
     */
    width: number;
    /**
     * height value
     */
    height: number;
}

interface DOMRectList {
    /**
     * total number of DOMRect objects associated with the object.
     * readonly unsigned long length
     */
    length: number;
    /**
     * the DOMRect object at index must be returned.
     * @param index
     */
    item(index: number): GeometryDom.DOMRect;
}

declare var DOMQuad: {
    prototype: GeometryDom.DOMQuad;
    new (rect?: DOMRectInit): GeometryDom.DOMQuad;
    new (p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): GeometryDom.DOMQuad;
};

declare var DOMMatrixReadOnly: {
    prototype: GeometryDom.DOMMatrixReadOnly;
    new (numberSequence: Array<number>): GeometryDom.DOMMatrixReadOnly;
};

declare var DOMMatrix: {
    prototype: GeometryDom.DOMMatrix;
    new (): GeometryDom.DOMMatrix;
    new (transformList: string): GeometryDom.DOMMatrix;
    new (other: GeometryDom.DOMMatrixReadOnly): GeometryDom.DOMMatrix;
    new (array: Array<number>): GeometryDom.DOMMatrix;
    new (a: number, b: number, c: number, d: number, e: number, f: number): GeometryDom.DOMMatrix;
};

