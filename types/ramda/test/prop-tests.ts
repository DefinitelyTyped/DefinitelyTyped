import * as R from 'ramda';

() => {
  const x = R.prop('x');
};

() => {
  const x: number = R.prop('x', { x: 100 }); // => 100
  const obj = {
    str: 'string',
    num: 5,
  };

  const strVal: string = R.prop('str', obj); // => 'string'
  const numVal: number = R.prop('num', obj); // => 5

  const strValPl: string = R.prop(R.__, obj)('str'); // => 'string'

  const strValCur: string = R.prop('str')(obj); // => 'string'
  const numValCur: number = R.prop('num')(obj); // => 5
};

() => {
  const favorite = R.prop('favoriteLibrary');
};
