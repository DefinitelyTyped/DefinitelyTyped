export = DBKey;
declare function DBKey(key: any): void;
declare class DBKey {
    constructor(key: any);
    val(expr: string): string | number | null | boolean | Date;
    str(expr: string): string;
    num(expr: string): number;
    bool(expr: string): boolean;
    date(expr: string): Date | null;
    dbkey(expr: string): DBKey | null;
    equals(value: DBKey | string | number): boolean;
}
declare namespace DBKey {
    function isLike(value: any): boolean;
    function from(value: any): DBKey;
    function equals(a: string | number | DBKey, b: string | number | DBKey): boolean;
}
