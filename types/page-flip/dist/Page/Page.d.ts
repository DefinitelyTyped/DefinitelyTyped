import { Render } from '../Render/Render';
import { Point } from '../BasicTypes';
/**
 * State of the page on the basis of which rendering
 */
export interface PageState {
    /** Page rotation angle */
    angle: number;
    /** Page scope */
    area: Point[];
    /** Page position */
    position: Point;
    /** Rotate angle for hard pages */
    hardAngle: number;
    /** Rotate angle for hard pages at renedering time */
    hardDrawingAngle: number;
}
export enum PageOrientation {
    /** Left side page */
    LEFT = 0,
    /** Right side page */
    RIGHT = 1
}
export enum PageDensity {
    SOFT = "soft",
    HARD = "hard"
}
/**
 * Class representing a book page
 */
export abstract class Page {
    /** State of the page on the basis of which rendering */
    protected state: PageState;
    /** Render object */
    protected render: Render;
    /** Page Orientation */
    protected orientation: PageOrientation;
    /** Density at creation */
    protected createdDensity: PageDensity;
    /** Density at the time of rendering (Depends on neighboring pages) */
    protected nowDrawingDensity: PageDensity;
    protected constructor(render: Render, density: PageDensity);
    /**
     * Render static page
     */
    abstract simpleDraw(orient: PageOrientation): void;
    /**
     * Render dynamic page, using state
     */
    abstract draw(tempDensity?: PageDensity): void;
    /**
     * Page loading
     */
    abstract load(): void;
    /**
     * Set a constant page density
     */
    setDensity(density: PageDensity): void;
    /**
     * Set temp page density to next render
     */
    setDrawingDensity(density: PageDensity): void;
    /**
     * Set page position
     */
    setPosition(pagePos: Point): void;
    /**
     * Set page angle
     */
    setAngle(angle: number): void;
    /**
     * Set page crop area
     */
    setArea(area: Point[]): void;
    /**
     * Rotate angle for hard pages to next render
     */
    setHardDrawingAngle(angle: number): void;
    /**
     * Rotate angle for hard pages
     */
    setHardAngle(angle: number): void;
    /**
     * Set page orientation
     */
    setOrientation(orientation: PageOrientation): void;
    /**
     * Get temp page density
     */
    getDrawingDensity(): PageDensity;
    /**
     * Get a constant page density
     */
    getDensity(): PageDensity;
    /**
     * Get rotate angle for hard pages
     */
    getHardAngle(): number;
    abstract newTemporaryCopy(): Page;
    abstract getTemporaryCopy(): Page;
    abstract hideTemporaryCopy(): void;
}
