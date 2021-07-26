export = ConfigDef;
declare function ConfigDef(): void;
declare class ConfigDef {
    protected logger_: Logger;
    vfsToCheckStrictMode_: any;
    toString(): string;
}
import Logger = require('../log/Logger.js');
