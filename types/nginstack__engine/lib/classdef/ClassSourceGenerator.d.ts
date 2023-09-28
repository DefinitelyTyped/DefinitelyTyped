export = ClassSourceGenerator;
declare function ClassSourceGenerator(mimeType: any): void;
declare class ClassSourceGenerator {
    constructor(mimeType: any);
    private _mimeType;
    private _iVfs;
    private _classe;
    private _getSourceParts;
    getSource(classKey: number): string;
    getClassDefFunctionSource(classKey: any): string;
    private _getIncludesOnceOfSource;
}
