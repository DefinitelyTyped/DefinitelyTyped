import * as R from 'ramda';

() => {
  const incCount = R.ifElse(
    R.has('count'),
    R.over(R.lensProp('count'), R.inc),
    R.assoc('count', 1),
  );
  incCount({}); // => { count: 1 }
  incCount({ count: 1 }); // => { count: 2 }
  R.ifElse(
    R.identical,
    R.add as (a: number, b: number) => number,
    R.always(''),
  )(2, 2); // https://goo.gl/CVUSs9
};
