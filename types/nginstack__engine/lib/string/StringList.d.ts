export = StringList;
declare function StringList(): void;
declare class StringList {
    elements: any[];
    count: any;
    sorted: boolean;
    duplicates: any;
    strings(index: any): any;
    objects(index: any): any;
    getAllObjects(): any[];
    setString(index: any, string: any): void;
    setObject(index: any, object: any): void;
    clear(): void;
    deleteItem(index: any): void;
    exchange(index1: any, index2: any): void;
    find(string: any): Array<number | boolean>;
    findObjectsByString(string: any): any;
    indexOf(string: any): number;
    indexOfObject(object: any): number;
    add(string: any): void;
    addObject(string: any, object: any): void;
    insert(index: any, string: any): void;
    insertObject(index: any, string: any, object: any): void;
    addStringList(stringList: any): void;
    equals(stringList: any): boolean;
    getText(separator: any): string;
    sort(compareFunction: any): void;
}
