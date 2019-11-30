declare namespace IOSTContract {
    interface LocalStorage {
        put(key: string, value: string, payer?: string): any;
        get(key: string): string | null;
        has(key: string): boolean;
        del(key: string): void;
        mapPut(key: string, field: string, value: string, payer?: string): void;
        mapGet(key: string, field: string): string | null;
        mapHas(key: string, field: string): boolean;
        mapKeys(key: string): string[];
        mapLen(key: string): number;
        mapDel(key: string, field: string): void;
    }
    interface GlobalStorage {
        globalHas(contract: string, key: string): boolean;
        globalGet(contract: string, key: string): string | null;
        globalMapHas(contract: string, key: string, field: string): boolean;
        globalMapGet(contract: string, key: string, field: string): string | null;
        globalMapLen(contract: string, key: string): number;
        globalMapKeys(contract: string, key: string): string[];
    }
    interface Storage extends LocalStorage, GlobalStorage {
    }
}

declare const storage: IOSTContract.Storage;
