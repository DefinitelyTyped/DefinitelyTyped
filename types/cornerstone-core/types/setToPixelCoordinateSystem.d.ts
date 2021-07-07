import { EnabledElement } from "./Objects";

/**
 * Sets the canvas context transformation matrix to the pixel coordinate system.  This allows
 * geometry to be driven using the canvas context using coordinates in the pixel coordinate system
 * @param enabledElement The
 * @param context The CanvasRenderingContext2D for the enabledElement's Canvas
 * @param [scale] Optional scale to apply
 */
export default function _default(enabledElement: EnabledElement, context: CanvasRenderingContext2D, scale?: number): void;
