export = recordToJson;
/** @typedef { import('./DataSet') } DataSet */
/**
 * Retorna o registro do DataSet em formato de JSON.
 * @example
 * const recordToJson = require('@nginstack/engine/lib/dataset/recordToJson.js');
 * const Classes = require('@nginstack/engine/keys/Classes.js');
 * const users = classes.getCachedDataSet(Classes.USERS);
 * if (users.findKey(session.userKey)) {
 *   const currentUserJson = recordToJson(users);
 * }
 * @param {!DataSet} dataSet DataSet posicionado no registro que se deseja converter.
 * @param {Object} [options] Opções de conversão.
 * @param {boolean} [options.toLowerCase] Indica se os nomes dos campos serão padronizados
 * em caixa baixa (lower case).
 * @param {boolean} [options.onlyFilled] Indica se devem ser criadas propriedades para os
 * campos sem preenchimento no DataSet.
 * @return {string} Retorna o dado em formato JSON.
 */
declare function recordToJson(
    dataSet: DataSet,
    options?: {
        toLowerCase?: boolean;
        onlyFilled?: boolean;
    }
): string;
declare namespace recordToJson {
    export { DataSet };
}
type DataSet = import('./DataSet');
