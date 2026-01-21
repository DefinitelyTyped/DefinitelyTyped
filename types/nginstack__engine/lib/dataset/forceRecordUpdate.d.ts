export = forceRecordUpdate;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Tenta atualizar um registro de um DataSet e repete a operação até o tempo informado caso seja
 * detectado um conflito de alteração com outro usuário.
 * @param {function():DataSet} queryFunc Função que obtém o dataset a ser atualizado. Essa função
 * deve retornar o registro atualizado, preferencialmente da base de dados.
 * @param {function(DataSet)} updateFunc Função responsável por atualizar e gravar o registro
 * na base de dados.
 * @param {Object} [opt_options] Opções.
 * @param {*} [opt_options.context] Valor do *this* durante a execução das funções informadas.
 * @param {number} [opt_options.timeout] Tempo em milissegundos que a operação deve ser repetida.
 * @return {!DataSet} DataSet criado por *queryFunc* e atualizado com sucesso pela *updateFunc*.
 */
declare function forceRecordUpdate(
    queryFunc: () => DataSet,
    updateFunc: (arg0: DataSet) => any,
    opt_options?: {
        context?: any;
        timeout?: number;
    }
): DataSet;
declare namespace forceRecordUpdate {
    export { DataSet };
}
type DataSet = import('./DataSet');
