import * as R from 'ramda';

() => {
  class Point {
    constructor(public x: number, public y: number) {
      this.x = x;
      this.y = y;
    }

    toStringn() {
      return `new Point(${this.x}, ${this.y})`;
    }
  }
  R.toString(new Point(1, 2)); // => 'new Point(1, 2)'

  R.toString(42); // => '42'
  R.toString('abc'); // => '"abc"'
  R.toString([1, 2, 3]); // => '[1, 2, 3]'
  R.toString({ foo: 1, bar: 2, baz: 3 }); // => '{"bar": 2, "baz": 3, "foo": 1}'
  R.toString(new Date('2001-02-03T04:05:06Z')); // => 'new Date("2001-02-03T04:05:06.000Z")'
};
