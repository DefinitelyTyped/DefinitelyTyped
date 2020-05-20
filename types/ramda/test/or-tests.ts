import * as R from 'ramda';

class Why {
  val: boolean;

  constructor(val: boolean) {
    this.val = val;
  }

  or(x: boolean) {
    return this.val && x;
  }
}
() => {
  const x0: boolean = R.or(false, true); // => false
  const x1: number | any[] = R.or(0, []); // => []
  const x2: number | any[] = R.or(0)([]); // => []
  const x3: string | null = R.or(null, ''); // => ''

  const why = new Why(true);
  why.or(true);
  const x4: Why | boolean = R.or(why, false); // false
};
