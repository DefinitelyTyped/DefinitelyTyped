import * as R from 'ramda';

() => {
  // $ExpectType (Omit<{ name: string; hobbies: string[]; colors: string[]; }, "hobbies"> & Record<"hobbies", string>)[]
  R.unwind('hobbies', {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
  });
  // $ExpectType (Omit<{ name: string; hobbies: string[]; colors: string[]; }, "hobbies"> & Record<"hobbies", string>)[]
  R.unwind('hobbies')({
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
  });
  // [
  //   { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
  //   { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
  // ]
};
