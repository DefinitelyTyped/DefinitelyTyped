export = reduceFieldDefs;
/**
 * @typedef {import('./Field')} Field
 * @private
 */
/**
 * Dada uma classe e campos, este método executará a função *f* para cada
 * campo encontrado nas definições.
 * @param {number} classKey Chave da classe origem do campo.
 * @param {string} fldExpr Campo ou expressão de campos.
 * @param {function(*, Field):*} f Função que será executada para cada
 * elemento. Ela terá 2 parâmetros, o valor inicial e o campo corrente.
 * @param {*} [val] Valor inicial.
 * @param {Object} [opt_obj] Objeto que será o contexto de *f*.
 * @return {*} Valor resultado de todas as execuções de *f*.
 */
declare function reduceFieldDefs(
    classKey: number,
    fldExpr: string,
    f: (arg0: any, arg1: Field) => any,
    val?: any,
    opt_obj?: any
): any;
declare namespace reduceFieldDefs {
    export { Field };
}
type Field = import('./Field');
