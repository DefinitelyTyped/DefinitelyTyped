import { StoreClass, Store } from '../index';

interface StoreOptions {
    initialize?(): void;
    storeName: string;
    handlers: { [event: string]: string };
    [prop: string]: any;
}

type CreateStore = <This extends StoreOptions>(options: This & ThisType<This & Store>) => StoreClass;

declare const _: CreateStore;
export = _;
