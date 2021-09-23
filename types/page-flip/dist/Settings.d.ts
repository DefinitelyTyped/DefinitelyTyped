/**
 * Book size calculation type
 */
export enum SizeType {
    /** Dimensions are fixed */
    FIXED = "fixed",
    /** Dimensions are calculated based on the parent element */
    STRETCH = "stretch"
}
/**
 * Configuration object
 */
export interface FlipSetting {
    /** Page number from which to start viewing */
    startPage: number;
    /** Whether the book will be stretched under the parent element or not */
    size: SizeType;
    width: number;
    height: number;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    /** Draw shadows or not when page flipping */
    drawShadow: boolean;
    /** Flipping animation time */
    flippingTime: number;
    /** Enable switching to portrait mode */
    usePortrait: boolean;
    /** Initial value to z-index */
    startZIndex: number;
    /** If this value is true, the parent element will be equal to the size of the book */
    autoSize: boolean;
    /** Shadow intensity (1: max intensity, 0: hidden shadows) */
    maxShadowOpacity: number;
    /** If this value is true, the first and the last pages will be marked as hard and will be shown in single page mode */
    showCover: boolean;
    /** Disable content scrolling when touching a book on mobile devices */
    mobileScrollSupport: boolean;
    /** Set the forward event of clicking on child elements (buttons, links) */
    clickEventForward: boolean;
    /** Using mouse and touch events to page flipping */
    useMouseEvents: boolean;
    swipeDistance: number;
    /** if this value is true, fold the corners of the book when the mouse pointer is over them. */
    showPageCorners: boolean;
    /** if this value is true, flipping by clicking on the whole book will be locked. Only on corners */
    disableFlipByClick: boolean;
}
export class Settings {
    private _default;
    /**
     * Processing parameters received from the user. Substitution default values
     */
    getSettings(userSetting: Record<string, number | string | boolean>): FlipSetting;
}
