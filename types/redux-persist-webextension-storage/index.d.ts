interface StorageInterface {
    getItem(key: string): Promise<any>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: any): Promise<void>;
}

export const localStorage: StorageInterface;
export const syncStorage: StorageInterface;
export {};
