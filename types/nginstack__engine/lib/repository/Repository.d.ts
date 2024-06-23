export = Repository;
declare function Repository(): void;
declare class Repository {
    has(name: string): boolean;
    get(name: string): any;
    set(name: string, value: any): void;
    delete(name: string): void;
}
