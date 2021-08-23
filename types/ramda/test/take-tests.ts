import * as R from 'ramda';

() => {
  R.take(2, [1, 2, 3, 4]); // => [1, 2]
};

() => {
  R.take(3, [1, 2, 3, 4, 5]); // => [1,2,3]

  const members = [
    'Paul Desmond',
    'Bob Bates',
    'Joe Dodge',
    'Ron Crotty',
    'Lloyd Davis',
    'Joe Morello',
    'Norman Bates',
    'Eugene Wright',
    'Gerry Mulligan',
    'Jack Six',
    'Alan Dawson',
    'Darius Brubeck',
    'Chris Brubeck',
    'Dan Brubeck',
    'Bobby Militello',
    'Michael Moore',
    'Randy Jones',
  ];
  const takeFive = R.take(5);

  // $ExpectType string[]
  takeFive(members); // => ["Paul Desmond","Bob Bates","Joe Dodge","Ron Crotty","Lloyd Davis"]
};

() => {
  R.take(3, 'Example'); // => "Exa"

  const takeThree = R.take(3);
  takeThree('Example'); // => "Exa"
};
