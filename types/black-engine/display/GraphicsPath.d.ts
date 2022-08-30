export class GraphicsPath {
    bounds: Rectangle | null;
    points: number[];
    maxLineWidth: number;
    lastLineWidth: number;
    lineMul: number;
}
import { Rectangle } from '../geom/Rectangle';
