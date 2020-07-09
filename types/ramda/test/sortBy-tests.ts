import * as R from 'ramda';

() => {
  const sortByAgeDescending = R.sortBy(
    R.compose<{}, number, number>(
      R.negate,
      R.prop('age'),
    ),
  );
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];
  sortByAgeDescending(people); // => [alice, bob, clara]
};

() => {
  const sortByNameCaseInsensitive = R.sortBy(
    R.compose<Record<'name', string>, string, string>(
      R.toLower,
      R.prop('name'),
    ),
  );
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];
  sortByNameCaseInsensitive(people); // => [alice, bob, clara]
};
