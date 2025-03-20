export interface LocalStorage {
    readonly length: number;
    getItem(key: string): any;
    setItem(key: string, value: any): Promise<void>;
    removeItem(key: string): Promise<void>;
    key(index: number): any;
    clear(): void;
    print(): void;
}

export function localStorage(): LocalStorage;
