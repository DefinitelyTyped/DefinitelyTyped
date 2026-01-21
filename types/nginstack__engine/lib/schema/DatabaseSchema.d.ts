export = DatabaseSchema;
/** @typedef { import('../database/Database') } Database */
/**
 * @typedef {Object} TableInfo Informações de uma tabela da base de dados.
 * @property {string} name Nome da tabela.
 * @property {string[]} primaryKey Nome das colunas que definem a chave primária da tabela.
 * @property {string} tablespace Nome do *tablespace* que contém esta tabela. O Microsoft
 * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
 * retornado o nome do *filegroup*, recurso específico desse SGBD que permite implementar
 * uma segregação equivalente a obtida com o uso dos *tablespaces*.
 */
/**
 * @typedef {Object} ViewInfo Informações de uma visão de tabela na base de dados.
 * @property {string} name Nome da visão.
 * @property {string} definition Definição da visão. A definição será apresentada em uma
 * representação interna e específica por SGBD. Não é esperado que ela seja igual à definição
 * informada no momento da construção da visão e ela pode ser alterada em versões futuras do SGBD.
 */
/**
 * @typedef {Object} ColumnInfo Informações de uma coluna da base de dados.
 * @property {string} name Nome da coluna.
 * @property {?string} dataType Tipo normalizado da coluna. Deverá ser um dos tipos indicados
 * em `DatabaseDataType` ou nulo caso o tipo não seja suportado pelo Engine.
 * @property {string} nativeDataType Tipo nativo que irá variar de acordo com o SGBD consultado.
 * @property {?number} charLength Tamanho máximo em caracteres das colunas do tipo `'char'` e
 * `'varchar'`.
 * @property {?number} numericPrecision Precisão dos tipos numéricos.
 * @property {?number} numericScale Escala dos tipos numérico.
 * @property {boolean} nullable Indica que a coluna permite o valor nulo.
 * @property {boolean} unique Indica que a coluna tem uma restrição de unicidade dos
 * valores. Será `true` apenas se a restrição for aplicada exclusivamente a esta coluna. Restrições
 * de unicidade aplicadas em um conjunto de colunas não garantem que os valores individuais
 * de cada coluna são únicos.
 * @property {boolean} sparse Indica que a coluna é otimizada para gravar valores nulos.
 * O conceito de colunas esparsas é exclusivo do Microsoft SQL Server e os demais SGBDs já
 * otimizam a gravação de nulos de forma padrão. No Oracle e PostgreSQL, essa propriedade sempre
 * será `false`.
 * @see module:@nginstack/engine/lib/database/DatabaseDataType
 */
/**
 * @typedef {Object} IndexInfo Informações de um índice da base de dados.
 * @property {string} name Nome do índice.
 * @property {string[]} columns Colunas indexadas.
 * @property {string[]} columnsOrder Array de mesmo tamanho de `columns`, indicando a ordem
 * da coluna no índice. Valores possíveis: `'ASC'` e '`DESC`'.
 * @property {string} filterPredicate Expressão de filtro dos registros indexados. A expressão
 * será apresentada em uma representação interna e específica por SGBD. Não é esperado que ela
 * seja igual à expressão informada no momento da construção do índice e ela pode ser alterada
 * em versões futuras do SGBD.
 * @property {boolean} unique Indica que é um índice único. Índices únicos garantem que os
 * valores contidos neles não se repetem.
 * @property {string} constraintType Tipo da restrição que criou esse índice, caso ele tenha
 * sido criado para validar a chave primária ou alguma outra restrição da tabela. Valores
 * possíveis: `'PRIMARY KEY'` ou `'UNIQUE'`.
 * @property {string} tablespace Nome do *tablespace* que contém este índice. O Microsoft
 * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
 * retornado o nome do *filegroup*, recurso específico desse SGBD que permite implementar
 * uma segregação equivalente a obtida com o uso dos *tablespaces*. Retornará uma string vazia
 * caso seja uma tabela particionada do Oracle ou se a tabela tiver mais de um *filegroup* no
 * Microsoft SQL Server.
 * @property {boolean} compressed Indica se o índice tem o recurso de compressão de chaves
 * habilitado. Esse é um recurso exclusivo do Oracle e essa propriedade sempre será
 * falsa para os demais SGBDs.
 * @property {boolean} valid Indica se o índice é válido e está sendo considerado pelo otimizador
 * dos planos de execução. Um índice poderá ficar inválido temporariamente durante a sua criação,
 * caso a opção *online* esteja ativa, e poderá ficar permanentemente nesse estado caso ocorra uma
 * falha durante a sua criação (no caso do PostgreSQL). Índices também podem ser desativados
 * manualmente pelo DBA.
 */
/**
 * @typedef {Object} TriggerInfo Informações de uma *trigger* em uma tabela da base de dados.
 * @property {string} name Nome da trigger.
 * @property {string[]} eventManipulation Eventos que disparam a trigger. Indica os tipos de
 * operações associadas à tabela que ativam a trigger, podendo ser: `'INSERT'`, `'DELETE'` ou
 * `'UPDATE'`.
 * @property {string} actionOrientation Identifica se a trigger irá disparar para cada registro
 * processado ou uma única vez para cada instrução. Valores possíveis: `'ROW'` ou `'STATEMENT'`.
 * @property {string} actionTiming Indica se a trigger será executada antes, depois ou substituirá
 * o evento de manipulação. Valores possíveis: `'BEFORE'`, `'AFTER'` ou `'INSTEAD OF'`.
 * @property {string} actionCondition Condição que indica se a ação deverá ser executada. A
 * condição será apresentada em uma representação interna e específica por SGBD. Não é esperado
 * que ela seja igual à definição informada no momento da construção da trigger e ela pode ser
 * alterada em versões futuras do SGBD.
 * @property {string} actionStatement Instrução que será executada quando a trigger for ativada. A
 * instrução será apresentada em uma representação interna e específica por SGBD. Não é esperado
 * que ela seja igual à definição informada no momento da construção da trigger e ela pode ser
 * alterada em versões futuras do SGBD.
 * @property {boolean} enabled Indica se a trigger está habilitada.
 */
/**
 * @typedef {Object} ColumnDef Definição de uma coluna a ser utilizada nos métodos de criação
 * e alteração de tabelas.
 * @property {string} name Nome da coluna.
 * @property {string} dataType Tipo normalizado da coluna. Deverá ser um dos tipos indicados
 * em `DatabaseDataType`.
 * @property {number} [charLength] Tamanho máximo em caracteres das colunas do tipo `'char'` e
 * `'varchar'`.
 * @property {number} [numericPrecision=38] Precisão do tipo `'numeric'`. Caso não seja informado,
 * será considerado 38.
 * @property {number} [numericScale=10] Escala do tipo `'numeric'`. Caso não seja informado,
 * será considerado 10.
 * @property {boolean} [nullable=true] Indica que a coluna permite o valor nulo. Caso não seja
 * informado, serão permitidos valores nulos.
 * @property {boolean} [unique] Indica que a coluna tem uma restrição de unicidade dos
 * valores. Será `true` apenas se a restrição for aplicada exclusivamente a esta coluna. Restrições
 * de unicidade aplicadas em um conjunto de colunas não garantem que os valores individuais
 * de cada coluna são únicos.
 * @property {boolean} [sparse] Indica que a coluna é otimizada para gravar valores nulos.
 * O conceito de colunas esparsas é exclusivo do Microsoft SQL Server e os demais SGBDs já
 * otimizam a gravação de nulos de forma padrão. Nos demais SGBDs, esta propriedade será
 * ignorada.
 * @property {boolean} [identity] Indica que esta é a coluna identidade da tabela. Coluna
 * identidade é um conceito exclusivo do Microsoft SQL Server utilizado para criar colunas
 * com auto-incremento. Nos demais SGBDs, esta propriedade será ignorada.
 */
/**
 * @typedef {Object} IndexDef Definição de um índice, utilizada no método de criação de índices.
 * @property {string} name Nome do índice.
 * @property {string[]} columns Colunas indexadas.
 * @property {string[]} [columnsOrder] Array de mesmo tamanho de `columns`, indicando a ordem
 * da coluna no índice. Valores possíveis: `'ASC'` e '`DESC`'. Se não for informado, será
 * considerado ascendente.
 * @property {string} [filterPredicate] Expressão de filtro dos registros indexados. Recurso não
 * suportado no Oracle.
 * @property {boolean} [unique] Indica que é um índice único. Índices únicos garantem que os
 * valores contidos neles não se repetem.
 * @property {string} [tablespace] Nome do *tablespace* onde o índice será criado. O Microsoft
 * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
 * considerado como o *filegroup*, recurso específico desse SGBD que permite implementar
 * uma segregação equivalente a obtida com o uso dos *tablespaces*.
 * @property {boolean} [compressed] Indica se o índice deve comprimir as chaves. Esse é um recurso
 * exclusivo do Oracle e é habilitado por meio da opção "COMPRESS" no comando de criação do índice.
 * Essa opção será ignorada para os demais SGBDs.
 */
/**
 * Classe que permite obter informações do esquema de uma base de dados de forma padronizada
 * em todos os SGBDs suportados pelo Engine.
 *
 * Os nomes das tabelas, colunas, índices, visões e *triggers* retornados pelos métodos
 * desta classe são normalizados em caixa baixa.
 * @param {Database} [database] Base de dados que terá o seu esquema de dados consultado ou
 * alterado.
 * @constructor
 */
declare function DatabaseSchema(database?: Database): void;
declare class DatabaseSchema {
    /** @typedef { import('../database/Database') } Database */
    /**
     * @typedef {Object} TableInfo Informações de uma tabela da base de dados.
     * @property {string} name Nome da tabela.
     * @property {string[]} primaryKey Nome das colunas que definem a chave primária da tabela.
     * @property {string} tablespace Nome do *tablespace* que contém esta tabela. O Microsoft
     * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
     * retornado o nome do *filegroup*, recurso específico desse SGBD que permite implementar
     * uma segregação equivalente a obtida com o uso dos *tablespaces*.
     */
    /**
     * @typedef {Object} ViewInfo Informações de uma visão de tabela na base de dados.
     * @property {string} name Nome da visão.
     * @property {string} definition Definição da visão. A definição será apresentada em uma
     * representação interna e específica por SGBD. Não é esperado que ela seja igual à definição
     * informada no momento da construção da visão e ela pode ser alterada em versões futuras do SGBD.
     */
    /**
     * @typedef {Object} ColumnInfo Informações de uma coluna da base de dados.
     * @property {string} name Nome da coluna.
     * @property {?string} dataType Tipo normalizado da coluna. Deverá ser um dos tipos indicados
     * em `DatabaseDataType` ou nulo caso o tipo não seja suportado pelo Engine.
     * @property {string} nativeDataType Tipo nativo que irá variar de acordo com o SGBD consultado.
     * @property {?number} charLength Tamanho máximo em caracteres das colunas do tipo `'char'` e
     * `'varchar'`.
     * @property {?number} numericPrecision Precisão dos tipos numéricos.
     * @property {?number} numericScale Escala dos tipos numérico.
     * @property {boolean} nullable Indica que a coluna permite o valor nulo.
     * @property {boolean} unique Indica que a coluna tem uma restrição de unicidade dos
     * valores. Será `true` apenas se a restrição for aplicada exclusivamente a esta coluna. Restrições
     * de unicidade aplicadas em um conjunto de colunas não garantem que os valores individuais
     * de cada coluna são únicos.
     * @property {boolean} sparse Indica que a coluna é otimizada para gravar valores nulos.
     * O conceito de colunas esparsas é exclusivo do Microsoft SQL Server e os demais SGBDs já
     * otimizam a gravação de nulos de forma padrão. No Oracle e PostgreSQL, essa propriedade sempre
     * será `false`.
     * @see module:@nginstack/engine/lib/database/DatabaseDataType
     */
    /**
     * @typedef {Object} IndexInfo Informações de um índice da base de dados.
     * @property {string} name Nome do índice.
     * @property {string[]} columns Colunas indexadas.
     * @property {string[]} columnsOrder Array de mesmo tamanho de `columns`, indicando a ordem
     * da coluna no índice. Valores possíveis: `'ASC'` e '`DESC`'.
     * @property {string} filterPredicate Expressão de filtro dos registros indexados. A expressão
     * será apresentada em uma representação interna e específica por SGBD. Não é esperado que ela
     * seja igual à expressão informada no momento da construção do índice e ela pode ser alterada
     * em versões futuras do SGBD.
     * @property {boolean} unique Indica que é um índice único. Índices únicos garantem que os
     * valores contidos neles não se repetem.
     * @property {string} constraintType Tipo da restrição que criou esse índice, caso ele tenha
     * sido criado para validar a chave primária ou alguma outra restrição da tabela. Valores
     * possíveis: `'PRIMARY KEY'` ou `'UNIQUE'`.
     * @property {string} tablespace Nome do *tablespace* que contém este índice. O Microsoft
     * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
     * retornado o nome do *filegroup*, recurso específico desse SGBD que permite implementar
     * uma segregação equivalente a obtida com o uso dos *tablespaces*. Retornará uma string vazia
     * caso seja uma tabela particionada do Oracle ou se a tabela tiver mais de um *filegroup* no
     * Microsoft SQL Server.
     * @property {boolean} compressed Indica se o índice tem o recurso de compressão de chaves
     * habilitado. Esse é um recurso exclusivo do Oracle e essa propriedade sempre será
     * falsa para os demais SGBDs.
     * @property {boolean} valid Indica se o índice é válido e está sendo considerado pelo otimizador
     * dos planos de execução. Um índice poderá ficar inválido temporariamente durante a sua criação,
     * caso a opção *online* esteja ativa, e poderá ficar permanentemente nesse estado caso ocorra uma
     * falha durante a sua criação (no caso do PostgreSQL). Índices também podem ser desativados
     * manualmente pelo DBA.
     */
    /**
     * @typedef {Object} TriggerInfo Informações de uma *trigger* em uma tabela da base de dados.
     * @property {string} name Nome da trigger.
     * @property {string[]} eventManipulation Eventos que disparam a trigger. Indica os tipos de
     * operações associadas à tabela que ativam a trigger, podendo ser: `'INSERT'`, `'DELETE'` ou
     * `'UPDATE'`.
     * @property {string} actionOrientation Identifica se a trigger irá disparar para cada registro
     * processado ou uma única vez para cada instrução. Valores possíveis: `'ROW'` ou `'STATEMENT'`.
     * @property {string} actionTiming Indica se a trigger será executada antes, depois ou substituirá
     * o evento de manipulação. Valores possíveis: `'BEFORE'`, `'AFTER'` ou `'INSTEAD OF'`.
     * @property {string} actionCondition Condição que indica se a ação deverá ser executada. A
     * condição será apresentada em uma representação interna e específica por SGBD. Não é esperado
     * que ela seja igual à definição informada no momento da construção da trigger e ela pode ser
     * alterada em versões futuras do SGBD.
     * @property {string} actionStatement Instrução que será executada quando a trigger for ativada. A
     * instrução será apresentada em uma representação interna e específica por SGBD. Não é esperado
     * que ela seja igual à definição informada no momento da construção da trigger e ela pode ser
     * alterada em versões futuras do SGBD.
     * @property {boolean} enabled Indica se a trigger está habilitada.
     */
    /**
     * @typedef {Object} ColumnDef Definição de uma coluna a ser utilizada nos métodos de criação
     * e alteração de tabelas.
     * @property {string} name Nome da coluna.
     * @property {string} dataType Tipo normalizado da coluna. Deverá ser um dos tipos indicados
     * em `DatabaseDataType`.
     * @property {number} [charLength] Tamanho máximo em caracteres das colunas do tipo `'char'` e
     * `'varchar'`.
     * @property {number} [numericPrecision=38] Precisão do tipo `'numeric'`. Caso não seja informado,
     * será considerado 38.
     * @property {number} [numericScale=10] Escala do tipo `'numeric'`. Caso não seja informado,
     * será considerado 10.
     * @property {boolean} [nullable=true] Indica que a coluna permite o valor nulo. Caso não seja
     * informado, serão permitidos valores nulos.
     * @property {boolean} [unique] Indica que a coluna tem uma restrição de unicidade dos
     * valores. Será `true` apenas se a restrição for aplicada exclusivamente a esta coluna. Restrições
     * de unicidade aplicadas em um conjunto de colunas não garantem que os valores individuais
     * de cada coluna são únicos.
     * @property {boolean} [sparse] Indica que a coluna é otimizada para gravar valores nulos.
     * O conceito de colunas esparsas é exclusivo do Microsoft SQL Server e os demais SGBDs já
     * otimizam a gravação de nulos de forma padrão. Nos demais SGBDs, esta propriedade será
     * ignorada.
     * @property {boolean} [identity] Indica que esta é a coluna identidade da tabela. Coluna
     * identidade é um conceito exclusivo do Microsoft SQL Server utilizado para criar colunas
     * com auto-incremento. Nos demais SGBDs, esta propriedade será ignorada.
     */
    /**
     * @typedef {Object} IndexDef Definição de um índice, utilizada no método de criação de índices.
     * @property {string} name Nome do índice.
     * @property {string[]} columns Colunas indexadas.
     * @property {string[]} [columnsOrder] Array de mesmo tamanho de `columns`, indicando a ordem
     * da coluna no índice. Valores possíveis: `'ASC'` e '`DESC`'. Se não for informado, será
     * considerado ascendente.
     * @property {string} [filterPredicate] Expressão de filtro dos registros indexados. Recurso não
     * suportado no Oracle.
     * @property {boolean} [unique] Indica que é um índice único. Índices únicos garantem que os
     * valores contidos neles não se repetem.
     * @property {string} [tablespace] Nome do *tablespace* onde o índice será criado. O Microsoft
     * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
     * considerado como o *filegroup*, recurso específico desse SGBD que permite implementar
     * uma segregação equivalente a obtida com o uso dos *tablespaces*.
     * @property {boolean} [compressed] Indica se o índice deve comprimir as chaves. Esse é um recurso
     * exclusivo do Oracle e é habilitado por meio da opção "COMPRESS" no comando de criação do índice.
     * Essa opção será ignorada para os demais SGBDs.
     */
    /**
     * Classe que permite obter informações do esquema de uma base de dados de forma padronizada
     * em todos os SGBDs suportados pelo Engine.
     *
     * Os nomes das tabelas, colunas, índices, visões e *triggers* retornados pelos métodos
     * desta classe são normalizados em caixa baixa.
     * @param {Database} [database] Base de dados que terá o seu esquema de dados consultado ou
     * alterado.
     * @constructor
     */
    constructor(database?: Database);
    /** @private */
    private database_;
    /** @private */
    private dbType_;
    /** @private */
    private timestampRegExp_;
    /** @private */
    private timestampZoneRegExp_;
    /**
     * Logger utilizado pela classe DatabaseSchema.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Base de dados que terá o seu esquema de dados consultado ou alterado.
     * @type {Database}
     */
    database: Database;
    private nativeTypeToDataType_;
    private formatColumnDataTypeDef_;
    private formatColumnDef_;
    private formatTableNamesFilter_;
    private formatOptionalFilter_;
    private getCurrentDatabaseName_;
    /** @private */
    private databaseName_;
    private findUniqueConstraint_;
    private findPrimaryKeyConstraint_;
    private checkIdentifierNames_;
    private supportsExecuteDDL_;
    private executeDDL_;
    private getColumns_;
    private getTableIndexes_;
    private updateSchemaVersion_;
    private normalizeColumnDefs_;
    private notifyObservers_;
    /**
     * Obtém informações das tabelas públicas do esquema padrão da base de dados.
     *
     * Não serão retornadas informações das visões de tabelas. Para isso, utilize o
     * método {@link #getViews}.
     * @example
     * const DatabaseSchema = require('@nginstack/engine/lib/schema/DatabaseSchema');
     * const schema = new DatabaseSchema(database);
     * const tables = schema.getTables();
     * const info = tables.find(function (elem) {
     *   return elem.name === 'igroupuser';
     * });
     * info.name; => 'igroupuser'
     * info.primaryKey; // => ['ikey']
     * @param {string[]} [tableNames] Nomes das tabelas cuja informação de esquema de ser obtida. Caso
     * não seja informado, serão retornadas as informações de todas as tabelas do esquema corrente.
     * @return {TableInfo[]} Informações das tabelas da base de dados.
     */
    getTables(tableNames?: string[]): TableInfo[];
    /**
     * Obtém informações das colunas de uma tabela da base de dados.
     * @example
     * const DatabaseSchema = require('@nginstack/engine/lib/schema/DatabaseSchema');
     * const schema = new DatabaseSchema(database);
     * const columns = schema.getTableColumns('iGroupUser');
     * let info = columns.find(function (elem) {
     *   return elem.name === 'ikey';
     * });
     * info.name; // => 'ikey'
     * info.dataType; // => 'integer'
     * info.nullable; // =>  false
     * @param {string} tableName Nome da tabela que será consultada.
     * @return {ColumnInfo[]} Informações sobre as colunas de uma tabela da base de dados.
     */
    getTableColumns(tableName: string): ColumnInfo[];
    /**
     * Obtém informações dos índices de uma tabela da base de dados.
     * @param {string} tableName Nome da tabela que será consultada.
     * @return {IndexInfo[]} Informações sobre os índices de uma tabela da base de dados.
     */
    getTableIndexes(tableName: string): IndexInfo[];
    /**
     * Obtém informações dos *triggers* de uma tabela da base de dados.
     * @param {string} tableName Nome da tabela que será consultada.
     * @return {TriggerInfo[]} Informações sobre os *triggers* de uma tabela da base de dados.
     */
    getTableTriggers(tableName: string): TriggerInfo[];
    /**
     * Obtém informações das visões de tabelas públicas do esquema padrão da base de dados.
     *
     * @param {string[]} [viewNames] Nomes das visões cuja informação de esquema de ser obtida. Caso
     * não seja informado, serão retornadas as informações de todas as visões do esquema corrente.
     * @return {ViewInfo[]} Informações das visões de tabelas da base de dados.
     */
    getViews(viewNames?: string[]): ViewInfo[];
    /**
     * Obtém informações das colunas de uma visão da base de dados.
     *
     * Observação: o SGBD PostgreSQL tem limitações na rastreabilidade das restrições de colunas
     * das visões e a propriedade `nullable` não preserva o valor deste atributo da coluna de origem.
     * @param {string} tableName Nome da visão que será consultada.
     * @return {ColumnInfo[]} Informações sobre as colunas de uma visão da base de dados.
     */
    getViewColumns(viewName: any): ColumnInfo[];
    /**
     * Obtém as informações das colunas de todas as tabelas e visões da base de dados.
     * @return {Record<string, ColumnInfo[]>} Objeto cujas propriedades serão os nomes das
     * tabelas ou visões, e os valores serão um array com as informações das colunas da tabela
     * ou visão associada.
     */
    getAllTablesAndViewsColumns(): Record<string, ColumnInfo[]>;
    /**
     * Obtém informações dos índices de todas as tabelas da base de dados.
     * @return {Record<string, IndexInfo[]>} Objeto cujas propriedades serão os nomes das
     * tabelas que possuem índices e os valores serão um array com as informações dos índices
     * da tabela associada.
     */
    getAllTablesIndexes(): Record<string, IndexInfo[]>;
    /**
     * Cria uma tabela na base de dados.
     * @param {string} tableName Nome da tabela a ser criada.
     * @param {ColumnDef[]} columns Colunas da tabela a ser criada.
     * @param {Object} [options] Opções da criação da tabela.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @param {string[]} options.primaryKey Colunas que definem a chave primária da tabela.
     * @param {string} options.tablespace Tablespace onde a tabela deverá ser criada.
     * @param {string} options.indexTablespace Tablespace onde o índice da chave primária deve ser
     * criado.
     * @return {string} Comando DDL de criação da tabela.
     */
    createTable(
        tableName: string,
        columns: ColumnDef[],
        options?: {
            dryRun: boolean;
            primaryKey: string[];
            tablespace: string;
            indexTablespace: string;
        }
    ): string;
    /**
     * Remove a tabela da base de dados.
     * @param {string} tableName Nome da tabela a ser removida.
     * @param {Object} [options] Opções da remoção da tabela.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @return {string} Comando de remoção da tabela.
     */
    dropTable(
        tableName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
    /**
     * Altera as configurações gerais de uma tabela.
     *
     * Atualmente somente é possível alterar a chave primária. Para modificar as colunas de uma
     * tabela, utilize {@link #alterTableColumns}.
     *
     * Dependendo das modificações realizadas, este método poderá retornar um ou vários comandos
     * separados por ";". No caso do Oracle, múltiplos comandos serão contidos em um bloco PL/SQL.
     * @param {string} tableName Nome da tabela que será modificada.
     * @param {Object} options Opções de alteração da tabela.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @param {string[]} options.primaryKey Colunas que definem a chave primária da tabela.
     * @param {string} options.indexTablespace Tablespace onde o índice da chave primária deve ser
     * criado.
     * @return {string} Comando de alteração da tabela informada.
     */
    alterTable(
        tableName: string,
        options: {
            dryRun: boolean;
            primaryKey: string[];
            indexTablespace: string;
        }
    ): string;
    /**
     * Adiciona as colunas na tabela informada.
     * @param {string} tableName Nome da tabela que terá as colunas adicionadas.
     * @param {ColumnDef[]} columns Colunas a serem adicionadas na tabela.
     * @param {Object} [options] Opções da adição das colunas na tabela.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @return {string} Comando de adição das colunas na tabela informada.
     */
    addTableColumns(
        tableName: string,
        columns: ColumnDef[],
        options?: {
            dryRun: boolean;
        }
    ): string;
    /**
     * Remove as colunas na tabela informada.
     *
     * **Observação**: no Oracle as colunas são apenas marcadas como não utilizadas, não sendo
     * removidas fisicamente da tabela. Para reclamar o espaço utilizado por essas colunas, deve
     * ser utilizado o comando: `ALTER TABLE <table_name> DROP UNUSED COLUMNS`. Esse comando irá
     * bloquear a tabela durante a remoção das colunas. Avalie utilizar a opção `CHECKPOINT` para
     * minimizar o tamanho do *undo log* durante a operação. Mais detalhes em
     * https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/ALTER-TABLE.html.
     * @param {string} tableName Nome da tabela que terá as colunas removidas.
     * @param {string[]} columns Nome das colunas a serem removidas.
     * @param {Object} [options] Opções da remoção de colunas na tabela.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @return {string} Comando de remoção das colunas na tabela informada.
     */
    dropTableColumns(
        tableName: string,
        columns: string[],
        options?: {
            dryRun: boolean;
        }
    ): string;
    /**
     * Altera as colunas da tabela informada.
     *
     * Dependendo das modificações realizadas, este método poderá retornar um ou vários comandos
     * separados por ";". No caso do Oracle, múltiplos comandos serão contidos em um bloco PL/SQL.
     *
     * **Observações**:
     *
     * 1) O Microsoft SQL Server não permite modificar o tipo de uma coluna que participa
     * de índices, incluindo o índice utilizado para validar a chave primária. No caso da chave
     * primária, ela será removida antes da alteração do tipo e restaurada logo após a mudança.
     * Enquanto durar a conversão e caso o comando de alteração de tipo falhe, a tabela ficará
     * sem chave primária. Em caso de falha, ela precisará ser restaurada via método
     * {@link #alterTable}. No caso dos demais índices, eles serão removidos e precisarão ser
     * recriados posteriormente utilizando o método {@link #createTableIndex}.
     * 2) O Oracle não permite a alteração do tipo de dado de uma coluna se ela possuir valores não
     * nulos. É permitido apenas alterar o tamanho de colunas do tipo `char` ou `varchar` e a precisão
     * e escala dos tipos numéricos.
     * @param {string} tableName Nome da tabela que terá as colunas alteradas.
     * @param {ColumnDef[]} columns Novas definições das colunas que serão alteradas na tabela. As
     * colunas não informadas serão preservadas.
     * @param {Object} [options] Opções da alteração das colunas na tabela.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @param {string} options.indexTablespace Tablespace que deve ser utilizado pelo índice da
     * chave primária, caso ele precise ser recriado.
     * @return {string} Comando de alteração das colunas na tabela informada.
     */
    alterTableColumns(
        tableName: string,
        columns: ColumnDef[],
        options?: {
            dryRun: boolean;
            indexTablespace: string;
        }
    ): string;
    /**
     * Altera o nome de uma coluna de uma tabela da base de dados.
     * @param {string} tableName Nome da tabela que terá a coluna renomeada.
     * @param {string} columnName Nome atual da coluna
     * @param {string} newColumnName Nome da coluna após ser renomeada.
     * @param {Object} [options] Opções da alteração da coluna.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @return {string} Comando DDL de alteração da coluna.
     */
    renameTableColumn(
        tableName: string,
        columnName: string,
        newColumnName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
    /**
     * Indica se a base de dados suporta a criação de índices sem bloqueio das tabelas indexadas.
     * @return {boolean} True se a base de dados suportar a criação de índices concorrentemente com
     * a utilização das tabelas.
     */
    supportsOnlineIndexCreation(): boolean;
    /**
     * Indica se a base de dados suporta a remoção de índices sem bloqueio das tabelas indexadas.
     * @return {boolean} True se a base de dados suportar a remoção de índices concorrentemente com
     * a utilização das tabelas.
     */
    supportsOnlineIndexDrop(): boolean;
    /**
     * Cria um índice na base de dados.
     * @param {string} tableName Nome da tabela na qual o índice será criado.
     * @param {IndexDef} indexDef Definição do índice que será criado.
     * @param {Object} [options] Opções da criação do índice.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @param {boolean} options.online Indica que o índice deve ser criado sem bloquear a
     * leitura da tabela indexada. Esse recurso não é suportado em todas as versões dos SGBDs, sendo
     * uma funcionalidade exclusiva da versão "Enterprise" do Oracle e do Microsoft SQL Server.
     * @return {string} Comando DDL de criação do índice.
     */
    createTableIndex(
        tableName: string,
        indexDef: IndexDef,
        options?: {
            dryRun: boolean;
            online: boolean;
        }
    ): string;
    /**
     * Altera o nome um índice na base de dados.
     * @param {string} tableName Nome da tabela que contém o índice que será renomeado.
     * @param {string} indexName Nome atual do índice.
     * @param {string} newIndexName Nome que o índice terá após ser renomeado.
     * @param {Object} [options] Opções da alteração do índice.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @return {string} Comando DDL de alteração do índice.
     */
    renameTableIndex(
        tableName: string,
        indexName: string,
        newIndexName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
    /**
     * Remove um índice da base de dados.
     * @param {string} tableName Nome da tabela que contém o índice que será removido.
     * @param {string} indexName Nome do índice que será removido.
     * @param {Object} [options] Opções da remoção do índice.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @param {boolean} options.online Indica que o índice deve ser removido sem bloquear a
     * leitura da tabela indexada. Esse recurso não é suportado em todas as versões dos SGBDs, sendo
     * uma funcionalidade exclusiva da versão "Enterprise" do Oracle (12c ou superior) e do
     * Microsoft SQL Server.
     * @return {string} Comando DDL de remoção do índice.
     */
    dropTableIndex(
        tableName: string,
        indexName: string,
        options?: {
            dryRun: boolean;
            online: boolean;
        }
    ): string;
    /**
     * Remove a visão da base de dados.
     * @param {string} viewName Nome da visão a ser removida.
     * @param {Object} [options] Opções da remoção da visão.
     * @param {boolean} options.dryRun Indica que o comando será gerado e retornado por esta função,
     * mas não será executado na base de dados.
     * @return {string} Comando de remoção da visão.
     */
    dropView(
        viewName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
}
declare namespace DatabaseSchema {
    export {
        registerObserver,
        deregisterObserver,
        Database,
        TableInfo,
        ViewInfo,
        ColumnInfo,
        IndexInfo,
        TriggerInfo,
        ColumnDef,
        IndexDef,
    };
}
/**
 * Registra um observador das alterações no esquema da base de dados realizadas por meio desta
 * classe.
 *
 * Observadores também podem ser registrados de forma global no sistema por meio da propriedade
 * `databaseSchemaObservers´ na classe de configuração "/Configuração/Base de dados".
 * @param {import('./DatabaseSchemaObserver')} observer Observador a ser registrado.
 */
declare function registerObserver(observer: import('./DatabaseSchemaObserver')): void;
/**
 * Remove um observador registrado previamente pela função `registerObserver`.
 * @param {import('./DatabaseSchemaObserver')} observer Observador que irá parar de observar
 * as alterações no esquema da base de dados.
 */
declare function deregisterObserver(observer: import('./DatabaseSchemaObserver')): void;
type Database = import('../database/Database');
/**
 * Informações de uma tabela da base de dados.
 */
interface TableInfo {
    /**
     * Nome da tabela.
     */
    name: string;
    /**
     * Nome das colunas que definem a chave primária da tabela.
     */
    primaryKey: string[];
    /**
     * Nome do *tablespace* que contém esta tabela. O Microsoft
     * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
     * retornado o nome do *filegroup*, recurso específico desse SGBD que permite implementar
     * uma segregação equivalente a obtida com o uso dos *tablespaces*.
     */
    tablespace: string;
}
/**
 * Informações de uma visão de tabela na base de dados.
 */
interface ViewInfo {
    /**
     * Nome da visão.
     */
    name: string;
    /**
     * Definição da visão. A definição será apresentada em uma
     * representação interna e específica por SGBD. Não é esperado que ela seja igual à definição
     * informada no momento da construção da visão e ela pode ser alterada em versões futuras do SGBD.
     */
    definition: string;
}
/**
 * Informações de uma coluna da base de dados.
 */
interface ColumnInfo {
    /**
     * Nome da coluna.
     */
    name: string;
    /**
     * Tipo normalizado da coluna. Deverá ser um dos tipos indicados
     * em `DatabaseDataType` ou nulo caso o tipo não seja suportado pelo Engine.
     */
    dataType: string | null;
    /**
     * Tipo nativo que irá variar de acordo com o SGBD consultado.
     */
    nativeDataType: string;
    /**
     * Tamanho máximo em caracteres das colunas do tipo `'char'` e
     * `'varchar'`.
     */
    charLength: number | null;
    /**
     * Precisão dos tipos numéricos.
     */
    numericPrecision: number | null;
    /**
     * Escala dos tipos numérico.
     */
    numericScale: number | null;
    /**
     * Indica que a coluna permite o valor nulo.
     */
    nullable: boolean;
    /**
     * Indica que a coluna tem uma restrição de unicidade dos
     * valores. Será `true` apenas se a restrição for aplicada exclusivamente a esta coluna. Restrições
     * de unicidade aplicadas em um conjunto de colunas não garantem que os valores individuais
     * de cada coluna são únicos.
     */
    unique: boolean;
    /**
     * Indica que a coluna é otimizada para gravar valores nulos.
     * O conceito de colunas esparsas é exclusivo do Microsoft SQL Server e os demais SGBDs já
     * otimizam a gravação de nulos de forma padrão. No Oracle e PostgreSQL, essa propriedade sempre
     * será `false`.
     */
    sparse: boolean;
}
/**
 * Informações de um índice da base de dados.
 */
interface IndexInfo {
    /**
     * Nome do índice.
     */
    name: string;
    /**
     * Colunas indexadas.
     */
    columns: string[];
    /**
     * Array de mesmo tamanho de `columns`, indicando a ordem
     * da coluna no índice. Valores possíveis: `'ASC'` e '`DESC`'.
     */
    columnsOrder: string[];
    /**
     * Expressão de filtro dos registros indexados. A expressão
     * será apresentada em uma representação interna e específica por SGBD. Não é esperado que ela
     * seja igual à expressão informada no momento da construção do índice e ela pode ser alterada
     * em versões futuras do SGBD.
     */
    filterPredicate: string;
    /**
     * Indica que é um índice único. Índices únicos garantem que os
     * valores contidos neles não se repetem.
     */
    unique: boolean;
    /**
     * Tipo da restrição que criou esse índice, caso ele tenha
     * sido criado para validar a chave primária ou alguma outra restrição da tabela. Valores
     * possíveis: `'PRIMARY KEY'` ou `'UNIQUE'`.
     */
    constraintType: string;
    /**
     * Nome do *tablespace* que contém este índice. O Microsoft
     * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
     * retornado o nome do *filegroup*, recurso específico desse SGBD que permite implementar
     * uma segregação equivalente a obtida com o uso dos *tablespaces*. Retornará uma string vazia
     * caso seja uma tabela particionada do Oracle ou se a tabela tiver mais de um *filegroup* no
     * Microsoft SQL Server.
     */
    tablespace: string;
    /**
     * Indica se o índice tem o recurso de compressão de chaves
     * habilitado. Esse é um recurso exclusivo do Oracle e essa propriedade sempre será
     * falsa para os demais SGBDs.
     */
    compressed: boolean;
    /**
     * Indica se o índice é válido e está sendo considerado pelo otimizador
     * dos planos de execução. Um índice poderá ficar inválido temporariamente durante a sua criação,
     * caso a opção *online* esteja ativa, e poderá ficar permanentemente nesse estado caso ocorra uma
     * falha durante a sua criação (no caso do PostgreSQL). Índices também podem ser desativados
     * manualmente pelo DBA.
     */
    valid: boolean;
}
/**
 * Informações de uma *trigger* em uma tabela da base de dados.
 */
interface TriggerInfo {
    /**
     * Nome da trigger.
     */
    name: string;
    /**
     * Eventos que disparam a trigger. Indica os tipos de
     * operações associadas à tabela que ativam a trigger, podendo ser: `'INSERT'`, `'DELETE'` ou
     * `'UPDATE'`.
     */
    eventManipulation: string[];
    /**
     * Identifica se a trigger irá disparar para cada registro
     * processado ou uma única vez para cada instrução. Valores possíveis: `'ROW'` ou `'STATEMENT'`.
     */
    actionOrientation: string;
    /**
     * Indica se a trigger será executada antes, depois ou substituirá
     * o evento de manipulação. Valores possíveis: `'BEFORE'`, `'AFTER'` ou `'INSTEAD OF'`.
     */
    actionTiming: string;
    /**
     * Condição que indica se a ação deverá ser executada. A
     * condição será apresentada em uma representação interna e específica por SGBD. Não é esperado
     * que ela seja igual à definição informada no momento da construção da trigger e ela pode ser
     * alterada em versões futuras do SGBD.
     */
    actionCondition: string;
    /**
     * Instrução que será executada quando a trigger for ativada. A
     * instrução será apresentada em uma representação interna e específica por SGBD. Não é esperado
     * que ela seja igual à definição informada no momento da construção da trigger e ela pode ser
     * alterada em versões futuras do SGBD.
     */
    actionStatement: string;
    /**
     * Indica se a trigger está habilitada.
     */
    enabled: boolean;
}
/**
 * Definição de uma coluna a ser utilizada nos métodos de criação
 * e alteração de tabelas.
 */
interface ColumnDef {
    /**
     * Nome da coluna.
     */
    name: string;
    /**
     * Tipo normalizado da coluna. Deverá ser um dos tipos indicados
     * em `DatabaseDataType`.
     */
    dataType: string;
    /**
     * Tamanho máximo em caracteres das colunas do tipo `'char'` e
     * `'varchar'`.
     */
    charLength?: number;
    /**
     * Precisão do tipo `'numeric'`. Caso não seja informado,
     * será considerado 38.
     */
    numericPrecision?: number;
    /**
     * Escala do tipo `'numeric'`. Caso não seja informado,
     * será considerado 10.
     */
    numericScale?: number;
    /**
     * Indica que a coluna permite o valor nulo. Caso não seja
     * informado, serão permitidos valores nulos.
     */
    nullable?: boolean;
    /**
     * Indica que a coluna tem uma restrição de unicidade dos
     * valores. Será `true` apenas se a restrição for aplicada exclusivamente a esta coluna. Restrições
     * de unicidade aplicadas em um conjunto de colunas não garantem que os valores individuais
     * de cada coluna são únicos.
     */
    unique?: boolean;
    /**
     * Indica que a coluna é otimizada para gravar valores nulos.
     * O conceito de colunas esparsas é exclusivo do Microsoft SQL Server e os demais SGBDs já
     * otimizam a gravação de nulos de forma padrão. Nos demais SGBDs, esta propriedade será
     * ignorada.
     */
    sparse?: boolean;
    /**
     * Indica que esta é a coluna identidade da tabela. Coluna
     * identidade é um conceito exclusivo do Microsoft SQL Server utilizado para criar colunas
     * com auto-incremento. Nos demais SGBDs, esta propriedade será ignorada.
     */
    identity?: boolean;
}
/**
 * Definição de um índice, utilizada no método de criação de índices.
 */
interface IndexDef {
    /**
     * Nome do índice.
     */
    name: string;
    /**
     * Colunas indexadas.
     */
    columns: string[];
    /**
     * Array de mesmo tamanho de `columns`, indicando a ordem
     * da coluna no índice. Valores possíveis: `'ASC'` e '`DESC`'. Se não for informado, será
     * considerado ascendente.
     */
    columnsOrder?: string[];
    /**
     * Expressão de filtro dos registros indexados. Recurso não
     * suportado no Oracle.
     */
    filterPredicate?: string;
    /**
     * Indica que é um índice único. Índices únicos garantem que os
     * valores contidos neles não se repetem.
     */
    unique?: boolean;
    /**
     * Nome do *tablespace* onde o índice será criado. O Microsoft
     * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
     * considerado como o *filegroup*, recurso específico desse SGBD que permite implementar
     * uma segregação equivalente a obtida com o uso dos *tablespaces*.
     */
    tablespace?: string;
    /**
     * Indica se o índice deve comprimir as chaves. Esse é um recurso
     * exclusivo do Oracle e é habilitado por meio da opção "COMPRESS" no comando de criação do índice.
     * Essa opção será ignorada para os demais SGBDs.
     */
    compressed?: boolean;
}
