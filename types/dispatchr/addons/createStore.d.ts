import { StoreClass, Store } from '../index';

type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

interface StoreOptions {
    storeName: string;
    handlers: { [event: string]: string };
    statics?: { [prop: string]: any };
    mixins?: object[];
    initialize?(): void;
    dehydrate?(): any;
    rehydrate?(state: any): void;
}

// see: https://github.com/yahoo/fluxible/blob/dispatchr-v1.2.0/packages/dispatchr/addons/createStore.js#L9
type StoreThis<T extends StoreOptions> = Omit<T, 'statics'|'storeName'|'handlers'|'mixins'> & Store;

declare function createStore<T extends StoreOptions>(options: T & ThisType<StoreThis<T>>): StoreClass;
export = createStore;
