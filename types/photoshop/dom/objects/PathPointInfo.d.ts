import * as Constants from "../Constants";
/**
 * Used to create a [[PathPoint]], which represents the anchor and control-handle endpoints for a path segment.
 * Each point (the anchor point, left-direction point, and right-direction point) is an array containing X and Y
 * position coordinates.
 *
 *  - Use the JavaScript `new` operator to create these objects, and store them in the [[SubPathInfo.entireSubPath]]
 * property before using that object to create a path item with [[PathItems.add]]()
 *
 *  - The resulting [[SubPathItem]] object contains the resulting [[PathPoint]] objects. Use the [[PathPoint]] object
 * to retrieve information about the points that describe existing path segments. The properties are read-only.
 *
 * For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved
 * segments, the coordinates are different. The difference between the anchor point and the left or right
 * direction points determines the arc of the curve. Use the left direction point to bend the curve "outward" or
 * make it convex; or use the right direction point to bend the curve "inward" or make it concave.
 *
 *  ## PathPointInfo sample script
 *
 * ```typescript
 *      function drawLine(doc: Document, start: number[], stop: number[]) {
 *          const startPoint = new PathPointInfo();
 *          startPoint.anchor = start;
 *          startPoint.leftDirection = start;
 *          startPoint.rightDirection = start;
 *          startPoint.kind = Constants.PointKind.CORNERPOINT;
 *
 *          const stopPoint = new PathPointInfo();
 *          stopPoint.anchor = stop;
 *          stopPoint.leftDirection = stop;
 *          stopPoint.rightDirection = stop;
 *          stopPoint.kind = Constants.PointKind.CORNERPOINT;
 *
 *          const spi = new SubPathInfo();
 *          spi.closed = false;
 *          spi.operation = Constants.ShapeOperation.SHAPEXOR;
 *          spi.entireSubPath = [startPoint, stopPoint];
 *
 *          const line = doc.pathItems.add("Line", [spi]);
 *          line.strokePath(Constants.ToolType.PENCIL);
 *          line.remove();
 *      }
 *
 *      drawLine(app.activeDocument, [100,100], [200,200]);
 * ```
 */
export declare class PathPointInfo {
    /** The X and Y coordinates of the anchor point of the curve. */
    anchor: number[];
    /** The role (corner or smooth) this point plays in the containing path segment. */
    kind: Constants.PointKind;
    /** The location of the left-direction endpoint('in' position). */
    leftDirection: number[];
    /** The location of the right-direction endpoint('out' position). */
    rightDirection: number[];
    /**
     * The class name of the referenced object
     * @default "PathPointInfo"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
