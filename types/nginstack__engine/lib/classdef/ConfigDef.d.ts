export = ConfigDef;
declare function ConfigDef(): void;
declare class ConfigDef {
    protected logger_: Logger;
    private vfsToCheckStrictMode_;
    toString(): string;
}
import Logger = require('../log/Logger.js');
