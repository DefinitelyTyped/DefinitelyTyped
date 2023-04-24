import { ColorRepresentation } from '../math/Color';
import { LineSegments } from './../objects/LineSegments';

export class GridHelper extends LineSegments {
    /**
     * @param [size=10]
     * @param [divisions=10]
     * @param [color1=0x444444]
     * @param [color2=0x888888]
     */
    constructor(size?: number, divisions?: number, color1?: ColorRepresentation, color2?: ColorRepresentation);

    /**
     * @default 'GridHelper'
     */
    type: string;

    dispose(): void;
}
