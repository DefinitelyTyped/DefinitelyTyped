import * as R from 'ramda';

() => {
  const truncate = R.when(
    R.propSatisfies(R.flip(R.gt)(10), 'length'),
    R.pipe<string, string, string[], string>(
      R.take(10),
      R.append('…') as (wrong: any) => string[],
      R.join(''),
    ),
  );
  const a: string = truncate('12345'); // => '12345'
  const b: string = truncate('0123456789ABC'); // => '0123456789…'

  const addOneIfNotNil = R.when(
      R.complement(R.isNil),
      R.add(1)
  );

  const nil: undefined = addOneIfNotNil(undefined);
  const two: number = addOneIfNotNil(1);
};
