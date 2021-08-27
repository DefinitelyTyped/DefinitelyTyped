import level = require("level");

const testString = (db: level.LevelDB<string, string>) => {
    db.put("key1", "value");
    db.put("key2", "value", { something: true }, (err?: Error) => {});

    db.get("key1", (err?: Error) => {});
    db.get("key2", { something: true }, (err: Error | undefined, value: any) => {});
};

const testNumber = (db: level.LevelDB<number, string>) => {
    db.put(1, "value");
    db.put(2, "value", { something: true }, (err?: Error) => {});

    db.get(1, (err?: Error) => {});
    db.get(2, { something: true }, (err: Error | undefined, value: any) => {});
};

// $ExpectType void
testString(level("hereString", { something: true }, (err?: Error) => {}));

// $ExpectType void
testNumber(level("hereNumber", { something: true }, (err?: Error) => {}));
