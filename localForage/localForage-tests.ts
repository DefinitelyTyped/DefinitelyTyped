/// <reference path="localForage.d.ts" />

() => {

    localforage.setDriver(localforage.LOCALSTORAGE);
    localforage.setDriver([localforage.WEBSQL, localforage.INDEXEDDB]);

    localforage.config({
        driver: localforage.LOCALSTORAGE,
        name: 'lf',
        size: 1000000,
        storeName: 'name',
        version: 1.0,
        description: 'desc'
    });
    localforage.config({driver: [localforage.WEBSQL, localforage.INDEXEDDB]});

    var errArgCB = (err: string) => { console.log(err); };
    var nodeCB = (err: string, result: string) => { console.log(result); };
    var successCB = (result: string) => { console.log(result); };

    localforage.getItem('key', nodeCB);
    localforage.getItem('key').then(successCB, errArgCB);

    localforage.setItem('key', 'value', nodeCB);
    localforage.setItem('key', 'value').then(successCB, errArgCB);

    localforage.removeItem('key', errArgCB);
    localforage.removeItem('key').then(
        () => { console.log('removed'); },
        errArgCB
    );

    localforage.clear(errArgCB);
    localforage.clear().then(
        () => { console.log('cleared'); },
        errArgCB
    );

    localforage.key(0, nodeCB);
    localforage.key(0).then(successCB, errArgCB);

    localforage.keys((err: string, keys: [string]) => { console.log(keys); });
    localforage.keys().then(
        (keys: [string]) => { console.log(keys); },
        (err: string) => { console.log(err); }
    );

    localforage.length((err: string, numKeys: number) => { console.log(numKeys); });
    localforage.length().then(
        (numKeys: number) => { console.log(numKeys); },
        (err: string) => { console.log(err); }
    );
}
