export class Graphics extends DisplayObject {
    constructor(graphicsData?: GraphicsData | string | null, trim?: boolean);
    private mBounds;
    private mLocalBounds;
    private mGraphicsData;
    private mDataOffsetX;
    private mDataOffsetY;
    private mTrim;
    lineStyle(
        lineWidth?: number,
        color?: number,
        alpha?: number,
        caps?: CapsStyle,
        joints?: JointStyle,
        miterLimit?: number,
    ): void;
    shadowBlur(level: number): void;
    shadowColor(color: number, alpha?: number): void;
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
    beginPath(): void;
    closePath(): void;
    setLineDash(segments: any): void;
    stroke(): void;
    fill(isNonZero?: boolean): void;
    createLinearGradient(x: any, y: any, width: any, height: any): GraphicsLinearGradient;
}
import { DisplayObject } from './DisplayObject';
import { CapsStyle } from './CapsStyle';
import { JointStyle } from './JointStyle';
import { GraphicsLinearGradient } from './GraphicsLinearGradient';
import { GraphicsData } from './GraphicsData';
import { GraphicsGradient } from './GraphicsGradient';
import { GraphicsPattern } from './GraphicsPattern';
