// Type definitions for Sequelize-Fixtures 0.6.0
// Project: https://github.com/domasx2/sequelize-fixtures
// Definitions by: Christian Schwarz <https://github.com/cschwarz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Sequelize from "sequelize";

declare namespace SequelizeFixtures {
    interface Options {
        encoding?: string,
        log?: (message: string) => void,
        transaction?: Sequelize.Transaction,
        transformFixtureDataFn?: (data: any) => any,
        modifyFixtureDataFn?: (data: any) => any
    }

    interface SequelizeFixturesStatic {
        loadFile(file: string, models: any, options?: Options): Promise<any>;
        loadFiles(files: string[], models: any, options?: Options): Promise<any>;
        loadFixture(fixture: any, models: any, options?: Options): Promise<any>;
        loadFixtures(fixtures: any[], models: any, options?: Options): Promise<any>;
    }
}

declare var sequelizeFixtures: SequelizeFixtures.SequelizeFixturesStatic;

export = sequelizeFixtures;
