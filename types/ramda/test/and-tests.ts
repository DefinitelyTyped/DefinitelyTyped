import * as R from 'ramda';

() => {
  R.and(false, true); // => false
  R.and(0, []); // => 0
  R.and(0)([]); // => 0
  R.and(null, ''); // => null
  const Why: any = ((val: boolean) => {
    const why = {} as any;
    why.val = val;
    why.and = function(x: boolean) {
      return this.val && x;
    };
    return Why;
  })(true);
  const why = new Why(true);
  R.and(why, false); // false
};
