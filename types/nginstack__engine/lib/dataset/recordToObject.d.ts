export = recordToObject;
/** @module @nginstack/engine/lib/dataset/recordToObject */
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Retorna o registro do DataSet em formato de objeto literal, onde as colunas
 * serão as propriedades.
 * @example
 * var recordToObject = require('@nginstack/engine/lib/dataset/recordToObject');
 * var Classes = require('@nginstack/engine/keys/Classes');
 * var users = classes.getCachedDataSet(Classes.USERS);
 * if (users.findKey(session.userKey)) {
 *   var currentUserObj = recordToObject(users);
 * }
 * @param {!DataSet} dataSet DataSet posicionado no registro que se deseja
 * converter.
 * @param {Object} [opt_options] Opções de conversão.
 * @param {boolean} [opt_options.toLowerCase] Indica se a propriedade do objeto
 * criado deverá ser em caixa baixa (lower case).
 * @param {boolean} [opt_options.onlyFilled] Indica se devem ser criadas as
 * propriedades para os campos sem preenchimento no DataSet.
 * @return {Object} Retorna o objeto onde as propriedades são os campos do
 * DataSet
 */
declare function recordToObject(
    dataSet: DataSet,
    opt_options?: {
        toLowerCase?: boolean;
        onlyFilled?: boolean;
    }
): any;
declare namespace recordToObject {
    export { DataSet };
}
type DataSet = import('./DataSet');
