import * as R from 'ramda';

() => {
  function mergeThree(a: number, b: number, c: number): number[] {
    return new Array<number>().concat(a, b, c);
  }

  mergeThree(1, 2, 3); // => [1, 2, 3]
  const flipped = R.flip(mergeThree);
  flipped(1, 2, 3); // => [2, 1, 3]
};

() => {
  const point = { x: 0, y: 0 };
  const pointHas = R.flip(R.has)(point);
  const b1: boolean = pointHas('x'); // => true
  const b2: boolean = pointHas('y'); // => true
  const b3: boolean = pointHas('z'); // => false
};

() => {
  class Rectangle {
    constructor(public width: number, public height: number) {
      this.width = width;
      this.height = height;
    }

    area(): number {
      return this.width * this.height;
    }
  }

  const square = new Rectangle(2, 2);
  R.flip(R.hasIn)(square)('area'); // => true
};

() => {
  const resetToDefault = R.flip(R.merge)({ x: 0 });
  resetToDefault({ x: 5, y: 2 }); // => {x: 0, y: 2}
};

() => {
  const half = R.flip(R.divide)(2);
  half(42); // => 21
};

() => {
  R.flip(R.gt)(2)(10); // => true
};

() => {
  R.flip(R.gte)(2)(10); // => true
};

() => {
  R.flip(R.lt)(5)(10); // => false // right-sectioned currying
};

() => {
  R.flip(R.lte)(2)(1); // => true
};

() => {
  const clock = R.flip(R.mathMod)(12);
  clock(15); // => 3
  clock(24); // => 0
};

() => {
  const point = { x: 0, y: 0 };
  const pointHas = R.flip(R.has)(point);
  pointHas('x'); // => true
  pointHas('y'); // => true
  pointHas('z'); // => false
};

() => {
  const isOdd = R.flip(R.modulo)(2);
  isOdd(42); // => 0
  isOdd(21); // => 1
};

() => {
  const minus5 = R.flip(R.subtract)(5);
  minus5(17); // => 12
};
