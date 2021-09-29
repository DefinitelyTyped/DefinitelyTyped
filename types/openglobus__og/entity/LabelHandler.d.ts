export class LabelHandler extends BillboardHandler {
    constructor(entityCollection: any, maxLetters?: number);
    _gliphParamBuffer: any;
    _fontIndexBuffer: any;
    _noOutlineBuffer: any;
    _outlineBuffer: any;
    _outlineColorBuffer: any;
    _gliphParamArr: Float32Array;
    _fontIndexArr: Float32Array;
    _noOutlineArr: Float32Array;
    _outlineArr: Float32Array;
    _outlineColorArr: Float32Array;
    _maxLetters: number;
    assignFontAtlas(label: any): void;
    setText(index: any, text: any, fontIndex: any, align: any): void;
    setOutlineColorArr(index: any, rgba: any): void;
    setOutlineArr(index: any, outline: any): void;
    setFontIndexArr(index: any, fontIndex: any): void;
    createFontIndexBuffer(): void;
    createOutlineBuffer(): void;
    createOutlineColorBuffer(): void;
    setMaxLetters(c: any): void;
}
import { BillboardHandler } from "./BillboardHandler.js";
