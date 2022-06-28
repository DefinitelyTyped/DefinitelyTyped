import { AbstractLevelDOWN } from 'abstract-leveldown';

const test = (levelDown: AbstractLevelDOWN<any, string>) => {
  levelDown.put("key", "value", (err?) => { });
  levelDown.put(1, "value", { something: true }, (err?) => { });

  levelDown.get("key", (err?) => { });
  levelDown.get(1, { something: true }, (err?) => { });
};
// $ExpectType void
test(new AbstractLevelDOWN('here'));
// $ExpectType void
test(AbstractLevelDOWN('there'));
// $ExpectType void
test(new AbstractLevelDOWN<any, string>('here'));
// $ExpectType void
test(AbstractLevelDOWN<any, string>('there'));

const testMany = (levelDown: AbstractLevelDOWN<any, string>) => {
    levelDown.put("first", "this is the first value", (err?) => { });
    levelDown.put("second", "this is the second value", (err?) => { });
    levelDown.put("third", "this is the third value", (err?) => { });

    levelDown.getMany(["first", "second", "third"], (err?, value?) => { });
    levelDown.getMany(["first", "second", "third"], { something: true }, (err?, value?) => { });
  };
  // $ExpectType void
  testMany(new AbstractLevelDOWN('here'));
  // $ExpectType void
  testMany(AbstractLevelDOWN('there'));
  // $ExpectType void
  testMany(new AbstractLevelDOWN<any, string>('here'));
  // $ExpectType void
  testMany(AbstractLevelDOWN<any, string>('there'));

// Init db (in order to test properties/methods)
const db = new AbstractLevelDOWN('here');

// $ExpectType "open" | "new" | "opening" | "closing" | "closed" || "new" | "opening" | "open" | "closing" | "closed"
db.status;

// $ExpectType boolean
db.isOperational();
