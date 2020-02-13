import LevelDOWN, { Bytes } from 'leveldown';

// Can use new, or not.
const a = new LevelDOWN("/tmp/db");
const b = LevelDOWN("/tmp/db");

const db = new LevelDOWN("/tmp/db");

db.open(() => {
  db.put("key", "value", (err: Error | undefined) => { });
  db.put(Buffer.from([1]), "value", { something: true }, (err: Error | undefined) => { });

  db.get("key", (err: Error | undefined) => { });
  db.get(Buffer.from([1]), { something: true }, (err: Error | undefined, value: Bytes) => { });

  db.close((err: Error | undefined) => { });
});

db.clear((err: Error | undefined) => { });

LevelDOWN.destroy("/tmp/db", (err: Error | undefined) => { });
LevelDOWN.repair("/tmp/db", (err: Error | undefined) => { });
