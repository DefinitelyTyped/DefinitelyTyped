export = DBCache;
/**
 * Representa o cache local.
 * @constructor
 * @extends IdoDB
 */
declare function DBCache(): void;
declare class DBCache {
    /**
     * DataSet com a configuração das tabelas do sistema.
     * @type {DataSet}
     * @private
     */
    private systemTables_;
    private readTableSchemaField_;
    /**
     * Obtém o nome da base de dados da qual este objeto faz cache.
     * @type {string}
     */
    dbName: string;
    /**
     * Obtém o endereço da base de dados da qual este objeto faz cache
     * @type {string}
     */
    host: string;
    /**
     * Obtém o tipo da base de dados da qual este objeto faz cache
     * @type {string}
     */
    dbType: string;
    /**
     * Obtém a data local correspondente a data do banco de dados. Este valor ficará
     * em cache e será calculado com base na data atual e da última vez que este valor
     * foi obtido do banco de dados
     * @type {Date}
     */
    dbDate: Date;
    /**
     * Obtém a data UTC do banco de dados. Este valor ficará em cache e será calculado
     * com base na data atual e da última vez que este valor foi obtido do banco de
     * dados. Caso haja alteração do horário local este valor deve levar até 10 minutos
     * para ser atualizado.
     * @type {Date}
     */
    dbUTCDate: Date;
    /**
     * Indica se o cache local foi inicializado com sucesso, ou seja, se todas
     * as tabelas foram carregadas em cache.
     * @type {boolean}
     */
    initializedSuccessfully: boolean;
    /**
     * Informa a última versão que foi sincronizada ao cache local.
     * @type {number}
     */
    lastSynchronizedVersion: number;
    /**
     * Algoritmo de compressão utilizado nos campos do tipo "memo". Valores possíveis: `'zstd'` e
     * `'zlib'`.
     * @type {string}
     */
    lobCompressionAlgorithm: string;
    /**
     * Cria um DataSet da tabela informada. As alterações neste DataSet irão alterar
     * o dbCacheEngine e todas as outras tabelas abertas
     * @param {string} tableName Nome da tabela a ser obtida
     * @return {DataSet}
     */
    getTable(tableName: string): DataSet;
    /**
     * Copia a definição de campos da tabela informada para o DataSet. Este método
     * recebe um DataSet ao invés de retornar um, pois o DataSet é temporário e deve
     * ser criado por um IdoDatabase temporário, provavelmente pela classe TiDatabase
     * @param {string} tableName Nome da tabela que terá a definição de campos copiada
     * @param {DataSet} ds DataSet que receberá a definição de campos.
     */
    copyTableStructure(tableName: string, ds: DataSet): void;
    /**
     * Pega o valor do campo de um registro.
     * @param {number} key Chave do registro
     * @param {string} fieldName Nome do campo que será retornado
     * @param {boolean} refreshIfNotFound
     * @return {number|boolean|string|null} Valor do campo.
     */
    getFieldValue(
        key: number,
        fieldName: string,
        refreshIfNotFound: boolean
    ): number | boolean | string | null;
    /**
     * Localiza uma chave no cache local. Se a chave existir, será retornado o nome
     * da tabela e o rowId do registro em um objeto. Tais propriedades são acessíveis através dos
     * campos:<br>
     * - tableName<br>
     * - rowId.
     * @example
     * var object = dbCache.findKey(-1899931725) // retorna object
     * object.tableName  //retorna ivfs
     * object.rowId      // retorna o bookmark
     * @param {number} key Chave do registro
     * @return {{tableName: string, rowId: number}}} Objeto contendo informações sobre a chave
     * encontrada ou null caso a chave não faça parte do cache local.
     */
    findKey(key: number): {
        tableName: string;
        rowId: number;
    };
    /**
     * Determina se uma tabela existe no cache local.
     * @param {string} tableName Nome da tabela
     * @return {boolean} True se a tabela existir
     */
    hasTable(tableName: string): boolean;
    /**
     * Determina se os registros da tabela informada estão no cache ou se o mesmo
     * possui apenas uma estrutura vazia da mesma.
     * @param {string} tableName Nome da tabela
     * @return {boolean} True, caso os registros da tabela estejam no cache
     */
    isCachedTable(tableName: string): boolean;
    /**
     * Obtém a chave da classe que definiu a tabela.
     * @param {string} tableName Nome da tabela
     * @return {number} Chave da classe que definiu a tabela.
     */
    getTableClass(tableName: string): number;
    /**
     * Obtém o nome da tabela definida pela classe de dados sem levar em consideração a herança de
     * classes.
     *
     * Somente será retornado um nome de tabela se a classe informada for aquela que definiu a
     * tabela pela primeira vez em uma hierarquia de classes. Utilize o método
     * {@link module:@nginstack/engine/lib/database/Classes~Classes#getTableName} para obter o nome
     * da tabela associada a uma classe de dados considerando a herança de classes.
     * @param {number|DBKey} classKey Chave da classe a ser verificada.
     * @return {string} Nome da tabela associada definida pela classe de dados.
     * @see module:@nginstack/engine/lib/database/Classes~Classes#getTableName
     */
    getTableNameDefinedByClass(classKey: number | DBKey): string;
    /**
     * Retorna a lista de nomes das tabelas do Cache Local
     * @return {Array} lista dos nomes das tabelas
     */
    getTableNames(): any[];
    /**
     * Sincroniza o cache local com o banco de dados.
     * @param {boolean} [wait=false] Se for `true` indicará que o método irá aguardar
     * a finalização do sincronismo do cache local ou o timeout para executar o
     * próximo comando.
     * @param {number} [timeout=30000] Tempo em milissegundos que o método irá esperar
     * antes de prosseguir a execução. Para um timeout infinito utilize -1.
     * @return {boolean} Retorna `true` se o cache local for sincronizado com sucesso
     * dentro do tempo indicado por `timeout` ou se o parâmetro wait` for `false`.
     * @example
     * const dbCache = require('@nginstack/engine/context/dbCache');
     * dbCache.refresh(true);
     */
    refresh(wait?: boolean, timeout?: number): boolean;
    /**
     * Indica se o DataSet informado foi gerado a partir do cache local.
     * @param {DataSet} ds O DataSet cuja origem se deseja determinar.
     * @return {boolean} Indica se a origem do DataSet é o cache local.
     */
    isFromCache(ds: DataSet): boolean;
    /**
     * Indica se uma chave está contida na tabela informada.
     * @param {string} tableName A tabela a ser verificada se contém *key*.
     * @param {number} key A chave a ser pesquisada.
     * @return {boolean} True se a tabela informada contiver a chave.
     */
    tableContainsKey(tableName: string, key: number): boolean;
    /**
     * Obtém o nome do campo utilizado para armazenar a chave dos registros na
     * tabela informada.
     * @param {string} tableName Nome da tabela.
     * @return {string} Nome do campo chave.
     */
    getKeyFieldName(tableName: string): string;
    /**
     * Obtém o nome do campo utilizado para armazenar a classe dos registros na
     * tabela informada.
     * @param {string} tableName Nome da tabela.
     * @return {string} Nome do campo classe.
     */
    getClassFieldName(tableName: string): string;
    /**
     * Obtém o nome do campo utilizado para armazenar a classe dos registros na
     * tabela informada.
     * @param {string} tableName Nome da tabela.
     * @return {string} Nome do campo classe.
     */
    getVersionFieldName(tableName: string): string;
    /**
     * Tenta obter a classe de um registro do cache local, se o registro não for
     * encontrado o retorno será nulo.
     * @param {number} key Chave do registro.
     * @return {?number} Chave da classe do registro.
     */
    tryGetClass(key: number): number | null;
    /**
     * Obtém a classe de um registro do cache local. Se a chave não for localizada
     * será gerado um erro.
     * @param {number} key Chave do registro.
     * @return {number} Chave da classe do registro.
     */
    getClass(key: number): number;
    /**
     * Devolve uma nova instância de um DataSet temporário com a estrutura da tabela informada.
     * @param {string} tableName Nome da tabela para a qual se deseja um dataset
     * montado com sua estrutura.
     * @return {DataSet} Retorna o dataset com a estrutura da tabela informada.
     */
    newTableStructure(tableName: string): DataSet;
    /**
     * Cache do método {@link #fieldExists}.
     * @type {Object<boolean>}
     * @private
     */
    private fieldExistsCache_;
    /**
     * Verifica se campo existe em uma tabela do sistema.
     * @param {string} tableName Nome da tabela onde será pesquisado o campo informado.
     * @param {string} fieldName Nome do campo que será buscado em *tableName*.
     * @return {boolean} True se o campo existir na tabela informada.
     */
    fieldExists(tableName: string, fieldName: string): boolean;
    /**
     * Verifica se o registro, determinado pela sua chave, possui um dado campo. Este
     * método só funciona para registros presentes no cache local.
     * @param {number} key Chave do registro o qual se quer testar.
     * @param {string} fieldName Nome do campo que será buscado em <em>key</em>.
     * @return {boolean} Indica se o campo existe.
     */
    recordFieldExists(key: number, fieldName: string): boolean;
}
import DataSet = require('../dataset/DataSet.js');
import DBKey = require('../dbkey/DBKey.js');
