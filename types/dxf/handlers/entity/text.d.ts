import { Property } from '../../Information';
import common, { CommonEntityData } from "./common";

export const TYPE: string;

export type TextEntityData = {
    string?: string;
    x?: number;
    y?: number;
    z?: number;
    x2?: number;
    y2?: number;
    z2?: number;
    thickness?: any;
    textHeight?: any;
    relScaleX?: any;
    rotation?: any;
    obliqueAngle?: any;
    styleName?: any;
    mirror?: any;
    hAlign?: any;
    vAlign?: any;
    extX?: any;
    extY?: any;
    ext?: any;
} & Partial<CommonEntityData>;

export function process(value: Property): TextEntityData;

export default TextEntityData;
