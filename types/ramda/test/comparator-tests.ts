import * as R from 'ramda';

() => {
  interface T {
    age: number;
  }
  const cmp = R.comparator((a: T, b: T) => a.age < b.age);
  const people = [
    { name: 'Agy', age: 33 },
    { name: 'Bib', age: 15 },
    { name: 'Cari', age: 16 },
  ];
  R.sort(cmp, people);
};
