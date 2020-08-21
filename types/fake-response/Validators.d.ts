import { Config, Db, Globals, Injectors, UserDB, HAR } from './model';
import { Utils } from './utils';
export class Validators extends Utils {
    protected db?: UserDB;
    protected config?: Config;
    protected globals?: Globals;
    protected injectors?: Injectors[];
    isValidated: boolean;
    constructor(db?: UserDB, config?: Config, globals?: Globals, injectors?: Injectors[]);
    setData: (
        userDb?: Db[] | object | string,
        userConfig?: Config,
        userGlobals?: Globals,
        userInjectors?: Injectors[],
    ) => void;
    getData: () => {
        db: UserDB;
        config: Config;
        globals: Globals;
        injectors: Injectors[];
    };
    getValidConfig: (config?: Config) => Config;
    getValidGlobals: (globals?: Globals) => Globals;
    getValidInjectors: (injectors: Injectors[]) => Injectors[];
    getValidDb: (db?: UserDB, injectors?: Injectors[]) => Db[];
    getValidDbList: (db?: Db[], injectors?: Injectors[]) => Db[];
    transformJson: (data?: object | string, injectors?: Injectors[]) => Db[];
    transformHar: (harData?: HAR, filters?: string[]) => {};
    isValidURL: (str: string) => boolean;
    emptyMiddleware: ({ next }: { next: any }) => void;
    parseUrl: (relativeUrl: string) => string;
    isDirectoryExist: (value: any) => any;
}
