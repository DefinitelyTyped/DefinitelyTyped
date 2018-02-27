// TypeScript Version: 2.3
import { StoreClass, Store } from 'dispatchr';

interface StoreOptions {
    initialize?(): void;
    storeName: string;
    handlers: { [event: string]: string };
}

type CreateStoreOption = ThisType<Store> & StoreOptions & { [key: string]: any };

type CreateStore = (options: CreateStoreOption) => StoreClass;

declare const _: CreateStore;
export = _;
