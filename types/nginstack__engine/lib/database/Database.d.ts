export = Database;
/**
 * @typedef {import('../email/Email')} Email
 * @private
 */
/**
 * @typedef {import('../session/Session')} Session
 * @private
 */
/**
 * @typedef {Object} VersionInfo
 * @property {number} major Número da versão principal.
 * @property {number} minor Número da versão secundária.
 * @property {string} name Informação de versão para exibição.
 */
/**
 * @typedef {Object} DatabaseVersionInfo Objeto literal contendo informações sobre o servidor de
 * banco de dados e o driver de conexão.
 * @property {VersionInfo} server Informações de versão do banco de dados.
 * @property {VersionInfo} client Informações de versão do driver de conexão com o banco.
 */
/**
 * Classe que representa o servidor de banco de dados.
 *
 * Há uma variável global chamada `database` que representa o servidor de banco de dados
 * da conexão corrente.
 * @param {string|Connection} host Endereço e porta do servidor de banco de dados no
 * formato `<IP ou Nome>:<Porta>`, ou uma instância de {@link Connection} associada ao
 * servidor que será conectado.
 * @param {string} dbName Nome da base de dados.
 * @constructor
 */
declare function Database(host: string | Connection, dbName: string): void;
declare class Database {
    /**
     * @typedef {import('../email/Email')} Email
     * @private
     */
    /**
     * @typedef {import('../session/Session')} Session
     * @private
     */
    /**
     * @typedef {Object} VersionInfo
     * @property {number} major Número da versão principal.
     * @property {number} minor Número da versão secundária.
     * @property {string} name Informação de versão para exibição.
     */
    /**
     * @typedef {Object} DatabaseVersionInfo Objeto literal contendo informações sobre o servidor de
     * banco de dados e o driver de conexão.
     * @property {VersionInfo} server Informações de versão do banco de dados.
     * @property {VersionInfo} client Informações de versão do driver de conexão com o banco.
     */
    /**
     * Classe que representa o servidor de banco de dados.
     *
     * Há uma variável global chamada `database` que representa o servidor de banco de dados
     * da conexão corrente.
     * @param {string|Connection} host Endereço e porta do servidor de banco de dados no
     * formato `<IP ou Nome>:<Porta>`, ou uma instância de {@link Connection} associada ao
     * servidor que será conectado.
     * @param {string} dbName Nome da base de dados.
     * @constructor
     */
    constructor(host: string | Connection, dbName: string);
    /**
     * Nome da base de dados.
     * @type {string}
     */
    dbName: string;
    /**
     * Endereço do servidor da base de dados
     * @type {string}
     */
    serverHost: string;
    /**
     * Tipo da base de dados.
     *
     * Pode ser retornado um dos seguintes valores: 'PGSQL', 'ORACLE' e 'MSSQL'.
     * @type {string}
     */
    dbType: string;
    /**
     * Retorna informações de versão do gerenciador de banco de dados e do driver de conexão.
     * @return {DatabaseVersionInfo}
     */
    getVersionInfo(): DatabaseVersionInfo;
    /**
     * Identificador único da base de dados.
     *
     * Importante: atualmente esta propriedade gera o ID a partir do nome o que não é seguro. Em versões
     * futuras do sistema, o formato do ID será alterado para ser único independente do nome da
     * base. Ou seja, bases com o mesmo nome deverão ter IDs distintos. Por conta dessa alteração
     * de comportamento prevista, não é recomendado que esse valor seja persistido no banco de dados.
     * @type {string}
     */
    uniqueId: string;
    /**
     * Data/Hora em fuso local correspondente Data/Hora do banco de dados.
     * @type {Date}
     */
    date: Date;
    /**
     * Chave do usuário logado no servidor de banco de dados. Retorna -1 caso não exista usuário logado.
     * @type {number}
     */
    userKey: number;
    /**
     * Nome do usuário logado no servidor de banco de dados.
     * @type {string}
     */
    userName: string;
    /**
     * Chave do idioma do usuário.
     * @type {number}
     */
    userLanguage: number;
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
     * a conexão padrão (variável global `database`) devem ter o cuidado de retornar o
     * valor anterior após o uso, evitando assim afetar outros códigos que utilizem a
     * a mesma instância global. Para modificar o tipo de carga de algumas consultas
     * específicas, é preferível informar o `workloadType` nas opções do método `query`.
     *
     * No banco de dados Oracle, este parâmetro é utilizado para definir o tamanho do buffer para
     * a leitura de registros em bloco, sendo alocada mais memória para as cargas do tipo "olap" e
     * "dw". Seu valor também estará disponível no campo "ACTION" da view "v$session", possibilitando
     * ao DBA otimizar e priorizar o atendimento de acordo com o tipo informado.
     * @type {string}
     * @see #query
     */
    workloadType: string;
    /**
     * Esta é uma propriedade que, se definida, será utilizada pelo applyUpdates e pelo executeDDL para
     * preencher o campo iTag da iLog. Em sequência, caso o campo iTag tenha sido preenchido, o campo
     * iFreshTrack será marcado com true, podendo ser alterado posteriormente por rotinas que
     * façam processamento sobre registros da iLog com trackingId definido. Com o preenchimento
     * do trackingId, é possível agrupar os registro na iLog por tag, facilitando o desfazimento.
     *
     * Recomenda-se que a string utilizada nesta propriedade seja um identificador único. Para isto,
     * utilize a função `createGUID(removeFormatChars)`.
     *
     * A alteração desta propriedade modificará também a mesma propriedade da instância de `Connection`
     * informada na construção deste objeto, caso tenha sido informada uma.
     * @type {string}
     */
    trackingId: string;
    /**
     * Relação dos escopos de autorização permitidos ao usuário logado na base de dados.
     *
     * Caso a autenticação na base de dados tenha sido feita por meio de um token de autorização,
     * será retornado o escopo desse token. Caso tenha sido via credenciais do usuário, serão
     * retornados todos os escopos de autorização atribuídos a esse usuário.
     * @type {string}
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken#scope
     * @see module:@nginstack/engine/lib/security/Security~Security#getUserScope
     */
    scope: string;
    /**
     * Informação enviada ao servidor para que o mesmo possa identificar nas
     * estatísticas qual processo originou a requisição. Ela é automaticamente
     * preenchida pelo sistema e normalmente não deve ser utilizada pelo
     * desenvolvedor.
     *
     * A alteração desta propriedade modificará também a mesma propriedade da
     * instância de `Connection` informada na construção deste objeto, caso
     * tenha sido informada uma.
     * @type {string}
     * @example
     * const Database = require('@nginstack/engine/lib/database/Database');
     *
     * const db = new Database(host, dbName);
     * db.referrer = 'Processo de sincronismo de dados';
     */
    referrer: string;
    /**
     * Protocolo utilizado na comunicação com o Engine servidor. Valores possíveis: "http:" e "https:".
     * @type {string}
     */
    protocol: string;
    /**
     * Timeout em milissegundos da leitura dos dados na conexão com o Engine servidor da base de dados.
     *
     * Será utilizado o timeout padrão do sistema caso seja informado zero ou um valor negativo.
     * @example
     * const Database = require('@nginstack/engine/lib/database/Database.js');
     * const db = Database.fromConfig(configKey);
     * db.readTimeout = 60000;
     * db.writeTimeout = 10000;
     * db.query(sql);
     * @type {number}
     */
    readTimeout: number;
    /**
     * Timeout em milissegundos da escrita dos dados na conexão com o Engine servidor da base de dados.
     *
     * Será utilizado o timeout padrão do sistema caso seja informado zero ou um valor negativo.
     * @example
     * const Database = require('@nginstack/engine/lib/database/Database.js');
     * const db = Database.fromConfig(configKey);
     * db.readTimeout = 60000;
     * db.writeTimeout = 10000;
     * db.query(sql);
     * @type {number}
     */
    writeTimeout: number;
    /**
     * Autentica o nome e senha do usuário no servidor.
     * @param {string} userId Nome ou e-mail do usuário
     * @param {string} password Senha do usuário
     * @return {number} Chave do usuário se o userId e password forem válidos ou -1 caso falhe.
     */
    authenticateUser(userId: string, password: string): number;
    /**
     * Realiza o login na conexão com a base de dados, permitindo o usuário acessar
     * informações do banco de dados. Todos os queries e alterações ficaram serão
     * registradas em nome do usuário logado.
     * @param {string} userId Nome ou e-mail do usuário
     * @param {string} password Senha do usuário
     * @return {boolean} True, se o nome de usuário e senha foram válidos
     */
    login(userId: string, password: string): boolean;
    /**
     * Efetua o login na conexão com a base de dados utilizando um token criado no sistema
     * anteriormente pela classe
     * {@link module:@nginstack/engine/lib/security/AuthToken~AuthToken AuthToken} ou por meio de
     * tokens de identificação gerados por provedores de identidade externos ao sistema.
     *
     * Tokens do sistema devem ser autorizados utilizando os métodos
     * {@link module:@nginstack/engine/lib/session/Session~Session#authorizeToken Session.authorizeToken}
     * ou {@link module:@nginstack/engine/lib/security/Security~Security#authorizeToken Security.authorizeToken},
     * momento em que será gerado o token de identificação esperado por este método.
     *
     * Tokens de identificação externos podem ser gerados utilizando a classe
     * {@link module:@nginstack/engine/lib/oidc/OpenIdClient~OpenIdClient OpenIdClient}. Somente
     * serão aceitos tokens dos provedores de identidade configurados em
     * "Administração do sistema > Segurança > Provedores de identidade".
     *
     * Para logar utilizando este método, o usuário necessita do escopo `security.externalAccess`,
     * mesmo que o servidor de banco de dados representado por este objeto seja o mesmo da conexão
     * corrente.
     *
     * @param {string} authToken Token de autorização do usuário.
     * @see module:@nginstack/engine/lib/security/AuthToken~AuthToken
     * @see module:@nginstack/engine/lib/session/Session~Session#authorizeToken
     * @see module:@nginstack/engine/lib/security/Security~Security#authorizeToken
     * @see module:@nginstack/engine/lib/session/Session~Session#loginByAuthToken
     */
    loginByAuthToken(authToken: string): void;
    /**
     * Utiliza a sessão corrente para realizar o login na nova conexão remota. Não é permitida a
     * utilização desse método para conexão entre bases de dados diferentes.
     * @example
     * const db = new Database(remoteEngineHost, database.dbName);
     * db.loginBySession(session);
     * @param {Session} session Sessão cujo usuário corrente será utilizado para realizar o login.
     * @return {boolean} True, se o nome de usuário e senha foram válidos.
     * @see #loginByAuthToken
     * @see #login
     */
    loginBySession(session: Session): boolean;
    /**
     * Fecha a sessão com a servidor do banco de dados.
     */
    logout(): void;
    /**
     * Executa uma ou várias expressões SQL em uma única transação do banco de dados e retorna os
     * resultados em DataSets.
     * @example
     * const toSqlString = require('@nginstack/engine/lib/string/toSqlString.js');
     * const ds = database.query('SELECT * FROM iLog WHERE ' +
     *     'iDate = ' + toSqlString(new Date()) + ' AND iType = -1898145931', {
     *   workloadType: 'olap'
     * });
     * @param {string|string[]} sql Expressão SQL ou Array de expressões SQLs que devem
     * ser executada no banco de dados.
     * @param {Object} [options] Opções da consulta.
     * @param {number} [options.queryCacheLifeTime] Determina o tempo máximo (em segundos) que o
     * DataSet retornado é mantido em cache, e retornado em consultas idênticas
     * @param {string} [options.workloadType] Determina o tipo de carga desta consulta específica sem
     * modificar o valor corrente da propriedade `workloadType` desta instância de `Database`.
     * @return {DataSet|DataSet[]} Um ou vários DataSets com os resultados da consulta.
     * @see #workloadType
     * @see #query
     */
    query(
        sql: string | string[],
        options?: {
            queryCacheLifeTime?: number;
            workloadType?: string;
        }
    ): DataSet | DataSet[];
    /**
     * Executa as expressões SQL de forma concorrente e retorna os resultados em DataSets.
     *
     * Por padrão, o sistema alocará 4 worker threads para executar as consultas de forma paralela no
     * banco de dados. Esse valor pode ser modificado pela opção `workers` para uma consulta
     * específica ou pela configuração geral "ngin.database.parallelQuery.defaultWorkers" para todas
     * as consultas que não tenham a opção "workers" informada. Será criada uma fila de execução se
     * a quantidade de expressões SQL for superior a quantidade de workers.  Na prática, o
     * paralelismo também é limitado pela configuração da quantidade máxima de conexões do Engine
     * servidor com o banco de dados e por restrições de recursos e configurações do próprio banco
     * de dados. Portanto, de uma forma geral, não é recomendado que sejam utilizadas quantidades
     * elevadas de workers e a alteração desta opção deve verificar o benefício de desempenho
     * real e o aumento de processamento no servidor associado a ela.
     *
     * Após a execução das consultas, os registros retornados precisam ser inseridos em DataSets
     * do banco de dados temporário IDO associado a sessão JavaScript que iniciou a execução. Essa fase
     * gera um retrabalho que não existe no método {@link #query}, portanto, nem todas as consultas
     * terão benefícios no uso do {@link #parallelQuery}. O uso deste método é mais indicado para
     * consultas que retornam uma quantidade de registros que não é diretamente proporcional ao
     * tempo de execução da consulta. Também é recomendado que antes de optar pela execução
     * paralela, seja analisado se o tempo de execução elevado de uma consulta não é decorrente
     * de um plano de execução ineficiente que pode ser otimizado por meio da revisão da expressão SQL
     * ou pela construção de índices nas colunas filtradas, permitindo o uso mais eficiente do método
     * {@link #query}.
     *
     * **Importante:** as expressões SQL serão executadas por worker threads em transações separadas,
     * portanto, este método não deve ser utilizado para consultas que necessitem de integridade
     * transacional entre os dados retornados por cada expressão SQL. Utilize o método
     * {@link #query} caso seja necessário que as consultas sejam executadas em uma única transação.
     * @example
     * const toSqlString = require('@nginstack/engine/lib/string/toSqlString.js');
     * const incDate = require('@nginstack/engine/lib/date/incDate.js');
     * const startDate = incDate(new Date(), -60);
     * const ds = database.parallelQuery([
     *   'SELECT * FROM iLog WHERE iDate >= ' + toSqlString(startDate) + ' AND iType = -1898145931',
     *   'SELECT DISTINCT iKey FROM iLog WHERE iKey IN (' +
     *     'SELECT iKey FROM iLog WHERE iDate >= ' + toSqlString(startDate) + ' AND iType = -1898145931' +
     *    ') AND iType = -1898145932 AND iDate >= ' + toSqlString(startDate)
     * ], {
     *   workloadType: 'olap'
     * });
     * @param {string[]} sqls Expressões SQLs que devem ser executadas na base de dados.
     * @param {Object} [options] Opções da consulta.
     * @param {string} [options.workloadType] Determina o tipo de carga destas consultas específicas sem
     * modificar o valor corrente da propriedade `workloadType` desta instância de `Database`.
     * @param {number} [options.workers] Quantidade de worker threads que serão criados para executar
     * as consultas. O valor informado é limitado pela configuração geral
     * "ngin.database.parallelQuery.maxWorkers". Caso não seja informado, será utilizado o valor
     * da configuração "ngin.database.parallelQuery.defaultWorkers" cujo valor padrão é 4.
     * @return {DataSet[]} DataSets com os resultados das consultas.
     * @see #workloadType
     * @see #query
     */
    parallelQuery(
        sqls: string[],
        options?: {
            workloadType?: string;
            workers?: number;
        }
    ): DataSet[];
    /**
     * Executa uma expressão SQL ou um conjunto de expressões SQLs ignorando os
     * registros retornados, caso existam.
     *
     * Para executar instruções de alteração do esquema da base de dados utilize o método
     * {@link #executeDDL}. O uso do método `executeSQL` para esse fim deixará de ser suportado
     * em versões futuras do Engine.
     * @param {string|string[]} sql Expressão SQL ou Array de expressões SQLs que devem
     * ser executadas no banco de dados.
     */
    executeSQL(sql: string | string[]): void;
    /**
     * Executa uma expressão DLL com o objetivo de alterar o esquema da base de dados.
     *
     * O uso deste método requer que o usuário tenha permissão ao escopo de autorização
     * "database.alterSchema".
     *
     * **Importante:** a sintaxe dos comandos de alteração de esquema da base de dados não são
     * padronizados pelos SGBDs. Ao utilizar este método diretamente, é necessário criar
     * instruções compatíveis com cada SGBD suportado pelo Engine. Para esse fim, avalie o uso de
     * classes mais especializadas na manipulação do esquema da base de dados, como a
     * {@link module:@nginstack/engine/lib/schema/DatabaseSchema~DatabaseSchema DatabaseSchema}.
     * @example
     * database.executeDDL('ALTER TABLE iGroupUser ADD zTestColumn BIGINT');
     * @param {string} statement Instrução DDL que será executada na base de dados.
     * @see module:@nginstack/engine/lib/schema/DatabaseSchema~DatabaseSchema DatabaseSchema
     */
    executeDDL(statement: string): void;
    /**
     * Cria um bloco de chaves na base de dados. Caso a propriedade KeyRangeForCreateKey
     * for informada, será criada uma chave negativa na licença informada. Para isto
     * o usuário logado deve ter permissão para alterar a licença.
     * @param {number} keysQty Quantidade de chaves que devem ser criadas.
     * @param {boolean} [useHighKeys] Deprecated. Indica se deve ser criada utilizando a faixa de
     *   chaves altas (de 1 ã 2 bilhões).
     * @return {number} Primeira chave do bloco de chaves gerado ( Result -> (Result + count - 1) )
     */
    createKey(keysQty: number, useHighKeys?: boolean): number;
    /**
     * Incrementa a versão da base de dados e retorna a versão gerada.
     *
     * A versão retornada não é associada a nenhuma alteração da base de dados e o seu valor pode
     * ser utilizado na geração de dados ou logs associados a uma versão da base de dados, mas que
     * não são gravados via `applyUpdates`.
     * @return {number} Versão da base de dados.
     */
    incVersion(): number;
    /**
     * Efetiva as alterações realizadas no dataSets no banco de dados.
     *
     * Note que se a propriedade trackingId deste objeto estiver preenchida, as versões da iLog geradas
     * por este método terão o campo iTag da iLog preenchido com o valor da propriedade trackingId
     * deste objeto. Em sequência, caso o campo iTag tenha sido preenchido, o campo iFreshTrack
     * será marcado com true, podendo ser alterado posteriormente por rotinas que façam
     * processamento sobre registros da iLog com trackingId definido.
     * @param {DataSet|DataSet[]} dataSets DataSet ou Array de DataSets cujas alterações serão
     * efetivadas no banco de dados.
     * @param {boolean} [logChanges] Registra as alterações na tabela iLog. Caso não seja informado,
     * será considerado `true`. Este parâmetro é ignorado para tabelas que participam do
     * cache local, pois o registro de log para essas tabelas é obrigatório.
     *
     * **Atenção:** a desativação do log transacional não permite o desfazimento das alterações
     * realizadas e prejudica a auditoria do sistema em inspeções de segurança. Modificações
     * sem geração de log também não são aplicadas nas bases de dados destino dos processos de
     * replicação de dados. Essas modificações podem ser perdidas em cenários de migração de
     * banco de dados onde uma base de dados é sincronizada a partir do log transacional.
     * @return {number} Versão das alterações ou zero caso não existam diferenças a serem gravadas.
     * O valor retornado também é gravado nos campos iVersion ou VERSAO dos registros.
     */
    applyUpdates(dataSets: DataSet | DataSet[], logChanges?: boolean): number;
    /**
     * Pega todas as referências de uma chave.
     * O DataSet retornado possui os seguintes campos: iKey - Chave do registro que referencia key.
     * iClass - Classe do registro que referencia key. Este campo é útil para filtrar
     * as ocorrência que podem ser exibidas para um determinado usuário.
     * iTableName - Nome da tabela de qual faz parte o registro que referencia key.
     *  iFieldName - Nome do campo que referencia key. iFieldLabel - Nome de exibição do campo
     *  que referencia key.
     * @param {number} key Chave da qual se deseja obter as referências.
     * @param {string} tableName Nome da tabela da qual key faz parte
     * @param {number} [maxReturnCount] Número máximo de referências que devem ser retornadas.
     *    É importante que este valor não seja alto, pois getReferences() pode retornar uma
     *    quantidade muito elevada de registros.
     * @param {string} [ignoredTables] Tabelas cujos registros não podem ser considerados como
     *  referências.
     * @return {DataSet} DataSet com as referências aos registros. Este dataSet deve ser destruído
     *  por quem chamou este método.
     */
    getReferences(
        key: number,
        tableName: string,
        maxReturnCount?: number,
        ignoredTables?: string
    ): DataSet;
    /**
     * Obtém o plano de execução do banco de dados para a expressão SQL informada.
     * O plano de execução é uma informação gerada pelo banco de dados que permite
     * ao desenvolvedor compreender como o query será executado e determinar se a
     * expressão SQL criada possui um bom desempenho. Cada banco de dados possui um modelo de
     * plano de execução e a documentação do mesmo deve ser lida para compreender as
     * informações retornadas.
     * Normalmente, este método não é conveniente para o desenvolvedor, pois a
     * informação retornada no DataSet é extensa e a utilização de DataSets em logs
     * não é simples.
     * É recomendada a utilização dos métodos da classe QueryAnalyzer para obter a
     * informação do plano de execução em um formato mais simples.
     * @param {string} sql Expressão SQL da qual deve ser obtido o plano de execução.
     */
    getExecutionPlan(sql: string): void;
    /**
     * Executa um script no servidor.
     * @param {number|string} scriptKeyOrURI Chave ou URI do script que deve ser
     * executado.
     * @param {Object} [parameters] Objeto contendo os parâmetros a serem repassados para script
     * em execução.
     * @param {Object} [options] Objeto que contém o parâmetro de TimeOut para execução do
     * script em milissegundos.
     * @param {number} [options.timeout] Tempo máximo de espera da execução do script em milissegundos.
     * @return {*} Retorna o resultado da última expressão avaliada, desde que esta foi o
     * último statement executado.
     * @example
     *  database.runScript(585858, {codigoEntidade:123456, data: new Date()});
     * @example
     *  database.runScript('/products/Engine/tests/Teste.js',
     *    {codigoEntidade:123456, data: new Date()});
     * @example
     *  database.runScript(585858, {codigoEntidade:123456, data: new Date()}, {timeout: 10000});
     * @example
     *  database.runScript('/products/Engine/tests/Teste.js', null, {timeout: 3000});
     */
    runScript(
        scriptKeyOrURI: number | string,
        parameters?: any,
        options?: {
            timeout?: number;
        }
    ): any;
    /**
     * Verifica se existe uma tabela com o nome informado na base de dados.
     * @param {string} tableName Nome da tabela.
     * @return {boolean} True se a tabela existir.
     */
    tableExists(tableName: string): boolean;
    /**
     * Verifica se existe uma visão com o nome informado na base de dados.
     * @param {string} viewName Nome da visão.
     * @return {boolean} True se a visão existir.
     */
    viewExists(viewName: string): boolean;
    /**
     * Verifica se uma coluna existe em uma tabela ou visão da base de dados.
     * @param {string} tableOrViewName Nome da tabela ou visão.
     * @param {string} columnName Nome da coluna a ser verificada.
     * @return {boolean} True se a coluna existir na tabela ou visão informada. Retornará
     * `false` se a tabela, visão ou coluna não existirem na base de dados.
     */
    columnExists(tableOrViewName: string, columnName: string): boolean;
    /**
     * Verifica se existe uma sequência com o nome informado na base de dados.
     * @param {string} name Nome da sequência.
     * @return {boolean} True se a sequência existir.
     */
    sequenceExists(sequenceName: any): boolean;
    /**
     * Retorna um Array com as versões atuais da base de dados. O vetor possui tamanho igual a
     * 3(três), sendo que cada índice do vetor corresponde as seguintes versões:
     * <br>
     * Índice 0: A versão da última alteração de um registro.
     * Índice 1: A versão da última alteração de um registro que faça parte do cache local.
     * Índice 2: A versão da base de dados. A versão da base de dados é alterada
     *    quando ocorre uma alteração na base de dados que não foi registrada através
     *    do controle de versão (ex: um retorno de backup).
     * @return {Array} Vetor de versões
     */
    getVersion(): any[];
    /**
     * Retorna um Array com as versões APROXIMADAS atuais da base de dados. O vetor possui tamanho
     * igual a 3(três), sendo que cada índice do vetor corresponde as seguintes versões:
     * <br>
     * Índice 0: A versao APROXIMADA da ultima alteração de um registro.
     * Índice 1: A versao APROXIMADA da ultima alteração de um registro que faca parte do cache local.
     * Índice 2: A versao APROXIMADA da base de dados. A versao da base de dados e
     *          alterada quando ocorre uma alteração na base de dados que nao foi registrada
     *          através do controle de versao (ex: um retorno de backup).
     * @return {Array} vetor de versões APROXIMADAS.
     */
    getApproximatedVersion(): any[];
    /**
     * Insere um registro de log na tabela iLog.
     *
     * Os campos "iUser", "iDate", "iHour" e "iReferrer" serão preenchidos automaticamente
     * pelo sistema. Para fins de compatibilidade, este método também aceita a seguinte assinatura:
     *
     * * `insertLog(logType, content, key, classKey);`
     * @param {number} logType Chave do tipo de log que está sendo registrado. Deve ser um registro
     * da classe "/data/system/Auxiliary Tables/Log Type". Será gravado no campo iType.
     * @param {Object} [options] Opções de inserção do log.
     * @param {string} [options.content] Conteúdo que será gravado no campo "iContent".
     * @param {number|DBKey} [options.key] Chave do registro ao qual o log faz referência. Será
     * gravado no campo "iKey".
     * @param {number|DBKey} [options.classKey] Chave da classe do registro ao qual o log faz
     * referência. Será gravado no campo "iClass".
     * @param {number|DBKey} [options.version] Número de versão que será gravado no campo
     * "iVersion". **Importante**: para não prejudicar a legibilidade dos logs de auditoria, informe
     * apenas números de versões que tenham sido gerados logo antes da execução do método `insertLog`,
     * garantindo assim que as colunas "iDate" e "iHour" da tabela iLog tenham uma ordem cronológica
     * similar a da "iVersion".
     * @param {boolean} [options.async] Indica se a inclusão do registro de log deve ser feita de modo
     * assíncrono. Essa opção faz com que a gravação do log no banco de dados seja deferida e executada
     * por uma rotina executando em segundo plano. Esse modo de inserção permite que rotinas que
     * funcionem com o Engine offline consigam gerar registros de log. Essa opção não pode ser utilizada
     * em conexões remotas.
     * @param {string} [options.tag] Permite informar um valor para ser preenchido no campo `iTag` da
     * tabela de log.
     */
    insertLog(
        logType: number,
        options?: {
            content?: string;
            key?: number | DBKey;
            classKey?: number | DBKey;
            version?: number | DBKey;
            async?: boolean;
            tag?: string;
        }
    ): void;
    /**
     * Atualiza registros de log transacional da tabela iLog.
     * @param {Object} filters Filtros utilizados na consulta aos registros de log.
     * @param {number} [filters.version] Permite filtrar os registros de log pelo numero de versão.
     * @param {string} [filters.tag] Permite filtrar os registros de log pelo valor de tag.
     * @param {Object} values Valores que serão atualizados nos registros selecionados.
     * @param {boolean} values.freshTrack Permite definir o valor da coluna "iFreshTrack" dos
     * registros de log selecionados. Atualmente somente esse campo pode ser alterado.
     * @see #trackingId
     */
    updateLogs(
        filters: {
            version?: number;
            tag?: string;
        },
        values: {
            freshTrack: boolean;
        }
    ): void;
    /**
     * Envia para o banco de dados os registros de log que estão temporariamente retidos no Engine local
     * em decorrência da inserção utilizando o modo assíncrono.
     * @param {boolean} [wait] Se a chamada a esse método deve aguardar a conclusão da inserção dos logs.
     * @param {number} [timeout] Tempo máximo de espera para a execução deste método.
     * @return {boolean} Indica se os logs pendentes foram enviados com sucesso para o banco de dados.
     * @see #insertLog
     */
    sendPendingLogs(wait?: boolean, timeout?: number): boolean;
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
     * Sinaliza para todos os Engines conectados à base de dados que os caches locais de dados e
     * chaves devem ser reconstruídos no próximo reinício do Engine. Imediatamente após a execução
     * deste método, os Engines devem ser reiniciados para que a operação seja de fato efetivada.
     *
     * **Importante**: a reconstrução do cache local de todos os Engines é uma operação com elevado
     * impacto de desempenho e deixará o sistema fora do ar enquanto essa reconstrução ocorrer. Este
     * método deve ser utilizado apenas em cenários de recriação de uma base de dados ou na restauração
     * de um backup onde houve perda de dados.
     */
    discardCaches(): void;
    /**
     * Envia um email utilizando o Engine servidor desta conexão.
     *
     * **Importante**: a partir da versão 71 do Engine é recomendado que os e-mails
     * sempre sejam enviados pelo método `send` da classe `Email`. Esse método leva
     * em consideração a configuração do servidor SMTP e redireciona automaticamente para
     * o Engine servidor caso seja necessário.
     * @param {Email} email Objeto que contém as definições do email a ser enviado.
     * @example
     *  const email = new Email();
     *  email.addRecipient('Nome do destinatário', 'nome@dominio.com.br');
     *  email.subject = 'Assunto';
     *  email.htmlContent = '<html><body><b>Teste de Email</b><br><br></body></html>';
     *  database.sendEmail(email);
     */
    sendEmail(email: Email): void;
    /**
     * Verifica se o escopo informado foi atribuído ao usuário.
     * @param {DBKey|number} userKey Chave do usuário ao qual se deseja verificar a atribuição do
     * escopo.
     * @param {string|DBKey|number} scope Nome ou chave do escopo a ter a atribuição verificada.
     * @return {boolean} True se o escopo indicado por `scope` tiver sido atribuído ao usuário.
     */
    userHasScope(userKey: DBKey | number, scope: string | DBKey | number): boolean;
    /**
     * Determina se esta conexão com a base de dados é servida por um Engine configurado como servidor
     * de borda.
     *
     * Um Engine servidor de borda se conecta indiretamente ao banco de dados, portanto, os métodos
     * que acessam diretamente o SGBD, como `applyUpdates`, `query`, `executeSQL` e `executeDDL`, não
     * estarão disponíveis e irão gerar um erro caso sejam utilizados. Um servidor de borda
     * deve ser preferencialmente utilizado para atender requisições HTTP, executar tarefas
     * agendadas ou para a execução de scripts remotos.
     *
     * Todos os Engines sem acesso direto ao SGBD são considerados servidores de borda por este
     * método, inclusive os Engines clientes instalados em computadores pessoais.
     * @return {boolean} Indica se o Engine remoto está configurado como servidor de borda.
     */
    isEdgeServer(): boolean;
}
declare namespace Database {
    export { fromConfig, Email, Session, VersionInfo, DatabaseVersionInfo };
}
import Connection = require('../connection/Connection.js');
import DataSet = require('../dataset/DataSet.js');
import DBKey = require('../dbkey/DBKey.js');
/**
 * Retorna uma instância de Database associada à base de dados informada.
 *
 * Observação: a chave informada deve ser de um registro da base de dados corrente.
 * @param {DBKey|number} key Chave do cadastro da base de dados. Essa chave deve ser um registro
 * da classe "/Dados/Sistema/Bases de dados".
 * @return {Database} Instância de Database associada à base de dados informada.
 */
declare function fromConfig(key: DBKey | number): Database;
type Email = import('../email/Email');
type Session = import('../session/Session');
interface VersionInfo {
    /**
     * Número da versão principal.
     */
    major: number;
    /**
     * Número da versão secundária.
     */
    minor: number;
    /**
     * Informação de versão para exibição.
     */
    name: string;
}
/**
 * Objeto literal contendo informações sobre o servidor de
 * banco de dados e o driver de conexão.
 */
interface DatabaseVersionInfo {
    /**
     * Informações de versão do banco de dados.
     */
    server: VersionInfo;
    /**
     * Informações de versão do driver de conexão com o banco.
     */
    client: VersionInfo;
}
