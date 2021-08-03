export = ClassSourceGenerator;
declare function ClassSourceGenerator(mimeType: any): void;
declare class ClassSourceGenerator {
    constructor(mimeType: any);
    _mimeType: any;
    _iVfs: import('../dataset/DataSet.js');
    _classe: import('../dataset/DataSet.js');
    _getSourceParts(classKey: any): {
        includes: string;
        source: string;
    };
    getSource(classKey: any): string;
    getClassDefFunctionSource(classKey: any): string;
    _getIncludesOnceOfSource(src: any): {
        content: string;
        endPos: number;
    };
}
