export class GraphicsCommand {
    constructor(type: GraphicsCommandType, data: any[]);
    type: GraphicsCommandType;
    data: any[];
    getNumber(ix: number): number;
    getString(ix: number): string;
    getBoolean(ix: number): boolean;
    getObject(ix: number): any;
}
import { GraphicsCommandType } from './GraphicsCommandType';
