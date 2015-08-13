// Type definitions for Sequelize-Fixtures 0.4.7
// Project: https://github.com/domasx2/sequelize-fixtures
// Definitions by: Christian Schwarz <https://github.com/cschwarz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../sequelize/sequelize.d.ts" />

declare module "sequelize-fixtures"
{
    import * as Sequelize from "sequelize";

    module SequelizeFixtures {
        interface Options {
            encoding?: string,
            log?: (message: string) => void,
            transaction?: Sequelize.Transaction,
            transformFixtureDataFn?: (data: any) => any
        }

        interface SequelizeFixturesStatic {
            loadFile(file: string, models: any, options?: Options): Sequelize.Promise;
            loadFiles(files: string[], models: any, options?: Options): Sequelize.Promise;
            loadFixture(fixture: any, models: any, options?: Options): Sequelize.Promise;
            loadFixtures(fixtures: any[], models: any, options?: Options): Sequelize.Promise;
        }
    }

    var sequelizeFixtures: SequelizeFixtures.SequelizeFixturesStatic;

    export = sequelizeFixtures;
}