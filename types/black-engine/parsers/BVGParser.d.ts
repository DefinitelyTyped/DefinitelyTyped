export class BVGParser extends ParserBase {
    _defs: any;
    parse(data: any): GraphicsData;
    private __traverse;
    private __isRef;
    private __parseDefs;
    private __parseStyles;
    private __drawPath;
    private __approxUnitArc;
    __vectorAngle(ux: any, uy: any, vx: any, vy: any): number;
    private __getArcCenter;
    private __arcToBezier;
}
import { ParserBase } from './ParserBase';
import { GraphicsData } from '../display/GraphicsData';
