import * as R from 'ramda';

() => {
  R.props(['x', 'y'], { x: 1, y: 2 }); // => [1, 2]
};
