import * as Sequelize from "sequelize";

declare namespace SequelizeFixtures {
    interface Options {
        encoding?: string | undefined;
        log?: ((message: string) => void) | undefined;
        transaction?: Sequelize.Transaction | undefined;
        transformFixtureDataFn?: ((data: any) => any) | undefined;
        modifyFixtureDataFn?: ((data: any) => any) | undefined;
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
