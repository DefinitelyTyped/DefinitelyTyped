export = ClassSourceGenerator;
declare function ClassSourceGenerator(mimeType: any): void;
declare class ClassSourceGenerator {
    constructor(mimeType: any);
    /** @private */
    private _mimeType;
    /** @private */
    private _iVfs;
    /** @private */
    private _classe;
    private _getSourceParts;
    /**
     * Obtém o código fonte do MimeType da classe informada.
     * @param {number} classKey Chave da classe.
     * @return {string} Código fonte pré-formatado com os includesOnce na parte inicial do código.
     */
    getSource(classKey: number): string;
    getClassDefFunctionSource(classKey: any): string;
    private _getIncludesOnceOfSource;
}
