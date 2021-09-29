export class FontAtlas {
    atlasesArr: any[];
    atlasIndexes: {};
    atlasIndexesDeferred: any[];
    tokenImageSize: number;
    samplerArr: number[];
    _handler: any;
    assignHandler(handler: any): void;
    getFontIndex(face: any): any;
    getFullIndex(face: any): any;
    _applyFontDataToAtlas(atlas: any, data: any): void;
    initFont(faceName: any, dataJson: any, imageBase64: any): void;
    loadFont(faceName: any, srcDir: any, atlasUrl: any): void;
}
