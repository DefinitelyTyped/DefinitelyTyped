// Type definitions for EaselJS 0.5
// Project: http://www.createjs.com/#!/EaselJS
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface AlphaMapFilter {
    alphaMap;
    constructor (alphaMap);
    applyFilter(ctx: any, x: any, y: any, width, height, targetCtx, targetX, targetY): void;
    clone();
    toString(): string;
}

interface AlphaMaskFilter {
}

interface Bitmap extends  DisplayObject {
}

interface BitmapAnimation  extends  DisplayObject {
}

interface BoxBlurFilter {
}

interface ColorFilter {
}

interface ColorMatrix {
}

interface ColorMatrixFilter {
}

interface Command {
}

interface Container extends DisplayObject {
}

interface DisplayObject {
}

interface DOMElement extends DisplayObject {
}

interface Graphics {
}

interface Matrix2D {
}

interface MouseEvent {
}

interface MovieClip extends Container {
}

interface Point {
}

interface Rectangle {
}

interface Shadow {
}

interface Shape extends DisplayObject {
}

interface SpriteSheet {
}

interface SpriteSheetBuilder {
}

interface SpriteSheetUtils {
}

interface Stage extends Container {
}

interface Text extends DisplayObject {
}

interface Ticker {
}

interface Touch {
}

interface UID {
    get(): number;
}