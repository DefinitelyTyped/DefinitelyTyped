// Type definitions for anydb-sql
// Project: https://github.com/doxout/anydb-sql
// Definitions by: Gorgi Kosev <https://github.com/spion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />

declare module "anydb-sql" {
    import Promise = require('bluebird');

    interface AnyDBPool extends anydbSQL.DatabaseConnection {
        query:(text:string, values:any[], callback:(err:Error, result:any)=>void)=>void
        begin:()=>anydbSQL.Transaction
        close:(err:Error)=>void
    }

    interface Dictionary<T> { [key:string]:T; }

    module anydbSQL {
        export interface OrderByValueNode {}
        export interface ColumnDefinition {
            primaryKey?:boolean;
            dataType?:string;
            references?: {table:string; column: string}
            notNull?:boolean
        }

        export interface TableDefinition {
            name:string
            columns:Dictionary<ColumnDefinition>
            has?:Dictionary<{from:string; many?:boolean}>
        }


        export interface QueryLike {
            query:string;
            values: any[]
            text:string
        }
        export interface DatabaseConnection {
            queryAsync<T>(query:string, ...params:any[]):Promise<{rowCount:number;rows:T[]}>
            queryAsync<T>(query:QueryLike):Promise<{rowCount:number;rows:T[]}>
        }

        export interface Transaction extends DatabaseConnection {
            rollback():void
            commitAsync():Promise<void>
        }

        export interface SubQuery<T> {
            select(node:Column<T>):SubQuery<T>
            where(...nodes:any[]):SubQuery<T>
            from(table:TableNode):SubQuery<T>
            group(...nodes:any[]):SubQuery<T>
            order(criteria:OrderByValueNode):SubQuery<T>
            notExists(subQuery:SubQuery<any>):SubQuery<T>
        }

        interface Executable<T> {
            get():Promise<T>
            getWithin(tx:DatabaseConnection):Promise<T>
            exec():Promise<void>
            all():Promise<T[]>
            execWithin(tx:DatabaseConnection):Promise<void> 
            allWithin(tx:DatabaseConnection):Promise<T[]>
            toQuery():QueryLike;
        }

        interface Queryable<T> {
            where(...nodes:any[]):Query<T>
            delete():ModifyingQuery
            select<U>(...nodes:any[]):Query<U>
            selectDeep<U>(table: Table<T>): Query<T>
            selectDeep<U>(...nodesOrTables:any[]):Query<U>
        }

        export interface Query<T> extends Executable<T>, Queryable<T> {
            from(table:TableNode):Query<T>
            update(o:Dictionary<any>):ModifyingQuery
            update(o:{}):ModifyingQuery
            group(...nodes:any[]):Query<T>
            order(...criteria:OrderByValueNode[]):Query<T>
            limit(l:number):Query<T>
            offset(o:number):Query<T>
        }

        export interface ModifyingQuery extends Executable<void> {
            returning<U>(...nodes:any[]):Query<U>
            where(...nodes:any[]):ModifyingQuery
        }

        export interface TableNode {
            join(table:TableNode):JoinTableNode
            leftJoin(table:TableNode):JoinTableNode
        }

        export interface JoinTableNode extends TableNode {
            on(filter:BinaryNode):TableNode
            on(filter:string):TableNode
        }

        interface CreateQuery extends Executable<void> {
            ifNotExists():Executable<void>
        }
        interface DropQuery extends Executable<void> {
            ifExists():Executable<void>
        }
        export interface Table<T> extends TableNode, Queryable<T> {
            create():CreateQuery
            drop():DropQuery
            as(name:string):Table<T>
            update(o:any):ModifyingQuery
            insert(row:T):ModifyingQuery
            insert(rows:T[]):ModifyingQuery
            select():Query<T>
            select<U>(...nodes:any[]):Query<U>
            from<U>(table:TableNode):Query<U>
            star():Column<any>
            subQuery<U>():SubQuery<U>
            eventEmitter:{emit:(type:string, ...args:any[])=>void
                          on:(eventName:string, handler:Function)=>void}
            columns:Column<any>[]
            sql: SQL;
            alter():AlterQuery<T>
        }
        export interface AlterQuery<T> extends Executable<void> {
            addColumn(column:Column<any>): AlterQuery<T>;
            addColumn(name: string, options:string): AlterQuery<T>;
            dropColumn(column: Column<any>): AlterQuery<T>;
            renameColumn(column: Column<any>, newColumn: Column<any>):AlterQuery<T>;
            renameColumn(column: Column<any>, newName: string):AlterQuery<T>;
            renameColumn(name: string, newName: string):AlterQuery<T>;
            rename(newName: string): AlterQuery<T>
        }

        export interface SQL {
            functions: {
                LOWER(c:Column<string>):Column<string>
            }
        }

        export interface BinaryNode {
            and(node:BinaryNode):BinaryNode
            or(node:BinaryNode):BinaryNode
        }

        export interface Column<T> {
            in(arr:T[]):BinaryNode
            in(subQuery:SubQuery<T>):BinaryNode
            notIn(arr:T[]):BinaryNode
            equals(node:any):BinaryNode
            notEquals(node:any):BinaryNode
            gte(node:any):BinaryNode
            lte(node:any):BinaryNode
            gt(node:any):BinaryNode
            lt(node:any):BinaryNode
            like(str:string):BinaryNode
            multiply:{
                (node:Column<T>):Column<T>
                (n:number):Column<number>
            }
            isNull():BinaryNode
            isNotNull():BinaryNode
            sum():Column<number>
            count():Column<number>
            count(name:string):Column<number>
            distinct():Column<T>
            as(name:string):Column<T>
            ascending:OrderByValueNode
            descending:OrderByValueNode
            asc:OrderByValueNode
            desc:OrderByValueNode
        }

        export interface AnydbSql extends DatabaseConnection {
            define<T>(map:TableDefinition):Table<T>;
            transaction<T>(fn:(tx:Transaction)=>Promise<T>):Promise<T>
            allOf(...tables:Table<any>[]):any
            models:Dictionary<Table<any>>
            functions:{LOWER:(name:Column<string>)=>Column<string>
                       RTRIM:(name:Column<string>)=>Column<string>}
            makeFunction(name:string):Function
            begin():Transaction
            open():void;
            close():void;
            getPool():AnyDBPool;
            dialect():string;
        }
    }

    function anydbSQL(config:Object):anydbSQL.AnydbSql;

    export = anydbSQL;
}