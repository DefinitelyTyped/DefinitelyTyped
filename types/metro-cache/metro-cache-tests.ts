import { AutoCleanFileStore, Cache, HttpGetStore } from 'metro-cache';

const stores = [
    new AutoCleanFileStore({
        root: '/root/cache',
    }),
    new HttpGetStore({
        endpoint: 'https://example.com',
    }),
];

const cache = new Cache(stores);
