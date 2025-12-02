/**
 * Polygon tessellation library, ported from SGI's GLU implementation
 * written by Eric Veach in 1994
 */

/**
 * GLU tessellation property and callback type enums
 */
export enum gluEnum {
  /** Winding rule property */
  GLU_TESS_WINDING_RULE = 100140,
  /** Boundary only property - if true, only outputs boundary contours instead of triangulated polygons */
  GLU_TESS_BOUNDARY_ONLY = 100141,
  /** Tolerance property for vertex merging */
  GLU_TESS_TOLERANCE = 100142,

  /** Begin callback - called when beginning a new primitive */
  GLU_TESS_BEGIN = 100100,
  /** Vertex callback - called for each vertex */
  GLU_TESS_VERTEX = 100101,
  /** End callback - called when ending a primitive */
  GLU_TESS_END = 100102,
  /** Error callback - called when an error occurs */
  GLU_TESS_ERROR = 100103,
  /** Edge flag callback - called to indicate whether edges are on the polygon boundary */
  GLU_TESS_EDGE_FLAG = 100104,
  /** Combine callback - called when vertices need to be merged or interpolated */
  GLU_TESS_COMBINE = 100105,

  /** Begin callback with client data */
  GLU_TESS_BEGIN_DATA = 100106,
  /** Vertex callback with client data */
  GLU_TESS_VERTEX_DATA = 100107,
  /** End callback with client data */
  GLU_TESS_END_DATA = 100108,
  /** Error callback with client data */
  GLU_TESS_ERROR_DATA = 100109,
  /** Edge flag callback with client data */
  GLU_TESS_EDGE_FLAG_DATA = 100110,
  /** Combine callback with client data */
  GLU_TESS_COMBINE_DATA = 100111
}

/**
 * Winding rules determine which regions are considered "inside" the polygon
 */
export enum windingRule {
  /** Odd-even winding rule - alternating regions are inside/outside */
  GLU_TESS_WINDING_ODD = 100130,
  /** Non-zero winding rule - regions with non-zero winding number are inside */
  GLU_TESS_WINDING_NONZERO = 100131,
  /** Positive winding rule - regions with positive winding number are inside */
  GLU_TESS_WINDING_POSITIVE = 100132,
  /** Negative winding rule - regions with negative winding number are inside */
  GLU_TESS_WINDING_NEGATIVE = 100133,
  /** Absolute value >= 2 winding rule - regions where |winding| >= 2 are inside */
  GLU_TESS_WINDING_ABS_GEQ_TWO = 100134
}

/**
 * Primitive types that can be output by the tessellator
 */
export enum primitiveType {
  /** Line loop primitive */
  GL_LINE_LOOP = 2,
  /** Triangle list primitive */
  GL_TRIANGLES = 4,
  /** Triangle strip primitive */
  GL_TRIANGLE_STRIP = 5,
  /** Triangle fan primitive */
  GL_TRIANGLE_FAN = 6
}

/**
 * Error codes that can be returned by the tessellator
 */
export enum errorType {
  GLU_TESS_MISSING_BEGIN_POLYGON = 100151,
  GLU_TESS_MISSING_END_POLYGON = 100153,
  GLU_TESS_MISSING_BEGIN_CONTOUR = 100152,
  GLU_TESS_MISSING_END_CONTOUR = 100154,
  GLU_TESS_COORD_TOO_LARGE = 100155,
  GLU_TESS_NEED_COMBINE_CALLBACK = 100156
}

/**
 * The main GLU tessellator class. Used to tessellate complex polygons with holes into simpler primitives
 */
export class GluTesselator {
  /**
   * Create a new tessellator object
   */
  constructor();

  /**
   * Delete the tessellator object. Note: In JavaScript this is largely a no-op as garbage collection handles cleanup
   */
  gluDeleteTess(): void;

  /**
   * Set a tessellation property
   * @param which - The property to set (from gluEnum)
   * @param value - The value to set
   */
  gluTessProperty(which: gluEnum, value: number | boolean): void;

  /**
   * Get a tessellation property
   * @param which - The property to get (from gluEnum)
   * @returns The current value of the property
   */
  gluGetTessProperty(which: gluEnum): number | boolean;

  /**
   * Specify the normal vector for the polygon. This helps the tessellator determine the polygon orientation. For 2D tessellation, typically use (0, 0, 1)
   * @param x - X component of normal
   * @param y - Y component of normal
   * @param z - Z component of normal
   */
  gluTessNormal(x: number, y: number, z: number): void;

  /**
   * Register a callback function for tessellation events. Different callback types have different signatures
   */
  gluTessCallback(
    which: gluEnum.GLU_TESS_BEGIN | gluEnum.GLU_TESS_BEGIN_DATA,
    callback: ((type: primitiveType, polygonData?: any) => void) | null
  ): void;
  gluTessCallback(
    which: gluEnum.GLU_TESS_EDGE_FLAG | gluEnum.GLU_TESS_EDGE_FLAG_DATA,
    callback: ((flag: boolean, polygonData?: any) => void) | null
  ): void;
  gluTessCallback(
    which: gluEnum.GLU_TESS_VERTEX | gluEnum.GLU_TESS_VERTEX_DATA,
    callback: ((vertexData: any, polygonData?: any) => void) | null
  ): void;
  gluTessCallback(
    which: gluEnum.GLU_TESS_END | gluEnum.GLU_TESS_END_DATA,
    callback: ((polygonData?: any) => void) | null
  ): void;
  gluTessCallback(
    which: gluEnum.GLU_TESS_ERROR | gluEnum.GLU_TESS_ERROR_DATA,
    callback: ((errno: errorType | gluEnum, polygonData?: any) => void) | null
  ): void;
  gluTessCallback(
    which: gluEnum.GLU_TESS_COMBINE | gluEnum.GLU_TESS_COMBINE_DATA,
    callback:
      | ((
          coords: number[],
          vertexData: any[],
          weight: number[],
          polygonData?: any
        ) => any)
      | null
  ): void;

  /**
   * Add a vertex to the current contour. Must be called between gluTessBeginContour and gluTessEndContour
   * @param coords - Vertex coordinates [x, y, z]
   * @param data - Client data associated with this vertex (will be passed to callbacks)
   */
  gluTessVertex(coords: number[], data: any): void;

  /**
   * Begin a new polygon. Must be called before adding any contours
   * @param data - Client data for this polygon (will be passed to callbacks)
   */
  gluTessBeginPolygon(data: any): void;

  /**
   * Begin a new contour within the current polygon. Must be called after gluTessBeginPolygon and before adding vertices
   */
  gluTessBeginContour(): void;

  /**
   * End the current contour. Must be called after adding vertices to a contour
   */
  gluTessEndContour(): void;

  /**
   * End the current polygon and perform tessellation. This triggers the tessellation and fires the registered callbacks
   */
  gluTessEndPolygon(): void;
}

