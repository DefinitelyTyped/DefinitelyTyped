export = Theme;
declare function Theme(themeKey: any): void;
declare class Theme {
    constructor(themeKey: any);
    environmentCssFileKeys: any[];
    simpleLayoutCssFileKeys: DBKey[];
    highchartsOptionsFileKeys: DBKey[];
    directory: DBKey;
    key: DBKey;
    favIconFileKey: DBKey;
}
declare namespace Theme {
    function getInstance(userAgent: number, userKey: number): Theme;
    function getDirectories(): Array<{
        name: string;
        value: number;
    }>;
    function getCurrent(): Theme;
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
