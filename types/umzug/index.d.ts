// Type definitions for Umzug v2.3.0
// Project: https://github.com/sequelize/umzug
// Definitions by: Ivan Drinchev <https://github.com/drinchev>
//                 Margus Lamp <https://github.com/mlamp>
//                 Troy McKinnon <https://github.com/trodi>
//                 Emmanuel Gautier <https://github.com/emmanuelgautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import { EventEmitter } from 'events';
import Sequelize = require("sequelize");
import MongoDB = require("mongodb");

declare namespace umzug {

    interface MigrationOptions {

        /*
         * The params that gets passed to the migrations.
         * Might be an array or a synchronous function which returns an array.
         */
        params?: Array<any> | undefined;

        /** The path to the migrations directory. */
        path?: string | undefined;

        /** The pattern that determines whether or not a file is a migration. */
        pattern?: RegExp | undefined;

        /**
         * A function that receives and returns the to be executed function.
         * This can be used to modify the function.
         */
        wrap?: (<T>(fn: T) => T) | undefined;

        /**
         * A function that maps a file path to a migration object in the form
         * { up: Function, down: Function }. The default for this is to require(...)
         * the file as javascript, but you can use this to transpile TypeScript,
         * read raw sql etc.
         * See https://github.com/sequelize/umzug/tree/master/test/fixtures
         * for examples.
         */
        customResolver?(path: string): { up: () => PromiseLike<any>, down?: (() => PromiseLike<any>) | undefined };

    }

    /**
     * In order to keep track of already executed tasks, umzug logs successfully executed migrations.
     * This is done in order to allow rollbacks of tasks. This is the interface these `Storages` must
     * follow.
     */
    interface Storage {
        /**
         * Logs migration to be considered as executed.
         *
         * @param migrationName - Name of the migration to be logged.
         */
        logMigration(migrationName: string): Promise<void>;
        /**
         * Unlogs migration to be considered as pending.
         *
         * @param migrationName - Name of the migration to be unlogged.
         */
        unlogMigration(migrationName: string): Promise<void>;
        /** Gets list of executed migrations. */
        executed(): Promise<String[]>;
    }

    interface JSONStorageOptions extends Storage {

        /**
         * The path to the json storage.
         * Defaults to process.cwd() + '/umzug.json';
         */
        path?: string | undefined;

    }

    interface SequelizeStorageOptions extends Storage {

        /**
         * The configured instance of Sequelize.
         * Optional if `model` is passed.
         */
        sequelize?: Sequelize.Sequelize | undefined;

        /**
         * The to be used Sequelize model.
         * Must have column name matching `columnName` option
         * Optional of `sequelize` is passed.
         */
        model?: Sequelize.Model<any, any> | undefined;

        /**
         * The name of the to be used model.
         * Defaults to 'SequelizeMeta'
         */
        modelName?: string | undefined;

        /**
         * The name of table to create if `model` option is not supplied
         * Defaults to `modelName`
         */
        tableName?: string | undefined;

        /**
         * The name of table column holding migration name.
         * Defaults to 'name'.
         */
        columnName: string;

        /**
         * The type of the column holding migration name.
         * Defaults to `Sequelize.STRING`
         */
        columnType: Sequelize.DataTypeAbstract;

    }

    interface MongoDBStorageOptions extends Storage {

        /**
         * The MongoDB database connection instance.
         */
        connection?: MongoDB.Db | undefined;

        /**
         * The to be used Mongo collection cursor.
         * Defaults to collection created from collectionName attribute.
         */
        collection?: MongoDB.Collection | undefined;

        /**
         * The name of the collection used by the connection.
         * Defaults to 'migrations'
         */
        collectionName?: string | undefined;

    }

    interface ExecuteOptions {
        migrations?: Array<string> | undefined;
        method?: string | undefined;
    }

    interface UmzugOptions {
        /**
         * The storage.
         */
        storage?: "json" | "sequelize" | "mongodb" | Storage | undefined;

        /**
         * The options for the storage.
         */
        storageOptions?: JSONStorageOptions | SequelizeStorageOptions | MongoDBStorageOptions | Object | undefined;

        /**
         * The logging function.
         * A function that gets executed everytime migrations start and have ended.
         */
        logging?: boolean | Function | undefined;

        /**
         * The name of the positive method in migrations.
         */
        upName?: string | undefined;

        /**
         * The name of the negative method in migrations.
         */
        downName?: string | undefined;

        /**
         * Options for defined migration
         */
        migrations?: MigrationOptions | Migration[] | undefined;

    }

    interface UpToOptions {

        /**
         * It is also possible to pass the name of a migration in order to
         * just run the migrations from the current state to the passed
         * migration name.
         */
        to: string;

    }

    interface DownToOptions {

        /**
         * It is also possible to pass the name of a migration in order to
         * just run the migrations from the current state to the passed
         * migration name. down allows to pass 0 to revert everything.
         */
        to: string | 0;

    }

    interface UpDownMigrationsOptions {

        /**
         * Running specific migrations while ignoring the right order, can be
         * done like this:
         */
        migrations: Array<string>;

    }

    interface Migration {
        file: string;

        migration(): Promise<any>;
        up(): Promise<any>;
        down(): Promise<any>;
        testFileName(needle:string): boolean;
    }

    interface MigrationDefinitionWithName extends Migration {
        name: string;
    }

    interface Umzug extends EventEmitter {
        /**
         * The execute method is a general purpose function that runs for
         * every specified migrations the respective function.
         */
        execute(options?: ExecuteOptions): Promise<Migration[]>;

        /**
         * You can get a list of pending/not yet executed migrations like this:
         */
        pending(): Promise<Migration[]>;

        /**
         * You can get a list of already executed migrations like this:
         */
        executed(): Promise<Migration[]>;

        /**
         * The up method can be used to execute all pending migrations.
         */
        up(migration?: string): Promise<Migration[]>;
        up(migrations?: string[]): Promise<Migration[]>;
        up(options?: UpToOptions | UpDownMigrationsOptions): Promise<Migration[]>;

        /**
         * The down method can be used to revert the last executed migration.
         */
        down(migration?: string): Promise<Migration[]>;
        down(migrations?: string[]): Promise<Migration[]>;
        down(options?: DownToOptions | UpDownMigrationsOptions): Promise<Migration[]>;

        on(eventName: 'migrating' | 'reverting' | 'migrated' | 'reverted', cb?: (name: string, migration: Migration) => void): this;
        addListener(eventName: 'migrating' | 'reverting' | 'migrated' | 'reverted', cb?: (name: string, migration: Migration) => void): this;
        removeListener(eventName: 'migrating' | 'reverting' | 'migrated' | 'reverted', cb?: (name: string, migration: Migration) => void): this;

    }

    interface UmzugStatic {
        new(options?: UmzugOptions): Umzug;
        migrationsList: (migrations: MigrationDefinitionWithName[], parameters?: any[]) => Migration[];
    }
}

declare const umzug: umzug.UmzugStatic;
export = umzug;
