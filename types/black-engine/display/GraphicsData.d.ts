export class GraphicsData {
    private mNodes;
    private mTransform;
    private mCommandQueue;
    private mPivotX;
    private mPivotY;
    private mPosX;
    private mPosY;
    private mName;
    protected onGetLocalBounds(graphics: any, transform: Matrix): Rectangle;
    lineStyle(
        lineWidth?: number,
        color?: number,
        alpha?: number,
        caps?: CapsStyle,
        joints?: JointStyle,
        miterLimit?: number,
    ): void;
    shadowBlur(level: number): void;
    shadowColor(color: number, alpha: number): void;
    fillStyle(color?: number, alpha?: number): void;
    fillGradient(gradient: GraphicsGradient): void;
    fillPattern(pattern: GraphicsPattern): void;
    clear(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    circle(x: number, y: number, radius: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    roundedRect(x: number, y: number, width: number, height: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    private __bezierRange;
    private __bezierDot;
    private __quadraticRange;
    beginPath(): void;
    closePath(): void;
    setLineDash(segments: number[]): void;
    stroke(): void;
    fill(isNonZero: boolean): void;
    private __pushCommand;
    searchNode(name: any, parent?: GraphicsData): any;
    set name(arg: string);
    get name(): string;
}
import { Matrix } from '../geom/Matrix';
import { Rectangle } from '../geom/Rectangle';
import { CapsStyle } from './CapsStyle';
import { GraphicsGradient } from './GraphicsGradient';
import { GraphicsPattern } from './GraphicsPattern';
import { JointStyle } from './JointStyle';
