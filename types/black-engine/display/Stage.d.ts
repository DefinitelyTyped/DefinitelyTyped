export class Stage extends GameObject {
    private mScaleMode;
    private mWidth;
    private mHeight;
    private mStageWidth;
    private mStageHeight;
    private mStageScaleFactor;
    private mCacheWidth;
    private mCacheHeight;
    private mDPR;
    setSize(width: number, height: number): void;
    refresh(): void;
    private __refresh;
    set scaleMode(arg: string);
    get scaleMode(): string;
    get scaleFactor(): number;
    get renderWidth(): number;
    get renderHeight(): number;
    get centerX(): number;
    get centerY(): number;
    getBounds(space?: any, includeChildren?: boolean, outRect?: any): any;
    onGetLocalBounds(outRect?: any): any;
    set localTransformation(arg: Matrix);
    get localTransformation(): Matrix;
}
import { Matrix } from '../geom/Matrix';
import { GameObject } from '../core/GameObject';
