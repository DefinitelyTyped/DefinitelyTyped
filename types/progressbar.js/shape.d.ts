import { PathDrawingOptions, AnimationSupport } from './';

declare class Shape {
    /**
     * `Line`, `Circle` or `SemiCircle` shaped progress bar. Appends SVG to container.
     * @param container - Element where SVG is added.
     * @param [opts] - Options for path drawing.
     * @see {@link https://progressbarjs.readthedocs.io/en/latest/api/shape/#new-shapecontainer-options}
     */
    constructor(container: SVGPathElement | string | null, opts?: PathDrawingOptions);
    /**
     * Reference to SVG element where progress bar is drawn.
     */
    readonly svg: SVGElement;
    /**
     * Reference to SVG path which presents the actual progress bar.
     */
    readonly path: SVGPathElement;
    /**
     * Reference to SVG path which presents the trail of the progress bar.
     * Returns `null` if trail is not defined.
     */
    readonly trail: SVGPathElement | null;
    /**
     * Reference to p element which presents the text label for progress bar.
     * Returns `null` if text is not defined.
     */
    readonly text: HTMLParagraphElement | null;
    destroy(): void;
    setText(newText: string): void;
}
// tslint:disable-next-line no-empty-interface adds members from animation contract
interface Shape extends AnimationSupport {}

export = Shape;
