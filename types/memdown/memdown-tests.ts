import MemDown from 'memdown';

const test = (db: MemDown<string, string>) => {
  db.open(() => {
    db.put("key", "value", (err?: Error) => { });
    db.get("key", (err?: Error) => { });
    db.get("key", (err: Error | undefined, value: string) => { });
    db.close(() => {});
  });
};

// doesn't need `new` and can be called as a function
test(new MemDown<string, string>());
test(new MemDown());
test(MemDown<string, string>());
test(MemDown());
