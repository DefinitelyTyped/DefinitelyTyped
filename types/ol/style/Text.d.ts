import { Size } from '../size';
import Fill from './Fill';
import Stroke from './Stroke';
import TextPlacement from './TextPlacement';

export interface Options {
    font?: string;
    maxAngle?: number;
    offsetX?: number;
    offsetY?: number;
    overflow?: boolean;
    placement?: TextPlacement | string;
    scale?: number | Size;
    rotateWithView?: boolean;
    rotation?: number;
    text?: string;
    textAlign?: string;
    textBaseline?: string;
    fill?: Fill;
    stroke?: Stroke;
    backgroundFill?: Fill;
    backgroundStroke?: Stroke;
    padding?: number[];
}
export default class Text {
    constructor(opt_options?: Options);
    /**
     * Clones the style.
     */
    clone(): Text;
    /**
     * Get the background fill style for the text.
     */
    getBackgroundFill(): Fill;
    /**
     * Get the background stroke style for the text.
     */
    getBackgroundStroke(): Stroke;
    /**
     * Get the fill style for the text.
     */
    getFill(): Fill;
    /**
     * Get the font name.
     */
    getFont(): string | undefined;
    /**
     * Get the maximum angle between adjacent characters.
     */
    getMaxAngle(): number;
    /**
     * Get the x-offset for the text.
     */
    getOffsetX(): number;
    /**
     * Get the y-offset for the text.
     */
    getOffsetY(): number;
    /**
     * Get the overflow configuration.
     */
    getOverflow(): boolean;
    /**
     * Get the padding for the text.
     */
    getPadding(): number[];
    /**
     * Get the label placement.
     */
    getPlacement(): TextPlacement | string;
    /**
     * Determine whether the text rotates with the map.
     */
    getRotateWithView(): boolean | undefined;
    /**
     * Get the text rotation.
     */
    getRotation(): number | undefined;
    /**
     * Get the text scale.
     */
    getScale(): number | Size | undefined;
    /**
     * Get the symbolizer scale array.
     */
    getScaleArray(): Size;
    /**
     * Get the stroke style for the text.
     */
    getStroke(): Stroke;
    /**
     * Get the text to be rendered.
     */
    getText(): string | undefined;
    /**
     * Get the text alignment.
     */
    getTextAlign(): string | undefined;
    /**
     * Get the text baseline.
     */
    getTextBaseline(): string | undefined;
    /**
     * Set the background fill.
     */
    setBackgroundFill(fill: Fill): void;
    /**
     * Set the background stroke.
     */
    setBackgroundStroke(stroke: Stroke): void;
    /**
     * Set the fill.
     */
    setFill(fill: Fill): void;
    /**
     * Set the font.
     */
    setFont(font: string | undefined): void;
    /**
     * Set the maximum angle between adjacent characters.
     */
    setMaxAngle(maxAngle: number): void;
    /**
     * Set the x offset.
     */
    setOffsetX(offsetX: number): void;
    /**
     * Set the y offset.
     */
    setOffsetY(offsetY: number): void;
    /**
     * Set the overflow property.
     */
    setOverflow(overflow: boolean): void;
    /**
     * Set the padding ([top, right, bottom, left]).
     */
    setPadding(padding: number[]): void;
    /**
     * Set the text placement.
     */
    setPlacement(placement: TextPlacement | string): void;
    /**
     * Set whether to rotate the text with the view.
     */
    setRotateWithView(rotateWithView: boolean): void;
    /**
     * Set the rotation.
     */
    setRotation(rotation: number | undefined): void;
    /**
     * Set the scale.
     */
    setScale(scale: number | Size | undefined): void;
    /**
     * Set the stroke.
     */
    setStroke(stroke: Stroke): void;
    /**
     * Set the text.
     */
    setText(text: string | undefined): void;
    /**
     * Set the text alignment.
     */
    setTextAlign(textAlign: string | undefined): void;
    /**
     * Set the text baseline.
     */
    setTextBaseline(textBaseline: string | undefined): void;
}
