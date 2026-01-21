export = isTextualField;
/** @module @nginstack/engine/lib/dataset/isTextualField */
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Indica se o tipo do campo informado é textual. Um campo será textual se ele
 * for do tipo string ou memo.
 * @param {!DataSet} ds DataSet que contém o campo que será avaliado.
 * @param {string} fieldName Nome do campo que será verificado. Se for informada
 * uma expressão lookup (fldA.fldB), será avaliado o primeiro campo.
 * @return {boolean} True se o campo for textual.
 */
declare function isTextualField(ds: DataSet, fieldName: string): boolean;
declare namespace isTextualField {
    export { DataSet };
}
type DataSet = import('./DataSet');
