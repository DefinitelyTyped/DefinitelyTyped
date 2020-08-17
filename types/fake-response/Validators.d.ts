import { Config, Db, Globals, Injectors, UserDB } from "./model";
import { Utils } from "./utils";
export declare class Validators extends Utils {
    protected db?: UserDB;
    protected config?: Config;
    protected globals?: Globals;
    protected injectors?: Injectors[];
    isValidated: boolean;
    constructor(db?: UserDB, config?: Config, globals?: Globals, injectors?: Injectors[]);
    loadData: (userDb?: Db[] | object | string, userConfig?: Config, userGlobals?: Globals, userInjectors?: Injectors[]) => void;
    getValidData: (db?: UserDB, config?: Config, globals?: Globals, injectors?: Injectors[]) => {
        valid_db: Db[];
        valid_config: Config;
        valid_globals: Globals;
        valid_injectors: Injectors[];
    };
    getValidConfig: (config?: Config) => Config;
    getValidGlobals: (globals?: Globals) => Globals;
    getValidInjectors: (injectors: Injectors[]) => Injectors[];
    getValidDb: (db?: UserDB, injectors?: Injectors[]) => Db[];
    getValidDbList: (db?: Db[], injectors?: Injectors[]) => Db[];
    transformJson: (data?: object | string, injectors?: Injectors[]) => Db[];
    isValidURL: (str: string) => boolean;
    emptyMiddleware: ({ next }: {
        next: any;
    }) => void;
    parseUrl: (relativeUrl: string) => string;
    isDirectoryExist: (value: any) => any;
}
