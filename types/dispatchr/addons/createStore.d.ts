import { StoreClass, Store } from '../index';

type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

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
