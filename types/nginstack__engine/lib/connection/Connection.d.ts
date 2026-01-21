export = Connection;
/**
 * @typedef {import('../database/Database')} Database
 * @private
 */
/**
 * @typedef {import('../classdef/ModelDef')} ModelDef
 * @private
 */
/**
 * @typedef {import('../email/Email')} Email
 * @private
 */
/**
 * @typedef {import('../scheduler/Task')} Task
 * @private
 */
/**
 * Classe que permite estabelecer uma comunicação com um Engine servidor.
 *
 * Opcionalmente, este construtor permite que seja informado o nome de uma base de dados como
 * segundo parâmetro. Essa opção é mantida apenas para fins de compatibilidade e, quando informada,
 * permite que sejam utilizados métodos descontinuados associados à base de dados.
 *
 * **Importante:** alguns métodos descontinuados desta classe permitem acesso ao cache local. Esses
 * métodos estão disponíveis apenas na instância publicada por meio do módulo
 * {@link module:@nginstack/engine/context/connection} e da variável global `connection`.
 *
 * @param {string|Database} host Endereço IP ou nome do computador remoto. Também poderá
 * ser informada uma instância de {@link Database}. Essa opção é útil para interagir
 * com APIs que ainda utilizam a classe {@link Connection} para acessar a base de dados.
 * @param {string} [dbName] Nome da base de dados que será conectada. Caso não seja
 * informado, os método relacionados à base de dados não estarão disponíveis. Este parâmetro
 * é mantido apenas para fins de compatibilidade. Para acessar informações relacionadas à
 * base de dados, utilize a classe {@link Database}.
 * @constructor
 */
declare function Connection(host: string | Database, dbName?: string): void;
declare class Connection {
    /**
     * @typedef {import('../database/Database')} Database
     * @private
     */
    /**
     * @typedef {import('../classdef/ModelDef')} ModelDef
     * @private
     */
    /**
     * @typedef {import('../email/Email')} Email
     * @private
     */
    /**
     * @typedef {import('../scheduler/Task')} Task
     * @private
     */
    /**
     * Classe que permite estabelecer uma comunicação com um Engine servidor.
     *
     * Opcionalmente, este construtor permite que seja informado o nome de uma base de dados como
     * segundo parâmetro. Essa opção é mantida apenas para fins de compatibilidade e, quando informada,
     * permite que sejam utilizados métodos descontinuados associados à base de dados.
     *
     * **Importante:** alguns métodos descontinuados desta classe permitem acesso ao cache local. Esses
     * métodos estão disponíveis apenas na instância publicada por meio do módulo
     * {@link module:@nginstack/engine/context/connection} e da variável global `connection`.
     *
     * @param {string|Database} host Endereço IP ou nome do computador remoto. Também poderá
     * ser informada uma instância de {@link Database}. Essa opção é útil para interagir
     * com APIs que ainda utilizam a classe {@link Connection} para acessar a base de dados.
     * @param {string} [dbName] Nome da base de dados que será conectada. Caso não seja
     * informado, os método relacionados à base de dados não estarão disponíveis. Este parâmetro
     * é mantido apenas para fins de compatibilidade. Para acessar informações relacionadas à
     * base de dados, utilize a classe {@link Database}.
     * @constructor
     */
    constructor(host: string | Database, dbName?: string);
    /**
     * DataSet com as definições das tabelas utilizado pelo método {@link #isCachedData}.
     * @type {DataSet}
     * @private
     */
    private _tables;
    /**
     * Cache do gerenciador de definições de classe.
     * @type {ClassDefManager}
     * @private
     */
    private classDefManager_;
    /**
     * Indica para o banco de dados qual é o tipo de carga da aplicação que está requisitando os
     * dados. Valores possíveis:
     *
     *  - **'olap'** (Online analytical processing): indicado para relatórios ou processos
     * de consulta. Normalmente, interagem com uma massa de dados média ou elevada. Prioridade
     * de atendimento média.
     * - **'oltp'** (Online transaction processing): indicado para processos que realizam
     * a leitura ou gravação de poucos registros. Prioridade de atendimento alta.
     * - **'dw'** (Data Warehouse): indicado para processos que consolidam grandes massas
     * de dados para pesquisas posteriores. Prioridade de atendimento baixa.
     *
     * O valor padrão desta propriedade é "olap" e os processos que necessitem alterar
     * a conexão padrão (variável global `connection`) devem ter o cuidado de retornar o
     * valor anterior após o uso, evitando assim afetar outros códigos que utilizem a
     * a mesma instância global.
     *
     * No banco de dados Oracle, este parâmetro é utilizado para definir o tamanho do buffer para
     * a leitura de registros em bloco, sendo alocada mais memória para as cargas do tipo "olap" e
     * "dw". Seu valor também estará disponível no campo "ACTION" da view "v$session", possibilitando
     * ao DBA otimizar e priorizar o atendimento de acordo com o tipo informado.
     * @type {string}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#workloadType}.
     */
    workloadType: string;
    /**
     * Tipo de Banco de Dados configurado na Conexão.
     * @type {string}
     * @see #dbName
     * @example
     * var connection = require('@nginstack/engine/context/connection');
     * if (connection.dbType === 'ORACLE') {
     *  do();
     * }
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#dbType}.
     */
    dbType: string;
    /**
     * Nome do Banco de Dados configurado na Conexão.
     * @type {string}
     * @see #dbType
     * @example
     * var connection = require('@nginstack/engine/context/connection');
     * if (connection.dbName === "DB_NAME") {
     *  throw new Error("Usuário possui permissão para consultar os Dados na Produção")
     * }
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#dbName}.
     */
    dbName: string;
    /**
     * IP ou Nome do Host para o servidor de banco de dados da Conexão.
     * @type {string}
     * @see #dbServerPort
     * @see #dbName
     * @see #dbType
     * @see #isOnline
     * @example
     * var connection = require('@nginstack/engine/context/connection');
     * if (! connection.isOnline ) {
     *  throw new Error("Não foi possível Conectar ao Host \"" + connection.dbServerHost +
     *      ":" + connection.dbServerPort )
     * }
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#serverHost}.
     */
    dbServerHost: string;
    /**
     * Porta do Host para o Servidor de Banco de Dados da Conexão.
     * @type {string}
     * @see #dbServerHost
     * @see #dbName
     * @see #dbType
     * @see #isOnline
     * @example
     * var connection = require('@nginstack/engine/context/connection');
     * if (!connection.isOnline) {
     *  throw new Error("Não foi possível Conectar ao Host \"" + connection.dbServerHost +
     *      ":" + connection.dbServerPort )
     * }
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#serverHost}.
     */
    dbServerPort: string;
    /**
     * Informa o número de chaves ainda restantes no cache local.
     * @type {number}
     */
    remainingKeys: number;
    /**
     * Esta é uma propriedade que, se definida, será utilizada pelo applyUpdates e pelo executeDDL para
     * preencher o campo iTag da iLog. Com isso, é possível agrupar os registros na iLog por tag,
     * facilitando o desfazimento.
     *
     * Recomenda-se que a string utilizada nesta propriedade seja um identificador único. Para isto,
     * utilize a função `createGUID(removeFormatChars)`.
     * @type {string}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#trackingId}.
     */
    trackingId: string;
    /**
     * @type {number}
     * @deprecated
     */
    remainingHighKeys: number;
    /**
     * Data e hora local do servidor do banco de dados.
     *
     * O valor será obtido do cache local caso a conexão seja com banco de dados principal. Em
     * conexões para outras bases de dados, o valor será obtido por meio de uma requisição
     * ao servidor remoto.
     * @type {Date}
     * @example
     * const connection = require('@nginstack/engine/context/connection');
     * const toFormattedString = require('@nginstack/engine/lib/string/toFormattedString')
     * const dt = connection.serverDate;
     * Logger.getLogger('package.MyClass').info("Registro Gravado no Servidor em " +
     *   toFormattedString(dt, 'dd/mm/yyyy') + " às " + toFormattedString(dt, 'hh:mm:ss'));
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/DBCache~DBCache#dbDate}.
     */
    serverDate: Date;
    /**
     * Versão do Engine acessado por esta conexão.
     *
     * **Importante:** o valor desta propriedade é obtido por meio de uma requisição ao servidor para
     * obter a versão do executável Engine. Para obter a versão do Engine corrente, utilize
     * `engine.version`.
     * @example
     * const connection = require('@nginstack/engine/context/connection.js');
     * log.info('Server version: ' + connection.serverVersion);
     * @type {string}
     */
    serverVersion: string;
    /**
     * Informa se a conexão está ativa (online) com o Engine destino desta conexão. O estado de online
     * é atualizado apenas quando há uma tentativa de conexão, portanto mesmo em uma conexão ativa não
     * há garantia que a próxima requisição será bem sucedida.
     *
     * **Importante**: a conexão com o Engine servidor pode estar ativa, mas o banco de dados pode
     * estar indisponível. Essa propriedade se refere apenas à conectividade do Engine.
     * @type {boolean}
     */
    isOnline: boolean;
    /**
     * Informa o timeout de leitura da conexão, em milissegundos. Informe o valor
     * zero para utilizar o timeout padrão.
     * @type {number}
     * @example
     * var connection = require('@nginstack/engine/context/connection');
     * connection.readTimeout = 15000
     * try {
     *  var ds = connection.getDataSet( 'Select * From iVFS Where iKey = 1234')
     * } finally {
     *  connection.readTimeout = 0
     * }
     */
    readTimeout: number;
    /**
     * Informa o timeout de escrita da conexão em milissegundos. Informe o valor
     * zero para utilizar o timeout padrão.
     * @type {number}
     * @example
     * var connection = require('@nginstack/engine/context/connection');
     * connection.writeTimeout = 1000;
     * try {
     *  connection.executeScript(1234, 'parameter', 'teste');
     * } finally {
     *  connection.writeTimeout = 0;
     * }
     */
    writeTimeout: number;
    /**
     * Informação enviada ao servidor para que o mesmo possa identificar nas
     * estatísticas qual processo originou a requisição. Ela é automaticamente
     * preenchida pelo sistema e normalmente não deve ser utilizada pelo
     * desenvolvedor.
     * @type {string}
     * @example
     * const Connection = require('@nginstack/engine/lib/connection/Connection');
     *
     * const conn = new Connection(host, dbName);
     * conn.referrer = 'Processo de sincronismo de dados';
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#referrer}.
     */
    referrer: string;
    /**
     * Informa se a comunicação com o banco de dados está habilitada.
     * @type {boolean}
     */
    enabled: boolean;
    /**
     * Chave do usuário logado na conexão. Retorna -1 caso não exista usuário logado.
     * @type {number}
     * @see #userName
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#userKey}.
     */
    userKey: number;
    /**
     * Id que identifica de forma única o Engine remoto conectado.
     *
     * Ao acessar esta propriedade, será realizada uma requisição para o Engine servidor para obter o
     * seu id.
     * @type {string}
     * @see module:@nginstack/engine/lib/engine/Engine~Engine#instanceId
     */
    remoteInstanceId: string;
    /**
     * Nome do usuário logado na sessão.
     * @type {number}
     * @see #userKey
     * @see Session#userKey
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#userName}.
     */
    userName: number;
    /**
     * Protocolo utilizado na comunicação com o Engine servidor. Valores possíveis: 'http:' e 'https:'.
     * @type {string}
     */
    protocol: string;
    /**
     * Realiza o login na conexão, permitindo que o usuário tenha acesso às
     * informações do banco de dados. O método Session.login() realiza automaticamente
     * o login da conexão default (connection), portanto, este método somente deve ser
     * utilizado em conexões criadas manualmente.
     * @param {string} userName
     * @param {string} password
     * @return {boolean}
     * @see #logout
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#login}.
     */
    login(userName: string, password: string): boolean;
    /**
     * Realiza o logout da conexão, impedindo que a mesma possa acessar informações do banco de dados.
     * O método Session.logout() realiza automaticamente o logout da conexão
     * default (connection), portanto, este método somente deve ser utilizado em
     * conexões criadas manualmente.
     * @see #login
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#logout}.
     */
    logout(): void;
    /**
     * Executa uma expressão SQL no banco de dados associado ao Connection. Utilize o método
     * Connection.getDataSet() caso a expressão SQL retorne dados.
     * @param {string|Array.<string>} sqlExpression Expressão ou array de
     * expressões SQL que deverão ser executadas.
     * @see #getDataSet
     * @see DataSet
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#executeSQL}.
     */
    executeSql(sqlExpression: string | string[]): void;
    /**
     * Obtém um ou vários DataSets a partir do resultado de uma ou várias expressão
     * SQL a serem executadas no banco de dados associado ao Connection.
     * Será retornado um DataSet caso seja informada uma string ou um array de
     * DataSets caso seja informado um array de strings. Utilize o método
     * Connection.executeSql() caso a expressão SQL não retorne dados.
     * Apenas expressões que possam retornar dados podem ser executadas neste método.
     * @param {string|Array.<string>} sqlOrArrayOfSql Expressão ou array de
     * expressões SQL que deverão ser executadas.
     * @param {Object} [options] Opções da consulta.
     * @param {number} [options.queryCacheLifeTime] Determina o tempo máximo (em segundos) que o
     * DataSet retornado é mantido em cache, e retornado em consultas idênticas
     * @return {DataSet|Array<DataSet>}
     * @see #executeSql
     * @see DataSet
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#query}.
     */
    getDataSet(
        sqlOrArrayOfSql: string | string[],
        options?: {
            queryCacheLifeTime?: number;
        }
    ): DataSet | DataSet[];
    /**
     * Clona uma tabela do cache local.
     * Caso seja usado o método "applyUpdates" em num DataSet proveniente do cache local, todas as
     * alterações serão refletidas na tabela a ele associada.
     * @param {string} tableName Nome da tabela do cache local a ser clonada.
     * @return {DataSet}
     * @see #cloneLocalCacheByClass
     * @see DataSet
     * @see DataSet#logChanges
     * @see DataSet#tableName
     * @see DataSet#applyUpdates
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/DBCache~DBCache#getTable}.
     */
    cloneLocalCache(tableName: string): DataSet;
    /**
     * Copia a estrutura de uma tabela do cache local. Todas as definições de campos, índices, etc.
     * Caso seja usado o método "applyUpdates" em num dataset proveniente do cache local, todas as
     * alterações serão refletidas na tabela a ele associada. Bastando para isso
     * que ela possua os campos CHAVE, CLASSE e VERSÃO.
     * @param {string} tableName
     * @see DataSet
     * @see #cloneLocalCacheByClass
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/DBCache~DBCache#newTableStructure}.
     */
    copyStructureLocalCache(tableName: string): void;
    /**
     * Método utilizado para obter as permissões de um usuário em uma determinada classe ou
     * Script da Virtual File System.
     * @param {number} classKeyOrVfsKey Chave ou nome da classe da qual deseja-se saber se o
     * usuário tem permissão.
     * @param {string} permissionFieldName Nome do campo da tabela iPermission que define
     * a permissão a ser obtida.
     * @param {?number} userKey Chave do usuário do qual se deseja descobrir a permissão. Se não
     * for informado, será considerado o usuário logado (session.userKey).
     * @param {?string} getMode Determina como a permissão deve ser obtida. Os valores
     * possíveis são:<br>
     * <b>"withoutInheritance"</b>: Obtém a permissão para a classe informada sem levar
     * em conta as permissões definidas nas classes mães. Este parâmetro não é adequado para
     * utilização com campos do tipo "string" que podem ser multivalorados, recomendamos o uso
     * do parâmetro "distinct".<br>
     * <b>"first"</b>: Obtém a primeira permissão definida para a classe ou uma de suas
     * mães, levando em conta a ordem da classe informada. A ordem considerada no sentido
     * da classe atual até a classe root.<br> Neste modo não há herança se a chave
     * informada for um script da iVFS como, por exemplo, um processo.<br>
     * <b>"max"</b>: Obtém o maior valor informado para a classe ou para uma de suas mães.
     * Neste modo não há herança se a chave informada for um script da iVFS
     * como, por exemplo, um processo.<br>
     * <b>"min"</b>: Obtém o menor valor informado para a classe ou para uma de suas mães.
     * Neste modo não há herança se a chave informada for um script da iVFS
     * como, por exemplo, um processo.<br>
     * <b>"distinct"</b>: Obtém todos os valores distintos informados para a classe ou para
     * uma de suas mães. Se a permissão informada para uma classe possuir os
     * separadores ";" ou ",", a mesma será dividida e cada elemento será considerado um
     * valor distinto.  Neste modo não há herança se a chave informada for um script da iVFS
     * como, por exemplo, um processo.<br><br>
     * Se getMode não for informado, ele será considerado como 'withoutInheritance'.
     * @param {?string} extraFilter Filtro extra que traz a possibilidade de filtrar a permissão
     * por um outro campo da tabela de permissões(iPermission). Exemplo: Este exemplo checa se o
     * usuário "37860639 -  Teste" tem acesso a classe "43614400 - Contatos" e se o
     * campo "estabeleci" no cadastro de permissões tem o valor "3002932 - Demonstração" <br><br>
     *  connection.getPermission( 43614400, "iView", 37860639, "withoutInheritance",
     *  [['Estabeleci', 3002932]])<br><br>
     * @return {*}
     * @see #getChildren
     * @deprecated Utilize {@link module:@nginstack/engine/lib/security/Security~Security#getPermission}.
     */
    getPermission(
        classKeyOrVfsKey: number,
        permissionFieldName: string,
        userKey: number | null,
        getMode: string | null,
        extraFilter: string | null
    ): any;
    /**
     * Traz as chaves das classes filhas da classe informada, bem como a própria classe. Podendo
     * fazer um filtro por usuário.
     * @param {number|string} classKey Chave ou nome da tabela do cache local a ser clonada.
     * @param {number} [userKey] Chave do usuário para que seja feito o filtro de visão.
     * @param {string} [permissionFieldName] Nome do campo onde estão as permissões dos usuários.
     * @return {string} String com lista de chaves separadas por ponto-e-vírgula.
     * @see #getKeyOfClass
     * @see #getPermission
     * @see #getHierarchicalClass
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Classes~Classes#getChildren}.
     */
    getChildren(classKey: number | string, userKey?: number, permissionFieldName?: string): string;
    /**
     * Devolve a hierarquia de classes.
     * @param {number} startClass Chave da classe de onde deve iniciar a montagem da hierarquia.
     * @param {number} endClass Chave da classe onde deve finalizar a montagem da hierarquia.
     * @param {number} [level] Quantidade de classes que irá pegar a partir da inicial.
     * @param {string} [opt_separator] String que irá separar as classes. O Valor padrão é "/"
     * @param {boolean} [opt_bringClassesKeys] Determina se trará as chaves das classes.
     * @return {string} Hierarquia de classes separadas por "/"
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Classes~Classes#getHierarchyList}.
     */
    getHierarchicalClass(
        startClass: number,
        endClass: number,
        level?: number,
        opt_separator?: string,
        opt_bringClassesKeys?: boolean
    ): string;
    /**
     * Clona uma classe do cache local.
     * Caso seja usado o método "applyUpdates" em um dataset proveniente do cache local, todas as
     * alterações serão refletidas na tabela a ele associada. Bastando para isso que ela possua os
     * campos CHAVE, CLASSE e VERSÃO.
     * @param {number} classKey Nome da classe do sistema a ser clonada.
     * @param {number} [userKeyPermissionViewFilter]
     * @param {Array} [securityExtraFilter]
     * @return {DataSet}
     * @see DataSet
     * @see #cloneLocalCache
     * @see #cloneVfsByClass
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Classes~Classes#getCachedDataSet}.
     */
    cloneLocalCacheByClass(
        classKey: number,
        userKeyPermissionViewFilter?: number,
        securityExtraFilter?: any[]
    ): DataSet;
    /**
     *
     * @param {Object} classKey
     * @param {Object} userKeyPermissionViewFilter
     * @param {Object} securityExtraFilter
     * @return {DataSet}
     * @see #getClassDefinitionSource
     * @deprecated Utilize {@link module:@nginstack/engine/lib/dataset/DataSet~DataSet#setView} para
     * configurar um filtro de classes em um DataSet da tabela iVFS.
     */
    cloneVfsByClass(
        classKey: any,
        userKeyPermissionViewFilter: any,
        securityExtraFilter: any
    ): DataSet;
    /**
     * 1. Ao se usar o parâmetro "keysQuantity", o servidor não retorna o número de chaves
     * solicitadas, mas sim reserva. Após a solicitação, deve-se fazer o incremento de chaves
     * "manualmente", como no exemplo que vimos.
     * 2. Recomenda-se solicitar apenas uma chave, ou seja, parâmetro nKeys = 1
     * (ou simplesmente omitido). Assim, em vez de ir ao servidor buscar a chave, ela será
     * solicitada ao cache de chaves.
     * @param {number} [keysQuantity] Número de chaves que o servidor deve reservar.
     * @param {number} [getHighKeys] Indica se deve usar chaves altas.
     * @return {number}
     * @see #insertWithKey
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#createKey}.
     */
    createKey(keysQuantity?: number, getHighKeys?: number): number;
    /**
     * @param {string} className
     * @return {number}
     * @see #getHierarchicalClass
     * @see #getChildren
     * @see #get
     * @deprecated Este método tem um comportamento indeterminado quando há mais de uma classe com
     * o mesmo nome. Prefira pesquisar pelo nome na tabela de Classes e tratar corretamente as
     * possíveis múltiplas ocorrências.
     */
    getKeyOfClass(className: string): number;
    /**
     * Efetiva as alterações dos datasets nas suas respectivas tabelas.
     * @param {DataSet|Array<DataSet>} ArrayOfDataSets DatasSet ou array de datasets que devem ser
     * atualizados.
     * @param {?boolean} insertIntoLogTable Indica se as alterações devem ser incluídas na
     * tabela de log.
     * @return {number} Versão dos registros alterados. Retornará 0 caso nenhum registro tenha
     * sido alterado.
     * @see DataSet#applyUpdates
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#applyUpdates}.
     */
    applyUpdates(
        ArrayOfDataSets: DataSet | DataSet[],
        insertIntoLogTable: boolean | null
    ): number;
    /**
     * Obtém o valor de um campo do registro que possui a chave ou o código informado dentro da
     * classe informada.
     * @param {string} className Nome da classe de onde se deve pegar o campo.
     * @param {string} codeOrKey Código ou chave do registro do qual se quer pegar o campo.
     * @param {string} fieldName Nome do campo que se deseja pegar.
     * @return {Object} Valor do campo com o tipo de acordo com o que foi definido no banco de dados.
     * @deprecated Utilize {@link module:@nginstack/engine/lib/dbcache/DBCache~DBCache#getFieldValue}.
     */
    get(className: string, codeOrKey: string, fieldName: string): any;
    /**
     * Nomes das bases de dados servidas pelo Engine remoto.
     *
     * O Engine remoto pode ser um servidor de aplicação ou de borda das bases de dados. Se estiver
     * no modo de servidor de borda, os métodos de consulta e gravação na base de dados não
     * estarão disponíveis. Utilize o método
     * {@link module:@nginstack/engine/lib/database/Database~Database#isEdgeServer} para determinar
     * se o Engine remoto é um servidor de borda da base de dados.
     *
     *
     * **Importante:** por motivos de compatibilidade, este método retorna uma lista separada por
     * ";" em vez de um array de nomes.
     * @return {string} Lista separada por ";" com os nomes das bases de dados servidas pelo Engine
     * remoto. Os nomes retornados são padronizados em letras maiúsculas a fim de simplificar a
     * comparação de nomes.
     * @see #dbName
     * @see #dbType
     */
    getDatabaseNames(): string;
    /**
     * Este método pode comparado a pressionar CTRL + E no IDE
     * O cache local é atualizado a cada 30 segundos por padrão, mas pode ser configurado via
     * manage do Engine.
     * Atualiza o cache local.
     * @param {boolean} [waitDataRefreshing] Indica se deve aguardar a atualização do cache
     * local ser concluída.
     * @deprecated Utilize {@link module:@nginstack/engine/lib/dbcache/DBCache~DBCache#refresh}.
     */
    refreshLocalCache(waitDataRefreshing?: boolean): void;
    /**
     * Autentica o nome de usuário e senha no banco de dados e retorna a chave dele.
     * @param {string} userName
     * @param {string} password
     * @param {?boolean} useLocalCache Indica se deve usar o cache local para realizar a
     * autenticação da senha. Se for informado true, a autenticação será realizada
     * rapidamente, pois não haverá necessidade de consultar o servidor. Caso contrário, pode haver
     * demora ao se obter os dados do servidor. No entanto, esta última opção permite realizar
     * autenticações sem que o cache local esteja montado.
     * @return {number} Retorna -1 caso a autenticação seja inválida.
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#authenticateUser}
     * ou {@link module:@nginstack/engine/lib/security/Security~Security#authenticateUser}, esse último
     * se a autenticação for na base de dados corrente.
     */
    authenticateUser(userName: string, password: string, useLocalCache: boolean | null): number;
    /**
     * Altera a senha do usuário.
     * @param {DBKey|number} userKey Chave do usuário que terá a senha alterada.
     * @param {string} password Nova Senha.
     * @deprecated Utilize {@link module:@nginstack/engine/lib/security/Security~Security#setPassword}.
     */
    setPassword(userKey: DBKey | number, password: string): void;
    /**
     * Executa um script no servidor.
     * @param {number|string} scriptReference Chave do script da VFS que deve ser executado ou caminho
     * do script da UFS.
     * @param {Object} [parametersNames] Array contendo o nome do parâmetro e o seu valor
     * ([parameterName, parameterValue]) que pode ser repetido várias vezes.
     * @param {...*} [parametersValues]
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#runScript}.
     */
    executeScript(
        scriptReference: number | string,
        parametersNames?: any,
        parametersValues?: any[]
    ): void;
    /**
     * Obtém o código fonte da definição de uma classe de dados.
     * @param {DBKey|number} classKey Chave da classe do Vfs que deve ser instanciada.
     * @param {DataSet?} vfs
     * @param {DataSet?} classes
     * @param {Array<number>} ignoredClassKeys Array de chaves de x-class que devem ser ignorados.
     * @return {string}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Classes~Classes#getClassDefinitionSource}.
     */
    getClassDefinitionSource(
        classKey: DBKey | number,
        vfs: DataSet | null,
        classes: DataSet | null,
        ignoredClassKeys: number[]
    ): string;
    /**
     * Pega todas as referências de uma chave.
     * O DataSet retornado possui os seguintes campos:
     * iKey - Chave do registro que referencia key.<br>
     * iClass - Classe do registro que referencia key. Este campo é útil para filtrar as
     * ocorrência que podem ser exibidas para um determinado usuário.
     * iTableName - Nome da tabela de qual faz parte o registro que referencia key.<br>
     * iFieldName - Nome do campo que referencia key.<br>
     * iFieldLabel - Nome de exibição do campo que referencia key.<br>
     * @param {number} key Chave do registro do qual se deseja obter as referências.
     * @param {string} tableName Nome da tabela da qual faz parte o registro informado pelo
     * parâmetro key.
     * @param {?number} maxReturnCount Número máximo de referências que devem ser retornadas. É
     * importante que este valor não seja alto, pois getReferences() pode retornar uma quantidade
     * muito elevada de registros.
     * @param {Array<string>?} ignoredTables
     * @return {DataSet}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#getReferences}.
     */
    getReferences(
        key: number,
        tableName: string,
        maxReturnCount: number | null,
        ignoredTables: string[] | null
    ): DataSet;
    /**
     * Pega uma propriedade de uma classe de forma hierárquica.
     * @param {number|string} classNameOrKey Nome ou chave da classe de onde se quer a propriedade.
     * @param {string} propertyName Nome da propriedade.
     * @return {Object} Objeto com as definições da classe.
     * @see #getHierarchicalClass
     * @deprecated
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Classes~Classes#getHierarchicalProperty}.
     */
    classHierarchicalProperty(classNameOrKey: number | string, propertyName: string): any;
    /**
     * Obtém as chaves das licenças que o usuário pode editar.
     * @param {number} userKey Chave do Usuário
     * @return {Array<number>} Chaves de Licenças que o Usuário pode alterar.
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/product/ProductManager~ProductManager#getChangeableProducts}.
     */
    getChangeableLicenses(userKey: number): number[];
    /**
     * Informa quais licenças podem ser alteradas pelo usuário.
     * @param {number} userKey Chave do usuário que será associado ao Partner Key Range.
     * @param {Array<number>} licenseKeys Array com as chaves das licenças que podem ser alteradas pelo usuário.
     * @param {Array<string>} passwords Array com os passwords da licenças informadas no parâmetro licenseKeys.
     * @see #getChangeableLicenses
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/product/ProductManager~ProductManager#setChangeableProducts}.
     */
    setChangeableLicenses(
        userKey: number,
        licenseKeys: number[],
        passwords: string[]
    ): void;
    /**
     * Obtém as chaves das licenças que o usuário pode licenciar.
     * @param {number} userKey
     * @return {Array<number>}
     * @see #setIssuableLicenses
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/license/LicenseManager~LicenseManager#getIssuableLicenses}.
     */
    getIssuableLicenses(userKey: number): number[];
    /**
     * Licenças podem ser licenciadas pelo usuário.
     * @param {number} userKey Chave do usuário que será associado ao Partner Key Range.
     * @param {Array} licenseKeys Array com as chaves das licenças que podem ser licenciadas pelo
     * usuário.
     * @param {Array} passwords Array com os passwords da licenças informadas no parâmetro licenseKeys.
     * @see #getIssuableLicenses
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/license/LicenseManager~LicenseManager#setIssuableLicenses}.
     */
    setIssuableLicenses(userKey: number, licenseKeys: any[], passwords: any[]): void;
    /**
     * Obtém a chave da licença que gerou a chave informada.
     * @param {number} key Chave negativa que deverá ter a licença determinada.
     * @return {number}
     * @see #userCanChangeNegativeRecord
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/product/ProductManager~ProductManager#getProductFromKey}.
     */
    getLicenseFromNegativeRecord(key: number): number;
    /**
     * Determina se o usuário tem permissão de alterar um registro de chave
     * negativa.
     * @param {number} key Chave do registro.
     * @param {number} [opt_userKey] Chave do usuário. Caso não seja informado, será
     * considerado o usuário corrente.
     * @return {boolean}
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/product/ProductManager~ProductManager#userCanChangeRecord}.
     */
    userCanChangeNegativeRecord(key: number, opt_userKey?: number): boolean;
    /**
     * Cria um nova faixa de chaves negativas.
     * @param {string} keyRangeName Nome do produto que será criado com esta faixa de chaves.
     * @param {number} quantity Quantidade de chaves a serem reservadas no Key Range que será criado.
     * @param {string} [keyList] Lista de chaves que fazem parte do Key Range, mas não são
     * representadas pela faixa.
     * @param {string} [requiredLicenses] Licenças requeridas pelo Key Range que será criado.
     * @param {number} [key] A chave somente deve ser informada se estiver realizando a edição
     * de informações de um key range existente.
     * @param {number} [base] A base somente deve ser informada se estiver realizando a edição
     * de informações de um key range existente.
     * @param {string} [userName]
     * @param {string} [password]
     * @see #addKeyRange
     * @see #changeLicensePassword
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/product/ProductManager~ProductManager#createProduct}.
     */
    createKeyRange(
        keyRangeName: string,
        quantity: number,
        keyList?: string,
        requiredLicenses?: string,
        key?: number,
        base?: number,
        userName?: string,
        password?: string
    ): void;
    /**
     * Adiciona um novo Key Range na base de dados.
     * @param {string} keyRangeStream Key Range fornecido pela desenvolvedora do Engine.
     * @param {string} password Novo password que será associado ao Key Range. Guarde esta senha com
     * segurança, pois somente através dele será possível utilizar e criar licenças do Key Range.
     * @see #changeLicensePassword
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/product/ProductManager~ProductManager#enableDevelopment}.
     */
    addKeyRange(keyRangeStream: string, password: string): void;
    /**
     * Altera o password de uma licença.
     * @param {number} key Licença que terá o password alterado.
     * @param {string} password Password atual.
     * @param {string} newPassword Password novo.
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/product/ProductManager~ProductManager#changePassword}.
     */
    changeLicensePassword(key: number, password: string, newPassword: string): void;
    /**
     * Cria uma licença de uso. Somente o proprietário de uma licença poderá criar e distribuir
     * licenças de uso.
     * @param {number} keyRangeKey Chave da licença que será licenciada para um cliente.
     * @param {number} licenserKey Chave gerada pelo proprietário da licença para controlar a
     * distribuição de licenças para seus clientes.
     * @param {string} licenseType Tipo da licença que será criada. Os valores possíveis são:
     * "C" (por conexão) ou "P" (por processador).
     * @param {number} quantity Quantidade de licenças concedidas à empresa licenciada.
     * @param {Date} expiration Data de expiração da licença.
     * @param {string} licenseeName Nome da empresa que será licenciada.
     * @param {string} licenseeId Identificação oficial da empresa licenciada no País ( Ex: CNPJ ).
     * @param {string} userName
     * @param {string} password Password do proprietário da licença.
     * @see #addLicense
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/license/LicenseManager~LicenseManager#createLicense}.
     */
    createLicense(
        keyRangeKey: number,
        licenserKey: number,
        licenseType: string,
        quantity: number,
        expiration: Date,
        licenseeName: string,
        licenseeId: string,
        userName: string,
        password: string
    ): void;
    /**
     * Adiciona uma nova licença na base de dados.
     * @param {string} licenseStream Licença em uma sequência de caracteres fornecida por um
     * fornecedor reconhecido pela desenvolvedora do Engine.
     * @param {string} administratorPassword Senha do usuário administrator. Caso seja o primeiro
     * licenciamento do sistema, a senha do usuário administrator será alterada para o valor
     * informado.
     * @see #createLicense
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/license/LicenseManager~LicenseManager#addLicense}.
     */
    addLicense(licenseStream: string, administratorPassword: string): void;
    /**
     * Obtém o conteúdo de um arquivo armazenado na Virtual File System.
     * Utilize este método em vez de acessar diretamente a tabela iVfs do cache local, pois o conteúdo
     * poderá não estar disponível caso a classe da Virtual File System esteja configurada para não
     * realizar cache de conteúdo.
     * @param {number} vfsScriptKey Chave do Script na Virtual File System.
     * @return {string} Conteúdo do Script
     * @deprecated Utilize
     * {@link module:@nginstack/engine/lib/vfs/VirtualFileSystem~VirtualFileSystem#getFileContent}.
     */
    getVfsContent(vfsScriptKey: number): string;
    /**
     * Obtém o plano de execução do banco de dados para a expressão SQL informada.
     * O plano de execução é uma informação gerada pelo banco de dados que permite ao
     * desenvolvedor compreender como o query será executado e determinar se a expressão SQL
     * criada possui um bom desempenho. Cada banco de dados possui um modelo de plano de execução e a
     * documentação do mesmo deve ser lida para compreender as informações retornadas.
     * Normalmente, este método não é conveniente para o desenvolvedor, pois a informação
     * retornada no DataSet é extensa e a utilização de DataSets em logs não é simples. É
     * recomendada a utilização dos métodos da classe QueryAnalyzer para obter a informação do
     * plano de execução em um formato mais simples.
     * @param {string} sqlExpression Expressão SQL da qual deve ser obtido o plano de execução.
     * @return {DataSet}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#getExecutionPlan}.
     */
    getExecutionPlan(sqlExpression: string): DataSet;
    /**
     * Insere um registro de Log na tabela iLog.
     * Os campos iUser, iDate, iHour e iReferrer serão preenchidos automaticamente pelo sistema.
     * @param {number} logType Chave do tipo de log que está sendo registrado. Deve ser um registro
     * da classe "/data/system/Auxiliary Tables/Log Type". Será gravado no campo iType.
     * @param {?string} opt_content Conteúdo que será gravado no campo iContent.
     * @param {?number} opt_key Chave do registro ao qual o log faz referência. Será gravado no campo
     * iKey.
     * @param {?number} opt_classKey Chave da classe do registro ao qual o log faz referência. Será
     * gravado no campo iClass.
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Database~Database#insertLog}.
     */
    insertLog(
        logType: number,
        opt_content: string | null,
        opt_key: number | null,
        opt_classKey: number | null
    ): void;
    /**
     * Verifica se a chave informada é filha ou igual a classe especificada.
     * São verificadas as seguintes situações:<br>
     *   - Se uma classe "key" é filha de "parent";<br>
     *   - Se a classe do registro "key" é filho de "parent";<br>
     *   - Se um registro iVfs "key" é filho de "parent".
     * @param {number} key Chave da classe ou do registro a qual deseja verificar a hierarquia.
     * @param {number} parent Chave da classe a qual se deseja verificar se é mãe da chave passado
     * no parâmetro "key".
     * @return {boolean}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Classes~Classes#isChildOf}.
     */
    isChildOf(key: number, parent: number): boolean;
    /**
     * Descarta o cache de informações das capacidades conhecidas do Engine remoto acessado por meio
     * desta conexão.
     *
     * Este é um método avançado que em situações normais de uso não deve ser utilizado. Ele
     * deve ser empregado apenas quando for conhecido que um Engine remoto tenha sido atualizado e
     * quando as capacidades da nova versão desse Engine são requeridas imediatamente.
     */
    discardEndpointInfoCache(): void;
    /**
     * Verifica se a tabela faz parte do cache local.
     * @param {number} classKey  Classe que define a tabela. Este parâmetro não é mais
     * utilizado, sendo mantido apenas por compatibilidade de API.
     * @param {string} tableName Nome da tabela
     * @return {boolean} True se a tabela fizer parte do cache local
     * @deprecated Utilize {@link module:@nginstack/engine/lib/database/Classes~Classes#hasCachedData}.
     */
    isCachedData(classKey: number, tableName: string): boolean;
    /**
     * Obtém a definição de uma classe.
     * @param {number|string} classKeyOrSource
     * @param {(DataSet|number)} [iVfsOrParentKey]
     * @param {DataSet} [iClass]
     * @return {ModelDef}
     * @deprecated Utilize {@link module:@nginstack/engine/lib/classdef/ClassDefManager~ClassDefManager#getClassDef}.
     */
    instanceClassDefinition(
        classKeyOrSource: number | string,
        iVfsOrParentKey?: DataSet | number,
        iClass?: DataSet
    ): ModelDef;
    /**
     * Envia um email através da conexão corrente.
     * @param {Email} email Objeto que contém as definições do email a ser enviado.
     * @deprecated Utilize o método `Database.prototype.sendEmail`
     */
    sendEmail(email: Email): void;
    /** @private */
    private sendMail;
    /**
     * Agenda o envio do email no servidor.
     *
     * **Importante:** este método deve ser evitado, pois eventuais falhas no envio são ignoradas e
     * registradas apenas no log do servidor. O seu uso intenso ou o envio de emails de tamanho
     * elevado também podem prejudicar o funcionamento do "Agendador de scripts" para outras
     * atividades do sistema.
     * @param {Email} email Instância de Email que contém as definições do email a ser enviado.
     * @param {number} [maxSize] Limite em bytes do tamanho requerido para armazenar a mensagem
     * no agendador de scripts. Caso não seja informado, será considerado 25MB.
     * @example
     * const email = new Email();
     * email.addRecipient('Nome do destinatário', 'nome@servidor.com.br');
     * email.subject = 'Assunto';
     * email.htmlContent = '<html><body><b>Teste de Email</b><br><br></body></html>';
     * connection.scheduledSendEmail(email);
     */
    scheduledSendEmail(email: Email, maxSize?: number): void;
    /** @private */
    private scheduledSendMail;
    /**
     * Cria uma nova tarefa no Scheduler do servidor da conexão.
     * @param {Task} task Instância de Task que contém todas as definições da tarefa a ser executada.
     * @param {?string} userName Nome do usuário que está criando a tarefa. Caso não seja informado,
     * será considerado o usuário logado na sessão corrente.
     * @param {?string} password Senha do usuário que está criando a tarefa.
     * @example
     *  // Cria a tarefa que deve executar o script de chave 999888 hoje, às 23:00h.
     *  var task = new Task();
     *  task.date = new Date();
     *  task.hour = task.date.setHours( 23, 0, 0, 0);
     *  task.scriptKey = 999888;
     *  connection.newTask(task);
     */
    newTask(task: Task, userName: string | null, password: string | null): void;
    /**
     * Verifica se a data passada é um dia útil e, se não for, retorna o próximo dia útil.
     * @param {Date} dt Data a ser verificada.
     * @param {?number} uf Chave da UF quando deseja-se considerar feriados estaduais.
     * @param {?number} localidade Chave da cidade quando deseja-se considerar feriados municipais.
     * @returns {Date}
     */
    skipSatSunHoliday(dt: Date, uf: number | null, localidade: number | null): Date;
    /**
     * Obtém os grupos de um usuário ou grupo de usuário levanto em conta a recursividade dos grupos.
     * Um grupo pode fazer parte de outro.
     * @param {number} userKey Chave do usuário, papel ou grupo de usuário.
     * @return {Array<number>} Chaves dos grupos e papéis dos quais o usuário, papel ou grupo faz parte.
     * @example
     *  // Get groups of user
     *  var groups = connection.getUserGroups(session.userKey);
     *  response.writeln('User ' + session.userName + ' has permission of groups ' + groups.join(', ') +
     *    '.');
     * @deprecated Utilize {@link module:@nginstack/engine/lib/security/Security~Security#getUserAndGroupsKeys}.
     */
    getUserGroups(userKey: number): number[];
    /**
     * Verifica se um usuário faz parte de um grupo.
     * @param {number} userKey Chave do usuário.
     * @param {number} groupKey Chave do grupo.
     * @return {boolean}
     * @example
     *  // Is current user an administrator
     *  if ( connection.isUserInGroup( session.userKey, -1898186568) ){ // Administrators
     *  }
     * @deprecated Utilize {@link module:@nginstack/engine/lib/security/Security~Security#getUserAndGroupsKeys}.
     */
    isUserInGroup(userKey: number, groupKey: number): boolean;
    /**
     * Obtém a diferença em minutos do fuso horário do servidor acessado por esta conexão e o UTC.
     * @return {number}
     */
    getTimezoneOffset(): number;
}
declare namespace Connection {
    export { fromConfig, Database, ModelDef, Email, Task };
}
import DataSet = require('../dataset/DataSet.js');
import DBKey = require('../dbkey/DBKey.js');
/**
 * Retorna uma instância de Connection associado ao engine informado.
 *
 * Observação: a chave informada deve deve ser de um registro da base de dados corrente.
 * @param {DBKey|number} key Chave do cadastro do Engine. Essa chave deve ser de um registro
 * da classe "/Dados/Sistema/Servidores".
 * @return {Connection} Instância de Connection para o Engine informado.
 */
declare function fromConfig(key: DBKey | number): Connection;
type Database = import('../database/Database');
type ModelDef = import('../classdef/ModelDef');
type Email = import('../email/Email');
type Task = import('../scheduler/Task');
