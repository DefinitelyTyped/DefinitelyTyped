import * as R from 'ramda';

() => {
  const people = [
    { name: 'Agy', age: 33 },
    { name: 'Bib', age: 15 },
    { name: 'Cari', age: 16 },
  ];

  R.sortWith([R.ascend(R.prop('age')), R.descend(R.prop('name'))], people);
};
