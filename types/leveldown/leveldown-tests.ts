import LevelDOWN from 'leveldown';

// can use new, or not.
const a = new LevelDOWN("./tmp/leveldown");
const b = LevelDOWN("./tmp/leveldown");

const down = new LevelDOWN("./tmp/leveldown");

down.open(() => {
  down.put("key", "value", (err?) => { });
  down.put(Buffer.from([1]), "value", { something: true }, (err?) => { });

  down.get("key", (err?) => { });
  down.get(Buffer.from([1]), { something: true }, (err: Error | undefined, value: any) => { });

  down.close(() => {
    // do nothing
  });
});
