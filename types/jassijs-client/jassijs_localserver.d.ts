declare module "jassijs_localserver/DBManager" {
    import { ConnectionOptions, SaveOptions, FindConditions, FindOneOptions, ObjectType, ObjectID, FindManyOptions, Connection, EntitySchema } from "typeorm";
    import { DBObject } from "jassijs/remote/DBObject";
    import { User } from "jassijs/remote/security/User";
    import { Context } from "jassijs/remote/RemoteObject";
    export interface MyFindManyOptions<Entity = any> extends FindManyOptions {
        whereParams?: any;
        onlyColumns?: string[];
        order: {
            [field: string]: "ASC" | "DESC";
        };
    }
    /**
     * Database access with typeorm
     */
    global {
        export interface Serverservice {
            db: Promise<DBManager>;
        }
    }
    export class DBManager {
        waitForConnection: Promise<DBManager>;
        static getConOpts(): Promise<ConnectionOptions>;
        private static _get;
        private open;
        private mySync;
        private static clearMetadata;
        renewConnection(): Promise<void>;
        destroyConnection(waitForCompleteOpen?: boolean): Promise<void>;
        private static clearArray;
        private constructor();
        connection(): Connection;
        runSQL(context: Context, sql: string, parameters?: any[]): Promise<any>;
        remove<Entity>(context: Context, entity: Entity): Promise<void>;
        private addSaveTransaction;
        /**
       * insert a new object
       * @param obj - the object to insert
       */
        insert(context: Context, obj: DBObject): Promise<unknown>;
        /**
        * Saves all given entities in the database.
        * If entities do not exist in the database then inserts, otherwise updates.
        */
        save<Entity>(context: Context, entities: Entity[], options?: SaveOptions): Promise<Entity[]>;
        /**
         * Saves all given entities in the database.
         * If entities do not exist in the database then inserts, otherwise updates.
         */
        save<Entity>(context: Context, entity: Entity, options?: SaveOptions): Promise<Entity>;
        private _checkParentRightsForSave;
        findOne<Entity>(context: Context, entityClass: ObjectType<Entity> | EntitySchema<Entity>, id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity>): Promise<Entity | undefined>;
        /**
         * Finds first entity that matches given find options.
         */
        findOne<Entity>(context: Context, entityClass: ObjectType<Entity> | EntitySchema<Entity>, options?: FindOneOptions<Entity>): Promise<Entity | undefined>;
        /**
        * Finds first entity that matches given conditions.
        */
        findOne<Entity>(context: Context, entityClass: ObjectType<Entity> | EntitySchema<Entity>, conditions?: FindConditions<Entity>, options?: FindOneOptions<Entity>): Promise<Entity | undefined>;
        /**
       * Finds entities that match given options.
       */
        find<Entity>(context: Context, entityClass: ObjectType<Entity> | EntitySchema<Entity>, options?: MyFindManyOptions<Entity>): Promise<Entity[]>;
        /**
         * Finds entities that match given conditions.
         */
        find<Entity>(context: Context, entityClass: ObjectType<Entity> | EntitySchema<Entity>, conditions?: FindConditions<Entity>): Promise<Entity[]>;
        private resolveWildcharInRelations;
        createUser(context: Context, username: string, password: string): Promise<User>;
        login(context: Context, user: string, password: any): Promise<User>;
        checkParentRight(context: Context, entityClass: any, ids: any[]): Promise<boolean>;
    }
}
declare module "jassijs_localserver/Indexer" {
    import "jassijs_editor/util/Typescript";
    export abstract class Indexer {
        abstract fileExists(name: any): any;
        abstract readFile(name: any): any;
        abstract getFileTime(name: any): any;
        abstract createDirectory(name: any): any;
        abstract writeFile(name: string, content: string): any;
        abstract dirFiles(modul: string, path: string, extensions: string[], ignore: string[]): Promise<string[]>;
        updateModul(root: any, modul: string, isserver: boolean): Promise<void>;
        convertArgument(arg: any): any;
        collectAnnotations(node: ts.Node, outDecorations: any, depth?: number): void;
    }
}
declare module "jassijs_localserver/RegistryIndexer" {
    import { Indexer } from "jassijs_localserver/Indexer";
    export class RegistryIndexer extends Indexer {
        private static version;
        private mapcache;
        updateRegistry(): Promise<void>;
        dirFiles(modul: string, path: string, extensions: string[], ignore?: string[]): Promise<string[]>;
        writeFile(name: string, content: string): Promise<void>;
        createDirectory(name: string): Promise<void>;
        getFileTime(filename: any): Promise<number>;
        fileExists(filename: any): Promise<boolean>;
        readFile(filename: any): Promise<any>;
    }
}
declare module "jassijs_localserver/Filesystem" {
    import { Context } from "jassijs/remote/RemoteObject";
    class FileEntry {
        id: string;
        date: number;
        isDirectory?: boolean;
        data: any;
    }
    global {
        export interface Serverservice {
            filesystem: Promise<Filesystem>;
        }
    }
    export default class Filesystem {
        path: undefined;
        private static db;
        private static getDB;
        /**
         * exists a directory?
         * @param path
         */
        existsDirectory(path: string): Promise<boolean>;
        dirFiles(dir: string, extensions: string[], ignore?: string[]): Promise<string[]>;
        dirEntry(curdir?: string): Promise<FileEntry[]>;
        /**
         * @returns  [{name:"hallo",date:1566554},{name:"demo",files:[]}]
         */
        dir(curdir?: string, appendDate?: boolean): Promise<{
            name: string;
            files: any[];
        }>;
        createFile(filename: string, content: any): Promise<any>;
        saveFile(filename: any, content: any): Promise<any>;
        saveFiles(fileNames: string[], contents: any[], rollbackonerror?: boolean): any;
        loadFileEntry(fileName: string): Promise<FileEntry>;
        /**
        * deletes a server module (nothing to do on localserver)
        * @param modul - to delete
        */
        removeServerModul(modul: string): Promise<string>;
        /**
        * create a folder
        * @param filename - the name of the new file
        * @param content - then content
        */
        createFolder(filename: string): Promise<string>;
        /**
         * create a module
         * @param modulname - the name of the module
      
         */
        createModule(modulename: string): Promise<string>;
        loadFile(fileName: string): Promise<string>;
        loadFiles(fileNames: string[]): Promise<{}>;
        /**
        * deletes a file or directory
        * @param file - old filename
        */
        remove(file: string): Promise<string>;
        /**
         * zip a directory
         */
        zip(directoryname: string, serverdir?: boolean, context?: Context): Promise<any>;
        /**
         * renames a file or directory
         * @param oldfile - old filename
         * @param newfile - new filename
         */
        rename(oldfile: string, newfile: string): Promise<string>;
    }
    export function test2(): Promise<void>;
}
declare module "jassijs_localserver/TypeORMListener" {
    import { EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent } from "typeorm";
    export class TypeORMListener implements EntitySubscriberInterface {
        savetimer: any;
        saveDB(event: any): void;
        /**
         * Called after entity is loaded.
         */
        afterLoad(entity: any): void;
        /**
         * Called before post insertion.
         */
        beforeInsert(event: InsertEvent<any>): void;
        /**
         * Called after entity insertion.
         */
        afterInsert(event: InsertEvent<any>): void;
        /**
         * Called before entity update.
         */
        beforeUpdate(event: UpdateEvent<any>): void;
        /**
         * Called after entity update.
         */
        afterUpdate(event: UpdateEvent<any>): void;
        /**
         * Called before entity removal.
         */
        beforeRemove(event: RemoveEvent<any>): void;
        /**
         * Called after entity removal.
         */
        afterRemove(event: RemoveEvent<any>): void;
        /**
         * Called before transaction start.
         */
        beforeTransactionStart(event: any): void;
        /**
         * Called after transaction start.
         */
        afterTransactionStart(event: any): void;
        /**
         * Called before transaction commit.
         */
        beforeTransactionCommit(event: any): void;
        /**
         * Called after transaction commit.
         */
        afterTransactionCommit(event: any): void;
        /**
         * Called before transaction rollback.
         */
        beforeTransactionRollback(event: any): void;
        /**
         * Called after transaction rollback.
         */
        afterTransactionRollback(event: any): void;
    }
}
declare module "jassijs_localserver/DBManagerExt" {
    export function extendDBManager(): void;
}
declare module "jassijs_localserver/DatabaseSchema" {
    import { EntityOptions } from "typeorm";
    export function Entity(...param: any[]): Function;
    export function PrimaryGeneratedColumn(...param: any[]): Function;
    export function JoinColumn(...param: any[]): Function;
    export function JoinTable(...param: any[]): Function;
    export function Column(...param: any[]): Function;
    export function PrimaryColumn(...param: any[]): Function;
    export function OneToOne(...param: any[]): Function;
    export function OneToMany(...param: any[]): Function;
    export function ManyToOne(...param: any[]): Function;
    export function ManyToMany(...param: any[]): Function;
    export { EntityOptions };
}
declare module "jassijs_localserver/LocalProtocol" {
    import { Context } from "jassijs/remote/RemoteObject";
    import { RemoteProtocol } from "jassijs/remote/RemoteProtocol";
    export function localExec(prot: RemoteProtocol, context?: Context): Promise<any>;
}
declare module "jassijs_localserver/Testuser" {
    export class Testuser {
        id: number;
        firstname: string;
        lastname: string;
    }
}
declare module "jassijs_localserver/modul" {
    const _default: {
        loadbeforestart: string[];
        require: {
            paths: {
                jszip: string;
                "js-sql-parser": string;
                typeorm: string;
                typeormbrowser: string;
                "window.SQL": string;
            };
            shim: {};
        };
    };
    export default _default;
}
/// <amd-dependency name="JSZip" path="jszip" />
declare module "jassijs_localserver/ext/jzip" {
    var JSZip: any;
    export default JSZip;
}
