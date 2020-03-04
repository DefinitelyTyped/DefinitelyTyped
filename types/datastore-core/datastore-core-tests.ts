import { Key, MemoryDatastore, Datastore } from 'interface-datastore';
import {
    KeytransformDatastore,
    MountDatastore,
    NamespaceDatastore,
    ShardingDatastore,
    TieredDatastore,
    shard
} from 'datastore-core';

const store: Datastore = new MemoryDatastore();

// KeytransformDatastore

const key = new Key('/z/one');
const transform = {
    convert(key: Key) {
        return new Key('/abc').child(key);
    },
    invert(key: Key) {
        const l = key.list();
        if (l[0] !== 'abc') {
            throw new Error('missing prefix, convert failed?');
        }
        return Key.withNamespaces(l.slice(1));
    }
};

const kStore = new KeytransformDatastore(store, transform);

(async () => {
    await kStore.put(key, Buffer.from(key.toString()));
    await kStore.get(key);
    await kStore.get(new Key('abc').child(key));
    for await (const { key, value } of store.query({})) {
        console.log(`${key.toString()}: ${value.toString()}`);
    }
    await kStore.close();
})();

const kt = new KeytransformDatastore(new MemoryDatastore(), transform);
console.log(kt.transform);
console.log(kt.child);

// MountDatastore

const m1 = new MountDatastore([]);
m1.put(new Key('hello'), Buffer.from('foo')).then(console.log);

const hello = Buffer.from('hello');
m1.put(new Key('/cool/hello'), hello).then(() => {
    m1.get(new Key('/hello')).then(console.log);
});

const m3 = new MountDatastore([{
    datastore: store,
    prefix: new Key('cool')
}]);

m3.put(new Key('/hello'), hello).then(() => {
    m3.get(new Key('/cool/hello')).then(value => {
        console.log(value);
    });
});

m3.put(new Key('/cool/hello'), hello).then(() => {
    m3.delete(new Key('/cool/hello')).then(() => {
        m3.has(new Key('/cool/hello')).then(exists => {
            console.log(exists); // false
            m3.has(new Key('/hello')).then(exists => {
                console.log(exists); // true
                m3.query({ prefix: '/cool' });
            });
        });
    });
});

const mount = new MountDatastore([{
    prefix: new Key('/a'),
    datastore: new MemoryDatastore()
}, {
    prefix: new Key('/z'),
        datastore: new MemoryDatastore()
}, {
    prefix: new Key('/q'),
        datastore: new MemoryDatastore()
}]);

console.log(mount.mounts);

// NamespaceDatastore

const n1 = new NamespaceDatastore(store, new Key('abc'));
const n2 = new NamespaceDatastore(store, new Key(''));

n1.put(key, Buffer.from(key.toString())).then(() => {
    n2.put(key, Buffer.from(key.toString())).then(() => {
        n1.get(new Key('abc').child(key)).then(async (value) => {
            for await (const { key, value } of n2.query({})) {
                console.log(key, value);
            }
        });
    });
});

const name = new NamespaceDatastore(new MemoryDatastore(), new Key('blah'));
console.log(name.prefix);
console.log(name.transform);
console.log(name.child);

// ShardingDatastore

const sh = new shard.NextToLast(2);
const ms = new MemoryDatastore();
ShardingDatastore.create(ms, sh).then(store => {
    ms.get(new Key(shard.SHARDING_FN)).then(console.log);
    ms.get(new Key(shard.README_FN)).then(console.log);
});

(async () => {
    await ShardingDatastore.create(ms, sh);
    await ShardingDatastore.open(ms);
    const ss = await ShardingDatastore.createOrOpen(ms, sh);
    await ShardingDatastore.createOrOpen(ms, sh);
    await ss.put(new Key('hello'), Buffer.from('test'));
    const res = await ms.get(new Key('ll').child(new Key('hello')));
    console.log(res);
});

ShardingDatastore.createOrOpen(new MemoryDatastore(), new shard.NextToLast(2)).then(test => {
    console.log(test);
});

// Shard

console.log(new shard.Prefix(2).fun('hello')); // he
console.log(new shard.Prefix(2).fun('h')); // h_
console.log(new shard.Prefix(2).toString()); // /repo/flatfs/shard/v1/prefix/2

console.log(new shard.Suffix(2).fun('hello')); // lo
console.log(new shard.Suffix(2).fun('h')); // _h
console.log(new shard.Suffix(2).toString()); // /repo/flatfs/shard/v1/suffix/2

console.log(new shard.NextToLast(2).fun('hello')); // ll
console.log(new shard.NextToLast(3).fun('he')); // __h
console.log(new shard.NextToLast(2).toString()); // /repo/flatfs/shard/v1/next-to-last/2

console.log(shard.parseShardFun('/repo/flatfs/shard/v1/prefix/10').name); // prefix

// TieredDatastore

const stores: Datastore[] = [];
stores.push(new MemoryDatastore());
stores.push(new MemoryDatastore());
const td1 = new TieredDatastore(stores);

td1.put(key, hello).then(() => {
    Promise.all(stores.map(store => store.get(key))).then(console.log);
});

stores[0].put(key, hello).then(() => {
    td1.get(key).then(() => {
        td1.has(key).then((exists: boolean) => {
            console.log(exists); // true
        });
    });
});

Promise.all([stores[0].has(key), stores[1].has(key)]).then(arr => {
    console.log(arr); // [true, true]
    td1.delete(key).then(() => {
        Promise.all([stores[0].has(key), stores[1].has(key)]).then(arr => {
            console.log(arr); // [false, false]
        });
    });
});

const td = new TieredDatastore([
    new MemoryDatastore(),
    new MemoryDatastore()
]);
console.log(td.stores);
