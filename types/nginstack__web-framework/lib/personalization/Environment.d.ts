export = Environment;
declare function Environment(environmentKey: any): void;
declare class Environment {
    constructor(environmentKey: any);
    titleLogon: string;
    menuBar: MenuBar;
    key: DBKey;
}
declare namespace Environment {
    function getInstance(userAgent: number, userKey: number): Environment;
}
import MenuBar = require("./MenuBar.js");
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
