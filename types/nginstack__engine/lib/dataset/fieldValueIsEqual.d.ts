export = fieldValueIsEqual;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Determina se o valor do campo informado em <em>fieldName</em> é igual ao valor
 * <em>fieldValue</em>.<br>
 * A comparação realizada por este método será equivalente ao critério interno de comparação
 * do DataSet. Valores nulos serão considerados iguais a string vazias por esta função quando
 * comparados campos textuais e a comparação de texto será insensitiva.
 * @param {DataSet} ds DataSet a ser comparado.
 * @param {string} fieldName Nome do campo a ser comparado.
 * @param {*} value Valor que será comparado ao valor corrente do campo.
 * @return {boolean} True se os valores forem iguais ou equivalentes no critério de comparação
 * do dataSet.
 */
declare function fieldValueIsEqual(ds: DataSet, fieldName: string, value: any): boolean;
declare namespace fieldValueIsEqual {
    export { DataSet };
}
type DataSet = import('./DataSet');
