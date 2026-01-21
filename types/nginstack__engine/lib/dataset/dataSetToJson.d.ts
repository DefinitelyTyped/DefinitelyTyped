export = dataSetToJson;
/** @typedef { import('./DataSet') } DataSet */
/**
 * Retorna os registros do DataSet como um array de objetos no formato JSON.
 *
 * Esta função cria uma string com todo o conteúdo do DataSet no formato JSON, portanto
 * ela não deve ser utilizada em DataSets com muitos registros, não sendo recomendado o seu uso
 * em DataSets com mais de mil registros.
 *
 * O DataSet será percorrido para a leitura dos registros, portanto esta função não deve ser
 * utilizada em DataSets que estejam em inserção ou edição, caso elas não possam ser efetivadas.
 * @example
 * const dataSetToJson = require('@nginstack/engine/lib/dataset/dataSetToJson.js');
 * const Classes = require('@nginstack/engine/keys/Classes');
 * const json = dataSetToJson(classes.getCachedDataSet(Classes.USERS));
 * @param {!DataSet} ds DataSet com os dados que serão formatados em JSON.
 * @param {Object} [options] Opções de conversão.
 * @param {boolean} [options.toLowerCase] Indica se os nomes dos campos serão padronizados
 * em caixa baixa (lower case).
 * @param {boolean} [options.onlyFilled] Indica se devem ser criadas propriedades para os
 * campos sem preenchimento no DataSet.
 * @return {string} Retorna os dados do DataSet em formato JSON.
 */
declare function dataSetToJson(
    ds: DataSet,
    options?: {
        toLowerCase?: boolean;
        onlyFilled?: boolean;
    }
): string;
declare namespace dataSetToJson {
    export { DataSet };
}
type DataSet = import('./DataSet');
