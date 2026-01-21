export = pruneTree;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Para DataSets que possuem uma estrutura de árvore este método remove nós
 * baseado numa dada função, preservando os nós que são essenciais para a
 * integridade da árvore. Este método tentará preservar o bookmark do DataSet,
 * caso ele tenha sido retirado, o cursor irá para o primeiro registro.
 * @example
 *   Digamos que temos uma árvore com essa estrutura:
 *   setor1
 *     time1
 *       joão
 *       joaquim
 *     time2
 *       fulano
 *       sicrano
 *   Se o "time1" não atender à função mas o "joão" atender significa que o nó
 *   "time1" precisará ser removido, mas se isso acontecer o nó "joão" ficará
 *   sem mãe fazendo com que a árvore perca sua consistência. Então este método
 *   preservaria o nó "time1".
 * @param {!DataSet} ds DataSet que será filtrado.
 * @param {string} idField Campo que contém o identificador do registro.
 * @param {string} parentField Campo que contém o identificador do pai do
 * registro.
 * @param {function(DataSet): boolean} filterFunc Função que realizará o teste
 * para checar se o registro deve ser removido.
 */
declare function pruneTree(
    ds: DataSet,
    idField: string,
    parentField: string,
    filterFunc: (arg0: DataSet) => boolean
): void;
declare namespace pruneTree {
    export { DataSet };
}
type DataSet = import('./DataSet');
