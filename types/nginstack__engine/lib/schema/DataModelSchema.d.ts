export = DataModelSchema;
/**
 * Classe que permite obter o esquema da base de dados configurado nos arquivos de definição
 * de modelo (x-model e x-class).
 *
 * Os nomes das tabelas, colunas e índices retornados pelos métodos desta classe são
 * normalizados em caixa baixa.
 * @param {DataModelSchemaOptions|Partial<DataModelSchemaOptions>} [options] Opções no
 * processamento das definições das classes de dados.
 * @constructor
 */
declare function DataModelSchema(
    options?: DataModelSchemaOptions | Partial<DataModelSchemaOptions>
): void;
declare class DataModelSchema {
    /**
     * Classe que permite obter o esquema da base de dados configurado nos arquivos de definição
     * de modelo (x-model e x-class).
     *
     * Os nomes das tabelas, colunas e índices retornados pelos métodos desta classe são
     * normalizados em caixa baixa.
     * @param {DataModelSchemaOptions|Partial<DataModelSchemaOptions>} [options] Opções no
     * processamento das definições das classes de dados.
     * @constructor
     */
    constructor(options?: DataModelSchemaOptions | Partial<DataModelSchemaOptions>);
    /** @private */
    private baseClass_;
    /** @private */
    private classDefManager_;
    /** @private */
    private classesTable_;
    /** @private */
    private iVfs_;
    /** @private */
    private tables_;
    /** @private */
    private columnsPerTable_;
    /** @private */
    private ignoreClassDefErrors_;
    /** @private */
    private logger_;
    private classHasModelDefFiles_;
    private iterateClassesWithDef_;
    /**
     * Verifica se as definições de classes do sistema possuem erros que impeçam a obtenção da
     * configuração do modelo de dados.
     * @return {ClassDefError[]} Erros nas definições das classes.
     */
    scanForClassDefErrors(): ClassDefError[];
    /**
     * Obtém informações das tabelas declaradas no modelo de dados.
     * @return {TableInfo[]} Informações das tabelas definidas no modelo de dados.
     */
    getTables(): TableInfo[];
    /**
     * Obtém informações das colunas declaradas para a tabela no modelo de dados.
     * @param {string} tableName Nome da tabela que será consultada.
     * @return {ColumnInfo[]} Informações sobre as colunas definidas para a tabela no modelo de dados.
     */
    getTableColumns(tableName: string): ColumnInfo[];
    /**
     * Obtém informações dos índices declarados para a tabela no modelo de dados.
     * @param {string} tableName Nome da tabela que será consultada.
     * @return {IndexInfo[]} Informações sobre os índices definidos para a tabela no modelo de dados.
     */
    getTableIndexes(tableName: string): IndexInfo[];
    /**
     * Nomes das tabelas que podem existir na base de dados, mas que não têm o esquema de dados
     * gerenciado pelo sistema ou que foram criadas automaticamente pelas tabela de agregação.
     *
     * O cadastro dessas tabelas pode ser realizado pelo administrador do sistema por meio da grade
     * "Tabelas" no processo "Desenvolvimento > Base de dados > Estruturas de dados não gerenciadas" ou
     * via propriedade
     * {@link module:@nginstack/engine/lib/classdef/ModelDef~ModelDef#managedDatabaseSchema managedDatabaseSchema}.
     * @return {string[]} Nomes das tabelas que não têm o esquema de dados gerenciado pelo sistema.
     */
    getUnmanagedTableNames(): string[];
    /**
     * Retorna as colunas da tabela que não estão definidas no modelo de dados e que não são gerenciadas
     * pelo sistema.
     *
     * O cadastro dessas colunas pode ser realizado pelo administrador do sistema por meio da grade
     * "Colunas" no processo "Desenvolvimento > Base de dados > Estruturas de dados não gerenciadas".
     * @param {string} tableName Nome da tabela que se deseja obter as colunas.
     * @returns {string[]} Nomes das colunas.
     */
    getUnmanagedTableColumns(tableName: string): string[];
    /**
     * Retorna os índices definidos para uma tabela que não são definidos no modelo de dados e que não
     * são gerenciadas pelo sistema.
     *
     * O cadastro desses índices pode ser realizado pelo administrador do sistema por meio de registros
     * da classe "Outros Índices" (-1898139664) no processo "Desenvolvimento > Base de dados > Outros
     * Índices".
     * @param {string} tableName Nome da tabela que se deseja obter os índices.
     * @returns {string[]} Nomes dos índices.
     */
    getUnmanagedTableIndexes(tableName: string): string[];
}
declare namespace DataModelSchema {
    export {
        getRemoteSchema,
        formatUniqueIndexName,
        Database,
        Field,
        TableInfo,
        ColumnDataTypeDef,
        ReferencedTable,
        ColumnInfo,
        IndexInfo,
        ClassDefError,
        DataModelSchemaInfo,
        DataModelSchemaOptions,
    };
}
/**
 * Obtém o esquema de dados configurado nos arquivos de definição de modelo (x-model e x-class)
 * da base de dados informada.
 * @param {Database} database Base de dados da qual se deseja obter as informações do esquema
 * do modelo de dados.
 * @param {DataModelSchemaOptions|Partial<DataModelSchemaOptions>} [options] Opções no
 * processamento das definições das classes de dados.
 * @return {DataModelSchemaInfo} Esquema definido pelo modelo de dados da base remota informada.
 */
declare function getRemoteSchema(
    database: Database,
    options?: DataModelSchemaOptions | Partial<DataModelSchemaOptions>
): DataModelSchemaInfo;
/**
 * Formata um nome de índice único a partir do nome da tabela e das colunas indexadas.
 * @param {string} tableName Nome da tabela.
 * @param {string[]} columns Nomes das colunas.
 * @return {string} Nome do índice.
 */
declare function formatUniqueIndexName(tableName: string, columns: string[]): string;
type Database = import('../database/Database');
type Field = import('../classdef/Field');
/**
 * Informações de uma tabela da base de dados.
 */
interface TableInfo {
    /**
     * Nome da tabela normalizado em caixa baixa.
     */
    name: string;
    /**
     * Nome da tabela declarado na classe de dados, sem nenhum tipo
     * de normalização.
     */
    displayName: string;
    /**
     * Nome das colunas que definem a chave primária da tabela.
     */
    primaryKey: string[];
    /**
     * Classe que definiu a tabela.
     */
    tableClass: number;
    /**
     * Nome da classe que definiu a tabela.
     */
    tableClassName: string;
    /**
     * Nome do campo que armazena a chave do registro nesta tabela.
     */
    keyFieldName: string;
    /**
     * Nome do campo que armazena a classe do registro nesta tabela.
     */
    classFieldName: string;
    /**
     * Nome do campo que armazena a versão do registro nesta tabela.
     */
    versionFieldName: string;
    /**
     * Estratégia de como os dados desta tabela
     * devem ser gravados no cache local do Engine.
     */
    cacheStrategy: typeof TableCacheStrategy;
    /**
     * Indica que os processos de atualização do sistema
     * devem sincronizar os registros desta tabela.
     */
    upgradeMustSyncRecords: boolean;
    /**
     * Indica que o esquema da tabela deve ser atualizado
     * pelos processos de atualização do sistema e de atualização do esquema da base de dados.
     */
    managedDatabaseSchema: boolean;
    /**
     * Nome do *tablespace* que deve ser utilizado para criar esta
     * tabela.
     */
    tablespace: string;
    /**
     * Nome do *tablespace* que deve ser utilizado para os índices
     * desta tabela.
     */
    indexTablespace: string;
    /**
     * Tipo de dado utilizado na base de dados para os campos
     * do tipo "integer".
     */
    integerDatabaseType: string;
    /**
     * Erros na declaração desta tabela que impedem a sua criação ou
     * atualização.
     */
    errors: string[];
    /**
     * Alertas que indicam a necessidade de revisar a definição desta
     * tabela, mas que não impedem a sua criação ou atualização.
     */
    warnings: string[];
}
/**
 * Definição do tipo de dado de uma coluna. Em uma hierarquia
 * de classes, uma coluna pode ter várias definições do tipo de dados que são combinadas. Este
 * objeto representa uma dessas definições.
 */
interface ColumnDataTypeDef {
    /**
     * Tipo normalizado da coluna. Deverá ser um dos tipos indicados
     * em `DatabaseDataType` ou nulo caso o tipo não seja suportado pelo Engine.
     */
    dataType: string;
    /**
     * Tamanho máximo em caracteres das colunas do tipo `'char'` e
     * `'varchar'`.
     */
    charLength: number | null;
    /**
     * Chave da classe de dados onde esta definição foi realizada.
     */
    sourceClass: number;
}
/**
 * Tabela referenciada por uma coluna lookup.
 */
interface ReferencedTable {
    /**
     * Nome da tabela que contém os registros referenciados pelas chaves
     * contidas na coluna.
     */
    name: string;
    /**
     * Chave da classe de dados que contém os registros
     * referenciados pelas chaves contidas na coluna. Se uma coluna for definida por mais
     * de uma classe de dados, será retornada a classe ancestral comum a todas as definições de
     * `classKey` encontradas.
     */
    baseClass: number;
    /**
     * Indica se a coluna deve ser verificada na validação
     * de integridade referencial durante a exclusão de registros da tabela referenciada. Se uma
     * coluna for definida por mais de uma classe de dados, será `true` se houver ao menos uma
     * definição com validação de integridade referencial ativa.
     */
    integrityCheck: boolean;
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
    dataType: string;
    /**
     * Tamanho máximo em caracteres das colunas do tipo `'char'` e
     * `'varchar'`.
     */
    charLength: number | null;
    /**
     * Indica que a coluna permite valores nulos.
     */
    nullable: boolean;
    /**
     * Indica que a coluna é otimizada para gravar valores nulos.
     * O conceito de colunas esparsas é exclusivo do Microsoft SQL Server e os demais SGBDs já
     * otimizam a gravação de nulos de forma padrão. No Oracle e PostgreSQL, essa propriedade sempre
     * será `false`.
     */
    sparse: boolean;
    /**
     * Tabelas que contém os registros referenciados
     * pelas chaves contidas nesta coluna. Será vazio em colunas que não sejam do tipo lookup.
     */
    referencedTables: ReferencedTable[];
    /**
     * Chave da classe de dados que definiu a coluna originalmente.
     */
    sourceClass: number;
    /**
     * Chaves das classes onde esta coluna
     * foi configurada para permitir a sua alteração até em registros de chave negativa.
     */
    userCanChangeNegativeKeyClasses: number[];
    /**
     * Array contendo as distintas configurações
     * de tipo do dado e tamanho da coluna encontradas na hierarquia de classes que define a tabela.
     */
    dataTypeDefs: ColumnDataTypeDef[];
    /**
     * Erros na declaração desta coluna que impedem a sua criação ou
     * atualização.
     */
    errors: string[];
    /**
     * Alertas que indicam a necessidade de revisar a definição desta
     * coluna, mas que não impedem a sua criação ou atualização.
     */
    warnings: string[];
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
     * Nome do *tablespace* onde o índice deve ser criado. O Microsoft
     * SQL Server não possui o conceito de *tablespaces*, portanto, nesse SGBD específico, será
     * considerado como o *filegroup*, recurso específico desse SGBD que permite implementar
     * uma segregação equivalente a obtida com o uso dos *tablespaces*. Um valor vazio indica
     * que não há uma configuração específica para esse índice e ele deve ser criado no *tablespace*
     * padrão.
     */
    tablespace: string;
    /**
     * Tipo da restrição que criou esse índice, caso ele tenha
     * sido criado para validar a chave primária ou alguma outra restrição da tabela. Valores
     * possíveis: `'PRIMARY KEY'` ou `'UNIQUE'`.
     */
    constraintType: string;
    /**
     * Indica se o índice deve comprimir as chaves. Esse é um recurso
     * exclusivo do Oracle e é habilitado por meio da opção "COMPRESS" no comando de criação do índice.
     */
    compressed: boolean;
    /**
     * Chave da classe de dados onde o índice foi declarado, caso ele
     * tenha sido definido em um arquivo do tipo x-model ou x-class.
     */
    sourceClass: number | null;
    /**
     * Chave do registro que declarou o índice, caso ele tenha sido
     * definido por meio de um registro da classe "Índices" (-1898140003).
     */
    definitionKey: number | null;
    /**
     * Indica se o índice foi criado para a validação de
     * integridade referencial durante a exclusão de registros do sistema.
     */
    integrityCheck: boolean;
    /**
     * Indica se este índice foi desativado. Um índice pode ser
     * desativado automaticamente quando há outro índice que sobrepõe as colunas indexadas por ele
     * ou manualmente pelo administrador do sistema, quando for avaliado que o índice não gera
     * benefícios ao desempenho do sistema. Veja a propriedade {@link  #disableReason} para detalhes
     * do motivo pelo qual o índice foi desativado.
     */
    disabled: boolean;
    /**
     * Motivo pelo qual o índice foi desativado.
     */
    disableReason: string;
    /**
     * Erros na declaração deste índice que impedem a sua criação ou
     * atualização.
     */
    errors: string[];
    /**
     * Alertas que indicam a necessidade de revisar a definição deste
     * índice, mas que não impedem a sua criação ou atualização.
     */
    warnings: string[];
}
/**
 * Erro na definição de uma classe de dados.
 */
interface ClassDefError {
    /**
     * Chave da classe.
     */
    classKey: number;
    /**
     * Nome da classe.
     */
    className: string;
    /**
     * Caminho da classe.
     */
    classPath: string;
    /**
     * Nome da tabela associada à definição da classe de dados ou uma
     * string vazia caso não haja uma.
     */
    tableName: string;
    /**
     * Mensagem de erro.
     */
    error: string;
    /**
     * Pilha do erro convertida em uma string.
     */
    stackTrace: string;
}
/**
 * Informações do esquema declarado pelo modelo
 * de dados.
 */
interface DataModelSchemaInfo {
    /**
     * Erros observados durante a execução das definições
     * das classes de dados.
     */
    classDefErrors: ClassDefError[];
    /**
     * Tabelas do modelo de dados.
     */
    tables: TableInfo[];
    /**
     * Colunas das tabelas do modelo de dados.
     */
    tableColumns: Record<string, ColumnInfo[]>;
    /**
     * Índices das tabelas do modelo de dados.
     */
    tableIndexes: Record<string, IndexInfo[]>;
    /**
     * Nomes de outras tabelas que podem existir na
     * base de dados, mas que não são gerenciadas pelo sistema.
     */
    unmanagedTableNames: string[];
    /**
     * Nomes de colunas que podem existir em
     * tabelas do sistema e que não são gerenciadas pelo sistema.
     */
    unmanagedTableColumns: Record<string, string[]>;
    /**
     * Nomes de índices que podem estar
     * definidos em tabelas do sistema e que não são gerenciados pelo sistema.
     */
    unmanagedTableIndexes: Record<string, string[]>;
}
/**
 * Opções no processamento das definições das classes
 * de dados.
 */
interface DataModelSchemaOptions {
    /**
     * Classe a partir da qual será obtido o
     * modelo de dados. Caso não seja informada, será utilizada a classe Raiz (-2010000000).
     */
    baseClass: number;
    /**
     * Indica se os erros que impedem a construção
     * das definições de classes devem ser ignorados e apenas registrados em log. Por padrão, um erro
     * na construção de uma definição de classe irá interromper a execução dos métodos de obtenção
     * de informações sobre as tabelas, colunas e índices. No entanto, se esta opção estiver ativa,
     * esses métodos passam a ignorar esses erros e continuarão a avaliação do modelo de dados,
     * retornando todas as configurações não afetadas pelo erro. Ao utilizar esta opção, sempre
     * utilize o método {@link DataModelSchema#scanForClassDefErrors scanForClassDefErrors} para
     * consultar os erros que foram ignorados. Os retornos dos métodos de obtenção de informações
     * do modelo de dados devem ser considerados completos apenas se
     * {@link DataModelSchema#scanForClassDefErrors scanForClassDefErrors} não retornar erros.
     */
    ignoreClassDefErrors: boolean;
}
import TableCacheStrategy = require('../classdef/TableCacheStrategy.js');
