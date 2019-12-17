import * as R from 'ramda';

() => {
  interface Book {
    id: string;
    title: string;
  }
  const list: Book[] = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }];
  const a1 = R.indexBy(R.prop('id'), list);
  // Typescript 3.3 incorrectly gives `a2: {}`, 3.4 gives an error instead.
  // const a2 = R.indexBy(R.prop("id"))(list);
  const a3 = R.indexBy<{ id: string }>(R.prop('id'))(list);
  const a4 = R.indexBy(R.prop<'id', string>('id'))(list);
  const a5 = R.indexBy<{ id: string }>(R.prop<'id', string>('id'))(list);
};
