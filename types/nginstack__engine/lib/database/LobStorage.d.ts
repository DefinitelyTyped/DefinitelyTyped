export = LobStorage;
/**
 * Classe que possibilita armazenar grandes documentos que não demandam a hierarquia e atributos
 * de um sistema de arquivos, como a VFS.
 *
 * Esta classe não cria registros no cache local, ao contrário da VFS, sendo
 * mais apropriada para armazenar grandes volumes de dados.
 *
 * Outra vantagem da LobStorage sobre a VirtualFS é que os dados são comprimidos antes de
 * serem gravados, reduzindo o espaço necessário para armazenagem.
 * @param {number|DBKey} classKey Chave da classe filha de "/Dados/Sistema/Large Objects" onde
 * serão gravados os dados.
 * @constructor
 */
declare function LobStorage(classKey: number | DBKey): void;
declare class LobStorage {
    /**
     * Classe que possibilita armazenar grandes documentos que não demandam a hierarquia e atributos
     * de um sistema de arquivos, como a VFS.
     *
     * Esta classe não cria registros no cache local, ao contrário da VFS, sendo
     * mais apropriada para armazenar grandes volumes de dados.
     *
     * Outra vantagem da LobStorage sobre a VirtualFS é que os dados são comprimidos antes de
     * serem gravados, reduzindo o espaço necessário para armazenagem.
     * @param {number|DBKey} classKey Chave da classe filha de "/Dados/Sistema/Large Objects" onde
     * serão gravados os dados.
     * @constructor
     */
    constructor(classKey: number | DBKey);
    classKey: number;
    /** @private */
    private storageProviderKey_;
    /**
     * Objeto que representa um serviço de armazenamento de arquivos na nuvem.
     *
     * Se a classe informada na propriedade `classKey` estiver configurada para armazenar os arquivos em
     * um serviço externo, essa propriedade será preenchida com uma instância da classe
     * [`ObjectStorage`](https://nginstack.com/api/js/module-@nginstack_engine_lib_cloud_ObjectStorage-ObjectStorage.html).
     * @type {ObjectStorage}
     * @see #classKey
     * @private
     */
    private storageProvider_;
    private getStorageProvider;
    /**
     * DataSet no qual serão armazenadas as alterações de inserção e atualização nos arquivos da classe
     * Large Objects.
     * @type {DataSet}
     * @private
     */
    private batchChanges_;
    /**
     * DataSet no qual serão armazenadas as alterações de inserção e atualização nos arquivos da classe
     * Large Objects.
     * @type {DataSet}
     * @private
     */
    private transactionChanges_;
    /**
     * Array no qual serão armazenadas as operações de inserção, atualização e remoção dos arquivos
     * armazenados no serviço de armazenamento na nuvem.
     * @type {StorageChange[]|null}
     * @private
     */
    private storageChanges_;
    /**
     * Indica se as alterações realizadas por esta classe irão gerar registros de log transactional
     * na tabela iLog.
     *
     * **Atenção:** a desativação do log transacional não permite o desfazimento das alterações
     * realizadas e prejudica a auditoria do sistema em inspeções de segurança. Modificações
     * sem geração de log também não são aplicadas nas bases de dados destino dos processos de
     * replicação de dados. Essas modificações também podem ser perdidas em cenários de migração de
     * banco de dados onde uma base de dados é sincronizada a partir do log transacional.
     * Por esses motivos, esta propriedade deve ser utilizada apenas em situações específicas, onde
     * os lobs gerados são temporários e serão descartados após um curto tempo de vida.
     * @type {boolean}
     */
    logChanges: boolean;
    /**
     * Após a chamada desse método, todas as modificações solicitadas aos métodos `addLob`,
     * `updateLob` e `setLobExtraAttributes` serão armazenadas em DataSet que será retornado
     * pelo método `endBatch`.
     * @see #endBatch
     * @deprecated
     */
    beginBatch(): void;
    /**
     * Retorna um dataset com as modificações realizadas pelos métodos `addLob`,
     * `updateLob` e `setLobExtraAttributes` durante a operação `batch`.
     *
     * O método `endBatch` não efetiva as alterações na base de dados, sendo responsabilidade de
     * quem chama este método a gravação dessas alterações. Como a gravação não é controlada por essa
     * classe, as operações pendentes de aplicação no storage são todas efetivadas antes de retornarmos
     * o dataset. Se por qualquer motivo a gravação não for realizada, o método `rollbackBatch` deve ser
     * chamado para excluir os registros enviados para o storage. Se isso não for feito os arquivos
     * enviados para o storage ficarão órfãos.
     * @return {DataSet} DataSet com os registros inseridos e atualizados.
     * @see #beginBatch
     * @deprecated
     */
    endBatch(): DataSet;
    /**
     * Ao utilizar a LobStorage no modo "batch", a gravação do DataSet dos arquivos é feita por quem
     * utiliza a classe. Dessa forma, se por algum motivo a gravação não puder ser feita, este método
     * deve ser chamado para reverter a gravação dos arquivos no serviço de armazenamento.
     * @deprecated
     */
    rollbackBatch(): void;
    /**
     * Após a chamada desse método, todas as modificações solicitadas aos métodos `addLob`, `updateLob`
     * e `setLobExtraAttributes` serão armazenadas internamente e serão gravados no banco de
     * dados apenas na chamada ao método `commitTransaction`.
     */
    startTransaction(): void;
    /**
     * Efetiva a gravação das alterações realizadas pelos métodos `addLob`, `updateLob` e `deleteLob`.
     *
     * @return {number} Número da versão gerada pela gravação das alterações.
     */
    commitTransaction(): number;
    private beforeApplyUpdates_;
    private afterApplyUpdates_;
    /**
     * Utilizado para desfazer as alterações no serviço de armazenamento realizadas na última transação
     * iniciada pelo método `startTransaction`.
     */
    rollbackTransaction(): void;
    private appendStorageChange_;
    private rollbackStorageChanges_;
    private compress_;
    private encode_;
    private tryCompress_;
    private prepareContent_;
    private getDataSetForUpdate_;
    private getDataSet_;
    private getContentSize_;
    /**
     * Adiciona um documento no banco de dados.
     *
     * Para fins de compatibilidade, este método também aceita a seguinte assinatura:
     *
     * `addLob(fileName, content, mimeType?, key?);`
     *
     * @example
     * const LobStorage = require('@nginstack/engine/lib/database/LobStorage');
     * const fileName = 'myDoc.xml';
     * const myLobClass = -1898144063; // Large Objects
     * const file = new File(fileName);
     * const lobStorage = new LobStorage(myLobClass)
     * const key = lobStorage.addLob(fileName, file.read());
     * ds.setField('iLob', key);
     * @param {string} fileName Nome do arquivo. A extensão do arquivo será
     * utilizada para identificar o tipo do arquivo caso o parâmetro mimeType não seja
     * informado.
     * @param {string|Uint8Array|ArrayBuffer} content Conteúdo do documento que será gravado.
     * @param {Object} [options] Opções de inserção do documento.
     * @param {number|DBKey} [options.mimeType] Chave filha da classe "/Dados/Sistema/Tabelas auxiliares/
     * Tipos de arquivos" que determinará o tipo do documento armazenado. O tipo do arquivo será
     * utilizado para determinar os algoritmos de compressão e codificação adequados.
     * @param {number} [options.key] Possibilita informar a chave do lob a ser criado. Quando
     * não for informado, será gerada uma nova chave.
     * @param {Object} [options.extraAttributes] Objeto que contém a lista dos atributos e valores a serem
     * configurados.
     * @return {number} Chave que identifica o documento armazenado.
     */
    addLob(
        fileName: string,
        content: string | Uint8Array | ArrayBuffer,
        options?: {
            mimeType?: number | DBKey;
            key?: number;
            extraAttributes?: any;
        },
        ...args: any[]
    ): number;
    /**
     * Atualiza um documento existente no banco de dados.
     *
     * Para fins de compatibilidade, este método também aceita a seguinte assinatura:
     *
     * * `updateLob(key, content, fileName?, mimeType?);`
     * @example
     * const LobStorage = require('@nginstack/engine/lib/database/LobStorage');
     * const fileName = 'myDoc.xml';
     * const myLobClass = -1898144063; // Large Objects
     * const file = new File(fileName);
     * const lobStorage = new LobStorage(myLobClass);
     * const key = lobStorage.addLob(fileName, file.read());
     * ds.setField('iLob', key);
     * // ....
     * const file = new File(fileName);
     * const lobStorage = new LobStorage(myLobClass);
     * lobStorage.updateLob(ds.ilob, file.read());
     * @param {number} key Chave do lob. Esta chave é gerada pelo método addLob().
     * @param {string|Uint8Array|ArrayBuffer} content Conteúdo do documento que será gravado.
     * @param {Object} [options] Opções de atualização do documento.
     * @param {string} [options.fileName] Nome do arquivo. Caso não seja informado, será mantido
     * o nome atual. A extensão do arquivo será utilizada para identificar o tipo do arquivo
     * caso o parâmetro mimeType não seja informado.
     * @param {number|DBKey} [options.mimeType] Chave filha da classe "/Dados/Sistema/Tabelas auxiliares/
     * Tipos de arquivos" que determinará o tipo do documento armazenado. O tipo do arquivo será
     * utilizado para determinar os algoritmos de compressão e codificação adequados.
     * @param {Object} [options.extraAttributes] Objeto que contém a lista dos atributos e valores a serem
     * configurados.
     */
    updateLob(
        key: number,
        content: string | Uint8Array | ArrayBuffer,
        options?: {
            fileName?: string;
            mimeType?: number | DBKey;
            extraAttributes?: any;
        },
        ...args: any[]
    ): void;
    /**
     * Tenta ler um documento da Lob Storage previamente armazenado pelo método addLob()
     * e retorna null caso ele não exista.
     * @example
     * const LobStorage = require('@nginstack/engine/lib/database/LobStorage');
     * const lobStorage = new LobStorage(-1898144063); // Large Objects
     * const lob = lobStorage.tryGetLob(lobKey);
     * if (lob) {
     *   const file = new File(lob.name);
     *   file.write(lob.content);
     * } else {
     *   throw new Error('O arquivo foi excluído por um outro usuário.');
     * }
     * @param {number} key Chave do documento gerado pelo método addLob().
     * @return {LargeObject} Instância da classe {@link module:@nginstack/engine/lib/database/LargeObject}
     * contendo o nome, conteúdo e mimeType do lob ou null caso não exista um lob com a chave
     * informada.
     */
    tryGetLob(key: number): LargeObject;
    /**
     * Lê um documento do banco de dados previamente armazenado pelo método addLob().
     * Irá gerar um erro caso a chave informada não exista no banco de dados.
     * @example
     * const LobStorage = require('@nginstack/engine/lib/database/LobStorage');
     * const lobStorage = new LobStorage(-1898144063) // Large Objects
     * const lob = lobStorage.getLob(lobKey);
     * const file = new File(lob.name);
     * file.write(lob.content);
     * file.close();
     * @param {number} key Chave do documento gerado pelo método addLob().
     * @return {LargeObject} Instância da classe {@link module:@nginstack/engine/lib/database/LargeObject}
     * contendo o nome, conteúdo e mimeType do lob.
     */
    getLob(key: number): LargeObject;
    /**
     * Apaga um documento da Lob Storage previamente armazenado pelo método addLob().
     * @example
     * const LobStorage = require('@nginstack/engine/lib/database/LobStorage');
     * const fileName = 'myDoc.xml';
     * const myLobClass = -1898144063; // Large Objects
     * const file = new File(fileName);
     * const lobStorage = new LobStorage(myLobClass);
     * const key = lobStorage.addLob(fileName, file.read());
     * ds.setField('iLob', key);
     * // ....
     * const lobStorage = new LobStorage(myLobClass);
     * lobStorage.deleteLob(ds.dbkey('iLob'));
     * @param {number} key Chave do documento gerado pelo método addLob().
     * @return {boolean} Retornará true se o documento existir e tenha sido apagado.
     */
    deleteLob(key: number): boolean;
    /**
     * Preenche os atributos extras em um documento do banco de dados.
     * @example
     * const LobStorage = require('@nginstack/engine/lib/database/LobStorage');
     * const myLobClass = -1898144063; // Large Objects
     * const lobStorage = new LobStorage(myLobClass);
     * lobStorage.setLobExtraAttributes(123456, {origem: "SONY DSC 40", autor: "User Name"});
     * @param {number} key Chave do documento gerado pelo método addLob().
     * @param {Object} extraAttributes Objeto que contém a lista dos atributos e valores a serem
     * configurados.
     */
    setLobExtraAttributes(key: number, extraAttributes: any): void;
    /**
     * Obtém os atributos extras de um documento do banco de dados.
     * @example
     * const LobStorage = require('@nginstack/engine/lib/database/LobStorage');
     * const myLobClass = -1898144063; // Large Objects
     * const lobStorage = new LobStorage(myLobClass);
     * const attr = lobStorage.getLobExtraAttributes(123456);
     * attr.origem; // SONY DSC 40
     * @param {number} key Chave do documento gerado pelo método addLob().
     * @return {Object} objeto com o atributos extras armazenados como propriedades.
     */
    getLobExtraAttributes(key: number): any;
    private getStorageProviderFromKey_;
}
declare namespace LobStorage {
    export { Object, LargeObject };
}
import DBKey = require('../dbkey/DBKey.js');
import DataSet = require('../dataset/DataSet.js');
/**
 * ContentInfo
 */
interface Object {
    /**
     * Conteúdo comprimido e codificado.
     */
    content: string;
    /**
     * Chave do algoritmo de compressão utilizado.
     */
    compression: number;
    /**
     * Chave do algoritmo de codificação utilizado.
     */
    encoding: number;
}
type LargeObject = import('./LargeObject');
