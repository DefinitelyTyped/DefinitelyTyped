export = fieldValuesAreEqual;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Determina se os campos do dataSet informados em *fieldNames* são iguais aos valores
 * *fieldValues*.
 *
 * A comparação realizada por este método será equivalente ao critério interno de comparação
 * do DataSet. Valores nulos serão considerados iguais a string vazias por esta função quando
 * comparados campos textuais e a comparação de texto será insensitiva.
 * @param {DataSet} ds DataSet a ser comparado.
 * @param {Array<string>} fieldNames Nomes dos campos que serão comparados.
 * @param {Array<*>} fieldValues Valores dos campos que serão comparados.
 * @return {boolean} True se os valores de *fieldValues* forem iguais aos dos campos
 * do dataSet.
 */
declare function fieldValuesAreEqual(
    ds: DataSet,
    fieldNames: string[],
    fieldValues: any[]
): boolean;
declare namespace fieldValuesAreEqual {
    export { DataSet };
}
type DataSet = import('./DataSet');
