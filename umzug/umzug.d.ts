// Type definitions for Umzug v1.7.0
// Project: https://github.com/sequelize/umzug
// Definitions by: Ivan Drinchev <https://github.com/drinchev/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />
/// <reference path="../sequelize/sequelize.d.ts" />

declare module "umzug" {

      import Sequelize = require("sequelize");

      interface MigrationOptions {

            /*
             * The params that gets passed to the migrations.
             * Might be an array or a synchronous function which returns an array.
             */
            params?: Array<any>;

            /** The path to the migrations directory. */
            path?: string;

            /** The pattern that determines whether or not a file is a migration. */
            pattern?: RegExp;

            /**
             * A function that receives and returns the to be executed function.
             * This can be used to modify the function.
             */
            wrap?: <T>( fn : T ) => T;

      }

      interface JSONStorageOptions {

            /**
             * The path to the json storage.
             * Defaults to process.cwd() + '/umzug.json';
             */
            path?: string;

      }

      interface SequelizeStorageOptions {

          /**
           * The configured instance of Sequelize.
           * Optional if `model` is passed.
           */
          sequelize?: Sequelize.Sequelize;

          /**
           * The to be used Sequelize model.
           * Must have column name matching `columnName` option
           * Optional of `sequelize` is passed.
           */
          model?: Sequelize.Model<any, any>;

          /**
           * The name of the to be used model.
           * Defaults to 'SequelizeMeta'
           */
          modelName?: string;

          /**
           * The name of table to create if `model` option is not supplied
           * Defaults to `modelName`
           */
          tableName?: string;

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

      interface ExecuteOptions {
            migrations?: Array<string>;
            method?: string;
      }

      interface UmzugOptions {

            /**
             * The storage.
             * Possible values: 'json', 'sequelize', an object
             */
            storage?: string;

            /**
             * The options for the storage.
             */
            storageOptions?: JSONStorageOptions | SequelizeStorageOptions | Object;

            /**
             * The logging function.
             * A function that gets executed everytime migrations start and have ended.
             */
            logging? : boolean | Function;

            /**
             * The name of the positive method in migrations.
             */
            upName? : string;

            /**
             * The name of the negative method in migrations.
             */
            downName? : string;

            /**
             * Options for defined migration
             */
            migrations? : MigrationOptions;

      }

      interface UpDownToOptions {

          /**
           * It is also possible to pass the name of a migration in order to
           * just run the migrations from the current state to the passed
           * migration name.
           */
          to: string;

      }

      interface UpDownMigrationsOptions {

          /**
           * Running specific migrations while ignoring the right order, can be
           * done like this:
           */
          migrations: Array<string>;

      }

      class Umzug {

          constructor(options?: UmzugOptions);

          /**
           * The execute method is a general purpose function that runs for
           * every specified migrations the respective function.
           */
          execute(options? : ExecuteOptions) : Promise<Array<string>>;

          /**
           * You can get a list of pending/not yet executed migrations like this:
           */
          pending() : Promise<Array<string>>;

          /**
           * You can get a list of already executed migrations like this:
           */
          executed() : Promise<Array<string>>;

          /**
           * The up method can be used to execute all pending migrations.
           */
          up(migration?: string) : Promise<string>;
          up(migrations?: Array<string>) : Promise<Array<string>>;
          up(options?: UpDownToOptions | UpDownMigrationsOptions ) : Promise<Array<string>>;

          /**
           * The down method can be used to revert the last executed migration.
           */
          down(migration?: string) : Promise<string>;
          down(migrations?: Array<string>) : Promise<Array<string>>;
          down(options?: UpDownToOptions | UpDownMigrationsOptions ) : Promise<Array<string>>;

      }

      var umzug : typeof Umzug;

      export = umzug;

}
