import * as R from 'ramda';

function double(x: number): number {
  return x + x;
}

function shout(x: number): string {
  return x >= 10 ? 'big' : 'small';
}

() => {
  const func: (x: number) => string = R.pipe(
    double,
    double,
    shout,
  );
  const res: string = R.pipe(
    double,
    double,
    shout,
  )(10);

  const capitalize = (str: string) =>
    R.pipe(
      R.split(''),
      R.adjust(0, R.toUpper),
      R.join(''),
    )(str);

  const f = R.pipe(
    Math.pow,
    R.negate,
    R.inc,
  );
  const fr: number = f(3, 4); // -(3^4) + 1

  // pipe with first function taking no params
  const f10 = () => 'str';
  const f11 = (str: string) => str;
  const f12: () => string = R.pipe(
    f10,
    f11,
  );
};

(() => {
  function triple(x: number): number {
    return x * 3;
  }

  function square(x: number): number {
    return x * x;
  }

  const squareThenDoubleThenTriple = R.pipe(
    square,
    double,
    triple,
  );
  squareThenDoubleThenTriple(5); // => 150
})();

() => {
  function isEven(n: number) {
    return n % 2 === 0;
  }

  const a: R.Dictionary<number> = R.pipe(R.filter<number, 'object'>(isEven))({
    a: 0,
    b: 1,
  }); // => { a: 0 }

  const b: number[] = R.pipe(R.filter<number, 'array'>(isEven))([0, 1]); // => [0]

  const c: R.Dictionary<number> = R.pipe(R.reject<number, 'object'>(isEven))({
    a: 0,
    b: 1,
  }); // => { b: 1 }

  const d: number[] = R.pipe(R.reject<number, 'array'>(isEven))([0, 1]); // => [1]
};

() => {
  interface MyObject {
    id: string;
    quantity: number;
  }

  const reduceWithCombinedQuantities = (items: MyObject[]) =>
    items.reduce<MyObject>(
      (acc, item) => ({ ...item, quantity: acc.quantity + item.quantity }),
      { id: '', quantity: 0 },
    );

  const combineMyObjects = R.pipe(
    R.groupBy<MyObject>(s => s.id),
    R.values,
    R.map(reduceWithCombinedQuantities),
  );

  const combined = combineMyObjects([
    { id: 'foo', quantity: 4 },
    { id: 'bar', quantity: 3 },
    { id: 'foo', quantity: 2 },
  ]);

  return {
    id: combined[0].id,
    quantity: combined[0].quantity,
  };
};

() => {
  interface Book {
    id: string;
    title: string;
  }
  const list: Book[] = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }];
  const titlesIndexedByTitles: { [k: string]: string } = R.pipe(
    R.map((x: Book) => x.title),
    R.indexBy(x => x),
  )(list);
};

() => {
  interface Person {
    id: number;
    firstName: string;
    lastName: string;
  }
  const makeQuery = (email: string) => ({ query: { email } });
  const fetchMember = (query: any) =>
    Promise.resolve({ id: 1, firstName: 'Jon', lastName: 'Snow' });
  const getTitleAsync = (person: Person) =>
    person.firstName === 'Jon' && person.lastName === 'Snow'
      ? Promise.resolve('King in the North')
      : Promise.reject('Unknown');

  const getMemberName: (
    email: string,
  ) => Promise<{ firstName: string; lastName: string }> = R.pipe(
    makeQuery,
    fetchMember,
    R.andThen(R.pick(['firstName', 'lastName'])),
  );

  const getMemberTitle: (email: string) => Promise<string> = R.pipe(
    makeQuery,
    fetchMember,
    R.andThen(getTitleAsync),
  );
};

() => {
  interface Person {
    firstName: string;
    lastName: string;
  }
  const failedFetch = (id: string): Promise<Person> => Promise.reject('bad ID');
  const useDefault = (): Person => ({ firstName: 'Bob', lastName: 'Loblaw' });
  const loadAlternative = (): Promise<Person> =>
    Promise.resolve({ firstName: 'Saul', lastName: 'Goodman' });

  const recoverFromFailure: (
    id: string,
  ) => Promise<{ firstName: string; lastName: string }> = R.pipe(
    failedFetch,
    R.otherwise(useDefault),
    R.andThen(R.pick(['firstName', 'lastName'])),
  );

  const recoverFromFailureByAlternative: (
    id: string,
  ) => Promise<Person> = R.pipe(
    failedFetch,
    R.otherwise(useDefault),
    R.andThen(loadAlternative),
  );
};
