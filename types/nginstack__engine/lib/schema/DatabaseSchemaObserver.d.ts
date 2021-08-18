export = DatabaseSchemaObserver;
declare function DatabaseSchemaObserver(): void;
declare class DatabaseSchemaObserver {}
declare namespace DatabaseSchemaObserver {
    export { AddTableColumnsEvent, AlterTableColumnsEvent, DropTableColumnsEvent };
}
interface AddTableColumnsEvent {
    tableName: string;
    database: import('../database/Database');
    columns: Array<import('./DatabaseSchema').ColumnDef>;
}
interface AlterTableColumnsEvent {
    tableName: string;
    database: import('../database/Database');
    columns: Array<import('./DatabaseSchema').ColumnDef>;
}
interface DropTableColumnsEvent {
    tableName: string;
    database: import('../database/Database');
    columns: string[];
}
