export = DatabaseSchemaObserver;
/**
 * Classe que permite observar as alterações no esquema de uma base de dados realizadas pela
 * classe {@link module:@nginstack/engine/lib/schema/DatabaseSchema~DatabaseSchema DatabaseSchema}.
 *
 * Atualmente é possível observar alterações por meio dos seguintes eventos:
 *
 * * 'addTableColumns': criação de colunas em uma tabela.
 * * 'alterTableColumns': alteração de colunas de uma tabela.
 * * 'dropTableColumns': remoção de colunas de uma tabela.
 *
 * Os nomes das tabelas, colunas, índices, visões e *triggers* informados pelos eventos
 * desta classe são normalizados em caixa baixa.
 * @constructor
 */
declare function DatabaseSchemaObserver(): void;
declare class DatabaseSchemaObserver {}
declare namespace DatabaseSchemaObserver {
    export { AddTableColumnsEvent, AlterTableColumnsEvent, DropTableColumnsEvent };
}
/**
 * Evento que indica que colunas foram adicionadas a uma
 * tabela.
 */
interface AddTableColumnsEvent {
    /**
     * Nome da tabela na qual as colunas foram adicionadas.
     */
    tableName: string;
    /**
     * Base de dados que teve o esquema modificado.
     */
    database: import('../database/Database');
    /**
     * Colunas que foram adicionadas na tabela.
     */
    columns: Array<import('./DatabaseSchema').ColumnDef>;
}
/**
 * Evento que indica que colunas foram modificadas em uma
 * tabela.
 */
interface AlterTableColumnsEvent {
    /**
     * Nome da tabela que teve as colunas alteradas.
     */
    tableName: string;
    /**
     * Base de dados que teve o esquema modificado.
     */
    database: import('../database/Database');
    /**
     * Colunas que foram alteradas na tabela.
     */
    columns: Array<import('./DatabaseSchema').ColumnDef>;
}
/**
 * Evento que indica que colunas foram removidas de uma
 * tabela.
 */
interface DropTableColumnsEvent {
    /**
     * Nome da tabela que teve as colunas removidas.
     */
    tableName: string;
    /**
     * Base de dados que teve o esquema modificado.
     */
    database: import('../database/Database');
    /**
     * Nome das colunas que foram removidas da tabela.
     */
    columns: string[];
}
