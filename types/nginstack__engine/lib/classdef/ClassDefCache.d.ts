export = ClassDefCache;
declare function ClassDefCache(): void;
declare class ClassDefCache {
    data_: any;
    set(id: string, value: any): void;
    get(id: string): any;
    getOrElse(id: string, func: () => any, opt_obj?: any): any;
    has(id: string): boolean;
}
