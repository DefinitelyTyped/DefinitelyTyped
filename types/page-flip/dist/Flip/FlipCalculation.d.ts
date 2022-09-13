import { Point, RectPoints } from '../BasicTypes';
import { FlipCorner, FlipDirection } from './Flip';
/**
 * Class representing mathematical methods for calculating page position (rotation angle, clip area ...)
 */
export class FlipCalculation {
    private direction;
    private corner;
    /** Calculated rotation angle to flipping page */
    private angle;
    /** Calculated position to flipping page */
    private position;
    private rect;
    /** The point of intersection of the page with the borders of the book */
    private topIntersectPoint;
    private sideIntersectPoint;
    private bottomIntersectPoint;
    private readonly pageWidth;
    private readonly pageHeight;

    constructor(direction: FlipDirection, corner: FlipCorner, pageWidth: string, pageHeight: string);
    /**
     * The main calculation method
     */
    calc(localPos: Point): boolean;
    /**
     * Get the crop area for the flipping page
     */
    getFlippingClipArea(): Point[];
    /**
     * Get the crop area for the page that is below the page to be flipped
     */
    getBottomClipArea(): Point[];
    /**
     * Get page rotation angle
     */
    getAngle(): number;
    /**
     * Get page area while flipping
     */
    getRect(): RectPoints;
    /**
     * Get the position of the active angle when turning
     */
    getPosition(): Point;
    /**
     * Get the active corner of the page (which pull)
     */
    getActiveCorner(): Point;
    /**
     * Get flipping direction
     */
    getDirection(): FlipDirection;
    /**
     * Get flipping progress (0-100)
     */
    getFlippingProgress(): number;
    /**
     * Get flipping corner position (top, bottom)
     */
    getCorner(): FlipCorner;
    /**
     * Get start position for the page that is below the page to be flipped
     */
    getBottomPagePosition(): Point;
    /**
     * Get the starting position of the shadow
     */
    getShadowStartPoint(): Point;
    /**
     * Get the rotate angle of the shadow
     */
    getShadowAngle(): number;
    private calcAngleAndPosition;
    private updateAngleAndGeometry;
    private calculateAngle;
    private getPageRect;
    private getRectFromBasePoint;
    private getRotatedPoint;
    private calculateIntersectPoint;
    private checkPositionAtCenterLine;
    private getSegmentToShadowLine;
}
