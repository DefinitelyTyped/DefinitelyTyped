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
