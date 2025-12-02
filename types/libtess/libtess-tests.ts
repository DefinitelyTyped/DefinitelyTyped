import { GluTesselator, gluEnum, windingRule, primitiveType, errorType } from "libtess";

// Create a tessellator
const tess = new GluTesselator();

// Set properties
tess.gluTessProperty(gluEnum.GLU_TESS_WINDING_RULE, windingRule.GLU_TESS_WINDING_ODD);
tess.gluTessProperty(gluEnum.GLU_TESS_BOUNDARY_ONLY, false);
tess.gluTessProperty(gluEnum.GLU_TESS_TOLERANCE, 0.0);

// Get properties
const windingRuleValue: number | boolean = tess.gluGetTessProperty(gluEnum.GLU_TESS_WINDING_RULE);
const boundaryOnly: number | boolean = tess.gluGetTessProperty(gluEnum.GLU_TESS_BOUNDARY_ONLY);

// Set normal (for 2D tessellation)
tess.gluTessNormal(0, 0, 1);

// Register callbacks
tess.gluTessCallback(gluEnum.GLU_TESS_BEGIN, (type: primitiveType) => {
    if (type === primitiveType.GL_TRIANGLES) {
        // handle triangles
    }
});

tess.gluTessCallback(gluEnum.GLU_TESS_VERTEX, (vertexData: any) => {
    // handle vertex
});

tess.gluTessCallback(gluEnum.GLU_TESS_END, () => {
    // handle end
});

tess.gluTessCallback(gluEnum.GLU_TESS_ERROR, (errno: errorType | gluEnum) => {
    if (errno === errorType.GLU_TESS_NEED_COMBINE_CALLBACK) {
        // handle error
    }
});

tess.gluTessCallback(gluEnum.GLU_TESS_EDGE_FLAG, (flag: boolean) => {
    // handle edge flag
});

tess.gluTessCallback(
    gluEnum.GLU_TESS_COMBINE,
    (coords: number[], vertexData: any[], weight: number[]) => {
        return { coords };
    }
);

// Callbacks with polygon data
const polygonData = { id: 1 };

tess.gluTessCallback(gluEnum.GLU_TESS_BEGIN_DATA, (type: primitiveType, data?: any) => {
    if (data) {
        // handle with data
    }
});

tess.gluTessCallback(gluEnum.GLU_TESS_VERTEX_DATA, (vertexData: any, data?: any) => {
    if (data) {
        // handle with data
    }
});

tess.gluTessCallback(gluEnum.GLU_TESS_END_DATA, (data?: any) => {
    if (data) {
        // handle with data
    }
});

tess.gluTessCallback(gluEnum.GLU_TESS_ERROR_DATA, (errno: errorType | gluEnum, data?: any) => {
    if (data) {
        // handle with data
    }
});

tess.gluTessCallback(gluEnum.GLU_TESS_EDGE_FLAG_DATA, (flag: boolean, data?: any) => {
    if (data) {
        // handle with data
    }
});

tess.gluTessCallback(
    gluEnum.GLU_TESS_COMBINE_DATA,
    (coords: number[], vertexData: any[], weight: number[], data?: any) => {
        return { coords, data };
    }
);

// Clear a callback
tess.gluTessCallback(gluEnum.GLU_TESS_BEGIN, null);

// Tessellate a simple square
tess.gluTessBeginPolygon(polygonData);
tess.gluTessBeginContour();
tess.gluTessVertex([0, 0, 0], { id: 0 });
tess.gluTessVertex([1, 0, 0], { id: 1 });
tess.gluTessVertex([1, 1, 0], { id: 2 });
tess.gluTessVertex([0, 1, 0], { id: 3 });
tess.gluTessEndContour();
tess.gluTessEndPolygon();

// Tessellate a polygon with a hole
tess.gluTessBeginPolygon(null);

// Outer contour
tess.gluTessBeginContour();
tess.gluTessVertex([0, 0, 0], 0);
tess.gluTessVertex([2, 0, 0], 1);
tess.gluTessVertex([2, 2, 0], 2);
tess.gluTessVertex([0, 2, 0], 3);
tess.gluTessEndContour();

// Inner contour (hole)
tess.gluTessBeginContour();
tess.gluTessVertex([0.5, 0.5, 0], 4);
tess.gluTessVertex([1.5, 0.5, 0], 5);
tess.gluTessVertex([1.5, 1.5, 0], 6);
tess.gluTessVertex([0.5, 1.5, 0], 7);
tess.gluTessEndContour();

tess.gluTessEndPolygon();

// Clean up
tess.gluDeleteTess();

