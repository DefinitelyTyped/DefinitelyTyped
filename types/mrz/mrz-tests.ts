import { parse } from 'mrz';

const mrz = [
  'I<UTOD23145890<1233<<<<<<<<<<<',
  '7408122F1204159UTO<<<<<<<<<<<6',
  'ERIKSSON<<ANNA<MARIA<<<<<<<<<<'
];

// $ExpectType Result
parse(mrz);
