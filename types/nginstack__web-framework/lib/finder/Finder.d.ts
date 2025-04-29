export = Finder;
declare function Finder(): void;
declare class Finder {
    iVfs: DataSet;
    iClass: DataSet;
    findByClass: StringList;
    result: any[];
    dsResult: DataSet;
    private logger_;
    private classDefManager_;
    getChildrenWithoutFind(startClass: any): string;
    sortClass(cd1: any, cd2: any): 1 | 0 | -1;
    runFind(
        findObject: any,
        value: any,
        classKey: any,
        children: any,
        startClass: any,
        sender: any,
        speedFill: any,
        dsResult: any,
        ignoreDuplicatedOccurrences: any,
    ): void;
    getFindObject(classKey: any, onLookupAddResult: any, field: any): any;
    find(
        classKey: any,
        value: any,
        onLookupAddResult: any,
        field: any,
        isClassLookup: any,
        speedFill: any,
        dsResult: any,
        ignoreDuplicatedOccurrences: any,
    ): any;
}
declare namespace Finder {
    function getInstance(): Finder;
}
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
import StringList = require("@nginstack/engine/lib/string/StringList.js");
