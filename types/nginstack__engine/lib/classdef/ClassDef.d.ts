export = ClassDef;
declare function ClassDef(): void;
declare class ClassDef {
    protected logger_: Logger;
    protected evaluatingSource_: boolean;
    parentDef: ClassDef;
    classKey: number | null;
    key: number | null;
    private init;
    __proto__: ClassDef;
    private evalSource;
}
import Logger = require('../log/Logger.js');
