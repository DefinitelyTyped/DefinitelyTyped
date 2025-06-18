// Make any object configurable
declare function configurable<T extends object>(obj: T): T & Configurable<T>;
export = configurable;

interface Configurable<T> {
    settings: {
        [key: string]: any;
    };

    set(name: string, val: any): T & Configurable<T>;

    get(name: string): any;

    enable(name: string): T & Configurable<T>;

    disable(name: string): T & Configurable<T>;

    enabled(name: string): boolean;

    disabled(name: string): boolean;
}
