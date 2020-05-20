import RocksDB from 'rocksdb';

// can use 'new', or not.
const a = new RocksDB("./tmp/rocksdb");
const b = RocksDB("./tmp/rocksdb");

const down = new RocksDB("./tmp/rocksdb");

down.open(() => {
  down.put("key", "value", (err?) => { });
  down.put(Buffer.from([1]), "value", { something: true }, (err?) => { });

  down.get("key", (err?) => { });
  down.get(Buffer.from([1]), { something: true }, (err: Error | undefined, value: any) => { });

  down.close(() => {
    // do nothing
  });
});
