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
    function equals(a: DBKey | string | number, b: DBKey | string | number): boolean;
    function val(key: number | DBKey, expr: string): string | number | null | boolean | Date;
    function str(key: number | DBKey, expr: string): string;
    function num(key: number | DBKey, expr: string): number;
    function bool(key: number | DBKey, expr: string): boolean;
    function date(key: number | DBKey, expr: string): Date | null;
    function dbkey(key: number | DBKey, expr: string): DBKey | null;
}
