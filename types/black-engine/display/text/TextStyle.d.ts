export class TextStyle {
    static get default(): TextStyle;
    constructor(
        family?: string,
        color?: number,
        size?: number,
        style?: FontStyle,
        weight?: FontWeight,
        strokeThickness?: number,
        strokeColor?: number,
    );
    name: string;
    family: string;
    size: number;
    color: number;
    alpha: number;
    style: FontStyle;
    weight: FontWeight;
    strokeThickness: number;
    strokeColor: number;
    strokeAlpha: number;
    dropShadow: boolean;
    shadowDistanceX: number;
    shadowDistanceY: number;
    shadowColor: number;
    shadowAlpha: number;
    shadowBlur: number;
    clone(
        family?: any,
        color?: number,
        size?: number,
        style?: any,
        weight?: any,
        strokeThickness?: number,
        strokeColor?: number,
    ): TextStyle;
}
import { FontStyle } from './styles/FontStyle';
import { FontWeight } from './styles/FontWeight';
