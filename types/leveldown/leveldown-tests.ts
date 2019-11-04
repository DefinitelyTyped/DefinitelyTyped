import LevelDOWN, { Bytes } from 'leveldown';

// Can use new, or not.
const a = new LevelDOWN("/tmp/db");
const b = LevelDOWN("/tmp/db");

const down = new LevelDOWN("/tmp/db");

down.open(() => {
  down.put("key", "value", (err: Error | undefined) => { });
  down.put(Buffer.from([1]), "value", { something: true }, (err: Error | undefined) => { });

  down.get("key", (err: Error | undefined) => { });
  down.get(Buffer.from([1]), { something: true }, (err: Error | undefined, value: Bytes) => { });

  down.close((err: Error | undefined) => {
    // do nothing
  });
});

down.destroy("/tmp/db", (err: Error | undefined) => { });
down.repair("/tmp/db", (err: Error | undefined) => { });
